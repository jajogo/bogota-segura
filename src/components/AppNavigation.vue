<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <router-link :to="{path:item.route}">{{item.title}}</router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="third" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" to="/somos">EQUIPO</v-btn>
              <v-divider inset vertical class="white mx-3"></v-divider>
            <v-btn flat class="hidden-sm-and-down" to="/consejos">INFORMATE</v-btn>
              <v-divider inset vertical class="white mx-3"></v-divider>
            <v-btn flat class="hidden-sm-and-down" to="/mapa">NAVEGA</v-btn>
              <v-divider inset vertical class="white mx-3"></v-divider>
            <v-btn flat class="hidden-sm-and-down" to="/contacto">CONTACTANOS</v-btn>
              <v-divider inset vertical class="white mx-3"></v-divider>
            
            <template v-if="!currentUser">
                <v-btn flat class="hidden-sm-and-down" to="/signup">Registrarse</v-btn> 
                <v-btn color="primary" class="hidden-sm-and-down" to="/signin">Ingresar</v-btn>
            </template>

            <template v-else>
                <v-btn color="primary" class="hidden-sm-and-down" to="/profile">Perfil</v-btn>
                <v-btn color="alert" class="hidden-sm-and-down" @click="signOut">Salir</v-btn>
            </template>
        </v-toolbar>
    </span>
</template>
<script>
import database from '../services/database'
export default {
    name: 'AppNavigation',
    computed:{
        currentUser(){
            return this.$store.state.currentUser
        }
    },
    methods:{
        async signOut(){
            await database.signOut()
            this.$router.push('/signin')
        }
    },
    data() {
            return {
                appTitle: 'Inicio',
                drawer: false,
                items: [
                    { title: 'Profile' },
                    { title: 'Sign In', route: '/signin'  },
                    { title: 'signup', route: '/signup' },
                    { title: 'Somos', route: '/somos' },
                    { title: 'Consejos', route: '/consejos' },
                    { title: 'Mapa', route: '/mapa' },
                    { title: 'Contacto', route: '/contacto' }
                ]
            };        
        }
    };




</script>
<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
