function open_menu() {
  document.getElementById("menu_content").style.width = "100%"
  document.getElementById("header_index").style.display = "none"

}
function close_menu() {
  document.getElementById("menu_content").style.width = "0%"
  document.getElementById("header_index").style.display = "flex"
}

function log_out() {
  sessionStorage.clear("username")
  window.location.assign("admin_page.html")
}


if (sessionStorage.getItem("username")) {
} else {
  document.getElementById("log-out-menu").style.display = "none"

}
var cart_amount = 0;

var all_shoes = [
  AJ1R = { navn: "AJ1R", pris: 1429, antall: 0, link: "sko/TotalsNoBC/R&B.png", been_before: false, calc_before: false, full_name: "Air Jordan 1 Red and Black" },
  AJ1C = { navn: "AJ1C", pris: 1429, antall: 0, link: "sko/TotalsNoBC/totalCF.png", been_before: false, calc_before: false, full_name: "Air Jordan 1 Lakers" },
  AJDB = { navn: "AJDB", pris: 1899, antall: 0, link: "sko/TotalsNoBC/TotalAB.png", been_before: false, calc_before: false, full_name: "Air Jordan Dub Black" },
  AJDW = { navn: "AJDW", pris: 1899, antall: 0, link: "sko/TotalsNoBC/TotalAW.png", been_before: false, calc_before: false, full_name: "Air Jordan Dub White" },
  JMB = { navn: "JMB", pris: 1424, antall: 0, link: "sko/TotalsNoBC/totalMB.png", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 White Top" },
  JMR = { navn: "JMR", pris: 1424, antall: 0, link: "sko/TotalsNoBC/totalMW.png", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 Black Top" },
  JR6B = { navn: "JR6B", pris: 1999, antall: 0, link: "sko/TotalsNoBC/totalRB.png", been_before: false, calc_before: false, full_name: "Jordan 6 Rings Black" },
  JR6W = { navn: "JR6W", pris: 1999, antall: 0, link: "sko/TotalsNoBC/totalRW.png", been_before: false, calc_before: false, full_name: "Jordan 6 Rings White" },
  NDW = { navn: "NDW", pris: 1999, antall: 0, link: "sko/TotalsNoBC/totalDW.png", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Red" },
  NDB = { navn: "NDB", pris: 1999, antall: 0, link: "sko/TotalsNoBC/totalDB.png", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Black" },
  NIB = { navn: "NIB", pris: 1425, antall: 0, link: "sko/TotalsNoBC/totalIB.png", been_before: false, calc_before: false, full_name: "Nike Infinity Retro Black" },
  NIW = { navn: "NIW", pris: 1425, antall: 0, link: "sko/TotalsNoBC/totalIW.png", been_before: false, calc_before: false, full_name: "Nike Infinity Retro White" },

]

for (let i = 0; all_shoes.length > i; i++) {
  if (sessionStorage.getItem(all_shoes[i].navn) && JSON.parse(sessionStorage.getItem(all_shoes[i].navn))) {
    var shoe_amount = JSON.parse(sessionStorage.getItem(all_shoes[i].navn))
    all_shoes[i].antall = shoe_amount.antall
  }
}

function cart_counter() {
  
  cart_amount = 0;
  for (let i = 0; all_shoes.length > i; i++) {
    if (all_shoes[i].antall > 0) {
      cart_amount += 1;
    }
  }

  document.getElementById("cart_counter").innerHTML = cart_amount
  document.getElementById("cart_menu").innerHTML = "Cart(" + cart_amount + ")";
}

var alerts = document.getElementById("alerts")
var alert_tekst = document.getElementById("alert_tekst")

var confirm = document.getElementById("confirm")
var confirm_tekst = document.getElementById("confirm_tekst")

function show_alert() {
  alerts.style.display = "flex";
  alerts.showModal()
}

function close_modal() {
  alerts.style.display = "none";
  alerts.close();

}

function to_user_page(){
  window.location.assign("admin_page.html")
}

function to_account_page(){
  window.location.assign("account.html")
}

cart_counter()
close_modal()
