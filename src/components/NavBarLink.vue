<script setup>
import { ref, onMounted } from 'vue'

const showDrop = ref(false)

const props = defineProps({
  to: String,
  children: Array
})

const isMobile = ref(false)

function updateViewport() {
	isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
	updateViewport()
	window.addEventListener('resize', updateViewport)
})

</script>

<template>
  <!-- No dropdown -->
  <router-link :to="to" class="nav-link-text" v-if="!children">
    <slot />
  </router-link>

  <!-- Yes dropdown -->
  <span v-else 
    @mouseover="!isMobile && (showDrop = true)"
    @mouseleave="!isMobile && (showDrop = false)"
    @click="isMobile && (showDrop = !showDrop)"
    class="dropdown-gap"
    >
    <router-link :to="isMobile ? '' : to" class="link">
      <div class="link-wrapper">
        <span class="nav-link-text">
          <slot />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </div>
    </router-link>
    <ul :class="['dropdown', { show: showDrop }]">
      <li v-for="child in children" :key="child.is">
        <router-link :to="child.to" class="nav-link-text">{{ child.name }}</router-link>
      </li>
    </ul>
  </span>
</template>

<style scoped>

.dropdown {
  position: absolute;
  top: 100%;
  background-color: var(--background-color);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);

  /* Animation styles */
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-gap {
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .dropdown {
    gap: 0.75rem;
  }
}

.dropdown.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.nav-link-text:hover {
  color: var(--primary-color);
}


</style>