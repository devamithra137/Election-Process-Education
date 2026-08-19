import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Voting Process",
  description:
    "An educational guide explaining the step-by-step voting process, from pre-election preparation and arrival at voting locations to verification, casting, confirming, and post-voting steps.",
};

export default function VotingProcessPage() {
  return (
    <main className="voting-proc-page-container">
      <nav className="voting-proc-nav" aria-label="Page navigation">
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
      </nav>

      <div className="voting-proc-header">
        <SectionHeading
          title="Voting Process"
          subtitle="Understanding the general sequence of steps voters follow to cast their ballot in a democratic election."
        />
      </div>

      <section className="voting-proc-intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className="intro-text">
          The voting process outlines the general sequence of steps an eligible voter typically goes through when participating in an election, from preparing beforehand to completing and confirming their vote.
        </p>
      </section>

      <section className="voting-proc-variation" aria-labelledby="variation-heading">
        <h2 id="variation-heading" className="voting-proc-section-title">
          Jurisdiction & Method Differences
        </h2>
        <div className="variation-card" role="note">
          <p>
            <strong>Educational Note:</strong> Voting methods (such as in-person paper ballots, electronic voting machines, or mail-in voting) and voter verification procedures vary by country, election type, and local jurisdiction.
          </p>
        </div>
      </section>

      <section className="voting-proc-sections" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="voting-proc-section-title">
          Stages of the Voting Process
        </h2>

        <div className="voting-proc-grid">
          <article className="voting-proc-card">
            <div className="voting-proc-step">1</div>
            <div className="voting-proc-card-content">
              <h3>Before Voting</h3>
              <p>
                Confirm your voter registration status, locate your assigned polling place or official voting channel, review sample ballots, and note the operating hours and requirements.
              </p>
            </div>
          </article>

          <article className="voting-proc-card">
            <div className="voting-proc-step">2</div>
            <div className="voting-proc-card-content">
              <h3>Arriving at the Voting Location</h3>
              <p>
                Go to your designated polling station, voting center, or access your official mail-in ballot materials within the designated voting timeframe.
              </p>
            </div>
          </article>

          <article className="voting-proc-card">
            <div className="voting-proc-step">3</div>
            <div className="voting-proc-card-content">
              <h3>Voter Verification</h3>
              <p>
                Check in with election officials or automated check-in systems to verify your identity and eligibility according to local electoral rules.
              </p>
            </div>
          </article>

          <article className="voting-proc-card">
            <div className="voting-proc-step">4</div>
            <div className="voting-proc-card-content">
              <h3>Casting the Vote</h3>
              <p>
                Receive your official ballot and mark your choices in private, using paper ballots, optical scanners, or electronic voting devices provided at the location.
              </p>
            </div>
          </article>

          <article className="voting-proc-card">
            <div className="voting-proc-step">5</div>
            <div className="voting-proc-card-content">
              <h3>Confirming the Vote</h3>
              <p>
                Review your selections for accuracy, deposit your completed ballot into a secure ballot box or tabulator, or submit your electronic choices following the official instructions.
              </p>
            </div>
          </article>

          <article className="voting-proc-card">
            <div className="voting-proc-step">6</div>
            <div className="voting-proc-card-content">
              <h3>After Voting</h3>
              <p>
                Exit the polling area once your vote is cast. In some jurisdictions, voters receive proof of voting or can track mail-in ballots through official tracking portals.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="voting-proc-disclaimer" role="note">
        <p>
          For current voting locations, schedules, identification requirements, and official voting instructions, always consult the relevant official election authority for your jurisdiction.
        </p>
      </div>
    </main>
  );
}
