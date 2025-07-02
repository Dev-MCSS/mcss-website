<script setup>
import { pastCards } from '@/data/pastCards.js'
import CloudImage from '@/components/CloudImage.vue';
</script>

<template>
    <div class="past-cards-wrapper">
        <template  v-for="(card, i) in pastCards" :key="card">
            <div class="card">
                <div class="card-inner">
                    <CloudImage class="card-front" :imageName="card.front" />
                    <CloudImage class="card-back" :imageName="card.back" />
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
.past-cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-lg);
}


img {
    object-fit: contain;
    width: 100%;
    display: block;
    border-radius: var(--border-radius-md);
}

.card {
    width: min(100%, 400px);
    height: 250px;
    perspective: 1000px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    object-fit: cover;
}

/* Show front normally */
.card-front {
    z-index: 2;
}

/* Show back when flipped */
.card-back {
    transform: rotateY(180deg);
}

</style>