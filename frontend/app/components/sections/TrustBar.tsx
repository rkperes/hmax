import { StatItem } from "../ui/StatItem";

export function TrustBar() {
  return (
    <section className="bg-hydromax-dark-900 py-12">
      <div className="container-gutter">
        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
          <StatItem value="500+" label="equipamentos em operação" divider={true} />
          <StatItem value="15" label="anos de experiência" divider={true} />
          <StatItem value="12" label="países atendidos" divider={true} />
          <StatItem value="ISO 9001" label="certificados" divider={false} />
        </div>
      </div>
    </section>
  );
}
