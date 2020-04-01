// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import store from './store';

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.store = store;
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap'
  })
}
