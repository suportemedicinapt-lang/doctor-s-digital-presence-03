/**
 * Tipos e dados placeholder para o template médico
 * Todas as variáveis usam formato {{variavel}} para substituição
 */

export interface DoctorData {
  nome: string;
  especialidade: string;
  crm: string;
  telefone: string;
  whatsapp: string;
  email: string;
  endereco: string;
  instagram: string;
  bio: string;
  formacao: string;
  foto: string;
}

export interface ServicoData {
  titulo: string;
  descricao: string;
  icone: string;
}

// =====================================================
// DADOS PLACEHOLDER - SERÃO SUBSTITUÍDOS DINAMICAMENTE
// =====================================================

export const doctorData: DoctorData = {
  nome: "{{nome}}",
  especialidade: "{{especialidade}}",
  crm: "{{crm}}",
  telefone: "{{telefone}}",
  whatsapp: "{{whatsapp}}",
  email: "{{email}}",
  endereco: "{{endereco}}",
  instagram: "{{instagram}}",
  bio: "{{bio}}",
  formacao: "{{formacao}}",
  foto: "{{foto}}",
};

export const servicosData: ServicoData[] = [
  {
    titulo: "Consultas",
    descricao: "Atendimento completo com avaliação detalhada e orientação personalizada.",
    icone: "Stethoscope",
  },
  {
    titulo: "Acompanhamento",
    descricao: "Seguimento contínuo para monitorar a evolução do tratamento.",
    icone: "HeartPulse",
  },
  {
    titulo: "Exames",
    descricao: "Solicitação e interpretação de exames complementares.",
    icone: "FileSearch",
  },
  {
    titulo: "Orientação",
    descricao: "Orientações sobre prevenção e hábitos saudáveis.",
    icone: "ClipboardList",
  },
];
