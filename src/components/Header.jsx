import React from 'react'
import { Link } from 'react-router-dom'
const Titles = [{ name: "Home", path : '/' }, { name: "Skills", path : '/skills' }, { name: "About", path : '/about' },, { name: "Contact", path : '/contact' }]

const Header = () => {

  return (
    <div className='fixed w-full h-16 shadow-lg z-[2]'>
      <div className="flex justify-end items-center px-3 w-full h-full">
        <ul className='hidden md:flex'>
          {Titles.map(elem => {
            return (<li className='px-3 cursor-pointer' key={elem.name}><Link to={elem.path}>{elem.name}</Link></li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
