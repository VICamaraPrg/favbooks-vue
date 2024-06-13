import { INITIAL_BOOKS } from '@/core/constant/books';
import type { Book } from '@/core/interfaces/Book';
import type { BookPagination } from '@/core/interfaces/BookPagination';
import { defineStore } from 'pinia';

interface BookStoreState {
  books: Book[];
  bookPagination: BookPagination;
}

export const useBookStore = defineStore('bookStore', {
  state: (): BookStoreState => {
    return {
      books: [...INITIAL_BOOKS] as Book[],
      bookPagination: { currentPage: 1, booksPerPage: 8 },
    };
  },
  getters: {
    getFavoriteBooks(): Book[] {
      return this.books.filter((book) => book.isFav);
    },
  },
  actions: {
    toggleBookToFavorites(bookId: number) {
      const bookToFav = this.books.find((book) => book.id === bookId);

      if (bookToFav) bookToFav.isFav = !bookToFav.isFav;
    },
    deleteBook(bookId: number) {
      this.books = this.books.filter((book) => book.id !== bookId);
    },
  },
  persist: true,
});
