import React from 'react'
import hero from './../assets/images/heroimg.jpg';
import resume from '../assets/resume.pdf';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Main = () => {
  return (
    <div className='w-full h-screen bg-[#151515] px-6 sm:px-10 gap-8'>
      <div className="flex flex-col justify-center md:flex-row items-center h-full gap-9">
        <div className='text-center self-center'>
          <p className='text-white my-2'>Hello, I'm</p>
          <h1 className='text-2xl md:text-3xl name-txt font-bold text-white'>S.K.VELMURUGAN</h1>
          <h2 className='font-bold text-1xl md:text-2xl py-2 animatedtext text-[#8644A2]'>Frontend Developer.</h2>
          <div><a href={resume} download="resume"><button className='text-white px-6 py-2 border-2 hover:bg-[#8644A2] hover:border-[#8644A2] rounded-full'>
            Download CV</button></a></div>
          <div className='flex flex-row justify-center items-center my-3'><FaLinkedin className='mr-2 text-lg cursor-pointer text-white hover:text-[#8644A2]' />
            <FaGithub className='cursor-pointer text-lg text-white hover:text-[#8644A2]' /></div>
        </div>
        <div className='my-1'>
          <img src={hero} className='object-fill h-60 w-60 md:h-80 md:w-80 rounded-full' alt="devloperimg" />
        </div>
      </div>
    </div>
  )
}

export default Main
