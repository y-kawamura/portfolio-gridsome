<template>
  <h1 
    class="
      text-6xl font-bold font-logo text-uiyellow
      h-screen flex justify-center items-center flex-col
      overflow-hidden-y
    "
  >
    <span
      v-for="(word, index) in [wordWelcome, wordTo]"
      :key="index"
      class="flex"
    >
      <EraseCharacter 
        v-for="char in word"
        :key="char.id"
        :character="char"
      />
    </span>
    <div class="flex flex-col justify-center items-center md:flex-row">
      <span
        v-for="(word, index) in [wordCoding, wordPenta]"
        :key="index"
        class="flex mx-2"
      >
        <EraseCharacter 
          v-for="char in word"
          :key="char.id"
          :character="char"
        />
      </span>
    </div>
  </h1>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import EraseCharacter from '~/components/EraseCharacter';

export default {
  components: {
    EraseCharacter,
  },
  data() {
    return {
      message: 'Welcome to Coding Penta',
    };
  },
  computed: {
    ...mapState(['wordWelcome', 'wordTo', 'wordCoding', 'wordPenta']),
    ...mapGetters(['isEraseWordWelcome', 'isEraseWordTo', 'isEraseWordCoding', 'isEraseWordPenta']),
  },
}
</script>
