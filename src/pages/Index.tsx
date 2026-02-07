/**
 * Landing Page Template - Hub Sites
 * 
 * Template de landing page para médicos, compatível com o CFM.
 * Todos os dados são carregados do arquivo centralizado doctor.ts
 */

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { doctorData, servicosData } from "@/types/doctor";

// FAQ padrão para o template
const faqData = [
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta: "Na primeira consulta, realizamos uma avaliação completa do seu histórico de saúde e suas necessidades atuais. É um momento para conhecer você e entender como posso ajudar da melhor forma.",
  },
  {
    pergunta: "Qual é o tempo médio de espera para agendamento?",
    resposta: "O tempo de espera varia conforme a demanda. Recomendamos entrar em contato para verificar a disponibilidade mais próxima.",
  },
  {
    pergunta: "O atendimento é por convênio ou particular?",
    resposta: "Trabalhamos com atendimento particular. Entre em contato para saber mais sobre valores e formas de pagamento.",
  },
  {
    pergunta: "Preciso de encaminhamento para agendar?",
    resposta: "Não é necessário encaminhamento. Você pode agendar diretamente pelo telefone ou WhatsApp.",
  },
  {
    pergunta: "Como devo me preparar para a consulta?",
    resposta: "Recomendamos trazer exames anteriores e uma lista de medicamentos que você utiliza. Isso ajuda a tornar a consulta mais completa e produtiva.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <Header nome={doctorData.nome} whatsapp={doctorData.whatsapp} />

      {/* Espaço para o header fixo */}
      <div className="h-16 md:h-20" />

      {/* Seções da Landing Page */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          nome={doctorData.nome}
          especialidade={doctorData.especialidade}
          crm={doctorData.crm}
          endereco={doctorData.endereco}
          foto={doctorData.foto}
          whatsapp={doctorData.whatsapp}
        />

        {/* 2. Sobre o Médico */}
        <AboutSection
          nome={doctorData.nome}
          especialidade={doctorData.especialidade}
          bio={doctorData.bio}
          formacao={doctorData.formacao}
        />

        {/* 3. Áreas de Atuação */}
        <ServicesSection
          especialidade={doctorData.especialidade}
          servicos={servicosData}
        />

        {/* 4. Como Funciona */}
        <StepsSection whatsapp={doctorData.whatsapp} />

        {/* 5. FAQ */}
        <FAQSection
          especialidade={doctorData.especialidade}
          faq={faqData}
        />

        {/* 6. CTA Final */}
        <FinalCTA
          nome={doctorData.nome}
          especialidade={doctorData.especialidade}
          endereco={doctorData.endereco}
          whatsapp={doctorData.whatsapp}
          telefone={doctorData.telefone}
        />
      </main>

      {/* Footer */}
      <Footer
        nome={doctorData.nome}
        crm={doctorData.crm}
        especialidade={doctorData.especialidade}
        instagram={doctorData.instagram}
      />
    </div>
  );
};

export default Index;
