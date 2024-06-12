import type { Book } from '@/core/interfaces/Book'
import { defineStore } from 'pinia'

interface BookStoreState {
  books: Book[]
}

export const useBookStore = defineStore('bookStore', {
  state: (): BookStoreState => {
    return {
      books: [
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
        },
        {
          title: '1984',
          author: 'George Orwell',
        },
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
      ] as Book[],
    }
  },
  persist: true,
})
