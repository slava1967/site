<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'articles-slug', params: { slug: article.slug } }"
    class="uk-link-reset"
  >
    <div class="uk-card uk-card-muted">
      <div class="uk-card-body">
        <p v-if="article.category" id="category" class="uk-text-uppercase">
          {{ article.category.name }}
        </p>
        <p id="title" class="uk-text-large">{{ article.title }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
