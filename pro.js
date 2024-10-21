// Sample data (replace with your actual data)
const categories = [
  { name: "Ladies' Suits" },
  { name: "Men's Shirts" },
  { name: "Dresses" },
];

const products = [
  {
    category: "Ladies' Suits",
    name: "Unstitched Suit",
    price: 100.00,
    description: "A beautiful unstitched suit for all occasions.",
  },
  {
    category: "Men's Shirts",
    name: "Formal Shirt",
    price: 50.00,
    description: "A classic formal shirt for work or special events.",
  },
  // ... add more products
];

// Function to display categories
function displayCategories() {
  const categoriesSection = document.getElementById("categories");
  categoriesSection.innerHTML = ""; // Clear previous content

  categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.textContent = category.name;
    categoryElement.addEventListener("click", () => displayProducts(category.name));

    categoriesSection.appendChild(categoryElement);
  });
}

// Function to display products for a specific category
function displayProducts(categoryName) {
  const productsSection = document.getElementById("products");
  productsSection.innerHTML = ""; // Clear previous content

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Add product details (name, price, image, description)
    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price}`;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => addToCart(product));

    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(productDescription);
    productElement.appendChild(addToCartButton);

    productsSection.appendChild(productElement);
  });
}

// Simulate adding a product to cart (replace with actual cart functionality)
function addToCart(product) {
  console.log(`Added "${product.name}" to cart!`);
  // You can