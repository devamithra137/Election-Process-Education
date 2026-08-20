"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-container">
          <Link
            href="/"
            className="navbar-brand"
            aria-label="Election Process Education Home"
            onClick={closeMenu}
          >
            Election Process Education
          </Link>
          <button
            type="button"
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="navbar-toggle-icon" aria-hidden="true">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
          <ul
            id="navbar-menu"
            className={`navbar-links ${isOpen ? "is-open" : ""}`}
            role="list"
          >
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/election-process" onClick={closeMenu}>
                Election Process
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
