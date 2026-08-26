import React from "react";
import Link from "next/link";

interface FooterNavGroup {
  title: string;
  links: { href: string; label: string }[];
}

const NAV_GROUPS: FooterNavGroup[] = [
  {
    title: "Overview",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Educational Guides",
    links: [
      { href: "/election-process", label: "Election Process" },
      { href: "/voter-registration", label: "Voter Registration" },
      { href: "/voting-process", label: "Voting Process" },
      { href: "/vote-counting", label: "Vote Counting & Results" },
    ],
  },
  {
    title: "Resources & Tools",
    links: [
      { href: "/glossary", label: "Glossary" },
      { href: "/quiz", label: "Knowledge Quiz" },
      { href: "/resources", label: "Useful Election Information" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <h2 className="footer-brand-title">Election Process Education</h2>
            <p className="footer-statement">
              Election Process Education is a neutral, non-partisan educational project dedicated to explaining democratic election systems and procedures clearly and accessibly.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <div className="footer-nav-columns">
              {NAV_GROUPS.map((group) => (
                <div key={group.title} className="footer-nav-group">
                  <h3 className="footer-heading">{group.title}</h3>
                  <ul className="footer-links" role="list">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
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
