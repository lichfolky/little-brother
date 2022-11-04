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
    <div v-if="commits && closed" class="commit">
        <a :href="commits[0]?.url" target="_blank" rel="noopener noreferrer">
            {{ commits[0]?.message + " (" + dayjs(commits[0]?.date).fromNow() + ")" }}
        </a>
    </div>
    <template v-else>
        <div class="commit" v-for="commit of commits">
            <a :href="commit?.url" target="_blank" rel="noopener noreferrer">
                {{ commit?.message }}
            </a>
        </div>
    </template>
</template>

<style scoped>

</style>