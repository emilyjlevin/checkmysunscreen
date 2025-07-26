const nac80List = [
  "1,3-diphenylguanidine", "2-hydroxyethyl methacrylate", "2-mercaptobenzothiazole",
  "2-n-octyl-4-isothiazolin-3-one", "3-(dimethylamino)-1-propylamine",
  "4-tert-butylphenolformaldehyde resin", "amidoamine", "amerchol l-101",
  "ammonium persulfate", "bacitracin", "benzalkonium chloride", "benzisothiazolinone",
  "benzocaine", "benzophenone-4", "benzyl alcohol", "benzyl salicylate",
  "black rubber mix", "bromo-2-nitropropane-1,3-diol", "budesonide", "caine mix iii",
  "carba mix", "chlorhexidine digluconate", "chloroxylenol", "cinnamal",
  "clobetasol-17-propionate", "cobalt(ii)chloride hexahydrate", "cocamide dea",
  "cocamidopropyl betaine", "colophonium", "compositae mix ii", "decyl glucoside",
  "diazolidinyl urea", "dmdm hydantoin", "epoxy resin, bisphenol a", "ethyl acrylate",
  "ethylenediamine dihydrochloride", "formaldehyde", "fragrance mix i",
  "fragrance mix ii", "hydroperoxides of limonene", "hydroperoxides of linalool",
  "hydroxyisohexyl 3-cyclohexene carboxaldehyde", "imidazolidinyl urea",
  "iodopropynyl butylcarbamate", "lauryl polyglucose", "lanolin alcohol",
  "lidocaine", "mercapto mix", "methyl methacrylate", "methylisothiazolinone",
  "methylisothiazolinone+methylchloroisothiazolinone", "methyldibromo glutarinitrile",
  "mixed dialkyl thiourea", "neomycin sulfate", "nickel(ii)sulfate hexahydrate",
  "n-isopropyl-n-phenyl-4-phenylenediamine", "oleamidopropyl dimethylamine",
  "p-phenylenediamine", "paraben mix", "peru balsam", "polymyxin b sulfate",
  "potassium dichromate", "propyl gallate", "propylene glycol", "propolis",
  "pramoxine hydrochloride", "quaternium-15", "sesquiterpene lactone mix",
  "sodium benzoate", "sodium metabisulfite", "sorbitan oleate", "sorbitan sesquioleate",
  "textile dye mix ii", "tea tree oil oxidized", "thiuram mix", "tixocortol-21-pivalate",
  "tocopherol", "toluene-2,5-diamine sulfate", "toluenesulfonamide formaldehyde resin",
  "ylang ylang oil"
];

const allProducts = [
  {
    brand: "neutrogena",
    name: "Neutrogena Purescreen+ Tinted Sunscreen for Face with SPF 30",
    image: "neutrogena-purescreen-medium-spf30.jpg",
    ingredients: "Water, Isohexadecane, Dicaprylyl Carbonate, Dimethicone, Isopropyl Palmitate, Isononyl Isononanoate, Cetyl PEG/PPG-10/1 Dimethicone, C12-15 Alkyl Benzoate, Sodium Chloride, Polyhydroxystearic Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Sorbitan Sesquioleate, Phenoxyethanol, Ethylhexylglycerin, Dimethiconol, Aluminum Hydroxide, Dimethicone Crosspolymer, Stearic Acid, Xanthan Gum, Iron Oxides"
  },
  {
    brand: "neutrogena",
    name: "Neutrogena Retinol Treatment & Tinted Facial Moisturizer, Healthy Skin Anti-Aging Perfector Neutral to Tan SPF 20",
    image: "neutrogena-healthyskin-antiaging-neutraltan-spf20.jpg",
    ingredients: "Water, Titanium Dioxide, Isopropyl Isostearate, Cyclopentasiloxane, Dimethicone, Butylene Glycol, Glyceryl Stearate, Cetyl Alcohol, Cetearyl Alcohol, PEG-75 Stearate, Lauroyl Lysine, Tocopheryl Acetate, Olea Europaea (Olive) Fruit Extract, BHT, Erythorbic Acid, Bisabolol, Retinyl Palmitate, Retinol, Arginine, Silica, Polysorbate 20, PEG-100 Stearate, Isostearyl Palmitate, Sclerotium Gum, Polysilicone-11, Ammonium Polyacryloyldimethyl Taurate, Ceteth-20, Steareth-20, Tetrasodium EDTA, Iron Oxides, Methylparaben, Propylaparaben, Ethylparaben, Phenoxyethanol, Fragrance"
  }
];

