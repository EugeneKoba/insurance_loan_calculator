const loanForm = document.getElementById("loan-form")
const amountEl = document.getElementById("amount-el")
const interestEl = document.getElementById("interest-el")
const yearsEl = document.getElementById("years-el")
const calculateBtn = document.getElementById("calculate-btn")
const loaderEl = document.querySelector(".loader")
const monthlyPayEl = document.getElementById("monthly-pay-el")
const yearlyPayEl = document.getElementById("yearly-pay-el")
const interestPayEl = document.getElementById("interest-pay-el")

// Main

loanForm.addEventListener("submit", calculateResults)

// hide the loader in the beginning
hideLoader()

// FUNCTIONS

// Function to calculate Insurance Interest Rate
function calculateResults(event) {
    event.preventDefault()// Stop the form from automatically going to external link, when 'Calculate' is pressed

        
    const result = parseFloat(amountEl.value) // To turn input from string into a 2.d.p float
    const calcInterest = parseFloat(interestEl.value) / 100 / 12
    const calcPayments = parseFloat(yearsEl.value)

    const x = Math.pow(1 + calcInterest, calcPayments)

    let monthlyPay = (result * x * calcInterest)/(x - 1)
    
    function pasteValues() {
        monthlyPayEl.value = monthlyPay.toFixed(2)
        yearlyPayEl.value = (monthlyPay * calcPayments).toFixed(2)
        interestPayEl.value = ((monthlyPay * calcPayments)-result).toFixed(2)
    }
    if (isFinite(monthlyPay)) {

        // show loader for 1.5 secs, then hide it & print results
        showLoader()
        setTimeout(hideLoader, 1500)
        setTimeout(pasteValues, 1500)

    }
    else {
        alert("Please type in a valid number.")
        // Set values back to empty after error
        amountEl.value = ""
        interestEl.value = ""
        yearsEl.value = ""
        monthlyPayEl.value = ""
        yearlyPayEl.value = ""
        interestPayEl.value = ""
    }
}


// Function to show loader
function showLoader() {
    loaderEl.style.display = "block"
}

// Function to hide loader 
function hideLoader() {
    loaderEl.style.display = "none"
}
        