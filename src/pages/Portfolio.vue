<template>
  <Layout>
    <div class="py-10">
      <h1 class="pb-8 text-4xl font-logo text-onbackground text-center">Portfolio</h1>
      <div class="flex flex-wrap">
        <div
          v-for="portfolio in $page.allContentfulPortfolio.edges"
          :key="portfolio.node.id"
          class="p-4 w-full md:w-1/2 xl:w-4/12"
        >
          <PortfolioCard :portfolio="portfolio.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulPortfolio{
		edges {
      node {
        id
        title
        description
        snapshot {
          file {
            url
          }
        }
        gitHub
        demo
        tags {
          id
          name
        }
      }
    }
  }
}
</page-query>

<script>
import PortfolioCard from '../components/PortfolioCard';

export default {
  components: {
    PortfolioCard,
  },
}
</script>

<style>

</style>