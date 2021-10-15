<template>
  
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>

</template>


<script>
// @ is an alias to /src
import Footer from '../src/components/Footer.vue'
import Header from '../src/components/Header.vue'

export default {

  components: {
    Footer,
    Header
  }
}



</script>

<style lang="scss" scoped>

</style>
