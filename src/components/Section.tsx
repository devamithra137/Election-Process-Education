import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  titleHidden?: boolean;
  titleLevel?: "h2" | "h3";
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  subtitle,
  titleHidden = false,
  titleLevel = "h2",
  ariaLabel,
  className = "",
  children,
  ...rest
}) => {
  const desc = description ?? subtitle;
  const HeadingTag = titleLevel;
  const headingId = id && title ? `${id}-heading` : undefined;

  const sectionAriaLabelledBy = rest["aria-labelledby"] || headingId;
  const sectionAriaLabel = rest["aria-label"] || (ariaLabel && !sectionAriaLabelledBy ? ariaLabel : undefined);

  return (
    <section
      id={id}
      className={`page-section ${className}`.trim()}
      aria-labelledby={sectionAriaLabelledBy}
      aria-label={sectionAriaLabel}
      {...rest}
    >
      {(title || desc) && (
        <div className="section-header-block">
          {title && (
            <HeadingTag
              id={headingId}
              className={titleHidden ? "sr-only" : "section-title"}
            >
              {title}
            </HeadingTag>
          )}
          {desc && <p className="section-description">{desc}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