function format(str) {
  return str.trim().toLowerCase();
}

function checkBrand() {
  const input = document.getElementById("brandInput").value.toLowerCase();
  const results = document.getElementById("brandResults");
  results.innerHTML = '';

  const filtered = allProducts.filter(p => p.brand.toLowerCase() === input);
  filtered.forEach(product => {
    const container = document.createElement("div");
    container.className = "product";

    const img = document.createElement("img");
    img.src = "images/" + product.image;
    img.alt = "";

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const ingredientsText = document.createElement("div");
    ingredientsText.textContent = product.ingredients;

    // 👇 Run ingredient analysis
    const ingredients = product.ingredients.split(',').map(format);
    const nac80Matches = [];
    const fragrance = [];
    const adjacent = [];

    const mixTerms = ["paraben", "rubber", "mercapto", "carba", "thiourea", "lactone", "caine", "compositae", "textile"];

    ingredients.forEach(ing => {
      if (nac80List.includes(ing)) nac80Matches.push(ing);
      else if (/(fragrance|parfum|perfume|parfume|perfum)/.test(ing)) fragrance.push(ing);
      else if (/acrylate|tocopheryl acetate|limonene|linalool|cinnamal/.test(ing) || mixTerms.some(term => ing.includes(term))) {
        adjacent.push(ing);
      }
    });

    const summary = document.createElement("div");
    summary.style.fontSize = "0.6em";
    summary.style.marginTop = "8px";
    summary.innerHTML = `
      <div style="color: red;">${nac80Matches.length > 0 ? "NAC-80: " + nac80Matches.join(", ") : "✅ No NAC-80"}</div>
      <div style="color: orange;">${fragrance.length > 0 ? "Fragrance: " + fragrance.join(", ") : "✅ No fragrance"}</div>
      <div style="color: #e67e22;">${adjacent.length > 0 ? "Adjacent: " + adjacent.join(", ") : "✅ No adjacent"}</div>
    `;

    overlay.appendChild(ingredientsText);
    overlay.appendChild(summary);
    container.appendChild(img);
    container.appendChild(overlay);

    container.onclick = () => {
      container.classList.toggle("clicked");
    };

    results.appendChild(container);
  });
}

function checkIngredients() {
  const input = document.getElementById('ingredientInput').value;
  const ingredients = input.split(',').map(format);
  const nac80Matches = [];
  const fragrance = [];
  const adjacent = [];

  const mixTerms = ["paraben", "rubber", "mercapto", "carba", "thiourea", "lactone", "caine", "compositae", "textile"];

  ingredients.forEach(ing => {
    if (nac80List.includes(ing)) nac80Matches.push(ing);
    else if (/(fragrance|parfum|perfume|parfume|perfum)/.test(ing)) fragrance.push(ing);
    else if (/acrylate|tocopheryl acetate|limonene|linalool|cinnamal/.test(ing) || mixTerms.some(term => ing.includes(term))) {
      adjacent.push(ing);
    }
  });

  const results = document.getElementById('ingredientResults');
  results.innerHTML = '';

  function formatResult(title, list, color) {
    if (list.length > 0) {
      return `<p style="color: ${color};"><strong>${title}:</strong> ${list.join(", ")}</p>`;
    } else {
      return `<p style="color: green;">✅ No ${title.toLowerCase()} found.</p>`;
    }
  }

  results.innerHTML += formatResult("NAC-80 ingredients found", nac80Matches, "red");
  results.innerHTML += formatResult("Fragrance ingredients found", fragrance, "orange");
  results.innerHTML += formatResult("Adjacent ingredients found", adjacent, "#e67e22");
}
