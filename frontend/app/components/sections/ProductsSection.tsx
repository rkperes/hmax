import { SectionHeading } from "../ui/SectionHeading";
import { ProductCard } from "../cards/ProductCard";

const products = [
  {
    category: "Compact",
    name: "Série Compact",
    capacityRange: "3 a 8 toneladas",
    description: "Ideal para frotas urbanas e logística",
    specs: [
      "Alcance de até 5 metros",
      "Operação rápida e precisa",
      "Manutenção simplificada",
    ],
  },
  {
    category: "Industrial",
    name: "Série Industrial",
    capacityRange: "10 a 20 toneladas",
    description: "Construção civil e movimentação de cargas pesadas",
    specs: [
      "Estrutura robusta em aço",
      "Alcance de até 8 metros",
      "Sistema hidráulico de alta pressão",
    ],
  },
  {
    category: "Heavy",
    name: "Série Heavy",
    capacityRange: "25 a 50 toneladas",
    description: "Operações offshore e indústria pesada",
    specs: [
      "Certificação de segurança internacional",
      "Alcance de até 12 metros",
      "Proteção anticorrosão reforçada",
    ],
  },
  {
    category: "Custom",
    name: "Série Custom",
    capacityRange: "Sob medida",
    description: "Soluções especiais para setores específicos",
    specs: [
      "Design personalizado",
      "Adaptável a qualquer chassi",
      "Suporte técnico dedicado",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="section-light section-spacing">
      <div className="container-gutter">
        <SectionHeading
          eyebrow="Linha de Produtos"
          heading="Soluções para cada operação"
          subtext="Da movimentação urbana ao içamento industrial de grande porte"
          className="mb-12"
        />

        {/* Product Grid */}
        <div className="grid-cols-auto-fit">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
