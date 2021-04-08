import { FETCH_BUYER,BUYER_SINGUP,BUYER_ERROR,BUEYR_SINGIN,BUYERSINGIN_ERROR} from "../types";
import axios from 'axios'
export const fetchBuyer = () => async (dispatch) => {
  const res =  await axios.get('http://localhost:3000/api/buyer')
  const data = res.data
  // console.log(data.products);
  dispatch({
    type: FETCH_BUYER,
    payload: data.products,
  });
};





export const buyerSingnup =  (data) =>  async (dispatch) => {
  axios.post('http://localhost:3000/api/buyer/singnup',data)
   .then(res =>{
     dispatch({ type: BUYER_SINGUP, payload: res });

   })        
   .catch(error =>{
     // console.log("here" + error.response.data);
     dispatch({ type: BUYER_ERROR, payload: error.response.data});

   })
   
};

export const buyerSingnin =  (data) =>  async (dispatch) => {
  axios.post('http://localhost:3000/api/buyer/singnin',data)
   .then(res =>{
     dispatch({ type: BUEYR_SINGIN, payload: res });

   })        
   .catch(error =>{
     // console.log("here" + error.response.data);
     dispatch({ type: BUYERSINGIN_ERROR, payload: error.response.data});

   })
   
};