<template>
  <div class="py-10">
    <!-- About Me -->
    <h1 class="pb-16 sm:pb-24 text-4xl font-logo text-onbackground text-center">
      About Me
    </h1>
    <div class="flex w-11/12 mx-auto sm:w-full">
      <div class="w-1/12 sm:w-2/12">
        <div
          class="transform sm:translate-x-10 lg:translate-x-20 -translate-y-10 sm:-translate-y-20"
        >
          <h2 class="text-3xl sm:text-5xl font-black text-onbackground">
            {{ about.name }}
          </h2>
        </div>
      </div>
      <div class="w-11/12 sm:w-9/12">
        <div
          class="
          p-6 sm:p-10
          sm:text-lg
          bg-surface text-onsurface rounded-lg
        "
        >
          <!-- GitHub -->
          <div class="flex justify-end -mt-12 sm:-mt-16 mb-12">
            <a :href="about.gitHub" target="_black" class="text-onbackground bg-primary rounded-full">
              <svg
                class="fill-current h-12 w-12 md:h-16 md:w-16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>

          <!-- description -->
          <div class="markdown" v-html="renderMarkdown(about.description)"></div>
          <!-- favorites -->
          <h3 class="text-onbackground text-xl font-semibold mb-1">Favorites</h3>
          <p class="ml-4" v-for="favorite in about.favorites" :key="favorite">
            {{ favorite }}
          </p>
          
          <!-- hobby -->
          <h3 class="text-onbackground text-xl font-semibold mb-1 mt-4">Hobby</h3>
          <p class="ml-4" v-for="hobby in about.hobbys" :key="hobby">
            {{ hobby }}
          </p>

          <!-- habit -->
          <h3 class="text-onbackground text-xl font-semibold mb-1 mt-4">Habit</h3>
          <p class="ml-4" v-for="habit in about.habits" :key="habit">
            {{ habit }}
          </p>
          
        </div>
      </div>
    </div>
    <!-- Skills -->
    <h1 class="pt-16 pb-8 text-4xl font-logo text-onbackground text-center">
      Skills
    </h1>
    <div class="flex flex-col">
      <SkillCard
        v-for="skill in $page.allContentfulSkiil.edges"
        :key="skill.node.id"
        :skill="skill.node"
        class="m-2"
      />
    </div>
  </div>
</template>

<page-query>
query {
  allContentfulSkiil( order: ASC ) {
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
  },
	allContentfulAbout {
    edges {
      node {
        name
				description
        favorites
        hobbys
        habits
        gitHub
      }
    }
  }
}
</page-query>

<script>
import markdownit from 'markdown-it';
import SkillCard from '~/components/SkillCard';

export default {
  components: {
    SkillCard
  },
  data() {
    return {
      md: new markdownit({
         breaks: true,
      })
    }
  },
  computed: {
    renderMarkdown() {
      return (text) => this.md.render(text);
    },
    about() {
      return this.$page.allContentfulAbout.edges[0].node;
    },
  },
};
</script>

<style>
.markdown p {
  margin-bottom: 2rem;
}
</style>
