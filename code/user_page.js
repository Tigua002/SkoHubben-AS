
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
    AJ1R = { navn: "AJ1R", pris: 1429, antall: 1, link: "sko/Air_Jordan_1_mid/red_and_black/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan 1 Red and Black" },
    AJ1C = { navn: "AJ1C", pris: 1429, antall: 0, link: "sko/Air_Jordan_1_mid/colorful/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan 1 Lakers" },
    AJDB = { navn: "AJDB", pris: 1899, antall: 0, link: "sko/air_jordan_dub_zero/black/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan Dub Black" },
    AJDW = { navn: "AJDW", pris: 1899, antall: 0, link: "sko/air_jordan_dub_zero/white/total.webp", been_before: false, calc_before: false, full_name: "Air Jordan Dub White" },
    JMB = { navn: "JMB", pris: 1424, antall: 0, link: "sko/jordan_max_aura_4/red&white/total.webp", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 White Top" },
    JMR = { navn: "JMR", pris: 1424, antall: 0, link: "sko/jordan_max_aura_4/white&black/total.webp", been_before: false, calc_before: false, full_name: "Jordan Max Aura 4 Black Top" },
    JR6B = { navn: "JR6B", pris: 1999, antall: 0, link: "sko/jordan6rings/black/total.webp", been_before: false, calc_before: false, full_name: "Jordan 6 Rings Black" },
    JR6W = { navn: "JR6W", pris: 1999, antall: 0, link: "sko/jordan6rings/white/total.webp", been_before: false, calc_before: false, full_name: "Jordan 6 Rings White" },
    NDW = { navn: "NDW", pris: 1999, antall: 0, link: "sko/Nike dunk high retro/red/nike_dunk_high_total_view.webp", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Red" },
    NDB = { navn: "NDB", pris: 1999, antall: 0, link: "sko/Nike dunk high retro/black/nike_dunk_shoe_total_view.webp", been_before: false, calc_before: false, full_name: "Nike Dunk High Retro Black" },
    NIB = { navn: "NIB", pris: 1425, antall: 0, link: "sko/NikeInfinityReact3/black/total.webp", been_before: false, calc_before: false, full_name: "Nike Infinity Retro Black" },
    NIW = { navn: "NIW", pris: 1425, antall: 0, link: "sko/NikeInfinityReact3/white/total.webp", been_before: false, calc_before: false, full_name: "Nike Infinity Retro White" },
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
    update_total()
    calculate()
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
            /*legger elementene der de skal være*/
            element.appendChild(shoes_div)
            shoes_div.appendChild(shoes_img)
            shoes_div.appendChild(shoes_counter)
            shoes_div.appendChild(shoes_total)

            /*gir elementene klasser, id-er og links*/
            shoes_div.setAttribute("class", "shopping_items")
            shoes_div.setAttribute("id", user_bought[i].navn + "_div")
            shoes_img.setAttribute("class", "shopping_image")
            shoes_img.setAttribute("src", user_bought[i].link)
            shoes_counter.setAttribute("class", "counter")
            shoes_counter.setAttribute("id", "count_items_" + user_bought[i].navn)
            shoes_total.setAttribute("id", "total_pay_" + user_bought[i].navn)
            shoes_total.setAttribute("class", "total_items_pay")




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

function calculate() {
    /*definerer variabler*/
    var total_price = 0
    var counter = 1
    var total_amount = 0
    /*går like mange ganger som antall sko*/
    for (let i = 0; user_bought.length > i; i++) {
        /*skjekker om skoen ligger i cart-en og om den har blitt lagt til i summen før*/
        if (user_bought[i].been_before == true && user_bought[i].calc_before == false) {
            /*definerer totalen*/
            let shoe_total_price = user_bought[i].antall * user_bought[i].pris
            /*lager elementer*/
            let price_div = document.createElement("div")
            let price_item = document.createElement("p")
            let price_total = document.createElement("p")
            /*oppdaterer total prisen*/
            total_price += shoe_total_price
            total_amount += user_bought[i].antall

            /*legger elementer der de skal være*/
            check_out.appendChild(price_div)
            price_div.appendChild(price_item)
            price_div.appendChild(price_total)

            /*skriver ut alle viktige verdier*/
            price_item.innerHTML = user_bought[i].full_name + ":"
            price_total.innerHTML = "Subtotal: " + shoe_total_price + "kr"
            document.getElementById("antall_solgt").innerHTML = total_amount
            document.getElementById("Sum").innerHTML = total_price + "kr"
            /*gir elementer klasser og id-er*/
            price_div.setAttribute("class", "item_nr_1")
            price_total.setAttribute("class", "subtotal")
            price_item.setAttribute("id", i + "item")
            price_total.setAttribute("id", i + "total")
            /*teller antall ganger den far gått gjennom*/
            counter++
            /*oppdaterer verdien om den far gått gjennom kalkulatoren før*/
            user_bought[i].calc_before = true
            /*hvis skoen er lagt til og har blir kalkulert før så oppdaterer vi verdien*/
        } else if (user_bought[i].been_before == true && user_bought[i].calc_before == true) {
            /*finner ut den totalen av en spesiell sko*/
            let shoe_total_price = user_bought[i].antall * user_bought[i].pris
            /*oppdaterer den totale prisen*/
            total_price += shoe_total_price
            total_amount += user_bought[i].antall
            /*definerer variabler*/
            let price_item = document.getElementById(i + "item")
            let price_total = document.getElementById(i + "total")
            /*oppdaterer visuelle verdier*/
            document.getElementById("Sum").innerHTML = total_price + "kr"
            document.getElementById("antall_solgt").innerHTML = total_amount
            price_item.innerHTML = user_bought[i].full_name + ":"
            price_total.innerHTML = "Subtotal: " + shoe_total_price + "kr"
        }
    }
}

function cause_login() {
    if (sessionStorage.getItem("username")){
        document.getElementById("login_base").style.display ="none"
    } else {
        document.getElementById("login_base").style.display ="flex"
    }
    document.getElementById("packing_pay_page").style.display = "none"
    document.getElementById("empty_packing").style.display = "none"

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
        alert("Hello admin")
        Get_Orders()
        update_total()
        calculate()
        return;
    } 
    for (let i = 0; i < users.length; i++){
        if (users[i].username == usernameEL && users[i].passwor == passwordEL){
            alert("Hello " + usernameEL)
            sessionStorage.setItem("username", usernameEL)
            user_order()
        }
    }
}
cause_login()
/*får alt til å gå*/

