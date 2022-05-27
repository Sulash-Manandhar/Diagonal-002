import React from "react";
import "../stylesheet/home.css";

const HomeData = ({ visitedPlace, handelPageChange }) => {
  let visitedDistricts = visitedPlace.filter((item) => item.visited === true);
  let notVisitedDistricts = visitedPlace.filter(
    (item) => item.visited === false
  );
  return (
    <>
      <div className="flex-display">
        <div className="head">
          <h1>Welcome to Home Page.</h1>
        </div>
        <div className="btn-group">
          <button
            className="btn-success"
            onClick={(e) => {
              e.preventDefault();
              handelPageChange("Register");
            }}
          >
            Sign Up
          </button>
          <button
            className="btn-danger"
            onClick={(e) => {
              e.preventDefault();
              handelPageChange("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div>
        <h3>Places you have visited</h3>
        <ul>
          {visitedDistricts.length
            ? visitedDistricts.map((item, index) => (
                <li key={index}>{item.districts}</li>
              ))
            : null}
        </ul>
      </div>
      <div>
        <h3>Places you have not visited</h3>
        <ul>
          {notVisitedDistricts.length
            ? notVisitedDistricts.map((item, index) => (
                <li key={index}>{item.districts}</li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default HomeData;
