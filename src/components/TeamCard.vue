<script setup>
import CloudImage from "@/components/CloudImage.vue"

const props = defineProps({
    teamMember: Object,
});

</script>

<template>
    <div class="member-card">
        <div class="member-image-wrapper">
            <CloudImage class="member-image" :imageName="'team/' + teamMember.image" />
        </div>
            <div class="member-details">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-right-icon lucide-corner-down-right"><path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
            <div>
                <span>{{ teamMember.name }}</span>
                <p class="muted">{{ teamMember.position }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.member-card {
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
    width: 100%;
}

.member-image-wrapper {
    width: clamp(25vw, 140px, 200px);
    padding: var(--padding-md);
    max-width: 100%;
}

.member-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
}

.member-details {
    display: flex;
    gap: var(--padding-sm);
    margin-left: var(--padding-sm);
    align-items: flex-start;
	max-width: 100%;
    width: 100%;
	flex-wrap: nowrap;
}

.member-details > div {
	white-space: normal;
	word-break: break-word;
    overflow-wrap: break-word;
	flex: 1;
	min-width: 0;
}



</style>