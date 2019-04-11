<template>
  <section id="blog">
    <div class="container">
      <!-- <header class="row">
        <article class="col-md-2 text-left">
          <a href="/"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png" @click="closeForm()"></a>
        </article>
      </header> -->
      <h1>{{ title }}</h1>
      <blog-article-list :articles="posts" />
    </div>
  </section>
</template>

<script>
import BlogArticleList from '../../components/blog/Article-list'
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
    BlogArticleList
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
  background: #f1f1f1;
  padding-top: 80px;
}
#blog h1 {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
</style>
