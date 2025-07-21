let sunscreenData = [];

fetch("sunscreens.json")
  .then(response => response.json())
  .then(data => {
    sunscreenData = data;
  })
  .catch(error => console.error("Error loading sunscreen data:", error));

function checkBrand() {
  const input = document.getElementById("brandInput").value.trim().toLowerCase();
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  const matches = sunscreenData.filter(p => p.brand.toLowerCase().includes(input));

  if (matches.length === 0) {
    container.innerHTML = "<p>No matching products found.</p>";
    return;
  }

  matches.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-name">${product.name}</div>
    `;
    container.appendChild(div);
  });
}

function checkIngredients() {
  window.location.href = "/checkmyingredients.html"; // or whatever page you want
}
