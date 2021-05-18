//GET METHOD //

let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
    fetch("https://wool-jolly-numeric.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = "";
            for (let book of books) {
                htmlStr += `<h3>${book.title}</h3><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $("#container").html(htmlStr);
        });
}

getBooks();