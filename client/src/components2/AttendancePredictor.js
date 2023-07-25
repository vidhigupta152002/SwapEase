import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import logo from "../images/attendance.jpg";
import logo1 from "../images/lecture.png";
import logo2 from "../images/tutorial.jpg";
import logo3 from "../images/credits.jpg";
import logo4 from "../images/percentage.jpg";

const AttendancePredictor = () => {
  const [currentPercentage, setCurrentPercentage] = useState("");
  const [totalClasses, setTotalClasses] = useState("");
  const [credits, setCredits] = useState("");
  const [percentageNeeded, setPercentageNeeded] = useState("");
  const [message, setMessage] = useState("");

  function calculateClassesNeeded() {
    var current = parseInt(currentPercentage);
    var total = parseInt(totalClasses);
    var percentage = parseInt(percentageNeeded);
    var credit = parseInt(credits);
    credit=credit*14;
    var present=(current*total)/100;
    console.log("present : " + present);
    var absent=total-present;
    console.log(absent);
    var classesNeeded = Math.ceil(((percentage*credit)/100)-present);
    var wrong = credit-present-absent;
      console.log(classesNeeded);
    if (wrong >= 0) {
      if (classesNeeded > 0) {
        if(wrong>classesNeeded){
        setMessage(
          `You need to attend ${classesNeeded} more classes (tut + lecture) to achieve ${percentageNeeded}% attendance.`
        );
        }
        else
        {
          setMessage(`So sorry😢, but you can't achieve ${percentageNeeded}% attendance.`)
        }
      } else {
        console.log(
          `Woohoo🎉🎊!! You need not attend any classes for ${percentageNeeded}% attendance criteria.`
        );
        setMessage(
          `Woohoo🎉🎊!! You need not attend any classes for ${percentageNeeded}% attendance criteria.`
        );
      }
    } else {
      setMessage(`Wrong inputs!!`);
    }
    // return classesNeeded > 0 ? classesNeeded : 0;
  }
  return (
    <>
      <Navbar2 />
      <div className="wrapper5">
        <div className="left">
          <h4 className="headings">&nbsp;&nbsp;&nbsp;&nbsp;Predict Here!</h4>
          <div id="demo" className="demo2">
            {message}
          </div>
          <form method="POST">
            <div>
              <img src={logo1} alt="logo1" className="img3"></img>
              <input
                className="form1"
                type="number"
                placeholder="Current Percentage?"
                id="currentPercentage"
                value={currentPercentage}
                onChange={(e) => setCurrentPercentage(e.target.value)}
              />
            </div>
            <div>
              <img src={logo2} alt="logo1" className="img3"></img>
              <input
                className="form1"
                type="number"
                placeholder="Total classes till now?"
                id="totalClasses"
                value={totalClasses}
                onChange={(e) => setTotalClasses(e.target.value)}
              />
            </div>
            <div>
              <img src={logo3} alt="logo1" className="img3"></img>
              <input
                className="form1"
                type="number"
                placeholder="Credits of the subject?"
                id="credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
              />
            </div>
            <div>
              <img src={logo4} alt="logo1" className="img3"></img>
              <input
                className="form1"
                type="number"
                placeholder="Attendance % you want to achieve?"
                id="percentage"
                value={percentageNeeded}
                onChange={(e) => setPercentageNeeded(e.target.value)}
              />
            </div>
          </form>
          <button
            input="true"
            type="submit"
            name="predict"
            id="predict"
            className="signinbutton"
            onClick={calculateClassesNeeded}
          >
            Predict
          </button>
        </div>
        <div className="wrapper2">
          {/* <img src={logo} alt="logo"></img> */}
          <h4> For your Information!!</h4>
          The attendance predictor displays the number
          of classes which a student has to attend to
          meet the attendance criteria designed by the
          institute where the number of classes (lectures
          + tutorials) in each week is equivalent to
          the credits of that subject. In general, each credit
          accounts for 14 classes.
          <div  className="wrapper2">
          <img src={logo} alt="logo" className="img5"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendancePredictor;