const urlChf = "http://api.nbp.pl/api/exchangerates/rates/a/chf/";
const urlUsd = "http://api.nbp.pl/api/exchangerates/rates/c/usd/";

const urlAll = "http://api.nbp.pl/api/exchangerates/tables/a/";

const sel = document.querySelector("#currencyOption");
const getCurrencyList = () => {
  fetch(urlAll)
    .then((response) => response.json())
    .then((data) => getRates(data.code))
    .catch((err) => console.log(err));
};

const getRates = (code) => {
  for (const rate in code) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.innerText = code;
    sel.appendChild(opt);
  }
};
