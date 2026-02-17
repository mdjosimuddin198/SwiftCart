const cardContainer = document.getElementById("productsContainer");
const allProductsContainer = document.getElementById("allProductsContainer");
const modalContent = document.getElementById("modalContent");
const modal = document.getElementById("my_modal_1");
const cartCount = document.getElementById("cartCount");
const cartEmpty = document.getElementById("cartEmpty");
const cartItems = document.getElementById("cartItems");
const toggleCart = document.getElementById("toggleCart");
const categoriesContainer = document.getElementById("catagory");
const prouductsCount = document.getElementById("prouducts_count");
const footerYear = document.getElementById("footerYear");

footerYear.innerText = `© ${new Date().getFullYear()} SwiftCart, Inc. All rights reserved.`;

const allCatagory = async () => {
  if (!categoriesContainer) return;
  const categoriesData = await getCategories();
  const catagoriesDataWithAll = ["All", ...categoriesData];

  categoriesContainer.innerHTML = catagoriesDataWithAll
    .map(
      (catagory) =>
        `<button class="btn "  data-cat="${catagory}">${catagory}</button>`,
    )
    .join("");

  // Default: first button (All) কে active করুন
  const buttons = categoriesContainer.querySelectorAll("button");
  if (buttons.length) {
    buttons[0].classList.add("btn-primary");
  }

  categoriesContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const category = button.getAttribute("data-cat");

      // Remove active from all buttons first
      categoriesContainer
        .querySelectorAll("button")
        .forEach((btn) => btn.classList.remove("btn-primary"));

      // Add active class to the clicked button
      button.classList.add("btn-primary");

      if (category === "All") {
        // All products
        const products = await getProductsData(); // get all products
        showProducts(products);
      } else {
        const categoriesProducts = await getProductByCategories(category);
        showProducts(categoriesProducts);
      }
    });
  });
};

allCatagory();

const showProducts = (products, options = {}) => {
  let displayProducts = products;
  if (prouductsCount) {
    prouductsCount.innerText = `Total Products found ${products.length}`;
  }

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
        <h2 class="font-semibold text-gray-800 line-clamp-1">
          ${product.title}
        </h2>

        <!-- Price -->
        <p class="text-xl font-bold text-gray-900">Price : $${product.price}</p>

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
