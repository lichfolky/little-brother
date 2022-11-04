<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps({
    commits: Array,
    closed: Boolean
})
</script>

<template>
    <div v-if="commits && closed" class="commits">
        <div class="commit">
            <a :href="commits[0]?.url" target="_blank" rel="noopener noreferrer">
                "{{ commits[0]?.message }}"
            </a>
            <div class="commits-num">
                {{ commits.length + " commits" }}
            </div>
            <div class="commit-date">
                {{ dayjs(commits[0]?.date).fromNow() }}
            </div>
        </div>
    </div>
    <div v-else class="commits-list">
        <div class="commit" v-for="(commit, index) of commits">
            <a :href="commit?.url" target="_blank" rel="noopener noreferrer">
                "{{ commit?.message }}"
            </a>
            <!-- <div class="commits-num">
                {{ index }}
            </div> -->
            <div class="commit-date">
                - {{ dayjs(commit?.date).fromNow() }}
            </div>
        </div>
    </div>
</template>


<style scoped>
.commits-list>.commit {
    display: flex;
}

.commits>.commit {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: start;
}



.commits-num {
    color: gray;
}

.commit-date {
    color: gray;
    font-style: italic;
}

.commits>.commit-date {
    line-height: 1;
}
</style>