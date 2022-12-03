import React, { createContext, useContext, useReducer } from "react";

//Context Api is the third way to pass data between components without using props. read react documentation
// useReducer() is a hook as well as useContext(). Context should have wraper for the component as Provider and Consumer

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
