import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Profile from './components/Profile.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/superhero',
      name: 'profile',
      component: Profile
    }
  ],
});