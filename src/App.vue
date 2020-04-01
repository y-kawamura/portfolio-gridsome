<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  components: {
    Layout
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  /* transform: translate(0px, 0px);  */
  opacity: 1;
  transition: opacity 300ms ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
