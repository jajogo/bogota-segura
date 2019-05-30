<template>
    <v-container fluid class="secondary" grid-list-lg>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive class="text-xs-center">
                        <img src="../assets/somos1.png" width="240px">
                    </v-responsive>
                    <v-card-text>
                        <div class="text-xs-center">
                          <br>
                            <h3 class="headline mb-0">¿QUIENES SOMOS?</h3>
                            <div>Nos dedicamos a contribuir mediante una labor social.</div>
                        </div>
                        <div class="text-xs-center">
                             <v-btn  outline color="indigo" to="/somos">Leer más</v-btn>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('keto')" data-cy="plansKetoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                  <v-responsive class="text-xs-center">
                      <img src="../assets/consejos1.png" width="240px">
                  </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                          <br><br>
                            <h3 class="headline mb-0">CONSEJOS</h3>
                            <div>Que no te sorprendan, ¡Informate!</div>
                            <br>
                            <div class="text-xs-center">
                                 <v-btn outline color="indigo" to="/consejos">Leer más</v-btn>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')" data-cy="plansPaleoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                  <v-responsive class="text-xs-center">
                      <img src="../assets/mapa1.png" width="240px">
                  </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="headline mb-0">MAPA</h3>
                            <div>Estás ubicado aqui.</div>
                            <br>
                            <div class="text-xs-center">
                                 <v-btn outline color="indigo" to="/mapa">Leer más</v-btn>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('vegan')" data-cy="plansVeganBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                      <v-responsive class="text-xs-center">
                          <img src="../assets/contacto1.png" width="240px">
                      </v-responsive>
                    </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="headline mb-0">CONTACTO</h3>
                            <div>Estamos para atenderte,comunicate con nosotros </div>
                        </div>
                        <div class="text-xs-center">
                             <v-btn outline color="indigo" to="/contacto" >Leer más</v-btn>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('vegan')" data-cy="plansVeganBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    data() {
        return {
            drawer: false,
            items: [
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
</style>
