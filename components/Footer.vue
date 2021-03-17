<template>
  <div>
    <footer class="footer_1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 text-center">
          <div class="copyright">
            © copyright 2020 by <a href="#">Layerdrops.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

    <!-- Bact To To -->
    <a id="backToTop" href="#" class=""><i class="fa fa-angle-double-up"></i></a>
    <!-- Bact To To -->


  </div>
</template>

<script>
    export default {
      name: "Footer",
      mounted() {

        var back = $("#backToTop"),
          body = $("body, html");
        $(window).on('scroll', function () {
          var h = $(window).height() / 2;
          if ($(window).scrollTop() > h)
          {
            back.addClass('showit');
          } else
          {
            back.removeClass('showit');
          }

        });
        body.on("click", "#backToTop", function (e) {
          e.preventDefault();
          body.animate({scrollTop: 0}, 800);
        });

      }
    }
</script>

<style scoped>

</style>
