const subscribeBtutton = document.querySelector("#subscribe-btn")
const calculateBtn = document.querySelector("#calculate-btn")
const inputBtn = document.querySelector("#input-Btn")
const result = document.querySelector("#result")

function subscribe() {
    if(subscribeBtutton.innerHTML === "SUBSCRIBE"){
        subscribeBtutton.innerHTML = "SUBSCRIBED"
        subscribeBtutton.classList.add("new-button")
    } else {
        subscribeBtutton.innerHTML = "SUBSCRIBE"
        subscribeBtutton.classList.remove("new-button")
    }

}


function calculateTotal() {
    let cost = Number(inputBtn.value);


    if (cost < 40) {
        cost = cost + 10
    }

    result.textContent = `${cost}`
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        calculateTotal()
    }
}