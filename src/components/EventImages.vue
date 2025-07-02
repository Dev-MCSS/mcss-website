<script setup>
import CloudImage from '@/components/CloudImage.vue';

const props = defineProps({
    year: Object
})
</script>

<template>
    <div class="content-wrapper">
        <h2>{{  year.span }}</h2>

        <div class="event-grid">
            <div v-for="(event, index) in year.items" :key="index" class="event-card">
				<CloudImage
					:imageName="event.image"
					objectPosition="center"
					class="event-image"
				/>
				<p class="event-title">{{ event.title }}</p>
			</div>
        </div>
    </div>

</template>

<style scoped>
.event-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-sm);
}


/* Each card takes 3 per row minus gaps */
.event-card {
	flex: 0 0 calc((100% - 2 * var(--padding-sm)) / 3);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

@media (max-width: 1024px) {
	.event-card {
		flex: 0 0 calc((100% - var(--padding-sm)) / 2);
	}
}

img {
    aspect-ratio: 5 / 4;
    object-fit: cover;
    border-radius: var(--border-radius-md);
    width: 100%;
    display: block;
}

</style>