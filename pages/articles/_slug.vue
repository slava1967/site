<template>
    <section class="commonSection blogDetails">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="single_blog">
            <div class="blog_headings">
              <h1>{{ article.title }}</h1>
              <span class="blog_date" :datetime="article.published_at">{{article.published_at}}</span>
              <p class="blog_metas">
                <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-<a href="#">2 Comments</a>
              </p>
            </div>
            <div class="blog_details" v-html="article.content">
            </div>
            <div class="post_author">
              <h3><a href="#">Christine Eve</a></h3>
              <p>
                Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus.
              </p>
              <a href="#">View all posts</a>
            </div>
            <div class="comment_area">
              <h3>Comments</h3>
              <Comments :comments="comments || []" />
            </div>
            <div class="commentForm">
              <h3>Leave a Comment</h3>
              <CommentForm  />
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import CommentForm from "~/components/CommentForm"
import Comments from "~/components/Comments"
import moment from "moment"

  export default {
    layout: 'default',
    components: {
      Comments,
      CommentForm
    },
    head(){
      return {
        title: "Meipaly | Blog Single"
      }
    },
    async asyncData({ $strapi, params }) {
      const matchingArticles = await $strapi.find("articles", {
        slug: params.slug,
      });
      return {
        article: matchingArticles[0],
        comments: await $strapi.find("comments", {
          "article.slug": params.slug,
        })
      };
    },
    data() {
      return {
        apiUrl: process.env.strapiBaseUri,
      };
    },
    methods: {
      moment
    }
  }
</script>
