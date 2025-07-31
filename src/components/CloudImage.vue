<script setup>
import { AdvancedImage, lazyload, responsive, placeholder } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { computed } from 'vue';


const cld = new Cloudinary({
    cloud: {
        cloudName: "mcss-website",
    },
});

const plugins = [
    lazyload(),
    responsive({ steps: 100 }),
    placeholder({ mode: 'blur' })
]

const props = defineProps({
    imageName: {
        type: String,
        required: true
    },
    alt: String,
    objectPosition: {
        type: String,
        default: 'center',
    },
});

const myImg = cld.image(`mcss/${props.imageName}`)
myImg.delivery(quality('auto')).delivery(format('auto'))

// default alt based on file name
const computedAlt = computed(() => {
    if (props.alt) return props.alt;
    const raw = props.imageName.split('/').pop()?.split('.')[0] || '';
    return raw.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
});

</script>

<template>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" :style="{ objectPosition }" :alt="computedAlt" />
</template>

<style scoped>

</style>