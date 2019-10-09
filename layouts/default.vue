<template>
  <div>
    <!-- <header @sidenavToggle="displaySidenav = !displaySidenav"/> -->
    <app-header @sidenavToggle="displaySidenav = !displaySidenav"></app-header>
    <sidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/navigations/Header" 
import Sidenav from "@/components/navigations/Sidenav" 

export default {
  components: {
    appHeader,
    Sidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style lang="css">
body {
  font-family: 'Big Shoulders Display', cursive;
}
</style>
