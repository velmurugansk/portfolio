import React from 'react'
const Titles = [{name : "Home"},{name : "Skills"},{name : "Contact"}]

const Header = () => {

  return (
    <div className='2xl px-4 py-2 flex justify-end'>
      <nav>
      <ul className='flex'>
        {Titles.map(elem => {          
          return (<li className='px-3 cursor-pointer' key={elem.name}>{elem.name}</li>)
        })}
      </ul>
      </nav>
    </div>
  )
}

export default Header
