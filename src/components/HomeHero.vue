<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-end pa-5>
            <div class="blue-grey lighten-4 display-1 font-weight-bold black--text text-xs-center">"Transita seguro y sin miedos, por una Bogotá sin riesgos"</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background-image: url("../assets/principal.jpeg");
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
