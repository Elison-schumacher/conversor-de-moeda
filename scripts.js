const convertButton = document.querySelector(".convertButton")

function convertValues() {
    const input = document.querySelector(".input").value //valor que colocar no conversor 
    const coinVelue = document.querySelector(".coin-converter") //valor em REAL
    const coinConverter = document.querySelector(".coin-moedas") //valor em DÓLAR 


    const dolarToday = 5.20

    const covertedValue = input / dolarToday

    coinVelue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

    coinConverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(covertedValue)

    console.log(covertedValue)
}

convertButton.addEventListener("click", convertValues)