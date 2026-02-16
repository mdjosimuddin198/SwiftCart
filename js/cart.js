const handleCart = () => {
  toggleCart.classList.toggle("opacity-0");
  toggleCart.classList.toggle("-translate-y-4");
  toggleCart.classList.toggle("scale-95");
  toggleCart.classList.toggle("pointer-events-none");
};

const addToCart = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.includes(productId)) {
    alert("This product is already in the cart!");
    return;
  }
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`proudct added to the cart`);

  updateCart();
};

const removeFromCart = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((id) => id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("product removed from the cart");
  // Update cart UI
  updateCart();
  //   renderCartItems(); // refresh cart panel content
};

const updateCart = () => {
  const getcart = JSON.parse(localStorage.getItem("cart")) || [];

  // Badge update
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;
  cartCount.innerText = getcart.length;

  // Cart text
  const cartEmpty = document.getElementById("cartEmpty");
  if (getcart.length === 0) {
    cartEmpty.innerText = "Your cart is empty";
  } else {
    cartEmpty.innerText = `Your cart has ${getcart.length} item${getcart.length > 1 ? "s" : ""}`;
  }

  // Find products from allProducts
  const productsInCart = getcart.map((id) =>
    allProducts.find((p) => p.id === parseInt(id)),
  );

  // Generate HTML once
  cartItems.innerHTML = productsInCart
    .map(
      (product) => `
        <div class="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
          <span class="truncate">${product.title}</span>
          <button onclick="removeFromCart(${product.id})" class="text-red-500 hover:text-red-700">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `,
    )
    .join("");
};
