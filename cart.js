// Function to load items from localStorage and display them in the cart
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    cartHTML += `<div class="cart-item">
                        <p>${item.name} - $${item.price}</p>
                        <img 
                            class="remove-icon"
                             onclick="removeFromCart(${index})" 
                             src="./images/dustbin.jpg" 
                             alt="remove" 
                             style="width: 30px; height: 40px; cursor: pointer; margin-left: 10px; float: inline-end;" 
                             onmouseover="this.src='./images/open-dustbin.jpg'" 
                             onmouseout="this.src='./images/dustbin.jpg'">
                     </div>`;
    total += item.price;
  });

  document.querySelector(".cart-items").innerHTML = cartHTML;
  document.getElementById("totalAmount").innerText = total;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
  loadCart(); // Reload the cart to reflect the changes
}

// Function to checkout
function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// Load cart items on page load
window.onload = loadCart;
