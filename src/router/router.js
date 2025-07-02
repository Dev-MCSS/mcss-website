import { createRouter, createWebHistory } from 'vue-router'

// import all future components to link to (e.g. Home, About, Shop,...)
import HomePage from '@/views/HomePage.vue'
import SponsorsPage from '@/views/SponsorsPage.vue'
import MembershipPage from '@/views/MembershipPage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import EventsPage from '@/views/EventsPage.vue'
import RecruitmentPage from '@/views/RecruitmentPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'

// define navbar structure
export const navBarItems = [
    {
        name: 'events',
        to: '/events',
    },
    {
        name: 'sponsors',
        to: '/sponsors',
        children: [
            {
                name: 'our sponsors',
                to: '/sponsors'
            },
            {
                name: 'membership',
                to: '/membership'
            }
        ]
    },
    {
        name: 'info',
        to: '/about',
        children: [
            {
                name: 'about mcss',
                to: '/about'
            },

            {
                name: 'recruitment',
                to: '/recruitment'
            },
        ]
    },
]

// define vue router routes
export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutUsPage
    },
    {
        path: '/sponsors',
        component: SponsorsPage
    },
    {
        path: '/membership',
        component: MembershipPage
    },
    {
        path: '/events',
        component: EventsPage
    },
    {
        path: '/recruitment',
        component: RecruitmentPage
    },
    {
        path: '/:pathMatch(.*)*', 
        component: PageNotFound
    }
]

// set up vue router with history & scroll behavior :D
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      behavior: 'smooth',
      top: 0
    }
  },
})

export default router