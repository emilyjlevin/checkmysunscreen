let allProducts = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    allProducts = data;
  });

function checkBrand() {
  const input = document.getElementById("brandSearch").value.toLowerCase();
  const resultsContainer = document.getElementById("resultsGrid");
  resultsContainer.innerHTML = "";

  allProducts.forEach(product => {
    if (product.brand.toLowerCase() === input) {
      const card = document.createElement("div");

      const img = document.createElement("img");
      img.src = `images/${product.image}`;
      img.alt = product.name;

      const label = document.createElement("p");
      label.textContent = product.name;

      card.appendChild(img);
      card.appendChild(label);
      resultsContainer.appendChild(card);
    }
  });
}
