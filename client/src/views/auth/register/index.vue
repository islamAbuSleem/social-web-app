<script setup>
import { ref } from "vue";
import { login } from "../../../Api/auth";

const user = ref({
  email: "",
  password: ""
});

async function loginUser() {
  let res = await login(user.value);
  console.log(res);
}
</script>

<template>
  <section class="login bg-violet-300">
    <div class="container mx-auto h-screen flex ">
      <div class="grid grid-cols-2 auto-cols-max w-3/5 mx-auto h-3/5 rounded mt-3">
        <div class="bg-white rounded-l flex items-center ">
          <div
            class="w-full mx-auto max-w-sm p-4 bg-white rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <form class="space-y-6" @submit.prevent="loginUser">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
              <div>
                <label
                  for="Username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username</label>
                <input
                  type="text"
                  id="Username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="Username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Name</label>
                <input
                  type="text"
                  id="Username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label>
                <input
                  v-model="user.email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="confirm_password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label>
                <input
                  type="password"
                  id="confirm_password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
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
                <div class="text-sm ml-auto font-medium text-gray-500 dark:text-gray-300">
                 Have Account?
                <button
                  href="#"
                  class="text-blue-700 hover:underline dark:text-blue-500"
                > Login</button>
              </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Create account</button>
           
            </form>
          </div>
        </div>
        <div class="right rounded-r">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>