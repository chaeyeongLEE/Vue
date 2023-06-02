import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api";

export default {
    FETCH_NEWS(context){
    fetchNewsList()
        .then(response=>{
            console.log(response);
            context.commit('SET_NEWS',response.data);
            //state.news=response.data;
        })
        .catch(error => {
            console.log(error);
        });
},
    FETCH_JOBS({commit}){
    fetchJobsList()
        .then(({data})=>{
            commit('SET_JOBS', data);
        })
        .catch(error=>{
            console.log(error);
        })
},
    FETCH_ASKS({commit}){
    fetchAskList()
        .then(({data})=>{
            // console.log(response);
            commit('SET_ASK', data);
        })
        .catch(error=>{
            console.log(error);
        })
}

};