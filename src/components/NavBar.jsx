import { User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className='bg-white shadow-md'>
        <>
        <div className='py-4 shadow-md '>
            <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>
                <div className='flex gap-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                      <li>
                        <Link to='/'>About</Link>
                    </li>
                      <li>
                        <Link to='/'>FAQ</Link>
                    </li>
                     <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to='/'>Sign</Link>
                    </li>
                      <li>
                        <Link to='/'>My Account</Link>
                    </li>
                </div>
                <User size={40} className='bg-gray-200 p-2 text-black rounded cursor-pointer'/>
            </ul>
        </div>
        </>
    </header>
  )
}

export default NavBar
