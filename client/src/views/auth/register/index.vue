<script setup>
import { ref, computed } from "vue";
import { register } from "../../../Api/auth";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength,sameAs } from "@vuelidate/validators";

const user = ref({
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  username: ""
});
const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      minLength: minLength(6),
      sameAs: sameAs(user.value.password)
    },
    name: {
      required,
    },
    username: {
      required,
    },
  };
});

const $v = useVuelidate(rules, user.value);

async function createUser() {
  await $v.value.$validate();
  if ($v.value.$invalid) return;

  // delete user.value.confirmPassword;
  let res = await register(user.value);
  console.log("res", res);
}
</script>

<template>
  <section class="login bg-violet-300">
    <div class="container mx-auto min-h-screen flex">
      <div class="grid grid-cols-2 auto-cols-max w-3/5 mx-auto h-3/5 rounded place-self-center">
        <div class="bg-white rounded-l flex items-center">
          <div
            class="w-full mx-auto max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <form class="space-y-6" @submit.prevent="createUser">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
              <div>
                <label
                  for="Username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username</label>
                <input
                  v-model="user.username"
                  @blur="$v.username.$touch()"
                  type="text"
                  id="Username"
                  :class="{'border-red-500':$v.username.$error}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  
                />
                <template v-if="$v.username.$error">
                  <span v-if="$v.username.required.$invalid " class="text-red-500">username is required</span>
                </template>
              </div>
              <div>
                <label
                  for="Name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Name</label>
                <input
                  v-model="user.name"
                  @blur="$v.username.$touch()"
                  type="text"
                  id="Name"
                  :class="{'border-red-500':$v.name.$error}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  
                />
                <template v-if="$v.name.$error">
                  <span v-if="$v.name.required.$invalid " class="text-red-500">name is required</span>
                </template>
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
                  @blur="$v.email.$touch()"
                  id="email"
                  :class="{'border-red-500':$v.email.$error}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  
                />
                <template v-if="$v.email.$error">
                  <span v-if="$v.email.required.$invalid " class="text-red-500">E-mail is required</span>
                  <span v-if="$v.email.email.$invalid " class="text-red-500">Enter a valid email</span>
                </template>
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label>
                <input
                  v-model="user.password"
                  @blur="$v.password.$touch()"
                  type="password"
                  id="password"
                  :class="{'border-red-500':$v.password.$error}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  
                />
                <template v-if="$v.password.$error">
                  <span v-if="$v.password.required.$invalid " class="text-red-500">password is required</span>
                  <span
                    v-if="$v.password.minLength.$invalid "
                    class="text-red-500"
                  >Password must be at least 6 char</span>
                </template>
              </div>
              <div class="mb-6">
                <label
                  for="confirm_password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label>
                <input
                  v-model="user.confirmPassword"
                  type="password"
                  id="confirm_password"
                  @blur="$v.confirmPassword.$touch()"
                  :class="{'border-red-500':$v.confirmPassword.$error}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  
                />
                <template v-if="$v.confirmPassword.$error">
                  <span v-if="$v.confirmPassword.required.$invalid " class="text-red-500">confirm password is required</span>
                  <span v-if="$v.confirmPassword.sameAs.$invalid " class="text-red-500">confirm password must be same as password</span>
                  <span
                    v-if="$v.confirmPassword.minLength.$invalid "
                    class="text-red-500"
                  >Password must be at least 6 char</span>
                </template>
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="Accept_terms"
                      type="checkbox"
                      value
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    for="Accept_terms"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Accept Terms</label>
                </div>
                <div class="text-sm ml-auto font-medium text-gray-500 dark:text-gray-300">
                  Have Account?
                  <button
                    @click="$router.push({name:'login'})"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >Login</button>
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