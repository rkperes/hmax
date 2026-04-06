import { StatItem } from "../ui/StatItem";

export function HeroSection() {
  return (
    <section className="hero">
      {/* Left Column: Text Content */}
      <div className="hero-left">
        <div className="container-gutter py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col justify-center h-full">
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
      </div>

      {/* Right Column: Visual */}
      <div className="hero-right">
        <img
          src="/images/hm_generic_v1.jpg"
          alt="HYDROMAX Equipamentos de Elevação"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
