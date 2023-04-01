import React from 'react'
import { useLocation } from 'react-router-dom';
import ForgotPasswordPage from '../Components/ForgotPasswordPage'
import Footer from '../Components/Footer';


const ForgotPassword = () => {
  const location = useLocation();
  console.log(location.state.userType)
  return (
    <div>
        <ForgotPasswordPage data={location.state.userType}/>
        <Footer />
    </div>
  )
}

export default ForgotPassword