<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/Ask">Ask</router-link> |
  </div>
</template>
<script>

export default {

}
</script>
<style scoped>
.header{
  color: white;
  background-color: #42b983;
  display: flex;
  padding: 8px;
}
.header a{
  color: white;
}
.header .router-link-exact-active {
  color: aqua;
}
</style>