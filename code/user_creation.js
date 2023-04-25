function submit_sign_up() {
    var usernameEL = document.getElementById("username").value
    var passwordEL = document.getElementById("password").value
    if (usernameEL === "") {
        alert("you need to fill inn the username")
        return;
    } else if (passwordEL === "") {
        alert("you need to fill inn the password")
        return;
    } else if (usernameEL.length >= 30) {
        alert("sorry, no more than 30 characters, shorten the username")
        return;
    } else if (passwordEL.length >= 30) {
        alert("sorry, no more than 30 characters, shorten the password")
        return;
    }
    console.log(users)

    const data = {
        user: usernameEL,
        pass: passwordEL
    }

    fetch("/create/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })

}

async function Get_users() {
    const res = await fetch("http://65.108.15.66:22223/get/users",
        {
            method: "GET"
        })
    var users = await res.json()


    // for (let i = 0; i < data.length; i++) {
    //     bought_items[0].antall += data[i].AJ1R
    //     bought_items[1].antall += data[i].AJ1C
    //     bought_items[2].antall += data[i].AJDB
    //     bought_items[3].antall += data[i].AJDW

    //     bought_items[4].antall += data[i].JMB
    //     bought_items[5].antall += data[i].JMR
    //     bought_items[6].antall += data[i].JR6B
    //     bought_items[7].antall += data[i].JR6W

    //     bought_items[8].antall += data[i].NDW
    //     bought_items[9].antall += data[i].NDB
    //     bought_items[10].antall += data[i].NIB
    //     bought_items[11].antall += data[i].NIW
    // }
}
Get_users()