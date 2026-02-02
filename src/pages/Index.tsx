/**
 * Landing Page Template - MedMarketing Pro
 * 
 * Template de landing page para médicos, compatível com o CFM.
 * Todos os dados são recebidos via props para integração com Med.ID.
 * 
 * TODO: Conectar com dados dinâmicos do Med.ID
 */

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { doctorPlaceholder, type DoctorData } from "@/types/doctor";

// ============================================
// TODO: SUBSTITUIR POR DADOS DINÂMICOS (Med.ID)
// ============================================
// 
// Exemplo de integração futura:
// 
// import { useDoctorData } from "@/hooks/useDoctorData";
// 
// const LandingPage = ({ doctorId }: { doctorId: string }) => {
//   const { data: doctorData, isLoading } = useDoctorData(doctorId);
//   if (isLoading) return <LoadingScreen />;
//   return <LandingPageContent doctor={doctorData} />;
// };
// ============================================

// Dados de demonstração para preview do template
const demoData: DoctorData = {
  nome: "Dra. Maria Silva",
  crm: "123456",
  uf: "SP",
  especialidade: "Dermatologia",
  anosExperiencia: 12,
  cidadeBairro: "São Paulo - Jardins",
  bioCurta: "Sou dermatologista com mais de 12 anos de experiência, dedicada a oferecer um atendimento humanizado e personalizado. Minha missão é cuidar da saúde da sua pele com atenção, empatia e as melhores práticas da medicina baseada em evidências.",
  telefone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  redesSociais: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  areasAtuacao: [
    {
      titulo: "Acne e Rosácea",
      descricao: "Avaliação e tratamento de acne em todas as fases, incluindo orientações para cuidados diários e prevenção de cicatrizes.",
    },
    {
      titulo: "Dermatite e Alergias",
      descricao: "Investigação e manejo de dermatites, eczemas e reações alérgicas cutâneas com abordagem individualizada.",
    },
    {
      titulo: "Manchas e Melasma",
      descricao: "Avaliação de manchas na pele, com orientações sobre cuidados e opções de tratamento adequadas a cada caso.",
    },
    {
      titulo: "Câncer de Pele",
      descricao: "Avaliação de lesões suspeitas e acompanhamento preventivo. Diagnóstico precoce é fundamental para melhores resultados.",
    },
    {
      titulo: "Queda de Cabelo",
      descricao: "Investigação das causas da queda capilar e orientação sobre tratamentos disponíveis para cada situação.",
    },
    {
      titulo: "Cuidados com Unhas",
      descricao: "Avaliação e tratamento de alterações ungueais, infecções fúngicas e outros problemas relacionados às unhas.",
    },
  ],
  faq: [
    {
      pergunta: "Como funciona a primeira consulta de dermatologia?",
      resposta: "Na primeira consulta, realizo uma avaliação completa da sua pele, cabelos e unhas, além de ouvir suas queixas e histórico de saúde. É um momento para entender suas necessidades e traçar um plano de cuidados personalizado.",
    },
    {
      pergunta: "Preciso de encaminhamento para consultar com dermatologista?",
      resposta: "Não é necessário encaminhamento. Você pode agendar diretamente a consulta pelo WhatsApp ou telefone.",
    },
    {
      pergunta: "Quais exames posso precisar fazer?",
      resposta: "Dependendo da avaliação clínica, posso solicitar exames laboratoriais, biópsias ou dermatoscopia para complementar o diagnóstico. Tudo será explicado durante a consulta.",
    },
    {
      pergunta: "O atendimento é por convênio ou particular?",
      resposta: "Atendo de forma particular. Entre em contato para saber mais sobre valores e formas de pagamento disponíveis.",
    },
    {
      pergunta: "Com que frequência devo ir ao dermatologista?",
      resposta: "Recomendo uma avaliação anual de rotina para prevenção. Pacientes com condições específicas podem precisar de acompanhamento mais frequente, conforme orientação médica.",
    },
    {
      pergunta: "Posso enviar fotos antes da consulta?",
      resposta: "Fotos podem ajudar no direcionamento inicial, mas a avaliação presencial é fundamental para um diagnóstico preciso. Na consulta, poderei examinar adequadamente a região afetada.",
    },
  ],
};

const Index = () => {
  // TODO: Substituir demoData por dados dinâmicos do Med.ID
  const doctor = demoData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <Header nome={doctor.nome} whatsapp={doctor.whatsapp} />

      {/* Espaço para o header fixo */}
      <div className="h-16 md:h-20" />

      {/* Seções da Landing Page */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          nome={doctor.nome}
          especialidade={doctor.especialidade}
          crm={doctor.crm}
          uf={doctor.uf}
          cidadeBairro={doctor.cidadeBairro}
          fotoUrl={doctor.fotoPerfilUrl}
          whatsapp={doctor.whatsapp}
        />

        {/* 2. Sobre o Médico */}
        <AboutSection
          nome={doctor.nome}
          especialidade={doctor.especialidade}
          bioCurta={doctor.bioCurta}
          anosExperiencia={doctor.anosExperiencia}
        />

        {/* 3. Áreas de Atuação */}
        <ServicesSection
          especialidade={doctor.especialidade}
          areasAtuacao={doctor.areasAtuacao}
        />

        {/* 4. Como Funciona */}
        <StepsSection whatsapp={doctor.whatsapp} />

        {/* 5. FAQ */}
        <FAQSection
          especialidade={doctor.especialidade}
          faq={doctor.faq || []}
        />

        {/* 6. CTA Final */}
        <FinalCTA
          nome={doctor.nome}
          especialidade={doctor.especialidade}
          cidadeBairro={doctor.cidadeBairro}
          whatsapp={doctor.whatsapp}
          telefone={doctor.telefone}
        />
      </main>

      {/* Footer */}
      <Footer
        nome={doctor.nome}
        crm={doctor.crm}
        uf={doctor.uf}
        especialidade={doctor.especialidade}
        redesSociais={doctor.redesSociais}
      />
    </div>
  );
};

export default Index;
