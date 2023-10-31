<script setup>


import {reactive, ref} from "vue";

const isBuckerCollapsed = ref(true)

const cats = ref([


  {id: 1, name: 'Пуська', age: 3, weight: 5, img: 'cat1.png'},
  {id: 2, name: 'Муська', age: 6, weight: 7, img: 'cat2.png'},
  {id: 3, name: 'Лапуська', age: 5, weight: 5, img: 'cat3.png'},
  {id: 4, name: 'Вадим', age: 76, weight: 77, img: 'cat4.png'},
  {id: 5, name: 'Жопуська', age: 12, weight: 8, img: 'cat5.png'},
  {id: 6, name: 'Батон', age: 10, weight: 12, img: 'cat6.png'},

])

const bucket = reactive([])

const addToBucket = (product) => {
  const exists = bucket.some(bItem => bItem.product.id === product.id);
  if (!exists) {
    bucket.push({product: product, count: 1});
  } else {
    const item = bucket.find(p => p.product.id === product.id)
    item.count +=1
  }
}

const plusCount = (product) => {
  const exists = bucket.some(bItem => bItem.product.id === product.id);
  if (exists) {
    const position = bucket.find(p => p.product.id === product.id)
    position.count+=1
  }
}

const minusCount = (product) => {
  const exists = bucket.some(bItem => bItem.product.id === product.id);
  if (exists) {
    const position = bucket.find(p => p.product.id === product.id)
    const index = bucket.findIndex(p => p.product.id === product.id);
    if (position.count === 1){
      bucket.splice(index, 1); // Remove the item from the bucket
    } else {
      position.count -= 1; // Decrement the count
    }
  }
}


const deleteItem = (product) => {
  const index = bucket.findIndex(p => p.product.id === product.id);
  bucket.splice(index, 1);
}
// //
// const minusCount = (cat) => {
//
//   const exists = bucket.some(bItem => bItem.position.id === cat.id);
//   if (exists) {
//     const index = bucket.findIndex(p => p.position.id === cat.id);
//     const position = bucket[index];
//     if (position.count === 1){
//       bucket.splice(index, 1); // Remove the item from the bucket
//     } else {
//       position.count -= 1; // Decrement the count
//     }
//   }
// }


</script>

<template>
  <div class="flex flex-col justify-center relative pb-10">

    <div class="flex flex-row justify-center gap-2 flex-1 bg-amber-200 py-6">
      <img src="@/assets/img/cat_icon.png" alt="" class="w-8">
      <span class="font-bold text-2xl">Купи кітика</span>
    </div>


    <div class="grid grid-cols-2">
      <div v-for="cat in cats" :key="cat.id" class="flex flex-col justify-center bg-gray-200 p-2">
        <img :src="cat.img" alt="" class="w-full h-full">
        <span class="text-md">Ім'я: <strong>{{ cat.name }}</strong></span>
        <span class="text-sm">Вік <strong>{{ cat.age }}</strong> років</span>
        <span class="text-sm">Вага <strong>{{ cat.weight }}</strong> кг</span>
        <button class="bg-amber-300 py-1 px-4 font-semibold text-sm" @click="addToBucket(cat)">Придбати</button>
      </div>
    </div>


    <div class=" flex flex-col  w-full bg-emerald-400 fixed bottom-0 py-2 px-2">
      <div class="flex flex-row justify-between items-center">
        <span>Корзина {{ bucket.length }} товарів</span>
        <font-awesome-icon icon="arrow-up" v-if="!isBuckerCollapsed" @click="isBuckerCollapsed = !isBuckerCollapsed"
                           class="cursor-pointer"/>
        <font-awesome-icon icon="arrow-down" v-if="isBuckerCollapsed" @click="isBuckerCollapsed = !isBuckerCollapsed"
                           class="cursor-pointer"/>
      </div>

      <div v-if="isBuckerCollapsed">

        <div class="flex flex-col">


          <table class="text-left">
            <thead>
            <th>Найменування товару</th>
            <th>Кількість</th>
            <th>Видалити</th>
            </thead>
            <tbody>
            <tr v-for="item in bucket" :key="item.id" class="">
              <td> {{ item.product.name }}</td>
              <td>
                <div class="flex flex-row gap-2 items-center">
                  <button class="bg-gray-200 p-2 rounded-xl  opacity-80 hover:bg-emerald-700" @click="minusCount(item.product)"><span
                      class=" text-lg font-bold" >-</span></button>
                  {{item.count}}
                  <button class="bg-gray-200 p-2 rounded-xl opacity-80 hover:bg-emerald-700" @click="plusCount(item.product)"><span
                      class=" text-lg font-bold">+</span></button>
                </div>
              </td>
              <td class="flex flex-row ">
                <button class="bg-gray-200 w-20 opacity-80 p-2 rounded-xl hover:bg-emerald-700" @click="deleteItem(item.product)">
                  <font-awesome-icon icon="trash" class=" fa-fw"/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>


          <!--        <div  class="flex flex-row items-center ">-->
          <!--          {{cat.name}}-->

          <!--          <font-awesome-icon icon="trash" class="ml-4"/>-->


          <!--        </div>-->


        </div>


      </div>

    </div>

  </div>
</template>

<style scoped>

</style>
