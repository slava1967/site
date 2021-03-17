<template>
    <div class="uk-card uk-card-muted">
      <div class="uk-card-body">
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">Author: {{ comment.name }}</p>
            <p class="uk-margin-remove-bottom">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    comment: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
