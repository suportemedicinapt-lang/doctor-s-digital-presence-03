import { CheckCircle2 } from "lucide-react";
import type { AreaAtuacao } from "@/types/doctor";

interface ServicesSectionProps {
  especialidade: string;
  areasAtuacao: AreaAtuacao[];
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function ServicesSection({
  especialidade,
  areasAtuacao,
}: ServicesSectionProps) {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Áreas de atuação
          </p>
          <h2 className="text-display-md md:text-display-lg mb-4">
            Como posso ajudar você
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as principais áreas em que ofereço cuidados especializados em {especialidade}.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasAtuacao.map((area, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border shadow-sm card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-lg">
                    {area.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota CFM */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          * Os tratamentos e abordagens variam de acordo com cada caso. 
          Agende uma consulta para uma avaliação personalizada.
        </p>
      </div>
    </section>
  );
}
