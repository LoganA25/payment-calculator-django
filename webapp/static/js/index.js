const interest = document.querySelector("#interest");
const amount = document.querySelector("#amount");
const years = document.querySelector("#years");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
const results = document.querySelectorAll(".results");

button.addEventListener("click", function () {
	const interestValue = interest.value;
	const amountValue = amount.value;
	const yearsValue = years.value;

	//Calculate
	const principal = parseFloat(amountValue);
	const calculatedInterest = parseFloat(interestValue) / 100 / 12;
	const calculatedPayments = parseFloat(yearsValue) * 12;

	//Calculating the monthly payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x - 1);
	const monthlyPayment = monthly.toFixed(2);

	//calculating the total interest
	const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

	//calculating the total payment
	const totalPayment = (monthly * calculatedPayments).toFixed(2);

	[monthlyPayment, totalPayment, totalInterest].forEach(function (item, idx) {
		results[idx].innerHTML = addCommas(item);
	});
});

function addCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//clear button
clear.addEventListener("click", function () {
	interest.value = "";
	amount.value = "";
	years.value = "";
	results.forEach((item) => (item.innerHTML = ""));
});

//theme
const theme = document.querySelector(".theme");
const checkBox = document.querySelector(".switchBox");
const html = document.querySelector("html");

checkBox.addEventListener("click", function (e) {
	if (this.checked != true) {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}
});
