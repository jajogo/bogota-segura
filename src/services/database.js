  import store from '@/store';
  import firebase from 'firebase';

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
  const database = firebase.initializeApp(firebaseConfig);

  database.signUp = async (email, password) =>{
      try{
        await firebase.auth().createUserWithEmailAndPassword(email,password)

        store.commit('setCurrentUser', firebase.auth().currentUser)

        return true
      }catch(error){
          return error
      }
  }

  database.signIn = async (email, password) =>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)

      store.commit('setCurrentUser', firebase.auth().currentUser)

      return true
    }catch(error){
        return error
    }
}

  database.signOut = async () =>{
      try{
        await firebase.auth().signOut()

        store.commit('setCurrentUser', null)

        return true
      }catch(error){
          return error
      }
  }
  export default database