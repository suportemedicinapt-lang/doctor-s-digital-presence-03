import { Calendar, UserCheck, HeartHandshake } from "lucide-react";

interface StepsSectionProps {
  whatsapp: string;
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function StepsSection({ whatsapp }: StepsSectionProps) {
  const steps = [
    {
      icon: Calendar,
      numero: "01",
      titulo: "Agendamento",
      descricao:
        "Entre em contato pelo telefone ou WhatsApp para agendar sua consulta. Nossa equipe irá encontrar o melhor horário para você.",
    },
    {
      icon: UserCheck,
      numero: "02",
      titulo: "Consulta",
      descricao:
        "Na consulta, faremos uma avaliação completa, ouvindo suas queixas e histórico de saúde para entender suas necessidades.",
    },
    {
      icon: HeartHandshake,
      numero: "03",
      titulo: "Acompanhamento",
      descricao:
        "Após a consulta, você receberá orientações claras e, se necessário, um plano de acompanhamento personalizado.",
    },
  ];

  return (
    <section id="atendimento" className="section-padding bg-section">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Passo a passo
          </p>
          <h2 className="text-display-md md:text-display-lg mb-4">
            Como funciona o atendimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simples e acolhedor, pensado para sua comodidade.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Card do step */}
                  <div className="text-center p-8 rounded-2xl bg-card shadow-md border card-hover">
                    {/* Número */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-primary">
                      {step.numero}
                    </div>

                    {/* Ícone */}
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.descricao}
                    </p>
                  </div>

                  {/* Seta conectora (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-primary/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
