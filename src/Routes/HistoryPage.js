import React from "react";
import History from "../Components/History";
import HistoryHelper from "../Components/HistoryHelper";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function HistoryPage() {
  return (
    <>
      <NavBar />
      {localStorage.getItem("UserType") === "Customer" ? (
        <History />
      ) : (
        <HistoryHelper />
      )}
      <Footer />
    </>
  );
}

export default HistoryPage;