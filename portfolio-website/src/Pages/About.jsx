import React from 'react'
import SocialProfile from '../Components/SocialProfile'
import {IoMdSend} from "react-icons/io";

const About = () => {
  return (
    <div className='about bg-dark text-light p-3 text-center center text-sm-start'>
        <div className='profile container'>         
            <div className='about-data d-sm-flex align-items-center justify-content-around mt-4'>        
                <div className='me-4'>               
                    <h1>Hi, I am <span className='text-primary'>Sudhan</span></h1>
                    <p className='lead my-4'>Self-taught Front-End Developer with hands-on
                        experience creating dynamic web applications. I have a good understanding of JavaScript, HTML, CSS,
                        Bootstrap, React and Firebase.</p>
                    <button className='btn btn-primary btn-lg my-4'> Contact Me 
                        <IoMdSend className='ms-2'/>
                    </button> 
                </div>  
                <img src="../images/Sudhan1.png" alt='Profile picture' className='img-fluid w-25 d-none d-sm-block'></img>
            </div>              
        </div>
    </div>
  )
}

export default About