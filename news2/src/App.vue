<template>
  <div id="app">
    <ToolBar />
    <router-view></router-view>
  </div>

</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
