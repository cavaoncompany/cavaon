<template>
  <section id="blog">
    <header-mobile page="blog" />
    <header-standard page="blog" />
    <div class="blog-banner">
      <img src="/images/banner-blog.png" alt="Traffic">
      <h1>{{ blog.title }}</h1>
      <div class="liner color-bg" />
    </div>
    <div class="container">
      <div class="row">
        <article-list :articles="posts" page="blog" />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import blog from '../../static/content/blog.json'
import metadata from '../../static/content/metadata.json'
import ArticleList from '../../components/blog/Article-list'
import HeaderStandard from '../../components/HeaderStandard'
import HeaderMobile from '../../components/HeaderMobile'
import Footer from '../../components/Footer'
export default {
  components: {
    ArticleList,
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/', false, /\.json$/)
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
      filename: `${key}`
    }))
    return {
      posts,
      blog: blog,
      subscriberFirstname: '',
      subscriberLastname: '',
      subscriberEmail: '',
      messageSent: false,
      metadata: metadata
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    sendEmail() {
      const emailData = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('subsribeTo', emailData)
      this.subscriberFirstname = ''
      this.subscriberLastname = ''
      this.subscriberEmail = ''
    },
    createSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('createSubscriber', subscriberInfo)
    },
    createMailchimpSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('createMailchimpSubscriber', subscriberInfo)
    },
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createMailchimpSubscriber()
        this.createSubscriber()
        this.sendEmail()
        this.messageSent = true
      } catch (error) {
        // eslint-disable-next-line
        console.log('Submission error:', error)
      }
    }
  },
  head() {
    return {
      title: `${this.metadata.blogTitle}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: `${this.metadata.blogDescription}`
        }
      ]
    }
  }
}
</script>

<style>
#blog {
  height: 100%;
  padding-top: 130px;
}
#blog .blog-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#blog .blog-banner .liner {
    text-align: center;
    margin: 0 auto;
}
#blog .blog-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
#blog .blog-banner h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: -70px;
}
.align-center {
  margin: 0 auto;
}
#blog .standard-header {
  display: block;
}
#blog .subscribe {
  background-color: #FFF;
  padding-top: 70px;
  padding-bottom: 70px;
}
#subscribeToBlogForm {
  padding-left: 0;
  padding-right: 0;
}
#subscribeToBlogForm input {
  border-color: #E2E2E2;
}
#subscribeToBlogForm input::placeholder {
  color: #E2E2E2;
}
#subscribeToBlogForm h3 {
  font-size: 18px;
  color: #494949;
  font-weight: 500;
}
#subscribeToBlogForm .btn {
  width: 170px;
}
#blog .successfully-subscribed p {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: green;
}
</style>
