import React from "react";

interface LoadingIndicatorProps {
  label?: string;
  size?: "small" | "medium" | "large";
}

export default function LoadingIndicator({
  label = "Loading...",
  size = "medium",
}: LoadingIndicatorProps) {
  return (
    <div
      className={`loading-indicator-container loading-${size}`}
      role="status"
      aria-live="polite"
    >
      <div className="loading-spinner" aria-hidden="true" />
      <span className="loading-label">{label}</span>
    </div>
  );
}
