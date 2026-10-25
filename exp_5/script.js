
let form = document.getElementById("form");

form.onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value.trim();
    let dept = document.getElementById("dept").value.trim();
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if (!name || !email || !phone || !gender ||
        !college || !dept || !year || !event) {
        error.innerHTML = "Please fill in all fields!";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.innerHTML = "Please enter a valid email address!";
    }
    else if (!/^[0-9]{10}$/.test(phone)) {
        error.innerHTML = "Enter a valid 10-digit phone number!";
    }
    else {
        result.innerHTML =
            "<h3>Registration Successful!</h3>" +
            "<b>Name:</b> " + name + "<br>" +
            "<b>Email:</b> " + email + "<br>" +
            "<b>Phone:</b> " + phone + "<br>" +
            "<b>Gender:</b> " + gender + "<br>" +
            "<b>College:</b> " + college + "<br>" +
            "<b>Department:</b> " + dept + "<br>" +
            "<b>Year:</b> " + year + "<br>" +
            "<b>Event:</b> " + event;
    }
};

form.onreset = function() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
};

