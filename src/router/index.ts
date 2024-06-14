import FavoriteBooks from '@/views/FavoriteBooks.vue';
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/my-favorite-books', component: FavoriteBooks },
];

/* 
  Antes de programar hay que leer la documentación >/
*/

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
