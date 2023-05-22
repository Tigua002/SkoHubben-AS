// document.getElementsByClassName("button_add_to_cart")[0].addEventListener('click', add_item)
var shoe_selected = false

var leftEL = document.getElementById("left")
var rightEL = document.getElementById("right")
var topEL = document.getElementById("top")
var bottomEL = document.getElementById("bottom")

var change_color_origEL = document.getElementById("change_color_shoe_orig")
var change_colorEL = document.getElementById("change_color_shoe")
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
    if (all_shoes[i].navn == document.getElementsByClassName("button_add_to_cart")[0].id) {
        document.getElementById("price_tekst").innerHTML = "Price: " + all_shoes[i].pris + "kr"

    }
}
var clicked_shoe = sessionStorage.getItem("shoe")
document.getElementById("price_tekst").innerHTML = "Price: " + all_shoes[clicked_shoe].pris + "kr"

for (let i = 0; all_shoes.length > i; i++) {
    if (sessionStorage.getItem(all_shoes[i].navn) && JSON.parse(sessionStorage.getItem(all_shoes[i].navn))) {
        var shoe_amount = JSON.parse(sessionStorage.getItem(all_shoes[i].navn))
        all_shoes[i].antall = shoe_amount.antall
    }
}

function add_specific_shoe() {
    var clicked_shoe = sessionStorage.getItem("shoe")
    if (shoe_selected === true) {
        all_shoes[clicked_shoe].antall += 1
        sessionStorage.setItem(all_shoes[clicked_shoe].navn, JSON.stringify(all_shoes[clicked_shoe]))
        alert_tekst.innerHTML = "Order Recieved, go to the cart to check out.";
        show_alert();
    } else {
        alert_tekst.innerHTML = "Please pick a shoe size";
        show_alert();
    }
}



var all_Shoe_link = [
    AJ1R = "sko/Air_Jordan_1_mid/black/",
    AJ1C = "sko/Air_Jordan_1_mid/white/",
    AJDB = "sko/air_jordan_dub_zero/black/",
    AJDW = "sko/air_jordan_dub_zero/white/",
    JMB = "sko/jordan_max_aura_4/black/",
    JMR = "sko/jordan_max_aura_4/white/",
    JR6B = "sko/jordan6rings/black/",
    JR6W = "sko/jordan6rings/white/",
    NDW = "sko/Nike_dunk_high_retro/white/",
    NDB = "sko/Nike_dunk_high_retro/black/",
    NIB = "sko/NikeInfinityReact3/black/",
    NIW = "sko/NikeInfinityReact3/white/"
]

function move_to_shoePage(shoe) {
    sessionStorage.setItem("shoe", shoe)
    window.location.assign("sko_page.html")
}

function get_shoes() {
    var shoe_looper = 0;
    var clicked_shoe = sessionStorage.getItem("shoe")
    leftEL.src = all_Shoe_link[clicked_shoe] + "left.webp"
    rightEL.src = all_Shoe_link[clicked_shoe] + "right.webp"
    topEL.src = all_Shoe_link[clicked_shoe] + "top.webp"
    bottomEL.src = all_Shoe_link[clicked_shoe] + "bottom.webp"
    document.getElementById("shoe_desc-tekst").innerHTML = all_shoes[clicked_shoe].full_name
    change_color_origEL.src = all_Shoe_link[clicked_shoe] + "left.webp"
    if (all_Shoe_link[clicked_shoe].includes("white")) {
        change_colorEL.src = leftEL.src.replace("white", "black")
    } else {
        change_colorEL.src = leftEL.src.replace("black", "white")
    }
    for (let i = 0; all_Shoe_link.length > i; i++) {
        if (all_Shoe_link[i] == change_colorEL.src.replace("http://65.108.15.66:22223/", "").replace("left.webp", "")) {
            break;
        } else if (all_Shoe_link[i] == change_colorEL.src.replace("http://127.0.0.1:5501/code/", "").replace("left.webp", "")){
            break;
        } else {
            shoe_looper++
            console.log(change_colorEL.src.replace("http://127.0.0.1:5501/code/", "").replace("left.webp", ""))
        }
    }
    console.log(shoe_looper)
    change_colorEL.setAttribute("onclick", "move_to_shoePage(" + shoe_looper + ")")

}

get_shoes()

/*liten huske regel fra SIMEN :)*/
// JSON.stringify = objekt -> string
// JSON.parse = string -> objekt


