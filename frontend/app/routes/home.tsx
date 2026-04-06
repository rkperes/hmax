import type { Route } from "./+types/home";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustBar } from "../components/sections/TrustBar";
import { BrandValueSection } from "../components/sections/BrandValueSection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { SectorsSection } from "../components/sections/SectorsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hydromax | Guindastes Hidráulicos sobre Caminhão" },
    {
      name: "description",
      content:
        "Equipamentos de elevação sobre caminhão para operações em toda América Latina. Qualidade, durabilidade e suporte técnico de excelência.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BrandValueSection
        shape="robustness"
        eyebrow="Robustez"
        heading="Construído para o trabalho mais pesado"
        body="Cada guindaste Hydromax é projetado com estruturas em aço de alta resistência, componentes hidráulicos de precisão e acabamentos que suportam décadas de uso intenso."
        features={[
          "Aço estrutural certificado",
          "Hidráulica de alta pressão",
          "Proteção anticorrosão reforçada",
        ]}
        imagePosition="right"
      />
      <ProductsSection />
      <BrandValueSection
        shape="versatility"
        eyebrow="Versatilidade"
        heading="O equipamento certo para cada setor"
        body="Nossa linha cobre desde operações de logística urbana até izamentos industriais de grande escala. Onde há necessidade de elevação, há uma solução Hydromax."
        features={[
          "Adaptável a qualquer chassi de caminhão",
          "Configurações para múltiplos setores",
          "Acessórios e extensões modulares",
        ]}
        imagePosition="left"
      />
      <SectorsSection />
      <BrandValueSection
        shape="amplitude"
        eyebrow="Amplitude"
        heading="Alcance que transcende fronteiras"
        body="Com presença em 12 países da América Latina, a Hydromax opera com uma rede de assistência técnica e suprimento de peças que garante a continuidade das suas operações onde quer que você esteja."
        features={[
          "Rede de assistência em 12 países",
          "Suprimento de peças em 48h",
          "Suporte técnico especializado",
        ]}
        imagePosition="right"
      />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
