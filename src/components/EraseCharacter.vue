<template>
  <span 
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    :class="character.isErase ? 'opacity-0' : 'opacity-100'"
    class="transition-opacity duration-500 ease-in-out"
  >
    {{ character.char }}
  </span>
</template>

<script>
import { mapActions } from 'vuex';

let timerId;

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['setEraseCharacter']),
    onMouseOver() {
      if (this.character.isErase) {
        return;
      }
      timerId = setTimeout(() => {
        this.erase();
      }, 100);
    },
    onMouseOut() {
      if (this.character.isErase) {
        return;
      }
      clearTimeout(timerId);
    },
    erase() {
      this.setEraseCharacter({
        id: this.character.id, 
        word: this.character.word
      });
    },
  },
}
</script>

<style>

</style>