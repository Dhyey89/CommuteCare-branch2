import React from 'react'
import './HomePage.css'
import logo from "../Assets/logo.jpg";
import homeImg from '../Assets/home-page.jpg';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = new useNavigate();
  return (
    <div className='home'>
        <div className='eclipse'>
            <div className='logo'>
                <img src={logo} alt='logo-img' className='logo-img'></img>
            </div>
            <div className='home-container'>
                <div className='home-content'>
                    <h1>
                    Your comfort, our priority!
                    </h1>
                    <div  className='home-button'>
                        <Button variant='outlined' sx={{
                            ":hover": {
                            bgcolor: "#006e5f4a",
                            },
                            color: "#006E60",
                            backgroundColor: "white",
                            borderColor: "#006E60",

                        }} size="large" onClick={(e)=> {navigate('/loginChoice')}}>
                            Start
                        </Button>
                    </div>
                    
                </div>
                <div className='home-Img'>
                    <img  src={homeImg} alt='logo-img'className='homeimg'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage