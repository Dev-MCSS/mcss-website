<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import CloudImage from '@/components/CloudImage.vue';

// use portrait vertical images for best quality
const slides = [
    { image: 'home/casino_night', position: 'top' },
    { image: 'home/tang_yuan' },
    { image: 'home/badminton' },
    { image: 'home/casino_night2' },
    { image: 'home/lny_party' },
    { image: 'home/lny_party2' },
]

</script>

<template>
    <vueper-slides 
        :slide-ratio="800 / 770" 
        :autoplay="true" 
        :bullets="true" 
        duration="6900" 
        :touchable="false"
        :arrows="true"
        >
        <template #arrow-left>  
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </template>
        <template #arrow-right>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </template>
        <vueper-slide 
            v-for="(slide, i) in slides" :key="i">
            <template #content>
                <CloudImage loading="eager" :imageName="slide.image" :lazy="i > 2" :objectPosition="slide.position"/>
            </template>
        </vueper-slide>
    </vueper-slides>
</template>

<style scoped>
.vueperslides {
    border-radius: var(--border-radius-md);
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.vueperslides__arrow svg {
    width: 24px;
    height: 24px;
    padding: var(--padding-xs);
    box-sizing: inherit;
    background-color: hsla(0, 0%, 0%, 0.84);
    border-radius: var(--border-radius-lg);
    align-items: center;
    justify-content: center;
}

</style>
