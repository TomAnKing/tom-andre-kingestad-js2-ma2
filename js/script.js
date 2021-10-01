import { filterBooks } from "./ui/filterBooks.js";
import { displayBooks } from "./ui/displayBooks.js";
import { displayMessage } from "./ui/displayMessage.js";

let books = [
  {
    isbn: "1600506460320",
    title: "Great book",
  },
  {
    isbn: "1600506460373",
    title: "Ok book",
  },
  {
    isbn: "1600506460521",
    title: "Bad book",
  },
  {
    isbn: "1600506460456",
    title: "Terrible book",
  },
];

displayBooks(books);

export function removeBook() {
  const deleteThisBook = event.target.dataset.item;
  books = filterBooks(books, deleteThisBook);

  displayBooks(books);
  displayMessage(books);
}
