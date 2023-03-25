<script setup>
import Navbar from './components/navbar/navbar.vue'
import Sidemenu from './components/sidemenu/index.vue'

</script>

<template>
    <section class="bg-slate-100">
        <div class="">
           <Navbar></Navbar> 
        </div>
        <div class="grid grid-cols-10 gap-4 mt-16 pt-4">
        <div class=" col-start-1 col-end-3 top-16 fixed h-full z-20 w-1/5 ...">
        <Sidemenu></Sidemenu>
        </div>
        <div class=" bg-violet-100 col-start-3 col-end-9 min-h-screen mx-8 ...">02</div>
        <div class=" bg-red-400 col-start-9 col-end-11 fixed h-full z-20 w-1/5 right-0  ...">03</div>
        </div>
    </section>
</template>