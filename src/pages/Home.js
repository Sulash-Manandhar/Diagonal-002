import React, { useState } from "react";
import HomeData from "../components/HomeData";
import Login from "../components/Login";
import Register from "../components/Register";
import "../stylesheet/home.css";

const Home = ({ visitedPlace }) => {
  const [page, setPage] = useState("Home");
  const [userDetails, setUserDetails] = useState({});

  const handelPageChange = (newPage) => {
    setPage(newPage);
    console.log(newPage);
    console.log(userDetails);
  };

  return (
    <div className="container-fluid">
      {page === "Home" ? (
        <HomeData
          handelPageChange={handelPageChange}
          visitedPlace={visitedPlace}
        />
      ) : null}
      {page === "Register" ? (
        <Register
          handelPageChange={handelPageChange}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      ) : null}
      {page === "Login" ? (
        <Login handelPageChange={handelPageChange} userDetails={userDetails} />
      ) : null}
    </div>
  );
};

export default Home;
