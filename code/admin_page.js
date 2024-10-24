
/*definerer en div for å bruke for placering senere*/
var element = document.getElementById("item-listing")
var check_out = document.getElementById("item_prises")
var password_input = document.getElementById("password")
/*lager variabler som må bli brukt gjennom og utenofor koder*/
var counter = 1
var total_price = 0
var purchase_checker = false
var total_amount
var logged_inn = false

// en funktion som blir brukt til å vise passordet
function show_password() {
    if (password_input.type == "password") {
        document.getElementById("login_checkbox").checked = true;
        password_input.type = "text"

    } else {
        document.getElementById("login_checkbox").checked = false;
        password_input.type = "password"

    }
}

// definerer brukernavner og passordet til admin page
var username = "admin";
var password = "hi";
// en liste med alle kjøpte gjenstander
var bought_items = [
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
// en liste alle gjenstandende 1 bruker har kjøpt

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

// her skaffer jeg alle bestillingene
async function Get_Orders() {
    // sender en forespørsel til databasen
    const res = await fetch("http://65.108.15.66:22223/bought/items",
        {
            method: "GET"
        })
    const data = await res.json()
    // for loop som går for hver bestilling
    for (let i = 0; i < data.length; i++) {
        bought_items[0].antall += data[i].AJ1R
        bought_items[1].antall += data[i].AJ1C
        bought_items[2].antall += data[i].AJDB
        bought_items[3].antall += data[i].AJDW

        bought_items[4].antall += data[i].JMB
        bought_items[5].antall += data[i].JMR
        bought_items[6].antall += data[i].JR6B
        bought_items[7].antall += data[i].JR6W

        bought_items[8].antall += data[i].NDW
        bought_items[9].antall += data[i].NDB
        bought_items[10].antall += data[i].NIB
        bought_items[11].antall += data[i].NIW
    }
    // caller funktioner, som gjør alt det visuale
    update_total()
    calculate()
}


/*oppdater totalen*/
function update_total() {
    /*for loppen går antall ganger som antall sko*/
    for (let i = 0; bought_items.length > i; i++) {
        total_shoes = 0
        items_shoes = 0
        /*skjekker om antall for et spesific type sko er mer en 0 og den ikke er allereda på siden*/
        if (bought_items[i].antall > 0 && bought_items[i].been_before == false) {
            /*skaper alle elementene*/
            let shoes_div = document.createElement("div")
            let shoes_img = document.createElement("img")
            let shoes_counter = document.createElement("h3")
            let shoes_total = document.createElement("h3")
            let img_div = document.createElement("div")
            /*legger elementene der de skal være*/
            element.appendChild(shoes_div)
            shoes_div.appendChild(img_div)
            shoes_div.appendChild(shoes_counter)
            shoes_div.appendChild(shoes_total)
            img_div.appendChild(shoes_img)
            /*gir elementene klasser, id-er og links*/
            shoes_div.setAttribute("class", "shopping_items")
            shoes_div.setAttribute("id", bought_items[i].navn + "_div")
            shoes_img.setAttribute("class", "shopping_image")
            shoes_img.setAttribute("src", bought_items[i].link)
            shoes_counter.setAttribute("class", "counter")
            shoes_counter.setAttribute("id", "count_items_" + bought_items[i].navn)
            shoes_total.setAttribute("id", "total_pay_" + bought_items[i].navn)
            shoes_total.setAttribute("class", "total_items_pay")
            img_div.setAttribute("class", "cart_img_holder")



            /*oppdaterer verdien om denne skoen har vært gjennom løkken før*/
            bought_items[i].been_before = true
            /*lagrer antall sko og alt annet*/


        }
        /*skjekker om den har gått gjennon løkker før og om antaller er mindre enn 0 (egentlig unødvendig, siden det er ingen lett måte får å få en verdi til å gå ned))*/
        if (bought_items[i].been_before == true && bought_items[i].antall <= 0) {
            /*definerer hva som skal bli slettet*/
            var shoe_name = document.getElementById(bought_items[i].navn + "_div")
            /*sletter "det"*/
            shoe_name.remove()
            /*oppdaterer viktige verdier*/
            bought_items[i].been_before = false
            bought_items[i].antall = 0
            /*skjekker om hvis den har bare vært før og verdi er mer enn 0*/
        } else if (bought_items[i].been_before == true) {
            /*oppdaterer intærne verdier*/
            total_shoes = + bought_items[i].pris * bought_items[i].antall
            items_shoes = + bought_items[i].antall
            /*oppdaterer extærne verdier*/
            document.getElementById("total_pay_" + bought_items[i].navn).innerHTML = "Total: " + total_shoes
            document.getElementById("count_items_" + bought_items[i].navn).innerHTML = "Bought: " + items_shoes

        }
    }
}

function calculate() {
    /*definerer variabler*/
    var total_price = 0
    var counter = 1
    var total_amount = 0
    /*går like mange ganger som antall sko*/
    for (let i = 0; bought_items.length > i; i++) {
        /*skjekker om skoen ligger i cart-en og om den har blitt lagt til i summen før*/
        if (bought_items[i].been_before == true && bought_items[i].calc_before == false) {
            /*definerer totalen*/
            let shoe_total_price = bought_items[i].antall * bought_items[i].pris
            /*lager elementer*/
            let price_div = document.createElement("div")
            let price_item = document.createElement("p")
            let price_total = document.createElement("p")
            /*oppdaterer total prisen*/
            total_price += shoe_total_price
            total_amount += bought_items[i].antall

            /*legger elementer der de skal være*/
            check_out.appendChild(price_div)
            price_div.appendChild(price_item)
            price_div.appendChild(price_total)

            /*skriver ut alle viktige verdier*/
            price_item.innerHTML = bought_items[i].full_name + ":"
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
            bought_items[i].calc_before = true
            /*hvis skoen er lagt til og har blir kalkulert før så oppdaterer vi verdien*/
        } else if (bought_items[i].been_before == true && bought_items[i].calc_before == true) {
            /*finner ut den totalen av en spesiell sko*/
            let shoe_total_price = bought_items[i].antall * bought_items[i].pris
            /*oppdaterer den totale prisen*/
            total_price += shoe_total_price
            total_amount += bought_items[i].antall
            /*definerer variabler*/
            let price_item = document.getElementById(i + "item")
            let price_total = document.getElementById(i + "total")
            /*oppdaterer visuelle verdier*/
            document.getElementById("Sum").innerHTML = total_price + "kr"
            document.getElementById("antall_solgt").innerHTML = total_amount
            price_item.innerHTML = bought_items[i].full_name + ":"
            price_total.innerHTML = "Subtotal: " + shoe_total_price + "kr"
        }
    }
}

// funktionen som får log in til å funke
function cause_login() {
    // skjekker om username er lagret i sessionStorage
    if (sessionStorage.getItem("username")) {
        // hvis det er det, så sender vi brukeren til account siden
        window.location.assign("account.html")
    }
    // hvis brukeren ikke er logget inn, så åpner vi hele log in siden. mens i skjuler det andre
    document.getElementById("login_base").style.display = "flex"
    document.getElementById("packing_pay_page").style.display = "none"
    document.getElementById("empty_packing").style.display = "none"
}
// definerer variabler, som er forkortelser
var usernameEL = document.getElementById("username").value
var passwordEL = document.getElementById("password").value

// det som skjer når brukeren trykker på log in
async function submit_login() {
    // oppdaterer alle verdiene
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    // sender er forespørsel til databasen om alle brukere
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()
    // hvis passordene og brukernavnet matcher admin brukeren, så er brukeren logget inn som admin 
    if (username == usernameEL && password == passwordEL) {
        // viser all informationen
        document.getElementById("packing_pay_page").style.display = "flex"
        document.getElementById("empty_packing").style.display = "flex"
        // gir en velkommen til admin
        alert_tekst.innerHTML = "Hello admin!"
        document.getElementById("login_base").remove()
        // kjører alle funktionene
        show_alert()
        Get_Orders()
        update_total()
        calculate()
        return;

    } else {

        // går gjennom hver bruker 
        for (let i = 0; i < users.length; i++) {
            //  hvis brukernavnet og passordet matcher, med en av de existerende brukerne
            if (users[i].username == usernameEL && users[i].passwor == passwordEL) {
                //  så gir vi en velcommen
                alert_tekst.innerHTML = "Hello " + usernameEL
                show_alert()
                // og lagrer brukernavnet og passoret i session Storage
                sessionStorage.setItem("password", passwordEL)
                sessionStorage.setItem("username", usernameEL)
                // sender brukeren til account.html
                logged_inn = true
                change_location()
                return;
            }
        }
    }
    // sender en feilmelding om vi ikke finder brukeren
    alert_tekst.innerHTML = "User not found";
    show_alert();

}

// sender brukeren til account siden, når brukeren har logget inn
function change_location() {
    if (logged_inn == true) {
        window.location.assign("account.html")
    }

}
/*får alt til å gå*/
cause_login()


