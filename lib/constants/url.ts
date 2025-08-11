export const URLS = {
  AUTH: {
      LOGIN: '/personal/login',
      REGISTER: '/personal/register',
      FORGOT_PASSWORD: '/personal/forgot-password',
  },
  DASHBOARD: {
      INDEX: '/dashboard',
      PERSONALBANKING: '/personal-banking',  
      CORPORATEBANKING: '/corporate-banking',   
      PENDINGAPPROVALACCOUNT: '/pending-approval',   
       FLAGGEDACCOUNT: '/flagged-account', 
        ACCOUNTONPND: '/account-on-pnd', 
      ALLTRANSACTIONS: '/all-transactions',
      BANKTRANSFER: '/bank-transfer',
      FLAGGEDTRANSACTIONS: '/flagged-transactions',
      CORPORATEBANKINGTRANSACTIONS: '/corporate-banking-transactions',
      PERSONALBANKINGTRANSACTIONS: '/personal-banking-transactions',
      VIEWUSERS: '/view-users',
      CREATEUSERS: '/create-users',
      PERMISSIONMANAGER: '/permission-manager'
  },
} as const;