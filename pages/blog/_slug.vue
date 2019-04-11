<template>
  <div class="blog-post">
    <!-- <HeaderStandard /> -->
    <div class="container">
      <div class="blog-content">
        <h1>{{ post.title }}</h1>
        <div class="spacer-red-big" />
        <p class="date">
          {{ blogDate }}
        </p>
        <p class="tags">
          <span v-for="(tag, i) in post.tags" :key="i">{{ tag }}</span>
        </p>
        <img :src="post.image" :alt="post.title">
        <div class="blog-post-body">
          <h2>{{ post.subtitle }}</h2>
          <div class="spacer-red" />
          <p class="body-text">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { markdown } from 'markdown'
// import HeaderStandard from '../../components/HeaderStandard'
// import Footer from '../../components/Footer'

export default {
  components: {
    // HeaderStandard,
    // Footer
  },
  async asyncData({ params }) {
    const post = await import('~/content/blog/' + params.slug + '.json')
    return { post }
  },
  data() {
    return {
      blogDate: Date
    }
  },
  computed: {
    parsedBody() {
      return markdown.toHTML(this.post.body)
    },
    trimmedDescription() {
      return (this.post.description + '').slice(0, 150)
    }
  },
  head() {
    return {
      title: `${ (this.post && this.post.title) || 'Post' }`,
      meta: [
        {
          name: 'description',
          content: `${ (this.trimmedDescription) || '' }`,
          hid: 'description'
        }
      ]
    }
  },
  created() {
    const date = new Date(this.post.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric'}
    this.blogDate = date.toLocaleDateString('en-AU', options).toUpperCase()
  }
}
</script>

<style>
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
.blog-post {
  text-align: center;
  margin-top: 80px;
}
.blog-post h1 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 10px;
}
.blog-post .tags {
  margin-bottom: 50px;
}
.blog-post h2 {
  color: #CCCCCE;
  font-size: 24px;
  line-height: 2.3rem;
}
.blog-post-body {
  width: 80%;
  margin: 0 auto;
  letter-spacing: 10px;
  margin-top: 80px;
}
.blog-post .body-text {
  letter-spacing: normal;
  color: black;
}
</style>

