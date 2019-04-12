<template>
  <section id="blog">
    <header-standard />
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="card-spacer align-center"/>
      <article-list :articles="posts" page="blog" />
    </div>
    <Footer />
  </section>
</template>

<script>
import ArticleList from '../../components/blog/Article-list'
import HeaderStandard from '../../components/HeaderStandard'
import Footer from '../../components/Footer'

const title = 'BLOG'
export default {
  name: title,
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Blog - Web development related posts by Cavaon.'
      }
    ]
  },
  components: {
    ArticleList,
    HeaderStandard,
    Footer
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/', false, /\.json$/)
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))
    return {
      title,
      posts
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
</style>
