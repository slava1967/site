<template>
  <div>
   <!-- This shows a success message if the form was submitted correctly. -->
    <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
      Great! Your message has been sent successfully. I will try to respond
      quickly.
    </div>
    <form
      v-else
      v-on:submit.prevent="sendMessage"
      class="grid grid-cols-1 gap-y-6"
    >
      <!-- Here an error is displayed if something goes wrong -->
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        Bummer, Something went wrong. Did you fill out all of the fields?
      </div>
      <div>
        <label for="name" class="sr-only">Name*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="name"
            required
            name="name"
            id="name"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Name*"
          />
        </div>
      </div>
      <div>
        <label for="email" class="sr-only">Email*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            required
            v-model="email"
            name="email"
            id="email"
            type="text"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Email*"
          />
        </div>
      </div>
      <div>
        <label for="content" class="sr-only">Content</label>
        <div class="relative rounded-md shadow-sm">
          <textarea
            required
            v-model="content"
            name="content"
            id="content"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message*"
          ></textarea>
        </div>
      </div>
      <div class="">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            {{ loading ? "Sending Content..." : "Submit" }}
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  computed: {
    article() {
      return this.$store.getters['articles/getArticle'](this.$route.params.slug)[0]
    }
  },
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: '',
      email: '',
      content: ''
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .post("/comments", {
          name: this.name,
          email: this.email,
          content: this.content,
          article: this.article
        }).then(response => {
          this.success = true
          this.errored =false
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    },
  }
};
</script>
