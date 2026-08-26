"use client";

import React, { useState, useEffect } from "react";

export interface ReadingProgressProps {
  ariaLabel?: string;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({
  ariaLabel = "Page reading progress",
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setProgress(percentage);
      } else {
        setProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Calculate initial progress on mount
    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="reading-progress-container"
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
