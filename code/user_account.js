
var confirm = document.getElementById("confirm")
var confirm_tekst = document.getElementById("confirm_tekst")


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
    console.log(sessionStorage.getItem("username"))
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
}