import Header from "../Header/Header";
import "./Admin.css";
import { useGlobalContext } from "../context";
import { useEffect, useState, useRef } from "react";
import ProductField from "../Components/ProductField";

const Admin = () => {
  const productCategory = useRef(null);
  const { pomades, loadingPomades } = useGlobalContext();
  const [pomadeSelected, setPomadeSelected] = useState(false);
  const [pomadeFields, setPomadeFields] = useState([]);

  const handleSelect = () => {
    if (productCategory.current.value === "pomade") {
      setPomadeSelected(true);
    } else {
      setPomadeSelected(false);
    }
  };

  useEffect(() => {
    if (!loadingPomades) {
      setPomadeFields(Object.keys(pomades[0]));
    }
  }, []);

  useEffect(() => {
    if (productCategory.current.value === "pomade") {
      setPomadeSelected(true);
    } else {
      setPomadeSelected(false);
    }
  }, [pomadeSelected]);

  const handleImage = async (e) => {
    let productImage;
    const imageFile = e.target.files[0];
    const imageData = new FormData();
    imageData.append("image", imageFile);
    try {
      const response = await fetch(
        "/api/v1/products/uploads",
        {
          // credentials: "include",
          method: "POST",
          body: imageData,
        }
      );
      const { image: { src } } = await response.json();
      productImage = src;
    } catch (error) {
      productImage = null;
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <h2 className="admin-title">Admin Dashboard</h2>
        <form className="create-product-form">
          <div className="product-form-grid-container">
            <div className="product-field">
              <label className="pomade-label" htmlFor="product-category">
                Product Category
              </label>
              <select
                className="product-input category-select"
                name="product-category"
                id="product-category"
                ref={productCategory}
                onChange={handleSelect}
              >
                <option value="">-- Choose a category --</option>
                <option value="pomade">Pomade</option>
                <option value="other">Other</option>
              </select>
            </div>
            {pomadeSelected &&
              <>
                <ProductField label="Pomade Hold" name="hold" type="text" />
                <ProductField label="Pomade Scent" name="scent" type="text" />
              </>
            }
            <ProductField label="Product Name" name="name" type="text" />
            <ProductField label="Product Company" name="company" type="text" />
            <ProductField label="Product Type" name="type" type="text" />
            <ProductField label="Product Price" name="price" type="text" />
            <ProductField
              label="Product Description"
              name="description"
              type="text"
            />
          </div>

          <label className="product-image-label" htmlFor="image">
            Product Image
          </label>
          <input
            className="product-input"
            id="image"
            type="file"
            accept="image/*"
            onSubmit={handleImage}
          />
        </form>
      </div>
    </>
  );
};

export default Admin;
