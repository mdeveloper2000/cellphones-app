import { createRouter, createWebHistory } from "vue-router"
import AboutView from "@/views/AboutView.vue"
import HomeView from "@/views/HomeView.vue"
import NotfoundView from "@/views/NotfoundView.vue"
import CellphoneView from "@/views/CellphoneView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/cellphones/:id',
            name: 'Cellphone Details',
            component: CellphoneView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'Not Found',
            component: NotfoundView
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.name
    next()
})

export default router