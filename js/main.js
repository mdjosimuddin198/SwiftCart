const highlightActiveRoute = () => {
  let currentPath = window.location.pathname;

  currentPath = currentPath.split("/").pop();

  if (currentPath === "") {
    currentPath = "index.html";
  }

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add(
        "text-blue-600",
        "font-bold",
        "border-b-2",
        "border-blue-600",
      );
    }
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  highlightActiveRoute();
  const products = await getProductsData();

  if (window.location.pathname.includes("index")) {
    // Trending
    showProducts(products, { filterTrending: true });
  } else {
    // All products
    showProducts(products);
  }
  updateCart();
});
