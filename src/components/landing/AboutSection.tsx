import { GraduationCap, Heart, Clock } from "lucide-react";

interface AboutSectionProps {
  nome: string;
  especialidade: string;
  bioCurta: string;
  anosExperiencia: number;
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function AboutSection({
  nome,
  especialidade,
  bioCurta,
  anosExperiencia,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="section-padding bg-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Conheça o profissional
              </p>
              <h2 className="text-display-md md:text-display-lg">
                Sobre {nome}
              </h2>
            </div>

            {/* Bio - TODO: substituir por dados dinâmicos */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {bioCurta || `Sou especialista em ${especialidade}, dedicado(a) a oferecer um atendimento acolhedor e personalizado a cada paciente.`}
              </p>
              <p>
                Acredito que a medicina vai além do diagnóstico: envolve escuta ativa, compreensão das necessidades individuais e um acompanhamento contínuo para garantir os melhores cuidados à sua saúde.
              </p>
              <p>
                Minha abordagem é baseada em evidências científicas atualizadas, sempre buscando as melhores práticas para cada situação, com transparência e respeito.
              </p>
            </div>
          </div>

          {/* Cards de destaque */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-card shadow-md border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Formação</h3>
              <p className="text-sm text-muted-foreground">
                Especialização em {especialidade} com formação continuada e atualização constante.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-md border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Experiência</h3>
              <p className="text-sm text-muted-foreground">
                {anosExperiencia > 0
                  ? `${anosExperiencia} anos de experiência na área, com milhares de pacientes atendidos.`
                  : "Anos de dedicação à prática médica, com milhares de pacientes atendidos."}
              </p>
            </div>

            <div className="sm:col-span-2 p-6 rounded-2xl bg-card shadow-md border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Abordagem</h3>
              <p className="text-sm text-muted-foreground">
                Atendimento humanizado, com escuta ativa e foco na qualidade de vida. 
                Cada paciente é único e merece atenção individualizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
