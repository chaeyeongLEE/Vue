<template>
<!--  <div v-for="(room, i) in 원룸들" :key="i">-->
<!--    <img :src="room.image" class="room-img">-->
<!--    <h4> 집이름: {{room.title}}</h4>-->
<!--    <p> 가격 : {{room.price}}원 </p>-->
<!--    <p> 특징 : {{room.content}}</p>-->
<!--  </div>-->

  <div>
    <img :src="원룸들.image" class="room-img">
    <h4 @click="$emit('openModal', 원룸들.id)"> 집이름: {{원룸들.title}}</h4>
    <p> 가격 : {{원룸들.price}}원 </p>
    <p> 특징 : {{원룸들.content}}</p>
  </div>

  
</template>

<script>
export default {
    name:'RoomCard',
    props:{
        원룸들 : Object,
    }
}
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>