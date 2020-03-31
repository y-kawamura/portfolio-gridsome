<template>
  <div class="w-full">
  <!-- <div class="rounded shadow-lg bg-surface w-full"> -->
    <div class="flex justify-start items-center">
      <div class="w-2/12 h-10">
        <g-image class="w-full h-full" :src="skill.logo.file.url" alt="skill"></g-image>
      </div>
      <div class="w-7/12 sm:w-8/12 h-8 ml-5 bg-surface">
        <div
          :class="`w-${skill.rate*20}/100`"
          class="h-full bg-secondary"
        >
        </div>
      </div>
      <div class="w-3/12 sm:w-2/12 flex justify-center items-center text-onbackground">
        <span class="font-logo text-2xl">{{ skill.rate*20 }}</span>
        <span class="font-logo text-md ml-1">%</span>
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
