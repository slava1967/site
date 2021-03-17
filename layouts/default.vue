<template>
  <div>
    <Header />
    <section class="commonSection blogPage">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-8">
            <nuxt />
          </div>
          <div class="col-lg-4 col-sm-4 sidebar">
            <aside class="widget categories">
              <h3 class="widget_title">Categories</h3>
              <div class="meipaly_categorie_widget">
                <Categories />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style>
</style>
<script>
  import Header from "~/components/Header"
  import Footer from "~/components/Footer"
  import Categories from '~/components/Categories'
  export default {
    components: {
      Header,
      Footer,
      Categories
    },
    head(){
      return {
        title: "Meipaly - Vue Nuxt Digital Services Agency Template"
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }

  }
</script>
