let form = document.getElementById("form");

form.onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name == "" || email == "" || phone == "") {
        document.getElementById("error").innerText = "Fill all fields";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("error").innerText = "Invalid email";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("error").innerText = "Enter 10 digit phone";
        return;
    }

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    document.getElementById("error").innerText = "";

    document.getElementById("result").innerHTML =
        "<h3>Registration Successful!</h3>" +
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Gender: " + gender + "<br>" +
        "College: " + document.getElementById("college").value + "<br>" +
        "Department: " + document.getElementById("dept").value + "<br>" +
        "Year: " + document.getElementById("year").value + "<br>" +
        "Event: " + document.getElementById("event").value;
};

form.onreset = function() {
    document.getElementById("error").innerText = "";
    document.getElementById("result").innerHTML = "";
};