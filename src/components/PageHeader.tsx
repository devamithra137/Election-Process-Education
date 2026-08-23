import React from "react";

export interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  subtitle,
  eyebrow,
  className = "",
}) => {
  const desc = description ?? subtitle;

  return (
    <header className={`page-header ${className}`.trim()}>
      {eyebrow && <span className="page-header-eyebrow">{eyebrow}</span>}
      <h1 className="page-header-title">{title}</h1>
      {desc && <p className="page-header-description">{desc}</p>}
    </header>
  );
};

export default PageHeader;
