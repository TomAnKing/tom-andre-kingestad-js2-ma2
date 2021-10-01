const booksContainer = document.querySelector(".booksContainer");

import { removeBook } from "../script.js";

export function displayBooks(books) {
  booksContainer.innerHTML = "";
  books.forEach(function (book) {
    booksContainer.innerHTML += `<li><span>Isbn: ${book.isbn} Title: ${book.title}</span> <i class="fas fa-trash" data-item="${book.isbn}"></i></li>`;
  });

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach(function (can) {
    can.addEventListener("click", removeBook);
  });
}
