document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (mobileNumber === "01846615162" && pinNumber === "01846615162") {
    alert("shondor. apnake apnar deshborde niye jaoa hobe......");
    window.location.href = "/homePage.html";
  } else {
    alert("vul information");
  }
});
