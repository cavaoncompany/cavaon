<template>
  <section
    role="region"
    class="blog-inner-section"
  >
    <div v-if="page === 'blog' && sortedArticles.length > 0 && featuredArticle" class="row card-container">
      <featured-article-card
        :lang="featuredArticle.lang"
        :title="featuredArticle.title"
        :subtitle="featuredArticle.subtitle"
        :description="featuredArticle.description"
        :tags="featuredArticle.tags"
        :date="featuredArticle.date"
        :thumbnail="featuredArticle.thumbnail"
        :image="featuredArticle.image"
        :url="featuredArticle.url"
        :body="featuredArticle.body"
        :filename="featuredArticle.filename"
        :extract="getExtract(featuredArticle.body)"
      />
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
        :url="article.url"
        :body="article.body"
        :filename="article.filename"
        :page="page"
        :extract="getExtract(article.body)"
        class="col-md-4"
      />
      <article class="viewMore">
        <div class="btn-wrap text-center">
          <button
            v-if="viewAll === false"
            id="viewMore"
            class="btn"
            name="viewMore"
            type="button"
            @click="updateView()"
          >
            {{ blog.viewMore }}
          </button>
          <button
            v-if="viewAll === true"
            id="viewMore"
            class="btn"
            name="viewMore"
            type="button"
            @click="updateView()"
          >
            {{ blog.viewLess }}
          </button>
        </div>
      </article>
    </div>
    <div v-if="page === 'homepage' && homepagePosts.length > 0" class="row card-container">
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
        :url="article.url"
        :body="article.body"
        :filename="article.filename"
        :extract="getExtract(article.body)"
        :blogcount="blogCount"
        :page="page"
        class="col-md-6"
      />
    </div>
  </section>
</template>

<script>
import blog from '../../static/content/blog.json'
import ArticleCard from './Article-card.vue'
import FeaturedArticleCard from './Featured-article-card.vue'

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
      filteredPosts: [],
      blog: blog,
      viewAll: true,
      blogCount: 0
    }
  },
  created() {
    this.keywords = this.getKeywords(this.articles)
    this.blogCount = this.articles.length
    this.sortedArticles = this.orderPostsByDate()
    this.featuredArticle = this.sortedArticles[0]
    if (this.sortedArticles.length >= 4) {
      this.homepagePosts = this.prepareLatestPosts(this.sortedArticles, 4)
    } else {
      this.homepagePosts = this.prepareLatestPosts(this.sortedArticles, this.sortedArticles.length)
    }
    this.updateView()
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
    getKeywords: function (posts) {
      const keywords = []
      for (let i = 0; i < posts.length; i++) {
        const tags = posts[i].tags
        for (let j = 0; j < tags.length; j++) {
          if (keywords.indexOf(tags[j].toLowerCase()) === -1) {
            keywords.push(tags[j])
          }
        }
      }
      return keywords
    },
    orderPostsByDate: function () {
      const currentArticles = JSON.parse(JSON.stringify(this.articles))
      const sortedArticles = currentArticles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })
      const newSortedArticles = this.createPaths(sortedArticles)
      return newSortedArticles
    },
    prepareLatestPosts: function (sortedPosts, numberOfPosts) {
      const limitedPosts = []
      for (let i = 0; i < numberOfPosts; i++) {
        limitedPosts.push(sortedPosts[i])
      }
      return limitedPosts
    },
    filterByKeyword: function (keyword) {
      this.sortedArticles = this.orderPostsByDate()
      this.sortedArticles = this.sortedArticles.filter((result) => {
        result.tags = result.tags.filter(tag => tag.toLowerCase() === keyword.toLowerCase())
        return result.tags.length > 0
      })
    },
    updateView: function () {
      this.viewAll = !this.viewAll
      if (this.viewAll === true) {
        this.sortedArticles = this.orderPostsByDate()
      } else {
        this.sortedArticles = this.orderPostsByDate()
        if (this.sortedArticles.length >= 6) {
          this.sortedArticles = this.prepareLatestPosts(this.sortedArticles, 6)
        } else {
          this.sortedArticles = this.prepareLatestPosts(this.sortedArticles, this.sortedArticles.length)
        }
      }
    },
    createPaths: function (articles) {
      for (let i = 0; i < articles.length; i++) {
        const path = articles[i].slug.toLowerCase().replace(/ /g, '-')
        articles[i].url = path
      }
      return articles
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
#viewMore {
  border: 1px solid #FFC716;
  color: #FFC716;
}
.viewMore {
  width: 100%;
  margin-bottom: 80px;
}
</style>
