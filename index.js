

let bookList = []

window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response => response.json())
        .then(books => {
            bookList = books
            displayBooks(books)
        })
}

function filterBooks(query) {
    console.log(query)
    const filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    displayBooks(filteredBooks)
    }


function displayBooks(books) {
    const row = document.querySelector(".row")

    row.innerHTML =
        books.map(book => `
            <div class="col-12 col-sm-6 col-md-4">
                <div class="card" id="${book}">
                    <img src="${book.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.price}</p>
                        <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            Add to cart
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onclick="removeBook(${book})"
                          >
                            Skip
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        `).join("")

}

const removeBook = function (book) {
    let card = document.getElementById(book)
    card.remove()
  }
