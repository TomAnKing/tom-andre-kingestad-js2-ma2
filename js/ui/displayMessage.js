export function displayMessage(books) {
  const booksContainer = document.querySelector(".booksContainer");
  if (!books.length) booksContainer.innerHTML = "No more books to display";
}
