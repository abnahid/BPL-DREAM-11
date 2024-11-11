/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Logo from "../assets/logo.png";

const Navbar = ({ coinBalance }) => {
  // Sticky navigation.

  useEffect(() => {
    const handleScroll = () => {
      const headerNavbar = document.getElementById("headerNavbar");

      if (window.scrollY > 50) {
        headerNavbar.classList.add(
          "backdrop-blur-lg",
          "bg-white/70",
          "shadow-lg"
        );
      } else {
        headerNavbar.classList.remove(
          "backdrop-blur-lg",
          "bg-white/70",
          "shadow-lg"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="headerNavbar"
      className="flex items-center bg-base-100 mt-6 justify-between sticky top-0 z-50"
    >
      <div className="flex items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn btn-ghost">
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
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>

        <img className="btn btn-ghost" src={Logo} alt="Cricket Logo" />
      </div>

      <div className="lg:hidden">
        <p className="text-xl">BPL DREAM 11</p>
      </div>

      <div className="hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 text-xl text-gray-900 text-opacity-70">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <button className="text-xl border rounded-xl border-gray-900 border-opacity-10 p-4 m-1">
          {coinBalance} Coin
          <i className="fa-brands fa-bitcoin ml-3 text-yellow-500"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
