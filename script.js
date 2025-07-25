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
    ingredients: "Active: Titanium Dioxide, Zinc Oxide. Inactive: Water, Isohexadecane, Dicaprylyl Carbonate, Dimethicone, Isopropyl Palmitate, Isononyl Isononanoate, Cetyl PEG/PPG-10/1 Dimethicone, C12-15 Alkyl Benzoate, Sodium Chloride, Polyhydroxystearic Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Sorbitan Sesquioleate, Phenoxyethanol, Ethylhexylglycerin, Dimethiconol, Aluminum Hydroxide, Dimethicone Crosspolymer, Stearic Acid, Xanthan Gum, Iron Oxides"
  },
  {
    brand: "neutrogena",
    name: "Neutrogena Retinol Treatment & Tinted Facial Moisturizer, Healthy Skin Anti-Aging Perfector Neutral to Tan SPF 20",
    image: "neutrogena-healthyskin-antiaging-neutraltan-spf20.jpg",
    ingredients: "Active: Octinoxate 7%, Octisalate 3%. Inactive: Water, Titanium Dioxide, Isopropyl Isostearate, Cyclopentasiloxane, Dimethicone, Butylene Glycol, Glyceryl Stearate, Cetyl Alcohol, Cetearyl Alcohol, PEG-75 Stearate, Lauroyl Lysine, Tocopheryl Acetate, Olea Europaea (Olive) Fruit Extract, BHT, Erythorbic Acid, Bisabolol, Retinyl Palmitate, Retinol, Arginine, Silica, Polysorbate 20, PEG-100 Stearate, Isostearyl Palmitate, Sclerotium Gum, Polysilicone-11, Ammonium Polyacryloyldimethyl Taurate, Ceteth-20, Steareth-20, Tetrasodium EDTA, Iron Oxides, Methylparaben, Propylaparaben, Ethylparaben, Phenoxyethanol, Fragrance"
  },
  {
    brand: "neutrogena",
    name: "Neutrogena Radiant Tinted Face Moisturizer Sheer Tan SPF 30",
    image: "neutrogena-radiant-tinted-face-sheertan-spf30.jpg",
    ingredients: "Active: Homosalate 5%, Octinoxate 7.5%, Octisalate 5%, Oxybenzone 2%, Titanium Dioxide 2.9%. Inactive: Water, Phenyl Trimethicone, Cetyl Dimethicone, Butylene Glycol, Silica, Cetearyl Alcohol, Barium Sulfate, PEG-100 Stearate, Glyceryl Stearate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Phenoxyethanol, Squalane, Bisabolol, Caprylyl Glycol, Magnesium Aluminum Silicate, Dipotassium Glycyrrhizate, Polysorbate 20, Polymethyl Methacrylate, Cetyl Hydroxyethylcellulose, Polysorbate 60, Xanthan Gum, Tetrasodium EDTA, Sorbic Acid, PEG-12 Dimethicone, Tocopheryl Acetate, Pantothenic Acid, Retinyl Palmitate, Ascorbic Acid, Iron Oxides, Mica, Titanium Dioxide"
  }
];

function format(str) {
  return str.trim().toLowerCase();
}

function checkBrand() {
  const input = document.getElementById("brandInput").value.toLowerCase();
  const results = document.getElementById("brandResults");
  results.innerHTML = "";

  const filtered = allProducts.filter(p => p.brand.toLowerCase() === input);

  filtered.forEach(product => {
    const ingredients = product.ingredients.split(",").map(format);
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

    const container = document.createElement("div");
    container.className = "flip-card";
    container.style.width = "200px";
    container.style.height = "300px";
    container.style.perspective = "1000px";
    container.style.display = "inline-block";
    container.style.margin = "10px";

    const inner = document.createElement("div");
    inner.className = "flip-card-inner";
    inner.style.width = "100%";
    inner.style.height = "100%";
    inner.style.position = "relative";
    inner.style.transition = "transform 0.6s";
    inner.style.transformStyle = "preserve-3d";

    inner.onmouseenter = () => (inner.style.transform = "rotateY(180deg)");
    inner.onmouseleave = () => (inner.style.transform = "rotateY(0deg)");

    const front = document.createElement("div");
    front.className = "flip-card-front";
    front.style.position = "absolute";
    front.style.width = "100%";
    front.style.height = "100%";
    front.style.backfaceVisibility = "hidden";

    const img = document.createElement("img");
    img.src = "images/" + product.image;
    img.alt = product.name;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    front.appendChild(img);

    const back = document.createElement("div");
    back.className = "flip-card-back";
    back.style.position = "absolute";
    back.style.width = "100%";
    back.style.height = "100%";
    back.style.backfaceVisibility = "hidden";
    back.style.background = "white";
    back.style.fontSize = "10px";
    back.style.overflowY = "auto";
    back.style.transform = "rotateY(180deg)";
    back.style.padding = "10px";
    back.style.boxSizing = "border-box";

    const ingredientsText = document.createElement("div");
    ingredientsText.textContent = product.ingredients;
    ingredientsText.style.marginBottom = "8px";

    const summary = document.createElement("div");
    summary.innerHTML = `
      <div style="color: red;">${nac80Matches.length ? "NAC-80: " + nac80Matches.join(", ") : "✅ No NAC-80"}</div>
      <div style="color: orange;">${fragrance.length ? "Fragrance: " + fragrance.join(", ") : "✅ No fragrance"}</div>
      <div style="color: #e67e22;">${adjacent.length ? "Adjacent: " + adjacent.join(", ") : "✅ No adjacent"}</div>
    `;

    back.appendChild(ingredientsText);
    back.appendChild(summary);

    inner.appendChild(front);
    inner.appendChild(back);
    container.appendChild(inner);
    results.appendChild(container);
  });
}
