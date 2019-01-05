<template>
  <section class="aside-section">
    <h1>Categories</h1>
    <ul 
      v-for="category in categories" 
      :key="category" 
      class="category-list">
      <li class="category-list-item">
        <nuxt-link
          :to="{ name: 'filter-key', params: { filter: 'categories', key: category }}"
          class="category-list-link"
        >{{ category }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['categories'])
  }
}
</script>
