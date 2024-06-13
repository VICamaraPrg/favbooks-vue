<template>
  <div class="bg-white shadow-md rounded-lg p-4 flex-1 h-full">
    <h3 class="text-xl font-semibold">{{ book.title }}</h3>
    <p class="text-gray-500">{{ book.author }}</p>
    <p class="text-gray-500">{{ book.genre }}</p>
    <p class="text-gray-500">{{ book.year }}</p>
    <div class="flex justify-end mt-4 gap-2">
      <button @click="bookStore.deleteBook(book.id)">
        <TrashIcon />
      </button>
      <button @click="bookStore.toggleBookToFavorites(book.id)">
        <HeartIcon :isFav="book.isFav" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import TrashIcon from '@/assets/icons/TrashIcon.vue';
import type { Book } from '@/core/interfaces/Book';
import { useBookStore } from '@/stores/book-store';
import { defineProps } from 'vue';

const bookStore = useBookStore();

defineProps<{
  book: Book;
}>();
</script>
