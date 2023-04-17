<script setup>
import { ref } from "vue";
let showModal = ref(false);
</script>

<template>
  <div
    class="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex">
      <img
        src="../../../../assets/pexels-stefan-stefancik-91227.jpg"
        class="rounded-full w-11 h-11 mx-2"
        alt
      />
      <input
        type="text"
        id="default-input"
        placeholder="what's on your mind"
        @click="showModal = !showModal"
        class="bg-gray-50 hover:bg-gray-200 transition ease-in-out duration-200 cursor-pointer placeholder:text-lg placeholder:text-gray-500 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-300"
      />
    </div>

    <div
      id="popup-modal"
      tabindex="-1"
      :class="{'hidden': !showModal}"
      class="fixed flex justify-center items-center bg-slate-100/75 top-0 left-0 right-0 z-50 p-4 overflow-hidden h-screen"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            @click="showModal = false"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="text-center">
            <h4 class="text-slate-800 font-bold text-xl pt-3">Create Post</h4>
            <div class="divide-y mt-2 mb-4">
              <hr />
            </div>
            <div>content</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>