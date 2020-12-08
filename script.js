let array = ["rock", "paper", "scissors"]

function getResult(item) {
    console.log(item)

    let computerItem = array[Math.floor(Math.random() * array.length)]
    console.log(computerItem)
    if (item === computerItem) {
        document.querySelector("#result").innerHTML = `Draw! Computer chose ${computerItem}.`
    } else if (item === "rock" && computerItem === "paper") {
        document.querySelector("#result").innerHTML = "You lose! Computer chose paper."

    } else if (item === "rock" && computerItem === "scissors") {
        document.querySelector("#result").innerHTML = "You win! Computer chose scissors."
    } else if (item === "paper" && computerItem === "rock") {
        document.querySelector("#result").innerHTML = "You win! Computer chose rock."
    } else if (item === "paper" && computerItem === "scissors") {
        document.querySelector("#result").innerHTML = "You lose! Computer chose scissors."
    } else if (item === "scissors" && computerItem === "rock") {
        document.querySelector("#result").innerHTML = "You lose! Computer chose rock."
    } else if (item === "scissors" && computerItem === "paper") {
        document.querySelector("#result").innerHTML = "You win! Computer chose paper."
    }


}