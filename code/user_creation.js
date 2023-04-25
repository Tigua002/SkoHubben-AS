function submit_sign_up() {
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    console.log(usernameEL)
    if (usernameEL === "") {
        alert("you need to fill inn the username")
        return;
    } else if (passwordEL === "") {
        alert("you need to fill inn the password")
        return;
    } else if (usernameEL.length >= 30) {
        alert("sorry, no more than 30 characters, shorten the username")
        return;
    } else if (passwordEL.length >= 30) {
        alert("sorry, no more than 30 characters, shorten the password")
        return;
    }
    const data = {
        user: usernameEL,
        pass: passwordEL
    }
    console.log(data)
    fetch("/create/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })

}