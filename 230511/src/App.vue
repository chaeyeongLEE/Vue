<template>

  <div class="menu">
    <!-- <a>Home</a>
    <a>Products</a>
    <a>About</a> -->
    <a v-for = "작명 in 메뉴들" :key = "작명"> {{작명}} </a>
  </div>

 <!-- <div v-for="(a, i) in products" :key ="i">
  <h4> {{products[i]}}</h4>
  <p> {{ price1 }} 만원</p>
 </div> -->
  <div>
  <h4> {{products[0]}}</h4>
  <p> {{price1}}만원 </p>
 <button @click="신고수[0]++">허위매물신고</button> <span>신고수 : {{신고수[0]}} </span>
  </div>
  <div>
  <h4> {{products[1]}}</h4>
  <p> {{price2}}만원 </p>
  <button @click="신고수[1]++">허위매물신고</button> <span>신고수 : {{신고수[1]}} </span>
  </div>
   <div>
  <h4>{{products[2]}}</h4>
  <p> {{price3}}만원 </p>
  <button @click="신고수[2]++">허위매물신고</button> <span>신고수 : {{신고수[2]}} </span>
  </div>
</template>

<script>
// html에서는 아래와 같이 코드를 사용했었다.
//document.getElementById().innerHTML = ??

export default {
  name: 'App',
  data() {
    return {
      //여기에 데이터보관하기
      // 데이터는 object 자료로 저장할 것
      // object 자료란, {자료이름:자료내용} 이렇게 쓰라는 뜻.
      price1 : 60, 
      price2 : 70,
      price3 : 40,
      신고수 : [0,0,0],
      메뉴들 : ['home','shop','about'],
      products : ['역삼동원룸','천호동원룸','마포구 원룸']
    }
  },
  methods :{
    increase(){
      this.신고수+=1;
      //vue는 함수 안에서 데이터 쓸 때 반드시 this.데이터명으로 작성해줘야한다.
    }
  },
  //vue에서 함수만들고싶으면 메소드:{} 만들면 된다.
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: rgb(103, 146, 103);
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: aliceblue;
  padding: 10px;
}


</style>
