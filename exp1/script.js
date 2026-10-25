
document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    if (!name || !email || !phone || !gender ||
        !college || !dept || !year || !event) {
        document.getElementById("error").innerHTML =
            "Please fill all fields!";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("error").innerHTML =
            "Enter a valid email!";
    }
    else if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("error").innerHTML =
            "Enter a valid 10-digit phone number!";
    }
    else {
        document.getElementById("result").innerHTML =
            "<h3>Registration Successful!</h3>" +
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
            "Phone: " + phone + "<br>" +
            "Gender: " + gender + "<br>" +
            "College: " + college + "<br>" +
            "Department: " + dept + "<br>" +
            "Year: " + year + "<br>" +
            "Event: " + event;
    }
};

document.getElementById("myForm").onreset = function() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
};

