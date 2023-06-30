import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-accent text-white   ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-accent rounded-box w-52"
          >
            <li>
              <Link to="/" className="hover:text-cyan-300">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-cyan-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-cyan-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-cyan-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost hover:text-cyan-300 text-white normal-case text-xl font-mono">
          Arshad's Portfolio
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-white  font-mono">
        <ul className="menu menu-horizontal px-1  ">
          <li>
            <Link to="/" className="hover:text-cyan-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-cyan-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-cyan-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
