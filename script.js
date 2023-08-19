const myLibrary = [];
const card = document.querySelector(".card");
console.log(card);
const cardClone = card.cloneNode(true);
console.log(cardClone);
const cardContainer = document.querySelector(".card-container");
// cardContainer.appendChild(cardClone);


function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

const book1 = new Book("Test", "Tester", "2", "Yes");
console.log(book1);
myLibrary.push(book1);
console.log(myLibrary[0].title);

const book2 = new Book("Wow", "So Cool", "125", "No");
myLibrary.push(book2);
console.log(myLibrary)

function libraryToCards() {
  myLibrary.forEach(object => {
    let clone = cardClone.cloneNode(true);
    let titleText = clone.querySelector("h2");
    let authorText = clone.querySelector(".author");
    let pagesText = clone.querySelector(".pages");
    titleText.textContent = object.title;
    authorText.textContent = object.author;
    pagesText.textContent = object.pages;
    console.log(clone);
    cardContainer.appendChild(clone);
  });
}

function clearCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.remove());
}

clearCards();
libraryToCards();

function addBookToLibrary() {
  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#book-author").value;
  const pages = document.querySelector("#book-pages").value;
  const haveRead = document.querySelector("#book-read").value;
  myLibrary.push(new Book(title, author, pages, haveRead));
  console.log(myLibrary);
  clearCards();
  libraryToCards();
}

const addBookButton = document.querySelector("#add-book");
console.log(addBookButton)
addBookButton.addEventListener("click", addBookToLibrary);


const containerDiv = document.querySelector(".container");
const sidebarButton = document.querySelector("#sidebar-button");
const sidebarSection = document.querySelector("div.sidebar");
const sidebarRemoveButton = document.querySelector(".remove-sidebar");

function removeSidebar() {
  sidebarSection.remove();
}

removeSidebar();
sidebarButton.addEventListener("click", () => {
  containerDiv.appendChild(sidebarSection);
})
sidebarRemoveButton.addEventListener("click", removeSidebar);