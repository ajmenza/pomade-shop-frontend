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

  // if (pomades.length > 0) {
  //   const fields = Object.keys(pomades[0]);
  //   console.log(fields);
  // }

  // const getPomadeFields = () => {
  //   const fields = pomades[0];
  //   console.log(Object.keys(fields));
  // }

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
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const imageData = new FormData();
    imageData.append("image", imageFile);
    for (var value of imageData.entries()) {
      console.log(value);
    }
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/products/uploads",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: imageData,
        }
      );
      const response2 = await response.json();
      console.log(response2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <h2 className="admin-title">Admin Dashboard</h2>
        <form className="create-product-form">
          <label className="pomade-label" htmlFor="product-category">
            Product Category
          </label>
          <select
            className="pomade-field category-select"
            name="product-category"
            id="product-category"
            ref={productCategory}
            onChange={handleSelect}
          >
            <option value="">-- Choose a category --</option>
            <option value="pomade">Pomade</option>
            <option value="other">Other</option>
          </select>
          <ProductField label="Product Name" name="name" type="text" />
          <ProductField label="Product Company" name="company" type="text" />
          <ProductField label="Product Type" name="type" type="text" />
          <ProductField label="Product Price" name="price" type="text" />
          <ProductField
            label="Product Description"
            name="description"
            type="text"
          />
          <ProductField label="Pomade Hold" name="hold" type="text" />
          <ProductField label="Pomade Scent" name="scent" type="text" />
          <label className="pomade-label" htmlFor="image">
            Product Image
          </label>
          <input
            className="pomade-field"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </form>
      </div>
    </>
  );
};

export default Admin;
