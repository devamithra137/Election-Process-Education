import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Voter Registration",
  description:
    "An educational guide explaining the voter registration process, including eligibility checks, required documentation, registration methods, verification, and record updates.",
};

export default function VoterRegistrationPage() {
  return (
    <main className="voter-reg-page-container">
      <nav className="voter-reg-nav" aria-label="Page navigation">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <span className="nav-separator" aria-hidden="true">
          •
        </span>
        <Link href="/election-process" className="back-link">
          ← Back to Election Process
        </Link>
      </nav>

      <div className="voter-reg-header">
        <SectionHeading
          title="Voter Registration"
          subtitle="Understanding the essential process of enrolling to participate in democratic elections."
        />
      </div>

      <section className="voter-reg-intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className="intro-text">
          Voter registration is the process through which eligible individuals register according to the rules of the relevant election authority in order to cast their vote in an election.
        </p>
      </section>

      <section className="voter-reg-before" aria-labelledby="before-heading">
        <h2 id="before-heading" className="voter-reg-section-title">
          Before You Register
        </h2>
        <div className="before-card">
          <p>
            Requirements, documents, deadlines, and registration methods can differ depending on the country and jurisdiction. Electoral laws and procedures are established by designated election authorities within each governing region.
          </p>
        </div>
      </section>

      <section className="voter-reg-sections" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="voter-reg-section-title">
          Key Steps in Voter Registration
        </h2>

        <div className="voter-reg-grid">
          <article className="voter-reg-card">
            <div className="voter-reg-step">1</div>
            <div className="voter-reg-card-content">
              <h3>Check Eligibility</h3>
              <p>
                Confirm that you meet the general criteria set by your local electoral laws, such as age requirements, citizenship status, and legal residency within your electoral district.
              </p>
            </div>
          </article>

          <article className="voter-reg-card">
            <div className="voter-reg-step">2</div>
            <div className="voter-reg-card-content">
              <h3>Gather Required Information</h3>
              <p>
                Identify and prepare the necessary details and official identification documents requested by your jurisdiction, which may include identity verification or proof of residence.
              </p>
            </div>
          </article>

          <article className="voter-reg-card">
            <div className="voter-reg-step">3</div>
            <div className="voter-reg-card-content">
              <h3>Complete Registration</h3>
              <p>
                Submit your registration application through designated channels provided by your election authority, such as online registration portals, mail-in forms, or in-person registration centers.
              </p>
            </div>
          </article>

          <article className="voter-reg-card">
            <div className="voter-reg-step">4</div>
            <div className="voter-reg-card-content">
              <h3>Verify Registration</h3>
              <p>
                Check your voter status on the official electoral roll or voter registry prior to registration deadlines to confirm that your information is recorded correctly and active.
              </p>
            </div>
          </article>

          <article className="voter-reg-card">
            <div className="voter-reg-step">5</div>
            <div className="voter-reg-card-content">
              <h3>Keep Information Updated</h3>
              <p>
                Ensure your voter record remains accurate by reporting any changes to your address, legal name, or voter details to election authorities promptly.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="voter-reg-disclaimer" role="note">
        <p>
          For current registration requirements and deadlines, always consult the official election authority for your jurisdiction.
        </p>
      </div>
    </main>
  );
}
