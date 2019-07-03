const path = require('path')
const webpack = require('webpack')
const glob = require('glob-all')
const pkg = require('./package')
const metadata = require('./static/content/metadata.json')
const dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
})
const env = require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Cavaon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'site_name', name: 'site_name', content: metadata.homepageTitle },
      { hid: 'description', name: 'description', content: metadata.homepageDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:400,300,700%7COpen+Sans:400,300,700%7CMontserrat:400,500,700'
      },
      { rel: 'apple-touch-icon', href: '/apple-icon-180x180.png', sizes: '180x180' },
      { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/apple-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/apple-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/apple-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-568h@2x~iphone_640x1136.png', sizes: '640x1136' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-1242@3x~iphone6s-portrait_1242x2208.png', sizes: '1242x2208' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-1125@3x~iphoneX-portrait_1125x2436.png', sizes: '1125x2436' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-750@2x~iphone6-portrait_750x1334.png', sizes: '750x1334' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-Portrait@2x~ipad_1536x2048.png', sizes: '1536x2048' },
      { rel: 'apple-touch-startup-image', href: ' LaunchImage-Portrait@2x~ipad_2048x2732.png', sizes: '2048x2732' },
      { rel: 'apple-touch-startup-image', href: 'LaunchImage-Portrait@2x~ipad_1668x2224.png', sizes: '1668x2224' }
    ],
    script: [
      { src: '/javascripts/custom/jquery-2.2.4.min.js', type: 'text/javascript', body: true, defer: true },
      { src: '/less/less-1.5.0.min.js', type: 'text/javascript', body: true, defer: true },
      { src: '/javascripts/libs/common-min.js', type: 'text/javascript', body: true, defer: true },
      { src: '/bootstrap/js/bootstrap.min.js', type: 'text/javascript', body: true, defer: true },
      { src: '/javascripts/custom/main.js', type: 'text/javascript', body: true, defer: true },
      { src: '/javascripts/custom/custom-init.js', type: 'text/javascript', body: true, defer: true },
      { src: '//js.hs-scripts.com/5765560.js', type: 'text/javascript', body: true, defer: true },
      { src: 'https://chimpstatic.com/mcjs-connected/js/users/35f22d84b4fdb209da5977e3b/eac28fbc3c5fe0a8ba79b9d01.js', type: 'text/javascript' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  env: env.parsed,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/bootstrap/css/bootstrap4.css',
    '~/assets/bootstrap/css/bootstrap.min.css',
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
  router: {
    linkActiveClass: 'active-link',
    // eslint-disable-next-line
    scrollBehavior: async (to, from, savedPosition) => {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    },
    extendRoutes(routes, resolve) {
      // routes.push({ name: 'custom', path: '*', component: resolve(__dirname, 'pages/index.vue') })
      routes.push({ name: 'About', path: '/about', component: '~/pages/index.vue' })
      routes.push({ name: 'Services', path: '/services', component: '~/pages/index.vue' })
      routes.push({ name: 'Contact', path: '/contact', component: '~/pages/index.vue' })
      routes.push({ name: 'CaseStudies', path: '/case-studies', component: '~/pages/index.vue' })
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/hotjar.js', ssr: false },
    { src: '~/plugins/tawkto.js', ssr: false },
    { src: '~/plugins/mailchimp.js', ssr: false },
    { src: '~/plugins/tagmanager.js', ssr: false }
  ],
  server: {
    port: 3002 // default: 3000
  },
  serverMiddleware: [
    '~/api/nodemailer',
    '~/api/hubspotContact',
    '~/api/hubspotStartAProject',
    '~/api/hubspotBlogSignup',
    '~/api/mailchimp'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    '@nuxtjs/robots'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/projects/project-slider/'
  },
  sitemap: {
    hostname: 'https://www.cavaon.com',
    gzip: true,
    routes: [
      '/',
      '/success',
      '/services'
    ]
  },
  markdownit: {
    injected: true
  },
  googleAnalytics: {
    id: 'UA-136678258-1'
  },
  generate: {
    routes: dynamicRoutes
  },
  recaptcha: {
    hideBadge: true,
    siteKey: process.env.recaptchasitekey,
    version: 3
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // analyze: true,
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

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`)
    })
  )
}
