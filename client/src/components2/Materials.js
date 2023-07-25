import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import logo from "../images/question.png";
import Select from "react-select";

const Materials = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({
    subject: "",
    year: "",
    exam: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const callMaterials = async () => {
    try {
      const res = await fetch("/details", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    callMaterials();
  });

  const PostData = async (e) => {
    e.preventDefault();
    const { subject, year, exam } = user;
    const res = await fetch("/materials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        year,
        exam,
      }),
    });
    const fileName = `${subject}${year}${exam}.pdf`;
    console.log(fileName);
    if (res.status === 422 || !fileName) {
      document.getElementById("demo").innerHTML = "Invalid Entries";
      console.log("Invalid Registration");
    } else {
      // Get the file data
      const fileBlob = await res.blob();
      // Create a URL object for the file
      const fileUrl = URL.createObjectURL(fileBlob);
      // Open the file in a new window or tab
      window.open(fileUrl);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="wrapper3">
        <div className="wrapper4">
          <h4>Get Prev. Year Papers</h4>
          <div id="demo" className="demo2"></div>
          <form method="POST" id="register-form">
          <div>
          {!user.subject && (
  <div className="subject-placeholder">
    <span>Subject</span>
  </div>
)}
          <Select
  options={[
    { value: "SOY", label: "Sociology Of Youth(SOY)" },
    { value: "DMWA", label: "Data Mining and Web Algorithms(DMWA)" },
    {
      value: "LSDS",
      label: "Introduction to Large Scale Database Systems(LSDS)",
    },
    { value: "OR", label: "Operation Research(OR)" },
  ]}
  placeholder="Subject"
  className="subject"
  isSearchable
  defaultValue={null}
  value={{ value: user.subject, label: user.subject }}
  onChange={(option) =>
    setUser((prevState) => ({
      ...prevState,
      subject: option.value,
    }))
  }
/>

</div>
            <div>
              {/* <img src={logo4} alt="logo4" className="img3"></img> */}
              <select
                type="text"
                name="year"
                placeholder="Year"
                className="input4" value={user.year} onChange={handleInputs}
              >
                <option value="" disabled selected>
                  Year
                </option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              {/* <img src={logo4} alt="logo4" className="img3"></img> */}
              <select
                type="text"
                name="exam"
                placeholder="Exam"
                className="input4" value={user.exam} onChange={handleInputs}
              >
                <option value="" disabled selected>
                  Exam
                </option>
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
              </select>
            </div>
            <button
              input="true"
              type="submit"
              name="apply"
              onClick={PostData}
              className="button-signup"
            >
              Click to Download
            </button>
          </form>
        </div>
        <img src={logo} alt="logo" className="left2"></img>
      </div>
    </>
  );
};

export default Materials;
