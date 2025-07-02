<script setup>
import { AdvancedImage, lazyload, responsive, placeholder } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: "mcss-website",
    },
});

const plugins = [
    lazyload(),
    responsive({ steps: 200 }),
    placeholder({ mode: 'blur' })
]

const props = defineProps({
    imageName: {
        type: String,
        required: true
    },
    objectPosition: {
        type: String,
        default: 'center',
    },
});

const myImg = cld.image(`mcss/${props.imageName}`)
myImg.quality('auto')


</script>

<template>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" :style="{ objectPosition }" />
</template>

<style scoped>

</style>