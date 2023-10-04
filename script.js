let currentValue = document.getElementById("textbox")
let newNum = Number(currentValue.value)

// Function to Increase the value of the counter
function Increment(){
    newNum = newNum+1
    currentValue.value = newNum
}

let incBtn = document.getElementById("increment")
incBtn.addEventListener("click", Increment)

// Function To decrease the value of the counter
function Decrement(){
    newNum = newNum -1
    currentValue.value = newNum
}

let decBtn = document.getElementById("decrement")
decBtn.addEventListener("click", Decrement)

// Function to reset the value of the counter
function reset(){
    newNum = 0
    currentValue.value = newNum
}


let rstBtn = document.getElementById("reset")
rstBtn.addEventListener("click", reset)
