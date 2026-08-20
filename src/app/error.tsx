'use client';

import React from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ reset }: ErrorProps) {
  return (
    <main className="error-container">
      <span className="error-badge" aria-label="Error status">
        Application Error
      </span>
      <h1 className="error-title">Something went wrong</h1>
      <p className="error-message">
        An unexpected application error occurred while loading this educational resource. You can try again or return to the homepage.
      </p>
      <div className="error-actions">
        <button
          type="button"
          onClick={() => reset()}
          className="btn btn-primary"
        >
          Try Again
        </button>
        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
