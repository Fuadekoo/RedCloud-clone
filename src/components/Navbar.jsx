import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <img src="/redcloudlogo.png" alt="Red Cloud ICT Solutions" className="h-10" />
      </div>
      <div className="bg-slate-100 rounded-md border-r-4 px-3 mr-8">
        <ul className="flex space-x-6 text-gray-600 p-2">
          <li><Link to="/" className="hover:text-red-600 active:font-bold">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600 active:font-bold">About Us</Link></li>
          <li><Link to="/services" className="hover:text-red-600 active:font-bold">Services</Link></li>
          {/* <li><Link to="/portfolio" className="hover:text-red-600 active:font-bold">Portfolio</Link></li> */}
          <li><Link to="/testimonials" className="hover:text-red-600 active:font-bold">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-red-600 active:font-bold">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;