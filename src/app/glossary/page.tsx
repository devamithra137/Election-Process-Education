import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Election Terminology",
  description:
    "A beginner-friendly educational glossary defining key terms used in democratic elections, including voters, registration, ballots, constituencies, and election authorities.",
};

const GLOSSARY_ITEMS = [
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

      <section className="glossary-content" aria-labelledby="terms-heading">
        <h2 id="terms-heading" className="glossary-section-title">
          Key Election Terms
        </h2>
        <dl className="glossary-list">
          {GLOSSARY_ITEMS.map((item) => (
            <div key={item.term} className="glossary-card">
              <dt className="glossary-term">{item.term}</dt>
              <dd className="glossary-definition">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="glossary-disclaimer" role="note">
        <p>
          <strong>Educational Note:</strong> Terminology and election procedures can differ between countries, election types, and local jurisdictions.
        </p>
      </div>
    </main>
  );
}
