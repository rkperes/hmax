import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder - no backend wired yet
    console.log("Form submitted:", formData);
    setFormData({ nome: "", empresa: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-accent section-spacing">
      <div className="container-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Copy */}
          <div>
            <SectionHeading
              eyebrow="Fale Conosco"
              heading="Pronto para elevar sua operação?"
              subtext="Fale com um especialista Hydromax e encontre o equipamento certo para a sua necessidade."
            />

            <div className="mt-8 space-y-6">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/55"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hydromax-base text-hydromax-hydro font-semibold rounded hover:bg-opacity-90 transition-all"
              >
                <span>💬</span>
                Chamar no WhatsApp
              </a>

              {/* Email Link */}
              <p className="text-hydromax-base">
                ou envie um e-mail para{" "}
                <a
                  href="mailto:contato@hydromax.com.br"
                  className="font-semibold underline hover:opacity-80 transition-opacity"
                >
                  contato@hydromax.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-hydromax-base mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-hydromax-base mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-hydromax-base mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="+55 (11) XXXXX-XXXX"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-hydromax-base mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary text-lg font-semibold py-3"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
