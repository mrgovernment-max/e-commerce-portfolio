// This is payment.js to display the price in other pages
function paymentPriceDisplay() {
  const total = JSON.parse(localStorage.getItem("total"));
  const domDisplay = document.getElementById("totalAmount");
  domDisplay.innerHTML = `Total Amount To Be Paid :<span id="totalAmount">$${total}.00</span>`;
}
window.onload = paymentPriceDisplay;

async function copyAccountname() {
  const bankname = document.getElementById("bank-name").innerHTML;
  try {
    // Copy the text to the clipboard using the Clipboard API
    await navigator.clipboard.writeText(bankname);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  const banknamebtn = document.getElementById("bank-name-btn");
  banknamebtn.innerHTML = "copied";
  banknamebtn.style.backgroundColor = "#b9ccba";
}

async function copySortCode() {
  const sortcode = document.getElementById("sort-code").innerHTML;
  try {
    await navigator.clipboard.writeText(sortcode);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  const sortcodebtn = document.getElementById("sort-code-btn");
  sortcodebtn.innerHTML = "copied";
  sortcodebtn.style.backgroundColor = "#b9ccba";
}

async function copyAccountNum() {
  const accountnum = document.getElementById("account-number").innerHTML;
  try {
    await navigator.clipboard.writeText(accountnum);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  const accountnumbtn = document.getElementById("account-num-btn");
  accountnumbtn.innerHTML = "copied";
  accountnumbtn.style.backgroundColor = "#b9ccba";
}
