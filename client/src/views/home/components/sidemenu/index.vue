<script setup>
import { ref } from "vue";
let sideMenu = ref([
  {
    id: 1,
    name: "Friends",
    img: ""
  },
  {
    id: 2,
    name: "Most Recent",
    img: ""
  },
  {
    id: 3,
    name: "Groups",
    img: ""
  },
  {
    id: 4,
    name: "Marketplace",
    img: ""
  },
  {
    id: 5,
    name: "Watch",
    img: ""
  },
  {
    id: 6,
    name: "Memories",
    img: ""
  }
]);
</script>

<template>
  <section class>
    <div
      class="text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <ul>
        <li>
          <router-link
            to="#"
            aria-current="true"
            class="flex items-center w-full px-4 py-2 hover:text-blue-700 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
          >
            <img
              src="../../../../assets/pexels-stefan-stefancik-91227.jpg"
              class="rounded-full w-8 h-8"
              alt
            />
            <span class="ml-3">Jone Doe</span>
          </router-link>
        </li>
        <li v-for="item in sideMenu" :key="item.id">
          <router-link
            to="#"
            aria-current="true"
            class="flex items-center w-full px-4 py-2 hover:text-blue-700 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
          >
            <img
              src="../../../../assets/pexels-stefan-stefancik-91227.jpg"
              class="rounded-full w-8 h-8"
              alt
            />
            <span class="ml-3">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class>
      <hr />
      <h4 class="text-lg text-gray-500 ml-5">Your Shortcuts</h4>
    </div>
    <div
      class="text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <ul>
        <li v-for="item in sideMenu" :key="item.id">
          <router-link
            to="#"
            aria-current="true"
            class="flex items-center w-full px-4 py-2 hover:text-blue-700 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
          >
            <img
              src="../../../../assets/pexels-stefan-stefancik-91227.jpg"
              class="rounded-full w-8 h-8"
              alt
            />
            <span class="ml-3">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>