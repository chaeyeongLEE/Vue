import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[],
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        }
    },
    mutations,
    actions,

    // getters,
    // mutations,
    // actions
})

//vuex는 상태관리도구로서 상태라는 것은 여러 컴포넌트 간에 공유하는 데이터
