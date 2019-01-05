<template>
  <section class="aside-section">
    <h1>Archives</h1>

    <ul class="archive-list">
      <li 
        v-for="archive in archives" 
        :key="archive" 
        class="archive-list-item">
        <nuxt-link
          :to="{ name: 'filter-key', params: { filter: 'archives', key: archive }}"
          class="archive-list-link"
        >{{ archive }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['archives'])
  }
}
</script>
