<template>

  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명" > {{작명}} </a>
<!--    <a>Products</a>-->
<!--    <a>About</a>-->
  </div>
  <ModalPage :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  <DiscountBanner />
<!--<div v-for="(a,i) in products" :key="i">-->
<!--  <h4>{{a}}</h4>-->
<!--  <p> 50만원</p>-->
<!--</div>-->
<!--<div>-->
<!--  <img :src="원룸들[0].image" class="room-img">-->
<!--  <h4 @click="모달창열렸니 = true"> {{원룸들[0].title}} </h4>-->
<!--  <p> {{원룸들[0].price}}원 </p>-->
<!--  <p> 특징 : {{원룸들[0].content}}</p>-->
<!--  <button @click="신고수[0]++">허위매물신고</button> <span> 신고수: {{ 신고수[0]}}  </span>-->
<!--</div>-->

  <div v-for="(room, i) in 원룸들" :key="i">
    <img :src="room.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i"> 집이름: {{room.title}}</h4>
    <p> 가격 : {{room.price}}원 </p>
    <p> 특징 : {{room.content}}</p>
  </div>
<!--<div>-->
<!--  <img src="./assets/room1.jpg" class="room-img">-->
<!--  <h4> {{products[1]}} </h4>-->
<!--  <p> {{price2}} 만원</p>-->
<!--  <button @click="신고수[1]++">허위매물신고</button> <span> 신고수 : {{신고수[1]}}</span>-->
<!--</div>-->
<!--  <div>-->
<!--    <img src="./assets/room2.jpg" class="room-img">-->
<!--    <h4> {{products[2]}} </h4>-->
<!--    <p> {{price2}} 만원</p>-->

<!--    <button @click="신고수[2]++">허위매물신고</button> <span> 신고수 : {{신고수[2]}}</span>-->
<!--  </div>-->
</template>

<script>
import data from './assets/oneroom';
import DiscountBanner from "../src/DiscountBanner.vue";
import ModalPage from "../src/ModalPage.vue";
export default {
  name: 'App',
  data(){
    return {
      누른거 : 0, // 사용자가 누른 번호이고, 초기값을 0으로 설정
      원룸들 : data,
      price1 : 60,
      price2 : 70,
      모달창열렸니: false,
      신고수 : [0, 0, 0],
      메뉴들 : ['Home','Shop','About'],
      products:['역삼동원룸','천호동원룸','마포구원룸']
    }
  },
   methods : {
    increase() {
      this.신고수 +=1;
    }
  },
  components: {
    DiscountBanner : DiscountBanner,
    ModalPage : ModalPage
    // 오른쪽은 내가 import한 파일 작명한 이름
    // 왼쪽은 내가 어떻게 작명을 하겠다.
  }
}
</script>

<style>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}


</style>
