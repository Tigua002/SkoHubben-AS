
var confirm = document.getElementById("confirm")
var confirm_tekst = document.getElementById("confirm_tekst")
var password_counter = false

function proceed() {
    delete_user()
}
function cancel() {
    return;
}
function confirmed() {
    confirm.style.display = "none";
    confirm.close();

}
function alert_confirm() {
    confirm_tekst.innerHTML = "You are about to delete your account, are you sure you wish to proceed?"
    confirm.style.display = "flex";
    confirm.showModal()
}



async function delete_user() {
    // console.log(sessionStorage.getItem("username"))
    // const res = await fetch("http://65.108.15.66:22223/delete/user",
    //     {
    //         method: "GET"
    //     })
    // const data = await res.json()
    let user = sessionStorage.getItem("username")
    const data = {
        username: user
    }
    fetch("/delete/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    sessionStorage.clear("username")
    window.location.assign("index.html")
}

// if (sessionStorage.getItem("username")){

// } else{
//     window.location.assign("admin_page.html")
// }
function hello(){
    document.querySelector("body").style.display = "none"
}

function password_change(){
    if (password_counter == true){
        password_counter = false
        document.getElementById("password_holder").style.height = "0vh"
    } else{
        password_counter = true
        document.getElementById("password_holder").style.height = "auto"
    }
    
}

function username_change(){
    if (password_counter == true){
        password_counter = false
        document.getElementById("username_holder").style.height = "0vh"
    } else{
        password_counter = true
        document.getElementById("username_holder").style.height = "auto"
    }
    
}

async function change_password(){
    let orig_pass = document.getElementById("orig_pass").value;
    let conf_pass = document.getElementById("conf_pass").value;
    if(orig_pass != conf_pass){
        alert_tekst.innerHTML = "The password is not confirmed"
        show_alert()
        return;
    }

    let user = sessionStorage.getItem("username")
    const data = {
        username: user,
        newPass: orig_pass
    }
    fetch("/change/pass", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    alert_tekst.innerHTML = "All done"
    show_alert()
    sessionStorage.setItem("password", orig_pass)
    document.getElementById("password_show").innerHTML = orig_pass
    window.location.assign("user_account.html")
}

async function change_username(){
    let orig_user = document.getElementById("orig_pass").value;
    let conf_user = document.getElementById("conf_pass").value;
    if(orig_user != conf_user){
        alert_tekst.innerHTML = "The password is not confirmed"
        show_alert()
        return;
    }

    let user = sessionStorage.getItem("username")
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
    alert_tekst.innerHTML = "All done"
    show_alert()
    document.getElementById("username_show").innerHTML = orig_user
    window.location.assign("user_account.html")

}


if (document.getElementById("username_show")){
    document.getElementById("username_show").innerHTML = sessionStorage.getItem("username")
}
if (document.getElementById("password_show")){
    document.getElementById("password_show").innerHTML = sessionStorage.getItem("password")
}