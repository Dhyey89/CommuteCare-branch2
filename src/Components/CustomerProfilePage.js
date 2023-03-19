import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './ProfilePage.css';

import { displayCustomerProfile, logout } from '../Routes/Login/AuthService';
import { useNavigate } from 'react-router-dom';

const CustomerProfilePage = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("");
    const [mob, setmob] = useState("");
    const [dob, setdob] = useState("");

    const navigate = useNavigate();
  
    const [isLoading, setisLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            try {
                setisLoading(true);
                const res = await displayCustomerProfile();
                console.log(res);
                setfirstname(res.user.firstname);
                setlastname(res.user.lastname);
                setemail(res.user.email);
                setgender(res.user.gender);
                setdob(res.user.dob);
                setmob(res.user.mob);
               
                
                //setresult(res);
              } catch (error) {
                console.error('error', error);
                if(error.response.data.message==="jwt expired" || error.response.data.message==='jwt malformed'){
                  logout();
                  navigate('/');
                }
              }
              setisLoading(false);
        }
        fetchData();
    }, [])
    
  return (
    <div className='profile'>
        {
            isLoading ? <div>Loading.....</div> : <>
                    
                    <div className='profile-container'>
                    <h2>Personal Details</h2>
                      <div className='profile-div'> 
                        <div className='profile-content'>
                          <h3>Name: &nbsp;&nbsp;&nbsp;&nbsp;{firstname} {lastname}</h3>
                          <h4>Email: &nbsp;&nbsp;&nbsp;&nbsp;{email}</h4>
                          <h4>Gender: &nbsp;&nbsp;&nbsp;&nbsp;{gender}</h4>
                          <h4>Phone: &nbsp;&nbsp;&nbsp;&nbsp;{mob}</h4>
                          <h4>Date of Birth: &nbsp;&nbsp;&nbsp;&nbsp;{dob}</h4>
                          
                        
                        </div>
                      </div>
                    </div>
            </>
        }
        
    </div>
  )
}

export default CustomerProfilePage