<template>
  <span>
    <v-container fluid fill-height class="ini" style="max-height: 100vh;">
      <v-layout justify-center align-end pa-5>
          <div class="blue-grey lighten-4 display-1 font-weight-bold black--text text-xs-center">"Transita seguro y sin miedos, por una Bogotá sin riesgos"</div>
      </v-layout>
    </v-container>
    <v-container fluid class="secondary my-5 ">
      <v-layout row>
        <v-flex xs6 >
          <v-card dark tile flat class="transparent">
            <v-flex  class="headline font-weight-black primary--text text-xs-center my-5"></v-flex>
            <v-card-text class="text-xs-center black--tex my-5 px-3"></v-card-text>
            <v-form class="px-5">
               <v-text-field class="" label="Nombre" v-model="title" prepend-icon="folder"></v-text-field>
               <v-text-field class="" label="Correo Electrónico" v-model="title" prepend-icon="folder"></v-text-field>
               <v-textarea label="Mensaje" v-model="content" prepend-icon="edit"></v-textarea>
                  <v-btn flat class="primary  mx-0 mt-5 " @click="submit" >Enviar</v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs6 order-lg2>
          <v-card dark tile flat class="transparent text-xs-center my-5">
            <img src="../assets/contacto1.png" width="300">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
       <v-flex  class="title font-weight-black primary--text text-xs-center my-3">SIGUENOS EN NUESTRAS REDES SOCIALES</v-flex>
      <v-layout class="my-5 " justify-space-around>
          <v-icon large color="purple darken-2"></v-icon>
         <v-icon large color="teal darken-2"></v-icon>
         <img src="../assets/facebook.png" height="100" width="100">
         <img src="../assets/twitter.png" height="100" width="100">
         <v-icon large color="blue-grey darken-2"></v-icon>
         <v-icon large color="orange darken-2"></v-icon>
     </v-layout>
   </v-container>
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
           <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
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
    name: 'Contacto'
};
</script>
<style scoped>
.ini{
    background-image: url("../assets/principal.jpeg");
    background-size: cover;
    width: 100%;
    height: 100%;
}
.term {
    background-image: url("../assets/Final.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
