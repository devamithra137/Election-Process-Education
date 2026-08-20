"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

import {
  type GlossaryCategory,
  GLOSSARY_CATEGORIES,
  GLOSSARY_ITEMS,
} from "@/data/glossary";

export type { GlossaryCategory };

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory>("All");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GLOSSARY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesQuery =
        !query ||
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
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

      <section className="glossary-filters-section" aria-label="Filter glossary terms">
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
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="glossary-category-filter" role="group" aria-label="Filter by topic category">
          <span className="category-filter-label" id="category-filter-label">
            Filter by topic:
          </span>
          <div className="category-pill-group" aria-labelledby="category-filter-label">
            {GLOSSARY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`category-pill-button ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="glossary-search-status" aria-live="polite">
          {(searchQuery.trim() || selectedCategory !== "All") && (
            <span className="glossary-result-count">
              Showing {filteredItems.length} of {GLOSSARY_ITEMS.length} terms
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              {searchQuery.trim() && ` matching "${searchQuery.trim()}"`}
            </span>
          )}
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
                <div className="glossary-card-header">
                  <dt className="glossary-term">{item.term}</dt>
                  <span className="glossary-category-badge">{item.category}</span>
                </div>
                <dd className="glossary-definition">{item.definition}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="glossary-empty-state" role="status">
            <p className="empty-message">No matching terms found.</p>
            <p className="empty-subtext">
              Try adjusting your search query, selecting another category, or{" "}
              <button
                type="button"
                className="empty-clear-link"
                onClick={handleResetFilters}
              >
                reset all filters
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
