import { FETCH_PRODUCTS,ADD_PRODUCT } from "../types";
import axios from 'axios'
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const FetchCategories = () => async (dispatch) => {
  const res =  await axios.get('http://localhost:3000/api/product')
  const data = res.data
  // console.log(data.products);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.products,
  });
};


export const AddpC =  (data) =>  async (dispatch) => {

   const res =  await axios.post('http://localhost:3000/api/product/create',data)
        console.log(res.data);
        dispatch({ type: ADD_PRODUCT, payload: res.data });

    
};

