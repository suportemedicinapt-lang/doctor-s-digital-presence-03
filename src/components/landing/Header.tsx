import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

interface HeaderProps {
  nome: string;
  whatsapp: string;
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function Header({ nome, whatsapp }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Implementar link dinâmico do WhatsApp
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de agendar uma consulta.`;

  const navItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6 lg:px-8">
          {/* Logo / Nome */}
          <a href="#" className="font-semibold text-lg text-foreground">
            {nome.split(" ").slice(0, 2).join(" ")}
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Agendar
              </a>
            </Button>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col py-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t">
                <Button variant="default" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Agendar consulta
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
