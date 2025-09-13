import { ArrowRight } from 'lucide-react';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4 ">
        <div className="min-h-60">
          <div>
            <div className="py-5 px-3 ">
              <h2 className="text-blue-400 text-2xl ">Contact Us</h2>
              <h3 className="text-white text-2xl font-sans font-semibold">
                Let's Discuss Your Vision, With Us
              </h3>
              <div className="py-4">
                <button className="flex items-center gap-2  cursor-pointer text-sm font-medium bg-white text-black py-3 px-6  border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="shrink-0" />
                </button>
              </div>
              <div className="py-4">
                <h3 className="text-blue-400 uppercase">Or Email Us At</h3>
                <button className="flex items-center gap-2  cursor-pointer text-sm font-medium bg-slate-400 text-black py-3 px-6  border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="shrink-0" />
                </button>
              </div>
            </div>
            <p className="text-white text-center py-6">
              &copy; 2024 PeakStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
