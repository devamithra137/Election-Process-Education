import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Useful Election Information",
  description:
    "Educational guidance on preparing to vote, verifying details with official election authorities, and essential voting information to check.",
};

const EDUCATIONAL_LINKS = [
  {
    title: "Election Process",
    href: "/election-process",
    description:
      "A comprehensive overview of key stages in democratic elections from scheduling to certified results.",
    linkLabel: "Explore Election Process",
  },
  {
    title: "Voter Registration",
    href: "/voter-registration",
    description:
      "Understand eligibility criteria, required documentation, deadlines, and registration verification.",
    linkLabel: "Explore Voter Registration",
  },
  {
    title: "Voting Process",
    href: "/voting-process",
    description:
      "Learn the general steps of arriving at polling places, verifying identity, casting, and confirming your ballot.",
    linkLabel: "Explore Voting Process",
  },
  {
    title: "Vote Counting and Results",
    href: "/vote-counting",
    description:
      "Discover how ballots are securely collected, tallied, reconciled, and officially declared.",
    linkLabel: "Explore Vote Counting",
  },
  {
    title: "Election Glossary",
    href: "/glossary",
    description:
      "A searchable dictionary of common electoral, democratic, and voting terminology.",
    linkLabel: "Browse Glossary",
  },
  {
    title: "Knowledge Quiz",
    href: "/quiz",
    description:
      "Interactive self-assessment questions to test and reinforce your understanding of elections.",
    linkLabel: "Take Knowledge Quiz",
  },
];

