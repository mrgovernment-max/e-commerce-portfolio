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
  const cartTotal = cart.length;
  const domDisplaycartTotal = document.getElementById("total-cart-items");
  domDisplaycartTotal.innerHTML = cartTotal;
}
window.onload = displayTotalitemsincart;

function productDetails(
  img1,
  img2,
  img3,
  img4,
  rating,
  info,
  availability,
  brandimg,
  brandinfo,
  productName,
  productPrice
) {
  // Storing product details in localStorage
  localStorage.setItem("img1", img1);
  localStorage.setItem("img2", img2);
  localStorage.setItem("img3", img3);
  localStorage.setItem("img4", img4);
  localStorage.setItem("rating", rating);
  localStorage.setItem("info", info);
  localStorage.setItem("availability", availability);
  localStorage.setItem("brandimg", brandimg);
  localStorage.setItem("brandinfo", brandinfo);
  localStorage.setItem("name", productName);
  localStorage.setItem("price", productPrice);

  // Navigating to the product details page
  window.location.href = "productdetails.html";
}
