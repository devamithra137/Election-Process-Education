import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/election-process", label: "Election Process" },
  { href: "/voter-registration", label: "Voter Registration" },
  { href: "/voting-process", label: "Voting Process" },
  { href: "/vote-counting", label: "Vote Counting" },
  { href: "/glossary", label: "Glossary" },
  { href: "/quiz", label: "Quiz" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <h2 className="footer-brand-title">Election Process Education</h2>
            <p className="footer-statement">
              An educational resource for understanding the general election process.
            </p>
          </div>

          <div className="footer-nav-section">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            This website is for educational purposes and is not an official election authority.
          </p>
          <p className="footer-guidance">
            For current election rules, deadlines, registration requirements, and official results, consult the relevant election authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
