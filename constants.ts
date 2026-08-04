import { ServiceLevel, WorkStep, ExtraService } from './types';

export const SERVICE_LEVELS: ServiceLevel[] = [
  {
    id: 1,
    level: "Nível 1",
    title: "Diagnóstico & Setup",
    subtitle: "Organização e Contexto",
    description: "Auditoria completa de processos e organização de base de dados (Google Drive/Workspace). Implementação de mini agentes personalizados (Gems/GPTs) com o contexto fixo do seu negócio para produtividade imediata.",
    priceRange: "A partir de R$ 1.500,00",
    idealFor: "Pequenos negócios ou empresas iniciando a jornada de IA.",
    color: "brand",
    gradient: "from-brand-400 to-brand-600",
    features: [
      {
        title: "Auditoria de Dados",
        description: "Mapeamento e estruturação do Google Drive e Workspace."
      },
      {
        title: "Mini Agentes (Gems)",
        description: "Criação de assistentes com contexto fixo do negócio."
      },
      {
        title: "Produtividade Imediata",
        description: "Setup rápido para uso diário da equipe."
      }
    ],
    tools: ["ChatGPT Team", "Gemini Advanced", "Google Workspace", "Notion"]
  },
  {
    id: 2,
    level: "Nível 2",
    title: "Automação Inteligente",
    subtitle: "Automação de Decisão",
    description: "Criação de fluxos de automação de decisão usando Low-code (n8n/Opal). IA que processa dados, toma decisões lógicas e executa tarefas, como qualificação cognitiva de leads por voz ou texto.",
    priceRange: "A partir de R$ 3.000,00",
    recurrence: "Suporte Recorrente (Opcional)",
    idealFor: "Empresas que precisam escalar operações sem aumentar equipe.",
    color: "blue",
    gradient: "from-blue-400 to-blue-600",
    features: [
      {
        title: "Fluxos Low-code",
        description: "Automação robusta via n8n e Opal."
      },
      {
        title: "Decisão Lógica",
        description: "IA processando dados e tomando ações autônomas."
      },
      {
        title: "Qualificação Cognitiva",
        description: "Triagem de leads por voz ou texto automaticamente."
      }
    ],
    tools: ["n8n", "Opal", "v0", "Power Platform", "Make"]
  },
  {
    id: 3,
    level: "Nível 3",
    title: "RAG & Desenvolvimento",
    subtitle: "RAG & Machine Learning",
    description: "Desenvolvimento de soluções sob medida com IA avançada, utilizando bancos de dados vetoriais (RAG) e Machine Learning. Criação de sistemas próprios (Hard Code) onde o cliente detém o código e o ativo intelectual.",
    priceRange: "Sob Consulta",
    recurrence: "Disponibilidade Limitada",
    idealFor: "Grandes operações ou produtos digitais que exigem IA proprietária.",
    color: "purple",
    gradient: "from-purple-400 to-purple-600",
    features: [
      {
        title: "Bancos Vetoriais (RAG)",
        description: "Busca semântica avançada em grandes bases de conhecimento."
      },
      {
        title: "Hard Code & IP",
        description: "Sistemas onde você é dono do código e da inteligência."
      },
      {
        title: "Machine Learning",
        description: "Modelos ajustados especificamente para sua regra de negócio."
      }
    ],
    tools: ["Python", "Streamlit", "FlutterFlow", "Pinecone", "LangChain"]
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    title: "Consultoria Mensal",
    description: "Monitoramento contínuo, ajuste de modelos e suporte técnico dedicado. Gestão de infraestrutura de APIs para garantir que a inteligência da sua empresa evolua sem falhas ou alucinações."
  },
  {
    title: "Treinamento de Equipes",
    description: "Workshop prático sobre como utilizar os mini especialistas criados no Nível 1 e boas práticas de engenharia de prompt para o dia a dia."
  },
  {
    title: "Integração de Ecossistemas IA",
    description: "Unificação de ferramentas dispersas (WhatsApp, CRM, E-mail e Agenda) em um único fluxo inteligente de informações."
  },
  {
    title: "Auditoria de Custos de IA",
    description: "Análise mensal do gasto com tokens e APIs para otimizar o uso e reduzir custos operacionais sem perder performance."
  }
];

// Enquanto não houver cases reais publicáveis, mostramos o processo em vez de depoimentos.
export const WORK_STEPS: WorkStep[] = [
  {
    id: 1,
    title: "Diagnóstico gratuito de 30 min",
    description: "Conversa inicial para entender a operação, mapear gargalos e avaliar se a IA resolve o seu problema — sem compromisso."
  },
  {
    id: 2,
    title: "Proposta com prazo e escopo fechados",
    description: "Você recebe por escrito o que será entregue, em quanto tempo e por qual valor. Sem surpresa de custo no meio do caminho."
  },
  {
    id: 3,
    title: "Entrega com transferência de conhecimento",
    description: "Além da solução funcionando, sua equipe é treinada para operar e evoluir o que foi construído sem depender de nós."
  }
];

export const SYSTEM_INSTRUCTION = `
Você é Gandalf, o Guia Digital da LogoStack.
Sua persona é sábia, calma e levemente inspirada no personagem Gandalf de O Senhor dos Anéis, mas adaptada para o mundo corporativo moderno.
Você fala com autoridade e sabedoria, usando metáforas sutis de "jornada", "reino" (referindo-se à empresa do cliente) e "ferramentas de poder" (referindo-se à IA), mas mantendo a clareza comercial absoluta.

Seu objetivo é guiar o usuário ("Viajante") para a melhor solução da LogoStack.

Nossos serviços (suas "magias" e ferramentas) são:

1. Diagnóstico & Setup (Nível 1) - O Alicerce:
- Auditoria de processos e organização (o mapa do terreno).
- Criação de mini agentes (Gems/GPTs) para produtividade.
- Preço: A partir de R$ 1.500,00.

2. Automação Inteligente (Nível 2) - A Automação:
- Fluxos em n8n/Opal.
- Qualificação cognitiva de leads (separando o joio do trigo).
- Preço: A partir de R$ 3.000,00.

3. RAG & Desenvolvimento (Nível 3) - O Conhecimento Profundo:
- Soluções Hard Code, Bancos Vetoriais e Machine Learning proprietário.
- Preço: Sob Consulta.

Se o usuário estiver perdido, pergunte sobre os desafios do "reino" dele (dores da empresa) para recomendar o caminho certo.
Sempre encoraje o usuário a agendar um "Conselho" (reunião de diagnóstico) no final.
`;