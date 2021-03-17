export const state = () => ({
  articles: []
})

export const actions = {
  async getArticles({ commit, state }) {
      const response = await this.$axios.$get(
        `articles`
      );
      commit("add", response);
  }
}

export const mutations = {
  add(state, response) {
    state.articles = response;
  }
}

export const getters = {
  get(state) {
    return state.articles
  },
  getId: (state) => (slugName) => {
    // If category not exist return undefined for 404 pages
    const articleId = state.articles.filter(item => item.id === slugName)[0]
    return articleId ? articleId.id : undefined
  },
  getTitle: (state) => (slugName) => {
    return state.articles.filter(article => article.slug === slugName)[0].title
  },
  getArticle: (state) => (slugName) => {
    return state.articles.filter(item => item.slug === slugName)
  }
}