<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step === 1 || step === 2" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step === 1">Next</li>
      <li v-if="step === 2">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

<NewContainer :post="post" :step="step" :imgUrl="imgUrl"/>
  <!-- 클릭시 axios를 이용해 받은 데이터를 기존 데이터 배열에 추가하는 함수가 실행됨 -->
<button class="btn" @click="more" v-if="step === 0">더보기</button>

<div class="footer" v-if="step === 0">
  <ul class="footer-button-plus">
    <input @change="uploadImg" type="file" id="file" class="inputfile" />
    <label for="file" class="input-plus">+</label>
  </ul>
</div>
  <div v-if="step === 0">내용1</div>
  <div v-if="step === 1">내용2</div>
  <div v-if="step === 2">내용3</div>
  <button @click="step=0">Button1</button>
  <button @click="step=1">Button2</button>
  <button @click="step=2">Button3</button>

</template>

<script>
import NewContainer from "@/components/NewContainer.vue";
import insta from "../src/assets/insta";
import axios from "axios";
axios.post();
export default {
  name: 'App',
  data(){
    return {
      step : 0, //초기값 설정
      post : insta,
      더보기 : 0,
      imgUrl: "",
      // insta라는 이름으로 불러온 데이터를 post라는 이름으로 저장
    }
  },
  components: {
    NewContainer : NewContainer
  },
  methods : {
    // 버튼을 눌렀을 때, 실행할 함수에서 axios를 이용해 GET방식으로 데이터를 와서..
    more(){
      axios.get('https://codingapple1.github.io/vue/more1.json')
          .then((result)=>{
            //요청성공 시 실행할 코드
        console.log(result.data);
            // 글목록 데이터(insta.js)에 GET받은 데이터(result)를 추가하면..
        this.post.push(result.data);
        this.더보기++;
          })
          .catch(()=>{
            console.log("Get요청을 실패했습니다.")
          });
    },
    uploadImg(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.imgUrl = url;
      this.step++;
    },

  },

}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
