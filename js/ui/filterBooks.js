export function filterBooks(books, bookToDelete) {
  const newBooks = books.filter(function (book) {
    if (bookToDelete !== book.isbn) {
      return true;
    }
  });

  return newBooks;
}
