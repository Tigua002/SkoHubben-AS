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
    confirm.style.display = "flex";
    confirm.showModal()
}



async function delete_user() {
    const res = await fetch("http://65.108.15.66:22223/delete/user",
        {
            method: "GET"
        })
    const data = await res.json()



}