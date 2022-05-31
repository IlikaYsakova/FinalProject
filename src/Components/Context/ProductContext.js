import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useParams } from "react-router-dom";
export const productContext = createContext();
const INIT_STATE = {
  products: [],
  productsDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productsDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const API = " http://localhost:8000/products";

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const getCardDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  };
  //функция для удаления топика
  const deleteCard = async (id) => {
    console.log("delete");
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //функция для изменения данных нашейм карточки
  const editCardFunc = async (id, editedCard) => {
    await axios.patch(`${API}/${id}`, editedCard);
    getProducts();
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        productsDetails: state.productsDetails,
        addProduct,
        getProducts,
        deleteCard,
        editCardFunc,
        getCardDetails,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
