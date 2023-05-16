import React from 'react';
import Image from 'next/image';


const Projects = () => {
  return (
    <div className='md:h-screen mx-auto w-full p-2 px-24'>
       <div className="flex mx-auto flex-col justify-center h-full">
        <p className='uppercase py-3 text-[#5651e5] tracking-widest'>Projects</p>
        <h2 className="py-3">What I,ve Built</h2>
        <div className="flex items-center h-auto w-full shadow-xl rounded-xl justify-center p-3">
            <Image src="/../public/assets/moviesearch.png" className='rounded-xl hover:opacity-15 hover:scale-100 ease-in duration-500'  alt="movie-project" width={1000} height={600} ></Image>
        </div>
      </div>
    </div>
  )
}

export default Projects