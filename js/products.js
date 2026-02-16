const cardContainer = document.getElementById("productsContainer");
const allProductsContainer = document.getElementById("allProductsContainer");
const modalContent = document.getElementById("modalContent");
const modal = document.getElementById("my_modal_1");
const cartCount = document.getElementById("cartCount");
const cartEmpty = document.getElementById("cartEmpty");
const cartItems = document.getElementById("cartItems");
const toggleCart = document.getElementById("toggleCart");

const showProducts = (products, options = {}) => {
  let displayProducts = products;

  if (options.filterTrending) {
    displayProducts = products.filter((p) => p.rating.rate > 4.4);
  }

  cardContainer.innerHTML = displayProducts
    .map(
      (
        product,
      ) => ` <div class="card shadow-md hover:shadow-xl hover:skew-x-2  transition  rounded-2xl">
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
           onclick=getProductData(${product.id})
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
