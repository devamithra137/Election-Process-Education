"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface EducationalTopic {
  id: string;
  title: string;
  description: string;
  href: string;
  keywords: string[];
}

const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    id: "election-process",
    title: "Election Process",
    description: "Step-by-step overview of democratic election stages and governance.",
    href: "/election-process",
    keywords: [
      "stages",
      "democracy",
      "overview",
      "timeline",
      "candidates",
      "campaigns",
      "civics",
      "government",
    ],
  },
  {
    id: "voter-registration",
    title: "Voter Registration",
    description: "Eligibility criteria, required documents, and registration methods.",
    href: "/voter-registration",
    keywords: [
      "eligibility",
      "requirements",
      "documents",
      "id",
      "deadlines",
      "register",
      "enrollment",
      "electoral roll",
    ],
  },
  {
    id: "voting-process",
    title: "Voting Process",
    description: "Pre-election preparation, polling location procedures, and casting ballots.",
    href: "/voting-process",
    keywords: [
      "ballot",
      "polling place",
      "booth",
      "casting vote",
      "in-person",
      "mail-in",
      "absentee",
      "verification",
    ],
  },
  {
    id: "vote-counting",
    title: "Vote Counting & Results",
    description: "Ballot collection, verification, tallying, reconciliation, and results declaration.",
    href: "/vote-counting",
    keywords: [
      "tabulation",
      "tallying",
      "reconciliation",
      "certification",
      "audits",
      "canvassing",
      "declaration",
      "outcomes",
    ],
  },
  {
    id: "election-terminology",
    title: "Election Terminology",
    description: "Comprehensive glossary of fundamental election concepts and terms.",
    href: "/glossary",
    keywords: [
      "glossary",
      "definitions",
      "terms",
      "vocabulary",
      "concepts",
      "dictionary",
      "phrases",
    ],
  },
  {
    id: "knowledge-quiz",
    title: "Knowledge Quiz",
    description: "Interactive self-assessment quiz to test your election knowledge.",
    href: "/quiz",
    keywords: [
      "questions",
      "test",
      "assessment",
      "practice",
      "answers",
      "review",
      "trivia",
      "check",
    ],
  },
];

export default function ContentSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return EDUCATIONAL_TOPICS;
    }
    return EDUCATIONAL_TOPICS.filter((topic) => {
      const matchesTitle = topic.title.toLowerCase().includes(query);
      const matchesDescription = topic.description.toLowerCase().includes(query);
      const matchesKeywords = topic.keywords.some((kw) =>
        kw.toLowerCase().includes(query)
      );
      return matchesTitle || matchesDescription || matchesKeywords;
    });
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <section
      className="content-search-section"
      aria-labelledby="content-search-heading"
    >
      <SectionHeading
        title="Search Educational Topics"
        subtitle="Quickly find guides, terminologies, and quizzes across the platform."
      />

      <div className="content-search-container">
        <label htmlFor="site-content-search-input" className="sr-only">
          Search educational topics
        </label>
        <div className="content-search-input-wrapper">
          <span className="content-search-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            id="site-content-search-input"
            type="search"
            className="content-search-input"
            placeholder="Search topics (e.g., voting, registration, quiz)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search educational topics"
            autoComplete="off"
          />
          {searchQuery && (
            <button
              type="button"
              className="content-search-clear-button"
              onClick={handleClear}
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>

        <div className="content-search-status" aria-live="polite">
          {searchQuery.trim() && (
            <span className="content-search-status-text">
              Showing {filteredTopics.length} of {EDUCATIONAL_TOPICS.length} topics matching &ldquo;{searchQuery.trim()}&rdquo;
            </span>
          )}
        </div>
      </div>

      <div className="content-search-results-wrapper">
        {filteredTopics.length > 0 ? (
          <div className="content-search-grid" role="list">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="content-search-card"
                role="listitem"
              >
                <div className="content-search-card-body">
                  <h3 className="content-search-card-title">{topic.title}</h3>
                  <p className="content-search-card-description">
                    {topic.description}
                  </p>
                </div>
                <div className="content-search-card-footer">
                  <Link
                    href={topic.href}
                    className="content-search-card-link"
                    aria-label={`Learn more about ${topic.title}`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="content-search-empty-state" role="status">
            <p className="content-search-empty-message">
              No matching topics found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
