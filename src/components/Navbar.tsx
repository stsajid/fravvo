import React, { useState } from "react";
import { Link } from "react-scroll";
import lsLogo from "../../public/lslogo.svg";

const navItems = [
  // { id: "host", label: "Host" },
  { id: "What to Expect", label: "What to Expect" },
  // { id: "session", label: "Session Details" },
  // { id: "tool", label: "Tool" },
  { id: "breakdown", label: "Agenda" },
  { id: "register", label: "Join" },
  // { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {!mobileMenuOpen ? (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center relative z-[1000]">
            <img
              src={lsLogo}
              alt="LathranSoft Logo"
              className="h-10 w-auto mx-auto cursor-pointer"
              style={{
                filter: "drop-shadow(0 0 15px rgba(237, 132, 37, 0.5))",
              }}
              onClick={() => {
                const scrollTop = window.scrollY;
                const scrollBottom =
                  window.innerHeight + window.scrollY >=
                  document.body.scrollHeight - 10;

                if (scrollTop < 100) {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                } else {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }
              }}
            />
          </div>

          <div className="hidden sm:flex absolute inset-x-0 justify-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  isDynamic={true}
                  offset={-100}
                  activeClass="bg-[#89ad3d] text-white"
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="bg-gradient-to-r from-orange-500 to-yellow-400 text-white"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
