import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import BackToTop from "@/components/BackToTop";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata = {
  title: "Vote Counting and Results",
  description:
    "An educational guide to vote counting, verification, reconciliation, result compilation, official declaration, and publication of election results.",
};

export default function VoteCountingPage() {
  return (
    <main className="vote-counting-page-container">
      <ReadingProgress ariaLabel="Vote counting guide reading progress" />
      <nav className="vote-counting-nav" aria-label="Page navigation">
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
      </nav>

      <div className="vote-counting-header">
        <SectionHeading
          title="Vote Counting and Results"
          subtitle="Understanding how votes are collected, counted, verified, compiled, and officially declared in an election."
        />
      </div>

      <section className="vote-counting-intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className="intro-text">
          After voting ends, votes are processed, counted, verified, and official results are declared according to the applicable election procedures established by the governing election authority.
        </p>
      </section>

      <section className="vote-counting-verification" aria-labelledby="verification-heading">
        <h2 id="verification-heading" className="vote-counting-section-title">
          Why Verification Matters
        </h2>
        <div className="verification-card">
          <p>
            Verification helps ensure that reported results accurately reflect the votes recorded through the applicable process. Systematic audits, cross-checks, and transparent oversight help uphold public confidence and electoral integrity.
          </p>
        </div>
      </section>

      <section className="vote-counting-sections" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="vote-counting-section-title">
          Stages of Counting and Results Declaration
        </h2>

        <div className="vote-counting-grid">
          <article className="vote-counting-card">
            <div className="vote-counting-step">1</div>
            <div className="vote-counting-card-content">
              <h3>Collection of Votes</h3>
              <p>
                Ballot boxes are sealed at voting locations and transported securely to designated counting centers, while mail-in and electronic votes are processed through controlled collection protocols.
              </p>
            </div>
          </article>

          <article className="vote-counting-card">
            <div className="vote-counting-step">2</div>
            <div className="vote-counting-card-content">
              <h3>Counting Process</h3>
              <p>
                Authorized personnel or automated scanners count ballots methodically, recording totals for each contest under designated observation procedures.
              </p>
            </div>
          </article>

          <article className="vote-counting-card">
            <div className="vote-counting-step">3</div>
            <div className="vote-counting-card-content">
              <h3>Verification and Reconciliation</h3>
              <p>
                Count totals are verified against voter turnout records, ballot logs, and poll register totals to resolve discrepancies and confirm accuracy.
              </p>
            </div>
          </article>

          <article className="vote-counting-card">
            <div className="vote-counting-step">4</div>
            <div className="vote-counting-card-content">
              <h3>Result Compilation</h3>
              <p>
                Local vote tallies are compiled into regional and national totals across electoral districts by official election administrators.
              </p>
            </div>
          </article>

          <article className="vote-counting-card">
            <div className="vote-counting-step">5</div>
            <div className="vote-counting-card-content">
              <h3>Official Declaration</h3>
              <p>
                Election authorities officially certify and declare the final result once all verification checks, tallying procedures, and statutory review periods are complete.
              </p>
            </div>
          </article>

          <article className="vote-counting-card">
            <div className="vote-counting-step">6</div>
            <div className="vote-counting-card-content">
              <h3>Publication of Results</h3>
              <p>
                Certified results and detailed breakdowns are published on official election websites and public archives for full transparency and public inspection.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="vote-counting-note-section" aria-labelledby="note-heading">
        <h2 id="note-heading" className="sr-only">
          Jurisdiction Note
        </h2>
        <div className="jurisdiction-card" role="note">
          <p>
            Counting, verification, and result-declaration procedures can vary by country, election type, and jurisdiction.
          </p>
        </div>
      </section>

      <div className="vote-counting-disclaimer" role="note">
        <p>
          For current election results, specific counting procedures, and official notices, always consult the relevant official election authority for your jurisdiction.
        </p>
      </div>
      <BackToTop />
    </main>
  );
}
