import React from 'react'
import { useLocation } from 'react-router-dom';
import EmailVerificationPage from '../Components/EmailVerificationPage'

import Footer from '../Components/Footer';

const EmailVerification = () => {
  const location = useLocation();
  return (
    <div>
      
      <EmailVerificationPage data={location.state.data}/>
      <Footer />
    </div>
  )
}

export default EmailVerification