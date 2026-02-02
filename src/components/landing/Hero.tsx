import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award } from "lucide-react";

interface HeroProps {
  nome: string;
  especialidade: string;
  crm: string;
  uf: string;
  cidadeBairro: string;
  fotoUrl?: string;
  whatsapp: string;
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function Hero({
  nome,
  especialidade,
  crm,
  uf,
  cidadeBairro,
  fotoUrl,
  whatsapp,
}: HeroProps) {
  // TODO: Implementar link dinâmico do WhatsApp
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de agendar uma consulta.`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      {/* Círculos decorativos */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge CRM */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-badge text-badge-foreground text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>CRM {crm}/{uf}</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-display-lg md:text-display-xl">
                Cuidado em{" "}
                <span className="text-gradient">{especialidade}</span>
                <br />
                em {cidadeBairro}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Atendimento humanizado e personalizado, com foco no seu bem-estar e qualidade de vida.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar consulta
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={`tel:${whatsapp}`}>
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </a>
              </Button>
            </div>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Atendimento presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Agendamento fácil</span>
              </div>
            </div>
          </div>

          {/* Foto do médico */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Moldura decorativa */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl" />
              
              {/* Container da foto */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden bg-muted shadow-xl">
                {fotoUrl ? (
                  <img
                    src={fotoUrl}
                    alt={`Foto de ${nome}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder para foto
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl text-primary font-semibold">
                          {nome.charAt(0) || "M"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Foto do(a) {nome}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card flutuante com nome */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-xl p-4 shadow-lg border">
                <p className="font-semibold text-foreground">{nome}</p>
                <p className="text-sm text-muted-foreground">{especialidade}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
