import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone } from "lucide-react";

interface FinalCTAProps {
  nome: string;
  especialidade: string;
  cidadeBairro: string;
  whatsapp: string;
  telefone: string;
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function FinalCTA({
  nome,
  especialidade,
  cidadeBairro,
  whatsapp,
  telefone,
}: FinalCTAProps) {
  // TODO: Implementar link dinâmico do WhatsApp
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de agendar uma consulta com ${nome}.`;

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
      
      {/* Decorações */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Conteúdo */}
          <h2 className="text-display-md md:text-display-lg text-primary-foreground mb-6">
            Cuide da sua saúde com atenção e clareza
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende sua consulta com {nome} e dê o primeiro passo 
            para um cuidado em {especialidade} personalizado e acolhedor.
          </p>

          {/* Localização */}
          <div className="inline-flex items-center gap-2 text-primary-foreground/80 mb-8">
            <MapPin className="w-5 h-5" />
            <span>{cidadeBairro}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white/30 text-primary-foreground bg-transparent hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <a href={`tel:${telefone}`}>
                <Phone className="w-5 h-5" />
                Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
