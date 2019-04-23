<template>
  <div class="col-12">
    <a @click="openBlog()">
      <article class="featured-article-card card">
        <img :src="image" :alt="title">
        <div class="card-body">
          <div class="featured-top-line">
            <div class="date">{{ blogDate }}</div>
            <div class="grey-spacer" />
            <div class="read-time">{{ this.readTime }} min read</div>
          </div>
          <div class="card-spacer"/>
          <p class="card-title">
            {{ title }}
          </p>
          <p class="tags">
            <span v-for="(tag, i) in tags" :key="i">{{ tag }} </span>
          </p>
          <p class="seo-description">
            {{ description }}
          </p>
        </div>
      </article>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: () => ''
    },
    title: {
      type: String,
      required: true,
      default: () => ''
    },
    subtitle: {
      type: String,
      required: true,
      default: () => ''
    },
    description: {
      type: String,
      required: true,
      default: () => ''
    },
    tags: {
      type: Array,
      required: true,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: () => ''
    },
    thumbnail: {
      type: String,
      required: true,
      default: () => ''
    },
    image: {
      type: String,
      required: true,
      default: () => ''
    },
    body: {
      type: String,
      required: true,
      default: () => ''
    },
    filename: {
      type: String,
      required: false,
      default: () => ''
    },
    extract: {
      type: String,
      required: false,
      default: () => ''
    },
    lang: {
      type: String,
      required: true,
      default: () => 'EN'
    }
  },
  data() {
    return {
      blogDate: Date,
      readTime: 0
    }
  },
  created() {
    const date = new Date(this.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    this.blogDate = date.toLocaleDateString('en-AU', options).toUpperCase()
    this.thumbnail = this.thumbnail.replace('/static/', '/')
    this.readTime = this.calculateReadTime(this.body)
  },
  computed: {
    language() {
      return (this.lang + '').toLowerCase() === 'en' && 'English'
    },
    langClean() {
      return (this.language + '').slice(0, 2).toUpperCase()
    }
  },
  methods: {
    calculateReadTime: function (article) {
      const words = article.split(' ').length
      const readTime = Math.round(words / 200)
      return readTime
    },
    openBlog: function () {
      this.$router.push({
        path: `${this.url}`,
        params: {
          filename: this.filename
        },
        props: {
          filename: this.filename
        }
      })
    }
  }
}
</script>

<style>
.featured-article-card {
  display: flex;
  margin-bottom: 40px;
}
.featured-article-card .card-title {
  color: #494949;
  font-size: 18px;
}
.featured-article-card .featured-top-line {
  display: flex;
  color: #494949;
  font-weight: 500;
}
.featured-article-card .grey-spacer {
  background-color: #494949;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  margin: 7px;
}
</style>
