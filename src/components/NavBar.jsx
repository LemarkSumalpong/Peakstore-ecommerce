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
            </ul>
        </div>
        </>
    </header>
  )
}

export default NavBar
