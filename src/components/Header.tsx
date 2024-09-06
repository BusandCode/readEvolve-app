import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md font-suse">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-6 px-8 sm:px-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="w-32 sm:w-40" src={logo} alt="logo" />
        </div>

        {/* Menu Icon */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Help
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Side Pane Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 lg:hidden`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-semibold"></span>
            <button onClick={toggleMenu} aria-label="Close menu">
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <nav className="mt-4">
            <ul className="flex flex-col space-y-6 p-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
