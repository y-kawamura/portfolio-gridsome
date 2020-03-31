<template>
  <Layout>
    <div class="py-10">
      <h1 class="pb-8 text-4xl font-logo text-onbackground text-center">Skills</h1>
      <div class="flex flex-wrap">
        <SkillCard
          v-for="skill in $page.allContentfulSkiil.edges"
          :key="skill.node.id"
          :skill=skill.node
          class="m-2"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulSkiil {
    edges {
      node {
        id
        name
        rate
        type
        logo {
          file {
						url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SkillCard from '~/components/SkillCard';

export default {
  components: {
    SkillCard
  },
};
</script>
