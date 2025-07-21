document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("brandButton");
  button.addEventListener("click", checkBrand);
});

function checkBrand() {
  const input = document.getElementById("brandInput").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("brandResults");
  resultsDiv.innerHTML = "";

  fetch("products.json")
    .then((res) => res.json())
    .then((products) => {
      const matches = products.filter(product => product.brand.toLowerCase() === input);

      if (matches.length === 0) {
        resultsDiv.innerHTML = "<p>No products found for that brand.</p>";
        return;
      }

      matches.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        const img = document.createElement("img");
        img.src = "images/" + product.image;
        img.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const ingredients = document.createElement("p");
        ingredients.textContent = "Ingredients: " + product.ingredients;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(ingredients);
        resultsDiv.appendChild(div);
      });
    })
    .catch((err) => {
      console.error("Error loading products:", err);
      resultsDiv.innerHTML = "<p>Error loading products.</p>";
    });
}
