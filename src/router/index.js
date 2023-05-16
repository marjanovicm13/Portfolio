import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Projects from "../components/Projects.vue"

const routes =[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/aboutme",
        name: "AboutMe",
        component: Home
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router