interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 z-40 bg-hydromax-base pt-8 px-6 pb-8">
      <nav className="flex flex-col gap-6">
        {/* Nav Links */}
        <a
          href="#produtos"
          onClick={onClose}
          className="text-lg font-semibold text-hydromax-max hover:text-hydromax-hydro transition-colors"
        >
          Produtos
        </a>
        <a
          href="#setores"
          onClick={onClose}
          className="text-lg font-semibold text-hydromax-max hover:text-hydromax-hydro transition-colors"
        >
          Setores
        </a>
        <a
          href="#empresa"
          onClick={onClose}
          className="text-lg font-semibold text-hydromax-max hover:text-hydromax-hydro transition-colors"
        >
          Empresa
        </a>
        <a
          href="#contato"
          onClick={onClose}
          className="text-lg font-semibold text-hydromax-max hover:text-hydromax-hydro transition-colors"
        >
          Contato
        </a>

        {/* Language Switcher */}
        <div className="border-t border-hydromax-dark-700 pt-6">
          <p className="text-xs uppercase tracking-widest text-hydromax-max mb-3">
            Idioma
          </p>
          <div className="flex gap-4">
            <button className="text-sm font-semibold text-hydromax-hydro">
              PT
            </button>
            <span className="text-hydromax-dark-600">/</span>
            <button className="text-sm font-semibold text-hydromax-dark-600 hover:text-hydromax-max transition-colors">
              ES
            </button>
            <span className="text-hydromax-dark-600">/</span>
            <button className="text-sm font-semibold text-hydromax-dark-600 hover:text-hydromax-max transition-colors">
              EN
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="border-t border-hydromax-dark-700 pt-6">
          <a
            href="#contato"
            onClick={onClose}
            className="btn-primary block text-center"
          >
            Solicitar Orçamento
          </a>
        </div>
      </nav>
    </div>
  );
}
