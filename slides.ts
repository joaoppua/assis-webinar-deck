import { SlideData, SlideLayout } from './types';

export const slides: SlideData[] = [
  // PARTE 1: THE OPEN
  {
    id: 1,
    section: "",
    layout: SlideLayout.IMPACT_COVER,
    title: "Como vender 40% mais no WhatsApp sem aumentar o investimento em tráfego",
    subtitle: "Baseado em 1.2 milhão de negociações reais."
  },
  {
    id: 2,
    section: "ENGAJAMENTO",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "PERGUNTA RÁPIDA:",
    highlight: "Você recebe leads pelo WhatsApp e sente que está deixando dinheiro na mesa?",
    highlightTerms: ["deixando dinheiro na mesa"],
    footer: "[ Digite SIM no chat ]"
  },
  {
    id: 3,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "ANTES DE COMEÇAR...",
    subtitle: "Se você está pensando:",
    content: [
      "❌ 'Já tentei chatbot e foi um desastre'",
      "❌ 'Meu negócio é diferente'",
      "❌ 'IA parece robô e espanta cliente'",
      "👉 Fica comigo."
    ]
  },
  {
    id: 4,
    section: "QUEM SOU EU",
    layout: SlideLayout.BIO,
    title: "Quem é Raphael Machioni?",
    backgroundImage: "/bio_rapha_bg.avif",
    content: [
      "Sou fundador da Assis, plataforma de atendimento por WhatsApp que já analisou mais de 1,2 milhão de negociações de WhatsApp.",
      "Antes, construí a operação de vendas da Vee Benefícios — que foi vendida para a Swile em um deal de R$200+ milhões."
    ]
  },
  {
    id: 5,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "NOS ÚLTIMOS MESES:",
    content: [
      "👥 21.695 leads (atendidos com chatbot IA)",
      "🤝 Mais de 1,2 milhões de negociações reais processadas",
      "🔍 Identificamos padrões que ninguém está falando"
    ]
  },
  {
    id: 6,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "MAS ANTES DE CHEGAR AQUI...",
    subtitle: "",
    content: [
      "❌ n8n",
      "❌ ManyChat",
      "❌ NicoChat",
      "❌ Zaia",
      "⚠️ Funcionava no início... depois virava robô burro."
    ],
    images: [
      "/n8n-manychat.jpg",
      "/manychat-complex.jpg"
    ]
  },
  {
    id: 7,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "HOJE VOCÊ VAI DESCOBRIR:",
    content: [
      "1️⃣ Por que aumentar tráfego pode estar PIORANDO suas vendas",
      "2️⃣ O erro que faz você perder 70% do tempo com quem nunca ia comprar",
      "3️⃣ Como fazer follow-up que o cliente AGRADECE ao invés de ignorar"
    ]
  },
  {
    id: 701,
    section: "",
    layout: SlideLayout.ICON_IMPACT,
    icon: "🎁",
    highlight: "No final: um agente de IA pra gerar caixa em 72h",
    subtitle: "Fica até o final."
  },
  {
    id: 8,
    section: "BIG IDEA",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "",
    icon: "🎯",
    highlight: "Você não precisa de mais leads. Você precisa converter melhor os que já tem.",
    highlightTerms: ["converter melhor"],
    maxWidth: "max-w-[90%]",
    subtitle: "A diferença entre quem converte 10% e 30% é SISTEMA."
  },
  {
    id: 9,
    section: "TEASER",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "NO FINAL...",
    highlight: "Vou mostrar como ter acesso a tudo que vou ensinar.\n(Valor real R$14.000+)",
    maxWidth: "max-w-[85%]",
    subtitle: "Mas primeiro, deixa eu provar que vale cada centavo."
  },
  {
    id: 10,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "3 COISAS QUE DESCOBRIMOS ANALISANDO\n1,2 MILHÃO DE NEGOCIAÇÕES:",
    highlightTerms: ["1,2 MILHÃO DE NEGOCIAÇÕES"],
    content: [
      "🔑 Segredo 1: Por que mais leads pode significar MENOS vendas",
      "🔑 Segredo 2: Como separar comprador de curioso AUTOMATICAMENTE",
      "🔑 Segredo 3: O tipo de follow-up que fecha 80% das vendas"
    ]
  },
  {
    id: 11,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "ISSO NÃO É PRA TODO MUNDO",
    highlight: "Se você recebe 5 leads/mês e dá conta...\ntalvez não precise.",
    icon: "🤷"
  },
  {
    id: 1101,
    section: "",
    layout: SlideLayout.ICON_IMPACT,
    icon: "🔥",
    title: "MAS SE RECEBE DEZENAS E PERDE VENDA POR FALTA DE TEMPO...",
    highlight: "FICA COMIGO."
  },
  {
    id: 12,
    section: "MINHA PROMESSA",
    layout: SlideLayout.QUOTE,
    icon: "🤝",
    title: "MINHA PROMESSA COM VOCÊ:",
    highlight: "Nos próximos 60 minutos, vou entregar tanto valor que... mesmo se você não comprar nada, vai sair sabendo exatamente onde está perdendo venda e como resolver.",
    highlightTerms: ["sair sabendo exatamente"],
    maxWidth: "max-w-[85%]",
    subtitle: "Fechado?"
  },

  // PARTE 2: SEGREDO 1
  {
    id: 13,
    section: "O PARADOXO DO TRÁFEGO",
    layout: SlideLayout.IMPACT_COVER,
    title: "🔑 SEGREDO 1",
    subtitle: "Por que mais leads pode significar MENOS vendas"
  },
  {
    id: 14,
    section: "SEGREDO 1",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "E SE EU TE DISSESSE QUE...",
    icon: "📉",
    highlight: "Aumentar o tráfego pode estar PIORANDO suas vendas?",
    maxWidth: "max-w-[90%]"
  },
  {
    id: 15,
    section: "SEGREDO 1",
    layout: SlideLayout.BULLETS,
    title: "VAMOS PENSAR JUNTOS:",
    icon: "📊",
    content: [
      "• Investe R$7.500/mês",
      "• Dobra o investimento para R$15.000/mês",
      "• Resultado esperado: dobrar as vendas"
    ]
  },
  {
    id: 1501,
    section: "SEGREDO 1",
    layout: SlideLayout.ICON_IMPACT,
    icon: "😱",
    highlight: "Vendas aumentam só 15%.",
    maxWidth: "max-w-[90%]",
    subtitle: "Por quê?"
  },
  {
    id: 16,
    section: "SEGREDO 1",
    layout: SlideLayout.CYCLE,
    title: "O CICLO VICIOSO DO TRÁFEGO CEGO",
    icon: "leaky-bucket",
    content: [
      "Mais tráfego",
      "Mais curiosos",
      "Mais tempo perdido",
      "Menos atenção pro comprador",
      "Menos vendas",
      "'Preciso de mais tráfego'"
    ]
  },
  {
    id: 17,
    section: "SEGREDO 1",
    layout: SlideLayout.CYCLE,
    title: "O CICLO VIRTUOSO",
    content: [
      "Filtro inteligente",
      "Só comprador chega em você",
      "Mais tempo pro que importa",
      "Mais vendas",
      "Meta aprende quem compra"
    ]
  },
  {
    id: 18,
    section: "SEGREDO 1",
    layout: SlideLayout.BULLETS,
    title: "O SEGREDO TÉCNICO: TRACKING",
    content: [
      "1. Alguém qualificado fecha venda",
      "2. Informação VOLTA pro algoritmo",
      "3. A Meta aprende: 'esse perfil compra'",
      "4. Seu tráfego fica mais inteligente AUTOMATICAMENTE"
    ],
    footer: "A Assis usa API oficial da Meta.",
    footerImage: "/meta-logo.png"
  },
  {
    id: 19,
    section: "SEGREDO 1",
    layout: SlideLayout.COMPARISON,
    title: "COMPARATIVO DE TRÁFEGO",
    comparisonData: {
      leftTitle: "SEM TRACKING",
      leftContent: ["R$5.000/mês", "200 leads", "Meta não sabe quem comprou", "Continua trazendo o mesmo perfil (50% curioso)"],
      rightTitle: "COM TRACKING",
      rightContent: ["R$5.000/mês", "200 leads", "Assis qualifica + marca quem comprou", "Meta aprende", "Mês 2: mais compradores, menos curiosos"]
    }
  },
  {
    id: 1901,
    section: "SEGREDO 1",
    layout: SlideLayout.BULLETS,
    title: "NA PRÁTICA: SEM TRACKING",
    subtitle: "Gerenciador de Anúncios — Meta Ads",
    content: [
      "❌ CPL: R$1.862,65",
      "❌ ROAS: 0,02",
      "❌ Custo por compra: R$5.951"
    ],
    images: ["/ads-sem-tracking.png"],
    imageBelow: true
  },
  {
    id: 1902,
    section: "SEGREDO 1",
    layout: SlideLayout.BULLETS,
    title: "NA PRÁTICA: COM TRACKING",
    subtitle: "Gerenciador de Anúncios — Meta Ads",
    content: [
      "✅ CPL: R$16,80",
      "✅ ROAS: 1,79",
      "✅ Custo por compra: R$167"
    ],
    images: ["/ads-com-tracking.png"],
    imageBelow: true
  },
  {
    id: 20,
    section: "SEGREDO 1",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "PERGUNTA",
    highlight: "Já aumentou tráfego esperando vender mais... e a conversão não mudou?",
    highlightTerms: ["conversão não mudou?"],
    footer: "[ Digite SIM no chat ]"
  },
  {
    id: 21,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "MAS ESPERA...",
    highlight: "Mesmo com tráfego melhor, você ainda recebe leads misturados. Como separar compradores de curiosos?",
    highlightTerms: ["separar compradores de curiosos?"],
    subtitle: "🔑 É o que vamos ver agora."
  },

  // PARTE 3: SEGREDO 2
  {
    id: 22,
    section: "O FILTRO INVISÍVEL",
    layout: SlideLayout.IMPACT_COVER,
    title: "🔑 SEGREDO 2",
    subtitle: "Como separar comprador de curioso AUTOMATICAMENTE"
  },
  {
    id: 2201,
    section: "SEGREDO 2",
    layout: SlideLayout.ICON_IMPACT,
    title: "A REALIDADE",
    icon: "⏳",
    highlight: "70% do seu tempo vai pro lixo.",
    highlightTerms: ["vai pro lixo."],
    maxWidth: "max-w-3xl",
    subtitle: "Gasto com gente que NUNCA ia comprar."
  },
  {
    id: 24,
    section: "SEGREDO 2",
    layout: SlideLayout.BULLETS,
    title: "DADOS DE +21 MIL ATENDIMENTOS",
    content: [
      "• 60% dos leads nunca compravam",
      "• Tempo gasto com eles: IGUAL ao dos compradores",
      "• Estávamos dando atenção IGUAL pra quem não ia comprar."
    ]
  },
  {
    id: 25,
    section: "SEGREDO 2",
    layout: SlideLayout.BULLETS,
    title: "A CONTA DO CURIOSO",
    icon: "🚨",
    content: [
      "200 leads/mês → 140 curiosos (70%)",
      "15 min cada = 2.100 minutos",
      "35 HORAS/MÊS jogadas fora"
    ],
    footer: "Enquanto isso, os compradores estão esperando..."
  },
  {
    id: 26,
    section: "SEGREDO 2",
    layout: SlideLayout.TABLE,
    title: "CENÁRIO 1: SEM FILTRO",
    subtitle: "50 horas de trabalho. 28 vendas.",
    tableData: {
      headers: ["Tipo", "Qtd", "Tempo Seu", "Fecham"],
      rows: [
        { label: "Curiosos", value1: "100", value2: "25h", value3: "2" },
        { label: "Mornos", value1: "60", value2: "15h", value3: "6" },
        { label: "Quentes", value1: "40", value2: "10h", value3: "20" },
        { label: "TOTAL", value1: "200", value2: "50h", value3: "28", highlight: true }
      ]
    }
  },
  {
    id: 27,
    section: "SEGREDO 2",
    layout: SlideLayout.TABLE,
    title: "CENÁRIO 2: COM CHATBOT IA",
    subtitle: "15 horas de trabalho. 49 vendas.",
    footer: "*Reativados pelo sistema de IA depois",
    tableData: {
      headers: ["Tipo", "Qtd", "Quem Atende?", "Tempo Seu", "Fecham"],
      rows: [
        { label: "Curiosos", value1: "100", value2: "IA atende", value3: "0h", value4: "5*" },
        { label: "Mornos", value1: "60", value2: "IA nutre", value3: "2h", value4: "12*" },
        { label: "Quentes", value1: "40", value2: "VOCÊ", value3: "13h", value4: "32" },
        { label: "TOTAL", value1: "200", value2: "-", value3: "15h", value4: "49", highlight: true }
      ]
    }
  },
  {
    id: 28,
    section: "SEGREDO 2",
    layout: SlideLayout.METRIC_BARS,
    title: "COMPARATIVO FINAL",
    metricBarsData: {
      leftLabel: "SEM FILTRO",
      rightLabel: "COM CHATBOT IA",
      metrics: [
        { label: "Tempo de trabalho", leftValue: 50, rightValue: 15, leftDisplay: "50h", rightDisplay: "15h", lowerIsBetter: true },
        { label: "Vendas fechadas", leftValue: 28, rightValue: 49, leftDisplay: "28", rightDisplay: "49" },
        { label: "Faturamento", leftValue: 56000, rightValue: 98000, leftDisplay: "R$56k", rightDisplay: "R$98k" },
        { label: "Fat. por hora", leftValue: 1120, rightValue: 6533, leftDisplay: "R$1.120/h", rightDisplay: "R$6.533/h" }
      ]
    },
    footer: "MESMO TRÁFEGO. MENOS TRABALHO. MAIS VENDAS."
  },
  {
    id: 29,
    section: "SEGREDO 2",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "",
    icon: "🤖",
    highlight: "'Se eu colocar uma IA, não vai espantar cliente? Não vai parecer robô?'"
  },
  {
    id: 30,
    section: "SEGREDO 2",
    layout: SlideLayout.TESTIMONIALS,
    title: "FEEDBACK DOS CLIENTES",
    subtitle: "A IA aprende do SEU jeito. Não é resposta genérica.",
    images: [
      "/testimonials/jesse-silva-linkedin.jpg",
      "/testimonials/michael-cypriano-instagram.jpg",
      "/testimonials/michael-cypriano-comment.png",
      "/testimonials/leonardo-reboucas.jpg",
      "/testimonials/narapetala-inicio.jpg",
      "/testimonials/narapetala-amando.jpg",
      "/testimonials/rodrigo-falconieri.jpg",
      "/testimonials/caiquetelles-vida.png",
      "/testimonials/caiquetelles-adoro.png",
      "/testimonials/denis-moraes.png",
      "/testimonials/andre-marques.png",
      "/testimonials/rejane-coutinho.png",
      "/testimonials/whatsapp-plataforma-boa.png"
    ]
  },
  {
    id: 31,
    section: "SEGREDO 2",
    layout: SlideLayout.COMPARISON,
    title: "CHATBOT vs ASSIS",
    comparisonData: {
      leftTitle: "CHATBOT TRADICIONAL",
      leftContent: ["Fluxos fixos", "Trava se sair do script", "Resposta genérica", "Cliente irritado"],
      rightTitle: "ASSIS (IA)",
      rightContent: ["Lê contexto", "Entende intenção", "Responde como VOCÊ", "Cliente nem percebe"]
    }
  },
  {
    id: 32,
    section: "SEGREDO 2",
    layout: SlideLayout.BULLETS,
    title: "O QUE REALMENTE ESPANTA",
    content: [
      "❌ Demorar horas pra responder",
      "❌ Esquecer de fazer follow-up",
      "❌ Mandar 'oi, tudo bem?' genérico",
      "✅ A IA bem feita NÃO espanta. O atendimento ruim espanta."
    ]
  },
  {
    id: 33,
    section: "SEGREDO 2",
    layout: SlideLayout.SPLIT_IMAGE,
    title: "ANALOGIA DO SEGURANÇA DE CAMAROTE",
    content: [
      "SEM FILTRO: Todo mundo entra no camarote, lota, VIP espera igual ao curioso.",
      "COM FILTRO: Segurança na porta filtra, só quem é VIP entra no camarote.",
      "👉 Seu WhatsApp hoje é um camarote sem segurança na porta."
    ]
  },
  {
    id: 34,
    section: "SEGREDO 2",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "VOCÊ QUER ISSO?",
    icon: "🚀",
    highlight: "Vender 75% mais, atendendo 70% menos, sem espantar cliente?",
    footer: "[ Digite SIM no chat ]"
  },
  {
    id: 35,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "OK, VOCÊ ENTENDEU:",
    content: [
      "✅ Precisa de um filtro",
      "✅ A IA moderna não espanta cliente"
    ]
  },
  {
    id: 3501,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "Mas e os leads que não estão prontos agora?",
    highlight: "Os 60% que são \"mornos\"?",
    subtitle: "🔑 É aí que entra o terceiro segredo."
  },

  // PARTE 4: SEGREDO 3
  {
    id: 36,
    section: "O LEMBRETE ESTRATÉGICO",
    layout: SlideLayout.IMPACT_COVER,
    title: "🔑 SEGREDO 3",
    subtitle: "O tipo de follow-up que fecha 80% das vendas"
  },
  {
    id: 3601,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "DADO DE MERCADO",
    content: [
      "🔔 80% das vendas acontecem depois do 5º contato",
      "⚠️ 44% dos vendedores desistem após 1 follow-up",
      "👉 Quantos follow-ups você faz?"
    ],
    images: ["/brevet-follow-up-stat.jpg"],
    footer: "Fonte: Brevet Group — blog.thebrevetgroup.com"
  },
  {
    id: 38,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "HISTÓRIA DA UNIDAS (Aluguel de Carros)",
    icon: "💸",
    content: [
      "Vendedora Top Performer (tinha até Porsche).",
      "Perdeu negócio GIGANTE com a Unidas.",
      "Motivo: Esqueceu de fazer follow-up."
    ]
  },
  {
    id: 39,
    section: "SEGREDO 3",
    layout: SlideLayout.ICON_IMPACT,
    icon: "⚙️",
    title: "A LIÇÃO",
    highlight: "O problema não é talento.\nÉ SISTEMA."
  },
  {
    id: 40,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "O QUE A CIÊNCIA DIZ SOBRE FOLLOW-UP",
    content: [
      "📊 Leads contatados em até 5 min têm 21x mais chance de qualificar",
      "⏱️ Após 30 min, a chance cai 100x",
      "🚫 48% dos vendedores nunca fazem follow-up"
    ],
    images: ["/mit-insidesales-lead-response.png"],
    footer: "Fonte: MIT / InsideSales.com — Lead Response Management Study"
  },
  {
    id: 4001,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "QUANTO CUSTA CADA LEAD PERDIDO?",
    icon: "🧮",
    content: [
      "Se você gasta R$25 por lead...",
      "E perde 50 leads/mês por falta de follow-up...",
      "São R$1.250/mês jogados no lixo",
      "🚨 R$15.000/ano — sem contar o LTV desses clientes"
    ],
    footer: "Faça a conta com os SEUS números."
  },
  {
    id: 41,
    section: "SEGREDO 3",
    layout: SlideLayout.COMPARISON,
    title: "COBRANÇA vs CONVERSA INTELIGENTE",
    comparisonData: {
      leftTitle: "FOLLOW-UP GENÉRICO ❌",
      leftContent: ["'E aí, decidiu?'", "'Viu minha proposta?'", "'Vai querer?'", "Ignora o contexto do cliente", "Mesmo texto pra todo mundo"],
      rightTitle: "FOLLOW-UP INTELIGENTE ✅",
      rightContent: ["Entende o momento do cliente", "Captura objeções durante a conversa", "Trata cada objeção no follow-up seguinte", "'Você mencionou que o prazo era curto. Conseguimos flexibilizar...'", "'Entendi que precisa consultar o sócio. Preparei um resumo pra facilitar...'"]
    }
  },
  {
    id: 42,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "A SOLUÇÃO ASSIS",
    content: [
      "A IA aprende seu jeito de escrever.",
      "Follow-up sai no SEU tom.",
      "Cliente acha que foi VOCÊ que escreveu."
    ]
  },
  {
    id: 43,
    section: "SEGREDO 3",
    layout: SlideLayout.BULLETS,
    title: "O EFEITO COMPOSTO",
    icon: "💰",
    content: [
      "Leads mornos entram em funil automático.",
      "Recebem conteúdo relevante.",
      "30-60 dias depois: 15-20 voltam QUALIFICADOS.",
      "Vendas que você teria perdido."
    ]
  },
  {
    id: 44,
    section: "SEGREDO 3",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "PERGUNTA",
    highlight: "Se existisse follow-up que o cliente AGRADECE, você usaria?",
    maxWidth: "max-w-[90%]",
    footer: "[ Digite SIM no chat ]"
  },

  // PARTE 5: BRIDGE
  {
    id: 45,
    section: "RESUMO",
    layout: SlideLayout.BULLETS,
    title: "RECAPITULANDO",
    content: [
      "🔑 Segredo 1: Mais leads pode significar MENOS vendas — use tracking.",
      "🔑 Segredo 2: Separe comprador de curioso AUTOMATICAMENTE.",
      "🔑 Segredo 3: Follow-up sistemático fecha 80% das vendas."
    ]
  },
  {
    id: 46,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "'MEU NEGÓCIO É DIFERENTE'",
    content: [
      "Eu ouço isso toda semana.",
      "E toda semana os dados provam o contrário."
    ]
  },
  {
    id: 47,
    section: "",
    layout: SlideLayout.GRID,
    title: "FUNCIONA PARA...",
    content: [
      "🏠 Corretores de Imóveis",
      "📋 Vendedores de Consórcio",
      "🚗 Vendedores de Carros e Motos",
      "🦷 Dentistas e Clínicas",
      "📸 Fotógrafos",
      "🏋️ Nutricionistas e Personais",
      "⚖️ Advogados",
      "🧠 Psicólogos",
      "🛡️ Corretores de Seguros",
      "🎨 Arquitetos e Designers",
      "💼 Consultores e Coaches",
      "🎓 Escolas e Cursos"
    ],
    footer: "E qualquer outro negócio que vende pelo WhatsApp."
  },
  {
    id: 4701,
    section: "CASE REAL",
    layout: SlideLayout.VIDEO,
    title: "@psiculturalucrativa",
    subtitle: "A IA da Assis fechou uma venda de R$14.000!",
    videos: [
      "/psicultura-case.mp4"
    ]
  },
  {
    id: 4702,
    section: "CASE REAL",
    layout: SlideLayout.VIDEO,
    title: "@michaelcypriano.corretor",
    subtitle: "2.190 clientes atendidos com IA. Mais de R$12 milhões em VGV gerado!",
    videos: [
      "/michael-cypriano-case.mp4"
    ]
  },
  {
    id: 4703,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "",
    highlight: "Comum a todos:\nWhatsApp + Leads + Falta de Tempo.",
    highlightTerms: ["WhatsApp + Leads + Falta de Tempo."]
  },
  {
    id: 48,
    section: "LÓGICA",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "PRODUTO É ÚNICO. O PROCESSO NÃO.",
    highlight: "Responder rápido, qualificar e fazer follow-up é universal."
  },
  {
    id: 49,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "",
    highlight: "Você pode tentar sozinho. Ou pegar o caminho que eu criei gastando milhões.",
    highlightTerms: ["pegar o caminho"],
    subtitle: "Posso mostrar?"
  },

  // PARTE 6: THE CLOSE
  {
    id: 50,
    section: "O FUNCIONÁRIO 24H",
    layout: SlideLayout.IMPACT_COVER,
    title: "APRESENTANDO:\nSEU CHATBOT IA",
    subtitle: "O funcionário que trabalha 24h no seu WhatsApp."
  },
  {
    id: 51,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "O QUE VOCÊ RECEBE",
    content: [
      "✅ Chatbot IA configurado no WhatsApp",
      "✅ Plataforma completa Assis (CRM)",
      "✅ Setup em 3 minutos",
      "✅ Suporte dedicado (30 dias)"
    ]
  },
  {
    id: 52,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "Valor anual",
    icon: "💎",
    highlight: "R$4.188,00",
    subtitle: "(Muito menos que um salário de SDR humano)"
  },
  {
    id: 53,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 1: OPERAÇÃO CAIXA RÁPIDO",
    subtitle: "Agente IA cria 3 campanhas pra rodar em 72h",
    highlight: "Valor: R$1.997"
  },
  {
    id: 54,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 2: DIAGNÓSTICO",
    subtitle: "Análise dos seus pontos de fuga de vendas",
    highlight: "Valor: R$997"
  },
  {
    id: 55,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 3: ASSIS ACADEMY",
    subtitle: "Treinamentos + Scripts de Vendas",
    highlight: "Valor: R$2.997"
  },
  {
    id: 56,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 4: MENTORIAS",
    subtitle: "2 Calls de Implementação ao Vivo",
    highlight: "Valor: R$2.500"
  },
  {
    id: 57,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 5: COMUNIDADE",
    subtitle: "Grupo Vitalício de Networking",
    highlight: "Valor: R$1.200"
  },
  {
    id: 58,
    section: "BONUS",
    layout: SlideLayout.OFFER,
    title: "🎁 BÔNUS 6: CAFÉ COM ASSIS",
    subtitle: "Encontro Presencial (Limitado a 30 vagas)",
    highlight: "Valor: R$1.000"
  },
  {
    id: 59,
    section: "",
    layout: SlideLayout.BONUS_STACK,
    title: "TUDO QUE VOCÊ RECEBE:",
    content: [
      "✅ Chatbot IA + Plataforma|Seu funcionário 24h no WhatsApp|R$4.188",
      "🎁 Bônus 1: Operação Caixa Rápido|Agente IA cria 3 campanhas pra rodar em 72h|R$1.997",
      "🎁 Bônus 2: Diagnóstico|Análise dos seus pontos de fuga de vendas|R$997",
      "🎁 Bônus 3: Assis Academy|Treinamentos + Scripts de Vendas|R$2.997",
      "🎁 Bônus 4: Mentorias|2 Calls de Implementação ao Vivo|R$2.500",
      "🎁 Bônus 5: Comunidade|Grupo Vitalício de Networking|R$1.200",
      "🎁 Bônus 6: Café com Assis|Encontro Presencial (Limitado a 30 vagas)|R$1.000"
    ],
    highlight: "Total: R$14.879"
  },
  {
    id: 6001,
    section: "PRICE",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "QUANTO VALE TUDO ISSO?",
    icon: "💰",
    highlight: "R$14.879",
    subtitle: "Esse é o valor real de tudo que você recebe."
  },
  {
    id: 6002,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "MAS VOCÊ NÃO VAI PAGAR ISSO.",
    content: [
      "❌ Não vai pagar R$14.879",
      "❌ Nem R$10.000",
      "❌ Nem R$5.000",
      "❌ Nem R$1.000 por mês"
    ]
  },
  {
    id: 60,
    section: "PRICE",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "INVESTIMENTO HOJE",
    subtitle: "Pré-lançamento por tempo limitado",
    icon: "💳",
    highlight: "12x R$349",
    footer: "Menos de R$12 por dia"
  },
  {
    id: 6003,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "MAS COMO VOCÊ ESTÁ AQUI AGORA...",
    icon: "🔥",
    highlight: "R$100/mês",
    maxWidth: "max-w-[90%]",
    subtitle: "Pelos 3 primeiros meses. Sem fidelidade.\nCancele quando quiser."
  },
  {
    id: 61,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "CUSTO DA INÉRCIA",
    content: [
      "Perder 4 vendas/mês = 24 em 6 meses",
      "Ticket R$2k = R$48.000 deixados na mesa",
      "O custo de NÃO fazer nada é maior."
    ]
  },
  {
    id: 62,
    section: "",
    layout: SlideLayout.ICON_IMPACT,
    icon: "💰",
    title: "RETORNO DE 23x",
    highlight: "Invista R$1, volte R$23.",
    subtitle: "Uma venda paga o semestre todo."
  },
  {
    id: 63,
    section: "COMPARISON",
    layout: SlideLayout.COMPARISON,
    title: "A ESCOLHA É SUA",
    comparisonData: {
      leftTitle: "SDR HUMANO 👤",
      leftContent: ["R$3k-5k/mês", "Turnover alto", "Você vira gestor", "Treinamento constante"],
      rightTitle: "ASSIS (IA) 🤖",
      rightContent: ["12x R$349", "Nunca pede demissão", "Setup 3 min", "Você continua vendendo"]
    }
  },
  {
    id: 64,
    section: "GUARANTEE",
    layout: SlideLayout.QUOTE,
    title: "GARANTIA DE 3 MESES",
    icon: "🛡️",
    highlight: "Teste por 90 dias. Se não gostar, devolvo 100%.",
    subtitle: "Sem risco para você."
  },
  {
    id: 65,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "PRA QUEM JÁ SE QUEIMOU",
    content: [
      "Eu sei que você tem o pé atrás com chatbot.",
      "Por isso dou 3 MESES, não 7 dias.",
      "Tempo real pra ver resultado real."
    ]
  },
  {
    id: 66,
    section: "",
    layout: SlideLayout.BULLETS,
    title: "COMO ENTRAR",
    content: [
      "1. Acesse o link abaixo",
      "2. Preencha seus dados",
      "3. Receba acesso prioritário"
    ],
    ctaLink: "www.assis.co"
  },
  {
    id: 67,
    section: "",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "",
    icon: "⚡",
    highlight: "Bônus (Café com Assis) só para quem entrar AGORA durante a aula.",
    ctaLink: "www.assis.co"
  },
  {
    id: 68,
    section: "",
    layout: SlideLayout.BONUS_STACK_OFFER,
    title: "TUDO ISSO:",
    content: [
      "✅ Chatbot IA + Plataforma|R$4.188",
      "🎁 Operação Caixa Rápido|R$1.997",
      "🎁 Diagnóstico|R$997",
      "🎁 Assis Academy|R$2.997",
      "🎁 Mentorias|R$2.500",
      "🎁 Comunidade|R$1.200",
      "🎁 Café com Assis|R$1.000"
    ],
    highlight: "R$14.879",
    subtitle: "R$100/mês",
    footer: "Pelos 3 primeiros meses. Sem fidelidade.",
    ctaLink: "www.assis.co"
  },
  {
    id: 69,
    section: "Q&A",
    layout: SlideLayout.CENTER_STATEMENT,
    title: "PERGUNTAS?",
    highlight: "Vou tirar dúvidas agora.",
    ctaLink: "www.assis.co"
  },
  {
    id: 70,
    section: "THE END",
    layout: SlideLayout.IMPACT_COVER,
    title: "OBRIGADO!",
    subtitle: "Nos vemos do outro lado.",
    highlight: "Rapha — Assis"
  }
];