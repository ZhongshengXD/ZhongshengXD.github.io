function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

async function handleFormSubmit(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    if (validateEmail(email)) {
        // show success message
        document.getElementById('message').innerHTML = '<span class="success">ok</span>';
    } else {
        // show error message
        document.getElementById('message').innerHTML = '<span class="error">Please enter a valid email address.</span>';
    }
}
