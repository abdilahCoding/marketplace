import {
  BUYER_SINGUP,
  FETCH_BUYER,
  BUYER_ERROR,
  BUEYR_SINGIN,
  BUYERSINGIN_ERROR

} from "../types";

export const buyerReducer = (state = {}, action) => {
  switch (action.type) {
    case BUYER_SINGUP:
      return {
        buyerSignup: action.payload,
        
      };

      case BUYER_ERROR:
        return {
          buyerError: action.payload,
          
        };
        case BUEYR_SINGIN:
          return {
            buyersSignin: action.payload.data,
            
          };
          case BUYERSINGIN_ERROR:
            return {
              buyerSigninError: action.payload,
              
            };
    case FETCH_BUYER:
      return { buyerInfo: action.payload };
    default:
      return state;
  }
};
