document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  const amountNumber = document.getElementById("amount-number").value;
  const getPinNumber = document.getElementById("pin-number").value;
  if (getPinNumber === "123") {
    const amount = document.getElementById("amount").innerText;
    const totalAmount = parseFloat(amount) + parseFloat(amountNumber);
    document.getElementById("amount").innerText = totalAmount;
    document.getElementById("form").reset();
  } else {
    alert("Sorry Invalid Your Pin Numbmer");
  }
});

document
  .getElementById("cash-out-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const amountNumber = document.getElementById(
      "cash-out-amount-number"
    ).value;
    const pinNumber = document.getElementById("cash-out-pin-number").value;

    if (pinNumber === "123") {
      const amount = document.getElementById("amount").innerText;
      if (amount < 0 || amount < amountNumber) {
        alert("apnar account e taka nai");
      } else {
        const totalAmount = parseFloat(amount) - parseFloat(amountNumber);
        if (totalAmount >= "0") {
          document.getElementById("amount").innerText = totalAmount;
        } else {
          alert("apnar account e poriman moto taka nai");
        }
      }
    } else {
      alert("Sorry Invalid Your Pin Numbmer");
    }
  });
