<template>
  <div class="w-full md:w-4/5 md:mx-auto">
  <!-- <div class="rounded shadow-lg bg-surface w-full"> -->
    <div class="flex justify-start items-center">
      <div class="w-2/12 h-10 px-2">
        <g-image class="w-full h-full" :src="skill.logo.file.url" alt="skill"></g-image>
      </div>
      <div class="w-4/12 text-onbackground">
        <span class="font-logo text-lg sm:text-3xl">{{ skill.name }}</span>
      </div>

      <div class="w-5/12 flex justify-end items-center">
        <svg
          v-for="i in 5"
          :key="i"
          :class="i <= skill.rate ? 'text-primary' : 'text-onbackground'"
          class="fill-current h-6 w-6 ml-1 sm:h-8 sm:w-8 sm:ml-4 lg:ml-8"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
const ContentfulImageBaseURL = 'https://images.ctfassets.net';

export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return (url) => `ContentfulImageBaseURL${url}`
    }
  }
}
</script>
