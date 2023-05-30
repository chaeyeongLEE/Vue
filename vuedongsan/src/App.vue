<template>

  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명" > {{작명}} </a>
<!--    <a>Products</a>-->
<!--    <a>About</a>-->
  </div>

  <p>지금 결제하면 {{amount}} % 할인</p>

  <Transition name="fade">
    <ModalPage @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </Transition>

  <DiscountBanner v-if="showDiscount == true" />

  <button @click="priceSort()"> 가격순 정렬</button>
  <button @click="sortBack()"> 되돌리기 </button>
  <button @click="priceLow()"> 가격 낮은순 정렬</button>
  <button @click="priceHigh()"> 가격 높은순 정렬</button>
  <button @click="sortABC()"> 상품명 가나다순 정렬</button>
  <button @click="priceDown()"> 50만원이하</button>
  <RoomCard @openModal="모달창열렸니=true; 누른거 = $event" :원룸들="원룸들[i]" v-for="(작명, i) in 원룸들" :key="작명" />

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

<!--   <RoomCard :원룸들="원룸들[0]" />-->
<!--  <RoomCard :원룸들="원룸들[1]" />-->
<!--  <RoomCard :원룸들="원룸들[2]" />-->
<!--  <RoomCard :원룸들="원룸들[3]" />-->
<!--  <RoomCard :원룸들="원룸들[4]" />-->
<!--  <RoomCard :원룸들="원룸들[5]" />-->

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
import RoomCard from './RoomCard.vue';

export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      원룸들오리지널:[...data],
      amount: 30,
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
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
     },
    sortABC(){
      this.원룸들.sort(function (a, b) {
        return a.title.localeCompare(b.title)
      })
    } ,
    priceLow(){
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      })
    },
    priceHigh(){
      this.원룸들.sort(function (a, b) {
        return b.price - a.price;
      })
    },
    priceDown(){
      // this.원룸들오리지널.sort(function () {
      //   if (this.원룸들오리지널.price>=500000)
      //   return this.원룸들오리지널;
      // })
      this.원룸들 = this.원룸들.filter(function (data) {
        return data.price <'500000';
      });
    }
    ,
    priceSort(){
      this.원룸들.sort(function (a, b) {
        return a.price - b.price
      })
    }
  },
  mounted(){
    setInterval(()=>{
      this.amount--;
    }, 1000);
  }

  // mounted() {
  //   setTimeout(()=>{
  //     this.showDiscount = false;
  //   },2000);
  // },

  ,
  components: {
    DiscountBanner : DiscountBanner,
    ModalPage : ModalPage,
    RoomCard : RoomCard,
    // 오른쪽은 내가 import한 파일 작명한 이름
    // 왼쪽은 내가 어떻게 작명을 하겠다.
  }
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from{
  transform: translateY(-1000px);
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to {
  transform: translateY(0px);
}
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
