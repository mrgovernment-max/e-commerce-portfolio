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
}

function filterProducts() {
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
}
