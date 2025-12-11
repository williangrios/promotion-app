import {
  SparklesIcon,
  TagIcon,
  BellIcon,
  FireIcon,
  ShoppingBagIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

const _emailSupport = 'contato@promora.app'
const _productName = 'Promora'

export const envVariables = {
  SITE_URL: 'promora.vercel.app',

  PRIMARY_COLOR_LIGHT: '#7C3AED',
  PRIMARY_COLOR_MEDIUM: '#6D28D9',
  PRIMARY_COLOR_DARK: '#5B21B6',
  PRIMARY_COLOR_ULTRA_DARK: '#4C1D95',

  SECONDARY_COLOR_LIGHT: '#F59E0B',
  SECONDARY_COLOR_MEDIUM: '#D97706',
  SECONDARY_COLOR_DARK: '#B45309',

  PRODUCT_NAME: _productName,
  PRODUCT_DESCRIPTION:
    'Promora — As melhores promoções e ofertas do Brasil reunidas em um único app.',

  PHONE_SUPPORT: '',
  SOCIAL_WHATSAPP: '',

  EMAIL_HOST: 'smtp.gmail.com',
  EMAIL_PORT: '587',
  EMAIL_USER: _emailSupport,
  EMAIL_PASS: '',
  EMAIL_SUPPORT: _emailSupport,

  SOCIAL_YOUTUBE: '',
  SOCIAL_INSTAGRAM: '',
  SOCIAL_FACEBOOK: '',

  NAV_ITEMS: [
    { name: 'Recursos', href: '/#features' },
    { name: 'Como Funciona', href: '/#how-it-works' },
  ],

  HEADER_BG_COLOR: '#4C1D95',
  HEADER_TEXT_COLOR: '#FFFFFF',
  HEADER_HOVER_COLOR: '#F59E0B',
  HEADER_BORDER_COLOR: 'rgba(255,255,255,0.1)',
  LOGO_IMAGE: '/logo.png',

  HERO: {
    title: 'As Melhores Promoções do Brasil',
    subtitle:
      'Todas as ofertas e descontos imperdíveis reunidos em um único app. Economize tempo e dinheiro com alertas inteligentes de promoções.',
    buttonLabel: 'Baixar na Play Store',
    buttonLink: '#download',
    images: [
      {
        src: '/app-mockup.png',
        alt: 'App Promora',
        width: 400,
        height: 400,
      },
    ],
  },

  HIGHLIGHTS: [
    {
      icon: BellIcon,
      title: 'Alertas Instantâneos',
      subtitle: 'Notificações em tempo real',
    },
    {
      icon: TagIcon,
      title: 'Ofertas Verificadas',
      subtitle: 'Só promoções reais',
    },
    {
      icon: ShoppingBagIcon,
      title: 'Todas as Lojas',
      subtitle: 'Amazon, Magalu e mais',
    },
    {
      icon: TruckIcon,
      title: '100% Gratuito',
      subtitle: 'Sem mensalidades',
    },
  ],

  MOTIVATIONAL_BANNER: {
    title: 'Economize sem esforço. Ganhe tempo e dinheiro.',
    paragraphs: [
      'O Promora reúne as melhores ofertas de eletrônicos, moda, casa, games e muito mais.',
      'Receba notificações personalizadas de acordo com suas categorias favoritas.',
      'Simples, rápido e 100% gratuito. Baixe agora e comece a economizar.',
    ],
    cta: {
      label: 'BAIXAR AGORA',
      link: '#download',
    },
    image: {
      src: '/promo-banner.png',
      alt: 'Promoções do Promora',
      width: 450,
      height: 450,
    },
  },

  VIDEO_SECTION: {
    title: 'Veja o Promora em ação',
    subtitle:
      'Descubra como é fácil encontrar e aproveitar as melhores promoções.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  FEATURES: [
    {
      title: 'Notificações Inteligentes',
      desc: 'Receba alertas apenas das promoções que realmente interessam.',
      icon: BellIcon,
    },
    {
      title: 'Ofertas em Tempo Real',
      desc: 'Promoções atualizadas a cada minuto de milhares de lojas.',
      icon: FireIcon,
    },
    {
      title: 'Categorias Personalizadas',
      desc: 'Escolha suas categorias favoritas: eletrônicos, moda, games e mais.',
      icon: TagIcon,
    },
    {
      title: 'Links Diretos',
      desc: 'Acesse ofertas diretamente nas lojas com um clique.',
      icon: ShoppingBagIcon,
    },
    {
      title: 'Interface Simples',
      desc: 'Design limpo e intuitivo para encontrar promoções rapidamente.',
      icon: SparklesIcon,
    },
    {
      title: 'Sem Cadastro Obrigatório',
      desc: 'Navegue e veja ofertas sem precisar criar conta.',
      icon: TruckIcon,
    },
  ],

  STATS: [
    { value: 'Em breve', label: 'Usuários Ativos', icon: SparklesIcon },
    { value: 'Em breve', label: 'Promoções Diárias', icon: TagIcon },
    { value: '100%', label: 'Gratuito', icon: FireIcon },
  ],

  PRODUCTS: [],

  TESTIMONIALS: [
    {
      name: 'Em breve',
      feedback: 'Aguarde o lançamento para ver depoimentos reais.',
    },
  ],

  FAQ: [
    {
      question: 'O Promora é gratuito?',
      answer:
        'Sim! O app é 100% gratuito, sem mensalidades ou taxas escondidas.',
    },
    {
      question: 'De onde vêm as promoções?',
      answer:
        'Agregamos ofertas de grandes lojas brasileiras e canais confiáveis de promoções.',
    },
    {
      question: 'Como funcionam os alertas?',
      answer:
        'Você escolhe as categorias de interesse e recebe notificações quando novas promoções aparecem.',
    },
    {
      question: 'Preciso criar conta?',
      answer:
        'Não é obrigatório para visualizar promoções, mas criar conta libera recursos exclusivos e favoritos.',
    },
    {
      question: 'Quando estará disponível?',
      answer: 'O app será lançado em breve na Google Play Store.',
    },
  ],

  GUARANTEE_TEXT: '',

  PRIVACY_POLICY: {
    lastUpdated: '11 de Dezembro de 2024',
    title: 'Política de Privacidade',
    intro: `A sua privacidade é importante para nós. Esta Política descreve como coletamos, usamos e protegemos as informações dos usuários do ${_productName}, um agregador de promoções e ofertas.`,
    sections: [
      {
        title: '1. Coleta de informações',
        content:
          'Coletamos dados fornecidos por você ao criar conta: nome, e-mail e preferências de categorias.',
      },
      {
        title: '2. Dados coletados automaticamente',
        content:
          'Podemos coletar dados técnicos de uso, como tipo de dispositivo, sistema operacional e preferências de navegação.',
      },
      {
        title: '3. Uso das informações',
        list: [
          'Personalização de notificações;',
          'Melhorias na experiência do usuário;',
          'Comunicação sobre novos recursos.',
        ],
      },
      {
        title: '4. Compartilhamento de dados',
        content:
          'Não vendemos seus dados a terceiros. Compartilhamos apenas com parceiros necessários para funcionamento do app.',
      },
      {
        title: '5. Seus direitos',
        content: `Você pode solicitar acesso, correção ou exclusão de seus dados pelo e-mail: ${_emailSupport}.`,
      },
      {
        title: '6. Contato',
        content: `Dúvidas sobre privacidade? Entre em contato: ${_emailSupport}`,
      },
    ],
  },

  TERMS_AND_CONDITIONS: {
    lastUpdated: '11 de Dezembro de 2024',
    title: 'Termos e Condições de Uso',
    intro:
      'Estes termos regem seu uso do Promora, um agregador de promoções. Ao usar o app, você concorda com estes Termos.',
    sections: [
      {
        title: '1. Uso do Serviço',
        content:
          'O Promora é gratuito e fornece informações sobre promoções de terceiros. Não somos responsáveis pelas ofertas das lojas.',
      },
      {
        title: '2. Links Externos',
        content:
          'O app contém links para lojas externas. Não nos responsabilizamos pelo conteúdo ou políticas desses sites.',
      },
      {
        title: '3. Propriedade Intelectual',
        content:
          'Todo conteúdo do app é protegido por direitos autorais e marca registrada.',
      },
      {
        title: '4. Alterações nos Termos',
        content:
          'Reservamo-nos o direito de atualizar estes Termos a qualquer momento.',
      },
      {
        title: '5. Contato',
        content: `Dúvidas: ${_emailSupport}`,
      },
    ],
  },

  KEYWORDS: [
    'promora',
    'promoções',
    'ofertas',
    'descontos',
    'cupons',
    'black friday',
    'economia',
    'alertas de promoção',
    'app de ofertas',
    'melhores preços',
  ],
}