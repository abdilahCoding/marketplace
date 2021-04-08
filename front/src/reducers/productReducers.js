import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  FECH_SEELER_PRO,
  FECH_SEELER_PRO_ERROR
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        addProducts: action.payload,
        
      };
      case FECH_SEELER_PRO:
        return {
          getProducts: action.payload.data,
          
        };
        case FECH_SEELER_PRO_ERROR:
          return {
            getProductsError: action.payload,
            
          };
    
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
