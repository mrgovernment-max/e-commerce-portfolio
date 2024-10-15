// This is payment.js where you retrieve the total
function paymentPriceDisplay() {
  const total = JSON.parse(localStorage.getItem("total"));
  const domDisplay = document.getElementById("totalAmount");
  domDisplay.innerHTML = `Total Amount To Be Paid :<span id="totalAmount">$${total}.00</span>`;
}
window.onload = paymentPriceDisplay;
