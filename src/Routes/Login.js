import React from 'react'
import LoginPage from '../Components/LoginPage'
import { useLocation } from "react-router-dom";
import Footer from '../Components/Footer';



const Login = () => {
  
  const location = useLocation();
 
  
  //console.log("State:", location.state.data)
  return (
    <div>
        <LoginPage data={location.state.data}/>
        <Footer />     
    </div>
  )
}

export default Login