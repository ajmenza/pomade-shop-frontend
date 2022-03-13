import Header from "../Header/Header";
import "./Admin.css";
import { useGlobalContext } from "../context";
import { useEffect, useState, useRef } from "react";
import ProductInputField from "../Components/ProductField";

const Admin = () => {
  const productCategoryRef = useRef(null);
  const { pomades, loadingPomades } = useGlobalContext();
  const [pomadeSelected, setPomadeSelected] = useState(false);
  const [pomadeFields, setPomadeFields] = useState([]);
  const [isImageError, setIsImageError] = useState(false);
  const { createProductData, setCreateProductData } = useGlobalContext();
  const [imageFile, setImageFile] = useState({});
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [uploadError, setUploadError] = useState(false);

  const handleSelect = () => {
    const productCategory = productCategoryRef.current.value;
    if (productCategory === "pomade") {
      setPomadeSelected(true);
      setCreateProductData({ ...createProductData, category: productCategory });
    } else {
      setPomadeSelected(false);
      let newCreateProductData = {
        ...createProductData,
        category: productCategory,
      };
      delete newCreateProductData.shine;
      delete newCreateProductData.hold;
      setCreateProductData(newCreateProductData);
    }
  };

  useEffect(() => {
    if (!loadingPomades) {
      setPomadeFields(Object.keys(pomades[0]));
    }
  }, []);

  useEffect(() => {
    if (productCategoryRef.current.value === "pomade") {
      setPomadeSelected(true);
    } else {
      setPomadeSelected(false);
    }
  }, [pomadeSelected]);

  const handleImage = (e) => {
    const imageFile = e.target.files[0];
    const imageData = new FormData();
    imageData.append("image", imageFile);
    setImageFile(imageData);
  };

  const uploadImage = async () => {
    try {
      const response = await fetch("/api/v1/products/uploads", {
        credentials: "include",
        method: "POST",
        body: imageFile,
      });
      const { image: { src } } = await response.json();
      console.log(src);
      setCreateProductData({ ...createProductData, image: src });
    } catch (error) {
      setIsImageError(true);
      console.log(error);
      setTimeout(() => {
        setIsImageError(false);
      }, 3000);
    }
  };

  // Uploads product to database
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await uploadImage();
      const response = await fetch("/api/v1/products", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(createProductData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const product = await response.json();
      // Incomplete fields error
      if (product.msg) {
        setUploadError(true);
        setTimeout(() => {
          setUploadError(false)
        }, 3000);
      }
      // setCreateProductData({});
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (isImageError) {

  //   }
  // }, [isImageError])

  return (
    <>
      <Header />
      <div className="admin-container">
        <h2 className="admin-title">Admin Dashboard</h2>
        <form className="create-product-form" onSubmit={addProduct}>
          <div className="product-form-grid-container">
            <div className="product-field">
              <label className="pomade-label" htmlFor="product-category">
                Product Category
              </label>
              <select
                className="product-input category-select"
                name="product-category"
                id="product-category"
                ref={productCategoryRef}
                onChange={handleSelect}
              >
                <option value="">-- Choose a category --</option>
                <option value="pomade">Pomade</option>
                <option value="other">Other</option>
              </select>
            </div>
            <ProductInputField label="Product Name" name="name" type="text" />
            {pomadeSelected && (
              <>
                <ProductInputField
                  label="Pomade Hold"
                  name="hold"
                  type="text"
                />
                <ProductInputField
                  label="Pomade Shine"
                  name="shine"
                  type="text"
                />
              </>
            )}
            <ProductInputField label="Product Scent" name="scent" type="text" />
            <ProductInputField
              label="Product Company"
              name="company"
              type="text"
            />
            <ProductInputField label="Product Type" name="type" type="text" />
            <ProductInputField label="Product Price" name="price" type="text" />
            <ProductInputField
              label="Product Description"
              name="description"
              type="text"
            />
            <div className="product-field">
              <label className="pomade-label" htmlFor="image">
                Product Image
              </label>
              <input
                className={`product-input ${isImageError && "image-upload-error"
                  }`}
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>
          <p>Upload successful!</p>
          <button className="add-product-btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
