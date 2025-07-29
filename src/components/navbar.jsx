import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar({ isDark, setIsDark }) {
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div
  className={`sticky top-0 w-full z-50 px-5 py-3 transition-all duration-300 shadow-md 
    ${sticky ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} 
    text-black dark:text-white`}
>

      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between dark:bg-gray-600 text-black dark:text-white">
        <div className="md:hidden flex items-center justify-between ">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="text-2xl md:text-3xl font-bold">
          <Link to="/">Book Store</Link>
        </div>

        <div className="flex items-center gap-4">
          <div
            ref={menuRef}
            className={`${menuOpen
              ? "fixed top-0 left-0 h-50 max-w-full bg-white dark:bg-gray-900 shadow-md z-50 p-6 md:static md:flex md:items-center md:gap-6 md:w-auto md:p-0 md:shadow-none"
              : "hidden md:flex md:items-center md:gap-6 md:w-auto"
              } mt-4 md:mt-0 transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-lg text-left">
              {["home", "course", "contact", "about"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "home" ? "/" : `/${link}`}
                    onClick={() => setActiveLink(link)}
                    className={`px-2 py-1 rounded-lg duration-300 cursor-pointer ${activeLink === link
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-600 hover:text-white"
                      }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative hidden md:block w-full md:w-64 mt-6 md:mt-0">
              <input
                type="search"
                placeholder="Search"
                className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-xl"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? "☀︎" : "☽"}
            </button>
            <a
              href="#"
              onClick={() => document.getElementById("loginModal").showModal()} 
              className="bg-black px-4 py-2 text-white rounded-md hover:bg-gray-700"
            >
              Login
            </a>
            <Login />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4 mt-4">
          <button
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-xl"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? "☀︎" : "☽"}
          </button>
          <a
            href="#"
            onClick={() => document.getElementById("loginModal").showModal()}
            className="bg-black px-4 py-2 text-white rounded-md hover:bg-gray-700"
          >
            Login
          </a>
          <Login />

        </div>
      </div>
    </div>
  );
}

export default Navbar;
