<template>
  <section
    role="region"
    class="blog-inner-section"
  >
    <div class="row card-container">
      <featured-article-card
        :lang="featuredArticle.lang"
        :title="featuredArticle.title"
        :subtitle="featuredArticle.subtitle"
        :description="featuredArticle.description"
        :tags="featuredArticle.tags"
        :date="featuredArticle.date"
        :thumbnail="featuredArticle.thumbnail"
        :image="featuredArticle.image"
        :url="featuredArticle._path"
        :body="featuredArticle.body"
        :extract="getExtract(featuredArticle.body)" />
      <article-card
        v-for="(article, i) in articles"
        :key="i"
        :lang="article.lang"
        :title="article.title"
        :subtitle="article.subtitle"
        :description="article.description"
        :tags="article.tags"
        :date="article.date"
        :thumbnail="article.thumbnail"
        :url="article._path"
        :body="article.body"
        :extract="getExtract(article.body)"
        class="col-md-4"
      />
    </div>
  </section>
</template>

<script>
import ArticleCard from './Article-card'
import FeaturedArticleCard from './Featured-article-card'

export default {
  components: {
    ArticleCard,
    FeaturedArticleCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      featuredArticle: Object,
      otherArticles: [],
      keywords: []
    }
  },
  created() {
    this.featuredArticle = this.articles[0]
    this.keywords = this.getKeywords(this.articles)
  },
  methods: {
    getExtract(text) {
      if (text && typeof text === 'string') {
        const trimmedText = text.slice(0, 100)
        const cleanedText = this.cleanExtract(trimmedText)
        return (cleanedText + '...')
      }
      return ''
    },
    cleanExtract(text) {
      if (text && typeof text === 'string') {
        // const tags = []
        return (
          // text.replace(
          //   /([#\*=_<>`\[\]]+?)|(\(.+\))|[\.\s]+$/gi, // TODO, escape html tags
          //   ''
          // )
          text.replace(/\s\s/, ' ')
            .replace(/\s,/, ',')
        )
      }
      return ''
    },
    getKeywords: function(posts) {
      
    }
  }
}
</script>

<style>
.card-container {
  margin-top: 70px;
}
.blog-inner-section {
  width: 100%;
}
</style>
