import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ElectionOverview from "@/components/ElectionOverview";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <SectionHeading
          title="Understand the Election Process"
          subtitle="Learn how democratic elections work step-by-step through interactive and factual educational resources."
        />
        <div className="hero-actions">
          <Link href="#process" className="btn btn-primary">
            Explore the Election Process
          </Link>
          <Link href="#about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </section>
      <ElectionOverview />
    </main>
  );
}
