import React from 'react'
import {AiFillLinkedin,AiFillGithub, AiOutlineMail, AiOutlineUser} from "react-icons/ai";

const Mainconent = () => {
  return (
    <div className='h-screen w-full text-center'>
        <div className="flex justify-center w-full h-full items-center p-2">
            <div>
                <p className='uppercase tracking-widest text-sm text-gray-600'>Let's Build Something Together</p>
                <h1 className='text-gray-600 py-4'>Hi, I'm <span className='text-[#5653e5] uppercase'>s.k.velmurugan</span> </h1>
                <h1 className='text-gray-400 py-4'>A Frontend Web Developer</h1>
                <div className="flex justify-between py-4">
                  <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                    <AiFillLinkedin size={25} />
                  </div>
                  <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                    <AiFillGithub size={25} />
                  </div>
                  <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                    <AiOutlineMail size={25} />
                  </div>
                  <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                    <AiOutlineUser size={25} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainconent