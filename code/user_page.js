
/*definerer en div for å bruke for placering senere*/
var element = document.getElementById("item-listing")
var check_out = document.getElementById("item_prises")

/*lager variabler som må bli brukt gjennom og utenofor koder*/
var counter = 1
var total_price = 0
var purchase_checker = false
var total_amount

/*legger til en bestemt sko (might come in handy)*/
// function add_shoe(number) {
//     all_shoes[number].antall = all_shoes[number].antall + 1
//     update_total()

// }
// /*fjerner en bestemt sko*/
// function remove_shoe(number) {
//     all_shoes[number].antall = all_shoes[number].antall - 1
//     update_total()
// }

// /*her ligger alle skoene */

/*slik teller jeg alt for admin siden*/
var username = "admin";
var password = "hi";
var user_bought = [
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


var shoe_types = [
    "AJ1R",
    "AJ1C",
    "AJDB",
    "AJDW",
    "JMB",
    "JMR",
    "JR6B",
    "JR6W",
    "NDW",
    "NDB",
    "NIB",
    "NIW",
]


async function Get_Orders() {
    const res = await fetch("http://65.108.15.66:22223/bought/items",
        {
            method: "GET"
        })
    const data = await res.json()
    for (let i = 0; i < data.length; i++) {
        if (data[i].buyer == sessionStorage.getItem("username")) {
            user_bought[0].antall += data[i].AJ1R
            user_bought[1].antall += data[i].AJ1C
            user_bought[2].antall += data[i].AJDB
            user_bought[3].antall += data[i].AJDW

            user_bought[4].antall += data[i].JMB
            user_bought[5].antall += data[i].JMR
            user_bought[6].antall += data[i].JR6B
            user_bought[7].antall += data[i].JR6W

            user_bought[8].antall += data[i].NDW
            user_bought[9].antall += data[i].NDB
            user_bought[10].antall += data[i].NIB
            user_bought[11].antall += data[i].NIW
        }
    }
    document.getElementById("title").innerHTML = sessionStorage.getItem("username") + "'s page"
    update_total()

}


/*oppdater totalen*/
function update_total() {
    /*for loppen går antall ganger som antall sko*/
    for (let i = 0; user_bought.length > i; i++) {
        total_shoes = 0
        items_shoes = 0
        /*skjekker om antall for et spesific type sko er mer en 0 og den ikke er allereda på siden*/
        if (user_bought[i].antall > 0 && user_bought[i].been_before == false) {
            /*skaper alle elementene*/
            let shoes_div = document.createElement("div")
            let shoes_img = document.createElement("img")
            let shoes_counter = document.createElement("h3")
            let shoes_total = document.createElement("h3")
            let img_div = document.createElement("div")
            let shoe_tekst = document.createElement("h3")
            /*legger elementene der de skal være*/
            element.appendChild(shoes_div)
            shoes_div.appendChild(shoe_tekst) 
            shoes_div.appendChild(img_div)
            img_div.appendChild(shoes_img)  
            shoes_div.appendChild(shoes_counter)
            shoes_div.appendChild(shoes_total)

            /*gir elementene klasser, id-er og links*/
            img_div.setAttribute("class", "cart_img_holder")
            shoes_div.setAttribute("class", "shopping_items")
            shoes_div.setAttribute("id", user_bought[i].navn + "_div")
            shoes_img.setAttribute("class", "shopping_image")
            shoes_img.setAttribute("src", user_bought[i].link)
            shoes_counter.setAttribute("class", "counter")
            shoes_counter.setAttribute("id", "count_items_" + user_bought[i].navn)
            shoes_total.setAttribute("id", "total_pay_" + user_bought[i].navn)
            shoes_total.setAttribute("class", "total_items_pay")
            shoe_tekst.setAttribute("class", "cart_full_name")
            shoe_tekst.innerHTML = user_bought[i].full_name



            /*oppdaterer verdien om denne skoen har vært gjennom løkken før*/
            user_bought[i].been_before = true
            /*lagrer antall sko og alt annet*/


        }
        /*skjekker om den har gått gjennon løkker før og om antaller er mindre enn 0 (egentlig unødvendig, siden det er ingen lett måte får å få en verdi til å gå ned))*/
        if (user_bought[i].been_before == true && user_bought[i].antall <= 0) {
            /*definerer hva som skal bli slettet*/
            var shoe_name = document.getElementById(user_bought[i].navn + "_div")
            /*sletter "det"*/
            shoe_name.remove()
            /*oppdaterer viktige verdier*/
            user_bought[i].been_before = false
            user_bought[i].antall = 0
            /*skjekker om hvis den har bare vært før og verdi er mer enn 0*/
        } else if (user_bought[i].been_before == true) {
            /*oppdaterer intærne verdier*/
            total_shoes = + user_bought[i].pris * user_bought[i].antall
            items_shoes = + user_bought[i].antall
            /*oppdaterer extærne verdier*/
            document.getElementById("total_pay_" + user_bought[i].navn).innerHTML = "Total: " + total_shoes
            document.getElementById("count_items_" + user_bought[i].navn).innerHTML = "Bought: " + items_shoes

        }
        /*lagrer alt*/
    }
}

function cause_login() {
    if (sessionStorage.getItem("username")) {
        document.getElementById("login_base").style.display = "none"
        document.getElementById("packing_pay_page").style.display = "flex"
        document.getElementById("empty_packing").style.display = "flex"
        Get_Orders()
    } else {
        document.getElementById("login_base").style.display = "flex"
        document.getElementById("packing_pay_page").style.display = "none"
        document.getElementById("empty_packing").style.display = "none"
    }


}

var usernameEL = document.getElementById("username").value
var passwordEL = document.getElementById("password").value


async function submit_login() {
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()

    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value

    if (username == usernameEL && password == passwordEL) {
        document.getElementById("packing_pay_page").style.display = "flex"
        document.getElementById("empty_packing").style.display = "flex"
        alert_tekst.innerHTML = "Hello admin";
        show_alert();
        Get_Orders()
        update_total()

        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == usernameEL && users[i].passwor == passwordEL) {
            alert_tekst.innerHTML = "Hello " + usernameEL;
            show_alert();
            sessionStorage.setItem("username", usernameEL)
            
        }
    }
}

cause_login()
/*får alt til å gå*/

