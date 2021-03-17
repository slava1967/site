const strapiBaseUri = process.env.API_URL
const axios = require('axios')
require('dotenv').config()

export default {
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Товары по акции',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Данный сайт предназначен для того, чтобы посетители делились друг с другом информацией о том, где можно купить товары по акции, о проходящих распродажах.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { rel: "stylesheet", href: "/css/owl.theme.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/slick.css" },
      { rel: "stylesheet", href: "/css/icons.css" },
      { rel: "stylesheet", href: "/css/preset.css" },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/presets/color1.css" }
    ],
    
    script: [
      { src: "/js/jquery.js", type: "text/javascript", body: true },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/js/modernizr.custom.js", type: "text/javascript", body: true },
      { src: "/js/gmaps.js", type: "text/javascript", body: true },
      { src: "https://maps.google.com/maps/api/js?key=AIzaSyDTPlX-43R1TpcQUyWjFgiSfL_BiGxslZU", type: "text/javascript", body: true },
      { src: "/js/dlmenu.js", type: "text/javascript", body: true },
      { src: "/js/jquery.magnific-popup.js", type: "text/javascript", body: true },
      { src: "/js/mixer.js", type: "text/javascript", body: true },
      { src: "/js/jquery.easing.1.3.js", type: "text/javascript", body: true },
      { src: "/js/owl.carousel.js", type: "text/javascript", body: true },
      { src: "/js/slick.js", type: "text/javascript", body: true },
      { src: "/js/jquery.appear.js", type: "text/javascript", body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/dateformat.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: strapiBaseUri,
    https: true
  },

  env: {
    strapiBaseUri,
  },

  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection"
      },
      {
        name: "categories",
        type: "collection"
      },
      {
        name: "comments",
        type: "collection"
      },
      {
        name: "messages",
        type: "collection"
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
