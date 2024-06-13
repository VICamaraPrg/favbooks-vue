import BookList from '@/components/BookList.vue';
import FavoriteBooks from '@/views/FavoriteBooks.vue';
import Home from '@/views/Home.vue';
import { ref } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/my-favorite-books', component: FavoriteBooks },
];

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
