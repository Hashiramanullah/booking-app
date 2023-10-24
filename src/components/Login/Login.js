import React from 'react'
import "./login.css";
// import SignUpForm from './SignUp/SignUp';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import {  useNavigate } from 'react-router-dom';



import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Login() {

    let  {register,handleSubmit, formState:{errors}}=  useForm();
    let Dispatech = useDispatch();
     let navigate = useNavigate();
    const LoginData = (LgData)=>{
        console.log(LgData);

         axios.post("/LoginData",LgData).then((res)=>{
          console.log(res.data);
          if(res.data == "ok"){
      
            navigate("/AdminPanel", 
            // { state: { productsShoe: resp.data, brandName } }
            )
          } 
        })
         Dispatech({
              type:"SignUpData",
              payload:LgData,
             })
    }

    return (
    <div><>

    
 
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Agent Login</header>
        <form  onSubmit={handleSubmit(LoginData)}>
          <input type="text" {...register("LoginAgent" , {required:true} ,)} placeholder="Agent Code" />
          {errors.LoginAgent ? <div className="error">Please Enter Agent Code ...</div> :null}

          <input type="password" {...register("LoginName" , {required:true} ,)} placeholder="User Name"/>
          {errors.LoginName ? <div className="error">Please Enter Your Name...</div> :null}
          <input type="password" {...register("LoginPassword" , {required:true} ,)} placeholder="Password"/>
          {errors.LoginPassword ? <div className="error">Please Enter Your Password...</div> :null}

          <a href="#">Forgot password?</a>
          <button className='button'>Login</button>
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <Link to = "/signUP">SignUp</Link>
          </span>
        </div>
      </div>
     
    </div>
  </>
  </div>
  )
}
