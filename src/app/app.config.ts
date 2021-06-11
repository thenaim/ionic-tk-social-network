export const appConfig = {
  /* App languages */
  langs: {
    default: 'en',
    en: 'en',
  },

  /* App routes */
  routes: {
    tabs: {
      root: 'tabs',
      tab1: 'tab1',
    },
    auth: {
      login: 'auth/login',
      register: 'auth/register',
      forgot: 'auth/forgot',
      reset: 'auth/reset',
    },
    redirectOnError: 'tabs',
    redirectOnNotFound: 'tabs',
  },
};
