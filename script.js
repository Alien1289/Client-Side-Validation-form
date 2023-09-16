function ageChange(e) {
    if (Number(document.getElementById("q_age").value) < 5) {
        document.getElementById("errors-holder").style.textAlign = "center"
        document.getElementById("errors-holder").style.fontWeight = "bold"
        document.getElementById("errors-holder").style.fontSize = "40px"
        document.getElementById("errors-holder").innerText = "You need to be atleast 5 years old to participate"
        document.getElementsByTagName("button")[0].disabled = true
        document.getElementById("result-holder").innerText = ""
    }
    else {
        document.getElementById("errors-holder").innerText = ""
        document.getElementsByTagName("button")[0].disabled = false
        document.getElementById("result-holder").innerText = ""
    }
}

function handleSubmit(e) {
    e.preventDefault()
    if (Number(document.getElementById("q_age").value) === 0) {
        document.getElementById("errors-holder").style.textAlign = "center"
        document.getElementById("errors-holder").style.fontWeight = "bold"
        document.getElementById("errors-holder").style.fontSize = "40px"
        document.getElementById("errors-holder").innerText = "Please choose age"
    } else {
        if (document.getElementById("q_owns_phone").checked === true && Number(document.getElementById("q_age").value) < 13) {
            document.getElementById("reveal").style.display = "none"
            document.getElementById("result-holder").style.textAlign = "center"
            document.getElementById("result-holder").style.fontWeight = "bold"
            document.getElementById("result-holder").style.marginTop = "322px"
            document.getElementById("result-holder").style.fontSize = "40px"
            document.getElementById("result-holder").innerText = "You are too young to have a phone"
        } else if (document.getElementById("q_owns_phone").checked === true && Number(document.getElementById("q_age").value) > 12) {
            document.getElementById("reveal").style.display = "none"
            document.getElementById("result-holder").style.textAlign = "center"
            document.getElementById("result-holder").style.fontWeight = "bold"
            document.getElementById("result-holder").style.marginTop = "322px"
            document.getElementById("result-holder").style.fontSize = "40px"
            document.getElementById("result-holder").innerText = "Use your phone in moderation"
        }
        else if (document.getElementById("q_owns_phone").checked === false && Number(document.getElementById("q_age").value) < 13) {
            document.getElementById("reveal").style.display = "none"
            document.getElementById("result-holder").style.textAlign = "center"
            document.getElementById("result-holder").style.fontWeight = "bold"
            document.getElementById("result-holder").style.marginTop = "322px"
            document.getElementById("result-holder").style.fontSize = "40px"
            document.getElementById("result-holder").innerText = "You will get a phone soon"
        } else {
            // if (document.getElementById("q_owns_phone").checked === false  && Number(document.getElementById("q_age").value) > 12){
            document.getElementById("reveal").style.display = "none"
            document.getElementById("result-holder").style.textAlign = "center"
            document.getElementById("result-holder").style.fontWeight = "bold"
            document.getElementById("result-holder").style.marginTop = "322px"
            document.getElementById("result-holder").style.fontSize = "40px"
            document.getElementById("result-holder").innerText = "You should get a phone"
        }

    }
}