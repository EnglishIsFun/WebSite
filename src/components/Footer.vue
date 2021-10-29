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
      <v-card class="d-flex grey lighten-1 text-center">
        <v-card-text class="">
          <strong>Contato:</strong> <a href="mailto:englishisfunifrs@gmail.com">Englishisfunifrs@gmail.com  <v-icon>mdi-email</v-icon></a>  
          

        </v-card-text>

        <v-card-text class="">
          <strong>Instituição:</strong> <a href="https://ifrs.edu.br/farroupilha/">Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - Campus Farroupilha</a>
        </v-card-text>
      </v-card>

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
