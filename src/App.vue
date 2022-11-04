<script setup>
import HelloWorld from './components/HelloWorld.vue'
import StudentRow from './components/StudentRow.vue';

const index = 1;
</script>

<template>
  <header>
    <HelloWorld />
  </header>
  <main>
    <StudentRow name="Mattia" surname="Folcarelli" :num="index" fotoUrl="" mark=3 />
  </main>
</template>

<style scoped>

</style>