<template>
  <div>
    <h1>blog</h1>
    <ul>
    <li v-for="post in posts" :key="post">
      <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return {
      posts: await app.$content('/blog').getAll()
    }
  }
}
</script>
