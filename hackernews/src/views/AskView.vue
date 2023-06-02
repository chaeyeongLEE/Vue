<template>
  <div>
    <div v-for="(ask, i) in ask" :key="i">
      {{ask}}
    </div>
  </div>
</template>
<script>
import {fetchAskList} from "@/api";

export default {
  name: 'AskView',
  data(){
    return {
      ask: []
    }
  },
  created() {
    var b = this;
    fetchAskList()
        .then(function (response) {
          console.log(response);
          b.ask = response.data;
        })
        .catch(function (error) {
          console.log(error)
        })
  }

}
</script>
<style></style>