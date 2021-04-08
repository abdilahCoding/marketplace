
import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import AddProducts  from "./addProducts";


 function Products(props) {

  useEffect(() => {   
  props.fetchProducts()
 
},[]); 
    return (
        <div class="container mt-5 mb-5">
    <AddProducts />
    <div class="row g-2">
        
        <div class="col-md-12">
           
               {
                   console.log(props.products)
               }
             {

        props.products ?
         
        props.products.map(item =>( 
       
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


      </div>
               
         
           
   </div>
</div>


/* <div class="container mt-5 mb-5">
    <AddProducts />
    <div class="row g-2">
        
        <div class="col-md-12">
            <div class="row g-2">
        
                <div class="col-md-4">
                    <div class="product py-4"> <span class="off bg-success">-25% OFF</span>
                        <div class="text-center"> <img src="https://i.imgur.com/nOFet9u.jpg" width="200" /> </div>
                        <div class="about text-center">
                            <h5>XRD Active Shoes</h5> <span>$1,999.99</span>
                        </div>
                        <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button class="btn btn-primary cart-cart text-uppercase">Add to cart</button>
                            <div class="add"> <span class="product_fav"><i class="fas fa-heart"></i></span> <span class="product_fav"><i class="fab fa-opencart"></i></span> </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product py-4"> <span class="off bg-success">-25% OFF</span>
                        <div class="text-center"> <img src="https://i.imgur.com/nOFet9u.jpg" width="200" /> </div>
                        <div class="about text-center">
                            <h5>XRD Active Shoes</h5> <span>$1,999.99</span>
                        </div>
                        <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button class="btn btn-primary cart-cart text-uppercase">Add to cart</button>
                            <div class="add"> <span class="product_fav"><i class="fas fa-heart"></i></span> <span class="product_fav"><i class="fab fa-opencart"></i></span> </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="product py-4"> <span class="off bg-success">-25% OFF</span>
                        <div class="text-center"> <img src="https://i.imgur.com/nOFet9u.jpg" width="200" /> </div>
                        <div class="about text-center">
                            <h5>XRD Active Shoes</h5> <span>$1,999.99</span>
                        </div>
                        <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button class="btn btn-primary cart-cart text-uppercase">Add to cart</button>
                            <div class="add"> <span class="product_fav"><i class="fas fa-heart"></i></span> <span class="product_fav"><i class="fab fa-opencart"></i></span> </div>
                        </div>
                    </div>
                </div> 
               
 */












     


















  


























       /* <div>
       <AddProducts /> */
     
/* 
    {console.log(props.products)}
  

       { */

/* 

           props.products ?
         
         props.products.map(item =>(
        
<div className="col-lg-4 col-12 mb-3 " key={item._id}>
  
 <div className="card-body">
   <h3 className="card-title text-center">{item.price}</h3>
   <h3 className="card-title text-center"></h3>
   <img src={go + item.image.data.data.toString("ascii")} />
   
                
 </div>


</div> *//*  


)

) : "null"}

        </div> */
    )
}

export default connect((state) => 
	({ products: state.products.filteredItems }),
  {
    fetchProducts,
  
  }
)(Products);