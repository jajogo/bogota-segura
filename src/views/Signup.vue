<template>
    <span>
        <v-container fluid fill-height class="ini" style="max-height: 100vh;">
      <v-layout justify-center align-end pa-5>
          <div class="blue-grey lighten-4 display-1 font-weight-bold black--text text-xs-center">"Transita seguro y sin miedos, por una Bogotá sin riesgos"</div>
      </v-layout>
    </v-container>
        <v-container fluid class="white">
            <v-container  grid-list-lg>
                <v-layout column>
                    <v-flex  class="text-xs-center">
                        Si ya esta registrado en Bogotá + Segura 
                        <v-btn flat to="/signin" class="blue--text darken-3">Ingresa aquí</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
        <v-container fluid class="card-panel lighten-2">
            <p class="text-xs-center">Crea tu cuenta ahora mismo!</p>
            <v-layout>
                <form @submit.prevent="signUp" class="col s12 text-center form_signup">
                    <h5 class="grey-text text-darken-3">Sign Up</h5>
                    <div class="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" v-model="email" placeholder="Correo" class="formulario">
                    </div>
                    <div class="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" v-model="password" placeholder="Contraseña" class="formulario">
                    </div>
                    <div class="input-field button_field">
                        <button class="btn lighten-1 z-depth-0">Aceptar y Registrarse</button>
                    </div>
                </form>
            </v-layout>
        </v-container>
        <div class="mensaje-error" v-if="error">
            <v-container fluid class="red">
                <v-container  grid-list-lg>
                    <v-layout column>
                        <v-flex  class="text-xs-center">
                            
                        <div class="message-body">{{error}}</div>
                            
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
        </div>
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
import database from '../services/database'
export default {
    name: 'signup',
    data (){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async signUp (){
            let result = await database.signUp(this.email, this.password)
            if(result.message){
                this.error = result.message
            }else{
                alert('El usuario ha sido creado')
                this.$router.push('/signin')
            }
        }
    }
}
</script>
<style scoped>
.card-panel{
    background-color: #d4dbe3 ;
}
.form_signup{
    margin: auto;
    width: 70%;
}
.form_signup label{
    display: inline-block;
    width: 100%;
}
.form_signup input{
    width: 100%;
    background-color: white;
    padding: 10px 5px;
}
.form_signup .input-field{
    margin: 20px 0;
}
.button_field{
    text-align: center;
}
.form_signup button{
    border: 5px solid blue;
    padding: 5px 20px;
}
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
