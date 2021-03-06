// const pkg = require('./package')
const bodyParser = require('body-parser')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Big+Shoulders+Display&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2ecc71', height: '3px', duration: 5000 },
  /*
  loadingIndicator : {
    name: 'circle',
    color: '#2ecc71'
  },
  */
  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/styles/main.scss', lang: 'scss'},
    {src: '~/assets/styles/animate.scss', lang: 'scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js',
    '~plugins/global-component.js',
    {src: '~plugins/vee-validate.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // example extend axios modules 
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Indonesia',
            code: 'id',
            iso: 'id-ID',
            file: 'id.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'id'
      }
    ]
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-71d4f.firebaseio.com'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-71d4f.firebaseio.com',
    firebaseKey: 'AIzaSyCoC_uUdyG3Svr-Hz_30EtUWmuUH5Vb2Z0'
  },
  /* class frrom animate.scss */
  /*
  transition: {
    name: 'fade',
    mode: 'out-in'
  }, 
  */
  router: {
    middleware: ['log'] /*example middleware on page*/
  },
  /* run berfore nuxt processed */
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
