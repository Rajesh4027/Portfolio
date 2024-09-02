import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function Header() {
  const [togglemenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();




  const handlebar = () => {
    setToggleMenu(!togglemenu)

  }

  const regBtn = () => {
    navigate('/register')
  }
  const logBtn = () => {
    navigate('/login')
  }

  return (
    <header className='flex  justify-between px-3 py-3 bg-nav items-center '  >
      <a className='font-bold text-black text-2xl' href="#">Hello</a>
      <nav className='hidden md:block'>
        <ul className="flex font-light">
          <li className='nav-style'><a href="#home">Home</a></li>
          <li className='nav-style'><a href="#about">About</a></li>
          <li className='nav-style'><a href="#projects">Projects</a></li>
          <li className='nav-style'><a href="#resume">Resume</a></li>
          <li className='nav-style'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='hidden md:block '>
        <button className='px-3 rounded-md border-2 hover:border-blue-800  py-1 mr-2 hover:text-blue-950 hover:font-medium ' onClick={logBtn}>Login</button>
        <button className='reg-btn ' onClick={regBtn}>Register</button>
        <Link to='/' className='px-3 rounded-md border-2 hover:border-blue-800  py-1 mr-2 hover:text-blue-950 hover:font-medium ml-2'>Logout</Link>
      </div>

      {togglemenu && <nav className='block md:hidden '>
        <ul onClick={() => setToggleMenu(!togglemenu)} className="mobile-nav">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>

          <div className='flex flex-col drop-shadow-lg  bg-slate-200 py-2'>
            <button className='py-2 border-2 mx-3  border-blue-700 bg-white rounded-md hover:bg-blue-800' onClick={logBtn}>Login</button>
            <button className='py-2 bg-blue-900 text-white mt-2 mx-3' onClick={regBtn}>Register</button>

          </div>

        </ul>

      </nav>


      }
      <button className='block md:hidden' onClick={handlebar}><Bars3Icon className=' hover:bg-blue-900 hover:text-white px-1  h-7 mr-3' /></button>
    </header>

  )
}
