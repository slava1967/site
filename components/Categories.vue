<template>
  <div>
    <ul class="sub-menu">
      <li v-for="category in categories" :key="category.slug">
          <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug }}">
            {{ category.name }}
          </nuxt-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: "Categories",
    computed: mapGetters({
      categories: 'categories/get'
    })
  }
</script>