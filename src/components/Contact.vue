<template>
  <div class="overflow-x-hidden">
    <!-- Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 w-full h-36 md:m-0 md:h-44 z-0">
      <div class="h-full w-full relative">
        <div :style='{ backgroundImage: `url(https://solaso77.fr/wp-content/uploads/2021/12/batiment-et-gens-3.jpeg)`}'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 bg-top h-full w-full">
        </div>
      </div>
    </div>

    <main class="container mt-28 mb-5 w-full max-w-full custom-margin z-20 bg-transparent myscrollbar2">
      <iframe id="donation" allowtransparency="true" scrolling="auto"
              src="https://www.helloasso.com/associations/solaso77/formulaires/3/widget"
              style="display: block;width:100%;height:1700px;border:none;">
      </iframe>

      <iframe width="540" height="305" id="contact"
              src="https://be15626d.sibforms.com/serve/MUIEAHWERr7uWCYcRw5X25iauLcsg1PYlfQZlIKMR4-1X4on9ix0EVl3deSZHivUygBbdnQHTIyG9M5PidUx6Lyb8dXIDCYqRWPWQ4bHBjr3fGN31Ljle0cBE6YDwekO4LAOwEDq0f6RCRqWp_QrZqk-CR8OniwVrZOUsncKteFIWbo59f2QoneUF8C6sGwcWM0kMY6ip4Hf3a2f"
              frameborder="0" scrolling="auto" allowfullscreen
              style="display: block;width:100%;height:1000px;border:none;" >
      </iframe>
    </main>

  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {}
  },
  computed: {},
  created() {
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
