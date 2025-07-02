<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    label: String,
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary'].includes(value)
    },
    href: String,   // For external links
    to: [String, Object]    // For vue-router links
})
</script>

<template>
    <component 
        :is="href ? 'a' : to ? RouterLink : 'button'"
		v-bind="href ? { href } : to ? { to } : {}"
        :class="[`btn-${variant}`]"
    >
        <span class="label">{{ label }}</span>
        <!-- only primary btn has chevron -->
        <span class="arrow" v-if="variant === 'primary'">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </span>
    </component>
</template>

<style scoped>
.btn-primary, .btn-secondary {
    display: inline-flex;
    align-items: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    border-radius: var(--border-radius-lg);
    width: fit-content;
}

.btn-primary {
    background-color: transparent;
    background-color: var(--primary-color);
    border-radius: var(--border-radius-lg);
    padding: var(--padding-xs) var(--padding-sm);
    gap: 0.5rem;
}

.btn-primary:hover {
    background-color: var(--primary-color-hover);
}


.label, .arrow {
    color: white;
    z-index: 1;
}

.label {
    font-family: var(--font-family-ui);
    font-weight: 600;
    text-wrap: nowrap;
    text-transform: none;
}

.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>