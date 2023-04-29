let views = [10000, 50000, 100000, 500000, 1000000];
let prices = [8,12,16,24,36]

let slideBar = document.querySelector("input[type=range]")
let checkInput = document.querySelector("input[type = checkbox]")



slideBar.addEventListener("input" , (e) => {
    slideBar.style.backgroundSize = `${slideBar.value * 25}%`

    // View Format
    const viewFormatter = Intl.NumberFormat("en", { notation: "compact" });
    let viewsStr = viewFormatter.format(views[slideBar.value]);
    document.querySelector(".view-nums").innerHTML = `${viewsStr}`

    // Price Format
    let price = prices[slideBar.value]
    if (checkInput.checked) {
        price -= (price * 25) / 100
    }

    const priceFormatter = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    });
    let priceStr = priceFormatter.format(price);
    document.querySelector(".the-price").innerHTML = priceStr;
})


checkInput.onchange = () => {
    let price = prices[slideBar.value]
    if (checkInput.checked) {
        price -= (price * 25) / 100
    }

    const priceFormatter = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    });
    let priceStr = priceFormatter.format(price);
    document.querySelector(".the-price").innerHTML = priceStr;
}

