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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home") || "Home", path: "/" },
    { name: t("about") || "About", path: "/about" },
    { name: t("services") || "Services", path: "/services" },
    { name: t("portfolio") || "Portfolio", path: "/portfolio" },
    { name: t("contact") || "Contact", path: "/contact" },
  ];

  const activeClass = scrolled
    ? "text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
    : "text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white";

  const inactiveClass = scrolled
    ? "text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    : "text-white/90 font-medium hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <style>{`
        /* iOS-style frosted glass effect */
        .navbar-glass {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .navbar-glass-dark {
          background: rgba(17, 24, 39, 0.60);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-menu-glass {
          background: rgba(255, 255, 255, 0.80);
          backdrop-filter: saturate(180%) blur(25px);
          -webkit-backdrop-filter: saturate(180%) blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.20);
        }

        /* Smooth transitions */
        .navbar-container {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <nav className="fixed w-full top-0 z-50 transition-all duration-500">
        <div
          className={`navbar-container max-w-7xl mx-auto px-4 md:px-8 transition-all duration-500 ${
            scrolled ? "navbar-glass shadow-lg rounded-full mt-4 mx-4" : ""
          }`}
        >
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              {!scrolled ? (
                <img
                  src={logo1}
                  className="w-20 md:w-24 transition-transform group-hover:scale-105 duration-300"
                  alt="TeamYearng Logo"
                />
              ) : (
                <img
                  src={logo}
                  className="w-20 md:w-24 transition-transform group-hover:scale-105 duration-300"
                  alt="TeamYearng Logo"
                />
              )}
            </NavLink>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-8 items-center">
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
            </div>

            {/* CTA Button & Language Selector */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <LanguageSelectorMUI /> */}
              <button
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-white/15 backdrop-blur-md text-white border border-white/30 hover:bg-white/25"
                }`}
              >
                {t("getStarted") || "Get Started"}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              {/* <LanguageSelectorMUI /> */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-white/10 text-white"
                }`}
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-4 mt-2 mobile-menu-glass rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md"
                        : "text-gray-800 font-medium hover:bg-white/50"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md">
                {t("getStarted") || "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
