<template>
  <section>
    <h1>{{ title }}</h1>
    <article-list :articles="posts"></article-list>
  </section>
</template>

<script>
import  ArticleList from '../../components/blog/Article-list'
const title = 'Blog'
export default {
  name: title,
  head: {
    title,
    meta: [
      { hid: 'description', name: 'description',
        content: 'Blog - Web development related posts by Cavaon.'
      }
    ]
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      title,
      posts
    }
  },
  components: {
    ArticleList,
  }
}
</script>