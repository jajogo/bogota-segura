<template>
<span>
  <v-container fluid fill-height class="term" style="max-height: 100vh;">
      <v-layout justify-center align-end pa-5>
      </v-layout>
  </v-container>
  <v-footer  dark height="auto"    >
      <v-card class="flex" flat tile>
        <v-card-title class="secondary black--text">
          <v-card-text>
          <p class="text-md-center">Copyright &copy; 2019 Bogotá <b>+</b> segura Todos los derechos reservados <br>
          Términos y condiciones | Políticas de tratamiento de datos personales  </p>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="blue-grey lighten-1 black--text justify-center">
          &copy;2019  — <strong>Bogotá + Segura</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
</span>
</template>

<script>
    export default {
        name: 'HomeFooter'
};
</script>

<style scoped>
.term {
    background-image: url("../assets/Final.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
