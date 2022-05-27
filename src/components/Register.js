import React from "react";
import "../stylesheet/stylesheet.css";

const Register = ({ handelPageChange, userDetails, setUserDetails }) => {
  const handleChange = (e) => {
    let tempUserData = {
      ...userDetails,
      [e.target.name]: e.target.value,
    };
    setUserDetails(tempUserData);
  };

  const handleRegister = () => {
    const tick = document.getElementById("tick").checked;
    let tempUserData = {
      ...userDetails,
      agreed: tick,
    };
    console.log("Logged Output : tempUserData", tempUserData);

    setUserDetails(tempUserData);
    console.log(userDetails);
    handelPageChange("Login");
    // setUserDetails({});
  };

  const handleReset = () => {
    const form = document.getElementById("form");
    setUserDetails({});
    form.reset();
  };

  const handleGoBack = () => {
    // const tick = document.getElementById("tick").checked;
    // let tempUserData = {
    //   ...userDetails,
    //   agreed: tick,
    // };
    // setUserDetails(tempUserData);
    handelPageChange("Home");
  };
  return (
    <div className="grid">
      <div className="form-container">
        <header>
          <h1 className="">Register</h1>
          <hr className="hr my" />
        </header>
        <form action="#" id="form">
          {/* First Name  */}
          <div className="my">
            <div className="form-div">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="form-control"
                defaultValue={userDetails?.name ? userDetails.name : ""}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* UserName  */}
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
                placeholder="username"
                className="form-control"
                defaultValue={userDetails?.uname ? userDetails.uname : ""}
                pattern="[a-z]{6}[0-9]{3}"
                required
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* Email Address  */}
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
                defaultValue={userDetails?.email ? userDetails.email : ""}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* Contact  */}
          <div className="my">
            <div className="form-div">
              <label htmlFor="contact" className="form-label">
                Phone Number:
              </label>
              <br />
              <input
                type="tel"
                name="contact"
                id="contact"
                placeholder="98********"
                className="form-control"
                defaultValue={userDetails?.contact ? userDetails.contact : ""}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* Password  */}
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
                defaultValue={userDetails?.password ? userDetails.password : ""}
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* Confirm Password  */}
          <div className="my">
            <div className="form-div">
              <label htmlFor="password2" className="form-label">
                Confirm-Password
              </label>
              <br />
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="********"
                className="form-control"
                defaultValue={
                  userDetails?.password2 ? userDetails.password2 : ""
                }
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
                autoComplete="false"
              />
            </div>
          </div>
          {/* Checkbox  */}
          <div className="my">
            <div className="form-div">
              <input type="checkbox" name="tick" id="tick" required />
              <label htmlFor="tick" className="form-label mx">
                I agree all terms and conditions.
              </label>
            </div>
          </div>

          {/* Button Group  */}
          <div className="my">
            <div className="btn-group">
              <button
                className="btn-success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
              >
                Register
              </button>
              <button
                className="btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoBack();
                }}
              >
                Back
              </button>
              <button
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  handleReset();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
