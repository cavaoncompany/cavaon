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
        <p class="keywords">
          <span v-for="(keyword, i) in keywords" :key="i" @click="filterByKeyword(keyword)">{{ keyword }}</span>
        </p>
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
      keywords: [],
      filteredPosts: []
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
      let keywords = []
      for (let i = 0; i < posts.length; i++) {
        const tags = posts[i].tags
        for (let j = 0; j < tags.length; j++) {
          if ( keywords.indexOf(tags[j].toLowerCase()) === -1) {
            keywords.push(tags[j])
          }
        }
      }
      return keywords
    },
    orderPostsByDate: function() {
      const currentArticles = JSON.parse(JSON.stringify(this.articles))
      const sortedArticles = currentArticles.sort(function(a,b){
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
    },
    filterByKeyword: function(keyword) {
      this.sortedArticles = this.orderPostsByDate()
      this.sortedArticles = this.sortedArticles.filter(result => {
        result.tags = result.tags.filter(tag => tag.toLowerCase() === keyword.toLowerCase())
        return result.tags.length > 0
      })
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
.blog-inner-section .keywords span {
  border: 1px solid #FFC716;
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
  background-color: #FFC716;
  cursor: pointer;
}
.blog-inner-section .keywords {
  margin: 0px 15px 45px 15px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
