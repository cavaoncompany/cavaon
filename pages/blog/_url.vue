<template>
  <div id="blog-post" class="blog-post">
    <header-mobile page="blog-detail" />
    <header-standard id="blog-post-standard-header" page="blog-detail" />
    <div class="container blog-container">
      <div class="blog-content">
        <h1>{{ post.title }}</h1>
        <div class="spacer-red-big" />
        <p class="date">
          {{ blogDate }}
        </p>
        <p class="tags">
          <span v-for="(tag, i) in post.tags" :key="i">{{ tag }} </span>
        </p>
        {{ image }}
        <div class="blog-top-image" :style="`background-image:url(` + post.image + `)`" />
        <div class="blog-post-body">
          <h2>{{ post.subtitle }}</h2>
          <div class="spacer-red" />
          <div
            class="body-text"
            v-html="$md.render(post.body)"
          />
        </div>
      </div>
    </div>
    <Footer />
    <div
      v-if="showModal === true"
      id="newsletter-modal"
      class="modal showModal"
      tabindex="-1"
      role="dialog"
      @click="closeIfOutsideModal($event)"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="btn btn-light btn-close" data-target="#newsletter-modal" @click="closeModal()">
              <img src="/images/icon-close-128.png" alt="close modal">
            </button>
            <h3>{{ blog.subscribeToOurNewsletter }}</h3>
            <form
              id="subscribeToNewsletterForm"
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
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal === true" class="modal-overlay" @click="closeModal()" />
  </div>
</template>

<script>
import { markdown } from 'markdown'
import HeaderStandard from '../../components/HeaderStandard'
import HeaderMobile from '../../components/HeaderMobile'
import Footer from '../../components/Footer'
import blog from '../../static/content/blog.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  data() {
    return {
      blogDate: Date,
      image: '',
      post: {},
      subscriberFirstame: '',
      subscriberLastname: '',
      subscriberEmail: '',
      blog: blog,
      showModal: false
    }
  },
  computed: {
    parsedBody() {
      return markdown.toHTML(this.post.body)
    },
    trimmedDescription() {
      if (typeof (this.post.description) !== 'undefined') {
        return (this.post.description + '').slice(0, 150)
      } else {
        return ('Cavaon blog post ')
      }
    }
  },
  watch: {
    showModal: function () {
      this.openModal()
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  // eslint-disable-next-line
  async asyncData({ route }) {
    let post = {}
    const context = require.context('~/content/blog/', false, /\.json$/)
    const postie = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
      filename: `${key}`
    }))
    const posts = postie.filter(a => a.slug.toLowerCase().replace(/ /g, '-') === route.params.url)
    if (posts.length > 0) {
      post = posts[0]
    }
    return { post }
  },
  head() {
    return {
      title: `${(this.post && this.post.title) || 'Post'}`,
      meta: [
        {
          name: 'description',
          content: `${(this.trimmedDescription) || ''}`,
          hid: 'description'
        }
      ]
    }
  },
  created() {
    const date = new Date(this.post.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    this.blogDate = date.toLocaleDateString('en-AU', options).toUpperCase()
    if (this.$route.query.fb === 'true') {
      this.showModal = true
    }
  },
  methods: {
    openModal() {
      document.getElementById('newsletter-modal').classList.add('showModal')
    },
    closeModal() {
      document.getElementById('newsletter-modal').classList.remove('showModal')
      document.getElementsByClassName('modal-overlay')[0].classList.add('hidden')
    },
    closeIfOutsideModal(e) {
      const modal = document.getElementsByClassName('modal-body')[0].getBoundingClientRect()
      if (e.offsetX < modal.left || e.offsetX > modal.right || e.offsetY < modal.top || e.offsetY > modal.bottom) {
        this.closeModal()
      }
    },
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
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createSubscriber()
        this.sendEmail()
        this.closeModal()
      } catch (error) {
        // eslint-disable-next-line
        console.log('Submission error:', error)
      }
    }
  }
}
</script>

<style>
#blog-post-standard-header {
  display: block;
}
.spacer-red {
  background-color: #FA4531;
  width: 100px;
  height: 3px;
  margin: 0 auto;
  margin-top: 22px;
  margin-bottom: 25px;
}
.spacer-red-big {
  background-color: #FA4531;
  width: 250px;
  height: 4px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 25px;
}
.blog-top-image {
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  background-size: cover;
}
.blog-post {
  text-align: justify;
  margin-top: 80px;
}
.blog-post p {
  margin-bottom: 25px;
}
.blog-post h1 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 10px;
  text-align: center;
  line-height: 35px;
}
.blog-post .date {
  text-align: center;
}
.blog-post .tags {
  margin-bottom: 50px;
  text-align: center;
}
.blog-post h2 {
  color: #CCCCCE;
  font-size: 24px;
  line-height: 2.3rem;
  text-align: left;
}
.blog-post-body {
  margin: 0 auto;
  letter-spacing: 10px;
  margin-top: 80px;
}
.blog-post .body-text {
  letter-spacing: normal;
  color: black;
}
.blog-post .blog-container {
  margin-bottom: 80px;
}
.blog-content img {
  width: 100%;
}
#blog-post .standard-header {
  display: block;
}
.form-input {
  width: 90%;
  margin: 0 auto;
}
#blog-post .showModal {
  display: block;
}
#blog-post .btn-close {
  float: right;
  background: transparent;
  width: 40px;
  padding: 5px;
}
#blog-post .btn-close img {
  height: 20px;
}
#subscribeToNewsletterForm {
  padding-left: 0;
  padding-right: 0;
  margin: 15px 0;
}
#subscribeToNewsletterForm .modal-header,
#subscribeToNewsletterForm .modal-body {
  border: none;
}
#newsletter-modal .modal-body h3 {
  margin-top: 15px;
  text-align: center;
}
#subscribeToNewsletterForm input {
  border-color: #E2E2E2;
  color: #494949;
}
#subscribeToNewsletterForm input::placeholder {
  color: #E2E2E2;
}
#subscribeToNewsletterForm h3 {
  font-size: 18px;
  color: #494949;
  font-weight: 500;
}
#subscribeToNewsletterForm .btn {
  width: 170px;
}
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
}
</style>
