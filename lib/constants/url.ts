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
  DASHBOARD: {
    PERSONAL: {
    DASHBOARD: '/personal/dashboard',
    MYACCOUNT: '/personal/my-account',
    TRANSFER:'/personal/transfer',
    TRANSFERTOOWNACCOUNT:'/personal/transfer-to-own-account',
    TRANSFERTOIVANTAGEACCOUNT:'/personal/transfer-to-ivantage-account',
    TRANSFERTOOTHERBANKS:'/personal/transfer-to-other-banks',
    MANAGEBENEFICIARY:'/personal/manage-beneficiary',
    ADDBENEFICIARY:'/personal/add-beneficiary',
    TRANSACTIONHISTORY:'/personal/transaction-history',
    BANKSTATEMENT:'/personal/bank-statement',
    BILLPAYMENTAIRTIME:'/personal/bill-payment-airtime',
    BILLPAYMENTUTILITIES:'/personal/bill-payment-utility',
    REQUESTDEBITCARD:'/personal/request-debit-card',
    REQUESTCARDPIN:'/personal/request-card-pin',
    CARDCONTROL:'/personal/card-control',
    },
    CORPORATE: {
      LOGIN: '/corporate/login',
      REGISTER: '/corporate/register',
      FORGOT_PASSWORD: '/corporate/forgot-password',
    },
  },
} as const;