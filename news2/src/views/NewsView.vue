<template>
  <div>
<!--    <div v-for="(user, i) in users" :key="i">-->
<!--      {{ user.title }}-->
<!--    </div>-->
        <div v-for="(user, i) in this.$store.state.news" :key="i">
          {{ user.title }}
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