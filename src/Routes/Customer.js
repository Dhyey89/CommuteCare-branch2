import React from 'react'
import Reservation from '../Components/Reservation'
import NavBar from '../Components/NavBar'
import { Navigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Customer = () => {
  const userLoggedIn = localStorage.getItem('LoggedIn');
  return (
    <div>
      
      {!userLoggedIn ? <Navigate to='/' /> :<>
        <NavBar />
        <Reservation />
        <Footer />
       </>}
      
    </div>
  )
}

export default Customer