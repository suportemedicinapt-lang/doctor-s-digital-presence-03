import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/types/doctor";

interface FAQSectionProps {
  especialidade: string;
  faq: FAQItem[];
}

// TODO: Substituir props por dados dinâmicos do Med.ID
export function FAQSection({ especialidade, faq }: FAQSectionProps) {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Dúvidas frequentes
          </p>
          <h2 className="text-display-md md:text-display-lg mb-4">
            Perguntas comuns sobre {especialidade}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Reunimos as principais dúvidas para ajudar você a entender melhor 
            nosso atendimento.
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-6 bg-card shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left py-5 text-foreground font-medium hover:text-primary hover:no-underline">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Nota */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          Não encontrou sua dúvida? Entre em contato conosco para mais informações.
        </p>
      </div>
    </section>
  );
}
