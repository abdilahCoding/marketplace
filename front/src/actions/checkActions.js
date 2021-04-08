import {CHECK } from "../types";
import axios from 'axios'

export const checkNewPass =  (data) =>  async (dispatch) => {

  const res =  await axios.post('http://127.0.0.1:3000/api/verify',data)
       console.log(res.data);
       dispatch({ type: CHECK, payload: res.data });

   
};