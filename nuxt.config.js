const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:400,300,700,900%7COpen+Sans:400,300,700,800%7CMontserrat:400,700'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      { src: '/bootstrap/js/bootstrap.js' },
      { src: '/less/less-1.5.0.min.js' },
      { src: '/javascripts/libs/common.js' },
      { src: '/javascripts/custom/main.js' },
      { src: '/javascripts/custom/custom-init.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/bootstrap/css/bootstrap.css',
    '~/assets/fonts/fonts.css',
    '~/assets/stylesheets/animate.css',
    '~/assets/stylesheets/slimmenu.css',
    '~/assets/stylesheets/owl.carousel.css',
    '~/assets/stylesheets/owl.theme.css',
    '~/assets/stylesheets/venobox.css',
    '~/assets/stylesheets/slidingmenu.css',
    '~/assets/stylesheets/main.css',
    '~/assets/stylesheets/main-bg.css',
    '~/assets/stylesheets/main-responsive.css',
    '~/assets/stylesheets/main-retina.css',
    {
      src: '~/assets/less/color.less',
      lang: 'less'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
