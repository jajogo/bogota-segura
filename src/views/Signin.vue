<template>
    <v-container fluid>
        <v-layout>
            <h1>Sign In</h1>
            <form @submit.prevent="signIn">
                <p>Inicia Sesión!</p>
                <div class="field">
                    <input type="email" v-model="email" placeholder="Correo" class="formulario"><br>
                </div>
                <div class="field">
                    <input type="password" v-model="password" placeholder="Contraseña" class="formulario"><br>
                </div>

                <button class="button-registro" >Iniciar Sesion</button>
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
    name: 'signin',
    data (){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async signIn (){
            let result = await database.signIn(this.email, this.password)
            if(result.message){
                this.error = result.message
            }else{
                alert('Bienvenido!')
                this.$router.push('/profile')
            }
        }
    }
}
</script>
<style scoped>
</style>
