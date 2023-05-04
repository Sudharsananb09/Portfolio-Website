import React from 'react'
import {SiLinkedin} from "react-icons/si";
import {BsGithub} from "react-icons/bs";
import {MdOutlineMailOutline} from "react-icons/md";

const SocialProfile = () => {
  return (
    <div className='icons d-flex flex-column align-items-start me-5'>
      <a href='https://github.com/Sudharsananb09'>
        <BsGithub />
      </a>
      <a href='https://www.linkedin.com/in/sudhanb/'>
        <SiLinkedin />
      </a>
      <a href='https://www.linkedin.com/in/sudhanb/'>
        <MdOutlineMailOutline />
      </a>
    </div>
  )
}

export default SocialProfile