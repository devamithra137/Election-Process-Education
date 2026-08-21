import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContentSearch from "@/components/ContentSearch";
import LearningPath from "@/components/LearningPath";
import ElectionOverview from "@/components/ElectionOverview";
import VoterRegistration from "@/components/VoterRegistration";
import ElectionTimeline from "@/components/ElectionTimeline";
import VotingProcess from "@/components/VotingProcess";
import VoteCounting from "@/components/VoteCounting";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQ from "@/components/FAQ";
import LearningProgress from "@/components/LearningProgress";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <SectionHeading
          title="Understand the Election Process"
          subtitle="Learn how democratic elections work step-by-step through interactive and factual educational resources."
        />
        <div className="hero-actions">
          <Link href="/election-process" className="btn btn-primary">
            Explore the Election Process
          </Link>
          <Link href="#about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </section>
      <ContentSearch />
      <LearningPath />
      <ElectionOverview />
      <VoterRegistration />
      <ElectionTimeline />
      <VotingProcess />
      <VoteCounting />
      <KeyTakeaways />
      <FAQ />
      <LearningProgress />
    </main>
  );
}
