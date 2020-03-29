<template>
  <div class="bg-white h-screen">
    <!-- header -->
    <div class="fixed top-0 w-full bg-white">
      <header
        class="container mx-auto px-4 text-teal-400 pb-1 md:pb-0 md:flex md:justify-between md:items-center">
        <div
          class="
            flex justify-between items-center
            fixed left-0 w-full px-4 bg-white md:static md:w-auto md:px-0
            h-16
          ">
          <span class="font-logo text-3xl tracking-tight">
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </span>
          <div class="block md:hidden">
            <button
              @click="toggleMenu"
              class="flex items-center px-3 py-2 rounded text-teal-200 focus:outline-none"
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
          :class="isShowMenu ? 'opacity-100' : 'opacity-0'"
          class="
            md:opacity-100
            fixed left-0 w-full bg-white md:static md:w-auto
            mt-16 md:mt-0
            px-4 md:px-0
            transition-opacity duration-300 ease-in-out
          ">
          <ul class="md:flex">
            <li class="border-b border-teal-200 md:border-none">
              <g-link
                class="
                  block px-8 py-3 my-2
                  text-teal-200 hover:bg-teal-800
                  transition duration-300 ease-in-out
                  rounded text-center"
                to="/"
                >Home</g-link
              >
            </li>
            <li class="border-b border-teal-200 md:border-none">
              <g-link
                class="
                  block px-8 py-3 my-2
                  text-teal-200 hover:bg-teal-800
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
                  text-teal-200 hover:bg-teal-800
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
export default {
  data() {
    return {
      isShowMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    }
  }
};
</script>
