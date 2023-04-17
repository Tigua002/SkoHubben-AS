// document.getElementsByClassName("button_add_to_cart")[0].addEventListener('click', add_item)
var shoe_selected = false
/*får select feature til å funke litt i hvært fall*/
function border38() {
    document.getElementById("storelse38").style.border = "solid " + "#2D3142 " + "2px"
    document.getElementById("storelse39").style.border = "none"
    document.getElementById("storelse40").style.border = "none"
    document.getElementById("storelse41").style.border = "none"
    document.getElementById("storelse42").style.border = "none"
    document.getElementById("storelse43").style.border = "none"
    shoe_selected = true
}
function border39() {
    document.getElementById("storelse38").style.border = "none"
    document.getElementById("storelse39").style.border = "solid " + "#2D3142 " + "2px"
    document.getElementById("storelse40").style.border = "none"
    document.getElementById("storelse41").style.border = "none"
    document.getElementById("storelse42").style.border = "none"
    document.getElementById("storelse43").style.border = "none"
    shoe_selected = true
}
function border40() {
    document.getElementById("storelse38").style.border = "none"
    document.getElementById("storelse39").style.border = "none"
    document.getElementById("storelse40").style.border = "solid " + "#2D3142 " + "2px"
    document.getElementById("storelse41").style.border = "none"
    document.getElementById("storelse42").style.border = "none"
    document.getElementById("storelse43").style.border = "none"
    shoe_selected = true
}
function border41() {
    document.getElementById("storelse38").style.border = "none"
    document.getElementById("storelse39").style.border = "none"
    document.getElementById("storelse40").style.border = "none"
    document.getElementById("storelse41").style.border = "solid " + "#2D3142 " + "2px"
    document.getElementById("storelse42").style.border = "none"
    shoe_selected = true
}
function border42() {
    document.getElementById("storelse38").style.border = "none"
    document.getElementById("storelse39").style.border = "none"
    document.getElementById("storelse40").style.border = "none"
    document.getElementById("storelse41").style.border = "none"
    document.getElementById("storelse42").style.border = "solid " + "#2D3142 " + "2px"
    document.getElementById("storelse43").style.border = "none"
    shoe_selected = true
}
function border43() {
    document.getElementById("storelse38").style.border = "none"
    document.getElementById("storelse39").style.border = "none"
    document.getElementById("storelse40").style.border = "none"
    document.getElementById("storelse41").style.border = "none"
    document.getElementById("storelse42").style.border = "none"
    document.getElementById("storelse43").style.border = "solid " + "#2D3142 " + "2px"
    shoe_selected = true
}


/*her ligger alle skoene */
var all_shoes = [
    AJ1R = { navn: "AJ1R", pris: 1429, antall: 0, link: "sko/Air_Jordan_1_mid/red_and_black/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan 1 Red and Black" },
    AJ1C = { navn: "AJ1C", pris: 1429, antall: 0, link: "sko/Air_Jordan_1_mid/colorful/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan 1 Lakers" },
    AJDB = { navn: "AJDB", pris: 1899, antall: 0, link: "sko/air_jordan_dub_zero/black/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan Dub Black" },
    AJDW = { navn: "AJDW", pris: 1899, antall: 0, link: "sko/air_jordan_dub_zero/white/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan Dub White" },
    JMB = { navn: "JMB", pris: 1424, antall: 0, link: "sko/jordan_max_aura_4/red&white/total.webp", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 White Top" },
    JMR = { navn: "JMR", pris: 1424, antall: 0, link: "sko/jordan_max_aura_4/white&black/total.webp", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 Black Top" },
    JR6B = { navn: "JR6B", pris: 1999, antall: 0, link: "sko/jordan6rings/black/total.webp", been_before: false, calc_before: false, full_name: "Jordan 6 Rings Black" },
    JR6W = { navn: "JR6W", pris: 1999, antall: 0, link: "sko/jordan6rings/white/total.webp", been_before: false, calc_before: false, full_name: "Jordan 6 Rings White" },
    NDW = { navn: "NDW", pris: 1999, antall: 0, link: "sko/Nike dunk high retro/red/nike_dunk_high_total_view.webp", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Red" },
    NDB = { navn: "NDB", pris: 1999, antall: 0, link: "sko/Nike dunk high retro/black/nike_dunk_shoe_total_view.webp", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Black" },
    NIB = { navn: "NIB", pris: 1425, antall: 0, link: "sko/NikeInfinityReact3/black/total.webp", been_before: false, calc_before: false, full_name: "Nike Infinity React 3 Black" },
    NIW = { navn: "NIW", pris: 1425, antall: 0, link: "sko/NikeInfinityReact3/white/total.webp", been_before: false, calc_before: false, full_name: "Nike Infinity React 3 White" },

]


for (let i = 0; all_shoes.length > i; i++) {
    if (all_shoes[i].navn == document.getElementsByClassName("button_add_to_cart")[0].id) {
        document.getElementById("price_tekst").innerHTML = "Price: " + all_shoes[i].pris + "kr"

    }
}

function add_specific_shoe() {
    if (shoe_selected === true) {
        for (let i = 0; all_shoes.length > i; i++) {
            if (all_shoes[i].navn == document.getElementsByClassName("button_add_to_cart")[0].id) {
                all_shoes[i].antall += 1
                sessionStorage.setItem(all_shoes[i].navn, JSON.stringify(all_shoes[i]))
                alert("Order Recieved, go to the cart to check out.")

            }
        }
    } else {
        alert("Please pick a shoe size")
    }
}
function open_menu() {
    document.getElementById("menu_content").style.width = "100%"
    document.getElementById("header_index").style.display = "none"

  }
  function close_menu() {
    document.getElementById("menu_content").style.width = "0%"
    document.getElementById("header_index").style.display = "flex"
  }


/*liten huske regel fra SIMEN :)*/
// JSON.stringify = objekt -> string
// JSON.parse = string -> objekt