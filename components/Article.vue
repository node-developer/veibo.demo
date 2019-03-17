<template>
  <article class="post">
    <h4 class="post-cat">
      <nuxt-link
        :to="{ name: 'filter-key', params: { filter: 'categories', key: article.cat } }"
      >{{ article.cat }}</nuxt-link>
    </h4>

    <h2 class="post-title">{{ article.title }}</h2>
    <ul class="post-date">
      <li>{{ article.date }}</li>
      <li>{{ article.author }}</li>
    </ul>
    <div 
      class="post-content" 
      v-html="article.content"/>
  </article>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  computed: mapState({
    article(state) {
      return state.articles.find(o => o.id == this.articleId)
    }
  })
}
</script>
