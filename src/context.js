import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pomades, setPomades] = useState([]);
  const [loadingPomades, setLoadingPomades] = useState(true);
  const [createProductData, setCreateProductData] = useState({});
  const [featuredPomades, setFeaturedPomades] = useState([]);
  // const [pomadeFields, setPomadeFields] = useState([]);

  const url = "http://localhost:5000/api/v1/products";

  const fetchPomades = async () => {
    setLoadingPomades(true);
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const { products } = await response.json();
      setPomades(products);
      setLoadingPomades(false);
    } catch (error) {
      console.log(error);
      setLoadingPomades(false);
    }
  };

  useEffect(() => {
    fetchPomades();
  }, [url]);

  useEffect(() => {
    const filterArray = pomades.filter((pomade) => {
      return pomade.featured === true;
    });
    setFeaturedPomades(filterArray);
  }, [pomades]);

  // useEffect(() => {
  //   getPomadeFields();
  // }, [pomades]);

  return (
    <AppContext.Provider
      value={{
        pomades,
        loadingPomades,
        setLoadingPomades,
        createProductData,
        setCreateProductData,
        featuredPomades,
        setFeaturedPomades,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
