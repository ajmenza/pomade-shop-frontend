import Header from "../Header/Header";
import "./Admin.css";
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import ProductField from "../Components/ProductField";

const Admin = () => {
  // const pomadeCategory = useRef(false);
  const { pomades, loadingPomades } = useGlobalContext();
  const [pomadeFields, setPomadeFields] = useState([]);

  // if (pomades.length > 0) {
  //   const fields = Object.keys(pomades[0]);
  //   console.log(fields);
  // }

  // const getPomadeFields = () => {
  //   const fields = pomades[0];
  //   console.log(Object.keys(fields));
  // }

  useEffect(() => {
    if (!loadingPomades) {
      setPomadeFields(Object.keys(pomades[0]));
    }
    console.log(pomadeFields);
  }, []);

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
          >
            <option className="category-option" value="">
              -- Choose a category --
            </option>
            <option className="category-option" value="pomade">
              Pomade
            </option>
            <option className="category-option" value="other">
              Other
            </option>
          </select>
          <ProductField label={"Product Name"} name="name" type={"text"} />
          <ProductField
            label={"Product Company"}
            name="company"
            type={"text"}
          />
          <ProductField label={"Product Type"} name="type" type={"text"} />
          <ProductField label={"Product Price"} name="price" type={"text"} />
          <ProductField label={"Pomade Hold"} name="hold" type={"text"} />
          <ProductField label={"Pomade Hold"} name="hold" type={"text"} />
        </form>
      </div>
    </>
  );
};

export default Admin;
