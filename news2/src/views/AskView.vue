<template>
  <div>
    <div v-for="(ask, i) in fetchedAsk" :key="i">
      {{ask.id}}
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'AskView',
  computed: {
    ...mapGetters([
        'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>
<style></style>