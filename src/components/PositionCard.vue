<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    position: Object,
});

const isInfoOpen = ref(false);

const route = useRoute()

watch(route, () => {
    // Close the menu when navigating to a new route
    isInfoOpen.value = false;
})

function toggleInfo() {
    isInfoOpen.value = !isInfoOpen.value
}

</script>

<template>
    <div class="position-card" @click="toggleInfo">
        <div class="position-title">
            <p>{{ position.name }}</p>
             <div class="dropdown-arrows">
                <svg v-if="isInfoOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                <svg v-if="!isInfoOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
             </div>
        </div>
        <div v-if="isInfoOpen" class="position-wrapper">
            {{ position.description }}
            <ul>
                <li v-for="bullet in position.responsibilities" :key="bullet">
                    <p>{{ bullet }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.position-card {
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
    background-color: var(--gray-color);
    padding: var(--padding-xs) var(--padding-sm);
    border-radius: var(--border-radius-sm);
}

.position-card:hover {
    background-color: var(--gray-color-hover);
}

.position-title {
    display: flex;
    cursor: pointer;
}

.dropdown-arrows {
    margin-left: auto;
}

.position-wrapper {
    background-color: var(--background-color);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
}

ul {
    list-style: disc;
    margin-left: var(--padding-md);

}

</style>