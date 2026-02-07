import { Instagram } from "lucide-react";

interface FooterProps {
  nome: string;
  crm: string;
  especialidade: string;
  instagram?: string;
}

export function Footer({
  nome,
  crm,
  especialidade,
  instagram,
}: FooterProps) {
  const showInstagram = instagram && instagram !== "{{instagram}}";

  return (
    <footer className="border-t bg-card">
      <div className="container-wide section-padding py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Info do médico */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">{nome}</p>
            <p className="text-sm text-muted-foreground">
              {especialidade} • CRM {crm}
            </p>
          </div>

          {/* Redes sociais */}
          {showInstagram && (
            <div className="flex items-center gap-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
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
