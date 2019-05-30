<template>
    <v-container fluid>
        <v-layout>
            <h1>Signin Page</h1>
            <div class="sign-up">
                <p>Crea tu cuenta ahora mismo!</p>
                <input type="text" v-model="email" placeholder="Correo"><br>
                <input type="password" v-model="password" placeholder="Contraseña"><br>
                <button @click="signin">Crear</button>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'signin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        signin: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    alert('Your account has been created!')
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
