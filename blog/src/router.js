import { createWebHistory, createRouter } from "vue-router";
import NewList from "@/components/NewList.vue";
import NewHome from "@/components/NewHome.vue";
import DetailPage from "@/components/DetailPage.vue";
import AuthorList from "../src/components/AuthorList.vue"
import CommentList from "../src/components/CommentList.vue"

const routes = [
    {
        path: "/detail/:id",
        component: DetailPage,
        children: [
            { path : "author", component : AuthorList },
            { path : "comment", component : CommentList },
        ]
    },
    {
        path: "/list",
        component: NewList,
    },
    {
        path: "/",
        component: NewHome,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;