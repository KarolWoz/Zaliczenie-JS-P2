const urlAll = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";

const sel = document.querySelector("#currencyOption");
const input = document.querySelector("#currencyAmount");
const btn = document.querySelector("#currencyCalc");
const calculatedValue = document.querySelector("#calculatedValue");
const exchangeForm=document.querySelector('#exchangeForm')

const getCurrencyList = () => {
  fetch(urlAll)
    .then((response) => response.json())
    .then((data) => getCalc(data[0].rates))
    .catch((err) => console.log(err));
};

const getCalc = (rates) => {
  if (input.value > 0) {
    const selectValue = sel.value;
    const mid = rates.find((rate) => rate.code === selectValue).mid;
    const calculation = mid * input.value;
    calculatedValue.innerText = calculation.toFixed(2);
  }
};

btn.addEventListener("click", () => {
  getCurrencyList();
});
