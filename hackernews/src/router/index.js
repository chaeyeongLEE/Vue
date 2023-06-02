import AskView from "../views/AskView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import { createRouter} from 'vue-router';
import {createWebHistory} from "vue-router";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
const routes = [
        {
            path:'/',
            redirect:'/news'
        },
        {
            path : '/news',
            //path: url 주소
            component: NewsView,
            // component: url 주소로 갔을 때 표시될 컴포넌트
        },
        {
            path : '/ask',
            component: AskView,
        }
        ,
        {
            path : '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        }
        ];
const router = createRouter({
    history: createWebHistory(), routes
});

export default router;