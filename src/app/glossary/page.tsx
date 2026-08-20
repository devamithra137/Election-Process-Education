"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

interface GlossaryItem {
  term: string;
  definition: string;
}

const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: "Voter",
    definition:
      "An eligible individual who exercises their right to participate in a democratic election by casting a ballot.",
  },
  {
    term: "Voter Registration",
    definition:
      "The official process through which eligible individuals register with electoral authorities to participate in upcoming elections.",
  },
  {
    term: "Electoral Roll",
    definition:
      "An official register maintained by election authorities listing all individuals eligible to vote within a specific jurisdiction.",
  },
  {
    term: "Constituency",
    definition:
      "A defined geographical region or electoral district whose eligible voters elect representatives to public office.",
  },
  {
    term: "Candidate",
    definition:
      "An individual competing in an election to be elected to an official office or legislative body.",
  },
  {
    term: "Ballot",
    definition:
      "The official medium used by a voter to record their choice, such as a paper ballot sheet or an electronic voting system interface.",
  },
  {
    term: "Polling Station",
    definition:
      "A designated physical location where voters cast their votes on designated election days under official supervision.",
  },
  {
    term: "Vote Counting",
    definition:
      "The process of collecting, verifying, and tallying votes to calculate total results for each candidate or referendum measure.",
  },
  {
    term: "Election Result",
    definition:
      "The certified final outcome of an election, officially detailing the vote tallies and declaring elected candidates or passed measures.",
  },
  {
    term: "Election Authority",
    definition:
      "The official agency or public body legally tasked with administering, managing, and enforcing rules for democratic elections.",
  },
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return GLOSSARY_ITEMS;

    return GLOSSARY_ITEMS.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <main className="glossary-page-container">
      <nav className="glossary-nav" aria-label="Page navigation">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/election-process" className="back-link">
          ← Back to Election Process
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/voter-registration" className="back-link">
          ← Back to Voter Registration
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/voting-process" className="back-link">
          ← Back to Voting Process
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/vote-counting" className="back-link">
          ← Back to Vote Counting
        </Link>
      </nav>

      <div className="glossary-header">
        <SectionHeading
          title="Election Terminology"
          subtitle="A clear, beginner-friendly glossary of fundamental terms used across democratic election systems."
        />
      </div>

      <section className="glossary-intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className="intro-text">
          This glossary helps beginners understand key terms commonly used when learning about elections, voting procedures, and electoral administration.
        </p>
      </section>

      <section className="glossary-search-section" aria-label="Search glossary terms">
        <div className="glossary-search-container">
          <label htmlFor="glossary-search-input" className="glossary-search-label">
            Search terms or definitions:
          </label>
          <div className="glossary-search-input-wrapper">
            <input
              id="glossary-search-input"
              type="text"
              className="glossary-search-input"
              placeholder="e.g. Ballot, Registration, Authority..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search election terms or definitions"
            />
            {searchQuery && (
              <button
                type="button"
                className="glossary-clear-button"
                onClick={handleClear}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div className="glossary-search-status" aria-live="polite">
            {searchQuery.trim() && (
              <span className="glossary-result-count">
                Showing {filteredItems.length} of {GLOSSARY_ITEMS.length} terms
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="glossary-content" aria-labelledby="terms-heading">
        <h2 id="terms-heading" className="glossary-section-title">
          Key Election Terms
        </h2>
        {filteredItems.length > 0 ? (
          <dl className="glossary-list">
            {filteredItems.map((item) => (
              <div key={item.term} className="glossary-card">
                <dt className="glossary-term">{item.term}</dt>
                <dd className="glossary-definition">{item.definition}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="glossary-empty-state" role="status">
            <p className="empty-message">No matching terms found.</p>
            <p className="empty-subtext">
              Try typing a different keyword or{" "}
              <button
                type="button"
                className="empty-clear-link"
                onClick={handleClear}
              >
                clear the search
              </button>{" "}
              to see all terms.
            </p>
          </div>
        )}
      </section>

      <div className="glossary-disclaimer" role="note">
        <p>
          <strong>Educational Note:</strong> Terminology and election procedures can differ between countries, election types, and local jurisdictions.
        </p>
      </div>
    </main>
  );
}
