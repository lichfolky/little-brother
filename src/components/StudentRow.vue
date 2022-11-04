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

const isClosed = ref(false);

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

        </div>
        <div class="commits-wrapper">
            <div class="commits-header">

                <h3>
                    <a :href="store.repoLink" target="_blank" rel="noopener noreferrer">
                        {{ store.user }}/{{ store.repo }}
                    </a>
                </h3>
                <div class="commits-num">
                    {{ store.commits.length + " commits" }}
                </div>
            </div>
            <Commits :commits="store.commits" :closed="isClosed"></Commits>
        </div>
        <div class="mark">
            <div>
                {{ mark }}
            </div>
            <div>
                <h3><a :href="store.vsLink" target="_blank" rel="noopener noreferrer">VSCode</a></h3>
                <h3><a :href="store.codesandboxLink" target="_blank" rel="noopener noreferrer">Codesandbox</a></h3>
                <h3><a :href="store.htmlpreviewLink" target="_blank" rel="noopener noreferrer">HTMLpreview</a></h3>
                <h3><a :href="store.booleanLink" target="_blank" rel="noopener noreferrer">Boolean</a></h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    border: 2px solid black;
    padding: 1rem;
}

.commits-header {
    display: flex;
    justify-content: space-between;
}

.commits-num {
    color: gray;
    text-align: right;
}
</style>