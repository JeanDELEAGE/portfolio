<template>
  <div>
    <nav class="col-12 w-full flex align-content-center align-items-center bg-brown_2 absolute z-10">
      <span class="col-span-5 ">
        <a href="/">
          <img src="http://localhost/wp_solaso/wp-content/uploads/2021/11/logo_white_green.png"
               alt="Solaso77" style="width: 12em">
        </a>
      </span>
      <div class="col-span-7 flex align-content-center align-items-center">
        <router-link to="/" class="font-sans font-extrabold md:text-cream_2 text-red-800">Accueil</router-link>
        <router-link to="/projet" class="nav-item nav-link">Nos projets</router-link>
        <router-link to="/" class="nav-item nav-link">Notre histoire</router-link>
        <router-link to="/" class="nav-item nav-link">Nous contacter</router-link>
        <router-link to="/" class="nav-link active">Faire un don</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
