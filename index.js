const main = document.querySelector(".mainContainer")
const thank = document.querySelector(".thankyouContainer")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thank.classList.remove("hidden")
    main.classList.add("hidden")
})

rateAgain.addEventListener("click", () => {
    main.classList.remove("hidden")
    thank.classList.add("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})
