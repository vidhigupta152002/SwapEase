import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";
import ApplyForm from "./components2/ApplyForm";
import AttendancePredictor from "./components2/AttendancePredictor";
import Contact from "./components2/Contact";
// import Description from "./components2/Description";
import Details from "./components2/Details";
import Navbar2 from "./components2/Navbar2";
import Materials from "./components2/Materials";
import Available from "./components2/Available";
import LogOut from "./components2/LogOut";
import Navbar3 from "./components3/Navbar3";
import Messages from "./components3/Messages";
import Accepted from "./components3/Accepted";

const App=()=>{
  return (
		<>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/applyform" element={<ApplyForm />} />
				<Route path="/attendance" element={<AttendancePredictor />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/logout" element={<LogOut />} />
				<Route path="/details" element={<Details />} />
				<Route path="/materials" element={<Materials />} />
				<Route path="/navbar2" element={<Navbar2 />} />
				<Route path="/navbar3" element={<Navbar3 />} />
				<Route path="/available" element={<Available />} />
				<Route path="/messages" element={<Messages />} />
				<Route path="/accepted" element={<Accepted />} />
			</Routes>
		</>
	);
}
export default App