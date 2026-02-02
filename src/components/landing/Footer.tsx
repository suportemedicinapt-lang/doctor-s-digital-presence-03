import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

interface FooterProps {
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  redesSociais?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function Footer({
  nome,
  crm,
  uf,
  especialidade,
  redesSociais,
}: FooterProps) {
  const socialLinks = [
    { icon: Instagram, href: redesSociais?.instagram, label: "Instagram" },
    { icon: Facebook, href: redesSociais?.facebook, label: "Facebook" },
    { icon: Linkedin, href: redesSociais?.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: redesSociais?.youtube, label: "YouTube" },
  ].filter((link) => link.href);

  return (
    <footer className="border-t bg-card">
      <div className="container-wide section-padding py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Info do médico */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">{nome}</p>
            <p className="text-sm text-muted-foreground">
              {especialidade} • CRM {crm}/{uf}
            </p>
          </div>

          {/* Redes sociais */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Disclaimer CFM */}
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Este site tem caráter informativo e não substitui a consulta médica. 
            Nenhum tratamento deve ser iniciado sem avaliação profissional. 
            Os resultados variam de acordo com cada paciente.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} {nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
