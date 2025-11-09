import {
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BoltIcon,
  FireIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import { BiPackage } from 'react-icons/bi'
import { MdNature } from 'react-icons/md'

const _emailSupport = 'suporte@testopremium.com.br'
const _productName = 'TestoPremium'

export const envVariables = {
  SITE_URL: 'www.testopremium.com.br',

  PRIMARY_COLOR_LIGHT: '#1A1A1A',
  PRIMARY_COLOR_MEDIUM: '#121212',
  PRIMARY_COLOR_DARK: '#0B0B0B',
  PRIMARY_COLOR_ULTRA_DARK: '#060606',

  SECONDARY_COLOR_LIGHT: '#E6C766',
  SECONDARY_COLOR_MEDIUM: '#C9A938',
  SECONDARY_COLOR_DARK: '#8A7420',

  PRODUCT_NAME: _productName,
  PRODUCT_DESCRIPTION:
    'TestoPremium — Vitalidade, Confiança e Energia em uma fórmula premium para o dia a dia do homem.',

  PHONE_SUPPORT: '',
  SOCIAL_WHATSAPP: '37988083717',

  EMAIL_HOST: 'smtp.gmail.com',
  EMAIL_PORT: '587',
  EMAIL_USER: _emailSupport,
  EMAIL_PASS: 'senha_segura_aqui',
  EMAIL_SUPPORT: _emailSupport,

  SOCIAL_YOUTUBE: '',
  SOCIAL_INSTAGRAM: '',
  SOCIAL_FACEBOOK: '',

  NAV_ITEMS: [
    { name: 'Benefícios', href: '/#benefits' },
    { name: 'Planos', href: '/#pricing' },
  ],

  HEADER_BG_COLOR: '#0B0B0B',
  HEADER_TEXT_COLOR: '#FFFFFF',
  HEADER_HOVER_COLOR: '#E6C766',
  HEADER_BORDER_COLOR: 'rgba(255,255,255,0.08)',
  LOGO_IMAGE: '/logo.png',

  HERO: {
    title: 'Potência Premium para a Sua Rotina',
    subtitle:
      'TestoPremium é o suplemento para homens que buscam mais energia, foco e vitalidade. Fórmula com ingredientes selecionados e dose prática: 2 cápsulas ao dia.',
    buttonLabel: 'Quero o Meu TestoPremium',
    buttonLink: '/#pricing',
    images: [
      {
        src: '/selo-premium.png',
        alt: 'Selo de qualidade TestoPremium',
        width: 400,
        height: 400,
      },
      {
        src: '/frasco-testopremium.png',
        alt: 'Frasco do TestoPremium',
        width: 400,
        height: 400,
      },
    ],
  },

  HIGHLIGHTS: [
    {
      icon: TruckIcon,
      title: 'Envio Rápido e Discreto',
      subtitle: 'Para todo o Brasil',
    },
    {
      icon: CreditCardIcon,
      title: 'Parcelamento Seguro',
      subtitle: 'em até 12x no cartão',
    },
    {
      icon: BiPackage,
      title: 'Frete Grátis',
      subtitle: 'em pedidos selecionados',
    },
    {
      icon: LockClosedIcon,
      title: 'Checkout Blindado',
      subtitle: 'Ambiente 100% protegido',
    },
  ],

  MOTIVATIONAL_BANNER: {
    title: 'Alta performance se constrói diariamente.',
    paragraphs: [
      'Sinta mais disposição, foco e vitalidade com a combinação premium de maca, tribulus, ginseng, L-arginina e zinco.',
      'Fácil de usar: 2 cápsulas ao dia. Perfeito para quem quer manter energia para o trabalho, treinos e vida a dois.',
      'Qualidade, transparência e um design pensado para o homem que exige mais de si mesmo.',
    ],
    cta: {
      label: 'COMPRAR AGORA',
      link: '/#pricing',
    },
    image: {
      src: '/kits-testopremium.png',
      alt: `Kits do ${_productName}`,
      width: 450,
      height: 450,
    },
  },

  VIDEO_SECTION: {
    title: `Veja o ${_productName} em ação`,
    subtitle:
      'Entenda como a rotina de 2 cápsulas ao dia pode apoiar sua energia e vitalidade.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  FEATURES: [
    {
      title: 'Energia e Disposição',
      desc: 'Sinta-se mais preparado para o dia com uma combinação de ingredientes selecionados.',
      icon: BoltIcon,
    },
    {
      title: 'Vitalidade Masculina',
      desc: 'Apoio nutricional pensado para a rotina do homem moderno.',
      icon: FireIcon,
    },
    {
      title: 'Confiança no Desempenho',
      desc: 'L-arginina e extratos tradicionais para suporte ao fluxo e à resistência.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Fórmula com Ativos Naturais',
      desc: 'Maca peruana, tribulus terrestris, panax ginseng, muira puama, gengibre, zinco e vitamina B6.',
      icon: MdNature,
    },
    {
      title: 'Uso Prático',
      desc: '2 cápsulas ao dia — rotina simples, efeito cumulativo.',
      icon: SparklesIcon,
    },
    {
      title: 'Aprovado pelos Clientes',
      desc: 'Alta aceitação e recompra entre usuários.',
      icon: UserGroupIcon,
    },
  ],

  STATS: [
    { value: '10.000+', label: 'Clientes Atendidos', icon: UserGroupIcon },
    { value: '25.000+', label: 'Frascos Vendidos', icon: ChartBarIcon },
    { value: '97%', label: 'Satisfação Geral', icon: AcademicCapIcon },
  ],

  PRODUCTS: [
    {
      id: 'frasco1',
      title: '1 Frasco',
      description: '30 dias de uso — 60 cápsulas (2 cápsulas/dia).',
      features: ['60 cápsulas', 'Fórmula premium', 'Envio discreto'],
      price: 89.9,
      priceLabel: 'R$89,90',
      highlight: false,
      cta: 'Quero Testar',
      link: 'https://app.monetizze.com.br/checkout/TESTOPREMIUM1',
    },
    {
      id: 'frasco3',
      title: '3 Frascos',
      description: '90 dias de uso — 180 cápsulas (2 cápsulas/dia).',
      features: ['180 cápsulas', 'Desconto progressivo', 'Frete grátis'],
      price: 239.7,
      priceLabel: 'R$239,70',
      highlight: false,
      cta: 'Quero Economizar',
      link: 'https://app.monetizze.com.br/checkout/TESTOPREMIUM3',
    },
    {
      id: 'frasco5',
      title: '5 Frascos',
      description: '150 dias de uso — 300 cápsulas (2 cápsulas/dia).',
      features: ['300 cápsulas', 'Melhor custo-benefício', 'Frete grátis'],
      price: 349.5,
      priceLabel: 'R$349,50',
      highlight: true,
      cta: 'Potência Total',
      link: 'https://app.monetizze.com.br/checkout/TESTOPREMIUM5',
    },
  ],

  TESTIMONIALS: [
    {
      name: 'Carlos Henrique',
      feedback:
        'Mais energia no trabalho e nos treinos. A rotina ficou muito mais produtiva.',
    },
    {
      name: 'João Batista',
      feedback: 'Voltei a me sentir com disposição todos os dias. Recomendo.',
    },
    {
      name: 'Renato Lopes',
      feedback:
        'Produto confiável e prático. A rotina de 2 cápsulas funcionou bem pra mim.',
    },
  ],

  FAQ: [
    {
      question: 'Quais os principais benefícios?',
      answer:
        'Apoio à energia, disposição e vitalidade masculina, com ingredientes naturais e dose prática.',
    },
    {
      question: 'Como devo tomar?',
      answer:
        'Ingestão recomendada: 2 cápsulas ao dia, preferencialmente 1 pela manhã e 1 à noite, com líquido.',
    },
    {
      question: 'O TestoPremium é seguro?',
      answer:
        'O produto é um suplemento alimentar com ingredientes tradicionais e deve ser consumido conforme a recomendação diária. Em caso de dúvidas, consulte profissional de saúde.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Garantia de 7 dias para compras online conforme nossa política de reembolso.',
    },
    {
      question: 'O envio é discreto?',
      answer:
        'Sim. Utilizamos embalagem neutra e protegida para todo o Brasil.',
    },
  ],

  GUARANTEE_TEXT:
    'Experimente TestoPremium por 7 dias. Se não ficar satisfeito com a sua experiência, reembolsamos 100% do valor.',

  PRIVACY_POLICY: {
    lastUpdated: '18 de Junho de 2025',
    title: 'Política de Privacidade',
    intro: `A sua privacidade é importante para nós. Esta Política descreve como coletamos, usamos e protegemos as informações dos usuários do site/app ${_productName}, especializado na venda de suplementos alimentares. Ao realizar compras, você concorda com as práticas descritas neste documento.`,
    sections: [
      {
        title: '1. Coleta de informações',
        content:
          'Coletamos dados fornecidos por você ao criar conta ou realizar pedidos: nome, e-mail, CPF/CNPJ, endereço de entrega, telefone e dados de pagamento.',
      },
      {
        title: '2. Dados coletados automaticamente',
        content:
          'Podemos coletar dados técnicos de uso, como tipo de dispositivo, sistema operacional, histórico de navegação e registros de erros, para melhorar a experiência e a segurança.',
      },
      {
        title: '3. Uso das informações',
        list: [
          'Processamento e entrega de pedidos;',
          'Confirmação de pagamento e envio de faturas;',
          'Comunicações sobre status de pedido e suporte;',
          'Melhoria do site/app e prevenção a fraudes.',
        ],
      },
      {
        title: '4. Compartilhamento de dados',
        content:
          'Compartilhamos seus dados apenas com transportadoras, gateways de pagamento e provedores de hospedagem necessários para processar seus pedidos. Não vendemos seus dados a terceiros para marketing.',
      },
      {
        title: '5. Segurança dos dados',
        content:
          'Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados. Nenhuma transmissão online é 100% segura.',
      },
      {
        title: '6. Seus direitos',
        content: `Você pode solicitar acesso, correção ou exclusão de seus dados pelo e-mail: ${_emailSupport}.`,
      },
      {
        title: '7. Alterações nesta política',
        content:
          'Esta política pode ser atualizada a qualquer momento. A data de revisão será atualizada na parte superior desta página.',
      },
      {
        title: '8. Contato',
        content: `Dúvidas sobre privacidade? Entre em contato: ${_emailSupport}`,
      },
    ],
  },

  TERMS_AND_CONDITIONS: {
    lastUpdated: '18 de Junho de 2025',
    title: 'Termos e Condições de Uso',
    intro:
      'Estes termos regem seu uso do site, uma plataforma de venda de suplementos alimentares. Ao realizar compras, você concorda com estes Termos.',
    sections: [
      {
        title: '1. Cadastro e Conta',
        content:
          'Para comprar, é necessário criar uma conta com dados verdadeiros. Você é responsável por manter a confidencialidade de sua senha.',
      },
      {
        title: '2. Produtos e Pedidos',
        content:
          'Oferecemos cápsulas de suplementos. As descrições e imagens são ilustrativas. Podemos alterar preços e composição dos produtos a qualquer momento.',
      },
      {
        title: '3. Preços e Pagamento',
        content:
          'Valores exibidos em reais (BRL). O pagamento é processado por gateway de pagamento de terceiros e está sujeito às políticas do meio escolhido (cartão, boleto, pix).',
      },
      {
        title: '4. Entrega e Devolução',
        content:
          'O prazo de entrega varia conforme endereço. Produtos devem ser conferidos no recebimento. Para troca ou devolução, consulte nossa política de reembolso de 7 dias.',
      },
      {
        title: '5. Garantia de Satisfação',
        content: `Oferecemos garantia de 7 dias. Para reembolso, entre em contato pelo e-mail: ${_emailSupport}.`,
      },
      {
        title: '6. Propriedade Intelectual',
        content:
          'Todo conteúdo do site/app é protegido por direitos autorais e marca registrada.',
      },
      {
        title: '7. Limitação de Responsabilidade',
        content:
          'Não nos responsabilizamos por danos indiretos, lucros cessantes ou perdas decorrentes do uso ou impossibilidade de uso dos produtos.',
      },
      {
        title: '8. Alterações nos Termos',
        content:
          'Reservamo-nos o direito de atualizar estes Termos a qualquer momento. A data de revisão será alterada no topo desta página.',
      },
      {
        title: '9. Contato',
        content: `Dúvidas ou solicitações: ${_emailSupport}`,
      },
    ],
  },

  KEYWORDS: [
    'encapsulados',
    _productName,
    'suplemento masculino',
    'vitalidade masculina',
    'energia e disposição',
    'zinco e vitamina B6',
    'maca peruana',
    'tribulus terrestris',
    'ginseng',
    'L-arginina',
  ],
}
