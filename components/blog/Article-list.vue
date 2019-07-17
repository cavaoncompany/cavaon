<template>
  <section
    role="region"
    class="blog-inner-section"
  >
    <div v-if="page === 'blog' && sortedArticles.length > 0" class="row blog-home card-container">
      <div class="articles col-md-8">
        <div class="blog-header">
          <h2>{{ blogSubheader }}</h2>
          <div class="btn btn-search mobile-banner" @click="openSearch()">
            <img src="/images/magnify.png" alt="search">
          </div>
          <div class="btn btn-filter mobile-banner" @click="openFilter()">
            <img src="/images/filter.svg" alt="filter results">
          </div>
        </div>
        <div v-if="searchOpen === true" class="search-box">
          <input v-model="search" :placeholder="blog.search">
          <button class="btn btn-search-now">{{ blog.searchButtonText }}</button>
        </div>
        <div v-if="filterOpen === true" class="filter-box">
          <p class="keywords">
            <span v-for="(keyword, i) in keywords" :key="i" @click="filterByKeyword(keyword)">{{ keyword }}</span>
          </p>
        </div>
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
          class="col-md-6"
        />
        <article v-if="showMoreVisible === true" class="viewMore">
          <div class="btn-wrap text-center">
            <button
              v-if="viewAll === false"
              id="viewMore"
              class="btn btn-purple"
              name="viewMore"
              type="button"
              @click="updateView()"
            >
              {{ blog.viewMore }}
            </button>
            <button
              v-if="viewAll === true"
              id="viewMore"
              class="btn btn-purple"
              name="viewMore"
              type="button"
              @click="updateView()"
            >
              {{ blog.viewLess }}
            </button>
          </div>
        </article>
      </div>
      <div class="blog-sidebar col-md-4">
        <input v-model="search" :placeholder="blog.search">
        <img src="/images/avatar-blog.png">
        <p class="blog-about">
          {{ blog.blogAbout }}
        </p>
        <a href="/about">{{ blog.aboutLink }}</a>
        <div class="spacer" />
        <div class="blog-wrapper">
          <h3>{{ blog.topics }}</h3>
          <div class="btn btn-view-all">
            {{ blog.clearSelection }}
          </div>
        </div>
        <p class="keywords">
          <span v-for="(keyword, i) in keywords" :key="i" @click="filterByKeyword(keyword)">{{ keyword }}</span>
        </p>
        <div class="btn btn-view-all">
          {{ blog.viewAll }}
        </div>
        <div class="spacer" />
      </div>
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
    <div v-if="page === 'blog-post' && blogPostPosts.length > 0" class="card-container">
      <article-card
        v-for="(article, i) in blogPostPosts"
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
      />
    </div>
  </section>
</template>

<script>
import blog from '../../static/content/blog.json'
import ArticleCard from './Article-card.vue'

export default {
  components: {
    ArticleCard
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
      blogPostPosts: [],
      keywords: [],
      filteredPosts: [],
      blog: blog,
      viewAll: true,
      blogCount: 0,
      showMoreVisible: false,
      blogSubheader: blog.latest,
      search: '',
      searchOpen: true,
      filterOpen: false
    }
  },
  created() {
    this.keywords = this.getKeywords(this.articles)
    this.blogCount = this.articles.length
    this.sortedArticles = this.orderPostsByDate()
    this.featuredArticle = this.sortedArticles[0]
    if (this.sortedArticles.length >= 4) {
      this.homepagePosts = this.prepareLatestPosts(this.sortedArticles, 4)
      this.blogPostPosts = this.prepareLatestPosts(this.sortedArticles, 3)
    } else {
      this.homepagePosts = this.prepareLatestPosts(this.sortedArticles, this.sortedArticles.length)
      this.blogPostPosts = this.prepareLatestPosts(this.sortedArticles, this.sortedArticles.length)
    }
    this.updateView()
  },
  methods: {
    openSearch() {
      if (this.searchOpen === false) {
        this.searchOpen = true
      } else {
        this.searchOpen = false
      }
    },
    openFilter() {
      if (this.filterOpen === false) {
        this.filterOpen = true
      } else {
        this.filterOpen = false
      }
    },
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
          this.showMoreVisible = true
        } else {
          this.sortedArticles = this.prepareLatestPosts(this.sortedArticles, this.sortedArticles.length)
          this.showMoreVisible = false
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
.blog-inner-section h2 {
  font-size: 15px;
  width: 100%;
  font-weight: 500;
  padding: 7px 14px;
}
.blog-header {
  display: flex;
}
#viewMore {
  background-color: #472D86;
  color: #FFF;
  border-radius: 49px;
  font-size: 13px;
  width: 176px;
}
.viewMore {
  width: 100%;
  margin-bottom: 80px;
}
.blog-sidebar input,
.search-box input {
  height: 40px;
  border: 1px solid #E2E2E2;
  border-radius: 49px;
  background-image: url('/images/magnify.png');
  background-repeat: no-repeat;
  background-position: 10px;
  padding-left: 35px;
}
.blog-sidebar img {
  margin: 25px 0 35px;
}
.blog-sidebar p {
  margin-bottom: 25px;
  color: #494949;
}
.blog-sidebar a, .blog-sidebar .btn-view-all {
  color: #FFC615;
  font-size: 14px;
  font-weight: 500;
}
.blog-sidebar .btn-view-all {
  padding: 0;
  margin-top: 20px;
}
.blog-sidebar .spacer {
  border-bottom: 1px solid #E2E2E2;
  height: 20px;
}
.blog-sidebar h3 {
 font-size: 15px;
 font-weight: 500;
 margin: 25px 0;
}
.blog-sidebar .keywords {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #808080
}
.blog-inner-section .keywords span {
  border: 1px solid #E2E2E2;
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
  background-color: #582C87;
  cursor: pointer;
}
.blog-sidebar .blog-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.active-topic {
  color: #FFF;
  background-color: #582C87;
  cursor: pointer;
}
.blog-home .articles h2 _{
  text-align: left;
}
.search-box, .filter-box {
  width: 100%;
}
</style>
