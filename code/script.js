function open_menu() {
  document.getElementById("menu_content").style.width = "100%"
  document.getElementById("header_index").style.display = "none"

}
function close_menu() {
  document.getElementById("menu_content").style.width = "0%"
  document.getElementById("header_index").style.display = "flex"
}

function log_out(){
  sessionStorage.clear("username")
  window.location.assign("admin_page.html")
}


if (sessionStorage.getItem("username")) {
} else {
  document.getElementById("log-out-menu").style.display = "none"
  
}