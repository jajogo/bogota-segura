
<template>
  <span>
    <v-container fluid class="white">
        <v-container  grid-list-lg>
            <v-layout column>
                <v-flex  class="display-2 font-weight-black black--text text-xs-center my-5">Líneas de Emergencia</v-flex>
            </v-layout>
        </v-container>
    </v-container>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center class="meal-plans">
            <v-flex xs12 sm12 md2>

                    <v-responsive>
                      <div class="text-xs-center">
                        <img src="../assets/details1.png" width="150px">
                      </div>
                    </v-responsive>


                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="font-weight-black primary--text headline mb-0">123</h3>
                         <div>Atención y Emergencias</div>
                        </div>
                    </v-card-text>

            </v-flex>

            <v-flex xs12 sm12 md2>
                    <v-responsive>
                    <div class="text-xs-center">
                      <img src="../assets/details2.png" width="150px">                        
                      </div>
                    </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="font-weight-black primary--text headline mb-0">155</h3>
                            <div>Atención a Mujeres</div>
                        </div>
                    </v-card-text>
            </v-flex>

            <v-flex xs12 sm12 md2>

                    <v-responsive>
                    <div class="text-xs-center">
                      <img src="../assets/details3.png" width="150px">
                      </div>
                    </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="font-weight-black primary--text headline mb-0">165</h3>
                            <div>Antisecuestro y Extorsión</div>
                        </div>
                    </v-card-text>
            </v-flex>
            <v-flex xs12 sm12 md2>
                    <v-responsive>
                    <div class="text-xs-center">
                      <img src="../assets/details4.png" width="150px">
                    </div>
                    </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="font-weight-black primary--text headline mb-0">167</h3>
                            <div>Antinarcoticos</div>
                        </div>
                    </v-card-text>
            </v-flex>
            <v-flex xs12 sm12 md2>

                    <v-responsive>
                      <div class="text-xs-center">
                      <img src="../assets/details5.png" width="150px">
                      </div>
                    </v-responsive>


                    <v-card-text>
                        <div class="text-xs-center">
                            <h3 class="font-weight-black primary--text headline mb-0">767</h3>
                            <div>Policía de Transito y transporte</div>
                        </div>

                    </v-card-text>

            </v-flex>

        </v-layout>
    </v-container>
    </span>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
img{
  -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 300px;
    border: none;
}

</style>
