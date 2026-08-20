import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-container">
          <Link href="/" className="navbar-brand" aria-label="Election Process Education Home">
            Election Process Education
          </Link>
          <ul className="navbar-links" role="list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/election-process">Election Process</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
