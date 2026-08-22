# Election Process Education

An accessible, neutral educational web application designed to help citizens understand the democratic election lifecycle in a clear, structured, and engaging manner.

## About

Election Process Education provides foundational, beginner-friendly learning materials explaining how democratic elections function. The platform covers the essential stages of elections - from voter registration and polling day procedures to ballot counting and outcome certification - in a neutral, non-partisan format accessible to all learners.

## Features

- **Election Process Overview:** Comprehensive step-by-step walkthrough of democratic election stages.
- **Voter Registration Education:** Clear guidance on voter eligibility criteria, required documentation, and registration steps.
- **Voting Process Education:** Step-by-step guidance on polling day preparation, voter verification, and casting ballots.
- **Vote Counting and Results:** In-depth explanation of ballot collection, verification, tabulation, and official result certification.
- **Election Terminology Glossary:** Centralized dictionary of key electoral terms and concepts.
- **Glossary Search:** Real-time text search across glossary terms and definitions.
- **Glossary Category Filtering:** Interactive category pill filters to explore terms by topic area.
- **Knowledge Quiz:** Interactive self-assessment quiz to test understanding of election processes.
- **Quiz Progress Indicator:** Dynamic tracker showing current question index and remaining questions.
- **Quiz Answer Feedback:** Instant feedback with explanations for correct and incorrect answers.
- **Quiz Results:** Comprehensive end-of-quiz score summary with reset and retake options.
- **Learning Progress Tracker:** Local storage-backed progress checklist tracking completed guides and overall completion percentage.
- **Recommended Learning Path:** Structured sequential learning roadmap guiding users through foundational topics.
- **Educational Content Search:** Site-wide search to quickly locate topics, guides, and concepts across the platform.
- **Responsive Design:** Optimized layout and navigation for desktop, tablet, and mobile devices.
- **Accessibility Improvements:** Semantic HTML structure, ARIA roles, skip navigation, and keyboard-navigable controls.
- **Custom 404 Page:** Dedicated, helpful not-found page with quick navigation back to key learning areas.
- **Application Error State:** Graceful client-side error handling boundary with recovery options.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 14 (App Router)
- **UI Library:** [React](https://react.dev/) 18
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5
- **Styling:** CSS (CSS Variables, Responsive Layouts, Global CSS)
- **Testing:** Node.js built-in test runner (`node:test`, `node:assert`)

## Project Structure

```text
Election-Process-Education/
├── src/
│   ├── app/                    # Next.js App Router pages, layout, and global styles
│   │   ├── about/              # Project about page
│   │   ├── election-process/   # Election overview guide page
│   │   ├── glossary/           # Terminology glossary page
│   │   ├── quiz/               # Knowledge quiz page
│   │   ├── vote-counting/      # Vote counting guide page
│   │   ├── voter-registration/ # Voter registration guide page
│   │   ├── voting-process/     # Voting process guide page
│   │   ├── error.tsx           # Global client error boundary
│   │   ├── globals.css         # Global CSS stylesheet and theme tokens
│   │   ├── layout.tsx          # Root application layout
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable UI and educational components
│   │   ├── BackToTop.tsx       # Smooth scroll-to-top button
│   │   ├── ContentSearch.tsx   # Site-wide educational search
│   │   ├── InfoCard.tsx        # Modular information card component
│   │   ├── LearningPath.tsx    # Sequential learning path recommendation
│   │   ├── LearningProgress.tsx# Local progress tracker
│   │   ├── Navbar.tsx          # Responsive site header and navigation
│   │   └── ...
│   ├── data/                   # Structured educational datasets
│   │   ├── electionProcess.ts  # Timeline stages and process steps
│   │   ├── glossary.ts         # Glossary categories and definitions
│   │   └── quiz.ts             # Self-assessment quiz questions
│   ├── lib/                    # Core calculation and utility functions
│   │   └── progress.ts         # Learning progress calculation logic
│   └── types/                  # Shared TypeScript interfaces and types
│       └── index.ts
├── test/                       # Automated test suites
│   ├── infoCard.test.mjs       # InfoCard component rendering tests
│   └── progress.test.mjs       # Progress calculation unit tests
├── package.json
├── tsconfig.json
└── README.md
```


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17+ or v20+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devamithra137/Election-Process-Education.git
   cd Election-Process-Education
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run TypeScript type-checking:**
   ```bash
   npm run type-check
   ```

5. **Run the production build:**
   ```bash
   npm run build
   ```

6. **Start the production server:**
   ```bash
   npm run start
   ```

## Environment Variables

No environment variables are currently required to run or build this application.

## Development Workflow

This project follows an incremental development approach where features, components, data structures, and tests are added in small, focused, verifiable commits. Every change is validated with TypeScript type-checking (`npm run type-check`), automated unit/component tests (`npm test`), and production builds (`npm run build`).

## Testing

The project uses Node's built-in test runner (`node:test` and `node:assert`) along with React server rendering for lightweight, dependency-free testing.

Run all automated tests with:

```bash
npm test
```

Tests cover:
- **Learning Progress Calculation Utility (`test/progress.test.mjs`):** Verifies percentage calculation, zero-topic safety, and array parsing.
- **InfoCard Component (`test/infoCard.test.mjs`):** Verifies title rendering, description/children formatting, semantic HTML structure, and optional icon/badge elements.

## Educational Disclaimer

This application is an independent educational resource intended solely for general informational purposes. It is *not* an official election authority or government entity.

Electoral laws, registration requirements, identification rules, voting methods, deadlines, and counting processes vary significantly across countries, states, and local jurisdictions. Users should always consult their official local or national election authority for binding regulations and current election information.

## License

No license has currently been specified for this project.
