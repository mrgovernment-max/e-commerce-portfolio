function addToCart(productName, productPrice, imagesrc, quantity, size) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    name: productName,
    price: productPrice,
    image: imagesrc,
    quantity: quantity,
    size: size,
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(
    `${quantity} [${size}] ${productName}(s) have been added to your cart!`
  );
  displayTotalitemsincart();
}
function filterProducts() {
  // Temporarily disable AOS
  AOS.refresh({ disable: true });

  const input = document.getElementById("searchInput").value.toLowerCase();
  const productContainer = document.getElementById("productContainer");
  const products = productContainer.getElementsByClassName("product-item");

  // Loop through all products and hide those that do not match the search query
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getAttribute("data-name").toLowerCase();
    if (productName.includes(input)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }

  // Re-enable AOS after filtering the products
  AOS.refresh({ disable: false });
}

function displayTotalitemsincart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTotal = Object.entries(cart).length;
  const domDisplaycartTota = document.getElementById("total-cart-items");
  domDisplaycartTota.innerHTML = cartTotal;
}
window.onload = displayTotalitemsincart;
