<template>
  <div 
    :class="darkMode ? 'dark' : 'light'"
  >
    <!-- header -->
    <div class="fixed bg-background z-10 top-0 w-full color-animation">
      <header
        class="container mx-auto px-4 text-primary md:flex md:justify-between md:items-center">
        <div class="flex justify-between items-center h-16">
          <span @click="home" class="font-logo text-3xl tracking-tighter select-none cursor-pointer">
            {{ $static.metadata.siteName }}
          </span>
          <div class="block md:hidden">
            <button
              @click="toggleMenu"
              class="flex items-center py-2 rounded text-primary focus:outline-none"
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
          :class="isShowMenu ? 'block' : 'hidden'"
          class="
            md:opacity-100 md:block
            fixed bg-background left-0 w-full md:static md:w-auto
            px-4 md:px-0
            color-animation
          "
        >
          <ul class="md:flex">
            <li class="border-b border-primary md:border-none">
              <g-link
                :class="isActive('/') ? 'bg-primary-darken text-onprimary' : 'hover:bg-primary hover:text-onprimary'"
                class="
                  block px-8 py-3 my-2 md:px-6 md:py-2
                  text-primary
                  rounded text-center"
                to="/"
                @click.native="isShowMenu=false"
                >Home</g-link
              >
            </li>
            <li class="border-b border-primary md:border-none">
              <g-link
                :class="isActive('/about') ? 'bg-primary-darken text-onprimary' : 'hover:bg-primary hover:text-onprimary'"
                class="
                  block px-8 py-3 my-2 md:px-6 md:py-2 md:ml-2
                  text-primary
                  rounded text-center"
                to="/about"
                @click.native="isShowMenu=false"
                >About</g-link
              >
            </li>
            <li>
              <g-link
                :class="isActive('/portfolio') ? 'bg-primary-darken text-onprimary' : 'hover:bg-primary hover:text-onprimary'"
                class="
                  block px-8 py-3 my-2 md:px-6 md:py-2 md:ml-2
                  text-primary
                  rounded text-center"
                to="/portfolio"
                @click.native="isShowMenu=false"
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
    isActive() {
      return (path) => {
        return this.$route.path === path;
      }
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
    changeTheme(mode) {
      document.body.className = '';
      document.body.classList.add(mode);
    }
  },
  watch: {
    darkMode(dark) {
      this.changeTheme(dark ? 'dark' : 'light');
    }
  },
  created() {
    // default is light mode
    this.changeTheme('light');
  }
};
</script>

<style>
body {
  background-color: var(--color-background);
  transition: background-color 600ms ease-in-out;
}

.color-animation {
  transition: 600ms ease-in-out;
}

.dark {
  --color-background: theme('colors.gray.800');
  --color-surface: theme('colors.gray.700');
  --color-primary: theme('colors.teal.200');
  --color-primary-darken: theme('colors.teal.400');
  --color-secondary: theme('colors.purple.300');
  --color-onbackground: #A4A4A4;
  --color-onsurface: #FCFCFC;
  --color-onprimary: #20162A;
  --color-onsecondary: #20162A;
}

.light {
  --color-background: theme('colors.gray.300');
  --color-surface: theme('colors.gray.100');
  --color-primary: theme('colors.teal.500');
  --color-primary-darken: theme('colors.teal.700');
  --color-secondary: theme('colors.purple.500');
  --color-onbackground: #727272;
  --color-onsurface: #202020;
  --color-onprimary: #EADEFC;
  --color-onsecondary: #EADEFC;
}

</style>
