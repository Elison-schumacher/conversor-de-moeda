const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const input = document.querySelector(".input").value //valor que colocar no conversor 
    const currencyValueConverted = document.querySelector(".currencyValueConverted") //valor em REAL
    const coinConverter = document.querySelector(".coin-moedas") //valor em DÓLAR 

    console.log(currencySelect.value)
    const dolarToday = 5.20
    const euroToday = 6.20

    const covertedValue = input / dolarToday

    if(currencySelect.value == "dolar"){

    }
    if(currencySelect.value =="euro"){

    }

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
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