import Vue from 'vue';
import firebase from 'firebase';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwAJ3q-WhGnBVwhDCxebYwnp-XD7au_vc",
    authDomain: "bogota-segura-934b7.firebaseapp.com",
    databaseURL: "https://bogota-segura-934b7.firebaseio.com",
    projectId: "bogota-segura-934b7",
    storageBucket: "bogota-segura-934b7.appspot.com",
    messagingSenderId: "313873881997",
    appId: "1:313873881997:web:43a21114d20d16d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
