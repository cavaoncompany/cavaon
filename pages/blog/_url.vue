<template>
  <div id="blog-post" class="blog-post">
    <header-mobile page="blog-detail" />
    <header-standard id="blog-post-standard-header" page="blog-detail" />
    <div class="container blog-container">
      <div class="top-line">
        <p class="date">
          {{ blogDate }}
        </p>
        <div class="grey-spacer" />
        <p>
          {{ readTime }} min read
        </p>
      </div>
      <div class="liner color-bg" />
      <div class="blog-content">
        <h1>{{ post.title }}</h1>
        {{ image }}
        <div class="blog-top-image" :style="`background-image:url(` + post.image + `)`" />
        <div class="row">
          <social-sharing class="social-media col-1" :url="'https://www.cavaon.com' + url" inline-template>
            <div>
              <network network="facebook">
                <svg
                  class="social-media-icon"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.2985" cy="16.2985" r="16.2985" fill="#E2E2E2" />
                  <g clip-path="url(#clip0)">
                    <path d="M18.1768 8.14925C17.6191 8.14925 17.0923 8.21088 16.4726 8.45742C15.2022 8.9813 14.5825 10.1523 14.5825 12.0321V13.8503H12.806V16.8806H14.5722V25.6119H18.1665V16.8806H20.6144L20.9552 13.8606H18.1665V12.5046C18.1665 12.0732 18.1975 11.7651 18.3214 11.611C18.4764 11.3336 18.7862 11.2104 19.282 11.2104H20.9242V8.18007H18.1665L18.1768 8.14925Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="8.14925" height="17.4627" fill="white" transform="translate(12.806 8.14925)" />
                    </clipPath>
                  </defs>
                </svg>
              </network>
              <network network="linkedin">
                <svg
                  class="social-media-icon"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.2985" cy="16.9999" r="16.2985" fill="#E2E2E2" />
                  <g clip-path="url(#clip0)">
                    <path d="M12.6381 23.985H9.69437V14.486H12.6381V23.985ZM11.097 13.303H11.0797C10.0061 13.303 9.31342 12.5723 9.31342 11.6676C9.31342 10.7281 10.0234 10.0148 11.1143 10.0148C12.2052 10.0148 12.8805 10.7281 12.8979 11.6676C12.8979 12.5723 12.2052 13.303 11.097 13.303ZM24.4477 23.985H21.1057V19.0615C21.1057 17.7741 20.5862 16.9042 19.4261 16.9042C18.5429 16.9042 18.0581 17.4957 17.833 18.0699C17.7464 18.2786 17.7637 18.557 17.7637 18.8527V23.985H14.439C14.439 23.985 14.4736 15.2863 14.439 14.5034H17.7464V15.9996C17.9369 15.3559 18.9931 14.4164 20.6901 14.4164C22.7854 14.4164 24.4304 15.7734 24.4304 18.7136V23.985H24.4477Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="15.1343" height="13.9701" fill="white" transform="translate(9.31342 10.0148)" />
                    </clipPath>
                  </defs>
                </svg>
              </network>
              <network network="twitter">
                <svg
                  class="social-media-icon"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.2985" cy="16.2985" r="16.2985" fill="#E2E2E2" />
                  <path d="M22.5981 13.1254C22.5981 18.7468 18.8553 22.7947 13.3505 22.9724C11.0225 23.1501 9.42765 22.4521 8 21.3989C9.59486 21.5766 11.7428 21.0563 12.7974 19.9904C11.2026 19.9904 10.3023 19.1021 9.77492 17.8966H11.2026C9.77492 17.3637 8.69453 16.3104 8.69453 14.5593C9.0418 14.7369 9.40193 14.9019 10.1222 14.9019C8.8746 14.204 8.1672 11.9199 9.05466 10.5113C10.6495 12.2625 12.6045 13.8487 15.8328 14.0136C14.9325 10.5113 19.5756 8.73483 21.5305 11.0316C22.4309 10.854 22.9582 10.5113 23.6527 10.1434C23.4727 11.0316 22.9453 11.5519 22.2251 11.8945C22.9325 11.8945 23.4727 11.7168 24 11.3742C23.8328 12.0722 23.1254 12.7828 22.5981 13.1254Z" fill="white" />
                </svg>
              </network>
            </div>
          </social-sharing>
          <div class="blog-post-body col-md-7">
            <h2>{{ post.subtitle }}</h2>
            <div class="spacer-red" />
            <div
              class="body-text"
              v-html="$md.render(post.body)"
            />
          </div>
          <div class="blog-post-sidebar col-md-4">
            <input v-model="search" :placeholder="blog.search">
            <img class="blog-post-avatar" src="/images/avatar-blog.png" alt="Cavaon avatar">
            <p class="blog-about">
              {{ blog.blogAbout }}
            </p>
            <a href="/about">{{ blog.aboutLink }}</a>
            <div class="spacer" />
            <article-list :articles="posts" page="blog-post" />
          </div>
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
                    v-model="subscriberFirstname"
                    type="text"
                    :placeholder="blog.firstnamePlaceholder"
                    name="subscriberFirstname"
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
import HeaderStandard from '../../components/HeaderStandard.vue'
import HeaderMobile from '../../components/HeaderMobile.vue'
import ArticleList from '../../components/blog/Article-list.vue'
import Footer from '../../components/Footer'
import blog from '../../static/content/blog.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    ArticleList,
    Footer
  },
  data() {
    const context = require.context('~/content/blog/', false, /\.json$/)
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
      filename: `${key}`
    }))
    return {
      posts,
      blogDate: Date,
      image: '',
      post: {},
      subscriberFirstname: '',
      subscriberLastname: '',
      subscriberEmail: '',
      blog: blog,
      showModal: false,
      url: '',
      readTime: 0,
      search: ''
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
    this.url = this.$route.path
    this.readTime = this.calculateReadTime(this.post.body)
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
      if (e.pageX < modal.left || e.pageX > modal.right || e.pageY < modal.top || e.pageY > modal.bottom) {
        this.closeModal()
      }
    },
    calculateReadTime: function (article) {
      const words = article.split(' ').length
      const readTime = Math.round(words / 200)
      return readTime
    },
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
  display: block !important;
}
#blog-post .top-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.grey-spacer {
  background-color: #494949;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  margin: 7px;
}
#blog-post .liner {
  display: block;
  width: 37px;
  margin: 0 auto 25px;
}
.blog-top-image {
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  background-size: cover;
  margin-bottom: 25px;
}
.blog-post {
  text-align: justify;
  margin-top: 80px;
}
.social-media, .blog-post-sidebar {
  margin-top: 80px;
}
.blog-post p {
  margin-bottom: 15px;
}
.blog-post h1 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  line-height: 35px;
}
.blog-post-sidebar .blog-post-avatar {
  width: 100px;
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
.social-media-icon {
  margin-bottom: 15px;
  margin-left: 5px;
}
.social-media-icon circle:hover {
  fill: #FFC716;
}
.blog-post-sidebar input {
  height: 40px;
  border: 1px solid #E2E2E2;
  border-radius: 49px;
  background-image: url('/images/magnify.png');
  background-repeat: no-repeat;
  background-position: 10px;
  padding-left: 35px;
}
.blog-post-sidebar img {
  margin: 25px 0 35px;
}
.blog-post-sidebar p {
  margin-bottom: 25px;
  color: #494949;
  text-align: left;
}
.blog-post-sidebar a, .blog-post-sidebar .btn-view-all {
  color: #FFC615;
  font-size: 14px;
  font-weight: 500;
}
.blog-post-sidebar .btn-view-all {
  padding: 0;
  margin-top: 20px;
}
.blog-post-sidebar .spacer {
  border-bottom: 1px solid #E2E2E2;
  height: 20px;
}
.blog-post-sidebar h3 {
 font-size: 15px;
 font-weight: 500;
 margin: 25px 0;
}
.blog-post-sidebar .keywords {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #808080
}
.blog-inner-section .keywords span {
  border: 1px solid #E2E2E2;
  padding: 7px 14px;
  margin-right: 12px;
  margin-bottom: 12px;
  font-size: 13px;
  color: #808080;
}
.blog-inner-section .keywords span:hover,
.blog-inner-section .keywords span.hover,
.blog-inner-section .keywords span:active,
.blog-inner-section .keywords span.active {
  color: #FFF;
  background-color: #582C87;
  cursor: pointer;
}
.blog-post-sidebar .blog-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
