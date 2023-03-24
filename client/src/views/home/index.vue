<script setup>
import Navbar from './components/navbar/navbar.vue'

</script>

<template>
    <section class="">
        <div class="">
           <Navbar></Navbar> 
        </div>
        <div class="grid grid-cols-10 gap-4 mt-16 pt-5">
        <div class=" bg-violet-300 col-start-1 col-end-3 ...">01</div>
        <div class=" bg-violet-100 col-start-3 col-end-9 ...">02</div>
        <div class=" bg-red-400 col-start-9 col-end-11  ...">03</div>
        </div>
    </section>
</template>