import { createWebHistory, createRouter } from "vue-router";
import NewList from "@/components/NewList.vue";
import NewHome from "@/components/NewHome.vue";

const routes = [
    {
        path: "/list",
        component: NewList,
    },
    {
        path: "/",
        component: NewHome,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;