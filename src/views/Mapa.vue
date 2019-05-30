<template>
<span>
  <v-container fluid fill-height class="ini" style="max-height: 100vh;">
      <v-layout justify-center align-end pa-5>
          <div class="blue-grey lighten-4 display-1 font-weight-bold black--text text-xs-center">"Transita seguro y sin miedos, por una Bogotá sin riesgos"</div>
      </v-layout>
  </v-container>
  <v-container fluid fill-height class="my-5 ino" style="max-height: 100vh;">
      <v-layout  justify-center align-end pa-5>

      </v-layout>
  </v-container>
  <v-container fluid class="secondary">
    <v-layout row>
      <v-flex xs6 >
        <v-card dark tile flat class="transparent">
        </v-card>
      </v-flex>
      <v-flex xs6 >
        <v-card dark tile flat class="transparent">
          <v-card-text class="text-xs-center black--text my-5">Aquí podrás ver qué está pasando en la ciudad <br>
            Para agregar información crea una cuenta e inicia sesión </v-card-text>
            <div class="text-xs-center">
                 <v-btn outline color="indigo" to="/somos">Ingresar</v-btn>
                 <v-btn outline color="indigo" to="/somos">Registrarse</v-btn>

            </div>
        </v-card>
      </v-flex>
      <v-flex xs6 >
        <v-card dark tile flat class="transparent">
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-divider class="primary"></v-divider>
  <v-container fluid class="secondary">
    <v-layout row>
      <v-flex xs6 >
        <v-card dark tile flat class="transparent">
        </v-card>
      </v-flex>
      <v-flex xs7 >

        <v-card flat class="transparent ">
           <v-card-text >
             <v-container fluid >
               <v-layout row wrap>
                 <v-flex xs12 sm4 md4>
                   <v-checkbox
                     v-model="ex4"
                     label="Robo"
                     color="red darken-3"
                     value="red"
                     hide-details
                   ></v-checkbox>
                   <v-checkbox
                     v-model="ex4"
                     label="Amenaza"
                     color="red darken-3"
                     value="red darken-3"
                     hide-details
                   ></v-checkbox>
                   <v-checkbox
                     v-model="ex4"
                     label="Ataque"
                     color="red darken-3"
                     value="red darken-3"
                     hide-details
                   ></v-checkbox>
                   <v-checkbox
                     v-model="ex4"
                     label="Microtráfico"
                     color="red darken-3"
                     value="red darken-3"
                     hide-details
                   ></v-checkbox>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-card-text>
         </v-card>
        <v-card dark tile flat class="transparent">

          <v-card dark tile flat class="transparent">
            <v-card-text class="text-xs-center black--text my3">*Ingrese para añadir entradas</v-card-text>
            <v-form class="blue-grey lighten-2 px-5">
               <v-textarea label="Descripción" v-model="content" prepend-icon="edit"></v-textarea>
            </v-form>
              <div class="text-xs-center">
                   <v-btn outline color="primary" class="my-5" to="/somos">Enviar</v-btn>
              </div>
          </v-card>
        </v-card>
      </v-flex>
      <v-flex xs6 >
        <v-card dark tile flat class="transparent">
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
</template
<script>
export default {
    name: 'Contacto',
    data () {
    return {
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
    }
  }
};
</script>
<style scoped>
.ini{
    background-image: url("../assets/principal.jpeg");
    background-size: cover;
    width: 100%;
    height: 100%;
}
.ino{
    background-image: url("../assets/map.jpg");
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
