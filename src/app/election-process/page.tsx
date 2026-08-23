import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ElectionOverview from "@/components/ElectionOverview";
import VoterRegistration from "@/components/VoterRegistration";
import ElectionTimeline from "@/components/ElectionTimeline";
import VotingProcess from "@/components/VotingProcess";
import VoteCounting from "@/components/VoteCounting";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "How the Election Process Works | Election Process Education",
  description:
    "A comprehensive, step-by-step educational guide to how democratic elections work, covering preparation, registration, candidates, voting, counting, and results.",
};

export default function ElectionProcessPage() {
  return (
    <main className="process-page-container">
      <div className="process-page-header">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <PageHeader
          title="How the Election Process Works"
          description="This page provides a comprehensive educational overview of the major stages involved in democratic elections."
        />
      </div>

      <Section id="process-stages" ariaLabel="Election process stages" className="process-sections">
        <ElectionOverview />
        <ElectionTimeline />
        <VoterRegistration />
        <VotingProcess />
        <VoteCounting />
      </Section>

      <div className="jurisdiction-disclaimer">
        <p>
          <strong>Educational Notice:</strong> Exact election procedures, timelines, voting methods, and voter requirements vary by country, election type, and local jurisdiction. Always consult your relevant official election authority for current, binding rules and instructions.
        </p>
      </div>
      <BackToTop />
    </main>
  );
}
