import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested educational page could not be found.",
};

export default function NotFound() {
  return (
    <main className="not-found-container">
      <span className="not-found-badge" aria-label="Error code 404">
        404
      </span>
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-message">
        The page you are looking for could not be found. It may have been moved, or the link may be incorrect. You can return to the homepage or explore our election process resources.
      </p>
      <div className="not-found-actions">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/election-process" className="btn btn-secondary">
          Explore Election Process
        </Link>
      </div>
    </main>
  );
}
