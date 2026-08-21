import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About Election Process Education",
  description:
    "Learn about the purpose, educational approach, and coverage of the Election Process Education project.",
};

const LEARNING_TOPICS = [
  {
    title: "Election Process",
    href: "/election-process",
    description:
      "A comprehensive, step-by-step overview of democratic election stages and governance.",
  },
  {
    title: "Voter Registration",
    href: "/voter-registration",
    description:
      "Eligibility criteria, required documentation, deadlines, and registration procedures.",
  },
  {
    title: "Voting Process",
    href: "/voting-process",
    description:
      "Pre-election preparation, polling location procedures, voter verification, and casting ballots.",
  },
  {
    title: "Vote Counting and Results",
    href: "/vote-counting",
    description:
      "Secure ballot collection, verification, tallying, reconciliation, and official results declaration.",
  },
  {
    title: "Election Terminology",
    href: "/glossary",
    description:
      "A searchable, beginner-friendly glossary of fundamental election terms and definitions.",
  },
  {
    title: "Knowledge Quiz",
    href: "/quiz",
    description:
      "Interactive self-assessment questions to test and reinforce your understanding.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page-container">
      <nav className="about-nav" aria-label="Page navigation">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/election-process" className="back-link">
          Election Process
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/voter-registration" className="back-link">
          Voter Registration
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/voting-process" className="back-link">
          Voting Process
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/glossary" className="back-link">
          Glossary
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/quiz" className="back-link">
          Quiz
        </Link>
      </nav>

      <div className="about-page-header">
        <SectionHeading
          title="About Election Process Education"
          subtitle="Understanding democratic election systems through accessible, non-partisan educational resources."
        />
      </div>

      <section className="about-intro-section" aria-labelledby="about-intro-heading">
        <h2 id="about-intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className="about-intro-text">
          Election Process Education is an educational web application designed to help users understand the general stages of an election. The platform breaks down complex electoral concepts into clear, structured, and easy-to-follow topics.
        </p>
      </section>

      <div className="about-sections-grid">
        <section className="about-card" aria-labelledby="purpose-heading">
          <h2 id="purpose-heading" className="about-card-title">
            Our Purpose
          </h2>
          <p className="about-card-text">
            The project aims to make election-related concepts easier for beginners to understand. By offering clear explanations, structured walkthroughs, and interactive learning tools, we provide learners with a foundational understanding of how democratic elections function.
          </p>
        </section>

        <section className="about-card" aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="about-card-title">
            Educational Approach
          </h2>
          <p className="about-card-text">
            The application presents general educational information and avoids political persuasion. Our resources remain completely non-partisan, neutral, and focused purely on explaining the procedural, administrative, and civic mechanics of elections.
          </p>
        </section>
      </div>

      <section className="about-topics-section" aria-labelledby="learning-heading">
        <h2 id="learning-heading" className="about-section-heading">
          What You Can Learn
        </h2>
        <p className="about-section-subtitle">
          Explore key topics covering every phase of the democratic election cycle:
        </p>

        <div className="about-topics-grid" role="list">
          {LEARNING_TOPICS.map((topic) => (
            <div key={topic.href} className="about-topic-card" role="listitem">
              <div className="about-topic-body">
                <h3 className="about-topic-title">{topic.title}</h3>
                <p className="about-topic-description">{topic.description}</p>
              </div>
              <div className="about-topic-footer">
                <Link
                  href={topic.href}
                  className="about-topic-link"
                  aria-label={`Explore ${topic.title}`}
                >
                  Explore {topic.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="about-disclaimer-section"
        aria-labelledby="disclaimer-heading"
      >
        <div className="about-disclaimer-card" role="note">
          <h2 id="disclaimer-heading" className="about-disclaimer-title">
            Important Disclaimer
          </h2>
          <p className="about-disclaimer-text">
            Election rules, eligibility requirements, deadlines, voting methods, and procedures vary by jurisdiction. Users should always consult the relevant official election authority for current, binding rules, deadlines, and instructions applicable to their specific locality.
          </p>
        </div>
      </section>
    </main>
  );
}
