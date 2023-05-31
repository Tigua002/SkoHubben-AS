// skaper et variabel som holder styr på om brukeren skal bli flyttet eller ikke
var moved_on = false
// får hele log in holderen til å vises 
document.getElementById("login_base").style.display = "flex"

// selve funktionen som lar brukeren skape en bruker
async function submit_sign_up() {
    // forkorter noen verdier
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    var password_confEL = document.getElementById("password_confirm").value
    // henter alle brukere fra databasen
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()
    // skjekker om passordene matcher hvis de ikke gjør det, så sender vi en feilmelding
    if (passwordEL != password_confEL) {
        alert_tekst.innerHTML = "the passwords are not matching"
        show_alert()
        return;
    }
    // går gjennom hver bruker som finnes
    for (let i = 0; i < users.length; i++) {
        // skjekker om brukernavnet er allereda tatt
        if (users[i].username.toUpperCase() === usernameEL.toUpperCase()) {
            // hvis det er tatt, så sender vi en feilmelding
            alert_tekst.innerHTML = "Someone else already has that name"
            show_alert()
            return;
        }
    }
    // skjekker om brukernavner er fylt inn, hvis ikke, så sender vi en feilmelding
    if (usernameEL === "" || usernameEL === " ") {
        alert_tekst.innerHTML = "you need to fill inn the username"
        show_alert()
        return;
        // skjekker om passordet er fylt inn, hvis ikke så sender vi en feilmelding
    } else if (passwordEL === "") {
        alert_tekst.innerHTML = "you need to fill inn the password"
        show_alert()
        return;
        // skjekker om brukernavner er lengre enn 30, hvis det er det, så sender vi en feilmelding
    } else if (usernameEL.length >= 30) {
        alert_tekst.innerHTML = "sorry, no more than 30 characters, shorten the username"
        show_alert()
        return;
        // skjekker om passorder er lengre enn 30, hvis det er det, så sender vi en feilmelding
    } else if (passwordEL.length >= 30) {
        alert_tekst.innerHTML = "sorry, no more than 30 characters, shorten the password"
        show_alert()
        return;
    }
    // lagrer brukernavnet og passorder som data
    const data = {
        user: usernameEL,
        pass: passwordEL
    }
    // og sender data-en til databasen 
    fetch("/create/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    // gir en melding til brukeren om at alt gikk bra
    alert_tekst.innerHTML = "User created, log in"
    show_alert()
    moved_on = true
}
// sender brukeren til admin_page for å logge inn
function change_location(){
    if (moved_on == true){
        window.location.assign("admin_page.html")
    }

}