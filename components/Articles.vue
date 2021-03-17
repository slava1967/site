<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  }
};
</script>
