<template>
  <div>
<!--    <div v-for="(a, i) in this.$store.state.jobs" :key="i">-->
<!--      {{ a.title }}-->
<!--    </div>-->
    <p v-for="(a, i) in this.$store.state.jobs" :key="i">
      <a :href="a.url">{{a.title}}</a>
      <small>{{a.time_ago}},{{a.domain}}</small>
    </p>

  </div>
</template>

<script>

export default {
  name: 'JobsView',
  created(){
    this.$store.dispatch('FETCH_JOBS');
}
}
</script>
<style></style>