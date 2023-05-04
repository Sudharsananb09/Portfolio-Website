import React from 'react'
import {IoSchoolSharp} from "react-icons/io5";
import {RiSuitcaseLine} from "react-icons/ri";
import {AiOutlineCalendar} from "react-icons/ai";


const Qualifications = () => {
  return (
    <div className='text-light text-light p-3 text-center center text-sm-start'>
        <div className='container'>
            <div className=''>   
                <h2>Qualification</h2>
                <span>Educational Journey</span>
            </div> 

            {/* Qualification Tabs */}
            <div className='qualification-tabs d-flex align-items-center justify-content-center mt-4'>
                <div className='me-4'>
                    <IoSchoolSharp className='me-2'/>
                    Education
                </div>
                <div>
                    <RiSuitcaseLine className='me-2'/>
                    Work
                </div>
            </div> 
            
            <div className='qualification-sub-container'>
                {/* Qualification Content - 1 */}  
                <div className='qualification-content left-container'>
                    <img src='../images/cap.jpg'/>
                    <div className='info '>
                        <h3 className="qualification-title">Higher Secondary School</h3>
                        <span className="qualification-subtitle">Infant Jesus Mat hr sec school</span>
                        <div className="qualification-calendar">
                            <AiOutlineCalendar /> 2014 - 2015
                        </div> 
                    </div>
                </div>

                {/* Qualification Content - 2 */}  
                <div className='qualification-content right-container'>
                    <img src='../images/cap.jpg'/>
                    <div className='info '>
                        <h3 className="qualification-title">B.E in Electrical Engineering</h3>
                        <span className="qualification-subtitle">Rajalakshmi Engineering College</span>
                        <div className="qualification-calendar">
                            <AiOutlineCalendar /> 2015 - 2019
                        </div>
                    </div>
                </div>               
            </div>    
        </div>
    </div>
  )
}

export default Qualifications