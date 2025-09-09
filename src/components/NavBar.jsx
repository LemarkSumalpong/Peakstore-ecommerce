import { ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md ">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4 font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div
              className={`${
                isOpen
                  ? 'flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4'
                  : 'hidden'
              }`}
            >
              <li>
                <Link to="/">Sign</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>
            <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </ul>
        </div>
        <nav className="flex justify-between items-center container mx-auto py-1 ">
          <div className="flex items-center">
            <Link to="/" className=" py-2 px-4 rounded">
              <img src={logo} alt="PeakStore logo" className="h-12 w-auto" />
            </Link>
          </div>
          <form className="w-1/2  sm:block hidden">
            <input
              type="text"
              placeholder="Search Product..."
              className="bg-zinc-100 rounded-md border borders-zinc-200 focus:outline-none py-3 px-3 w-full"
            />
          </form>
          <Link>
            <ShoppingCart
              size={50}
              className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
            />
          </Link>
        </nav>
      </>
    </header>
  );
}

export default NavBar;
