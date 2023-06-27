<template>
  <div>
    <p v-for="(user, i) in fetchedAsk" :key="i">
<!--      <a v-bind:href="user.url">-->
<!--        {{ user.title }}-->
<!--      </a>-->
      <router-link to="`item/${item.url}}`">
        {{item.title}}
      </router-link>
      <small>{{user.time_ago}} by {{user.user}}</small>
    </p>
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