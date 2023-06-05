<template>
  <div>
    <p> name : {{userItem.id}}</p>
    <p> karma : {{userItem.karma}}</p>
    <p> created : {{userItem.created}}</p>
  </div>
</template>
<script>
export default {
  name:'ItemView',
  computed:{
    userItem(){
      return this.$store.state.user;
    }
  },
  created() {
    const userItem = this.$route.params.user;

    this.$store.dispatch('FETCH_ITEM', userItem);
  }
}
</script>
<style></style>