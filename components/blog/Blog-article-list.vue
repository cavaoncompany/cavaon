<template>
  <section
    role="region"
  >
    <div class="row card-container">
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
        :extract="getExtract(article.body)"
        class="col-md-4"
      />
    </div>
  </section>
</template>

<script>
import ArticleCard from './Article-card'

export default {
  components: {
    ArticleCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
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
    }
  }
}
</script>

<style>
.card-container {
  margin-top: 70px;
}
</style>
