// register button action

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {
    alert("Registration page will be available soon!");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

// Search Books

function searchBooks(){

    let input = document.getElementById("searchBook").value.toLowerCase();

    let books = document.querySelectorAll(".book-card");


    books.forEach(function(book){

        let title = book.querySelector("h3").innerText.toLowerCase();
        let author = book.querySelector("p").innerText.toLowerCase();



        if(title.includes(input) || author.includes(input)){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }

    });

}



// Borrow Book Function

function borrowBook(button){

    let bookCard = button.parentElement;

    let status = bookCard.querySelector("p:nth-of-type(2)");


    if(status.classList.contains("available")){

        status.innerText = "Issued";

        status.classList.remove("available");
        status.classList.add("issued");


        button.innerText = "Borrowed";

        alert("Book borrowed successfully!");

    }

    else{

        alert("Book is already issued!");

    }

}

// Category Filter

function filterCategory(category){

    let books = document.querySelectorAll(".book-card");


    books.forEach(function(book){

        let title = book.querySelector("h3").innerText.toLowerCase();


        if(title.includes(category.toLowerCase())){

            book.style.display="block";

        }

        else{

            book.style.display="none";

        }

    });

}