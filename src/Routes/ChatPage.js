import React from "react";
import { useLocation } from "react-router-dom";
import Chat from "../Components/Chat";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ChatPage = () => {
  
  const location = useLocation();
  console.log(location.state.id, location.state.name)
  return (
    <div>
       <NavBar />
       <Chat data={location.state.id} name={location.state.name}/>
       <Footer />
   </div>
 )
}
export default ChatPage;