import React from 'react'
import {Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import Main from './Main'
import { CartProvider } from './ContextReducer';
import MyOrder from './MyOrder';
import './App.css'
import ForgotPassword from './ForgotPassword'

const App = ()=> {
  const user=localStorage.getItem('myInfo')
  
  return (
    <CartProvider>
    <div className="App">

 <Routes>
 <Route path='/signup' element={<SignUp/>} />
<Route path='/' element={<Main/>} />
<Route path='/home' element={<Home/>} />
<Route path="/forgot-password" element={<ForgotPassword />} />
{/* <Route path="/password-reset" element={<PasswordReset />} /> */}
<Route path='/login' element={<Login/>} />
<Route path='/myorder' element={<MyOrder/>} />
</Routes> 
    </div>
    </CartProvider>
    );
  };
export default App;