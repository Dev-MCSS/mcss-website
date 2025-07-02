<script setup>
import HomePageSlides from '@/components/HomePageSlides.vue';
import Btn from '@/components/Button.vue';
</script>

<template>
    <div class="row">
        <div class="col-50">
            <div class="content-wrapper">
                <img src="https://res.cloudinary.com/mcss-website/image/upload/w_130,q_auto,f_auto/v1751305158/mcss/home/mcss-logo-square-gradient.png" alt="MCSS Logo" class="square-logo"/>
                <div class="text-wrapper">
                    <h1>McGill Chinese Students' Society</h1>
                    <p>The largest and most influential cultural student organization in Eastern Canada.</p>
                </div>
                <Btn label="Become a member" variant="primary" to="membership"/>
            </div>
        </div>
        <div class="col-50">
            <div class="carousel-wrapper">
                <HomePageSlides />
            </div>
        </div>
    </div>
</template>

<style scoped>

.carousel-wrapper {
    padding: var(--padding-sm);
    border-radius: var(--border-radius-md);
}

.square-logo {
    width: clamp(20%, 110px, 140px);
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: contain;
}
</style>