"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is voter registration?",
    options: [
      "The process of casting a physical or electronic ballot on election day.",
      "The official process through which eligible individuals enroll to participate in an election.",
      "The campaign activity where candidates present their platforms to the public.",
      "The tallying of counted ballots after polls close.",
    ],
    correctIndex: 1,
    explanation:
      "Voter registration is the process by which eligible individuals enroll according to electoral rules before participating in an election.",
  },
  {
    id: 2,
    question: "What is a constituency?",
    options: [
      "A national committee managed by political parties.",
      "An official document listing candidate names on a ballot.",
      "A defined electoral district whose eligible voters elect representatives to public office.",
      "A temporary polling location used on election day.",
    ],
    correctIndex: 2,
    explanation:
      "A constituency (or electoral district) is a geographic area whose voters elect representatives to legislative or public office.",
  },
  {
    id: 3,
    question: "What happens during voting?",
    options: [
      "Votes are audited and certified into official national tallies.",
      "Eligible voters cast their ballots in private using paper, electronic, or mail-in methods.",
      "Election authorities publish the final election results.",
      "Candidates register their legal eligibility with electoral courts.",
    ],
    correctIndex: 1,
    explanation:
      "During voting, eligible voters select their choices and cast their ballots securely and privately through designated methods.",
  },
  {
    id: 4,
    question: "What happens during vote counting?",
    options: [
      "Citizens register their eligibility on the electoral roll.",
      "Candidates deliver public speeches at polling stations.",
      "Ballots are gathered, verified, and systematically tallied to calculate total votes.",
      "Voters receive new identification credentials for future elections.",
    ],
    correctIndex: 2,
    explanation:
      "Vote counting involves gathering, verifying, and tallying ballots under secure procedures to determine accurate vote totals.",
  },
  {
    id: 5,
    question: "Who declares the official election results?",
    options: [
      "Private media outlets and news broadcasters.",
      "Political campaign organizations.",
      "The official, designated election authority for the jurisdiction.",
      "International non-governmental observer groups.",
    ],
    correctIndex: 2,
    explanation:
      "Official election results are certified and declared by the designated election authority for the relevant jurisdiction.",
  },
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(QUIZ_QUESTIONS.length).fill(null)
  );
  // Tracks which questions have been confirmed (answer locked in)
  const [confirmedAnswers, setConfirmedAnswers] = useState<boolean[]>(
    Array(QUIZ_QUESTIONS.length).fill(false)
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const currentAnswerIndex = selectedAnswers[currentIndex];
  const isCurrentConfirmed = confirmedAnswers[currentIndex];
  const isCurrentCorrect =
    isCurrentConfirmed && currentAnswerIndex === currentQ.correctIndex;

  const handleSelectOption = (optionIndex: number) => {
    // Prevent re-selection after confirming
    if (isSubmitted || isCurrentConfirmed) return;
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (isCurrentConfirmed) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (idx + 1) % currentQ.options.length;
      handleSelectOption(nextIdx);
      const nextBtn = document.getElementById(`quiz-opt-${nextIdx}`);
      nextBtn?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (idx - 1 + currentQ.options.length) % currentQ.options.length;
      handleSelectOption(prevIdx);
      const prevBtn = document.getElementById(`quiz-opt-${prevIdx}`);
      prevBtn?.focus();
    }
  };

  const handleConfirm = () => {
    if (currentAnswerIndex === null || isCurrentConfirmed) return;
    const updated = [...confirmedAnswers];
    updated[currentIndex] = true;
    setConfirmedAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setConfirmedAnswers(Array(QUIZ_QUESTIONS.length).fill(false));
    setCurrentIndex(0);
    setIsSubmitted(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score: number, answer, idx) => {
      return answer === QUIZ_QUESTIONS[idx].correctIndex ? score + 1 : score;
    }, 0);
  };

  // All questions must be both answered and confirmed to enable submit
  const allConfirmed = confirmedAnswers.every(Boolean);

  const getOptionClass = (idx: number): string => {
    const isSelected = currentAnswerIndex === idx;
    if (!isCurrentConfirmed) {
      return `quiz-option-button ${isSelected ? "selected" : ""}`;
    }
    if (idx === currentQ.correctIndex) return "quiz-option-button feedback-correct";
    if (isSelected && idx !== currentQ.correctIndex) return "quiz-option-button feedback-incorrect";
    return "quiz-option-button feedback-neutral";
  };

  const score = calculateScore();
  const totalQuestions = QUIZ_QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = (pct: number): string => {
    if (pct >= 80) {
      return "Excellent understanding";
    }
    if (pct >= 60) {
      return "Good understanding";
    }
    return "Keep learning and try again";
  };

  return (
    <main className="quiz-page-container">
      <nav className="quiz-nav" aria-label="Page navigation">
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
        <Link href="/glossary" className="back-link">
          ← Back to Glossary
        </Link>
      </nav>

      <div className="quiz-header">
        <SectionHeading
          title="Test Your Knowledge"
          subtitle="Check your understanding of basic election concepts through this brief educational quiz."
        />
      </div>

      <div className="quiz-disclaimer" role="note">
        <p>
          This quiz is for educational purposes and does not represent legal or official election guidance.
        </p>
      </div>

      {!isSubmitted ? (
        <section className="quiz-card" aria-labelledby="quiz-question-title">
          <div className="quiz-progress-container" aria-label="Quiz progress">
            <div className="quiz-progress-header">
              <span className="quiz-progress-text">
                Question <strong>{currentIndex + 1}</strong> of <strong>{QUIZ_QUESTIONS.length}</strong>
              </span>
              <span className="quiz-progress-percent">
                {Math.round(((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
              </span>
            </div>
            <div
              className="quiz-progress-track"
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={QUIZ_QUESTIONS.length}
              aria-label={`Question ${currentIndex + 1} of ${QUIZ_QUESTIONS.length}`}
            >
              <div
                className="quiz-progress-fill"
                style={{
                  width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <h2 id="quiz-question-title" className="quiz-question-title">
            {currentQ.question}
          </h2>

          <div className="quiz-options-list" role="radiogroup" aria-label={currentQ.question}>
            {currentQ.options.map((option, idx) => {
              const isSelected = currentAnswerIndex === idx;
              return (
                <button
                  key={idx}
                  id={`quiz-opt-${idx}`}
                  type="button"
                  className={getOptionClass(idx)}
                  onClick={() => handleSelectOption(idx)}
                  onKeyDown={(e) => handleOptionKeyDown(e, idx)}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`Option ${String.fromCharCode(65 + idx)}: ${option}`}
                  disabled={isCurrentConfirmed}
                >
                  <span className="quiz-option-badge" aria-hidden="true">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="quiz-option-text">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Inline answer feedback */}
          {isCurrentConfirmed && (
            <div
              className={`quiz-answer-feedback ${isCurrentCorrect ? "feedback-correct-box" : "feedback-incorrect-box"}`}
              role="status"
              aria-live="polite"
            >
              <p className="feedback-verdict">
                {isCurrentCorrect ? "✓ Correct!" : "✗ Not quite"}
              </p>
              {!isCurrentCorrect && (
                <p className="feedback-correct-answer">
                  <strong>Correct answer:</strong> {currentQ.options[currentQ.correctIndex]}
                </p>
              )}
              <p className="feedback-explanation">{currentQ.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {/* Show Check Answer until confirmed, then Next/Submit */}
            {!isCurrentConfirmed ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirm}
                disabled={currentAnswerIndex === null}
              >
                Check Answer
              </button>
            ) : currentIndex < QUIZ_QUESTIONS.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!allConfirmed}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </section>
      ) : (
        <section className="quiz-results-container" aria-labelledby="results-title">
          <div className="quiz-score-card" role="region" aria-label="Quiz results summary">
            <h2 id="results-title" className="quiz-score-title">Quiz Completed!</h2>

            {/* Score and percentage */}
            <div
              className="quiz-score-summary"
              aria-label={`Final score: ${score} out of ${totalQuestions}, ${percentage} percent`}
            >
              <p className="quiz-score-fraction">
                <span className="quiz-score-number" aria-hidden="true">
                  {score}<span className="quiz-score-sep">/{totalQuestions}</span>
                </span>
                <span className="quiz-score-label">{score} out of {totalQuestions}</span>
              </p>
              <p className="quiz-score-percent" aria-hidden="true">
                {percentage}%
              </p>
            </div>

            {/* Tiered performance message */}
            <p className="quiz-performance-message" role="status" aria-live="polite">
              {getPerformanceMessage(percentage)}
            </p>

            {/* Educational note */}
            <p className="quiz-results-note">
              This quiz is for educational and learning purposes only. Review your answers below to reinforce your understanding of the election process.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
              aria-label="Try the quiz again"
            >
              Try Again
            </button>
          </div>

          <div className="quiz-review-section">
            <h3>Review Your Answers</h3>
            <div className="quiz-review-list">
              {QUIZ_QUESTIONS.map((q, qIdx) => {
                const userAns = selectedAnswers[qIdx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`quiz-review-card ${isCorrect ? "correct" : "incorrect"}`}
                  >
                    <h4>
                      {qIdx + 1}. {q.question}
                    </h4>
                    <p className="review-answer">
                      <strong>Your answer:</strong>{" "}
                      {userAns !== null ? q.options[userAns] : "Not answered"}{" "}
                      {isCorrect ? "✓ (Correct)" : "✗ (Incorrect)"}
                    </p>
                    {!isCorrect && (
                      <p className="review-correct">
                        <strong>Correct answer:</strong> {q.options[q.correctIndex]}
                      </p>
                    )}
                    <p className="review-explanation">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
