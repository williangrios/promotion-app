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

  // Paleta alinhada aos frascos: azul profundo + dourado premium
  PRIMARY_COLOR_LIGHT: '#1E2A39',
  PRIMARY_COLOR_MEDIUM: '#16202B',
  PRIMARY_COLOR_DARK: '#0F1520',
  PRIMARY_COLOR_ULTRA_DARK: '#0A0F18',

  SECONDARY_COLOR_LIGHT: '#E6C766',
  SECONDARY_COLOR_MEDIUM: '#C9A938',
  SECONDARY_COLOR_DARK: '#8A7420',

  PRODUCT_NAME: _productName,
  PRODUCT_DESCRIPTION:
    'TestoPremium — suplemento masculino premium para apoio à energia, disposição e vitalidade. Rotina simples: 2 cápsulas ao dia.',

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
    { name: 'Home', href: '/' },
    { name: 'Benefícios', href: '/#benefits' },
    { name: 'Fórumla', href: '/#formula' },
  ],

  // Cabeçalho coerente com o azul/dourado
  HEADER_BG_COLOR: '#0F1520',
  HEADER_TEXT_COLOR: '#FFFFFF',
  HEADER_HOVER_COLOR: '#E6C766',
  HEADER_BORDER_COLOR: 'rgba(255,255,255,0.08)',
  LOGO_IMAGE: '/logo.png',

  HERO: {
    title: 'Potência premium para o seu dia a dia',
    subtitle:
      'Mais energia, foco e vitalidade com uma combinação de ingredientes selecionados. TestoPremium é prático: 2 cápsulas ao dia.',
    buttonLabel: 'Quero o meu TestoPremium',
    buttonLink: '/#pricing',
    images: [
      {
        src: '/imghero1.png',
        alt: 'TestoPremium',
        width: 500,
        height: 500,
      },
      {
        src: '/imghero2.png',
        alt: 'Frasco do TestoPremium',
        width: 400,
        height: 400,
      },
    ],
  },

  HIGHLIGHTS: [
    {
      icon: TruckIcon,
      title: 'Envio rápido e discreto',
      subtitle: 'Para todo o Brasil',
    },
    {
      icon: CreditCardIcon,
      title: 'Parcelamento seguro',
      subtitle: 'em até 12x no cartão',
    },
    {
      icon: BiPackage,
      title: 'Frete grátis',
      subtitle: 'em pedidos selecionados',
    },
    {
      icon: LockClosedIcon,
      title: 'Checkout blindado',
      subtitle: 'Ambiente 100% protegido',
    },
  ],

  MOTIVATIONAL_BANNER: {
    title: 'Alta performance nasce de uma boa rotina.',
    paragraphs: [
      'Energia e disposição para o trabalho, treinos e vida a dois — em uma fórmula premium com maca peruana, tribulus, ginseng, L-arginina, zinco e vitamina B6.',
      'Posologia simples e constante: 2 cápsulas ao dia para efeito cumulativo. Fácil de inserir na rotina e manter resultados.',
      'Qualidade e transparência em cada frasco. Design e experiência pensados para o homem que exige mais de si mesmo.',
    ],
    cta: {
      label: 'COMPRAR AGORA',
      link: '/#pricing',
    },
    image: {
      src: '/testochart.png',
      alt: `testosterona chart`,
      width: 450,
      height: 450,
    },
  },

  VIDEO_SECTION: {
    title: `Veja o ${_productName} em ação`,
    subtitle:
      'Como a rotina de 2 cápsulas ao dia pode apoiar sua energia, foco e vitalidade.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  FEATURES: [
    {
      title: 'Energia e disposição',
      desc: 'Sinta-se preparado para o dia com uma combinação de ingredientes selecionados.',
      icon: BoltIcon,
    },
    {
      title: 'Vitalidade masculina',
      desc: 'Apoio nutricional pensado para a rotina do homem moderno.',
      icon: FireIcon,
    },
    {
      title: 'Confiança no desempenho',
      desc: 'L-arginina e extratos tradicionais para suporte ao fluxo e à resistência.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Ativos de origem natural',
      desc: 'Maca peruana, tribulus terrestris, panax ginseng, muira puama, gengibre, zinco e vitamina B6.',
      icon: MdNature,
    },
    {
      title: 'Uso prático',
      desc: '2 cápsulas ao dia — rotina simples, efeito cumulativo.',
      icon: SparklesIcon,
    },
    {
      title: 'Aprovado pelos clientes',
      desc: 'Alta aceitação e recompra entre usuários.',
      icon: UserGroupIcon,
    },
  ],

  STATS: [
    { value: '10.000+', label: 'Clientes atendidos', icon: UserGroupIcon },
    { value: '25.000+', label: 'Frascos vendidos', icon: ChartBarIcon },
    { value: '97%', label: 'Satisfação geral', icon: AcademicCapIcon },
  ],

  PRODUCTS: [
    {
      id: 'frasco1',
      title: '1 Frasco',
      img: '/1frasco.png',
      description: '30 dias de uso — 60 cápsulas (2 cápsulas/dia).',
      features: ['60 cápsulas', 'Fórmula premium', 'Envio discreto'],
      price: 89.9,
      priceLabel: 'R$89,90',
      highlight: false,
      cta: 'Quero começar',
      link: 'https://app.monetizze.com.br/checkout/TESTOPREMIUM1',
    },
    {
      id: 'frasco3',
      title: '3 Frascos',
      img: '/3frascos.png',
      description: '90 dias de uso — 180 cápsulas (2 cápsulas/dia).',
      features: ['180 cápsulas', 'Desconto progressivo', 'Frete grátis'],
      price: 239.7,
      priceLabel: 'R$239,70',
      highlight: false,
      cta: 'Quero economizar',
      link: 'https://app.monetizze.com.br/checkout/TESTOPREMIUM3',
    },
    {
      id: 'frasco5',
      title: '5 Frascos',
      img: '/5frascos.png',
      description: '150 dias de uso — 300 cápsulas (2 cápsulas/dia).',
      features: ['300 cápsulas', 'Melhor custo-benefício', 'Frete grátis'],
      price: 349.5,
      priceLabel: 'R$349,50',
      highlight: true,
      cta: 'Potência e economia total',
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
      feedback:
        'Senti melhora consistente de disposição ao longo das semanas. Recomendo.',
    },
    {
      name: 'Renato Lopes',
      feedback:
        'Prático e confiável. A rotina de 2 cápsulas funcionou muito bem para mim.',
    },
  ],

  FAQ: [
    {
      question: 'Quais os principais benefícios?',
      answer:
        'Apoio à energia, disposição e vitalidade masculina. A fórmula combina ingredientes tradicionais como maca, tribulus e ginseng com zinco e vitamina B6.',
    },
    {
      question: 'Como devo tomar?',
      answer:
        'Ingestão recomendada: 2 cápsulas ao dia, preferencialmente 1 pela manhã e 1 à noite, com líquido. Não exceder a recomendação diária indicada na embalagem.',
    },
    {
      question: 'O TestoPremium é seguro?',
      answer:
        'É um suplemento alimentar com ingredientes de uso tradicional. Pessoas com condições específicas, gestantes e lactantes devem consultar profissional de saúde antes do uso.',
    },
    {
      question: 'Em quanto tempo percebo resultados?',
      answer:
        'Os efeitos são cumulativos. Muitos usuários relatam melhora de energia e disposição nas primeiras semanas, com evolução ao longo do uso contínuo.',
    },
    {
      question: 'Posso usar com outros suplementos?',
      answer:
        'Em geral, pode ser associado a multivitamínicos. Para uso com pré-treinos, estimulantes ou medicamentos, consulte um profissional de saúde.',
    },
    {
      question: 'O envio é discreto?',
      answer:
        'Sim. Utilizamos embalagem neutra e protegida, sem identificação do conteúdo no lado externo.',
    },
  ],

  GUARANTEE_TEXT:
    'Experimente TestoPremium por 7 dias. Se não ficar satisfeito com sua experiência, reembolsamos 100% do valor conforme a nossa política de reembolso.',

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
          'Podemos coletar dados técnicos de uso, como tipo de dispositivo, sistema operacional, páginas visitadas e registros de erros, para melhorar a experiência e a segurança.',
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
          'Oferecemos cápsulas de suplementos. As descrições e imagens são ilustrativas e podem variar. Reservamo-nos o direito de alterar preços e composição dos produtos a qualquer momento.',
      },
      {
        title: '3. Preços e Pagamento',
        content:
          'Valores exibidos em reais (BRL). O pagamento é processado por gateway de terceiros e está sujeito às políticas do meio escolhido (cartão, boleto, pix).',
      },
      {
        title: '4. Entrega e Devolução',
        content:
          'O prazo de entrega varia conforme o endereço. Produtos devem ser conferidos no recebimento. Para troca ou devolução, consulte nossa política de reembolso de 7 dias.',
      },
      {
        title: '5. Garantia de Satisfação',
        content: `Oferecemos garantia de 7 dias. Para solicitar reembolso, entre em contato pelo e-mail: ${_emailSupport}.`,
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
