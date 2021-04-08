import './App.css';
import Header from './components/header';
import store from "./store";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Products from './components/product';
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import CheckPass from './components/check';
import DashAdmin from './admins/dashboard';
import SellerAddProducts from './admins/addProducts';
import loginBuyer from './components/loginBuyer';
import sellerProducts from './admins/sellerProducts';



function App() {
  return (
    <Provider store={store}>
    <Router>
     
    <div className="App">
    <Header />
<Switch>
<Route path="/" exact   component={Home}/>
<Route path="/login"    component={Login}/>
<Route path="/loginBuyer"    component={loginBuyer}/>
<Route path="/register"    component={Register}/>
<Route path="/verify/:token"    component={CheckPass}/>
<Route path="/products" exact   component={Products}/>
<Route path="/seller/Dashboard" exact   component={DashAdmin}/>
<Route path="/seller/AddProducts" exact   component={SellerAddProducts}/>
<Route path="/seller/MyProducts" exact   component={sellerProducts}/>


{/* <Dash path="/dashbord"    component={Admin}/> */}
{/* <Route component={NotFound}/> */}
</Switch>

    </div>


    </Router>
    </Provider>
  );
}

export default App;
