document
  .getElementById("loan-form")
  .addEventListener("submit", calculatePayments);

function calculatePayments(e) {
  e.preventDefault();

  const amountOfLoan = document.getElementById("loan-amount");
  const interestRate = document.getElementById("interest");
  const yearstoRepay = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-amount");
  const totalInterest = document.getElementById("total-interest");

  //Calculate Monthly Payment

  const principal = parseFloat(amountOfLoan.value);

  const totalMonths = yearstoRepay.value * 12;

  const permonthlyPayment = principal / totalMonths;

  //Calculate Interest

  const calculatedInterest = (principal * interestRate.value) / 100;

  //Calculate Total Payment

  const calculatedTotalPayment = principal + calculatedInterest;

  if (isFinite(permonthlyPayment)) {
    monthlyPayment.value = permonthlyPayment.toFixed(2);
    totalPayment.value = calculatedTotalPayment.toFixed(2);
    totalInterest.value = calculatedInterest.toFixed(2);
  } else {
    showError("Please check your numbers..");
  }
}

function showError(error) {
  const div = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  div.className = "alert alert-danger";
  div.appendChild(document.createTextNode(error));

  card.insertBefore(div, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
