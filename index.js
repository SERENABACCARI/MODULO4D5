/*faccio apparire tutti i libri sulla homepage con la request al server tramite API*/
/* url = "https://striveschool-api.herokuapp.com/books"*/
window.onload = () => {
    fetch()
}
fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then((response) => {
        let cont = document.querySelector(".libri .row")
        cont.innerHTML = response.map((book) => {
            console.log(book)
            return `<div id="scompare" class="col-12 col-sm-6 col-md-4 col-lg-2"><div class="card"id='book_${book.asin}'>
            <img src="${book.img}" class="card-img-top" alt="">
            <div class="card-body">
                 <button class='btn btn-primary' onclick="addToCart('${book.title}', '${book.price}', '${book.asin}')"> EUR ${book.price} </button>
                <a href="#" onclick="azione('scompare');" class="btn btn-primary">salta</a>
                <button class='btn btn-primary' onclick="openbook(${book.asin})">open<button>
            </div>
        </div>

        </div>`
        })
            .join("")
    })
    .catch((err) => console.error(err))

    /*vado a richiamare la funzione per il button open del libro*/ 

function openbook(asin){
    window.open(`book.html?asin=${asin}`)
  
}

/*funzione carrello/ collegamento con onclick="addToCart per aggiungere book al carrello
e vedere il prezzo totale */

/*let carrello = []

function addtocart(book) {
    carrello.push(book)
    document.getElementById("numero prodotti").innerHTML = book.length      /*? da rivedere*/

/*}

function totale() {
    let totale = document.getElementById("totale")
    totale.innerHTML = "totale € + somma"
}

function somma() {
    let somma = 0
    for (let i = 0; i < book.length; i++)
        somma += book[i].prezzo;
    return somma
}*/

/*al click le card scompaiono/ collegamento con div id=" scompare e onclick="azione('scompare');"*/

function azione(scompare) {
    if (document.getElementById(scompare).style.display == "") {
        document.getElementById(scompare).style.display = "none"
    } else {
        document.getElementById(scompare).style.display = "";
    }

}

