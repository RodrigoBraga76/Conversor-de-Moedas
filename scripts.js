const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const inputCurrencyValue = document.querySelector(".input-currency")

inputCurrencyValue.addEventListener("input", function (event) {
    let value = event.target.value
  
    // Remove tudo que não for número
    value = value.replace(/\D/g, "");
  
    // Converte para número decimal
    let numericValue = parseFloat(value) / 100;
  
    // Formata para moeda BRL
    let formattedValue = numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  
    // Define o valor formatado no input
    event.target.value = formattedValue;


  });

function convertValues() {
    let rawValue = inputCurrencyValue.value.replace(/[^\d,]/g, "").replace(",", ".");
    const currencyValueToConvert = document.querySelector(".valor-a-converter")
    const currencyValueToConverted = document.querySelector(".valor-convertido")

    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 7.20
    const pesoToday = 0.0060

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(rawValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(rawValue / euroToday)
    }

    if (currencySelect.value == "Libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBR"
        }).format(rawValue / libraToday)
    }

    if (currencySelect.value == "Pesos") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(rawValue / pesoToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(rawValue)



}

function currencyName() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/img-dolar.png"


    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img-euro.png"

    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libras Esterlinas"
        currencyImage.src = "./assets/img-England.png"

    }

    if (currencySelect.value == "Pesos") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/img-Pesos.png"

    }

    convertValues()

}



currencySelect.addEventListener("change", currencyName)
convertButton.addEventListener("click", convertValues)