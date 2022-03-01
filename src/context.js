import React, { useState, useContext } from "react";
import pomades from "./pomades";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider};