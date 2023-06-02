<template>
  <div>
    <div v-for="(a, i) in this.$store.state.jobs" :key="i">
      {{ a.title }}
    </div>

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