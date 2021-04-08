import {
  SELLER_SINGUP,
  FETCH_SELLER,
  SELLER_ERROR,
  SELLER_SINGIN,
  SELLERSINGIN_ERROR
} from "../types";


export const sellerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_SINGUP:
      return {
        sellerSignup: action.payload,
        
      };
      case SELLER_ERROR:          
        return {
          sellerError: action.payload,
          
          
        };
        case SELLER_SINGIN:          
        return {
          sellerSignin: action.payload.data,
          
          
        };
        case SELLERSINGIN_ERROR:          
        return {
          sellerSigninError: action.payload,
          
          
        };
    case FETCH_SELLER:
      return { sellerInfo: action.payload };
    default:
      return state;
  }
};
