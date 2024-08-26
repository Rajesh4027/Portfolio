import { Bars3Icon } from  '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {
    const [togglemenu,setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-5 py-2 bg-primary'>
        <a className='font-bold text-black' href="#">Hello</a>
        <nav className='hidden md:block'>
        <ul className="flex text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        {togglemenu && <nav className='block md:hidden '>
        <ul className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>}
        <button className='block md:hidden' onClick={()=>setToggleMenu(!togglemenu)}><Bars3Icon className='text-white h-5 mr-3'/></button>
      </header>
  )
}
