import React from 'react'
import {RxCaretUp} from "react-icons/rx";

const Skills = () => {
  return (
    <div className='skills bg-dark text-light p-3 text-center center text-sm-start'>
        <div className='container'>
            <div className='mb-5'>
                <h2>Skills</h2>
                <p>My Technical Skills</p>
            </div>      
            <div class="row gy-4">
                {/* Front End Column */}
                <div class="col-sm">
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column'>
                            <h3>Front-End Development</h3>
                            <p>More than 6 months</p>
                        </div>
                        <RxCaretUp className='ms-auto mt-1 skill-toggler' type="button" data-bs-toggle="collapse" data-bs-target= '#collapse-frontend'/>
                    </div>
                    {/* Front End Elements */}
                    <div className = 'skills' id='collapse-frontend'>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>HTML</span>
                                <p>80%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>CSS</span>
                                <p>60%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>HTML</span>
                                <p>75%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>React</span>
                                <p>70%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>                                      
                </div>
                {/* Back End Column */}
                <div class="col-sm">
                    <div className='d-flex flex-row'>
                        <div>
                            <h3>Back-End Development</h3>
                            <p>More than 2 Years</p>
                        </div>
                        <RxCaretUp className='ms-auto mt-1 skill-toggler' type="button" data-bs-toggle="collapse" data-bs-target= '#collapse-backend'/>
                    </div>

                    {/* Back End Elements */}
                    <div className = 'skills' id='collapse-backend'>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>Node</span>
                                <p>60%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>Firebease</span>
                                <p>50%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>Marklogic</span>
                                <p>75%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='d-flex flex-row'>
                                <span className = 'me-auto'>SQL</span>
                                <p>75%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Skills