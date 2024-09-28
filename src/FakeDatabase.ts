export default interface Book {
    id: number;
    title: string;
    author: string;
    publication: number;
  }
  
  export const books: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publication: 1960,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publication: 1949,
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publication: 1813,
    },
    {
      id: 4,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publication: 1954,
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publication: 1925,
    },
  ];