// et variabel som skjekker om brukeren har valgt en sko
var shoe_selected = false
// lager variabler som corresponerer til bildene
var leftEL = document.getElementById("left")
var rightEL = document.getElementById("right")
var topEL = document.getElementById("top")
var bottomEL = document.getElementById("bottom")
// lager variabler slik at det blir lettere å referere til farge bytte
var change_color_origEL = document.getElementById("change_color_shoe_orig")
var change_colorEL = document.getElementById("change_color_shoe")
// her lager jeg borderen
function border(number){
    // definerer sko som alle de forskjellige størrelsene
    var sko = document.getElementsByClassName("Size_kubes")
    // går for hver sko størrelse og setter alle til å ikke ha en border
    for (let i = 0; i < sko.length; i++){
        sko[i].style.border = "none"
    }
    // oppdaterer bprder-en til skoen
    sko[number].style.border = "solid #2D3142 1px"
    // oppdaterer verdien til true for å sybolisere at brukeren
    // har valgt en sko
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


// clicked shoe er hvilken sko, som ble trykket på
var clicked_shoe = sessionStorage.getItem("shoe")
// 

// setter prisen på siden
document.getElementById("price_tekst").innerHTML = "Price: " + all_shoes[clicked_shoe].pris + "kr"

// dette er funktionen til å legge til en sko
function add_specific_shoe() {
    // oppdaterer verdien til clicked shoe, i tilfelle noe har skjedd
    clicked_shoe = sessionStorage.getItem("shoe")
    // en if for å skjekke om brukeren har valgt størrelse
    if (shoe_selected === true) {
        // legger til en sko til all_shoes 
        all_shoes[clicked_shoe].antall += 1
        // lagrer skoen brukeren kjøpte i session storage
        sessionStorage.setItem(all_shoes[clicked_shoe].navn, JSON.stringify(all_shoes[clicked_shoe]))
        // sender melding til brukeren om at alt er ferdig
        alert_tekst.innerHTML = "Order Recieved, go to the cart to check out.";
        show_alert();
    } else {
        // sender en feilmelding til brukeren 
        alert_tekst.innerHTML = "Please pick a shoe size";
        show_alert();
    }
}


// en array med alle sko linkene, det er det jeg bruker til å vise bildene
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
// en function som sender deg til sko page 
function move_to_shoePage(shoe) {
    // lagrer hvilken plass i arrayen skoen er
    sessionStorage.setItem("shoe", shoe)
    window.location.assign("sko_page.html")
}
// en funktion som plasserer alle bildene på siden
function get_shoes() {
    // definerer et variabel som
    var shoe_looper = 0;
    // oppdaterer verdien til clicked_shoe
    var clicked_shoe = sessionStorage.getItem("shoe")
    // oppdaterer src-en til alle bildene for å matche skoen
    leftEL.src = all_Shoe_link[clicked_shoe] + "left.webp"
    rightEL.src = all_Shoe_link[clicked_shoe] + "right.webp"
    topEL.src = all_Shoe_link[clicked_shoe] + "top.webp"
    bottomEL.src = all_Shoe_link[clicked_shoe] + "bottom.webp"
    // oppdaterer teksten på toppen av siden for å vise riktig sko
    document.getElementById("shoe_desc-tekst").innerHTML = all_shoes[clicked_shoe].full_name
    // oppdaterer et til bilde som blir brukt til å endre farge
    change_color_origEL.src = all_Shoe_link[clicked_shoe] + "left.webp"
    // skjekker hvilken farge finnes nå
    if (all_Shoe_link[clicked_shoe].includes("white")) {
        // endrer src, til å være riktig farge
        change_colorEL.src = leftEL.src.replace("white", "black")
    } else {
        change_colorEL.src = leftEL.src.replace("black", "white")
    }
    // en for loop som går for hver lenke i shoe_links
    for (let i = 0; all_Shoe_link.length > i; i++) {
        // her har jeg 2 links, en er for live server og den andre er for siden som er oppe på nettet
        if (all_Shoe_link[i] == change_colorEL.src.replace("http://65.108.15.66:22223/", "").replace("left.webp", "")) {
            break;
        } else if (all_Shoe_link[i] == change_colorEL.src.replace("http://127.0.0.1:5501/code/", "").replace("left.webp", "")){
            break;
        } else {
            // shoe looper er ment for å være hvilket nummer lenken er i arrayen
            shoe_looper++
            
        }
    }
    // setter en onclick attribute
    change_colorEL.setAttribute("onclick", "move_to_shoePage(" + shoe_looper + ")")

}

// får alt til å gå
get_shoes()

/*liten huske regel fra SIMEN :)*/
// JSON.stringify = objekt -> string
// JSON.parse = string -> objekt


