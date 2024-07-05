import React,{useEffect} from 'react'
import "./Contact.scss"
import { FaEnvelope } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarker } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; 



function Contact() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with desired settings
  }, []);
  return (
   <section className='Contact container section' id='contactSec'>
    <h1 className='contactTitle'>Contact <span>Me</span></h1>
 <div className="mainContact">
 <div className="inputsDiv" data-aos="fade-right">
        <div className="towInputs">
            <input type="text" placeholder='Name' className='input1'/>
            <input type="email" placeholder='Email'className='input2'/>
        </div>
        <input type="text" placeholder='Supject' className='input3'/>
        <textarea className='input4'  rows="7" placeholder='Your message'></textarea>
        {/* <button className='sendBtn'>SEND<IoSend className='sendIcon'/> </button> */}
        <button  className='sendBtn'>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>


</button>
    </div>
    <div className="informations" data-aos="fade-left">
        <div className="infoDiv">
        <IoPersonSharp className='icon'/>
        <h4>Fatma Gamal</h4>
        </div>

        <div className="infoDiv">
        <MdOutlinePhoneAndroid className='icon' />
        <h4>+01062236623</h4>
     
     </div>
            <div className="infoDiv">
            <FaEnvelope className='icon' />
            <h4>fgmal019@gmail.com</h4>   
            </div>
            <div className="infoDiv">
            <FaMapMarker className='icon'/>
            <h4>Shopra Alkhema,Cairo Egypt</h4>
      
            </div>
            <div className="iconsDiv">
                    <div className="iconDiv">
                    <a href="https://www.linkedin.com/in/fatma-gamal-98b297235"> <GrLinkedinOption className='icon' /></a>

                    </div>
                    <div className="iconDiv"><a href="http://t.me/Fatmagamal26"><FaTelegramPlane className='icon' /></a></div>
                    <div className="iconDiv"><a href="https://github.com/fatmaindex/university.git"><ImGithub className='icon' /></a></div>
                    <div className="iconDiv">
                        <a href="https://www.instagram.com/fatma.gamal.733?igsh=MW9kY2Q4a2dubjg4Yg=="> <FaInstagram className='icon'/></a>

                    </div>

            
    </div>
 </div>
 </div>
   </section>

 
  )

}

export default Contact;
