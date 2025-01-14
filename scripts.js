const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const realtodolarToday = 6.10
    const realtoeuroToday = 6.22
    const realtolibraToday = 7.42
    const realtobitcoinToday = 579667.62
    const dolartoeuroToday = 0.971
    const dolartolibraToday = 0.819
    const dolartobitcoinToday = 96376.20
    const eurotolibraToday = 0.843
    const eurotobitcoinToday = 93583.14
    const libratobitcoinToday = 79001.46


    if (currencySelect.value == "real") {
        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / realtodolarToday)
        }
        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / realtoeuroToday)
        }
        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / realtolibraToday)
        }
        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / realtobitcoinToday)
        }
        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }
    }

    if (currencySelect.value == "dolar") {
        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }
        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / dolartoeuroToday)
        }
        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / dolartolibraToday)
        }
        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / dolartobitcoinToday)
        }
        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realtodolarToday)
        }
    }

    if (currencySelect.value == "euro") {
        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolartoeuroToday)
        }
        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }
        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / eurotolibraToday)
        }
        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / eurotobitcoinToday)
        }
        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realtoeuroToday)
        }
    }

    if (currencySelect.value == "libra") {
        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolartolibraToday)
        }
        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * eurotolibraToday)
        }
        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        }
        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / libratobitcoinToday)
        }
        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realtolibraToday)
        }
    }

    if (currencySelect.value == "bitcoin") {
        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolartobitcoinToday)
        }
        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * eurotobitcoinToday)
        }
        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * libratobitcoinToday)
        }
        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
        }
        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realtobitcoinToday)
        }
    }


    if (currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyValueConverted = document.querySelector(".currency-value")

    if (currencySelectConverted.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos.png"
    }
    if (currencySelectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelectConverted.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelectConverted.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelectConverted.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }

    convertValues()
}

function changeSelect() {
    const bandeiraMoeda = document.getElementById("currency-image")
    const nomeMoeda = document.querySelector(".nome-moeda")

    if (currencySelect.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar Americano"
        bandeiraMoeda.src = "./assets/estados-unidos.png"
    }
    if (currencySelect.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        bandeiraMoeda.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        nomeMoeda.innerHTML = "Libra"
        bandeiraMoeda.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        nomeMoeda.innerHTML = "Bitcoin"
        bandeiraMoeda.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        nomeMoeda.innerHTML = "Real"
        bandeiraMoeda.src = "./assets/brasil.png"
    }

    convertValues()
}


currencySelectConverted.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeSelect)
convertButton.addEventListener("click", convertValues)