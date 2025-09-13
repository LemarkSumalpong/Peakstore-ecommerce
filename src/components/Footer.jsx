import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md py-4 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className='md:col-span-2'>
            <h2 className="text-blue-400 text-2xl ">Contact Us</h2>
            <h3 className="text-white text-2xl font-sans font-semibold">
              Let's Discuss Your Vision, With Us
            </h3>

            <div className="mt-4">
              <button className="flex items-center gap-2  cursor-pointer text-sm font-medium bg-white text-black py-3 px-6  border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
                <span>Get Started</span>
                <ArrowRight size={20} className="shrink-0" />
              </button>
            </div>

            <div className="py-4">
              <h3 className="text-blue-400 uppercase">Or Email Us At</h3>
              <button className="bg-[#18192e] text-sm  border-0 text-white px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition">
                <span>sumalponglemark2@gmail.com</span>
                <Mail size={16} className="shrink-0" />
              </button>
            </div>
            </div>
              <div>
                <h3  className="text-lg font-semibold mb-4 text-blue-400">Qick Links</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>
                    <a href="#" className="hover:text-blue-400">Home</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">About</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Information</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Shipping Info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Returns
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8">
            <div className="flex items-center justify-between py-6">
              <p className="text-blue-400 text-sm">
                &copy; 2024 PeakStore. All rights reserved.
              </p>

              <div className="flex gap-4 text-white">
                <Facebook className="cursor-pointer hover:text-blue-400 transition" />
                <Linkedin className="cursor-pointer hover:text-blue-500 transition" />
                <Twitter className="cursor-pointer hover:text-sky-400 transition" />
                <Instagram className="cursor-pointer hover:text-pink-400 transition" />
              </div>
            </div>
          </div>
      
    </footer>
  );
}

export default Footer;
