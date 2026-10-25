let books = [];

function displayBooks() {
let data = document.getElementById("data");
data.innerHTML = "";

```
for (let book of books) {
    data.innerHTML += "<tr><td>" + book.name +
        "</td><td>" + book.id +
        "</td><td>" + book.author + "</td></tr>";
}
```

}
