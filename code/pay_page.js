/*definerer 2 div-er for å bruke for placering senere*/
var element = document.getElementById("item-listing")
var check_out = document.getElementById("item_prises")

/*lager variabler som må bli brukt gjennom og utenfor koden*/
var shoe_remover = 0
var counter = 1
var total_price = 0
var purchase_checker = false
var no_shoes = false
var delete_shoe = false
/*legger til en bestemt sko*/
function add_shoe(number) {
    all_shoes[number].antall = all_shoes[number].antall + 1
    // kjører functionene som har ansvar for å holde styr på sidene og hvor mange sko det er
    update_total()
    calculate()
}

/*fjerner en bestemt sko*/
function remove_shoe(number) {
    // globaliserer et variabel
    shoe_remover = number
    //hvis antallet på skoen er 1 og om har har slettet skoen før (for å unga at programmet kjører samme greie om og om igjen)
    if (all_shoes[number].antall == 1 && delete_shoe == false) {
        //  sender en confirmation om brukeren skal fjerne skoen helt
        // endrer tekster
        confirm_tekst.innerHTML = "You are about to remove a shoe from your bag";
        //  viser, confirmationen
        alert_confirm();

        return;
    }
    //fjerner en sko
    all_shoes[shoe_remover].antall = all_shoes[shoe_remover].antall - 1
    // oppdater alle veridier og all visuale reprationer
    update_total()
    calculate()

}
// en function som runner hvis brukeren sier ja til confirmation til å fjerne den siste skoen-
function proceed() {
    // oppdaterer verdier
    delete_shoe = true
    // resetter verier på skoen, for å ungå problemer 
    all_shoes[shoe_remover].been_before = false
    all_shoes[shoe_remover].calc_before = false
    //caller functionen til å fjerne den siste skoen
    remove_shoe(shoe_remover)
    // oppdaterer cart counteren (det lille tallet øverst til høyre)
    cart_amount()
    //  sletter den visuale reprasantationen for skoen
    document.getElementById(all_shoes[shoe_remover].navn + "_div").remove()
    //oppdaterer verdien på nytt
    delete_shoe = false
}
function cancel() {
    //hva som skjer vis brukeren avlyser å fjerne den siste av en sko type
    document.getElementById("packing_pay_page").style.display = "flex";
    document.getElementById("EMP").style.width = "0%"
    delete_shoe = false
    update_total()
    calculate()

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
/*slik teller jeg alt for admin siden*/
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

/*skjekker om noe finnes før*/
//går gjennom hver sko i "bought_items"
// (jeg trenger ikke denne lenger, men i tilfelle databasen feiler så bruker jeg denne)
for (let i = 0; bought_items.length > i; i++) {
    if (sessionStorage.getItem(bought_items[i].navn + "_bought")) {
        var shoe_amount = parseInt(sessionStorage.getItem(bought_items[i].navn + "_bought"))
        bought_items[i].antall = shoe_amount
    }
}
/*skjekker om noe finner før*/
// går gjennom hver sko i "all_shoes"
for (let i = 0; all_shoes.length > i; i++) {
    // hvis jeg har lagt til en sko i session storage, så legger vi den skoen til i all shoes
    if (sessionStorage.getItem(all_shoes[i].navn) && JSON.parse(sessionStorage.getItem(all_shoes[i].navn))) {
        var shoe_amount = JSON.parse(sessionStorage.getItem(all_shoes[i].navn))
        all_shoes[i].antall = shoe_amount.antall
    }
}
/*oh, here we go... 
    oppdatere totalen
*/
function update_total() {
    /*for loopen går antall ganger som antall sko*/
    for (let i = 0; all_shoes.length > i; i++) {
        total_shoes = 0
        items_shoes = 0
        /*skjekker om det er langt til sko og om den har blitt lagt inn i løkken får*/
        if (all_shoes[i].antall > 0 && all_shoes[i].been_before == false) {
            /*lager hele div-en til sko-checkout*/
            let shoes_div = document.createElement("div")
            let img_div = document.createElement("div")
            let shoes_img = document.createElement("img")
            let shoes_counter = document.createElement("h3")
            let shoes_total = document.createElement("h3")
            let shoes_button = document.createElement("button")
            let shoes_plus = document.createElement("button")
            let shoes_button_div = document.createElement("div")
            let shoe_tekst = document.createElement("h3")
            /*legger skoene i riktig div slik at alt passer*/
            element.appendChild(shoes_div)
            shoes_div.appendChild(shoe_tekst)
            shoes_div.appendChild(img_div)
            img_div.appendChild(shoes_img)
            shoes_div.appendChild(shoes_counter)
            shoes_div.appendChild(shoes_total)
            shoes_div.appendChild(shoes_button_div)
            shoes_button_div.appendChild(shoes_button)
            shoes_button_div.appendChild(shoes_plus)
            /*legger til klasser, onclicks, id-er. Alt som er intearnt*/
            shoes_div.setAttribute("class", "shopping_items")
            shoes_div.setAttribute("id", all_shoes[i].navn + "_div")
            shoes_img.setAttribute("class", "shopping_image")
            shoes_img.setAttribute("src", all_shoes[i].link)
            shoes_counter.setAttribute("class", "counter")
            img_div.setAttribute("class", "cart_img_holder")
            shoes_counter.setAttribute("id", "count_items_" + all_shoes[i].navn)
            shoes_total.setAttribute("id", "total_pay_" + all_shoes[i].navn)
            shoes_total.setAttribute("class", "total_items_pay")
            shoe_tekst.setAttribute("class", "cart_full_name")
            shoe_tekst.innerHTML = all_shoes[i].full_name
            shoes_button_div.setAttribute("class", "button_div")
            shoes_button.setAttribute("class", "subtract")
            shoes_button.setAttribute("onclick", "remove_shoe(" + i + ")")
            shoes_plus.setAttribute("class", "add")
            shoes_plus.setAttribute("onclick", "add_shoe(" + i + ")")

            /*legger til tekst til knappene*/
            shoes_button.innerHTML = "Remove 1"
            shoes_plus.innerHTML = "ADD 1"
            /*forteller at vi har gått gjennom denne if-en før*/
            all_shoes[i].been_before = true
            /*lagrer verdien av en sko i session storage*/
            sessionStorage.setItem(all_shoes[i].navn, JSON.stringify(all_shoes[i]))

        }
        /*skjekker om skoen har blitt lagt til i checkout page, og hvis den har det så skjekker vi om 
        hvis antallet på skoen er 0 eller mindre, hvis det er det, så fjerner vi skoen fra
        shopping- carten*/
        if (all_shoes[i].been_before == true && all_shoes[i].antall <= 0) {
            var shoe_name = document.getElementById(all_shoes[i].navn + "_div")
            /*fjerner skoen*/
            shoe_name.remove()
            document.getElementById(i + "item").remove()
            document.getElementById(i + "total").remove()
            /*sier ifra at det er trygt å legge til samme sko igjen*/
            all_shoes[i].been_before = false
            all_shoes[i].antall = 0
            /*oppdaterer alle verider*/
            sessionStorage.setItem(all_shoes[i].navn, JSON.stringify(all_shoes[i]))
            /*hvis den har vært før, så oppdaterer vi alle verdier i div-en*/
        } else if (all_shoes[i].been_before == true) {
            /*finner totalen på skoen*/
            total_shoes = + all_shoes[i].pris * all_shoes[i].antall
            /*finner antall sko*/
            items_shoes = + all_shoes[i].antall
            /*oppdaterer alle verdier*/
            document.getElementById("total_pay_" + all_shoes[i].navn).innerHTML = "Total: " + total_shoes
            document.getElementById("count_items_" + all_shoes[i].navn).innerHTML = "Amount: " + items_shoes
            document.getElementById("Sum").innerHTML = total_price + "kr"
        }
        /*lagrer alle endringer*/
        sessionStorage.setItem(all_shoes[i].navn, JSON.stringify(all_shoes[i]))
    }
}
/*finner ut hele summen*/
function calculate() {
    /*definerer variabler*/
    var total_price = 0
    var counter = 1
    /*går like mange ganger som antall sko*/
    for (let i = 0; all_shoes.length > i; i++) {
        /*skjekker om skoen ligger i cart-en og om den har blitt lagt til i summen før*/
        if (all_shoes[i].been_before == true && all_shoes[i].calc_before == false) {
            /*definerer totalen*/
            let shoe_total_price = all_shoes[i].antall * all_shoes[i].pris
            /*lager elementer*/
            let price_div = document.createElement("div")
            let price_item = document.createElement("p")
            let price_total = document.createElement("p")
            /*oppdaterer total prisen*/
            total_price += shoe_total_price

            /*legger elementer der de skal være*/
            check_out.appendChild(price_div)
            price_div.appendChild(price_item)
            price_div.appendChild(price_total)

            /*skriver ut alle viktige verdier*/
            price_item.innerHTML = all_shoes[i].full_name + ":"
            price_total.innerHTML = "Subtotal: " + shoe_total_price + "kr"
            document.getElementById("Sum").innerHTML = total_price + "kr"
            /*gir elementer klasser og id-er*/
            price_div.setAttribute("class", "item_nr_1")
            price_total.setAttribute("class", "subtotal")
            price_item.setAttribute("id", i + "item")
            price_total.setAttribute("id", i + "total")
            /*teller antall ganger den far gått gjennom*/
            counter++
            /*oppdaterer verdien om den far gått gjennom kalkulatoren før*/
            all_shoes[i].calc_before = true
            /*hvis skoen er lagt til og har blir kalkulert før så oppdaterer vi verdien*/
        } else if (all_shoes[i].been_before == true && all_shoes[i].calc_before == true) {
            /*finner ut den totalen av en spesiell sko*/
            let shoe_total_price = all_shoes[i].antall * all_shoes[i].pris
            /*oppdaterer den totale prisen*/
            total_price += shoe_total_price
            /*definerer variabler*/
            let price_item = document.getElementById(i + "item")
            let price_total = document.getElementById(i + "total")
            /*oppdaterer visuelle verdier*/
            document.getElementById("Sum").innerHTML = total_price + "kr"
            price_item.innerHTML = all_shoes[i].full_name + ":"
            price_total.innerHTML = "Subtotal: " + shoe_total_price + "kr"


        }
    }
}
// hva brukeren er, hvis det ikke finnes i session storage
var user = "anonymous"
/*hva som skjer når du trykker på "purchase"*/
function purchase() {
    //  hvis det finnes et brukernavn i session storage
    if (sessionStorage.getItem("username")) {
        // så er variablet "user" det brukernavnet
        user = sessionStorage.getItem("username")
    }
    // alerter brukeren om at han fikk kjøpt alt 
    alert_tekst.innerHTML = "Thank you for your purchase!";
    show_alert();
    //sletter alt på pay page
    document.getElementById("packing_pay_page").remove()
    // all informationen som skal bli sent til databaser
    const data = {
        AJ1R: all_shoes[0].antall,
        AJ1C: all_shoes[1].antall,
        AJDB: all_shoes[2].antall,
        AJDW: all_shoes[3].antall,
        JMB: all_shoes[4].antall,
        JMR: all_shoes[5].antall,
        JR6B: all_shoes[6].antall,
        JR6W: all_shoes[7].antall,
        NDW: all_shoes[8].antall,
        NDB: all_shoes[9].antall,
        NIB: all_shoes[10].antall,
        NIW: all_shoes[11].antall,
        buyer: user,
    }
    // sender alt til index.js, den som er utenfor folderet "code"
    fetch("/buy/shoe", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    /*igjen; går antall ganger som antall sko*/
    for (let i = 0; all_shoes.length > i; i++) {
        /*skjekker om en div existerer, hvis den existerer, så sletter vi den (liten fail safe)*/
        if (document.getElementById(all_shoes[i].navn + "_div")) {

            /*definerer div navn*/
            var shoe_name = document.getElementById(all_shoes[i].navn + "_div")
            /*sletter div-em*/
            shoe_name.remove()

            /*oppdaterer antall sko som er skjøpt*/

            /*skjekker om noe har blitt skjøpt*/
        }
        bought_items[i].antall = bought_items[i].antall + all_shoes[i].antall
        sessionStorage.setItem(bought_items[i].navn + "_bought", bought_items[i].antall)

        all_shoes[i].antall = 0
        sessionStorage.setItem(all_shoes[i].navn, JSON.stringify(all_shoes[i]))
    }

    /*hvis noe blir skjøpt, så slettes alt på siden*/

}




var tester = 0
// går antall ganger som sko*/
function cart_amount() {
    tester = 0
    for (let i = 0; all_shoes.length > i; i++) {
        /*skjekker om en spesific sko er på siden*/
        if (all_shoes[i].been_before == false) {
            /*legger til en verdi, den totale verdien av "tester" er hvor mange sko som ikke er på siden*/
            tester += 1
        }
        /*hvis ingen sko er der, så slettes alt på siden, og gir en melding som sier at du må velge noe*/
        if (all_shoes.length == tester) {
            /*oppdaterer alle sko verdier i tilfelle*/
            all_shoes[i].been_before = false
            all_shoes[i].calc_before = false
            /*fjerner alt*/
            document.getElementById("packing_pay_page").style.display = "none"
            no_shoes = true
            close_modal()
            /*gir feil meldingen*/
            document.getElementById("EMP").innerHTML = "Your shopping cart is empty, go get a shoe and return here"
            document.getElementById("EMP").style.width = "100%"

        } else {
        }

    }
}

function change_location() {
    if (no_shoes = true) {
        window.location.assign("index.html")
    }
}
function alert_confirm() {
    confirm.style.display = "flex";
    confirm.showModal()
}
function confirmed() {
    confirm.style.display = "none";
    confirm.close();

}
// fjerner alerten, (liten fail safe)
confirmed()
/*før de første kalkulationene til å gå*/
update_total()
calculate()
cart_amount()