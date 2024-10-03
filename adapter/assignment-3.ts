import previous_assignment from './assignment-2';

export type BookID = string;

export interface Book {
  id?: BookID;
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
}

export interface Filter {
  from?: number;
  to?: number;
  name?: string;
  author?: string;
}

// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks(filters?: Filter[]): Promise<Book[]> {
  const allBooks = await previous_assignment.listBooks(); // Assuming you have a method to get all books

  // If no filters, return all books
  if (!filters || filters.length === 0) {
    return allBooks;
  }

  // Filtering logic
  return allBooks.filter(book => {
    return filters.some(filter => {
      const matchesPrice = (filter.from === undefined || book.price >= filter.from) &&
                           (filter.to === undefined || book.price <= filter.to);
      const matchesName = filter.name ? book.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
      const matchesAuthor = filter.author ? book.author.toLowerCase().includes(filter.author.toLowerCase()) : true;

      return matchesPrice && matchesName && matchesAuthor;
    });
  });
}

async function createOrUpdateBook(book: Book): Promise<BookID> {
  return await previous_assignment.createOrUpdateBook(book);
}

async function removeBook(book: BookID): Promise<void> {
  await previous_assignment.removeBook(book);
}

const assignment = 'assignment-3';

export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks
};
