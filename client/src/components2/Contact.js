import React, { useEffect, useState } from "react";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    enrollment: "",
    message: "",
  });
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        enrollment: data.enrollment,
      });
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };
  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, enrollment, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        enrollment,
        message,
      }),
    });
    const data=await res.json();

    if(!data)
    {
      console.log('Message not found');
    }
    else{
      alert('Message sent successfully....');
      setUserData({...userData,message:""})
    }
  };
  return (
    <>
      <Navbar2 />
      <div className="wrapper8">
        <h3 align="left"> Contact Us!!</h3>
        <form method='POST' id="contact_form">
          <input
            type="text"
            name="name"
            className="left3"
            value={userData.name}
            onChange={handleInputs}
            placeholder="Your Name"
            required readOnly
          ></input>
          <input
            type="text"
            name="email"
            className="right3"
            value={userData.email}
            onChange={handleInputs}
            placeholder="Your Email"
            required readOnly
          ></input>
          <input
            type="text"
            name="enrollment"
            className="right4"
            value={userData.enrollment}
            onChange={handleInputs}
            placeholder="Your Enrollment"
            required readOnly
          ></input>
          <div>
            <textarea
              name="message"
              placeholder="Your Message...."
              value={userData.message}
              onChange={handleInputs}
              className="textarea1"
              cols={80}
              rows={7}
            ></textarea>
          </div>
          <button type="submit" onClick={contactForm} className="signinbutton">
            Send Message{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
