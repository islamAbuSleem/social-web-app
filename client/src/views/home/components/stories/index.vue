<script setup>
import { ref } from "vue";
let stories = ref([
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  },
  {
    id: 1,
    img: ""
  }
]);
</script>


<template>
  <section class="flex overflow-x-auto space-x-5 flex-nowrap h-full pb-2">
    <div
      v-for="story in stories"
      :key="story.id"
      class="bg-gray-600 w-40 h-full shrink-0 rounded-lg mx-2"
    ></div>
  </section>
</template>