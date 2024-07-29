import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import {FaTimes} from 'react-icons/fa'
const Titles = [{ name: "Home", path : '/' }, { name: "Skills", path : '/skills' }, { name: "About", path : '/about' },, { name: "Contact", path : '/contact' }]

const Header = () => {
  const [resnav, setResnav] = useState(false);
  const handleClick = () => setResnav(!resnav);
  return (
    <div className='fixed w-full h-16 z-[2] bg-[#151515]'>
      <div className="flex justify-end items-center px-12 w-full h-full">
        <ul className='hidden md:flex'>
          {Titles.map(elem => {
            return (<li className='px-3 cursor-pointer text-white' key={elem.name}>{elem.name}</li>)
          })}
        </ul>
        <div onClick={handleClick} className="md:hidden z-[3] text-white">
          {!resnav ? <FaBars /> : <FaTimes /> }
        </div>
        <ul className={!resnav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen px-3 py-2 bg-[#151515]'}>
          {Titles.map(elem => {
            return (<li className='px-3 py-1 cursor-pointer text-white' key={elem.name}>{elem.name}</li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
