// Function to load items from localStorage and display them in the cart
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    cartHTML += `<div class="cart-item">
                      <img src="${item.image}" alt="${
      item.name
    }" style="width: 100px; height: 100px;">
                      <p>${item.name} - $${item.price}  (${
      item.quantity
    }) = $${itemTotal.toFixed(2)}</p>
                      <img 
                          class="remove-icon"
                          onclick="removeFromCart(${index})"
                          src="./images/dustbin.jpg"
                          alt="remove"
                          onmouseover="this.src='./images/open-dustbin.jpg'"
                          onmouseout="this.src='./images/dustbin.jpg'">
                  </div>`;
    total += itemTotal;
  });

  localStorage.setItem("total", JSON.stringify(total));
  document.querySelector(".cart-items").innerHTML = cartHTML;
  document.getElementById("totalAmount").innerText = total.toFixed(2);
}
// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((_, i) => i !== index);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Reload the cart to reflect the changes
}

// Load cart items on page load
window.onload = loadCart;

// Function to handle payment
function handlePayment(event) {
  event.preventDefault(); // Prevent default form submission

  const selectedPaymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  ).value;

  switch (selectedPaymentMethod) {
    case "paypal":
      const totall = JSON.parse(localStorage.getItem("total"));
      parseInt(totall) === 0.0
        ? alert("Add Items To Cart")
        : (window.location.href = "paypal-transfer.html");
      break;

    case "bankTransfer":
      const total = JSON.parse(localStorage.getItem("total"));
      parseInt(total) === 0.0
        ? alert("empty")
        : (window.location.href = "bank-transfer.html");
      break;
  }
}
