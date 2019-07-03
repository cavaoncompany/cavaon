<template>
  <section id="blog">
    <header-mobile page="blog" />
    <header-standard page="blog" />
    <div class="container">
      <h1>{{ blog.title }}</h1>
      <div class="card-spacer align-center" />
      <article-list :articles="posts" page="blog" />
    </div>
    <div class="subscribe">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 subscribe-to-blog">
            <h3>{{ blog.subscribeToOurNewsletter }}</h3>
            <p>{{ blog.stayUpToDate }}</p>
            <form
              id="subscribeToBlogForm"
              class="col-md-12"
              @submit.prevent="onSubmit"
            >
              <section class="form-input">
                <article>
                  <input
                    v-model="subscriberFirstame"
                    type="text"
                    :placeholder="blog.firstnamePlaceholder"
                    name="subscriberFirstame"
                  >
                </article>
                <article>
                  <input
                    v-model="subscriberLastname"
                    type="text"
                    :placeholder="blog.lastnamePlaceholder"
                    name="subscriberLastname"
                  >
                </article>
                <article>
                  <input
                    v-model="subscriberEmail"
                    type="text"
                    :placeholder="blog.emailPlaceholder"
                    name="subscriberEmail"
                  >
                </article>
              </section>
              <article>
                <div class="btn-wrap  text-center">
                  <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
                    {{ blog.buttonText }}
                  </button>
                </div>
              </article>
              <article v-if="messageSent === true" class="successfully-subscribed">
                <p>{{ blog.messageSent }}</p>
              </article>
            </form>
          </div>
        </div>
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
      subscriberFirstame: '',
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
        firstname: this.subscriberFirstame,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('subsribeTo', emailData)
      this.subscriberFirstame = ''
      this.subscriberLastname = ''
      this.subscriberEmail = ''
    },
    createSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstame,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('createSubscriber', subscriberInfo)
    },
    createMailchimpSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstame,
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
  background: #f4f4f4;
  padding-top: 130px;
}
#blog h1 {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
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
