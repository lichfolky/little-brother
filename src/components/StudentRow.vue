<script setup>
import { onMounted, ref } from 'vue'
import { useRepoStore } from '../stores/repo'
import Commits from './Commits.vue';

const props = defineProps({
    name: String,
    surname: String,
    num: Number,
    mark: Number,
    fotoUrl: String
})

const isClosed = ref(true);

const store = useRepoStore()
onMounted(() => {
    store.getCommits();
})

</script>

<template>

    <div class="row">
        <img v-if="fotoUrl" src="" alt="">
        <div>
            <h2>{{ name }} {{ surname }}</h2>
            <h3><a :href="store.repoLink">{{ store.user }}/{{ store.repo }}</a></h3>
        </div>
        <div class="commits">
            <Commits :commits="store.commits" :closed="isClosed"></Commits>
        </div>
        <div class="mark">
            <div>
                {{ mark }}
            </div>
            <div>
                <h3><a :href="store.sandboxLink">G</a></h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    gap: 2rem;
    border: 2px solid black;
    padding: 1rem;
}

.commits {
    width: 30%;
}
</style>