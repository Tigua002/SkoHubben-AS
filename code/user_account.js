// skaper 2  variabler, som gjør det lettere å kalle confirm funktionen 
var confirm = document.getElementById("confirm")
var confirm_tekst = document.getElementById("confirm_tekst")
// skaper 2 variabler som brukes til å holder styr på om change username og password er åpent eller ikke
var password_counter = false
var user_counter = false
// dette caller en funktion som lukker confirmation screen
function confirmed() {
    confirm.style.display = "none";
    confirm.close();

}
// dette er en funktion som spør brukeren om confirmation
function alert_confirm() {
    confirm_tekst.innerHTML = "You are about to delete your account, are you sure you wish to proceed?"
    confirm.style.display = "flex";
    confirm.showModal()
}


// her sletter vi brukeren
async function delete_user() {
    // definerer "user" som hva brukeren er logget inn som
    let user = sessionStorage.getItem("username")
    // sender data-en til databasen
    const data = {
        username: user
    }
    // kaller slett bruker
    fetch("/delete/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // logger brukeren ut
    sessionStorage.clear("username")
    // sender brukeren tilbake til index-en
    window.location.assign("index.html")
}


// en funktion som åpner/lukker en box, hvor man skriver inn det nye passordet sitt
function password_change() {
    // password counter teller om boxen er allerede åpen eller ikke
    if (password_counter == true) {
        password_counter = false
        document.getElementById("password_holder").style.height = "0vh"
    } else {
        password_counter = true
        document.getElementById("password_holder").style.height = "auto"
    }

}
// en funktion som åpner/lukker en box, hvor man skriver inn det nye brukernavnet sitt
function username_change() {
    // user_counter teller om boxden er allerede åpen eller ikke
    if (user_counter == true) {
        user_counter = false
        document.getElementById("username_holder").style.height = "0vh"
    } else {
        user_counter = true
        document.getElementById("username_holder").style.height = "auto"
    }

}
// funktionen som endrer passordet
async function change_password() {
    // setter 2 verdier som er det nye passordet og det confirmerte passordet
    let orig_pass = document.getElementById("orig_pass").value;
    let conf_pass = document.getElementById("conf_pass").value;
    // hvis passordene ikke matcher, så gir vi brukeren en feil melding
    if (orig_pass != conf_pass) {
        alert_tekst.innerHTML = "The password is not confirmed"
        show_alert()
        return;
    }
    // hvis passordet ikke er fylt inn så, gir vi brukeren en feilmelding
    if (orig_user == ""){
        alert_tekst.innerHTML = "You must fill in the username"
        show_alert()
        return
    }
    // definerer "user" som brukernavnet til brukeren
    let user = sessionStorage.getItem("username")
    // definerer data-en som brukernavnet og det nye passordet
    const data = {
        username: user,
        newPass: orig_pass
    }
    fetch("/change/pass", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        // sender data-en
        body: JSON.stringify(data)
    })
    // sender en alert som forteller brukeren at alt gikk fint
    alert_tekst.innerHTML = "All done"
    show_alert()
    // lagrere det nye passordet i session storage
    sessionStorage.setItem("password", orig_pass)
    // oppdaterer teksten på siden
    document.getElementById("password_show").innerHTML = orig_pass
    // refresher vinduet
    window.location.assign("user_account.html")
}

async function change_username() {
    // setter 2 verdier som er det nye brukernavnet det confirmerte brukernavnet
    let orig_user = document.getElementById("orig_user").value;
    let conf_user = document.getElementById("conf_user").value;
    // hvis brukernavnene ikke matcher, så sender vi en feilmelding
    if (orig_user != conf_user) {
        alert_tekst.innerHTML = "The Username is not confirmed"
        show_alert()
        return;
    }
    // hvis brukernavner ikke er fylt inn så sender vi en feilmelding
    if (orig_user == ""){
        alert_tekst.innerHTML = "You must fill in the username"
        show_alert()
        return
    }
    // skaffer alle de forrige brukernavnene fra databasen
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    // definerer "users" som alle brukerne
    var users = await res.json()
    // går for hver bruker i "users"
    for (let i = 0; i < users.length; i++) {
        // hvis brukernavnet til noen ander matcher det nye navner, så sender vi en feilmelding
        if (users[i].username.toUpperCase()  == orig_user.toUpperCase()) {
            alert_tekst.innerHTML = "Someone else already has that name"
            show_alert()
            return;
        }
    }

    // defineren "user" som navnet til brukeren
    let user = sessionStorage.getItem("username")
    // sender brukernavner og det nye brukernavnet til databasen
    const data = {
        username: user,
        newUser: orig_user
    }
    fetch("/change/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // sender en alert om at alt er ferdig
    alert_tekst.innerHTML = "All done"
    show_alert()
    // oppdaterer navnet til brukeren
    sessionStorage.setItem("username", orig_user)
    // oppdateren tekst
    document.getElementById("username_show").innerHTML = orig_user
    // refresher vinduett
    window.location.assign("user_account.html")

}
// skjekker om brukeren er logget inn, hvis den ikke er det, så sender vi dem til admin page
if (sessionStorage.getItem("username")){

} else{
    window.location.assign("admin_page.html")
}
// oppdaterer alle brukernavnene og passordende som blir vist
document.getElementById("username_show").innerHTML = sessionStorage.getItem("username")
document.getElementById("password_show").innerHTML = sessionStorage.getItem("password")
document.getElementById("welcome_tekst").innerHTML = "Welcome " + sessionStorage.getItem("username")
