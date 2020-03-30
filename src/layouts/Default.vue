<template>
  <div 
    :class="darkMode ? 'dark' : 'light'"
    class="
      bg-background h-min-screen
      transition-color duration-1000 ease-in-out
    "
  >
    <!-- header -->
    <div class="fixed top-0 w-full bg-background">
      <header
        class="container mx-auto px-4 text-primary pb-1 md:pb-0 md:flex md:justify-between md:items-center">
        <div
          class="
            flex justify-between items-center
            fixed left-0 w-full px-4 bg-background md:static md:w-auto md:px-0
            h-16
          "
        >
          <span @click="home" class="font-logo text-3xl tracking-tighter select-none cursor-pointer">
            {{ $static.metadata.siteName }}
          </span>
          <div class="block md:hidden">
            <button
              @click="toggleMenu"
              class="flex items-center px-3 py-2 rounded text-primary focus:outline-none"
            >
              <svg 
                class="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path v-show="!isShowMenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                <path v-show="isShowMenu" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
              </svg>
            </button>
          </div>
        </div>
        <nav
          :class="isShowMenu ? 'opacity-100 block' : 'opacity-0 hidden'"
          class="
            md:opacity-100 md:block
            fixed left-0 w-full bg-background md:static md:w-auto
            mt-16 md:mt-0
            px-4 md:px-0
            transition-opacity duration-1000 ease-in-out
          ">
          <ul class="md:flex">
            <li class="border-b border-primary md:border-none">
              <g-link
                class="
                  block px-8 py-3 my-2
                  text-primary hover:bg-primary hover:text-onprimary active:bg-primary active:text-onprimary
                  transition duration-300 ease-in-out
                  rounded text-center"
                to="/"
                >Home</g-link
              >
            </li>
            <li class="border-b border-primary md:border-none">
              <g-link
                class="
                  block px-8 py-3 my-2
                  text-primary hover:bg-primary hover:text-onprimary
                  transition duration-300 ease-in-out
                  rounded text-center"
                to="/about"
                >About</g-link
              >
            </li>
            <li>
              <g-link
                class="
                  block px-8 py-3 my-2
                  text-primary hover:bg-primary hover:text-onprimary
                  transition duration-300 ease-in-out
                  rounded text-center"
                to="/portfolio"
                >Portfolio</g-link
              >
            </li>
          </ul>
        </nav>
      </header>
    </div>

    <div class="container mx-auto px-4 mt-16">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isShowMenu: false,
    };
  },
  computed: {
    ...mapGetters(['isEraseAllWord']),
    darkMode() {
      return this.isEraseAllWord;
    },
  },
  methods: {
    ...mapActions({ refreshMessage: 'clearErase' }),
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    home() {
      this.refreshMessage();
      this.$router.push({ path: '/' }, () => {});
    },
  },
};
</script>

<style>
.dark {
  /* --color-background: #292929; */
  --color-background: theme('colors.gray.800');
  --color-surface: theme('colors.gray.700');
  --color-primary: theme('colors.teal.200');
  --color-secondary: theme('colors.purple.200');
  --color-onbackground: #A4A4A4;
  --color-onsurface: #E1E1E1;
  --color-onprimary: #20162A;
  --color-onsecondary: #20162A;
}

.light {
  /* --color-background: #fcfcfc; */
  --color-background: theme('colors.gray.300');
  --color-surface: theme('colors.gray.100');
  --color-primary: theme('colors.teal.500');;
  --color-secondary: theme('colors.purple.500');
  --color-onbackground: #727272;
  --color-onsurface: #202020;
  --color-onprimary: #EADEFC;
  --color-onsecondary: #fff;

}

</style>
