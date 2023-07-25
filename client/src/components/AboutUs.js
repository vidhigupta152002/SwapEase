import React from 'react'
import Navbar from "./Navbar";
import logo1 from '../images/icon1.png'
const AboutUs=()=>{
    return(
        <>
        <Navbar />
        <div className="wrapper5">
            <h3 className='heading-about'><u> About Us !!</u></h3>
            <div className='p1'>
            <p className='pt-5'>"We're a team of passionate developers and designers who have created a website to help students swap elective subjects with ease. We also offer an attendance prediction model and provide study materials from trusted sources. Our mission is to connect students and provide them with the support they need to succeed in their studies. Join us today and take the first step towards stress-free subject swapping and academic success!" </p>
            </div>
            <div>
                <img src={logo1} alt='logo1' className='p2'></img>
            </div>
        </div>
        </>
    )
}
export default AboutUs