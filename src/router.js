import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Signin from './views/Signin.vue';
import Profile from './views/Profile.vue';
import store from './store';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
         {
             path: '/',
             name: 'home',
             component: Home
         },

         {
             path: '/about',
             name: 'about',
             component: () => import('./views/About.vue')
         },

         {
             path: '/signin',
             name: 'signin',
             component: Signin,
             meta:{
                auth: false
            }
         },

         {
             path: '/signup',
             name: 'signup',
             component: Signup,
             meta:{
                auth: false
            }
         },

         {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta:{
                auth: true
            }
        },

         {
             path: '*',
             redirect: '/',
         },

         {
             path: '/somos',
             name: 'somos',
             component: () => import('./views/Somos.vue')
         },

         {
             path: '/consejos',
             name: 'consejos',
             component: () => import('./views/Consejos.vue')
         },

         {
             path: '/mapa',
             name: 'mapa',
             component: () => import('./views/Mapa.vue')
         },

         {
             path: '/contacto',
             name: 'contacto',
             component: () => import('./views/Contacto.vue')
         }
     ]
});

router.beforeEach((to, from, next)=>{
    if(to.meta.auth && !store.state.currentUser){
        next({
            path:'/signin'
        })
    }else if(!to.meta.auth && store.state.currentUser){
        next({
            path:'/profile'
        })
    }
    else{
        next()
    }
})

export default router;