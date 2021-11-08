<template>
  <div id="app">

    <v-toolbar color="#D3D3D3" light fixed height="100">

      <v-tabs class="d-flex justify-center">
        
        <v-img src="./../assets/Logo.png" max-height="90" max-width="100"  class="mx-5"></v-img>
        
        <v-toolbar-items>
        <v-menu>
          <template v-slot:activator="{ on, attrs }" class="hidden-sm-and-down">
            <v-btn v-bind="attrs" v-on="on" class="">
              <v-icon>mdi-view-headline</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in menu" :key="item.icon" :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-toolbar-items>
        
        
          

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>


        <v-img src="./../assets/logo_ifrs.png"  max-width="70"  class="ml-5 mb-2"></v-img>
         
      </v-tabs>
         
    </v-toolbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { link: "/", title: "Início" },
        { link: "/Jogos", title: "Jogos" },
        { link: "/AtividadesDeSaladeAula", title: "Atividades de Sala de Aula" },
        { link: "/Forum", title: "Forúm Dos Alunos" },
        { link: "/LinksUteis", title: "Links Úteis" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>


