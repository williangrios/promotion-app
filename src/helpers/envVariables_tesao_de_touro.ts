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

const _emailSupport = 'tesaodetouro@gmail.com'
const _productName = 'Tesao de Touro'

export const envVariables = {
  SITE_URL: 'www.tesaodetouro.com',

  PRIMARY_COLOR_LIGHT: '#b22222',
  PRIMARY_COLOR_MEDIUM: '#a50000',
  PRIMARY_COLOR_DARK: '#8b0000',
  PRIMARY_COLOR_ULTRA_DARK: '#4b0000' ,

  SECONDARY_COLOR_LIGHT: '#e0b64a',
  SECONDARY_COLOR_MEDIUM: '#c8a24b',
  SECONDARY_COLOR_DARK: '#3a3a3a',

  PRODUCT_NAME: _productName,
  PRODUCT_DESCRIPTION: 'Tesão de Touro - Potência, vitalidade e desejo sem limites.',

  PHONE_SUPPORT: '',
  SOCIAL_WHATSAPP: '37988083717',

  EMAIL_HOST: 'smtp.gmail.com',
  EMAIL_PORT: '587',
  EMAIL_USER: _emailSupport,
  EMAIL_PASS: 'atgkoozhrtxngudu',
  EMAIL_SUPPORT: _emailSupport,

  SOCIAL_YOUTUBE: '',
  SOCIAL_INSTAGRAM: '',
  SOCIAL_FACEBOOK: '',

  NAV_ITEMS: [
    { name: 'Benefícios', href: '/#benefits' },
    { name: 'Preços', href: '/#pricing' },
  ],

  HEADER_BG_COLOR: '#0f172a',
  HEADER_TEXT_COLOR: '#ffffff',
  HEADER_HOVER_COLOR: '#fbbf24',
  HEADER_BORDER_COLOR: 'rgba(255,255,255,0.1)',
  LOGO_IMAGE: '/banner.jpg',

  HERO: {
    title: 'Desperte Sua Potência com Tesão de Touro',
    subtitle: 'Suplementos de alta performance que elevam sua energia, confiança e desempenho em todos os momentos. Resultados reais e visíveis em até 7 dias ou seu dinheiro de volta.',
    buttonLabel: 'Quero Potência Máxima',
    buttonLink: '/#pricing',
    images: [
      {
        src: '/guarantee.png',
        alt: 'Produto Tesão de Touro',
        width: 400,
        height: 400,
      },
      {
        src: '/logo.jpg',
        alt: 'Produto Tesão de Touro',
        width: 400,
        height: 400,
      },
    ]
  },

   HIGHLIGHTS: [
    {
      icon: TruckIcon,
      title: 'Entregamos',
      subtitle: 'Para todo o Brasil!',
    },
    {
      icon: CreditCardIcon,
      title: 'Pague com cartão',
      subtitle: 'em até 12x',
    },
    {
      icon: BiPackage,
      title: 'Frete grátis',
      subtitle: 'em qualquer pedido!',
    },
    {
      icon: LockClosedIcon,
      title: 'Compra segura',
      subtitle: 'Site blindado!',
    },
  ],

  MOTIVATIONAL_BANNER: {
    title: 'Transforme sua energia. Desperte o seu máximo potencial!',
    paragraphs: [
      'Sente que sua disposição anda em baixa? Isso pode ser um sinal de que seu corpo precisa de um reforço real. O Tesão de Touro foi desenvolvido com ativos potentes e naturais que ajudam a recuperar sua vitalidade, força e desempenho em poucos dias.',
      'Com uma fórmula que ativa sua energia desde a primeira semana, nosso suplemento combate o cansaço físico e mental, estimula naturalmente a produção de testosterona e melhora seu foco e confiança.',
      'Milhares de brasileiros já aprovaram! Chegou sua vez de tomar o controle da sua performance e viver com mais potência e satisfação.',
    ],
    cta: {
      label: 'COMPRE AGORA',
      link: '/#pricing',
    },
    image: {
      src: '/produto-motivacional.png',
      alt: `Imagem motivacional com produto ${_productName}`,
      width: 450,
      height: 450,
    },
  },
  VIDEO_SECTION: {
    title: `Descubra como o ${_productName} transforma sua vida`,
    subtitle: 'Assista ao vídeo completo e veja os benefícios reais para energia, libido e desempenho.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // vídeo temporário
  },
  FEATURES: [
    {
      title: 'Explosão de Energia e Disposição',
      desc: 'Ative o melhor do seu corpo e mente com nossa fórmula intensiva. Sinta-se mais forte, ativo e produtivo todos os dias.',
      icon: BoltIcon,
    },
    {
      title: 'Libido em Alta',
      desc: 'Ingredientes afrodisíacos naturais que reacendem o desejo e melhoram sua performance nas relações.',
      icon: FireIcon,
    },
    {
      title: 'Desempenho Potente',
      desc: 'Tenha ereções mais rígidas e duradouras com vasodilatação avançada e fluxo sanguíneo otimizado.',
      icon: ShieldCheckIcon,
    },
    {
      title: '100% Natural e Seguro',
      desc: 'Composto por extratos poderosos como maca peruana, tribulus e ginseng. Sem efeitos colaterais, apenas benefícios.',
      icon: MdNature,
    },
    {
      title: 'Resultados Rápidos e Comprovados',
      desc: 'Milhares já comprovaram: em menos de 7 dias, você sente a diferença. Efeito contínuo com uso regular.',
      icon: SparklesIcon,
    },
    {
      title: 'Confiança de Quem Já Usa',
      desc: 'Com mais de 5.000 clientes fiéis, temos orgulho de fazer parte da sua evolução pessoal e bem-estar.',
      icon: UserGroupIcon,
    },
  ],

  STATS: [
    {
      value: '5.000+',
      label: 'Clientes Satisfeitos',
      icon: UserGroupIcon,
    },
    {
      value: '10.000+',
      label: 'Unidades Vendidas',
      icon: ChartBarIcon,
    },
    {
      value: '98%',
      label: 'Aprovação Garantida',
      icon: AcademicCapIcon,
    },
  ],

  PRODUCTS: [
    {
      id: 'frasco1',
      priceId: 'price_1OXiCyKEXAMPLE',
      title: '1 Frasco',
      description: 'Comece sua transformação. Ideal para quem quer experimentar o poder do Tesão de Touro.',
      features: ['30 cápsulas premium', 'Fórmula concentrada', 'Envio ultra-rápido e discreto'],
      price: 89.9,
      priceLabel: 'R$89,90',
      highlight: false,
      cta: 'Quero Começar',
      link: 'https://app.monetizze.com.br/checkout/DXE351499',
    },
    {
      id: 'frasco3',
      priceId: 'price_1OXiCyKEXAMPLE',
      title: '3 Frascos',
      description: 'A escolha inteligente para uso contínuo com ótimo custo-benefício.',
      features: ['90 cápsulas no total', 'Desconto progressivo', 'Frete grátis'],
      price: 239.7,
      priceLabel: 'R$239,70',
      highlight: false,
      cta: 'Quero Economia',
      link: 'https://app.monetizze.com.br/checkout/DXE351499',
    },
    {
      id: 'frasco5',
      priceId: 'price_1OXiCyKEXAMPLE',
      title: '5 Frascos + Brinde Exclusivo',
      description: 'Tratamento completo para resultados máximos com bônus especial incluso.',
      features: ['150 cápsulas', 'Brinde surpresa', 'Maior desconto e frete grátis'],
      price: 349.5,
      priceLabel: 'R$349,50',
      highlight: true,
      cta: 'Quero Potência Total + Economia',
      link: 'https://app.monetizze.com.br/checkout/DXE351499',
    },
  ],

  TESTIMONIALS: [
    {
      name: 'Fernanda Silva',
      feedback:
        'Senti o efeito em poucos dias. Muito mais energia e disposição no meu dia. Recomendo com confiança!',
    },
    {
      name: 'Ricardo Almeida',
      feedback:
        'Produto prático e eficiente. Levo no bolso e uso quando preciso. Minha rotina mudou completamente.',
    },
    {
      name: 'Mariana Costa',
      feedback:
        'O melhor suplemento que já experimentei! Corpo mais forte, mente mais ativa e libido nas alturas.',
    },
  ],

  FAQ: [
    {
      question: 'Quais os principais benefícios?',
      answer: `Mais energia, libido elevada, disposição e foco. Tesão de Touro é ideal para quem busca desempenho e confiança.`,
    },
    {
      question: 'Como devo tomar?',
      answer:
        'Apenas 1 cápsula por dia, preferencialmente pela manhã. Os resultados aumentam com o uso contínuo.',
    },
    {
      question: 'É seguro?',
      answer:
        'Sim. A fórmula é 100% natural, testada e aprovada. Sem efeitos colaterais e sem riscos para sua saúde.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Claro! Garantia de satisfação total: se não gostar, devolvemos 100% do valor em até 7 dias.',
    },
    {
      question: 'Qual o prazo de entrega?',
      answer:
        'Postagem em até 24h úteis. Prazo médio de 3 a 5 dias úteis para todo o Brasil com frete discreto.',
    },
  ],

  GUARANTEE_TEXT:
    'Garantia Total de Satisfação: use por até 7 dias. Se não perceber diferença, devolvemos todo o seu dinheiro sem complicações.',

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
  ]
}
