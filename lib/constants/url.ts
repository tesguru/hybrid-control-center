
export const URLS = {
  
  AUTH: {
    PERSONAL: {
      LOGIN: '/personal/login',
      REGISTER: '/personal/register',
      FORGOT_PASSWORD: '/personal/forgot-password',
    },
    CORPORATE: {
      LOGIN: '/corporate/login',
      REGISTER: '/corporate/register',
      FORGOT_PASSWORD: '/corporate/forgot-password',
    },
  },
  
  PAGES: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    FAQ: '/faq',
    PRIVACY: '/privacy',
    OPEN_ACCOUNT: '/open-account',
  },
  
  API: {
    AUTH: {
      LOGIN: '/api/auth/login',
      REGISTER: '/api/auth/register',
    },
  },
} as const;