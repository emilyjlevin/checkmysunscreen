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
  image: "neutrogena-radiant-tinted-face-sheertan-spf30.png",
  ingredients: "Active: Homosalate 5%, Octinoxate 7.5%, Octisalate 5%, Oxybenzone 2%, Titanium Dioxide 2.9%. Inactive: Water, Phenyl Trimethicone, Cetyl Dimethicone, Butylene Glycol, Silica, Cetearyl Alcohol, Barium Sulfate, PEG-100 Stearate, Glyceryl Stearate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Phenoxyethanol, Squalane, Bisabolol, Caprylyl Glycol, Magnesium Aluminum Silicate, Dipotassium Glycyrrhizate, Polysorbate 20, Polymethyl Methacrylate, Cetyl Hydroxyethylcellulose, Polysorbate 60, Xanthan Gum, Tetrasodium EDTA, Sorbic Acid, PEG-12 Dimethicone, Tocopheryl Acetate, Pantothenic Acid, Retinyl Palmitate, Ascorbic Acid, Iron Oxides, Mica, Titanium Dioxide"
  },
  {
  brand: "neutrogena",
  name: "Neutrogena Invisible Daily Defense Face SPF 60",
  image: "neutrogena_invisible_daily_defense_face_spf60.png",
  ingredients: "Active: Avobenzone 3%, Homosalate 13.5%, Octisalate 5%, Octocrylene 10%. Inactive: Water, Butyloctyl Salicylate, Glycerin, Alcohol Denat., Silica, Dimethicone, Aluminum Starch Octenylsuccinate, Polyurethane-62, Phenoxyethanol, Pentylene Glycol, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Acrylates/Dimethicone Copolymer, Glyceryl Stearate, Chlorphenesin, Styrene/Acrylates Copolymer, Zingiber Officinale (Ginger) Root Extract, Menthyl Lactate, Tocopheryl Acetate, Disodium EDTA, Trideceth-6, Chrysanthemum Parthenium (Feverfew) Flower/Leaf/Stem Juice, Sodium Hydroxide, Yellow 5, Red 40"
},
  {
  brand: "neutrogena",
  name: "Neutrogena Ultra Sheer Dry-Touch Lotion SPF 70",
  image: "neutrogena_ultrasheer_drytouch_lotion_spf70.png",
  ingredients: "Active: Avobenzone 3%, Homosalate 15%, Octisalate 5%, Octocrylene 10%. Inactive: Water, Butyloctyl Salicylate, Styrene/Acrylates Copolymer, Silica, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Beeswax, Caprylyl Methicone, Aluminum Starch Octenylsuccinate, Glyceryl Stearate, PEG-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Behenyl Alcohol, Acrylates/Dimethicone Copolymer, Xanthan Gum, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Sodium Polyacrylate, Hydrolyzed Jojoba Esters, Fragrance, Disodium EDTA, Ethylhexyl Stearate, Tocopheryl Acetate, BHT, Jojoba Esters, Trideceth-6"
},
 /* {
  brand: "neutrogena",
  name: "Neutrogena Ultra Sheer Dry-Touch Lotion SPF 45",
  image: "neutrogena_ultrasheer_drytouch_lotion_spf45.png",
  ingredients: "Active: Avobenzone 3%, Homosalate 10%, Octisalate 5%, Octocrylene 10%. Inactive: Water, Styrene/Acrylates Copolymer, Silica, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Beeswax, Caprylyl Methicone, Glyceryl Stearate, PEG-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Aluminum Starch Octenylsuccinate, Behenyl Alcohol, Acrylates/Dimethicone Copolymer, Xanthan Gum, Sodium Polyacrylate, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Hydrolyzed Jojoba Esters, Fragrance, Disodium EDTA, Ethylhexyl Stearate, Tocopheryl Acetate, BHT, Trideceth-6, Jojoba Esters"
}, */
  {
  "brand": "neutrogena",
  "name": "Neutrogena Beach Defense Oxybenzone-Free SPF 70",
  "image": "neutrogena_beachdefense_oxybenzonefree_spf70.png",
  "ingredients": "Active: Avobenzone 3%, Homosalate 15%, Octisalate 5%, Octocrylene 10%. Inactive: Water, Butyloctyl Salicylate, Styrene/Acrylates Copolymer, Potassium Cetyl Phosphate, Benzyl Alcohol, Silica, Glyceryl Stearate, PEG-100 Stearate, Dimethicone, Caprylyl Glycol, Synthetic Beeswax, Ethylhexylglycerin, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Behenyl Alcohol, Fragrance, Xanthan Gum, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Hydrolyzed Jojoba Esters, Disodium EDTA, Sodium Polyacrylate, Ethylhexyl Stearate, BHT, Jojoba Esters, Trideceth-6"
},
  {
  "brand": "neutrogena",
  "name": "Neutrogena Sport Face Lotion SPF 70",
  "image": "neutrogena_sport_face_lotion_spf70.png",
  "ingredients": "Active: Avobenzone 3%, Homosalate 15%, Octisalate 5%, Octocrylene 10%. Inactive: Water, Butyloctyl Salicylate, Styrene/Acrylates Copolymer, Silica, Dimethicone, Potassium Cetyl Phosphate, Beeswax, Benzyl Alcohol, Caprylyl Methicone, Glyceryl Stearate, PEG-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Behenyl Alcohol, Hydrolyzed Jojoba Esters, Acrylates/Dimethicone Copolymer, Xanthan Gum, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Sodium Polyacrylate, Disodium EDTA, Ethylhexyl Stearate, Tocopheryl Acetate, Bisabolol, BHT, Jojoba Esters, Trideceth-6"
},
  {
  "brand": "cerave",
  "name": "CeraVe Hydrating Mineral Tinted Face Lotion SPF 30 (Medium Sheer Tint)",
  "image": "cerave_hydrating_mineral_tinted_mediumsheertint_spf30.png",
  "ingredients": "Active: Titanium Dioxide 5.5%, Zinc Oxide 10%. Inactive: Water, C12-15 Alkyl Benzoate, Isohexadecane, Isononyl Isononanoate, Dicaprylyl Ether, PEG-30 Dipolyhydroxystearate, Triethylhexanoin, Polyglyceryl-4 Isostearate, Dicaprylyl Carbonate, Ethylene/Acrylic Acid Copolymer, Triethanolamine, Silica, Poly C10-30 Alkyl Acrylate, Stearic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Niacinamide, Cetearyl Alcohol, Triethoxycaprylylsilane, Behentrimonium Methosulfate, Sodium Chloride, Salicylic Acid, Sodium Hyaluronate, Sodium Lauroyl Lactylate, Cholesterol, Aluminum Stearate, Alumina, Aluminum Hydroxide, Iron Oxides, Phenoxyethanol, P-Anisic Acid, Chlorphenesin, Tocopherol, Disodium EDTA, Disodium Stearoyl Glutamate, Propylene Carbonate, Citric Acid, Caprylyl Glycol, Capryloyl Salicylic Acid, Caprylic/Capric Triglyceride, Diethylhexyl Syringylidenemalonate, Disteardimonium Hectorite, Xanthan Gum, Phytosphingosine, Polyhydroxystearic Acid, Ethylhexylglycerin"
},
  {
  brand: "cerave",
  name: "CeraVe Hydrating Sheer Broad-Spectrum Face/Body SPF 30",
  image: "cerave_hydrating_sheer_broadspectrum_facebody_spf30.png",
  ingredients: "Active: Homosalate 6%, Octisalate 5%, Octocrylene 5%, Zinc Oxide 7%. Inactive: Water, Glycerin, Coco-Caprylate/Caprate, Propanediol, Butyloctyl Salicylate, C12-22 Alkyl Acrylate/Hydroxyethylacrylate Copolymer, Niacinamide, Ethylhexyl Methoxycrylene, Oryza Sativa (Rice) Bran Wax, Steareth-20, Ceramide NP, Ceramide AP, Ceramide EOP, Sorbitan Isostearate, Carbomer, Triethoxycaprylylsilane, Cetearyl Alcohol, Behentrimonium Methosulfate, Triethyl Citrate, Sodium Lauroyl Lactylate, Sodium Hyaluronate, Cholesterol, Chlorphenesin, Hydroxyacetophenone, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Citric Acid, Caprylic/Capric Triglyceride, Caprylyl Glycol, Trisodium Ethylenediamine Disuccinate, Diethylhexyl Syringylidenemalonate, Xanthan Gum, Phytosphingosine, Polyhydroxystearic Acid, Polysorbate 60, Benzoic Acid"
},
  {
  brand: "cerave",
  name: "CeraVe Mineral Sunscreen Stick with Ceramides & Hyaluronic Acid SPF 50",
  image: "cerave_mineral_stick_ceramidesha_spf50.png",
  ingredients: "Active: Titanium Dioxide 6%, Zinc Oxide 4.7%. Inactive: C12-15 Alkyl Benzoate, Butyloctyl Salicylate, Neopentyl Glycol Diethylhexanoate, Paraffin, Euphorbia Cerifera (Candelilla) Wax, Ozokerite, Dimethicone, Beeswax, Polyethylene, Cetyl Alcohol, Ceramide 3, Ceramide 6-II, Ceramide 1, Cholesterol, Phytosphyingosine, Sodium Hyaluronate, Polyhydrostearic Acid, Aluminum Hydroxide, Stearic Acid, BHT, Carbomer, Triethoxycaprylylsilane, Isostearic Acid, Sodium Lauroyl Lactylate, Xanthan Gum"
},
  {
  "brand": "eltamd",
  "name": "EltaMD UV Daily Tinted Face SPF 40",
  "image": "eltamd_UVDaily_tinted_face_spf40.png",
  "ingredients": "Active: Octinoxate 7.5%, Zinc Oxide 9.0%. Inactive: Water, Petrolatum, Isopropyl Palmitate, Dimethicone, Cetearyl Alcohol, Oleth-3 Phosphate, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Cetearyl Glucoside, Octyldodecyl Neopentanoate, Ethylhexyl Stearate, Polyether-1, Butylene Glycol, PEG-7 Trimethylolpropane Coconut Ether, Sodium Hyaluronate, Iodopropynyl Butylcarbamate, Citric Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Iron Oxides"
},
  {
  brand: "eltamd",
  name: "EltaMD UV Clear Tinted Face Broad-Spectrum SPF 46",
  image: "eltamd_UVclear_tinted_face_broadspectrum_spf46.png",
  ingredients: "Active: Zinc Oxide 9.0%, Octinoxate 7.5%. Inactive: Water, Cyclopentasiloxane, Niacinamide, Octyldodecyl Neopentanoate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Butylene Glycol, Phenoxyethanol, Polyisobutene, Triethoxycaprylylsilane, Iron Oxides, Isopropyl Palmitate, Ethylhexyl Stearate, Tocopheryl Acetate, PEG-7 Trimethylolpropane Coconut Ether, Oleth-3 Phosphate, Iodopropynyl Butylcarbamate, Lactic Acid, Sodium Hyaluronate, Phosphoric Acid"
},
  {
  brand: "eltamd",
  name: "EltaMD UV Physical Tinted Broad-Spectrum SPF 41",
  image: "eltamd_UVphysical_tinted_broadspectrum_spf41.png",
  ingredients: "Active: Zinc Oxide 9.0%, Titanium Dioxide 7.0%. Inactive: Water, Isopropyl Palmitate, Ethylhexyl Stearate, Octyldodecyl Neopentanoate, Alumina, Polyacrylate-13, Phenoxyethanol, Hydrogen Dimethicone, Polyisobutene, Hydrogenated Polyisobutene, Triethoxycaprylylsilane, Oleth-3 Phosphate, Tocopheryl Acetate, Bisabolol, Tocopherol, Carnosine, Ethylhexylglycerin, Sorbitan Isostearate, Polysorbate 20, Zingiber Officinale (Ginger) Root Extract, Iron Oxides"
},
  {
  brand: "larocheposay",
  name: "La Roche-Posay Anthelios Mineral Tinted Face SPF 50 (Universal Tint)",
  image: "larocheposay_anthelios_mineral_tinted_face_universaltint_spf50.png",
  ingredients: "Active: Titanium Dioxide 11%. Inactive: Water, Isododecane, C12-15 Alkyl Benzoate, Dimethicone, Undecane, Triethylhexanoin, Isohexadecane, Styrene/Acrylates Copolymer, Nylon-12, Caprylyl Methicone, Butyloctyl Salicylate, Phenethyl Benzoate, Silica, Tridecane, Dicaprylyl Carbonate, Dicaprylyl Ether, Talc, Dimethicone/PEG-10/15 Crosspolymer, Aluminum Stearate, Pentylene Glycol, PEG-9 Polydimethylsiloxyethyl Dimethicone, Iron Oxides, Alumina, Polyhydroxystearic Acid, Phenoxyethanol, Magnesium Sulfate, Propylene Glycol, Caprylyl Glycol, Aluminum Hydroxide, PEG-8 Laurate, Stearic Acid, Disteardimonium Hectorite, Diethylhexyl Syringylidenemalonate, Tocopherol, Propylene Carbonate, Cassia Alata Leaf Extract, Maltodextrin, Benzoic Acid, Disodium Stearoyl Glutamate"
}
];