export default function ResourcesPage() {
  return (
    <main className="resources-page-container">
      <nav className="resources-nav" aria-label="Page navigation">
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
        <Link href="/vote-counting" className="back-link">
          Vote Counting
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

      <div className="resources-header">
        <PageHeader
          title="Useful Election Information"
          description="This project is an educational resource designed to explain general election systems. Always verify current, jurisdiction-specific election information with the official election authority relevant to your location."
        />
      </div>

      <Section
        id="before-you-vote"
        title="Before You Vote"
        description="Key steps to verify and prepare prior to participating in an election."
        className="resources-section"
      >
        <div className="resources-grid">
          <article className="resources-card">
            <div className="resources-card-header">
              <span className="resources-badge">1</span>
              <h3 className="resources-card-title">Voter Eligibility</h3>
            </div>
            <p className="resources-card-text">
              Confirm that you satisfy all statutory eligibility criteria in your jurisdiction, such as minimum voting age, citizenship status, and residency requirements within your electoral district.
            </p>
          </article>

          <article className="resources-card">
            <div className="resources-card-header">
              <span className="resources-badge">2</span>
              <h3 className="resources-card-title">Registration Status</h3>
            </div>
            <p className="resources-card-text">
              Check your voter record on the official electoral roll or voter registry well in advance of election day to confirm that your registration is active and that your personal details are up to date.
            </p>
          </article>

          <article className="resources-card">
            <div className="resources-card-header">
              <span className="resources-badge">3</span>
              <h3 className="resources-card-title">Deadlines</h3>
            </div>
            <p className="resources-card-text">
              Verify all critical dates with your official election authority, including deadlines for new voter registration, updating address or name records, and requesting absentee or mail-in ballots.
            </p>
          </article>

          <article className="resources-card">
            <div className="resources-card-header">
              <span className="resources-badge">4</span>
              <h3 className="resources-card-title">Polling Information</h3>
            </div>
            <p className="resources-card-text">
              Locate your assigned polling station, voting center, or designated ballot drop-off location, and check official operating hours, accessibility accommodations, and expected procedures.
            </p>
          </article>

          <article className="resources-card">
            <div className="resources-card-header">
              <span className="resources-badge">5</span>
              <h3 className="resources-card-title">Accepted Voting Methods</h3>
            </div>
            <p className="resources-card-text">
              Review authorized voting options permitted in your area, such as standard in-person voting on election day, early in-person voting, postal or absentee ballots, and provisional voting methods.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="where-to-verify"
        title="Where to Verify Information"
        description="Identifying official, reliable sources for current election rules, calendars, and procedures."
        className="resources-section"
      >
        <div className="resources-verify-grid">
          <div className="resources-verify-card">
            <h3 className="resources-verify-title">Official Election Authority Websites</h3>
            <p className="resources-verify-text">
              Official government and electoral authority websites are the appropriate and authoritative source for current election rules, deadlines, candidate qualifications, and official notifications. Look for official government web addresses and verified public agency portals.
            </p>
          </div>

          <div className="resources-verify-card">
            <h3 className="resources-verify-title">Local Election Offices & Registrars</h3>
            <p className="resources-verify-text">
              Local, municipal, or district election administration offices manage precinct assignments, maintain voter rolls, and provide accurate, localized voting instructions for your specific community.
            </p>
          </div>

          <div className="resources-verify-card">
            <h3 className="resources-verify-title">Statutory Public Notices & Gazettes</h3>
            <p className="resources-verify-text">
              Official publications, public gazettes, and formal notices issued directly by designated electoral authorities provide legally binding election calendars, boundary descriptions, and procedural rules.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="what-to-check"
        title="What to Check"
        description="A summary of critical information items to verify with your official election authority."
        className="resources-section"
      >
        <div className="resources-checklist-grid">
          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Voter Registration Requirements</h3>
              <p className="resources-checklist-desc">
                Review specific eligibility rules, accepted identification or residency documents, and qualification criteria established by your governing election authority.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Registration Deadlines</h3>
              <p className="resources-checklist-desc">
                Check exact dates for voter registration cutoff, online portal deadlines, mail-in postmark deadlines, and in-person registration windows.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Polling or Voting Locations</h3>
              <p className="resources-checklist-desc">
                Confirm your assigned polling place, early voting locations, secure ballot drop boxes, opening and closing hours, and accessibility options.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Identification Requirements Where Applicable</h3>
              <p className="resources-checklist-desc">
                Determine whether identification is required at check-in, which specific photo or non-photo documents are accepted, and any provisional ballot provisions.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Voting Methods</h3>
              <p className="resources-checklist-desc">
                Understand available voting channels such as in-person paper ballots, electronic voting machines, mail-in voting, absentee voting, or assisted voting services.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Election Dates</h3>
              <p className="resources-checklist-desc">
                Note official election day dates, early voting periods, postal ballot request deadlines, and ballot return timelines.
              </p>
            </div>
          </article>

          <article className="resources-checklist-item">
            <div className="resources-check-icon" aria-hidden="true">✓</div>
            <div className="resources-checklist-content">
              <h3 className="resources-checklist-title">Official Results</h3>
              <p className="resources-checklist-desc">
                Identify official portals and schedules for preliminary result announcements, canvassing periods, certification dates, and final published election results.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <section className="resources-disclaimer-section" aria-labelledby="disclaimer-title">
        <div className="resources-disclaimer" role="note">
          <h2 id="disclaimer-title" className="resources-disclaimer-title">
            Important Educational Disclaimer
          </h2>
          <p className="resources-disclaimer-text">
            This website is an educational project and is not an official election authority. Election rules, eligibility requirements, deadlines, voting methods, and procedures vary by jurisdiction. Always verify current information with the relevant official election authority.
          </p>
        </div>
      </section>

      <Section
        id="educational-topics"
        title="Educational Guides & Topics"
        description="Explore our complete series of non-partisan educational guides on election systems."
        className="resources-section"
      >
        <div className="resources-topics-grid" role="list">
          {EDUCATIONAL_LINKS.map((topic) => (
            <div key={topic.href} className="resources-topic-card" role="listitem">
              <div className="resources-topic-body">
                <h3 className="resources-topic-title">{topic.title}</h3>
                <p className="resources-topic-desc">{topic.description}</p>
              </div>
              <div className="resources-topic-footer">
                <Link
                  href={topic.href}
                  className="resources-topic-link"
                  aria-label={topic.linkLabel}
                >
                  {topic.linkLabel} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <BackToTop />
    </main>
  );
}
