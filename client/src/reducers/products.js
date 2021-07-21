import axios from "axios";

export const PRODUCTS = "PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// REDUX ACTIONS

// keep in redux thunk middleware is in action
export const getProducts = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get("api/products");
      // want to dispatch action
      dispatch({ type: PRODUCTS, products: res.data });
    } catch (err) {
      console.log(err);
      alert("err");
    }
  };
};

export const addProduct = (product) => {
  console.log(product);
  return async (dispatch) => {
    let res = await axios.post("/api/products", product);
    dispatch({ type: ADD_PRODUCT, product: res.data });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    let res = await axios.delete(`/api/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, id: res.data.id });
  };
};

const products = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [action.product, ...state];
    case DELETE_PRODUCT:
      return state.filter((p) => p.id !== action.id);
    default:
      return state;
  }
};

export default products;
