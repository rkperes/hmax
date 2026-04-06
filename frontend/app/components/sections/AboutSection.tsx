import { SectionHeading } from "../ui/SectionHeading";

const milestones = [
  {
    year: "2010",
    label: "Fundação da empresa",
  },
  {
    year: "2015",
    label: "Expansão para mercado internacional",
  },
  {
    year: "2020",
    label: "Certificação ISO 9001",
  },
  {
    year: "2025",
    label: "500 equipamentos entregues",
  },
];

export function AboutSection() {
  return (
    <section id="empresa" className="section-dark section-spacing">
      <div className="container-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div>
            <SectionHeading
              eyebrow="Nossa História"
              heading="Décadas de engenharia. Uma obsessão por qualidade."
            />

            <p className="text-hydromax-max mb-4 leading-relaxed">
              Fundada em 2010, a Hydromax nasceu da necessidade de oferecer ao
              mercado latino-americano equipamentos de elevação de classe
              mundial, produzidos com padrões técnicos internacionais e suporte
              local de excelência.
            </p>

            <p className="text-hydromax-max mb-8 leading-relaxed">
              Desde então, consolidamos uma reputação de confiabilidade,
              inovação e atendimento personalizado que nos permite servir desde
              pequenas operações locais até grandes projetos de infraestrutura e
              industria pesada.
            </p>

            <a href="#contato" className="btn-secondary">
              Conheça a Empresa
            </a>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Vertical Line Connector */}
                {idx < milestones.length - 1 && (
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-hydromax-hydro rounded-full" />
                    <div className="w-0.5 h-12 bg-hydromax-dark-700 mt-2" />
                  </div>
                )}

                {/* Last item - no connector line below */}
                {idx === milestones.length - 1 && (
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-hydromax-hydro rounded-full" />
                  </div>
                )}

                {/* Content */}
                <div className="pt-1">
                  <p className="text-hydromax-hydro font-bold">
                    {milestone.year}
                  </p>
                  <p className="text-hydromax-max text-sm">{milestone.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
