const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrencyValue").value //valor que colocar no conversor 
    const currencyValuetoConverted = document.querySelector(".currencyValuetoConverted") //valor em REAL
    const currencyValueConverted = document.querySelector(".currencyValueConverted") //valor em DÓLAR 

    console.log(currencySelect.value)
    const dolarToday = 5.20
    const euroToday = 6.20


    if (currencySelect.value == "dolar") {// se o  select estiver selecionado o valor do dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {// se o select estiver selecionado o valor do EURO, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)


    }

    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
  
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)