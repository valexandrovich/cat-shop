<script setup>


import {ref} from "vue";

const cats = ref([


  {id: 1, name: 'Пуська', age: 3, weight: 5,  img: 'cat1.png'},
  {id: 2, name: 'Муська', age: 6, weight: 7,  img: 'cat2.png'},
  {id: 3, name: 'Лапуська', age: 5, weight: 5,  img: 'cat3.png'},
  {id: 4, name: 'Вадим', age: 76, weight: 77,  img: 'cat4.png'},

])


</script>

<template>
<div class="flex flex-col justify-center">
  <div class="flex flex-row justify-center gap-2 flex-1 bg-amber-200 py-6">
    <img src="@/assets/img/cat_icon.png" alt="" class="w-8">
    <span class="font-bold text-2xl">Купи кітика</span>
  </div>


  <div class="grid grid-cols-2">
    <div v-for="cat in cats" :key="cat.id" class="flex flex-col justify-center bg-gray-200 p-2">
      <img :src="cat.img" alt="" class="w-full h-full">
      <span class="text-md">Ім'я: <strong>{{cat.name}}</strong></span>
      <span class="text-sm">Вік <strong>{{cat.age}}</strong> років</span>
      <span class="text-sm">Вага <strong>{{cat.weight}}</strong> кг</span>
      <button class="bg-amber-300 py-1 px-4 font-semibold text-sm">Придбати</button>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>
