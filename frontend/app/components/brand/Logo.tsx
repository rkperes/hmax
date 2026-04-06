import { Link } from "react-router";

interface LogoProps {
  variant?: "dark-bg" | "light-bg";
  size?: "sm" | "md" | "lg";
  linkTo?: string;
}

export function Logo({
  variant = "dark-bg",
  size = "md",
  linkTo = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
  };

  const symbolSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-lg font-bold",
    md: "text-xl font-bold",
    lg: "text-2xl font-bold",
  };

  const textColorClass =
    variant === "dark-bg" ? "text-hydromax-max" : "text-hydromax-base";

  const content = (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      {/* Symbol using shape-amplitude CSS class */}
      <div
        className={`shape-amplitude flex-shrink-0 ${symbolSizeClasses[size]}`}
      />

      {/* Wordmark */}
      <span className={`${textSizeClasses[size]} ${textColorClass} font-grotesk`}>
        HYDROMAX
      </span>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
}
