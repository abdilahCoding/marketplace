import { FETCH_PRODUCTS,ADD_PRODUCT,SELLERADDPRO_ERROR,FECH_SEELER_PRO_ERROR,FECH_SEELER_PRO } from "../types";
import axios from 'axios'
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";
const access_token =  localStorage.getItem('jwt_seller');

export const fetchProducts = () => async (dispatch) => {
  const res =  await axios.get('http://localhost:3000/api/product')
  const data = res.data
  // console.log(data.products);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.products,
  });
};

export const fetchSellerProducts = () => async (dispatch) => {
  const res =  await axios.get('http://localhost:3000/api/product/sellerProduct',{
    headers: {
      'auth-token': access_token
    }
    
    }).then(res =>{
      dispatch({ type: FECH_SEELER_PRO, payload: res });
      console.log("products" + JSON.stringify(res));

   })        
   .catch(error =>{
     console.log("here aoub " + error);
     dispatch({ type: FECH_SEELER_PRO_ERROR, payload: error});

   }) // console.log(data.products);

};


export const addproduct =  (data) =>  async (dispatch) => {



   const res =  await axios.post('http://localhost:3000/api/product/addProduct',data,{
    headers: {
      'auth-token': access_token
    }
    
    }).then(res =>{
      dispatch({ type: ADD_PRODUCT, payload: res.data });

   })        
   .catch(error =>{
     // console.log("here" + error.response.data);
     dispatch({ type: SELLERADDPRO_ERROR, payload: error.response.data});

   })
       
        

    
};


export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
