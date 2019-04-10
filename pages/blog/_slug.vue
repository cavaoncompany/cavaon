<template>
  <div class="blog-post">
    <HeaderStandard />
    <div class="container">
      <div class="blog-content">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.summary }}</h2>
        <p class="description-tag">
          TL;DR:
        </p>
        <p class="description-text">
          {{ post.description }}
        </p>
        <hr>
        <nuxtdown-body class="body" :body="post.body" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../../components/HeaderStandard'
import Footer from '../../components/Footer'

export default {
  components: {
    HeaderStandard,
    Footer
  },
  head: function () {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.keywords
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.fullURL
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'image',
          content: this.imageURL
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageURL
        }
      ]
    }
  },
  computed: {
    imageURL: function () {
      return `${process.env.BASE_URL}${this.post.thumbnail}`
    },
    fullURL: function () {
      return `${process.env.BASE_URL}${this.$route.path}/`
    }
  },
  asyncData: async ({ app, route }) => ({
    post: await app.$content('posts').get(route.path)
  })
}
</script>
