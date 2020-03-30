import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function isErase(eraseWord) {
  return !eraseWord.some(char => char.isErase === false);
}

export default new Vuex.Store({
  state: {
    wordWelcome: [
      { id: 0,  char: 'W', isErase: false, word: 'wordWelcome' },
      { id: 1,  char: 'e', isErase: false, word: 'wordWelcome' },
      { id: 2,  char: 'l', isErase: false, word: 'wordWelcome' },
      { id: 3,  char: 'c', isErase: false, word: 'wordWelcome' },
      { id: 4,  char: 'o', isErase: false, word: 'wordWelcome' },
      { id: 5,  char: 'm', isErase: false, word: 'wordWelcome' },
      { id: 6,  char: 'e', isErase: false, word: 'wordWelcome' },
    ],
    wordTo: [
      { id: 7,  char: 't', isErase: false, word: 'wordTo' },
      { id: 8,  char: 'o', isErase: false, word: 'wordTo' },
    ],
    wordCoding: [
      { id: 9,  char: 'C', isErase: false, word: 'wordCoding' },
      { id: 10, char: 'o', isErase: false, word: 'wordCoding' },
      { id: 11, char: 'd', isErase: false, word: 'wordCoding' },
      { id: 12, char: 'i', isErase: false, word: 'wordCoding' },
      { id: 13, char: 'n', isErase: false, word: 'wordCoding' },
      { id: 14, char: 'g', isErase: false, word: 'wordCoding' },
    ],
    wordPenta: [
      { id: 15, char: 'P', isErase: false, word: 'wordPenta' },
      { id: 16, char: 'e', isErase: false, word: 'wordPenta' },
      { id: 17, char: 'n', isErase: false, word: 'wordPenta' },
      { id: 18, char: 't', isErase: false, word: 'wordPenta' },
      { id: 19, char: 'a', isErase: false, word: 'wordPenta' },
    ],
  },
  getters: {
    isEraseWordWelcome(state) {
      return isErase(state.wordWelcome);
    },
    isEraseWordTo(state) {
      return isErase(state.wordTo);
    },
    isEraseWordCoding(state) {
      return isErase(state.wordCoding);
    },
    isEraseWordPenta(state) {
      return isErase(state.wordPenta);
    },
    isEraseAllWord(state) {
      return isErase(state.wordWelcome) && isErase(state.wordTo) && isErase(state.wordCoding) && isErase(state.wordPenta);
    },
  },
  mutations: {
    setEraseCharacter(state, { id, word }) {
      const char = state[word].find(char => char.id === id);
      if (char) {
        return char.isErase = true;
      }
    },
    clearErase(state) {
      [
        state.wordWelcome,
        state.wordTo,
        state.wordCoding,
        state.wordPenta,
      ].forEach(word => {
        word.forEach(char => char.isErase = false)
      });
    }
  },
  actions: {
    setEraseCharacter({ commit }, { id, word }) {
      commit('setEraseCharacter', { id, word });
    },
    clearErase({ commit }) {
      commit('clearErase');
    }
  },
});