<template>
  <section class="posts">
    <article 
      v-for="article in articles" 
      :key="article.id" 
      class="post" 
      style>
      <h4 class="post-cat">
        <nuxt-link :to="{ name: 'filter-key', params: { filter: 'categories', key: article.cat } }">{{ article.cat }}</nuxt-link>
      </h4>

      <h1 class="post-title">
        <nuxt-link
          :to="{ name: 'article-id', params: { id: article.id } }"
        >{{ article.title }}</nuxt-link>
      </h1>

      <ul class="post-date">
        <li>{{ article.date }}</li>
        <li>{{ article.author }}</li>
      </ul>

      <div class="post-content">
        <p v-html="article.description" />
        <nuxt-link
          :to="{ name: 'article-id', params: { id: article.id } }"
          class="more-link"
        >Continue reading</nuxt-link>
      </div>
    </article>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['articles'])
  }
}
</script>
