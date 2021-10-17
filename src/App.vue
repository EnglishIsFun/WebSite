<template>
  <v-app>
    <Header/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>


</template>


<script>
// @ is an alias to /src
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>