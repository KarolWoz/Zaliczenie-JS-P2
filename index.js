const urlAll = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";

const sel = document.querySelector("#currencyOption");
const input = document.querySelector("#currencyAmount");
const btn = document.querySelector("#currencyCalc");
const calculatedValue = document.querySelector("#calculatedValue");

const getCurrencyList = () => {
  fetch(urlAll)
    .then((response) => response.json())
    .then((data) => getRates(data.rates))
    .catch((err) => console.log(err));
};

const getRates = (rates) => {
  const selectValue = sel.value;
  for (const rate in rates) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.innerText = code;
    sel.appendChild(opt);
  }
};
const selectValue = sel.value;

const mid = rates.find((rate) => rate.code === selectValue).mid;

btn.addEventListener("click", () => {
  getCurrencyList();
  const calculation = mid * input.value;
  return calculation;
  calculatedValue.innerText = calculation;
});

// rates.find((rate)=>rate.code===selectValue)

// const mid = rates.find((rate) => rate.code === selectValue).mid;
