export interface Book {
  id: number;
  title: string;
  author: string;
  isFav: boolean;
  genre?: string;
  year?: number;
}
