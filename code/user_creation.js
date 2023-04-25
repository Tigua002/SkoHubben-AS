var usernameEL = document.getElementById("username").value
var passwordEL = document.getElementById("password").value

function submit_sign_up() {



}

async function submit_sign_up() {
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()

    // return users;
    for (let i = 0; i > users.length; i++){
        if (users[i].username === usernameEL){
            alert("Someone else already has that name")
            return;
        }
    }
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

    fetch("/create/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
}