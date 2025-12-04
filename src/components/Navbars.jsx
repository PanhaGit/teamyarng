import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import LanguageSelectorMUI from "./LanguageSelectorMUI";
import { useTranslation } from "react-i18next";

const Navbars = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), path: "/" },
    // { name: t("about"), path: "/about" },
    // { name: t("contact"), path: "/contact" },
  ];

  const activeClass = "text-blue-600 border-b-2 border-blue-600 font-semibold";
  const inactiveClass = "text-blackLight font-medium hover:text-blue-600";

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16 transition-all duration-300 
        ${
          scrolled
            ? "bg-white/40 backdrop-blur-sm shadow-sm rounded-full mt-7"
            : "bg-transparent mt-3"
        }`}
      >
        {/* Logo */}
        <NavLink to="/">
          {!scrolled ? (
            <img src={logo1} className="w-20 md:w-24" alt="Logo" />
          ) : (
            <img src={logo} className="w-20 md:w-24" alt="Logo" />
          )}
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              {link.name}
            </NavLink>
          ))}
          {/* <LanguageSelectorMUI /> */}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelectorMUI />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-semibold"
                  : "block text-blackLight font-medium hover:text-blue-600"
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbars;
