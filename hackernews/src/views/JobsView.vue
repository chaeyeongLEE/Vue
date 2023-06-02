<template>
  <div>
    <div v-for="(a, i) in jobs" :key="i">
      {{ a.title }}
    </div>

  </div>
</template>

<script>
import {fetchJobsList} from "../api/index";

export default {
  name: 'JobsView',
  data(){
    return {
      jobs : []
    }
  },
  created(){
    fetchJobsList()
        .then(response=>this.jobs = response.data)
        .catch(error=>console.log(error))
  }
}
</script>
<style></style>