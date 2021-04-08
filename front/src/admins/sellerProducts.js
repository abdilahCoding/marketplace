
import React,{useEffect} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { fetchSellerProducts } from "../actions/productActions";
import '../components/styles/css/easion.css'
 function SellerProducts(props) {
    
    useEffect(() => {   
      props.fetchSellerProducts();
     
       
      },[]);
    return (
        
      <div class="dash">
        <div class="dash-nav dash-nav-dark">
            <header>
                <a href="#!" class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </a>
                <a href="index.html" class="easion-logo"><i class="fas fa-sun"></i> <span>Easion</span></a>
            </header>
            <nav class="dash-nav-list">
                <a href="/seller/Dashboard" class="dash-nav-item">
                    <i class="fas fa-home"></i> Dashboard </a>
            
                
                    <a href="/seller/AddProducts" class="dash-nav-item">
                        <i class="fas fa-cube"></i> Add Products </a>
                        <a href="/seller/MyProducts" class="dash-nav-item">
                        <i class="fas fa-cube"></i> MY Products </a>
                  
             
                    <a href="#!" class="dash-nav-item">
                        <i class="fas fa-file"></i> Layouts </a>
                    
                
            </nav>
        </div>
        <div class="dash-app">
            {/* <header class="dash-toolbar">
                <a href="#!" class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </a>
                <a href="#!" class="searchbox-toggle">
                    <i class="fas fa-search"></i>
                </a>
                <form class="searchbox" action="#!">
                    <a href="#!" class="searchbox-toggle"> <i class="fas fa-arrow-left"></i> </a>
                    <button type="submit" class="searchbox-submit"> <i class="fas fa-search"></i> </button>
                    <input type="text" class="searchbox-input" placeholder="type to search" />
                </form>
                <div class="tools">
                    <a href="https://github.com/subet/easion" target="_blank" class="tools-item">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#!" class="tools-item">
                        <i class="fas fa-bell"></i>
                        <i class="tools-item-count">4</i>
                    </a>
                    <div class="dropdown tools-item">
                        <a href="#" class="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <a class="dropdown-item" href="#!">Profile</a>
                            <a class="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </header> */}
            <main class="dash-content">
                <div class="container-fluid">
                {/* <div class="row g-2">
        
        <div class="col-md-12">
                    {console.log(props.getproducts )}
  { 
                props.getproducts ?
         
         props.getproducts.productsByIdSeller.map(item =>( 
        
 <div class="col-md-4">
                     <div class="product py-4"> <span class="off bg-success">-25% OFF</span>
                         <div class="text-center"> <img src={item.image} width="200" /> </div>
                         <div class="about text-center">
                             <h5>{item.description}</h5> <span>${item.price}</span>
                         </div>
                         <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button class="btn btn-primary cart-cart text-uppercase">Add to cart</button>
                             <div class="add"> <span class="product_fav"><i class="fas fa-heart"></i></span> <span class="product_fav"><i class="fab fa-opencart"></i></span> </div>
                         </div>
                     </div>
                 </div>
 
 
 
 )
 
 ) : "null" }
 
 </div> */}
 {/* </div> */}



 <div className="row" id="product">

{

        props.getproducts ?
  props.getproducts.productsByIdSeller.map((item)=> {
    return(
      <div className="col-md-4" key={item._id}>
      <Link to={'/productDetails/'+ item._id} className="productScreen" >
      <div className="card rounded h-100">
          <div className="card-image">
              {/* <span className="card-notify-badge">{product.name}</span> */}
              <span className="card-notify-year">-20%</span>
              <img className="img-fluid" src={item.image} alt="" />
          </div>

          <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}$</p>

          </div>
          </div>
      </Link>
   </div>
    )
  }

    ): "null"
}

</div>








 </div>
            </main>
        </div>
    </div>

)
    }

    export default connect((state) => 
	({ getproducts: state.products.getProducts,errorProducts: state.products.getProductsError}),{fetchSellerProducts})(SellerProducts);
