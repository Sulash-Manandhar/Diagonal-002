import React from "react";
import "../stylesheet/stylesheet.css";

const Login = ({ handelPageChange, userDetails }) => {
  return (
    <div className="grid">
      <div className="form-container">
        <header>
          <h1 className="">Login</h1>
          <hr className="hr my" />
        </header>
        <form action="#">
          <div className="my">
            <div className="form-div">
              <label htmlFor="uname" className="form-label">
                Username
              </label>
              <br />
              <input
                type="text"
                name="uname"
                id="uname"
                placeholder="user Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="my">
            <div className="form-div">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@server.domainname"
                className="form-control"
              />
            </div>
          </div>

          <div className="my">
            <div className="form-div">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="form-control"
              />
            </div>
          </div>

          <div className="my">
            <div className="btn-group">
              <button className="btn-success">Login</button>
              <button
                className="btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  handelPageChange("Home");
                }}
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
