<template>
    <v-container fluid>
        <v-layout>
            <h1>Join Page</h1>
            <form @submit.prevent="signUp">
                <p>Crea tu cuenta ahora mismo!</p>
                <div class="field">
                    <input type="email" v-model="email" placeholder="Correo" class="formulario"><br>
                </div>
                <div class="field">
                    <input type="password" v-model="password" placeholder="Contraseña" class="formulario"><br>
                </div>

                <button class="button-registro" >Registrarse</button>
            </form>
            <div class="mensaje-error" v-if="error">
                <div class="message-body">{{error}}</div>
            </div>
        </v-layout>
    </v-container>
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
</style>
