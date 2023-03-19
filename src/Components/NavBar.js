import React, {useState} from 'react';
import './NavBar.css';

import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";

import { logout } from '../Routes/Login/AuthService';
import { FormControlLabel, Switch } from '@mui/material';

import { green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import logo from "../Assets/logo.jpg";


const NavBar = () => {

  const [click, setClick] = useState(false);
  const [switchPress, setSwitchPress] = useState(true);

    const handleClick = () => setClick(!click);
    

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY>= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    const userLoggedIn = localStorage.getItem("LoggedIn");
    const userType = localStorage.getItem("UserType");

    console.log('loggedIn:', userLoggedIn)

    window.addEventListener("scroll", changeColor);

    //swtich color
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: green[600],
          '&:hover': {
            backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: green[600],
        },
      }));
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return (
    <div className={ color ? "header header-bg" : "header"}>
            <Link to="/">
                <img src={logo} alt="logo-img" className="nav-img"></img>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            {
                userLoggedIn === 'true'? <>

          
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/history">Booking</Link> </li>
           

            {
                userType === 'Customer' && <li><Link to="/customerProfile">Profile</Link> </li> 
            }
            {
                userType === 'Helper' && <li><Link to="/helperProfile">Profile</Link> </li> 
            }
            <li>
            <Link to="/" onClick={logout}>Logout</Link>
            </li>  
            <li>
                <FormControlLabel control={<Switch size="small"
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: green[600],
                      '&:hover': {
                        backgroundColor: alpha(green[500]),
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: green[500],
                    },
                  }}
                
                />} label={switchPress? "EN" : "FR"} 
                sx={{
                  '& .css-ahj2mt-MuiTypography-root':{
                    fontWeight: 500,
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.2rem',
                  }
                }}
                
                onClick={(e)=>{
                    setSwitchPress(!switchPress);
                }
                    }/>
            </li>
            
            </> : <></>
            
            }
        
            
        
              

            
            
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click ? (<FaTimes size={20} style={{ color: "#000" }}/>) : (<FaBars size={20} style={{ color: "#000" }}/>)
            }
            
        </div>
    </div>
  )
}

export default NavBar