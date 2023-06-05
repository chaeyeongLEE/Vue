import AskView from "../views/AskView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
//import {createRouter, createWebHistory} from 'vue-router';
import Vue from "vue";
import VueRouter from 'vue-router';
import userView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";


Vue.use(VueRouter);
export const router = new VueRouter({
        mode : 'history',// loacalhost 뒤에 /#/을 삭제해주는 역할
        routes: [
        {
            path:'/',
            redirect:'/news'
        }
        ,
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
            path : '/user/:id',
            component: userView,
        },
        {
            path: '/ask/:user',
            component:ItemView,
        }
        ]});


// const router = createRouter({
//     history: createWebHistory(), routes
// });

