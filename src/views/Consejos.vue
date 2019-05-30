<template>
  <span>
   <v-container fluid fill-height class="ini" style="max-height: 100vh;">
     <v-layout justify-center align-end pa-5>
         <div class="blue-grey lighten-4 display-1 font-weight-bold black--text text-xs-center">"Transita seguro y sin miedos, por una Bogotá sin riesgos"</div>
     </v-layout>
   </v-container>
   <v-container>
     <v-layout row>
       <v-flex xs6 order-lg2>
         <v-card dark tile flat class="transparent">
           <v-flex  class="headline font-weight-black primary--text text-xs-center my-5">A PIE</v-flex>
           <v-card-text class="text-xs-center black--text my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
             ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa
             riatur.</v-card-text>
         </v-card>
       </v-flex>
       <v-flex xs6 >
         <v-card dark tile flat class="transparent text-xs-center my-5">
          <img src="../assets/Consejos1-1.jpg" width="300">
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
   <v-container>
     <v-layout row>
       <v-flex xs6 >
         <v-card dark tile flat class="transparent">
           <v-flex  class="headline font-weight-black primary--text text-xs-center my-5">EN BICICLETA</v-flex>
           <v-card-text class="text-xs-center black--text my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
             ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa
             riatur.</v-card-text>
         </v-card>
       </v-flex>
       <v-flex xs6 order-lg2>
         <v-card dark tile flat class="transparent text-xs-center my-5">
           <img src="../assets/consejos1-2.jpg" width="300">
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
   <v-container>
     <v-layout row>
       <v-flex xs6 order-lg2>
         <v-card dark tile flat class="transparent">
           <v-flex  class="headline font-weight-black primary--text text-xs-center my-5">EN MOTO</v-flex>
           <v-card-text class="text-xs-center black--text my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
             ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa
             riatur.</v-card-text>
         </v-card>
       </v-flex>
       <v-flex xs6 >
         <v-card dark tile flat class="transparent text-xs-center my-5">
           <img src="../assets/consejos1-3.jpg" width="300">
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
   <v-container>
     <v-layout row>
       <v-flex xs6 >
         <v-card dark tile flat class="transparent">
           <v-flex  class="headline font-weight-black primary--text text-xs-center my-5">EN CARRO</v-flex>
           <v-card-text class="text-xs-center black--text my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
             ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa
             riatur.</v-card-text>
         </v-card>
       </v-flex>
       <v-flex xs6 order-lg2>
         <v-card dark tile flat class="transparent text-xs-center my-5">
           <img src="../assets/consejos1-4.jpg" width="300">
         </v-card>
       </v-flex>
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
    name: 'Consejos'
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
