/*dettagli libro book.html*/

const params = new URLSearchParams(window.location.search);
const asin = params.get('asin');

fetch(`https://striveschool-api.herokuapp.com/books?asin=${asin}`).then(response => response.json())
    .then(books => {
       
        const book = books[0]

        const bookTitleDiv = document.querySelector("#booktitle");
        
        const bookCategoryDiv = document.querySelector("#bookcategory");
        const bookImgDiv = document.querySelector("#bookimg");

        bookTitleDiv.innerText = book.title;
        
        bookCategoryDiv.innerText = book.category;
        bookImgDiv.src = book.img;
    })