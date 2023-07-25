import React,{useState} from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../images/login.jpg";
import logo1 from "../images/email.jpg";
import logo2 from "../images/password.png";
// import { use } from "../../../server/router/auth";
// import { NavLink } from "react-router-dom";
// import loginpic from "../images/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const loginUser=async (e)=>
  {
    e.preventDefault();
    const res = await fetch('/signin',
    {
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {
            email,password
          }
        )
    })
    const data=res.json();
    if(res.status===400 || !data)
    {
      document.getElementById('demo').innerHTML="Invalid Credentials....";
    }
    else
    {
      // window.alert("Login successful");
      if(email==="swapeasenow@gmail.com")
      {
        navigate('/messages');
      }
      else
      navigate('/Details');
    }
  }
  return (
    <>
    <Navbar />
      <div className="wrapper">
        <div className="wrapper2">
          <h2><u>Login !</u></h2>
          <div id="demo" className="demo"></div>
          <form method="POST">
            <div>
              <img src={logo1} alt="logo" className="img1"></img>
              <input type="email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email" />
            </div>
            <div>
              <img src={logo2} alt="logo" className="img2"></img>
              <input type="password" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password" />
            </div>
          </form>
          <button
            input='true'
            type="submit"
            name="signin"
            id="signin"
            className="signinbutton"
            onClick={loginUser}
          >
            Sign in
          </button>
          <div className="not-member">
            Not a member? <a href="/signup">Register Now</a>
          </div>
        </div>
        <img src={logo} alt="logo" className="left"></img>
      </div>
    </>
  );
};
export default Login;
