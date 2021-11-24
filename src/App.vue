<template>
  <div>
    <div class="flex flex-wrap place-items-center h-1/6">
      <section class="relative mx-auto">
        <!-- navbar -->
        <nav class="flex justify-end bg-brown_2 backdrop-blur-2xl text-white w-screen">
          <div class="pl-5 pr-0 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
              <img src="http://localhost/wp_solaso/wp-content/uploads/2021/11/logo_white_green.png"
                   alt="Solaso77" class="w-20 md:w-24" style="min-width: 5em">
            </a>

            <!-- Nav Links -->
            <ul class="hidden md:flex px-4 g:px-8 ml-auto font-semibold font-heading space-x-4 lg:space-x-12">
              <router-link to="/" class="font-sans font-semibold text-cream_2">Accueil</router-link>
              <router-link to="/projet" class="min-w-max nav-item nav-link">Nos projets</router-link>
              <router-link to="/" class="min-w-max nav-item nav-link">Notre histoire</router-link>
              <router-link to="/" class="min-w-max nav-item nav-link">Nous contacter</router-link>
              <router-link to="/" class="min-w-max nav-item nav-link">Faire un don</router-link>
            </ul>

            <!-- Nav Icons -->
          </div>

          <a class="navbar-burger self-center mr-12" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>

      </section>
    </div>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
