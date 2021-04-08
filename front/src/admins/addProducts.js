
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import { addproduct } from "../actions/productActions";
import '../components/styles/css/easion.css'
 function AddProducts(props) {
    const data =JSON.parse(localStorage.getItem("seller"));



    const { register, handleSubmit, errors } = useForm(); // initialize the hook


    const onSubmit = async (data,e) => {
        let id = JSON.parse(localStorage.getItem('seller'))
        let sellerId = id._id
        console.log(sellerId);
          let res = new FormData() 
               res.append('name',data.name)
               res.append('description',data.description)
               res.append('quantity',data.quantity)
               res.append('price',data.price)
               res.append('image',data.image[0])
               res.append('sellerItems',sellerId)
           
     let hh = props.addproduct(res)
     console.log(hh);
        e.target.reset();
        
    
    };



 
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
                    <div class="row dash-row">
                        <div class="col-xl-12">
                        
                                                 
<h1 class="text-center">Add Product</h1>
<form onSubmit={handleSubmit(onSubmit)}  class="isnertPatient" >        
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >name</label>
      <input type="text" name="name" class="form-control" placeholder="Enter a Name"  ref={register({ required: true })}/>
    </div>
    <div class="form-group col-md-6">
      <label >description</label>
      <input type="text" name="description" class="form-control" placeholder="Enter a description" ref={register({ required: true })} />
    </div>
    <div class="form-group col-md-6">
      <label >price</label>
      <input type="text" name="price" class="form-control" ref={register({ required: true })}  />
    </div>
    <div class="form-group col-md-6">
      <label >quantity</label>
      <input type="number" name="quantity" class="form-control"  ref={register({ pattern: /\d+/ })}  />
    </div>
    <div class="form-group mx-auto col-md-6">
      <label >image</label>
      <input type="file" name="image" class="form-control"  ref={register({ required: true })}  />
    </div>
   
  </div>
  
  
  <button type="submit"  name="send" class="btn btn-outline-danger btn-lg d-block mx-auto ">Save</button>
</form> 









                        </div>
                       
                    </div>
                </div>
            </main>
        </div>
    </div>

)
    }

export default connect(null,{addproduct})(AddProducts);
