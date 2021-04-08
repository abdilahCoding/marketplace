import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import './styles/Login.css'
import {sellerSingnin} from "../actions/sellerActions";

import { Link, useHistory } from "react-router-dom";

function Login(props) {
  
    const { register, handleSubmit, errors } = useForm(); // initialize the hook


    const onSubmit = async (data,e) => {
          
            props.sellerSingnin(data)
               e.target.reset();

        
    
    };
      if(props.sellerSigninSucces){
        console.log(props.sellerSigninSucces);  
        
		localStorage.setItem('jwt_seller', props.sellerSigninSucces.token)
        localStorage.setItem('seller', JSON.stringify(props.sellerSigninSucces.seller))
		props.history.push('/seller/Dashboard')
      }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                {
                 props.sellerLoginError ?
              
            <div class="alert alert-danger" role="alert">
            {props.sellerLoginError}
            
            
</div> : null
  }
                <h1>Seller Sign-in</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>E-mail</h5>
                    <input type='text' name="email" ref={register({ required: true })}  />

                    <h5>Password</h5>
                    <input type='password' name="password" ref={register({ required: true })}  />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to='/register'>
                <button  className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}


export default connect((state) => 
({sellerLoginError: state.seller.sellerSigninError,sellerSigninSucces: state.seller.sellerSignin, }),{sellerSingnin})(Login);
 