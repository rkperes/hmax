import { useState, useEffect } from "react";
import { Logo } from "../brand/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-hydromax-base/95 backdrop-blur-sm border-b border-hydromax-dark-800"
            : "bg-transparent"
        }`}
      >
        <nav className="container-gutter py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" variant="dark-bg" linkTo="/" />

          {/* Desktop Nav Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#produtos"
              className="text-sm font-medium text-hydromax-max hover:text-hydromax-hydro transition-colors"
            >
              Produtos
            </a>
            <a
              href="#setores"
              className="text-sm font-medium text-hydromax-max hover:text-hydromax-hydro transition-colors"
            >
              Setores
            </a>
            <a
              href="#empresa"
              className="text-sm font-medium text-hydromax-max hover:text-hydromax-hydro transition-colors"
            >
              Empresa
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-hydromax-max hover:text-hydromax-hydro transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Desktop Language Switcher and CTA - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <button className="text-hydromax-hydro">PT</button>
              <span className="text-hydromax-dark-600">/</span>
              <button className="text-hydromax-dark-600 hover:text-hydromax-max transition-colors">
                ES
              </button>
              <span className="text-hydromax-dark-600">/</span>
              <button className="text-hydromax-dark-600 hover:text-hydromax-max transition-colors">
                EN
              </button>
            </div>
            <a href="#contato" className="btn-primary py-2 px-4 text-sm">
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button - visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-hydromax-max transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-hydromax-max transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-hydromax-max transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Spacer to account for fixed header */}
      <div className="h-16" />
    </>
  );
}
