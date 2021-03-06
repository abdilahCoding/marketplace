import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
import { sellerReducer } from "./reducers/sellerReducers";
import { buyerReducer } from "./reducers/buyerReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";
import { checkPassReducers } from "./reducers/checkReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    seller:sellerReducer,
    buyer:buyerReducer,
    check:checkPassReducers,
    // categories: categories,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
