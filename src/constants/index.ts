// Informações da empresa
export const COMPANY_INFO = {
  name: 'Ana Elisa Cardoso Beleza Facial',
  shortName: 'Ana Elisa',
  author: 'Ana Elisa Cardoso',
  siteUrl: 'https://anaelisabelezafacial.com.br',
  description:
    'Estética facial especializada em cuidados personalizados e tratamentos de beleza para realçar sua essência natural',
  tagline: 'Beleza e cuidado que realçam sua essência',
  logoUrl: 'https://anaelisabelezafacial.com.br/icon.png',
  keywords:
    'estética facial, limpeza de pele, design de sobrancelhas, extensão de cílios, nanoblading, lash lift, hidra gloss, nanolips, beleza, cuidados faciais, Ana Elisa',
} as const;

// Ano de formatura (início da carreira); os anos de experiência são calculados a partir dele
export const CAREER_START_YEAR = 2018;

export const getYearsOfExperience = (): number => new Date().getFullYear() - CAREER_START_YEAR;

const PHONE_NUMBER = '5514997139783';
export const PHONE_NUMBER_FORMATTED = '(14) 99713-9783';

// Informações de contato
export const CONTACT_INFO = {
  whatsappNumber: PHONE_NUMBER,
  whatsappUrl: `https://wa.me/${PHONE_NUMBER}`,
  instagram: '@anaelisa.belezafacial',
  instagramUrl: 'https://instagram.com/anaelisa.belezafacial',
} as const;

// Endereço do estúdio (usado no rodapé, contato e dados estruturados)
export const ADDRESS = {
  street: 'R. Jose Zini, 101',
  locality: 'Pongaí',
  region: 'SP',
  postalCode: '16660-077',
  country: 'BR',
} as const;

// Mensagens padrão
export const MESSAGES = {
  whatsapp: {
    default: 'Olá! Gostaria de agendar um horário para um tratamento estético.',
    service: (serviceName: string) => `Olá! Gostaria de agendar o serviço: ${serviceName}`,
    contact: 'Olá! Gostaria de mais informações sobre os tratamentos.',
  },
  cta: {
    scheduleWhatsApp: 'Agendar pelo WhatsApp',
    schedule: 'Agende seu horário',
    learnMore: 'Saiba mais',
    backHome: 'Voltar ao início',
    viewServices: 'Ver serviços',
  },
  errors: {
    pageNotFound: 'Ops! Parece que você se perdeu em nossa jornada de beleza.',
    pageNotFoundSubtitle:
      'A página que você está procurando não existe, mas temos muitas outras opções incríveis para você descobrir!',
  },
} as const;

// Metadados e SEO
export const SEO_DEFAULTS = {
  title: `${COMPANY_INFO.name} - Estética e Cuidados Faciais`,
  description: COMPANY_INFO.description,
  keywords: COMPANY_INFO.keywords,
  image: `${COMPANY_INFO.siteUrl}/icon.png`,
  type: 'website',
  locale: 'pt_BR',
  copyright: `© 2025 ${COMPANY_INFO.name}. Todos os direitos reservados.`,
} as const;

// Dados estruturados JSON-LD
export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.siteUrl,
    logo: COMPANY_INFO.logoUrl,
    sameAs: [CONTACT_INFO.instagramUrl, CONTACT_INFO.whatsappUrl],
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.siteUrl,
    logo: COMPANY_INFO.logoUrl,
    priceRange: '$$',
    paymentAccepted: ['cash', 'credit card', 'debit card', 'pix'],
    currenciesAccepted: 'BRL',
  },
} as const;

// URLs comuns
export const URLS = {
  home: '/',
  services: '/servicos',
  about: '/#sobre',
  contact: '/#contato',
  testimonials: '/#depoimentos',
  notFound: '/404',
} as const;

// Redes sociais
export const SOCIAL_MEDIA = [
  {
    platform: 'Instagram',
    icon: '📷',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    platform: 'WhatsApp',
    icon: '💬',
    url: CONTACT_INFO.whatsappUrl,
  },
] as const;

// Funções utilitárias
export const generateWhatsAppUrl = (message: string = MESSAGES.whatsapp.default): string => {
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
};

export const generateServiceWhatsAppUrl = (serviceName: string): string => {
  return generateWhatsAppUrl(MESSAGES.whatsapp.service(serviceName));
};

export const generatePageTitle = (pageTitle?: string): string => {
  return pageTitle ? `${pageTitle} - ${COMPANY_INFO.name}` : SEO_DEFAULTS.title;
};

export const generateServiceUrl = (serviceId: string): string => {
  return `${COMPANY_INFO.siteUrl}/servicos/${serviceId}/`;
};
