// NAC-80 Allergen List
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

const format = str => str.trim().toLowerCase();

document.getElementById('checkButton').addEventListener('click', checkIngredients);

function checkIngredients() {
  const input = document.getElementById('ingredientInput').value;
  const ingredients = input.split(',').map(format);

  const nac80Matches = [];
  const fragrance = [];
  const adjacent = [];

  const mixTerms = ["paraben", "rubber", "mercapto", "carba", "thiourea", "lactone", "caine", "compositae", "textile"];

  ingredients.forEach(ing => {
    if (nac80List.includes(ing)) {
      nac80Matches.push(ing);
    } else if (/(fragrance|parfum|perfume|parfume|perfum)/.test(ing)) {
      fragrance.push(ing);
    } else if (/acrylate|tocopheryl acetate|limonene|linalool|cinnamal/.test(ing) || mixTerms.some(term => ing.includes(term))) {
      adjacent.push(ing);
    }
  });

  displayResults({ nac80Matches, fragrance, adjacent });
}

function displayResults({ nac80Matches, fragrance, adjacent }) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  const section = (title, list, emoji) => {
    const box = document.createElement('div');
    box.innerHTML = `<h3>${emoji} ${title}</h3>` +
      (list.length ? `<p>${list.join(', ')}</p>` : '<p><em>None found.</em></p>');
    results.appendChild(box);
  };

  section('NAC-80 Allergens', nac80Matches, '✅');
  section('Fragrance Ingredients', fragrance, '⚠️');
  section('Adjacent Ingredients', adjacent, '🔍');
}

// Product Search Grid
const products = [
  {
    brand: "neutrogena",
    name: "Ultra Sheer Dry-Touch SPF 100",
    image: "images/neutrogena-ultra-sheer.jpg"
  },
  {
    brand: "neutrogena",
    name: "Hydro Boost Water Gel SPF 30",
    image: "images/neutrogena-hydroboost.jpg"
  },
  {
    brand: "banana boat",
    name: "Lightweight Daily Face SPF 50",
    image: "images/banana-boat-face.jpg"
  }
];

document.getElementById('brandSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p => p.brand.includes(query));

  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = '';

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    grid.appendChild(card);
  });
});
