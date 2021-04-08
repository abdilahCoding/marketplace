import {
  CHECK
} from "../types";

export const checkPassReducers = (state = {}, action) => {
  switch (action.type) {
    case CHECK:
      return {
        checkPass: action.payload,
        
      };
      default:
      return state;
   

}
}