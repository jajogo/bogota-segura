<template>
    <v-container fluid>
        <v-layout>
            <h1>Join Page</h1>
            <div class="sign-up">
                <p>Crea tu cuenta ahora mismo!</p>
                <input type="text" v-model="email" placeholder="Correo"><br>
                <input type="password" v-model="password" placeholder="Contraseña"><br>
                <button @click="login">Crear</button>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'join',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    alert('You are connected')
                },
                function(err){
                    alert('ups. '+err.message)
                }
            );
        }
    }
};
</script>
<style scoped>
</style>
