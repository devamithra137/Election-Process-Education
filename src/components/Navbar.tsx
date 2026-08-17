import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          Election Process Education
        </Link>
        <ul className="navbar-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#process">Election Process</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