function format(str) {
  return str.trim().toLowerCase();
}

function checkBrand() {
  const input = document.getElementById("brandInput").value.toLowerCase();
  const results = document.getElementById("brandResults");
  results.innerHTML = '';

  const filtered = input === "" 
  ? allProducts 
  : allProducts.filter(p => p.brand.toLowerCase() === input);
  
  console.log("Filtered products:", filtered);

  filtered.forEach(product => {

    // ✅ NEW FLIP CARD FUNCTIONALITY
    const container = document.createElement("div");
    container.className = "product";

    const flipCardInner = document.createElement("div");
    flipCardInner.className = "flip-card-inner";

    // Front: product image
    const front = document.createElement("div");
    front.className = "flip-card-front";
    const img = document.createElement("img");
    img.src = "images/" + product.image;
    img.alt = "";
    front.appendChild(img);

    // Back: overlay content
    const back = document.createElement("div");
    back.className = "flip-card-back";
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
    //summary.style.fontSize = "0.6em";
    summary.style.marginTop = "8px";

    
    /* DELETE
    summary.innerHTML = `
      <div style="color: red;">${nac80Matches.length > 0 ? "NAC-80: " + nac80Matches.join(", ") : "✅ No NAC-80"}</div>
      <div style="color: orange;">${fragrance.length > 0 ? "Fragrance: " + fragrance.join(", ") : "✅ No fragrance"}</div>
      <div style="color: #e67e22;">${adjacent.length > 0 ? "Adjacent: " + adjacent.join(", ") : "✅ No adjacent"}</div>
    `;
    */

    summary.innerHTML = `
  <div style="color: ${nac80Matches.length > 0 ? 'red' : 'green'};">
    ${nac80Matches.length > 0 
      ? "⚠️ <strong>NAC-80 Ingredients Found:</strong> " + nac80Matches.join(", ")
      : "✅ No NAC-80 ingredients found."}
  </div>
  <div style="color: ${fragrance.length > 0 ? 'red' : 'green'};">
    ${fragrance.length > 0 
      ? "⚠️ <strong>Fragrance Ingredients Found:</strong> " + fragrance.join(", ")
      : "✅ No fragrance ingredients found."}
  </div>
  <div style="color: ${adjacent.length > 0 ? 'red' : 'green'};">
    ${adjacent.length > 0 
      ? "⚠️ <strong>Adjacent Ingredients Found:</strong> " + adjacent.join(", ")
      : "✅ No adjacent ingredients found."}
  </div>
`;

    

    back.appendChild(ingredientsText);
    back.appendChild(summary);

    // Combine
    flipCardInner.appendChild(front);
    flipCardInner.appendChild(back);
    container.appendChild(flipCardInner);
    
  results.appendChild(container);

  });
}


