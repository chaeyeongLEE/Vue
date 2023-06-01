<template>
  <div>
    <div v-if="step === 0">
      <NewPost :post="post[i]" v-for="(a, i) in post" :key="i" />
<!--<NewPost :post="a" v-for="(a, i) in post" :key="i" /> 라고도 작성할 수 있다.-->
    </div>
  <!--  아래는 하드코딩 , 위는 반복문 이용
    <NewPost :post="post[0]" />
    <NewPost :post="post[1]" />
    <NewPost :post="post[2]" /> -->

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div
          class="upload-image"
          :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
          class="upload-image"
          :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
  </div>

</template>
<script>
import NewPost from "./NewPost.vue"
export default {
  name: 'NewContainer',
  data(){
    return{};
  },
  props: {
      post : Array,
      step : Number,
      imgUrl : String,
    }
  ,
  components: {NewPost : NewPost},
}
</script>
<style></style>