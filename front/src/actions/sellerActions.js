import { FETCH_SELLER,SELLER_SINGUP,SELLER_ERROR,SELLER_SINGIN,SELLERSINGIN_ERROR } from "../types";
import axios from 'axios'
export const fetchSeller = () => async (dispatch) => {
  const res =  await axios.get('http://localhost:3000/api/seller')
  const data = res.data
  // console.log(data.products);
  dispatch({
    type: FETCH_SELLER,
    payload: data.products,
  });
};


// export const sellerSingnup =  (data) =>  async (dispatch) => {
//   console.log(data);
//    const res =  await axios.post('http://localhost:3000/api/seller/singnup',data)
//         console.log(res.data);
//         dispatch({ type: SELLER_SINGUP, payload: res.data });

    
// };

export const sellerSingnup =  (data) =>  async (dispatch) => {
   axios.post('http://localhost:3000/api/seller/singnup',data)
    .then(res =>{
      dispatch({ type: SELLER_SINGUP, payload: res });

    })        
    .catch(error =>{
      // console.log("here" + error.response.data);
      dispatch({ type: SELLER_ERROR, payload: error.response.data});

    })
    
};

export const sellerSingnin =  (data) =>  async (dispatch) => {
  axios.post('http://localhost:3000/api/seller/singnin',data)
   .then(res =>{
     dispatch({ type: SELLER_SINGIN, payload: res });

   })        
   .catch(error =>{
     // console.log("here" + error.response.data);
     dispatch({ type: SELLERSINGIN_ERROR, payload: error.response.data});

   })
   
};