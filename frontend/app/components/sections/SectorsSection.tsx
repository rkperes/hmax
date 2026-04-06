import { SectionHeading } from "../ui/SectionHeading";
import { SectorCard } from "../cards/SectorCard";

const sectors = [
  {
    name: "Construção Civil",
    description: "Içamento e posicionamento de estruturas",
    icon: "▲",
  },
  {
    name: "Energia & Utilities",
    description: "Torres, transformadores e cabos",
    icon: "⚡",
  },
  {
    name: "Logística & Transportes",
    description: "Carga e descarga de mercadorias",
    icon: "▶",
  },
  {
    name: "Offshore & Portuário",
    description: "Operações em ambiente marítimo",
    icon: "≈",
  },
  {
    name: "Mineração",
    description: "Movimentação de equipamentos pesados",
    icon: "◆",
  },
  {
    name: "Agronegócio",
    description: "Silos, estruturas e máquinas agrícolas",
    icon: "◾",
  },
];

export function SectorsSection() {
  return (
    <section id="setores" className="section-dark section-spacing">
      <div className="container-gutter">
        <SectionHeading
          eyebrow="Setores de Atuação"
          heading="Seu setor, nossa especialidade"
          className="mb-12 text-center"
          align="center"
        />

        {/* Sectors Grid */}
        <div className="grid-cols-auto-fit">
          {sectors.map((sector, idx) => (
            <SectorCard key={idx} {...sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
