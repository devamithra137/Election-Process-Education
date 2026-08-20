import React from "react";

export interface InfoCardProps {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  badge,
  icon,
  className = "",
  children,
}) => {
  return (
    <div className={`info-card ${className}`.trim()}>
      {badge && <div className="info-card-badge-wrapper">{badge}</div>}
      {icon && (
        <div className="info-card-icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="info-card-title">{title}</h3>
      {description && <p className="info-card-description">{description}</p>}
      {children}
    </div>
  );
};

export default InfoCard;
