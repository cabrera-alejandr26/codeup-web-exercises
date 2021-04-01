"use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: 'Alejandro',
        lastName: 'Cabrera'
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: 'Alejandro',
        lastName: 'Cabrera',
        sayhello(){
            var hello = "Hello from ";
            return hello + this.firstName + " " + this.lastName + "!";
        }
    }
    console.log(person.sayhello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



        shoppers.forEach(function(customer){

               if(customer.amount > 200){
                   var Cost = customer.amount;
                   var theDiscount = Cost - (customer.amount * .12);

                   console.log( customer.name + " your total is: $ " + Cost.toFixed(2) + ". \n But, with the 12% percent discount your new total is:" +
                       " $" + theDiscount.toFixed(2));
               }
               else if (customer.amount < 200){
                   var Cost = customer.amount;
                   console.log(customer.name + " your total is: $" + Cost.toFixed(2) + ". \n Your total is less than the required ammount to get the sale discount...");
            }

         });





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [

        {
            Title: "The Salmon of Doubt",
            firstName: "Douglas",
            lastName: "Adams"
        },

        {
            Title: "1984",
            firstName: "George",
            lastName: "Orwell"
        },

        {
            Title: "The Alchemist",
            firstName: "Paulo",
            lastName: "Coelho"
        },

        {
            Title: "The Lord of the Rings",
            firstName: "J.R.R",
            lastName: "Tolkien"
        },

        {
            Title: "The Pearl",
            firstName: "John",
            lastName: "Steinbeck"
        },

    ];

    console.log(books[0]);
    console.log(books[3].Title);
    console.log(books[3].lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

            for(let i = 0; i< books.length; i++){
                console.log("Book # " + i + "\n" + "Title: " + books[i].Title + "\n" + "Author: "
                    + (books[i].firstName + " " + books[i].lastName));
            }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

     var TheBooks = [
         {
         Title: "Please Enter a title",
        First: "Please enter first name",
        Last: "Please enter last name"
         }
    ];
function createBook(title, AuthorFN, AuthorLN){

        var Question = confirm("Would you like to enter a book?");
        if(Question === true) {
            for (let t = 0; t < TheBooks.length; t++) {
                var askTitle = prompt("What is the title?");
                var askFirst = prompt("What is the first name?");
                var askLast = prompt("What is the last name?");
                TheBooks.push({Title: askTitle, First: askFirst, Last: askLast});
                Question = confirm("Would you like to enter a book?");
                if(Question === false){
                    break;

                }

            }
        }
                console.log(TheBooks);

    }

function showBookInfo() {
    createBook();
}

showBookInfo();


