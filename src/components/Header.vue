<template>
  <v-card>

    <v-toolbar color="#D3D3D3" light flat height="100">

      <v-tabs class="d-flex justify-center">

        <v-img src="./../assets/Logo.png" max-height="90" max-width="100"  class="mr-5"></v-img>
          
        <v-card color="#D3D3D3" flat class="justify-center ma-6" >
            

            <v-btn flat to="/" color="#D3D3D3">Início</v-btn>
            <v-btn flat to="/Jogos" color="#D3D3D3">Jogos</v-btn>
            <v-btn flat to="/AtividadesDeSaladeAula" color="#D3D3D3"> Atividades de Sala de Aula</v-btn>
            <v-btn flat to="/Forum" color="#D3D3D3">Forúm Dos Alunos</v-btn>
            <v-btn flat to="/LinksUteis" color="#D3D3D3">Links Úteis</v-btn>


        </v-card>

        <v-img src="./../assets/logo_ifrs.png"  max-width="70"  class="ml-5 mb-2"></v-img>
           
      </v-tabs>
         
    </v-toolbar>

  </v-card>
</template>




