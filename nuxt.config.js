export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  router: {
    base: '/'
  },

  server: {
    host: "0.0.0.0", // default: localhost // (0.0.0.0 for open on mob) // 127.0.0.1 for prod
    port: process.env.PORT,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zollider',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
      { hid: 'description', name: 'description', content: 'Zollider' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    script: [
      { src: '/wow.js' },
      { src: '/imask.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/animate.min.css",
    "@/assets/scss/_fonts.scss",
    "@/assets/scss/_normalize.scss",
    "@/assets/scss/_settings.scss",
  ],

  styleResources: {
    scss: ["./assets/scss/_variables.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "@/plugins/smooth.js", ssr: false,}
  ],
  axios: {
    baseURL: process.env.URL,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
  ],

  serverMiddleware: ['~/api/index'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // fix to work with swiperjs 8 - need to run with standalone:true. That can make some troubles.
    standalone: true,
    extend(config, ctx) {
      // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  },
}
