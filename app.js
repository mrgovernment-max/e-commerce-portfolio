function addToCart(productName, productPrice, imagesrc, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    name: productName,
    price: productPrice,
    image: imagesrc,
    quantity: quantity,
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${quantity} ${productName}(s) have been added to your cart!`);
}

// JavaScript for filtering products
function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase(); // Get input value
  const productContainer = document.getElementById("productContainer"); // Get product container
  const products = productContainer.getElementsByClassName("product-item"); // Get all product items

  // Loop through all products and hide those that do not match the search query
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getAttribute("data-name").toLowerCase(); // Get product name
    if (productName.includes(input)) {
      products[i].style.display = ""; // Show the product item if it matches
    } else {
      products[i].style.display = "none"; // Hide the product item if it doesn't match
    }
  }
}
