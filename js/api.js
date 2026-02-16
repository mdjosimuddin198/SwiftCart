const loader = document.getElementById("loader");
let allProducts = [];
const getProductsData = async () => {
  if (loader) loader.classList.remove("hidden");

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    allProducts = products;
    // showProducts(products);
    return products;
  } catch (error) {
    console.log(error);
  } finally {
    if (loader) loader.classList.add("hidden");
  }
};

const getProductData = async (productId) => {
  if (loader) loader.classList.remove("hidden");
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();
    console.log(product);
    showDetails(product);
  } catch (error) {
    console.log(error);
  } finally {
    if (loader) loader.classList.add("hidden");
  }
};

const getCategories = async () => {
  if (loader) loader.classList.remove("hidden");
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    if (loader) loader.classList.add("hidden");
  }
};

const getProductByCategories = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const data = await res.json();
  return data;
};
