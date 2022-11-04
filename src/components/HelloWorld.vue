<script setup>
import { ref, onMounted } from 'vue'

import { useRepoStore } from '../stores/repo'


const store = useRepoStore()

const userInput = ref(store.user)
const repoInput = ref(store.repo)

function confirmed() {
  console.log(userInput.value, repoInput.value)
  if (userInput.value != "" && repoInput.value != "") {
    store.$patch({ user: userInput.value, repo: repoInput.value });
  }
  store.getCommits();
}

</script>

<template>
  <div class="wrapper">
    <div class="form-wrap">
      <label for="user">user</label>
      <input type="text" v-model="userInput" id="user" @keyup.enter="confirmed">
      <label for="repo">repo</label>
      <input type="text" v-model="repoInput" id="repo" @keyup.enter="confirmed">
    </div>
    <button @click="confirmed">go!</button>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin-block-end: 1rem;
  height: 2rem;
}
</style>
