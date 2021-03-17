<template>
  <section class="commonSection blogPage">
          <div>
            <div>
              <h1>{{ category.name }}</h1>
              <Articles :articles="articles || []" />
            </div>
          </div>
  </section>
</template>

<script>
import Articles from "~/components/Articles";

export default {
  layout: 'default',
  components: {
    Articles
  },
  async asyncData({ $strapi, params }) {
    const matchingCategories = await $strapi.find("categories", {
      slug: params.slug,
    });
    return {
      category: matchingCategories[0],
      articles: await $strapi.find("articles", {
        "categories.slug": params.slug,
      })
    };
  },
  head() {
  }
};
</script>
