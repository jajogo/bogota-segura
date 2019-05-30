import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
    primary:   '#2E60EE', //AZUL
    secondary: '#D5DAE1',  //GRIS
    third: '#91ADD5' //BARRA 
  }
});
