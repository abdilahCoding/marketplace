import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import './styles/Login.css'
import { Link, useHistory } from "react-router-dom";
import {buyerSingnin} from "../actions/buyerActions";

function LoginBuyer(props) {
  
    const { register, handleSubmit, errors } = useForm(); // initialize the hook

    const onSubmit = async (data,e) => {
        props.buyerSingnin(data)
        // e.target.reset();
    };
    if(props.buyerSuccessSignin){
        console.log(props.buyerSuccessSignin);  
        
		localStorage.setItem('jwt_buyer', props.sellerSigninSucces.token)
		localStorage.setItem('buyer', JSON.stringify(props.sellerSigninSucces.user))
		props.history.push('/dashboard')
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
                 props.buyerLoginError ?
              
            <div class="alert alert-danger" role="alert">
            {props.buyerLoginError}
            
            
</div> : null
  }
                <h1>Buyer Sign-in</h1>

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
({buyerLoginError: state.buyer.buyerSigninError,buyerSuccessSignin: state.buyer.buyersSignin, }),{buyerSingnin})(LoginBuyer);