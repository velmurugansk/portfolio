import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='flex items-center md:h-screen p-2 px-3 w-full'>
      <div className="grid grid-cols-3 gap-4">
        <div className='col-span-2'>
          <p className='uppercase'>About</p>
          <h2>Who I Am</h2>
          <p>In 2019, I started my career as a user interface developer. In 2021, I renewed my Frontend Developer career.</p>
        </div>
        <div className="col-span-1">
          <Image src="/../public/assets/programmer.png" height="400" width="400" alt="programer-img"></Image>
        </div>
      </div>      
    </div>
  )
}

export default About