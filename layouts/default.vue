<template>
  <div class="container">
    <header class="header">
      <h1 class="title">
        <a 
          href="/" 
          class="logo">E=MC²</a>
      </h1>
      <h2 class="desc">Coding changes the world.</h2>
      <nav class="links">
        <button class="social-button">menu</button>
        <ul class="social-links hide-links">
          <li>
            <a href="https://github.com/node-developer">Github</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <nuxt/>
    </main>
    <aside class="aside">
      <Categories/>
      <Archives/>
      <Tags/>
    </aside>
  </div>
</template>

<script>
import Archives from '@/components/Archives'
import Categories from '@/components/Categories'
import Tags from '@/components/Tags'

export default {
  components: {
    Archives,
    Categories,
    Tags
  }
}
</script>
