<template>
  <NavBar />

  <RouterView />

  <!-- <div class="container mx-auto px-4 sm:px-6 lg:px-8">
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
  </div> -->
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>
