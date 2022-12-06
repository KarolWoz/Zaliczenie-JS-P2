const urlAll = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";

const sel = document.querySelector("#currencyOption");
const input = document.querySelector("#currencyAmount");
const btn = document.querySelector("#currencyCalc");
const calculatedValue = document.querySelector("#calculatedValue");

const getCurrencyList = () => {
  fetch(urlAll)
    .then((response) => response.json())
    .then((data) => getRates(data[0].rates))
    .catch((err) => console.log(err));
};

const getRates = (rates) => {
  const selectValue = sel.value;
  const mid = rates.find((rate) => rate.code === selectValue).mid;
  const calculation = mid * input.value;
  calculatedValue.innerText = calculation.toFixed(2);
};

btn.addEventListener("click", () => {
  getCurrencyList();
});
