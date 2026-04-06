import { SectionHeading } from "../ui/SectionHeading";

const clientLogos = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
];

export function TestimonialsSection() {
  return (
    <section className="section-light section-spacing">
      <div className="container-gutter">
        {/* Client Logos */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="Confiança"
            heading="Parceiros que confiam em nós"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center aspect-square border-2 border-dashed border-hydromax-base rounded-lg p-4"
              >
                <p className="text-xs font-semibold text-hydromax-base text-center">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-hydromax-base text-hydromax-max rounded-lg p-8 md:p-12 max-w-2xl mx-auto border border-hydromax-dark-200">
          <blockquote className="text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
              "A Hydromax entregou o equipamento no prazo, dentro das
              especificações técnicas e com suporte de primeira. É o parceiro
              que a nossa operação precisava."
            </p>
            <footer className="text-sm">
              <p className="font-semibold text-hydromax-hydro">
                João Silva
              </p>
              <p className="text-hydromax-max opacity-75">
                Gerente de Operações, Operadora Brasil
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
