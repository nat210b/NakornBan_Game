<script setup lang="ts">
import { ref } from 'vue'

const activeForm = ref<'signin' | 'signup'>('signin')
// const bgUrl = new URL('@/assets/img/bg.png', import.meta.url).href

</script>

<template>
  <div class="w-screen h-screen bg-cover bg-center" style="background-image: url('/img/bg.png');">
    <div class="grid grid-cols-2 w-screen h-screen">

      <div class="">
        <div class="flex h-full items-end justify-start p-20">
          <div class="text-left">
            <h3 class="text-white text-[32px] font-bold text-shadow-md">CS Files:</h3>
            <span class="text-[28px] font-bold text-yellow-500">Thai Edition</span>
            <p class="text-gray-300">Murder in Hong Kong. Step into the role of the investigator.
              Analyze the evidence, find the murderer, and bring justice to
              the streets.</p>
          </div>
        </div>
      </div>
      <div class=" flex flex-col items-start justify-center text-start p-20"
        style="background-color: #101622; color: white;">
        <span class="text-sm text-blue-700 font-bold">Royal Thai Police Department</span>
        <span class="text-2xl font-bold">Investigator Access</span>
        <span class="text-xs text-gray-300/50">Please Verify your identity to access the case files</span>
        <div class="mt-6 flex flex-row gap-6 border-b border-gray-500/40 w-full text-[12px]">
          <button type="button" class="pb-2 text-sm tracking-wider uppercase font-bold"
            :class="activeForm === 'signin' ? 'border-b-2 border-blue-600 text-white ' : 'text-gray-300'"
            @click="activeForm = 'signin'">
            <span :class="activeForm === 'signin' ? 'font-extrabold' : ''">Sign In</span>
          </button>
          <button type="button" class="pb-2 text-sm tracking-wider uppercase text-gray-300 "
            :class="activeForm === 'signup' ? 'border-b-2 border-blue-600 text-white ' : 'text-gray-300'"
            @click="activeForm = 'signup'">
            <span :class="activeForm === 'signup' ? 'font-extrabold' : ''">New Recruit</span>
          </button>
        </div>

        <form v-if="activeForm === 'signin'" class="mt-6 w-full space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase tracking-wider text-gray-300">Case ID (Email)</label>
            <input class="rounded-md border border-gray-500/40 bg-transparent px-3 py-2" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase tracking-wider text-gray-300">Cipher Key</label>
            <input class="rounded-md border border-gray-500/40 bg-transparent px-3 py-2" type="password" />
          </div>
          <button class="w-full cursor-pointerrounded-md bg-blue-800 text-white  px-4 py-2 font-bold " type="submit"
            style="border-radius: 10px;">
            <span class="font-bold">Authenticate</span>
          </button>
        </form>

        <form v-else class="mt-6 w-full space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase tracking-wider text-gray-300">Investigator Name</label>
            <input class="rounded-md border border-gray-500/40 bg-transparent px-3 py-2" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase tracking-wider text-gray-300">Case ID (Email)</label>
            <input class="rounded-md border border-gray-500/40 bg-transparent px-3 py-2" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase tracking-wider text-gray-300">Cipher Key</label>
            <input class="rounded-md border border-gray-500/40 bg-transparent px-3 py-2" type="password" />
          </div>
          <button class="w-full cursor-pointerrounded-md bg-blue-800 text-white  px-4 py-2 font-bold " type="submit"
            style="border-radius: 10px;">
            <span class="font-bold">Authenticate</span>
          </button>
        </form>
        <hr class="my-6 border-gray-500/40 w-full" />
        <div class="w-full text-center">
          <div class="flex items-center gap-4 text-xs uppercase tracking-wider text-gray-400">
            <span class="h-px flex-1 bg-gray-500/40"></span>
            <span>Or continue with</span>
            <span class="h-px flex-1 bg-gray-500/40"></span>
          </div>
          <div class="mt-4 flex gap-3">
            <!-- Social login buttons can be added here -->
            <button type="button"
              class="flex-1 cursor-pointer rounded-md border border-gray-500/40 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-yellow-400 hover:text-yellow-200">
              Google
            </button>
            <button type="button"
              class="flex-1 cursor-pointer rounded-md border border-gray-500/40 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-yellow-400 hover:text-yellow-200">
              Facebook
            </button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped></style>
