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
            <v-btn flat class="hidden-sm-and-down" to="/sign-in">Registrarse</v-btn>
            <v-btn color="primary" class="hidden-sm-and-down" to="/join">Ingresar</v-btn>
        </v-toolbar>
    </span>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {return {
                        appTitle: 'Inicio',
                        drawer: false,
                        items: [
                            { title: 'Profile' },
                            { title: 'Sign In', route: '/sign-in'  },
                            { title: 'Join', route: '/join' },
                            { title: 'Somos', route: '/somos' },
                            { title: 'Consejos', route: '/consejos' },
                            { title: 'Mapa', route: '/mapa' },
                            { title: 'Contacto', route: '/contacto' }
                        ]
                    };}
};



</script>
<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
