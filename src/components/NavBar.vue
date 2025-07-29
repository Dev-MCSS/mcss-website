<script setup>
import { navBarItems } from '@/router/router.js';
import NavBarLink from '@/components/NavBarLink.vue';
import Btn from '@/components/Button.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const navItems = ref(navBarItems);
const isMenuOpen = ref(false);
const isMobile = ref(false)

const route = useRoute()

watch(route, () => {
    // Close the menu when navigating to a new route
    isMenuOpen.value = false;
})

watch(isMenuOpen, (newVal) => {
    if (!newVal) {
        // wait for DOM to update (if needed)
        requestAnimationFrame(() => {
            document.querySelectorAll('.dropdown.show').forEach((el) => {
                el.classList.remove('show')
            })
        })
    }
})

function updateViewport() {
    isMobile.value = window.innerWidth <= 1024
    if (!isMobile.value) {
        isMenuOpen.value = false
    }
}

onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateViewport)
})

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <nav>
        <div class="nav-wrapper">
            <div class="nav-container">
                <a href="/" class="nav-logo-link">
                    <img
                        src="/logos/mcss-logo.webp"
                        alt="redlogo"
                        class="nav-logo"
                    />
                </a>
                <ul :class="['nav-links', isMobile && isMenuOpen ? 'mobile-menu' : 'desktop-menu']">
                    <li v-for="item in navItems" :key="item.name">
                        <NavBarLink 
                            :to="item.to" 
                            :children="item.children"
                            >
                            {{ item.name }}
                        </NavBarLink>
                    </li>
                    <li>
                        <a
                            href="https://mcss-market.square.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="nav-link-text"
                        >
                            SHOP
                        </a>
                    </li>
                    <li  class="nav-member-btn">
                        <div>
                            <Btn label="Become a member" variant="primary" href="/membership"/>
                        </div>
                    </li>
                </ul>
                
            </div>

            
            <label class="hamburger" @click="toggleMenu">
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </label>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    text-transform: uppercase;
    width: 100%;
    max-width: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    background-color: var(--background-color);
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--padding-xs) var(--padding-lg);
}

.nav-container {
    display: flex;
    align-items: center;
    gap: min(10rem, 5vw);
    width: 100%;
}

.nav-logo-link {
    display: flex;
    justify-content: center; 
}

.nav-link-text:hover {
  color: var(--primary-color);
}

.nav-logo {
    height: 2.5rem;
    width: auto;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    position: relative;
    width: 100%;
}

.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--background-color);
    padding: var(--padding-sm);
    display: flex;
    gap: 1rem;
    z-index: 999;
    display: none;
}

.nav-member-btn {
    margin-left: auto;
}

.hamburger {
    display: none;
}

.desktop-menu {
    display: flex;
}

@media (max-width: 1024px) {
    .desktop-menu {
        display: none;
    }
    .mobile-menu {
        display: flex;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .dropdown {
        display: none;
    }

    .nav-member-btn {
        display: none;
    }
}

</style>

<style>

@media (max-width: 1024px) {
    .dropdown, .dropdown.show{
        position: relative !important;
        transition: none;
        padding-left: var(--padding-sm);
    }
    .dropdown {
        display: none !important;
    }
    .dropdown.show {
        display: flex !important;
    }
}

</style>