import { Logo } from "../brand/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-hydromax-dark-800">
      <div className="container-gutter">
        {/* Footer Top - 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Logo size="sm" variant="dark-bg" />
            <p className="text-sm text-hydromax-max mt-4 leading-relaxed">
              Guindastes hidráulicos sobre caminhão. Feitos para durar.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 2: Produtos */}
          <div>
            <h3 className="font-semibold text-hydromax-max mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Série Compact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Série Industrial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Série Heavy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Série Custom
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div>
            <h3 className="font-semibold text-hydromax-max mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#empresa"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Sobre Hydromax
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Missão & Valores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-hydromax-max hover:text-hydromax-hydro transition-colors"
                >
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h3 className="font-semibold text-hydromax-max mb-4">Contato</h3>
            <div className="space-y-4 text-sm text-hydromax-max">
              <div>
                <p className="text-xs text-hydromax-dark-500 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/55"
                  className="text-hydromax-hydro font-semibold hover:opacity-80 transition-opacity"
                >
                  +55 (11) XXXXX-XXXX
                </a>
              </div>
              <div>
                <p className="text-xs text-hydromax-dark-500 mb-1">E-mail</p>
                <a
                  href="mailto:contato@hydromax.com.br"
                  className="text-hydromax-hydro hover:opacity-80 transition-opacity"
                >
                  contato@hydromax.com.br
                </a>
              </div>
              <div>
                <p className="text-xs text-hydromax-dark-500 mb-1">Sede</p>
                <p>São Paulo, Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-hydromax-dark-700 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-hydromax-dark-500">
            © {currentYear} Hydromax. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="text-hydromax-dark-500 hover:text-hydromax-max transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-hydromax-dark-500 hover:text-hydromax-max transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-hydromax-dark-500 hover:text-hydromax-max transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
