import React from 'react'
import Home from './components/Home/home'
import Header from './components/header/Header'
import Login from './components/Login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUpForm from './components/SignUp/SignUp'
import AdminPanel from './components/AdminPanel/AdminPanel'
function App() {
  return <>
    

       <BrowserRouter>
      <Header/>
        <Routes>

 <Route path='/' element = {<Home/>}/>
 <Route  path='/login' element ={<Login/>}/>
<Route path='/signUP' element = {<SignUpForm/>}/>
<Route path='/AdminPanel' element= {<AdminPanel/>}/>
        </Routes>
       </BrowserRouter>
  </>
}

export default App