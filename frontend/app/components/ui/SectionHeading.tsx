interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <span className="block text-sm uppercase tracking-widest text-hydromax-hydro font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-bold leading-tight mb-4">{heading}</h2>
      {subtext && <p className="text-lg text-hydromax-max opacity-90">{subtext}</p>}
    </div>
  );
}
