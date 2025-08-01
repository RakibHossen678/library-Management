export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface IBorrowedSummary {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}
