// --- Check My Sunscreen Script ---
// Ingredient checker + product gallery

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
    if (nac80List.includes(ing)) nac80Matches.push(ing);
    else if (/(fragrance|parfum|perfume|parfume|perfum)/.test(ing)) fragrance.push(ing);
    else if (/acrylate|tocopheryl acetate|limonene|linalool|cinnamal/.test(ing) || mixTerms.some(term => ing.includes(term))) adjacent.push(ing);
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

// --- Product Data ---
const products = [
  {
    brand: "cerave",
    name: "CeraVe Hydrating Mineral Sunscreen SPF 30",
    image: "images/cerave-mineral-sheertint-medium-spf30.png",
    ingredients: "Water, C12-15 alkyl benzoate, Isohexadecane, Isononyl isononanoate, Dicaprylyl ether, PEG-30 dipolyhydroxystearate, Triethylhexanoin, Polyglyceryl-4 isostearate, Dicaprylyl carbonate, Ethylene/acrylic acid copolymer, Triethanolamine, Silica, Poly C10-30 alkyl acrylate, Stearic acid, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Niacinamide, Cetearyl alcohol, Triethoxycaprylylsilane, Behentrimonium methosulfate, Sodium chloride, Salicylic acid, Sodium hyaluronate, Sodium lauroyl lactylate, Cholesterol, Aluminum stearate, Alumina, Aluminum hydroxide, Iron oxides, Phenoxyethanol, P-anisic acid, Chlorphenesin, Tocopherol, Disodium EDTA, Disodium stearoyl glutamate, Propylene carbonate, Citric acid, Caprylyl glycol, Capryloyl salicylic acid, Caprylic/capric triglyceride, Diethylhexyl syringylidenemalonate, Disteardimonium hectorite, Xanthan gum, Phytosphingosine, Polyhydroxystearic acid, Ethylhexylglycerin.",
    allergens: ["tocopherol", "poly_c10-30_alkyl_acrylate"]
  },
  {
    brand: "australiangold",
    name: "Australian Gold Botanical Tinted Face SPF 50",
    image: "images/australiangold-botanical-tintedface-spf50.png",
    ingredients: "Cyclopentasiloxane, Water/Aqua/Eau, Glycerin, Silica, Cetyl PEG/PPG-10/1 Dimethicone, Disteardimonium Hectorite, Polymethylsilsesquioxane, PEG-10 Dimethicone, Hexyl Laurate, Polyglyceryl-4 Isostearate, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Porphyra Umbilicalis Extract, Eucalyptus Globulus (Eucalyptus) Leaf Extract, Dimethicone Crosspolymer, Stearic Acid, Caprylyl Glycol, Tocopheryl Acetate, Butyrospermum Parkii (Shea) Butter, Squalane, Panthenol, Disodium EDTA, Triethoxycaprylylsilane, Alumina, Phenoxyethanol, Iron Oxides (CI 77492, CI 77491, CI 77499)",
    allergens: ["tocopheryl_acetate"]
  },
  {
    brand: "eltamd",
    name: "EltaMD UV Daily Tinted Broad-Spectrum SPF 40",
    image: "images/eltamd-uvdaily-tinted-broadspectrum-spf40.png",
    ingredients: "Water, Petrolatum, Isopropyl Palmitate, Dimethicone, Cetearyl Alcohol, Oleth-3 Phosphate, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Cetearyl Glucoside, Octyldodecyl Neopentanoate, Ethylhexyl Stearate,Polyether-1, Butylene Glycol, PEG-7 Trimethylolpropane Coconut Ether, Sodium Hyaluronate, Iodopropynyl butylcarbamate, Citric Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Iron Oxides",
    allergens: ["iodopropynyl_butylcarbamate", "hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer", "tocopheryl_acetate"]
  },
  {
    brand: "laroche",
    name: "La Roche-Posay Anthelios Tinted SPF 50",
    image: "images/laroche-posay-anthelios-ultralight-spf50.png",
    ingredients: "Water, Isododecane, C12-15 Alkyl Benzoate, Dimethicone, Alcohol Denat., Isopropyl Lauroyl Sarcosinate, Propanediol, Titanium Dioxide, PEG-30 Dipolyhydroxystearate, Acrylates/Dimethicone Copolymer, Dicaprylyl Carbonate, Silica, Polyglyceryl-4 Isostearate, Aluminum Hydroxide, Caprylyl Glycol, Disteardimonium Hectorite, Stearic Acid, Triethoxycaprylylsilane, Iron Oxides, Tocopherol, Fragrance, Aqua/Water",
    allergens: ["propylene_glycol", "tocopherol", "styrene-acrylate_copolymer"]
  },
  {
    brand: "neutrogena",
    name: "Neutrogena Purescreen+ Mineral UV Tint SPF 30",
    image: "images/neutrogena-purescreen-medium-spf30.png",
    ingredients: "Water, Isohexadecane, Dicaprylyl Carbonate, Dimethicone, Diisopropyl Sebacate, Polyhydroxystearic Acid, Silica, Hydrogenated Polyisobutene, Propanediol, Methyl Methacrylate Crosspolymer, Sorbitan Sesquioleate, Cetyl PEG/PPG-10/1 Dimethicone, Poly C10-30 Alkyl Acrylate, Disteardimonium Hectorite, Behenyl Alcohol, Caprylyl Glycol, Sodium Chloride, Sodium Myristoyl Glutamate, Triethoxycaprylylsilane, Tocopheryl Acetate, Ethylene/Methacrylate Copolymer, Iron Oxides",
    allergens: ["sorbitan_sesquioleate", "tocopheryl_acetate"]
  }
];

// --- Brand search interaction ---
document.getElementById('brandSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  //const filtered = products.filter(p => p.brand.includes(query));
  const filtered = query
  ? products.filter(p => p.brand.includes(query))
  : products;

  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = '';

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>`;
    card.onclick = () => {
      document.getElementById('ingredientInput').value = product.ingredients;
      checkIngredients();
    };
    grid.appendChild(card);
  });
});
