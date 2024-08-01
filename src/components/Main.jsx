import React from 'react'
import hero from './../assets/images/web-dev.svg';
import resume from '../assets/resume.pdf';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Main = () => {
  return (
    <div className='w-full h-screen bg-[#151515] px-6 sm:px-20 gap-8'>
      <div className="flex flex-col md:flex-row mx-auto  flex-row items-center h-full">
        <div>
          <p className='text-white my-2'>Hello, I'm</p>
          <h1 className='text-3xl md:text-4xl name-txt font-bold text-white'>S.K.VELMURUGAN</h1>
          <h2 className='font-bold text-2xl md:text-3xl py-2 animatedtext text-[#8644A2]'>Frontend Developer.</h2>          
          <div className='flex flex-row items-center my-3'><FaLinkedin className='mr-2 cursor-pointer text-white hover:text-[#8644A2]'/>
          <FaGithub className='cursor-pointer text-white hover:text-[#8644A2]'/></div>
          <div><a href={resume} download="resume"><button className='text-white px-6 py-2 border-2 hover:bg-[#8644A2] hover:border-[#8644A2]'>
            Download CV</button></a></div>
        </div>
        <div className='mx-auto my-1'>
          <img src={hero} className='object-fill h-60 w-60 md:h-80 md:w-80' alt="devloperimg" />
        </div>
      </div>
    </div>
  )
}

export default Main
