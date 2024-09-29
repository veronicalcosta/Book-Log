let totalBooks = 0;
let booksRead = 0;

document.getElementById('addBookButton').addEventListener('click', addBook);

function addBook() {
    const bookInput = document.getElementById('bookInput');
    const bookValue = bookInput.value;
    
    if (bookValue === '') return;

    const bookList = document.getElementById('bookList');
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
        ${bookValue}
        <button class="complete-btn">✔</button>
        <button class="delete-btn">✖</button>
    `;

    bookList.appendChild(bookItem);
    bookInput.value = '';

    totalBooks++;
    updateStats();

    const completeButton = bookItem.querySelector('.complete-btn');
    const deleteButton = bookItem.querySelector('.delete-btn');

    completeButton.addEventListener('click', () => {
        if (!bookItem.classList.contains('completed')) {
            booksRead++;
        } else {
            booksRead--;
        }
        bookItem.classList.toggle('completed');
        updateStats();
    });

    deleteButton.addEventListener('click', () => {
        if (bookItem.classList.contains('completed')) {
            booksRead--;
        }
        totalBooks--;
        bookList.removeChild(bookItem);
        updateStats();
    });
}

function updateStats() {
    document.getElementById('totalBooks').textContent = totalBooks;
    document.getElementById('booksRead').textContent = booksRead;
}
