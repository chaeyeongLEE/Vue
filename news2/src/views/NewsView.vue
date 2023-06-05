<template>
  <div>
<!--    <div v-for="(user, i) in users" :key="i">-->
<!--      {{ user.title }}-->
<!--    </div>-->
        <div v-for="(user, i) in this.$store.state.news" :key="i">
          <a v-bind:href="user.url">
            {{ user.title }}
          </a>
          <small>
            {{user.time_ago}} by
<!--            <router-link v-bind:to="'/user/' + user.user">-->
<!--              {{user.user}}-->
<!--            </router-link>-->
            <router-link v-bind:to="`/user/${user.user}`">
              {{user.user}}
            </router-link>
           </small>
        </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  // data(){
  //   return {
  //     users : []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
  // created() {
  //   console.log('호출 전:', this);
  //   fetchNewsList()
  //       .then(response=>
  //         {
  //           console.log('호출 후:', this);
  //           this.users = response.data;
  //         })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // }
}
</script>
<style></style>