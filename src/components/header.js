import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Shadient.co" className="h-10 " />
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <span>Company</span>
              <FiChevronDown />
            </button>
          </div>
          <Link to="/about" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/resource" className="hover:text-gray-300">
            Resources
          </Link>
          <a
            href="#"
            className="hidden md:block px-5 py-1.5 text-md border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black"
          >
            CONTACT
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white pb-4 z-40">
          <Link to="" className="block px-6 py-2 text-black hover:bg-gray-800">
            Company
          </Link>
          <Link
            to="/about"
            className="block px-6 py-2 text-black hover:bg-gray-800"
          >
            Services
          </Link>
          <Link
            to="/resource"
            className="block px-6 py-2 text-black hover:bg-gray-800"
          >
            Resources
          </Link>
          <Link
            to=""
            className="block px-6 py-2 border-t border-gray-700 text-yellow-500 hover:bg-gray-800"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
