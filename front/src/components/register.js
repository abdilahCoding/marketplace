import React from 'react'
import { connect } from "react-redux";
import { useForm } from 'react-hook-form';
import {sellerSingnup} from "../actions/sellerActions";
import {buyerSingnup} from "../actions/buyerActions";

import './styles/Register.css'
import { Link} from "react-router-dom";

function Register(props) {
  

    const { register, handleSubmit, errors } = useForm(); // initialize the hook


    const onSubmit = async (data,e) => {
         
        let res = {
            'name':data.name,
            'lastName':data.lastName,
            'adress': data.adress,
            'email': data.email,
            'password':data.password
        }

       
           if(data.type === 'seller'){
            props.sellerSingnup(res)
           }else{

            props.buyerSingnup(res)
           }
           e.target.reset();
     
        
    
    };
  
    return (
        <div className='register'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                     
                />
            </Link>

            <div className='register__container'>
                {
                 props.seller || props.buyer  ?
              
            <div class="alert alert-danger" role="alert">
            {props.seller}
            {props.buyer}
            
</div> : null
  }
            {/* <h5 className="error"> {props.seller}</h5> */}
            <h1>Sign-up</h1>
              
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>Name</h5>
                    <input type='text' name="name" ref={register({ required: true })}  />
                    {errors.name && 'Please enter your Name.'}
                    <h5>Last Name</h5>
                    <input type='text' name="lastName" ref={register({ required: true })}  />
                    {errors.lastName && 'Please enter your Last Name.'}
                    <h5>Adress</h5>
                    <input type='text' name="adress" ref={register({ required: true })}  />
                    {errors.adress && 'Please enter a Adress.'}
                    <h5>E-mail</h5>
                    <input type='text' name="email" ref={register({ pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}  />
                    {errors.email && 'Please enter email fomat.'}
                    <h5>Password</h5>
                    <input type='password' name="password" ref={register({ required: true })}  />
                    {errors.password && 'Please enter Password.'}
                    <h5>Type</h5>
                    <span>Buyer :</span>
                   <input className="radio" type="radio" name="type" value="buyer" ref={register({ required: true })}  />
                   <span>Seller :</span>
                    <input className="radio" type="radio" name="type" value="seller" ref={register({ required: true })}  />
                    {errors.type && 'Please choose a type.'}
                 
                    <button type='submit' className='login__signInButton'>Sign Up</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to='/login'>
                <button  className='register__LoginButton'>Login to Seller Account</button>
                </Link>
                <Link to='/loginBuyer'>
                <button  className='register__LoginButton'>Login to Buyer Account</button>
                </Link>
          
            </div>
        </div>
    )
}


export default connect((state) => 
({seller: state.seller.sellerError,buyer: state.buyer.buyerError, }),{sellerSingnup,buyerSingnup})(Register);
 