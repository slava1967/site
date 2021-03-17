export const state = () => ({
  siteName: 'Товары по акции'
})

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('categories/getCategories'),
    await dispatch('articles/getArticles')
  }
}