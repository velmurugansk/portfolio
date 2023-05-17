import React from 'react';
import Image from 'next/image';
import movprjectimg from '../public/assets/moviesearch.png';


const Projects = () => {
  return (
    <div id="projects" className='md:h-screen mx-auto w-full p-2 px-24'>
       <div className="flex mx-auto flex-col justify-center h-full">
        <p className='uppercase py-3 text-[#5651e5] tracking-widest'>Projects</p>
        <h2 className="py-3">What I,ve Built</h2>
        <div className="flex items-center h-auto w-full shadow-xl rounded-xl justify-center p-3">
            <Image src={movprjectimg} className='rounded-xl hover:opacity-15 hover:scale-100 ease-in duration-500'  alt="movie-project" />            
        </div>
      </div>
    </div>
  )
}

export default Projects