import React, { useEffect, useState } from "react";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";
import image from "../images/batch.png";

const Details = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callDetails = async () => {
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
      console.log(data);
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
    callDetails();
  });
  return (
    <>
      <Navbar2 />
      <div className="wrapper3">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={image} alt="image" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h5>
                  <strong>USER DETAILS</strong>
                </h5>
                {/* <h6>Web Developer</h6> */}
                {/* <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p> */}

                <ul className="nav nav-tabs details" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Form Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              {/* <input
                type="submit"
                clasName="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              /> */}
            </div>
          </div>
          <div className="row">
            {/* Left Side */}
            <div className="col-md-2">
              <div className="profile-work">{/* <p> WORK LINK </p> */}</div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    {/* <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>123456789123456789</p>
                    </div> */}
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Enrollment Number</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.enrollment}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Sector</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.sector}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    {/* <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>123456789123456789</p>
                    </div> */}
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Course</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.course}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Branch</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.branch}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Batch</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.batch}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Year</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.year}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Current Subject</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.esubject}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Desired Subject</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.dsubject}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Details;