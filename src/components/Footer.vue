<template >

  <v-footer
    light
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      
    >
      <v-card-text class="grey lighten-1">
    
        Englishisfunifrs@gmail.com

        <v-spacer></v-spacer>


      </v-card-text>

      <v-card-text class="py-2  text-center">
        <strong>2021 - English Is Fun</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">

</style>
