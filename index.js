const bookTitle = document.getElementById("book-title-input");
const bookAuthor = document.getElementById("book-author-input");
const bookPage = document.getElementById("book-page-input");
const bookStatus = document.getElementById("book-status");
const submitBtn = document.getElementById("submitBtn");
const bookForm = document.getElementById("book-info-form");
const library = document.getElementById("library");
let myLibrary = [];

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPage.value,
    bookStatus.checked
  );
  const p = document.createElement("p");
  p.innerHTML = newBook.info();
  library.appendChild(p);

  console.log(newBook.info());
});

function Book(title, author, pageNum, status) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.status = status;
  this.info = function () {
    return `${title} by ${author}, ${pageNum} pages, ${
      status ? "read" : "not read yet"
    }`;
  };
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

// console.log(theHobbit.valueOf());
