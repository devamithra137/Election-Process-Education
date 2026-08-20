"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface Topic {
  id: string;
  title: string;
  href: string;
  description: string;
}

const TOPICS: Topic[] = [
  {
    id: "election-process",
    title: "Election Process",
    href: "/election-process",
    description: "Step-by-step overview of democratic election stages.",
  },
  {
    id: "voter-registration",
    title: "Voter Registration",
    href: "/voter-registration",
    description: "Eligibility, gathering documents, and registering.",
  },
  {
    id: "voting-process",
    title: "Voting Process",
    href: "/voting-process",
    description: "Pre-election prep, arriving, verification, and casting votes.",
  },
  {
    id: "vote-counting",
    title: "Vote Counting",
    href: "/vote-counting",
    description: "Collection, verification, reconciliation, and declaring results.",
  },
  {
    id: "election-terminology",
    title: "Election Terminology",
    href: "/glossary",
    description: "Glossary of key election terms and concepts.",
  },
  {
    id: "knowledge-quiz",
    title: "Knowledge Quiz",
    href: "/quiz",
    description: "Interactive self-assessment to test your understanding.",
  },
];

const LOCAL_STORAGE_KEY = "election_education_progress";

export default function LearningProgress() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCompletedTopics(JSON.parse(saved));
      }
    } catch {
      // Ignore storage read errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleTopic = (id: string) => {
    const nextCompleted = completedTopics.includes(id)
      ? completedTopics.filter((t) => t !== id)
      : [...completedTopics, id];

    setCompletedTopics(nextCompleted);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextCompleted));
    } catch {
      // Ignore storage write errors
    }
  };

  const completedCount = completedTopics.length;
  const totalCount = TOPICS.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="learning-progress-section" aria-labelledby="progress-heading">
      <SectionHeading
        title="Learning Progress Tracker"
        subtitle="Track your journey as you learn about democratic election processes."
      />

      <div className="progress-overview-card">
        <div className="progress-summary-header">
          <span className="progress-count-text">
            <strong>{completedCount}</strong> of <strong>{totalCount}</strong> topics completed
          </span>
          <span className="progress-percentage-text">{percentage}% Complete</span>
        </div>

        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Overall learning progress"
          />
        </div>
      </div>

      <div className="topics-checklist-grid">
        {TOPICS.map((topic) => {
          const isCompleted = isLoaded && completedTopics.includes(topic.id);
          return (
            <div
              key={topic.id}
              className={`topic-check-card ${isCompleted ? "completed" : ""}`}
            >
              <div className="topic-check-header">
                <label className="topic-checkbox-label">
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleTopic(topic.id)}
                    className="topic-checkbox"
                    aria-label={`Mark ${topic.title} as completed`}
                  />
                  <span className="topic-title">{topic.title}</span>
                </label>
                {isCompleted && <span className="completed-badge">✓ Completed</span>}
              </div>
              <p className="topic-description">{topic.description}</p>
              <div className="topic-link-container">
                <Link href={topic.href} className="topic-explore-link">
                  Explore topic →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
