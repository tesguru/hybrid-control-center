

export const APIURLS = {
  AUTH: {
    PERSONAL: {
      LOGIN: 'http://localhost:3000/api/hello',
      REGISTER: '/personal/register',
      FORGOT_PASSWORD: '/personal/forgot-password',
    },
     CORPORATE: {
      LOGIN: '/corporate/login',
      REGISTER: '/corporate/register',
      MYACCOUNT: '/corporate/my-account',
      FORGOT_PASSWORD: '/corporate/forgot-password',
    },
  },
} as const;