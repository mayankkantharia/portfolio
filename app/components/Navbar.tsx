"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#internships", label: "Internships" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map((link) => (
    <a
    key={link.href}
    href={link.href}
    onClick={() => isMobile && setIsOpen(false)}
    className={`${isMobile
      ? 'text-gray-300 hover:bg-primary/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
      : 'text-gray-300 hover:text-primary-light px-3 py-2 rounded-md text-lg font-medium'
    } ${activeLink === link.href.substring(1) ? 'nav-active' : ''}`.trim()}
    >
    {link.label}
    </a>
    ));

  return (
    <nav
      className="glass-card fixed top-0 w-full z-50"
      style={{ backdropFilter: 'saturate(150%) blur(20px)', WebkitBackdropFilter: 'saturate(150%) blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4" id="desktop-nav">
                {renderNavLinks(false)}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`glass-card md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        style={{ backdropFilter: 'saturate(150%) blur(18px)', WebkitBackdropFilter: 'saturate(150%) blur(18px)' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {renderNavLinks(true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
