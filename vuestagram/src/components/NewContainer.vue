<template>
  <div>
    <NewPost :post="post[i]" v-for="(a, i) in post" :key="i" />
<!--<NewPost :post="a" v-for="(a, i) in post" :key="i" /> 라고도 작성할 수 있다.-->

  <!--  아래는 하드코딩 , 위는 반복문 이용
    <NewPost :post="post[0]" />
    <NewPost :post="post[1]" />
    <NewPost :post="post[2]" /> -->

  </div>
</template>
<script>
import NewPost from "./NewPost.vue"
export default {
  name: 'NewContainer',
  props: {
      post : Array,
    }
  ,
  components: {NewPost : NewPost},
}
</script>
<style></style>