import React from 'react'
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import bootstrap from '../assets/images/bootstrap.png';
import tailwind from '../assets/images/tailwind.png';
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.png';
import github from '../assets/images/github1.png';

const Skills = () => {

  const skills = [{
    key: 'HTML',
    img: html
  },{
    key: 'CSS',
    img: css
  },{
    key: 'Bootstrap',
    img: bootstrap
  },{
    key: 'Tailwind',
    img: tailwind
  },{
    key: 'javascript',
    img: javascript
  },{
    key: 'react',
    img: react
  },{
    key: 'github',
    img: github
  }]

  return (
    <div className='w-full lg:h-screen bg-[#151515] p-2 px-10 py-4'>
      <div className="flex flex-col justify-center h-full ">
        <p className='uppercase text-xl text-[#8644A2] text-center'>skills</p>
        <h2 className='text-white py-2 text-center'>What I Can Do</h2>
        <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4 justify-center items-center">
          {skills.map(elem => {
            return (<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-col-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={elem.img} alt="/" className='h-16 w-16'></img>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className='text-white uppercase'>{elem.key}</h3>
              </div>
            </div>
          </div>);
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Skills
