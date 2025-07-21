<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Check My Sunscreen</title>
  <style>
    body {
      margin: 0;
      font-family: "Helvetica Neue", sans-serif;
      background: #eefdfa;
      color: #333;
      text-align: center;
    }

    .top-panel {
      background: #dcf8f4;
      padding: 40px 20px 30px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 8px;
    }

    input[type="text"] {
      padding: 10px;
      width: 240px;
      max-width: 80%;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    .search-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 12px;
    }

    button {
      padding: 10px 16px;
      font-size: 16px;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .results {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
      padding: 30px 20px;
    }

    .product {
      width: 140px;
    }

    .product img {
      width: 100%;
      height: auto;
      max-height: 180px;
      object-fit: contain;
    }

    .product-name {
      font-size: 14px;
      margin-top: 8px;
    }

    .bottom-panel {
      background: #2e2e2e;
      color: white;
      padding: 40px 20px;
    }

    .bottom-panel h2 {
      margin-bottom: 10px;
      font-size: 24px;
    }

    .bottom-panel p {
      margin-bottom: 20px;
      font-size: 16px;
    }

    .bottom-panel button {
      background-color: #00c395;
    }
  </style>
</head>
<body>
  <div class="top-panel">
    <h1>Check My Sunscreen</h1>
    <p>Start typing a brand name to find your sunscreen:</p>
    <div class="search-row">
      <input type="text" id="brandInput" placeholder="e.g. Neutrogena" />
      <button onclick="checkBrand()">Check brand</button>
    </div>
  </div>

  <div class="results" id="resultsContainer"></div>

  <div class="bottom-panel">
    <h2>Check My Ingredients</h2>
    <p>Paste your sunscreen ingredients and check for allergens.</p>
    <button onclick="checkIngredients()">Try it now ➞</button>
  </div>

  <script src="main.js"></script>
</body>
</html>
