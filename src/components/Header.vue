<template>
  <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/Jogos">Jogos</v-btn>
            <v-btn flat to="/AtividadesDeSaladeAula">Atividades de Sala de Aula</v-btn>
            <v-btn flat to="/LinksUteis">Links Úteis</v-btn>
            <v-btn flat to="/Forum">Forúm</v-btn>
            <v-btn flat to="/Sobre">Sobre</v-btn>
          </v-toolbar-items>
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<script>




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

