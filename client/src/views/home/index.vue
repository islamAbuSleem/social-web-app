<script setup>
import Navbar from "./components/navbar/navbar.vue";
import Sidemenu from "./components/sidemenu/index.vue";
import Stories from "./components/stories/index.vue";
import CreatePost from "./components/create-post/index.vue";
</script>

<template>
  <section class="bg-slate-100 relative h-min-screen">
    <Navbar></Navbar>
    <div class="grid grid-cols-10 gap-4 overflow-y-auto">
      <div class="col-start-1 col-end-3 bg-white fixed h-screen z-20 w-1/5 overflow-y-auto">
        <Sidemenu></Sidemenu>
      </div>
      <div class="col-start-3 col-end-9 mx-8 mt-3 min-h-screen ...">
        <div class="h-60">
          <Stories></Stories>
        </div>
        <div class="create-post">
          <CreatePost></CreatePost>
        </div>
      </div>
      <div class="bg-red-400 col-start-9 col-end-11 fixed h-full z-20 w-1/5 right-0 ...">03</div>
    </div>
  </section>
</template>