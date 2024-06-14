<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center mt-8">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search books by name"
        class="w-full max-w-lg h-fit border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-lg"
      />
    </div>
  </div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        class=""
        v-for="book of paginatedBooks"
        :key="book.id"
      >
        <BookCard :book="book" />
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          v-if="bookStore.bookPagination.currentPage > 1"
          @click="bookStore.bookPagination.currentPage--"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <template
          v-for="page in totalPages"
          :key="page"
        >
          <button
            @click="bookStore.bookPagination.currentPage = page"
            :class="{
              'bg-gray-900 text-white':
                bookStore.bookPagination.currentPage === page,
              'bg-white text-gray-500 hover:bg-gray-50':
                bookStore.bookPagination.currentPage !== page,
            }"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium"
          >
            {{ page }}
          </button>
        </template>
        <button
          v-if="bookStore.bookPagination.currentPage < totalPages"
          @click="bookStore.bookPagination.currentPage++"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9.293 16.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from '@/stores/book-store';
import BookCard from './BookCard.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const bookStore = useBookStore();

const searchTerm = ref('');
const route = useRoute();
const currentRoute = route.path;

// Pls dont kill me for this :D
// You're already dead >(
const totalPages = computed(() => {
  return currentRoute === '/'
    ? Math.ceil(bookStore.books.length / bookStore.bookPagination.booksPerPage)
    : Math.ceil(
        bookStore.getFavoriteBooks.length /
          bookStore.bookPagination.booksPerPage,
      );
});

watch(searchTerm, () => {
  bookStore.bookPagination.currentPage = 1;
});

// Pls dont kill me for this :D
const paginatedBooks = computed(() => {
  let filteredBooks =
  currentRoute === '/' ? bookStore.books : bookStore.getFavoriteBooks;

  let startIndex =
    (bookStore.bookPagination.currentPage - 1) *
    bookStore.bookPagination.booksPerPage;

  if (startIndex > filteredBooks.length) {
    bookStore.bookPagination.currentPage = 1;
    startIndex = 0;
  }

  const endIndex = startIndex + bookStore.bookPagination.booksPerPage;

  if (searchTerm.value) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.value.toLowerCase()),
    );
  }

  return filteredBooks.slice(startIndex, endIndex);
});
</script>
