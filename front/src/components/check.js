
import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { checkNewPass } from "../actions/checkActions";
import './styles/Login.css'

 function CheckPass(props) {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook

   let {token} = useParams();
   console.log(token);
    const onSubmit = async (data) => {
         
        let res = {
            'password':data.password,
            'token':token,
         
        }

            props.checkNewPass(res)
            props.history.push('/')

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
            <h1>Sign-in</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
               
                <h5>new Password</h5>
                <input type='password' name="password" ref={register({ required: true })}  />

                <button type='submit' className='login__signInButton'>Enter new password</button>
            </form>

         
        </div>
    </div>

)
    }

export default connect(null,{checkNewPass})(CheckPass);