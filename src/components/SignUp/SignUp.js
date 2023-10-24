import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
export default function SignUpForm() {
let  {register,handleSubmit, formState:{errors}}=  useForm();
let Dispatech = useDispatch()

 const SignUpData = (SGData)=>{
   console.log(SGData);
  //  Dispatech({
  //   type:"SignUpData",
  //   payload:SGData,
  //  })
 
  axios.post("/SignUpData",SGData).then((resp)=>{
    console.log(resp.data);
  })

 } 
  return (
    <div><div className="container">
    <input type="checkbox" id="check" />
    <div className="login form">
      <header>SignUp</header>
      <form  onSubmit={handleSubmit(SignUpData)}>
        <input type="text" {...register("AgentCode" , {required:true} ,)} placeholder="Agent Code" />
        {errors.AgentCode ? <div className="error">Please Enter Agent Code ...</div> :null}

        <input type="password" {...register("Name" , {required:true} ,)} placeholder="User Name"/>
        {errors.Name ? <div className="error">Please Enter Your Name...</div> :null}

        <input type="text" {...register("City" , {required:true} ,)} placeholder="User Name"/>
        {errors.City ? <div className="error">Please Enter Your City ...</div> :null}

        <input type="password" {...register("Password" , {required:true} ,)} placeholder="Password"/>
        {errors.Password ? <div className="error">Please Enter Your Password...</div> :null}

        {/* <a href="#">Forgot password?</a> */}
        <button className='button'>SignUp</button>
      </form>
    </div>
   
  </div></div>
  )
}
