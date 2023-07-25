import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../images/signup.png";
import logo1 from "../images/user.png";
import logo2 from "../images/email.jpg";
import logo3 from "../images/enrollment.jpg";
import logo4 from "../images/sector.png";
import logo5 from "../images/password.png";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    enrollment: "",
    sector: "",
    password: "",
    cpassword: "",
    course: "N/A",
    branch: "N/A",
    batch: "N/A",
    year: "N/A",
    esubject: "N/A",
    dsubject: "N/A",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // let extra =JSON.parse('{"course":"","branch":"", "batch":"","year":"","esubject":"","dsubject":""}');
  const PostData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      enrollment,
      sector,
      password,
      cpassword,
      course,
      branch,
      batch,
      year,
      esubject,
      dsubject,
    } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        enrollment,
        sector,
        password,
        cpassword,
        course,
        branch,
        batch,
        year,
        esubject,
        dsubject,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      document.getElementById("demo").innerHTML = "Invalid Registration";
      console.log("Invalid Registration");
    } else {
      window.alert("Registered Successfully");
      console.log("Successfull Registration");

      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper3">
        <div className="wrapper4">
          <h3 className="h3">
            <u>SIGN UP</u>
          </h3>
          <div id="demo" className="demo"></div>
          <form method="POST" id="register-form">
            <div>
              <img src={logo1} alt="logo1" className="img3"></img>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Username"
                className="input2"
              />
            </div>
            <div>
              <img src={logo2} alt="logo2" className="img3"></img>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"
                className="input2"
              />
            </div>
            <div>
              <img src={logo3} alt="logo3" className="img3"></img>
              <input
                type="number"
                name="enrollment"
                value={user.enrollment}
                onChange={handleInputs}
                placeholder="Enrollment Number"
                className="input2"
              />
            </div>
            <div>
              <img src={logo4} alt="logo4" className="img3"></img>
              <select name="sector" value={user.sector} onChange={handleInputs} placeholder="Sector" className="input3">
                <option value="" disabled selected>Sector</option>
                <option value="62">62</option>
                <option value="128">128</option>
              </select>
              {/* <input
                type="number"
                name="sector"
                value={user.sector}
                onChange={handleInputs}
                placeholder="Sector"
                className="input2"
              /> */}
            </div>
            <div>
              <img src={logo5} alt="logo5" className="img3"></img>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"
                className="input2"
              />
            </div>
            <div>
              <img src={logo5} alt="logo5" className="img3"></img>
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password"
                className="input2"
              />
            </div>
            <input
              type="hidden"
              name="course"
              value={user.course}
              onChange={handleInputs}
            />
            <input
              type="hidden"
              name="branch"
              value={user.branch}
              onChange={handleInputs}
            />
            <input
              type="hidden"
              name="batch"
              value={user.batch}
              onChange={handleInputs}
            />
            <input
              type="hidden"
              name="year"
              value={user.year}
              onChange={handleInputs}
            />
            <input
              type="hidden"
              name="esubject"
              value={user.esubject}
              onChange={handleInputs}
            />
            <input
              type="hidden"
              name="dsubject"
              value={user.dsubject}
              onChange={handleInputs}
            />
            <button
              input="true"
              type="submit"
              name="signup"
              onClick={PostData}
              className="button-signup"
            >
              Sign Up
            </button>
          </form>
        </div>
        <img src={logo} alt="logo" className="left2"></img>
      </div>
    </>
  );
};
export default Signup;
