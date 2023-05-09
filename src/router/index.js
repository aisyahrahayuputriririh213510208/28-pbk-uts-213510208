import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/home.vue';
import kegiatan from '../components/kegiatan.vue';
import info from '../components/info.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: info
  },
  {
    path: '/kegiatan',
    name: 'Kegiatan',
    component: kegiatan,
   
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router