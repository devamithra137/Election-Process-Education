export interface EducationalSection {
  id: string;
  title: string;
  description: string;
  order?: number;
}

/* =========================================================================
   Glossary Types
   ========================================================================= */

export type GlossaryCategory =
  | "All"
  | "Voters"
  | "Election Process"
  | "Voting"
  | "Counting & Results";

export type GlossaryItemCategory =
  | "Voters"
  | "Election Process"
  | "Voting"
  | "Counting & Results";

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: GlossaryItemCategory;
}

export type GlossaryItem = GlossaryTerm;

/* =========================================================================
   Quiz Types
   ========================================================================= */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctIndex: number;
  explanation: string;
}

export type Question = QuizQuestion;

/* =========================================================================
   Election Process Types
   ========================================================================= */

export interface ElectionProcessStage {
  stageNumber?: number;
  stepNumber?: number;
  title: string;
  description: string;
}

export type ProcessStage = ElectionProcessStage;

export interface OverviewStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TimelineStage {
  stageNumber: number;
  title: string;
  description: string;
}

export interface RegistrationStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface VotingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface CountingStage {
  stageNumber: number;
  title: string;
  description: string;
}
