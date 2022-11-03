<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { useRepoStore } from './stores/repo'

const store = useRepoStore()
</script>

<template>
  <header>
    <HelloWorld />
  </header>
  <main>
    <h1>{{ store.repo }}@{{ store.user }}</h1>
    <p v-for="commit of store.commits"> <a :href="commit?.url" target="_blank" rel="noopener noreferrer">{{
        commit?.message + " - " + commit?.date
    }}</a>
    </p>
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>