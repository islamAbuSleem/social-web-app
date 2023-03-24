<script setup>
import { ref } from 'vue';
import { login } from '../../../Api/auth';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'


const user = ref({
  email:'',
  password:''
});

const rules = {
    email:{
      required,
      email
    },
    password:{
      required,
      minLength: minLength(6)
    }
}
const $v = useVuelidate(rules, user.value)
async function loginUser(){
  
  await $v.value.$validate()
  if($v.value.$invalid) return;

  let res = await login(user.value)
}

</script>

<template>
  <section class="login bg-violet-300">
    <div class="container mx-auto min-h-screen flex items-center">
      <div class="grid grid-cols-2 auto-cols-max w-3/5 mx-auto h-3/5 rounded ">
        <div class="left rounded-l">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
        </div>
        <div class="bg-white rounded-r flex items-center py-10">
          <div
            class="w-full mx-auto max-w-sm p-4 bg-white rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <form class="space-y-6" @submit.prevent="loginUser">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label>
                <input
                  v-model="user.email"
                  @blur="$v.email.$touch()"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  :class="{'border-red-500':$v.email.$error}"
                  placeholder="name@company.com"
                />
                <template v-if="$v.email.$error">
                <span v-if="$v.email.required.$invalid " class="text-red-500"> E-mail is required</span>
                <span v-if="$v.email.email.$invalid " class="text-red-500"> Enter a valid email</span>
              </template>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your password</label>
                <input
                  v-model="user.password"
                  @blur="$v.password.$touch()"
                  type="password"
                  name="password"
                  id="password"
                  :class="{'border-red-500':$v.password.$error}"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  
                />
                <template v-if="$v.password.$error">
                <span v-if="$v.password.required.$invalid " class="text-red-500"> Password is required</span>
                <span v-if="$v.password.minLength.$invalid " class="text-red-500"> Password must be at least 6 char</span>
              </template>
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Remember me</label>
                </div>
                <a
                  href="#"
                  class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Lost Password?</a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Login to your account</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <button href="#" class="text-blue-700 hover:underline dark:text-blue-500" @click="$router.push({name: 'register'})">Create account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>