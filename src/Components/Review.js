import React, { useEffect } from 'react'
import './ReviewAndReport.css';
import logo from "../Assets/logo.jpg";
import { Alert, Button, FormControl, NativeSelect, Rating, TextField } from '@mui/material';
import { useState } from 'react';
import i18n from "../Translation/i18n";
import { initReactI18next, useTranslation, Translation } from "react-i18next";
import CustomNav from './CustomNav';
import { useLocation } from 'react-router-dom';
import { reviewFeedback } from '../Routes/Login/AuthService';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
  const { t } = useTranslation();
    const [star, setstar] = useState(0);
    const [starErrorFlag, setstarErrorFlag] = useState(null);
    const [starError, setstarError] = useState("");
    
    const [isError, setisError] = useState(null);

    const [feedback, setfeedback] = useState("");
    const [feedbackErrorFlag, setfeedbackErrorFlag] = useState(false);
    const [feedbackError, setfeedbackError] = useState("");

    const [feedbackSubmitted, setfeedbackSubmitted] = useState(false);

    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const bookingId = queryParam.get('bookingId');
    

    const checkFeedback = (feedback) => {
        if(!feedback){
            setfeedbackError(t("errorFeedback"));
            setfeedbackErrorFlag(true);
            return true;
          }
          else{
            setfeedbackError("");
            setfeedbackErrorFlag(false);
            return false;
          }
         

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(checkFeedback(feedback)){
            setfeedbackError(t("errorFeedback"));
            setfeedbackErrorFlag(true);
            return false;
          }
        if(!star){
            setstarErrorFlag(true);
            setstarError(t("errorRating"));
            return false;
        }  
        //console.log("data:",bookingId, star,feedback)
        try{
          await reviewFeedback(bookingId, star,feedback);
          toast.success("Review Submitted Successfully", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setfeedbackSubmitted(true);
            

        }catch (error) {
          console.error('error', error);
          setfeedbackSubmitted(false);
          setisError(error.response.data);
        }


        //after successful submission
      
    };

    useEffect(() => {
        
      i18n.changeLanguage(localStorage.getItem('lang'));
      console.log('lang--',localStorage.getItem('lang'))
      
    }, [])

  return (
    <div className='review'>
        <CustomNav />
       {isError? <>
        <p className="forgot-label">{isError}</p>
       </> :
      <div className="review-container">
        {feedbackSubmitted? <>
          
          <p className="forgot-label">Thank you for the feedback!!</p>
        
        </> :
        <div className="review-contents">
          <p className="forgot-label">{t("FeedbackTitle")}</p>
          <div className="review-stars">
            <Rating
              name="simple-controlled"
              value={star}
              sx={{
                fontSize: "5rem",
                marginTop: 5,
              }}
              size="large"
              onChange={(e) => {
                setstar(e.target.value);
              }}
            />
          </div>
          <TextField
            id="feedback"
            value={feedback}
            onChange={(e) => {
              setfeedback(e.target.value);
            }}
            placeholder={t("FeedbackPH")}
            multiline
            rows={3}
            maxRows={4}
            sx={{
              width: 400,
              marginTop: 5,
              marginLeft: "20%",
            }}
            inputProps={{ maxLength: 150 }}
            error={feedbackErrorFlag}
            helperText={feedbackError}
            label="Feedback"
          />
          <div className="review-button">
            <Button
              variant="outlined"
              sx={{
                ":hover": {
                  bgcolor: "#006e5f4a",
                  borderColor: "#006E60",
                },
                color: "white",
                backgroundColor: "#00720B",
                borderColor: "#006E60",
              }}
              size="large"
              onClick={handleSubmit}
            >
              {t("SubmitBtn")}
            </Button>
          </div>
        </div>}
      </div>}
      {starErrorFlag && (
        <Alert variant="outlined" severity="error" className="alert-left">
          {starError}
        </Alert>
      )}
      <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
    </div>
  );
}

export default Review