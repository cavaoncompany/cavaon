<template>
  <div id="blog-post" class="blog-post">
    <header-mobile />
    <header-standard page="blog-detail" />
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
        {{this.image}}
        <div class="blog-top-image" :style="`background-image:url(` + post.image + `)`"></div>
        <div class="blog-post-body">
          <h2>{{ post.subtitle }}</h2>
          <div class="spacer-red" />
          <div v-html="$md.render(post.body)" class="body-text"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { markdown } from 'markdown'
import HeaderStandard from '../../components/HeaderStandard'
import HeaderMobile from '../../components/HeaderMobile'
import Footer from '../../components/Footer'

export default {
  name: 'blog-post',
  components: {
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  async asyncData({ route }) {
    let post = {}
    const context = require.context('~/content/blog/', false, /\.json$/)
    const postie = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
      filename: `${key}`
    }))
    const posts = postie.filter(a => a.slug.toLowerCase().replace(/ /g, '-') === route.params.url)
    if(posts.length > 0){
      post = posts[0]
    }
    return {post}
  },
  data() {
    return {
      blogDate: Date,
      image: '',
      post: {}
    }
  },
  computed: {
    parsedBody() {
      return markdown.toHTML(this.post.body)
    },
    trimmedDescription() {
      if(typeof(this.post.description) !== "undefined") {
        return (this.post.description + '').slice(0, 150)
      } else {
        return ('Cavaon blog post ')
      }
    }
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
  }
}
</script>

<style>
#standard-header {
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
</style>
