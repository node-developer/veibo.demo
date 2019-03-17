<template>
  <Article :article-id="$route.params.id"/>
</template>
<script>
import Article from '@/components/Article'

export default {
  validate({ params }) {
    return !!params.id
  },

  components: {
    Article
  }
}
</script>
