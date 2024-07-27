import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen bg-[#151515]'>
      <div className="flex flex-col mx-auto justify-center items-center h-full">
        <p className='text-white py-2'>My name is</p>
        <h1 className='text-[5vw] sm:text-5xl font-bold text-[#8644A2]'>S.K.VELMURUGAN</h1>
        <h2 className='font-bold text-3xl py-3 text-[#937DC2]'>I'm a Frontend Developer.</h2>
        <p className='py-4 text-[#8892b0]'>I'm focused on building responsive frontend applications.</p>
        <div><button className='text-white px-6 py-2 border-2 hover:bg-[#8644A2]'>Hire Me</button></div>
      </div>
    </div>
  )
}

export default Main
