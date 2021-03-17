<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <CommentCard
          v-for="comment in leftComments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <CommentCard
            v-for="comment in rightComments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCard from "./CommentCard"

export default {
  components: {
    CommentCard,
  },
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    leftCommentsCount() {
      return Math.ceil(this.comments.length / 5);
    },
    leftComments() {
      return this.comments.slice(0, this.leftCommentsCount);
    },
    rightComments() {
      return this.comments.slice(this.leftCommentsCount, this.comments.length);
    }
  }
};
</script>
