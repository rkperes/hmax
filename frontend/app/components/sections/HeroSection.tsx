import { StatItem } from "../ui/StatItem";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            {/* Eyebrow */}
            <span className="block text-sm uppercase tracking-widest text-hydromax-hydro font-semibold mb-4">
              Guindastes Hidráulicos
            </span>

            {/* Headline */}
            <h1 className="mb-6">Força que move o impossível.</h1>

            {/* Subheading */}
            <p className="text-lg text-hydromax-max mb-8 leading-relaxed">
              Equipamentos de elevação sobre caminhão para as operações mais
              exigentes do Brasil e da América Latina.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#produtos" className="btn-primary">
                Ver Produtos
              </a>
              <a href="#contato" className="btn-secondary">
                Falar com Especialista
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <StatItem value="500+" label="equipamentos em operação" divider={true} />
              <StatItem value="15" label="anos de experiência" divider={true} />
              <StatItem value="12" label="países atendidos" divider={false} />
            </div>
          </div>

          {/* Right Column: Visual Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-hydromax-dark-900 border-2 border-dashed border-hydromax-dark-700 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="shape-amplitude mb-4 flex justify-center">
                  <div className="w-16 h-16" />
                </div>
                <p className="text-sm text-hydromax-dark-500">
                  Imagem do produto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
