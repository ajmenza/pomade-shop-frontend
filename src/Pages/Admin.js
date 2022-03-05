import Header from "../Header/Header";
import "./Admin.css";
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import ProductField from "../Components/ProductField";

const Admin = () => {
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
          <ProductField label={"Product Name"} />
          <ProductField label={"Product Company"} />
          <ProductField label={"Product Type"} />
          <ProductField label={"Product Price"} />
          <ProductField label={"Pomade Hold"} />
        </form>
      </div>
    </>
  );
};

export default Admin;
