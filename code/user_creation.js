var usernameEL = document.getElementById("username").value
var passwordEL = document.getElementById("password").value
var password_confEL = document.getElementById("password_confirm").value
var moved_on = false
document.getElementById("login_base").style.display = "flex"
async function submit_sign_up() {
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    var password_confEL = document.getElementById("password_confirm").value
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()

    // return users;
    if (passwordEL != password_confEL) {
        alert_tekst.innerHTML = "the passwords are not matching"
        show_alert()
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usernameEL) {
            alert_tekst.innerHTML = "Someone else already has that name"
            show_alert()
            return;
        }
    }
    if (passwordEL != password_confEL) {
        alert_tekst.innerHTML = "the passwords are not matching"
        show_alert()
        return;
    }
    if (usernameEL === "") {
        alert_tekst.innerHTML = "you need to fill inn the username"
        show_alert()
        return;
    } else if (passwordEL === "") {
        alert_tekst.innerHTML = "you need to fill inn the password"
        show_alert()
        return;
    } else if (usernameEL.length >= 30) {
        alert_tekst.innerHTML = "sorry, no more than 30 characters, shorten the username"
        show_alert()
        return;
    } else if (passwordEL.length >= 30) {
        alert_tekst.innerHTML = "sorry, no more than 30 characters, shorten the password"
        show_alert()
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
    alert_tekst.innerHTML = "User created, log in"
    show_alert()
    moved_on = true
}

function change_location(){
    if (moved_on == true){
        window.location.assign("admin_page.html")
    }

}