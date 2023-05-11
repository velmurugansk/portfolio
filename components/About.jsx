import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='flex items-center md:h-screen justify-center p-2 px-3 w-full'>
      <div className="md:grid grid-cols-3 gap-8">
        <div className='col-span-2'>
          <p className='uppercase text-[#5651e5] text-xl tracking-widest'>About</p>
          <h2 className='py-3'>Who I Am</h2>
          <p className='text-gray-600 py-1'>In 2019, I started my career as a user interface developer. In 2021, I renewed my Frontend Developer career.</p>
        </div>
        <div className='text-center shadow-xl shadow-gray-400 p-2 rounded-xl'>
          <Image src="/../public/assets/programmer.png" className='mx-auto' height="400" width="400" alt="programer-img"></Image>
        </div>
      </div>      
    </div>
  )
}

export default About