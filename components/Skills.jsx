import React from 'react'
import {AiFillHtml5} from "react-icons/ai";
import {SiCss3,SiTailwindcss, SiBootstrap, SiJquery,SiReact} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills" className='w-full mx-auto md:h-100 p-2 px-24'>
      <div className="flex mx-auto flex-col justify-center h-full">
        <p className='uppercase py-3 text-[#5651e5] tracking-widest'>Skills</p>
        <h2 className="py-3">What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className="lg:col-span-1 md:col-span-2 py-2 px-4 bg-white shadow-lg">
            <div className="flex justify-between items-center">
              <p>HTML</p>
              <AiFillHtml5 size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 bg-white py-2 px-4 shadow-lg">
            <div className="flex justify-between items-center">
              <p>CSS</p>
              <SiCss3 size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 py-2 px-4 bg-white shadow-lg">
            <div className="flex justify-between items-center">
              <p>Tailwind</p>
              <SiTailwindcss size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 bg-white py-2 px-4 shadow-lg">
            <div className="flex justify-between items-center">
              <p>Bootstrap 4</p>
              <SiBootstrap size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 py-2 px-4 bg-white shadow-lg">
            <div className="flex justify-between items-center">
              <p>Javascript</p>
              <IoLogoJavascript size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 bg-white py-2 px-4 shadow-lg">
            <div className="flex justify-between items-center">
              <p>JQuery</p>
              <SiJquery size={24} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 bg-white py-2 px-4 shadow-lg">
            <div className="flex justify-between items-center">
              <p>React JS</p>
              <SiReact size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills