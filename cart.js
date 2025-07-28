// Function to load items from localStorage and display them in the cart
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartHTML = "";
  let total = 0;

  // Loop through the cart items and generate the HTML
  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    cartHTML += `<div class="cart-item" data-aos="zoom-out" data-aos-delay="150" data-aos-easing="ease-in-out">
                      <img src="${item.image}" alt="${
      item.name
    }" style="width: 100px; height: 100px;">
                      <p> [${item.size}] ${item.name} - $${item.price}  (${
      item.quantity
    }) = $${itemTotal.toFixed(2)}</p>
                      <img data-aos="fade-right" data-aos-delay="850"
                          class="remove-icon"
                          onclick="removeFromCart(${index})"
                          src="./images/dustbin.jpg"
                          alt="remove"
                          onmouseover="this.src='./images/open-dustbin.jpg'"
                          onmouseout="this.src='./images/dustbin.jpg'">
                  </div>`;
    total += itemTotal;
    console.log(cartItems);
  });

  // Save the total in localStorage
  localStorage.setItem("total", JSON.stringify(total));
  document.querySelector(".cart-items").innerHTML = cartHTML;
  document.getElementById("totalAmount").innerText = total.toFixed(2);
  displayTotalitemsincart(); // Update the cart item count
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((_, i) => i !== index);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Reload the cart to reflect the changes
  displayTotalitemsincart(); // Update the cart item count
}

// Load cart items on page load
window.addEventListener("load", function () {
  loadCart();
});

const stripe = Stripe(
  "pk_live_51Rpsq2LRwcoOq8wgsLstZO5LcuIqjk7M54Kisklu5AbUHZfeC1r1RDaEA6bz7iq6eDxFiR7yqLGrx80PsGYmdqGt007D5oIJL3"
);
// Function to handle payment
async function handlePayment() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const res = await fetch(
    "https://stripe-payment-qgss.onrender.com/create-checkout-session",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    }
  );

  const session = await res.json();

  const result = await stripe.redirectToCheckout({ sessionId: session.id });

  if (result.error) {
    alert(result.error.message);
  }
}

function displayTotalitemsincart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTotal = cart.length; // Get the number of items in the cart
  if (cartTotal == 0) {
    const clearcart = document.getElementById("clearCart-btn");
    clearcart.style.display = "none";
  } else {
    clearcart.style.display = "block";
  }

  const domDisplaycartTotal = document.getElementById("total-cart-items");
  domDisplaycartTotal.innerHTML = cartTotal;
}

function clearCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(0, cart.length);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Reload the cart to reflect the changes
  displayTotalitemsincart(); // Update the cart item count
}
