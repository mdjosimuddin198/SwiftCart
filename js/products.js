const cardContainer = document.getElementById("productsContainer");
const modalContent = document.getElementById("modalContent");
const modal = document.getElementById("my_modal_1");
const cartCount = document.getElementById("cartCount");
const cartEmpty = document.getElementById("cartEmpty");
const cartItems = document.getElementById("cartItems");
const toggleCart = document.getElementById("toggleCart");

const handleCart = () => {
  toggleCart.classList.toggle("opacity-0");
  toggleCart.classList.toggle("-translate-y-4");
  toggleCart.classList.toggle("scale-95");
  toggleCart.classList.toggle("pointer-events-none");
};

let allProducts = [];
const getProductsData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    allProducts = products;

    showProducts(products);
  } catch (error) {
    console.log(error);
  }
};

const showProducts = (products) => {
  //   console.log(products);
  const filteredProducts = products.filter(
    (product) => product.rating.rate > 4.4,
  );
  cardContainer.innerHTML = filteredProducts
    .map(
      (product) => ` <div class="card shadow-xl rounded-2xl">
      <img
        src="${product.image}"
        alt="${product.title}"
        class="bg-gray-100 px-8 py-4 h-60 object-contain"
      />

      <div class="card-body space-y-3">
        <!-- Category + Rating -->
        <div class="flex justify-between items-center">
          <span class="badge badge-primary badge-outline capitalize">
            ${product.category}
          </span>

          <div class="flex items-center gap-1 text-sm text-gray-600">
            <span class="text-yellow-500">⭐</span>
            ${product.rating.rate} (${product.rating.count})
          </div>
        </div>

        <!-- Title -->
        <h2 class="font-semibold text-gray-800 line-clamp-2">
          ${product.title}
        </h2>

        <!-- Price -->
        <p class="text-xl font-bold text-gray-900">$${product.price}</p>

        <!-- Buttons -->
        <div class="flex gap-3 mt-2">
          <button
           onclick=showDetails(${product.id})
            class="btn btn-outline btn-sm flex-1"
          >
            <i class="fa-regular fa-eye"></i> Details
          </button>
          <button  onclick="addToCart(${product.id})" class="btn btn-primary btn-sm flex-1">
            <a class="cursor-pointer"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
            Add to Cart
          </button>
        </div>
      </div>
    </div>`,
    )
    .join("");
};

const showDetails = async (productId) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();
    console.log(product);

    modalContent.innerHTML = `
    <img src="${product.image}" 
         class="h-40 mx-auto object-contain mb-4"/>

    <h3 class="font-bold text-lg mb-2">
      ${product.title}
    </h3>

    <p class="text-sm text-gray-600 mb-3">
      ${product.description}
    </p>

    <p class="font-bold text-xl text-primary">
      $${product.price}
    </p>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="fa-solid fa-x"></i></button>
         <button onclick="addToCart(${product.id})"  class="btn btn-primary btn-sm flex-1">
            <a class="cursor-pointer"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
            Add to Cart
          </button>
      </form>
    </div>
     
    
  `;

    modal.showModal();
  } catch (error) {
    console.log(error);
  }
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

  console.log(productsInCart);
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

window.addEventListener("DOMContentLoaded", async () => {
  await getProductsData(); // fetch allProducts first
  updateCart(); // এখন allProducts ready → cart render
});
