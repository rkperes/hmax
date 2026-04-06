import { SectionHeading } from "../ui/SectionHeading";
import { FeatureBullet } from "../ui/FeatureBullet";

interface BrandValueSectionProps {
  shape: "robustness" | "versatility" | "amplitude";
  eyebrow: string;
  heading: string;
  body: string;
  features: string[];
  cta?: { label: string; href: string };
  imagePosition?: "left" | "right";
}

export function BrandValueSection({
  shape,
  eyebrow,
  heading,
  body,
  features,
  cta,
  imagePosition = "right",
}: BrandValueSectionProps) {
  const shapeClassMap = {
    robustness: "shape-robustness",
    versatility: "shape-versatility",
    amplitude: "shape-amplitude",
  };

  const shapeClass = shapeClassMap[shape];
  const isImageLeft = imagePosition === "left";

  return (
    <section className="section-dark section-spacing">
      <div className="container-gutter">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isImageLeft ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className={isImageLeft ? "lg:order-2" : ""}>
            <SectionHeading eyebrow={eyebrow} heading={heading} />
            <p className="text-hydromax-max mb-6 leading-relaxed">{body}</p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <FeatureBullet key={idx} text={feature} />
              ))}
            </div>

            {/* CTA */}
            {cta && (
              <a href={cta.href} className="btn-ghost">
                {cta.label} →
              </a>
            )}
          </div>

          {/* Visual Shape */}
          <div
            className={`hidden lg:flex items-center justify-center min-h-96 ${shapeClass} ${
              isImageLeft ? "lg:order-1" : ""
            }`}
          >
            {shape === "amplitude" && (
              <div className="shape-amplitude" style={{ width: 120, height: 120 }} />
            )}
            {shape !== "amplitude" && (
              <div className="text-hydromax-dark-700 text-6xl">▪</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
