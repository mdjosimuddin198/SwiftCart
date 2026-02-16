window.addEventListener("DOMContentLoaded", async () => {
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
