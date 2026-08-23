import React from "react";
import Link from "next/link";
import Section from "./Section";
import InfoCard from "./InfoCard";

export interface LearnTopic {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const LEARN_TOPICS: LearnTopic[] = [
  {
    id: "election-process",
    title: "Election Process",
    description: "Understand the overall democratic election framework and key stages.",
    href: "/election-process",
  },
  {
    id: "voter-registration",
    title: "Voter Registration",
    description: "Learn about eligibility, required documentation, and registration steps.",
    href: "/voter-registration",
  },
  {
    id: "voting-process",
    title: "Voting Process",
    description: "Discover polling place procedures, ID verification, and casting ballots.",
    href: "/voting-process",
  },
  {
    id: "vote-counting",
    title: "Vote Counting & Results",
    description: "Explore how ballots are securely collected, verified, and officially declared.",
    href: "/vote-counting",
  },
  {
    id: "glossary",
    title: "Election Terminology",
    description: "Browse a clear, searchable glossary of essential election concepts.",
    href: "/glossary",
  },
  {
    id: "quiz",
    title: "Knowledge Quiz",
    description: "Test and reinforce your understanding with interactive questions.",
    href: "/quiz",
  },
];

export const WhatYouLearn: React.FC = () => {
  return (
    <Section
      id="what-you-learn"
      title="What You'll Learn"
      subtitle="Explore the fundamental topics covered across our educational modules."
      className="what-you-learn-section"
    >
      <div className="what-you-learn-grid" role="list">
        {LEARN_TOPICS.map((topic) => (
          <article key={topic.id} className="what-you-learn-item" role="listitem">
            <InfoCard
              title={topic.title}
              description={topic.description}
              className="what-you-learn-card"
            >
              <div className="topic-link-container">
                <Link
                  href={topic.href}
                  className="topic-explore-link"
                  aria-label={`Explore ${topic.title}`}
                >
                  Explore topic →
                </Link>
              </div>
            </InfoCard>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default WhatYouLearn;
