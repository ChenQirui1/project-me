<script lang="ts" setup></script>

<template>
  <nav class="w-screen bg-white">
    <div class="flex h-fit">
      <router-link
        class="font-la-belle-aurore ml-2 mr-auto my-auto text-black text-2xl text-center"
        to="/"
        >RUI
      </router-link>

      <ul class="flex gap-3 my-auto">
        <li>
          <a
            class="fa fa-instagram text-xl"
            href="https://www.instagram.com/"
          ></a>
        </li>
        <li>
          <a
            class="fa fa-github-square text-xl"
            href="https://github.com/ChenQirui1"
          ></a>
        </li>
        <li>
          <a
            class="fa fa-linkedin-square text-xl"
            href="https://sg.linkedin.com/"
          ></a>
        </li>
      </ul>
      <button
        class="mx-4 bg-black rounded-xl px-4 py-1 m-2 text-sm hover:bg-purple-400"
      >
        Contact
      </button>
    </div>
  </nav>
</template>
