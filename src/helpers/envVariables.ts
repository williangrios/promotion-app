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

const _emailSupport = 'suporte@alphamanpower.com'
const _productName = 'AlphaMan'

export const envVariables = {
  SITE_URL: 'www.alphamanpower.com',

  PRIMARY_COLOR_LIGHT: '#002b36',        // azul profundo claro
  PRIMARY_COLOR_MEDIUM: '#001f29',       // azul mais escuro
  PRIMARY_COLOR_DARK: '#00141d',         // quase preto com tom azulado
  PRIMARY_COLOR_ULTRA_DARK: '#000a10',   // preto absoluto azulado

    SECONDARY_COLOR_LIGHT: '#8b4c2a',      // cobre queimado claro
    SECONDARY_COLOR_MEDIUM: '#6e3920',     // cobre médio envelhecido
    SECONDARY_COLOR_DARK: '#4a2415', 

  PRODUCT_NAME: _productName,
  PRODUCT_DESCRIPTION: 'AlphaMan - Potência, Confiança e Energia para Homens que Dominam.',

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

  HEADER_BG_COLOR: '#0f172a',
  HEADER_TEXT_COLOR: '#ffffff',
  HEADER_HOVER_COLOR: '#fbbf24',
  HEADER_BORDER_COLOR: 'rgba(255,255,255,0.1)',
  LOGO_IMAGE: '/logo.png',

  HERO: {
    title: 'Desperte o Homem Alpha que Existe em Você',
    subtitle: 'AlphaMan é o suplemento definitivo para homens que querem dominar sua energia, sua libido e sua confiança. Resultados visíveis em até 7 dias ou seu dinheiro de volta.',
    buttonLabel: 'Quero Ser Alpha Agora',
    buttonLink: '/#pricing',
    images: [
      {
        src: '/garantia-alpha.png',
        alt: 'Selo de garantia AlphaMan',
        width: 400,
        height: 400,
      },
      {
        src: '/produto-alpha.png',
        alt: 'Frasco do AlphaMan',
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
      subtitle: 'em qualquer pedido!',
    },
    {
      icon: LockClosedIcon,
      title: 'Checkout Blindado',
      subtitle: '100% Protegido',
    },
  ],

  MOTIVATIONAL_BANNER: {
    title: 'Performance não se pede, se conquista. Torne-se Alpha!',
    paragraphs: [
      'Está cansado da falta de energia, desejo ou foco? AlphaMan chegou para mudar isso. Com ativos naturais e poderosos, você recupera sua vitalidade, libido e confiança em poucos dias.',
      'Sinta o verdadeiro controle da sua potência masculina: energia para o dia, desempenho para a noite. Resultados reais, seguros e comprovados por milhares de homens.',
      'Este não é apenas mais um suplemento. É um estilo de vida. Seja o Alfa. Seja o protagonista da sua vida.',
    ],
    cta: {
      label: 'COMPRE AGORA',
      link: '/#pricing',
    },
    image: {
      src: '/1frasco.png',
      alt: `Banner com produto ${_productName}`,
      width: 450,
      height: 450,
    },
  },

  VIDEO_SECTION: {
    title: `Veja como ${_productName} Está Transformando Homens`,
    subtitle: 'Assista ao vídeo e entenda como recuperar sua energia, seu desejo e sua confiança.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  FEATURES: [
    {
      title: 'Explosão de Energia e Força Masculina',
      desc: 'Sinta-se mais forte, disposto e com garra para vencer todos os desafios do dia a dia.',
      icon: BoltIcon,
    },
    {
      title: 'Desejo em Alta Potência',
      desc: 'Recupere seu apetite sexual com ingredientes afrodisíacos cientificamente comprovados.',
      icon: FireIcon,
    },
    {
      title: 'Potência Sexual Aumentada',
      desc: 'Maior fluxo sanguíneo para ereções mais rígidas, duradouras e confiantes.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Fórmula 100% Natural',
      desc: 'Com maca peruana, tribulus terrestris, ginseng e L-arginina. Sem efeitos colaterais.',
      icon: MdNature,
    },
    {
      title: 'Resultados Visíveis em 7 Dias',
      desc: 'Alta absorção, efeito progressivo e seguro desde a primeira semana.',
      icon: SparklesIcon,
    },
    {
      title: 'Homens Reais, Resultados Reais',
      desc: 'Mais de 10.000 homens aprovaram. Junte-se a eles.',
      icon: UserGroupIcon,
    },
  ],

  STATS: [
    { value: '10.000+', label: 'Clientes Transformados', icon: UserGroupIcon },
    { value: '25.000+', label: 'Frascos Vendidos', icon: ChartBarIcon },
    { value: '97%', label: 'Satisfacão Garantida', icon: AcademicCapIcon },
  ],

  PRODUCTS: [
    {
      id: 'frasco1',
      title: '1 Frasco',
      description: 'Ideal para quem quer experimentar o poder do AlphaMan.',
      features: ['30 cápsulas', 'Alta concentração', 'Entrega discreta'],
      price: 89.9,
      priceLabel: 'R$89,90',
      highlight: false,
      cta: 'Quero Testar',
      link: 'https://app.monetizze.com.br/checkout/ALPHA1FRASCO',
    },
    {
      id: 'frasco3',
      title: '3 Frascos',
      description: 'Plano ideal para 90 dias de uso e resultados constantes.',
      features: ['90 cápsulas', 'Desconto especial', 'Frete grátis'],
      price: 239.7,
      priceLabel: 'R$239,70',
      highlight: false,
      cta: 'Quero Economizar',
      link: 'https://app.monetizze.com.br/checkout/ALPHA3FRASCOS',
    },
    {
      id: 'frasco5',
      title: '5 Frascos + Brinde Exclusivo',
      description: 'Kit Alpha definitivo com presente surpresa e o melhor custo-benefício.',
      features: ['150 cápsulas', 'Frete grátis', 'Brinde especial'],
      price: 349.5,
      priceLabel: 'R$349,50',
      highlight: true,
      cta: 'Quero Potência Total',
      link: 'https://app.monetizze.com.br/checkout/ALPHA5FRASCOS',
    },
  ],

  TESTIMONIALS: [
    {
      name: 'Carlos Henrique',
      feedback: 'Eu me sinto outro homem. Energia, foco e desejo nas alturas. AlphaMan é top!',
    },
    {
      name: 'João Batista',
      feedback: 'Voltei a ter confiança na cama e no trabalho. Recomendo demais.',
    },
    {
      name: 'Renato Lopes',
      feedback: 'Produto incrível. Resultados em menos de uma semana. Não largo mais!',
    },
  ],

  FAQ: [
    {
      question: 'Quais os principais benefícios?',
      answer: 'Energia, libido, potência sexual e foco. Tudo com ingredientes naturais e seguros.',
    },
    {
      question: 'Como devo tomar?',
      answer: '1 cápsula por dia pela manhã. Em dias especiais, pode tomar 1 extra 30 minutos antes da relação.',
    },
    {
      question: 'O AlphaMan é seguro?',
      answer: 'Sim. A fórmula é 100% natural e sem efeitos colaterais. Liberado pela ANVISA.',
    },
    {
      question: 'Tem garantia?',
      answer: 'Garantia de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas.',
    },
    {
      question: 'O envio é discreto?',
      answer: 'Sim! Enviamos em embalagem neutra e protegida. Ninguém saberá o conteúdo.',
    },
  ],

  GUARANTEE_TEXT: 'Use AlphaMan por 7 dias. Se não perceber mudança, devolvemos todo o valor. Garantia total de satisfação.',
 PRIVACY_POLICY: {
    lastUpdated: '18 de Junho de 2025',
    title: 'Política de Privacidade',
    intro: `A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos usuários do site/app ${_productName}, especializado na venda de suplementos encapsulados e géis vitamínicos. Ao realizar compras, você concorda com as práticas descritas neste documento.`,
    sections: [
      {
        title: '1. Coleta de informações',
        content: `Coletamos dados fornecidos por você ao criar conta ou realizar pedidos: nome, e-mail, CPF/CNPJ, endereço de entrega, telefone e dados de pagamento.`,
      },
      {
        title: '2. Dados coletados automaticamente',
        content: `Podemos coletar dados técnicos de uso, como tipo de dispositivo, sistema operacional, histórico de navegação em nosso site e registros de erros, para melhorar a experiência e a segurança. Não acessamos dados sensíveis ou privados de seu dispositivo.`,
      },
      {
        title: '3. Uso das informações',
        list: [
          'Processamento e entrega de pedidos de cápsulas e géis;',
          'Confirmação de pagamento e envio de faturas;',
          'Comunicações sobre status de pedido e suporte ao cliente;',
          'Melhoria do site/app e prevenção a fraudes.',
        ],
      },
      {
        title: '4. Compartilhamento de dados',
        content: `Compartilhamos seus dados apenas com transportadoras, gateways de pagamento e provedores de hospedagem necessários para processar seus pedidos. Não vendemos nem divulgamos seus dados a terceiros para marketing sem sua permissão.`,
      },
      {
        title: '5. Segurança dos dados',
        content: `Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados. Entretanto, nenhuma transmissão online é 100% segura.`,
      },
      {
        title: '6. Seus direitos',
        content: `Você pode solicitar acesso, correção ou exclusão de seus dados pelo e-mail: ${_emailSupport}.`,
      },
      {
        title: '7. Alterações nesta política',
        content: `Esta política pode ser atualizada a qualquer momento. A data de revisão será atualizada na parte superior desta página.`,
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
    intro: `Estes termos regem seu uso do site, que é uma plataforma de venda de suplementos encapsulados e géis vitamínicos. Ao realizar compras, você concorda com estes Termos.`,
    sections: [
      {
        title: '1. Cadastro e Conta',
        content: `Para comprar, é necessário criar uma conta com dados verdadeiros. Você é responsável por manter a confidencialidade de sua senha.`,
      },
      {
        title: '2. Produtos e Pedidos',
        content: `Oferecemos cápsulas e géis de vitaminas e suplementos. As descrições e imagens são ilustrativas. Reservamo-nos o direito de alterar preços e composição dos produtos a qualquer momento.`,
      },
      {
        title: '3. Preços e Pagamento',
        content: `Os valores são exibidos em reais (BRL) já com impostos. O pagamento é processado por terceiros (Stripe) e sujeito às políticas de cada meio (cartão, boleto, pix).`,
      },
      {
        title: '4. Entrega e Devolução',
        content: `O prazo de entrega varia conforme endereço. Produtos devem ser conferidos no recebimento. Para troca ou devolução, consulte nossa política de reembolso de 7 dias em nossa seção de suporte.`,
      },
      {
        title: '5. Garantia de Satisfação',
        content: `Oferecemos garantia de 7 dias para insatisfação de compra. Para reembolso, entre em contato pelo e-mail: ${_emailSupport}.`,
      },
      {
        title: '6. Propriedade Intelectual',
        content: `Todo conteúdo do site/app é protegido por direitos autorais e marca registrada.`,
      },
      {
        title: '7. Limitação de Responsabilidade',
        content: `Não nos responsabilizamos por danos indiretos, lucros cessantes ou perdas decorrentes do uso ou impossibilidade de uso dos produtos.`,
      },
      {
        title: '8. Alterações nos Termos',
        content: `Reservamo-nos o direito de atualizar estes Termos a qualquer momento. A data de revisão será alterada no topo desta página.`,
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
    'potência sexual',
    'testosterona natural',
    'produto para libido',
  ],
}
