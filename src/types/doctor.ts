// Tipos para dados dinâmicos do médico (Med.ID)
// TODO: Esses tipos serão usados para conectar com o backend do MedMarketing Pro

export interface DoctorData {
  // Dados básicos
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  anosExperiencia: number;
  cidadeBairro: string;
  bioCurta: string;
  
  // Contato
  telefone: string;
  whatsapp: string;
  email?: string;
  
  // Redes sociais
  redesSociais?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  
  // Imagens
  fotoPerfilUrl?: string;
  
  // Áreas de atuação
  areasAtuacao: AreaAtuacao[];
  
  // FAQ personalizado
  faq?: FAQItem[];
}

export interface AreaAtuacao {
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

// Dados de exemplo/placeholder
export const doctorPlaceholder: DoctorData = {
  nome: "{{NOME_MEDICO}}",
  crm: "{{CRM}}",
  uf: "{{UF}}",
  especialidade: "{{ESPECIALIDADE}}",
  anosExperiencia: 0, // TODO: substituir por dados dinâmicos
  cidadeBairro: "{{CIDADE_BAIRRO}}",
  bioCurta: "{{BIO_CURTA}}",
  telefone: "{{TELEFONE}}",
  whatsapp: "{{WHATSAPP}}",
  redesSociais: {
    instagram: "{{INSTAGRAM}}",
    facebook: "{{FACEBOOK}}",
    linkedin: "{{LINKEDIN}}",
  },
  areasAtuacao: [
    {
      titulo: "Área de Atuação 1",
      descricao: "Descrição breve da área de atuação, explicando como o médico pode ajudar o paciente.",
    },
    {
      titulo: "Área de Atuação 2",
      descricao: "Descrição breve da área de atuação, explicando como o médico pode ajudar o paciente.",
    },
    {
      titulo: "Área de Atuação 3",
      descricao: "Descrição breve da área de atuação, explicando como o médico pode ajudar o paciente.",
    },
    {
      titulo: "Área de Atuação 4",
      descricao: "Descrição breve da área de atuação, explicando como o médico pode ajudar o paciente.",
    },
  ],
  faq: [
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
  ],
};
