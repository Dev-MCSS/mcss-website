<script setup>
import CloudImage from '@/components/CloudImage.vue';

const props = defineProps({
    type: Object
})
</script>

<template>
    <div class="content-wrapper">
        <h2>{{  type.span }}</h2>

        <div class="sponsor-grid">
            <div v-for="(sponsor, index) in type.items" :key="index" class="sponsor-card">
				<CloudImage
					:imageName="sponsor.image"
					objectPosition="top"
					class="sponsor-image"
				/>
                <div class="sponsor-info">
				    <p class="sponsor-title">{{ sponsor.name }}</p>
                    <span>{{  sponsor.discount }}</span>

                    <p class="sponsor-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        <div v-if="sponsor.address">
                            <a
                                :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sponsor.name + ' ' + sponsor.address)}`"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ sponsor.address }}
                            </a>
                        </div>

                        <div v-else-if="sponsor.addresses" class="sponsor-addresses">
                            <div v-for="(addr, index) in sponsor.addresses" :key="index">
                                <a
                                    :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sponsor.name + ' ' + addr)}`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ addr }}
                                </a>
                            </div>
                        </div>

                        <!-- If sponsor has a custom link (e.g., Instagram) -->
                        <div v-else-if="sponsor.link">
                            <a
                                :href="sponsor.link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Instagram
                            </a>
                        </div>
                    </p>
                </div>
			</div>
        </div>
    </div>

</template>

<style scoped>
.sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-lg);
}

/* Each card takes 3 per row minus gaps */
.sponsor-card {
	box-sizing: border-box;
	display: flex;
	gap: var(--padding-md);
    width: min(100%, 400px);
    background-color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    padding: var(--padding-md);
    border-radius: var(--border-radius-md);
}

.sponsor-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.sponsor-address {
    font-size: var(--font-size-sm);
    color: var(--text-color-muted);
    margin-top: auto;
}
.sponsor-address a {
    color: var(--text-color-muted);
    text-decoration: underline;
}

.sponsor-addresses {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    width: clamp(100px, 100%, 150px);
    display: block;
}

</style>