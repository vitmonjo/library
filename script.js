
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const button = document.querySelector('.create-btn');
const bookContainer = document.querySelector('.book-container')

let myLibrary = [];

class Book {
    constructor() {
        this.author = author.value,
            this.title = title.value,
            this.pages = pages.value;
        if (document.querySelector('#not-read').checked) {
            this.hasRead = 'Not Read ';
        } else {
            this.hasRead = 'Read ';
        }
    }
}


function addBookToLibrary() {
    myLibrary.push(new Book());
    addToDisplay();
}

function eraseAllInputs() {
    author.value = '';
    title.value = '';
    pages.value = '';
}

button.addEventListener('click', (event) => {
    if (author.value && title.value && pages.value) {
        event.preventDefault();
        addBookToLibrary();
        eraseAllInputs();
    }
})

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}

function createBook() {
    const book = document.createElement('div');
    return book;
}

function getBookContent() {
    const currentBook = myLibrary[myLibrary.length - 1];
    const bookMainDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    authorDiv.textContent = `Author: ${currentBook.author}`;
    authorDiv.classList.add('book-element');
    const titleDiv = document.createElement('div');
    titleDiv.textContent = `Title: ${currentBook.title}`;
    titleDiv.classList.add('book-element');
    const pagesDiv = document.createElement('div');
    pagesDiv.textContent = `Nº of pages: ${currentBook.pages}`;
    pagesDiv.classList.add('book-element');
    const hasReadDiv = document.createElement('div');
    hasReadDiv.textContent = `Situation: ${currentBook.hasRead}`;
    hasReadDiv.classList.add('book-element');
    const situation = createSituationButton();
    hasReadDiv.appendChild(situation);
    bookMainDiv.append(authorDiv, titleDiv, pagesDiv, hasReadDiv)
    return bookMainDiv;
}

function createEraseButton() {
    const erase = document.createElement('button');
    erase.textContent = 'Erase book';
    erase.classList.add('erase-button');
    return erase;
}

function createSituationButton() {
    const situation = document.createElement('button');
    situation.textContent = '⟳';
    situation.classList.add('situation-button')
    return situation;
}

function addToDisplay() {
    const card = createCard();
    const book = createBook();
    const currentBook = getBookContent();
    book.appendChild(currentBook);
    const erase = createEraseButton();
    erase.addEventListener('click', () => {
        bookContainer.removeChild(card);
    })
    card.appendChild(book);
    card.appendChild(erase);
    card.classList.add('book-organizer');
    bookContainer.appendChild(card);
};

