<template>
  <section class="commonSection ContactPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 text-center">
          <h4 class="sub_title">Contact with us</h4>
          <h2 class="sec_title">write us a message</h2>
        </div>
        <div class="col-lg-8">
          <!-- This shows a success message if the form was submitted correctly. -->
          <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
            Great! Your message has been sent successfully. I will try to respond
            quickly.
          </div>
          <form v-else v-on:submit.prevent="sendMessage" class="contactFrom" id="contactForm">
            <!-- Here an error is displayed if something goes wrong -->
            <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
              Bummer, Something went wrong. Did you fill out all of the fields?
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <input v-model="name" class="input-form required" type="text" name="name" id="name" placeholder="Name">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input v-model="email" class="input-form required" type="text" name="email" id="email" placeholder="Email Address">
              </div>
              <div class="col-lg-12 col-sm-12">
                <input v-model="subject" class="input-form required" type="text" name="subject" id="subject" placeholder="Subject">
              </div>
              <div class="col-lg-12 col-sm-12">
                <textarea v-model="message" class="input-form required" name="message" id="message" placeholder="Message"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" type="submit" id="con_submit">
              {{ loading ? "Sending Message..." : "Submit" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'default',
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .post("/messages", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
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
  },
    head(){
      return {
        title: "Meipaly | Contact"
      }
    }
  }
</script>
