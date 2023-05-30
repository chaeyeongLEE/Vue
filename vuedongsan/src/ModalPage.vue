<template>
  <div class="black-bg" v-if="모달창열렸니 == true" >
    <div class="white-bg">
      <img :src="원룸들[누른거].image">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <input v-model="date">

      <p>특징 : {{원룸들[누른거].content}}</p>
      <input v-model="month">
      <p> {{month}}개월 선택함 : {{원룸들[누른거].price * month }}원</p>
      <select v-model="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ModalPage',
  data(){
    return{
      month: 1,
      date:1,
    }
  },
  beforeUpdate(){
    if (this.date == 2){
      alert('2 기입은 안됩니다!');
      this.date=3;
    }
  }
  ,
  watch:{
    month(a){
      // month라는 데이터가 변할 때마다 여기있는 코드가 실행됨
      // if(사용자가 month에 입력한 데이터가 13보다 크면){
      //   alert('13이상 입력하지마세요')
      // }
      if(a>=13){
        alert('13이상입력하지마셈')
      }
      // 인풋에 글자입력하면 alert띄우고, month값을 1로 되돌리기
      if(isNaN(a)==true) {
        alert('숫자만 입력이 가능합니다.');
        this.month = 1;

      }
    },
  },
  props:{
    원룸들 : Array,
    누른거 : Number,
    모달창열렸니 : Boolean,
  }
}

</script>

<style></style>