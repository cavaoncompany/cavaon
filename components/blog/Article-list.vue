<template>
  <section
    role="region"
    class="blog-inner-section"
  >
    <div v-if="page === 'blog'" class="row card-container">
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
        v-for="(article, i) in sortedArticles"
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
    <div v-if="page === 'homepage'" class="row card-container">
      <article-card
        v-for="(article, i) in homepagePosts"
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
        class="col-md-6"
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
    },
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      featuredArticle: Object,
      sortedArticles: [],
      homepagePosts: [],
      keywords: []
    }
  },
  created() {
    // find all keywords used in the various articles
    this.keywords = this.getKeywords(this.articles)
    // order list of articles by date
    this.sortedArticles = this.orderPostsByDate()
    // use the latest article as feature
    this.featuredArticle = this.articles[0]
    // only show six latest articles first
    this.homepagePosts = this.prepareFourLatestPosts(this.sortedArticles)
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
      
    },
    orderPostsByDate: function() {
      const sortedArticles = this.articles.sort(function(a,b){
      return new Date(b.date) - new Date(a.date)
      })
      return sortedArticles
    },
    prepareFourLatestPosts: function (sortedPosts) {
      const fourPosts = []
      for (let i = 0; i < 4; i++) {
        fourPosts.push(sortedPosts[i])
      }
      return fourPosts
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