document.getElementById("brandInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkBrand();
  }
});


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

    results.innerHTML += formatResult("NAC-80 Ingredients Found", nac80Matches);
  results.innerHTML += formatResult("Fragrance Ingredients Found", fragrance);
  results.innerHTML += formatResult("Adjacent Ingredients Found", adjacent);
} // <-- close checkIngredients() here ✅




function formatResult(title, list) {
  const titleKey = title.toLowerCase();
  const hasMatch = list.length > 0;

  const color = hasMatch ? "red" : "green";
  const emoji = hasMatch ? "⚠️" : "✅";

  let label;
  if (titleKey.includes("nac-80")) {
    label = hasMatch
      ? "<strong>NAC-80 Ingredients Found:</strong> " + list.join(", ")
      : "No NAC-80 ingredients found.";
  } else if (titleKey.includes("fragrance")) {
    label = hasMatch
      ? "<strong>Fragrance Ingredients Found:</strong> " + list.join(", ")
      : "No fragrance ingredients found.";
  } else if (titleKey.includes("adjacent")) {
    label = hasMatch
      ? "<strong>Adjacent Ingredients Found:</strong> " + list.join(", ")
      : "No adjacent ingredients found.";
  }

  return `<p style="color: ${color};">${emoji} ${label}</p>`;
}



  
/* function formatResult(title, list) {
  const titleKey = title.toLowerCase();
  const isAdjacent = titleKey.includes("adjacent");
  const isFragrance = titleKey.includes("fragrance");

  if (list.length > 0) {
    //const color = isAdjacent ? "#e67e22" : "red";
    const color = "red";
    return `<p style="color: ${color};">⚠️ <strong>${title}:</strong> ${list.join(", ")}</p>`;
  } else {
    const label = titleKey.includes("nac-80") ? "No NAC-80" :
                  isFragrance ? "No fragrance" :
                  "No adjacent";
    return `<p style="color: green;">✅ ${label} found.</p>`;
  }
}
*/
  

