<template>
  <section class="aside-section tag">
    <h1>Tags</h1>

    <ul class="tag-list">
      <li 
        v-for="tag in tags" 
        :key="tag" 
        class="tag-list-item">
        <nuxt-link
          :to="{ name: 'filter-key', params: { filter: 'tags', key: tag }}"
          class="tag-list-link"
        >{{ tag }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['tags'])
  }
}
</script>
