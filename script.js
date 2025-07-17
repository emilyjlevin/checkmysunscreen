// --- Check My Sunscreen Script ---
// Ingredient checker + product gallery

const nac80List = [...]

const format = str => str.trim().toLowerCase();

document.getElementById('checkButton').addEventListener('click', checkIngredients);

function checkIngredients() {
  const input = document.getElementById('ingredientInput').value;
  const ingredients = input.split(',').map(format);
  const nac80Matches = [];
  const fragrance = [];
  const adjacent = [];
  const mixTerms = ['paraben', 'rubber', 'mercapto', 'carba', 'thiourea', 'lactone', 'caine', 'compositae', 'textile'];

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
    box.innerHTML = `<h3>${emoji} ${title}</h3>` + (list.length ? `<p>${list.join(', ')}</p>` : '<p><em>None found.</em></p>');
    results.appendChild(box);
  };
  section('NAC-80 Allergens', nac80Matches, '✅');
  section('Fragrance Ingredients', fragrance, '⚠️');
  section('Adjacent Ingredients', adjacent, '🔍');
}

const products = [
  {
    brand: "cerave",
    name: "cerave",
    image: "images/cerave-medium.png",
    ingredients: `Water, C12-15 alkyl benzoate, Isohexadecane, Isononyl isononanoate, Dicaprylyl ether, Peg-30 dipolyhydroxystearate, Triethylhexanoin, Polyglyceryl-4 isostearate, Dicaprylyl carbonate, Ethylene/acrylic acid copolymer, Triethanolamine, Silica, Poly C10-30 alkyl acrylate, Stearic acid, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Niacinamide, Cetearyl alcohol, Triethoxycaprylylsilane, Behentrimonium methosulfate, Sodium chloride, Salicylic acid, Sodium hyaluronate, Sodium lauroyl lactylate, Cholesterol, Aluminum stearate, Alumina, Aluminum hydroxide, Iron oxides, Phenoxyethanol, P-anisic acid, Chlorphenesin, Tocopherol, Disodium EDTA, Disodium stearoyl glutamate, Propylene carbonate, Citric acid, Caprylyl glycol, Capryloyl salicylic acid, Caprylic/capric triglyceride, Diethylhexyl syringylidenemalonate, Disteardimonium hectorite, Xanthan gum, Phytosphingosine, Polyhydroxystearic acid, Ethylhexylglycerin.`,
    allergens: ['tocopherol', 'poly_c10-30_alkyl_acrylate']
  },
  {
    brand: "australiangold",
    name: "australiangold",
    image: "images/australiangold-medium.png",
    ingredients: `Cyclopentasiloxane, Water/Aqua/Eau, Glycerin, Silica, Cetyl PEG/PPG-10/1 Dimethicone, Disteardimonium Hectorite, Polymethylsilsesquioxane, PEG-10 Dimethicone, Hexyl Laurate, Polyglyceryl-4 Isostearate, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Porphyra Umbilicalis Extract, Eucalyptus Globulus (Eucalyptus) Leaf Extract, Dimethicone Crosspolymer, Stearic Acid, Caprylyl Glycol, Tocopheryl Acetate, Butyrospermum Parkii (Shea) Butter, Squalane, Panthenol, Disodium EDTA, Triethoxycaprylylsilane, Alumina, Phenoxyethanol, Iron Oxides (CI 77492, CI 77491, CI 77499)`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Petrolatum, Isopropyl Palmitate, Dimethicone, Cetearyl Alcohol, Oleth-3 Phosphate, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Cetearyl Glucoside, Octyldodecyl Neopentanoate, Ethylhexyl Stearate,Polyether-1, Butylene Glycol, PEG-7 Trimethylolpropane Coconut Ether, Sodium Hyaluronate, Iodopropynyl butylcarbamate, Citric Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Iron Oxides`,
    allergens: ['iodopropynyl_butylcarbamate', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "laroche",
    name: "laroche",
    image: "images/laroche-medium.png",
    ingredients: `Water, Isododecane, C12-15 Alkyl Benzoate, Dimethicone, Undecane, Triethylhexanoin, Isohexadecane, Styrene/Acrylates Copolymer, Nylon-12, Caprylyl Methicone, Butyloctyl Salicylate, Phenethyl Benzoate, Silica, Tridecane, Dicaprylyl Carbonate, Dicaprylyl Ether, Talc, Dimethicone / Peg-10/15 Crosspolymer, Aluminum Stearate, Pentylene Glycol, Peg-9 Polydimethylsiloxyethyl Dimethicone, Iron Oxides, Alumina, Polyhydroxystearic Acid, Phenoxyethanol, Magnesium Sulfate, Propylene Glycol, Caprylyl Glycol, Aluminum Hydroxide, Peg-8 Laurate, Stearic Acid, Disteardimonium Hectorite, Diethylhexyl Syringylidenemalonate, Tocopherol, Propylene Carbonate, Cassia Alata Leaf Extract, Maltodextrin, Benzoic Acid, Disodium Stearoyl Glutamate`,
    allergens: ['propylene_glycol', 'tocopherol', 'styrene-acrylates_copolymer']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Isohexadecane, Dicaprylyl Carbonate, Dimethicone, Isopropyl Palmitate, Isononyl Isononanoate, Cetyl PEG/PPG-10/1 Dimethicone, C12-15 Alkyl Benzoate, Sodium Chloride, Polyhydroxystearic Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Sorbitan Sesquioleate, Phenoxyethanol, Ethylhexylglycerin, Dimethiconol, Aluminum Hydroxide, Dimethicone Crosspolymer, Stearic Acid, Xanthan Gum, Iron Oxides`,
    allergens: ['sorbitan_sesquioleate', 'tocopheryl_acetate']
  },
  {
    brand: "eucerin",
    name: "eucerin",
    image: "images/eucerin-medium.png",
    ingredients: ` Water, C12-15 Alkyl Benzoate, Isopropyl Palmitate, Butyloctyl Salicylate, Ethylhexyl Pelargonate, Cetyl PEG/PPG-10/1 Dimethicone, Propylene Glycol, Cyclopentasiloxane, Bis-Octyldodecyl Dimer Dilinoleate/Propanediol Copolymer, Dimethicone, Diethylhexyl Syringylidenemalonate, Ethylhexyl Methoxycrylene, Polyester-27, Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Sodium Ascorbyl Phosphate, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Vitamin E), Triethoxycaprylylsilane, Beeswax, Hydroxyacetophenone, Sodium Chloride, PEG-12 Dimethicone Crosspolymer, 1,2-Hexanediol, Caprylyl Glycol, Jojoba Esters, Silica, Polyglyceryl-6 Polyricinoleate, Iron Oxides`,
    allergens: ['propylene_glycol', 'tocopherol']
  },
  {
    brand: "drmtlgy",
    name: "drmtlgy",
    image: "images/drmtlgy-medium.png",
    ingredients: `Water/Aqua/Eau, Cyclopentasiloxane, Niacinamide, Oleth-3 Phosphate, Octyldodecyl Neopentanoate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glycerin, Polygonum Aviculare Extract, Sodium Hyaluronate, Tocopheryl Acetate, Ethylhexylglycerin, Triethoxysilylethyl Polydimethylsiloxyethyl Hexyl Dimethicone, Polyglyceryl-3 Polydimethylsiloxyethyl Dimethicone, PEG-7 Trimethylolpropane Coconut Ether, Polyisobutene, Triethoxycaprylylsilane, Disodium EDTA, Iron Oxides, Phenoxyethanol`,
    allergens: ['hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Cyclopentasiloxane, Niacinamide, Octyldodecyl Neopentanoate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Butylene Glycol, Phenoxyethanol, Polyisobutene, Triethoxycaprylylsilane, Iron Oxides, Isopropyl Palmitate, Ethylhexyl Stearate,Tocopheryl Acetate, PEG-7 Trimethylolpropane Coconut Ether, Oleth-3 Phosphate,Iodopropynyl Butylcarbamate, Lactic Acid, Sodium Hyaluronate, Phosphoric Acid.`,
    allergens: ['Iodopropynyl Butylcarbamate', 'Hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "colorscience",
    name: "colorscience",
    image: "images/colorscience-medium.png",
    ingredients: `Water, C12-15 Alkyl Benzoate, Butyloctyl Salicylate, Lauryl PEG-8 Dimethicone, Isododecane, Propanediol, Caprylyl Methicone, Dimethicone, Niacinamide, Tridecyl Salicylate, Dimethicone/Vinyl Dimethicone Crosspolymer, Trilaureth-4 Phosphate, Dimethiconol/ Propylsilsesquioxane/ Silicate Crosspolymer, Lauryl PEG-10 Tris(trimethylsiloxy)silylethyl Dimethicone, Mica, Polyester-1, Maltodextrin, Sodium Chloride, Bisabolol (Levomenol), Disodium Lauriminodipropionate Tocopheryl Phosphates, Ethylhexylglycerin, Tremella Fuciformis Sporocarp (Silver Ear Mushroom) Extract, Allantoin, Silica Dimethyl Silylate, Caprylyl Glycol, Isoceteth-10, Zein, Hexylene Glycol, Dimethylmethoxy Chromanol, Synthetic Fluorphlogopite, Zea Mays (Corn) Starch, Silica, Caesalpinia Spinosa (Tara) Fruit Pod Extract, Hydrogenated Lecithin, Tetrasodium Glutamate Diacetate, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Sprout Extract, Phenoxyethanol, Sodium Benzoate, Benzoic Acid, Dehydroacetic Acid, Sodium Hydroxide, Sodium Myristoyl Glutamate, Aluminium Hydroxide, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499).`,
    allergens: ['sodium_benzoate']
  },
  {
    brand: "blissblock",
    name: "blissblock",
    image: "images/blissblock-medium.png",
    ingredients: `Water, Cyclopentasiloxane, Butylene glycol, Glycerin, Dicaprylyl carbonate, Propylene glycol dicaprylate, Disiloxane, Dimethicone/vinyl dimethicone crosspolymer, Dimethicone, Peg-10 dimethicone, Sodium acrylates crosspolymer-2, Polymethylsilsesquioxane, Butyloctyl salicylate, Vinyl dimethicone/methicone silsesquioxane crosspolymer, Vaccinium angustifolium (blueberry) fruit extract, Oenothera biennis (evening primrose) flower extract, Euterpe oleracea fruit extract, Hibiscus sabdariffa flower extract, Camellia sinensis leaf extract, Pinus palustris leaf extract, Ulmus davidiana root extract, Pueraria lobata root extract, Enantia chlorantha bark extract, Lavandula angustifolia (lavender) oil, Rosa canina fruit oil, Anthemis nobilis flower oil, Sodium hyaluronate, Oleanolic acid, Squalane, Glyceryl caprylate, Aluminum hydroxide, Polyglyceryl-6 polyricinoleate, Sorbitan caprylate, Stearic acid, Synthetic fluorphlogopite, Triethoxycaprylylsilane, Dipropylene glycol, 1,2-Hexanediol, Dimethicone/peg-10/15 crosspolymer, Disteardimonium hectorite, Magnesium sulfate, Ethylhexylglycerin, Iron oxides.
`,
    allergens: ['sodium_acrylates_crosspolymer-2']
  },
  {
    brand: "elf",
    name: "elf",
    image: "images/elf-medium.png",
    ingredients: `Water (Aqua), Glycerin, polyglyceryl-3 Distearate, Bismuth Oxychloride, Niacinamide, Aluminum Starch Octenylsuccinate, Trehalose, Silica, Panthenol, Sodium Hyaluronate, Squalane, Aloe Barbadensis Leaf Juice, Glyceryl Stearate Citrate, Cetearyl Olivate, Sorbitan Olivate, Stearyl Caprylate, Stearic Acid, Palmitic Acid, Dimethicone, Cetearyl Alcohol, Stearyl Heptanoate, Polyacrylate-13, Polyisobutene, Polysorbate 20, Ethylhexyl Hydroxystearate, Sorbitan Isostearate, Triethoxycaprylylsilane, Acrylates/Polytrimethylsiloxymethacrylate Copolymer , Caprylyl Glycol, Ethylhexylglycerin, Potassium Sorbate, Phenoxyethanol, Disodium EDTA, Sodium Benzoate, Citric Acid, May Contain: Iron Oxides (CI 77491, CI 77492, CI 77499).`,
    allergens: ['sodium_benzoate', 'polyacrylate-13', 'acrylates-polytrimethylsiloxymethacrylate_copolymer']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Isopropyl Palmitate, Octyl Stearate, Octyldodecyl Neopentanoate, Oleth-3 Phosphate, Perfluorononyl Dimethicone, Yellow Iron Oxide, Red Iron Oxide, Black Iron Oxide, Polyacrylate-13, Polysorbate 20, Thioctic Acid, Lecithin, Sodium Hydroxide, Triethoxycaprylylsilane, Polyisobutene, Phenoxyethanol, Linoleic Acid, Iodopropynyl Butylcarbamate, Citric Acid, Butylene Glycol, Alumina, Methicone`,
    allergens: ['iodopropynyl_butylcarbamate', 'polyacrylate-13']
  },
  {
    brand: "paulaschoice",
    name: "paulaschoice",
    image: "images/paulaschoice-medium.png",
    ingredients: `Water, Cyclopentasiloxane, PEG-12 Dimethicone, PEG/PPG-18/18 Dimethicone, Lauroyl Lysine, Sodium Chloride, Trihydroxystearin, Dimethicone Crosspolymer, Resveratrol, Quercetin, Epigallocatechin Gallate, Tocopheryl Acetate, Tetrahexyldecyl Ascorbate, Adenosine, Bisabolol, Salix Alba (Willow) Bark Extract, Punica Granatum (Pomegranate) Extract, Haematococcus Pluvialis Extract, Hydrolyzed Corn Starch, Polysorbate 80, Hydrated Silica, Triethoxycaprylylsilane, C12-15 Alkyl Benzoate, Isopropyl Titanium Triisostearate, Caprylyl Glycol, Hexylene Glycol, Ethylhexylglycerin, Iron Oxide, Phenoxyethanol`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "tower",
    name: "tower",
    image: "images/tower-medium.png",
    ingredients: `Water/Aqua/Eau, Isononyl Isononanoate, C9-12 Alkane, Butyloctyl Salicylate, Polyglyceryl-6 Polyricinoleate, Caprylic/Capric Triglyceride, Glycerin, Ethylhexyl Methoxycrylene, Trimethylsiloxysilicate, Mica, Polyglyceryl-2 Isostearate, Sodium Chloride, Phenoxyethanol, Disteardimonium Hectorite, Polyglyceryl-3 Polyricinoleate, Polyhydroxystearic Acid, Coco-Caprylate/Caprate, Isostearic Acid, Lecithin, Polyglyceryl-6 Polyhydroxystearate, Jojoba Esters, Ethylhexylglycerin, Sodium Phytate, Aloe Barbadensis Leaf Water, Centella Asiatica Extract, Opuntia Tuna Fruit, Salvia Officinalis (Sage) Extract, May Contain (+/-): Iron Oxides (CI 77491, CI 77492, CI 77499), Titanium Dioxide (CI 77891).`,
    allergens: ['none']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `cyclopentasiloxane, isopropyl myristate, polyamide-5, dimethicone crosspolymer, stearalkonium hectorite, polysilicone-11, oryza sativa (rice) bran extract, rosmarinus officinalis (rosemary) leaf extract, helianthus annuus (sunflower) extract, tocopherol, mica, iron oxides, propylene carbonate, synthetic wax, hydrogen dimethicone, isopropyl titanium triisostearate, aluminum hydroxide, silica silylate, octyldodecyl oleate`,
    allergens: ['tocopherol']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Titanium Dioxide, Isopropyl Isostearate, Cyclopentasiloxane, Dimethicone, Butylene Glycol, Glyceryl Stearate, Cetyl Alcohol, Cetearyl Alcohol, PEG-75 Stearate, Lauroyl Lysine, Tocopheryl Acetate, Olea Europaea (Olive) Fruit Extract, BHT, Erythorbic Acid, Bisabolol, Retinyl Palmitate, Retinol, Arginine, Silica, Polysorbate 20, PEG-100 Stearate, Isostearyl Palmitate, Sclerotium Gum, Polysilicone-11, Ammonium Polyacryloyldimethyl Taurate, Ceteth-20, Steareth-20, Tetrasodium EDTA, Iron Oxides, Methylparaben, Propylaparaben, Ethylparaben, Phenoxyethanol, Fragrance`,
    allergens: ['fragrance', 'tocopheryl_acetate', 'methylparaben', 'propylaparaben', 'ethylparaben']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Dimethicone, Butyloctyl Salicylate, Octyldodecyl Neopentanoate, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Cetyl Dimethicone, Dimethicone/PEG-10/15 Crosspolymer, Polyhydroxystearic Acid, Alumina, Phenoxyethanol, Triethoxycaprylylsilane, Sodium Chloride, Hydrogen Dimethicone, Sodium Hyaluronate, Potassium Sorbate, Tocopheryl Acetate, Tocopherol, Bisabolol, Carnosine, Dipropylene Glycol, Ascorbyl Palmitate, Zingiber Officinale (Ginger) Root Extract, Iron Oxides.`,
    allergens: ['tocopherol', 'tocopheryl_acetate']
  },
  {
    brand: "alastin",
    name: "alastin",
    image: "images/alastin-medium.png",
    ingredients: `Water/Aqua/Eau, Cyclopentasiloxane, Dimethicone, Polyglyceryl-3 Polydimethylsiloxyethyl Dimethicone, Butylene Glycol, Stearic Acid, Aluminum Hydroxide, Thermus Thermophillus Ferment, Camellia Sinensis Leaf Extract, Hydroxymethoxyphenyl Decanone, Dunaliella Salina Extract, Asteriscus Graveolens Flower/Fruit/Leaf/Stem Extract, Ergothioneine, Ectoin, Squalane, Glycerin, Caprylic/Capric Triglyceride, Tocopherol, Tocopheryl Acetate, Dimethicone/PEG-10/15 Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, PEG-9 Polydimethylsiloxyethyl Dimethicone, Ethylhexylglycerin, Triethoxysilylethyl Polydimethylsiloxyethyl Hexyl Dimethicone, PEG/PPG-18/18 Dimethicone, Triethoxycaprylylsilane, Sodium Citrate, Sodium Chloride, Potassium Sorbate, Dipropylene Glycol, Phenoxyethanol, Iron Oxides (CI 77492, CI 77491, CI 77499).`,
    allergens: ['tocopherol', 'tocopheryl_acetate']
  },
  {
    brand: "isdin",
    name: "isdin",
    image: "images/isdin-medium.png",
    ingredients: `Water, Diethylhexyl Carbonate, Dibutyl Adipate, Cyclopentasiloxane, Dicaprylyl Carbonate, Alcohol Denat., Cyclohexasiloxane, Butylene Glycol, Silica, PEG-30 Dipolyhydroxystearate, Nylon-12, Glycerin, PEG-10 Dimethicone, Dimethicone, Sodium Chloride, Phenoxyethanol, Iron Oxides, Disteardimonium Hectorite, Triethoxycaprylylsilane, Panthenol, Tocopheryl Acetate, Glyceryl Stearate, Propanediol, Fragrance, Bisabolol, Disodium EDTA, Ethylhexylglycerin, PEG-8, Hydroxypropyl Cyclodextrin, Tocopherol, Lecithin, Plankton Extract, Ascorbyl Palmitate, Sodium Benzoate, Ascorbic Acid, Citric Acid, Palmitoyl Tripeptide-38, Pentapeptide-34 Trifluoroacetate.`,
    allergens: ['tocopherol', 'sodium_benzoate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "missha",
    name: "missha",
    image: "images/missha-medium.png",
    ingredients: `Water (Aqua), Cyclopentasiloxane, Propylene Glycol, Caprylic/Capric Triglyceride, PEG-10 Dimethicone, Glycerin, Cetyl PEG/PPG-10/1 Dimethicone, Arbutin, Mineral Oil, Polyethylene, Talc, Phenyl Trimethicone, Beeswax (Cera Alba), Iron Oxides (CI 77492), Sodium Chloride, Iron Oxides (CI 77499), Iron Oxides (CI 77491), Methylparaben, Dimethicone, Propylparaben, Rosa Canina Fruit Oil, Squalane, Macadamia Ternifolia Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Cyclotetrasiloxane, Disodium EDTA, Adenosine, Algae Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Chamomilla Recutita (Matricaria) Flower Extract, Ceramide NP, Butylene Glycol, Fagus Sylvatica Bud Extract, Hydrolyzed collagen, Caprylyl Glycol, Benzyl Alcohol, 1,2-Hexanediol, Caprylhydroxamic Acid, Tocopherol, Benzoic Acid, Sodium Hyaluronate, Phenoxyethanol, Tropolone, Fragrance (Parfum), Butylphenyl Methylpropional, Benzyl Salicylate, Hydroxycitronellal, Alpha-Isomethyl Ionone, Hexyl Cinnamal, Linalool, Citronellol, Limonene`,
    allergens: ['propylene_glycol', 'benzyl_alcohol', 'tocopherol', 'benzyl_salicylate', 'fragrance', 'methylparaben', 'propylparaben', 'hexyl_cinnamal', 'linalool', 'limonene']
  },
  {
    brand: "tizo",
    name: "tizo",
    image: "images/tizo-medium.png",
    ingredients: `Alumina, Cyclohexasiloxane, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Iron Oxide (CI 77491), Lauryl PEG/PPG-18/18 Methicone, Hydrogen Dimethicone, PEG-10 Dimethicone, Tetrahexyldecyl Ascorbate, Tocopheryl Acetate `,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "supergoop",
    name: "supergoop",
    image: "images/supergoop-medium.png",
    ingredients: `Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid`,
    allergens: ['tocopherol', 'acrylates-c10-30_alkyl_acrylate_crosspolymer']
  },
  {
    brand: "coola",
    name: "coola",
    image: "images/coola-medium.png",
    ingredients: `Aluminum Hydroxide, Caprylhydroxamic Acid, Caprylyl Glycol, Carthamus Tinctorius (ORGANIC Safflower) Seed Oil, Citrus Aurantium Dulcis (ORGANIC Orange) Fruit Water, Cocoglycerides, Commiphora Myrrha Leaf Cell Extract, Cucumis Sativus (ORGANIC Cucumber) Fruit Extract, Dicaprylyl Carbonate, Euterpe Oleracea Pulp (ORGANIC Acai) Oil, Flavor, Glycerin (ORGANIC), Helianthus Annuus (ORGANIC Sunflower) Seed Extract, Helianthus Annuus (ORGANIC Sunflower) Seed Oil*, Hydrogen Dimethicone, Hydrolyzed Wheat Protein / PVP Crosspolymer, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Iron Oxides, Mica, Octyldodecyl Oleate, Oryza Sativa (ORGANIC Rice) Bran Oil, Plankton Extract, Propanediol, Rosa Alba Leaf Cell Extract, Rosa Centifolia Leaf Cell Extract, Rosa Damascena Leaf Cell Extract, Rosa Gallica Leaf Cell Extract, Rosmarinus Officinalis (ORGANIC Rosemary) Leaf Extract, Sodium Citrate, Trisodium Ethylenediamine Disuccinate, Water, Xanthan Gum.`,
    allergens: ['hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer']
  },
  {
    brand: "gangnam",
    name: "gangnam",
    image: "images/gangnam-medium.png",
    ingredients: `Water, Dicaprylyl Carbonate, Hexyl Laurate, Dipropylene Glycol, Sorbitan Olivate, Glycerin, Cyclopentasiloxane, Isohexadecane, Disteardimonium Hectorite, Panthenol, Caprylic/Capric Triglyceride, Glyceryl Caprylate, Magnesium Sulfate, PEG-30 Dipolyhydroxystearate, Fragrance, Triethoxycaprylylsilane, Aluminum Stearate, Alumina, Mica, Ethylhexylglycerin, Stearyl Glycyrrhetinate, Iron Oxides (CI 77492), Myristica Fragrans (Nutmeg) Extract, Iron Oxides (CI 77491), Iron Oxides (CI 77499), Moringa Oleifera Seed Oil, Diphenylsiloxy Phenyl Trimethicone, Tocopherol, Triethoxysilyethyl Polydimethylsiloxyethyl Hexyl Dimethicone, Chrysin, 12-Hexanediol, Camellia Sinensis Leaf Extract, Hydroxycitronellal, Limonene, Linalool.`,
    allergens: ['tocopherol', 'fragrance', 'limonene', 'linalool']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Coco-Caprylate/Caprate, Butyloctyl Salicylate, Caprylic/Capric Triglyceride, Octyldodecyl Neopentanoate, Methyl Glucose Sesquistearate, Silica, Glyceryl Stearate, PEG-100 Stearate, PEG-20 Methyl Glucose Sesquistearate, Phenoxyethanol, Iron Oxides, Triethoxycaprylylsilane, Polyhydroxystearic Acid, Glycerin, Glyceryl Behenate, Saccharide Isomerate, Xanthan Gum, Zingiber Officinale (Ginger) Root Extract, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Squalane, Ethylhexylglycerin Tetrahexyldecyl Ascorbate, Tocopheryl Acetate, Sclerotium Gum, Lecithin, Pullulan, Dimethicone, Mica, Polysorbate 60, Ethylene/Methacrylate Copolymer`,
    allergens: ['hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'ethylene-methacrylate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "mdsolar",
    name: "mdsolar",
    image: "images/mdsolar-medium.png",
    ingredients: `dimethicone, caprylic/capric triglyceride, dimethicone crosspolymer, dimethicone/vinyl dimethicone crosspolymer, butyloctyl salicylate, glyceryl isostearate, polysilicone-15, tetrahexyldecyl ascorbate (vitamin c), camellia sinensis leaf extract (green tea), punica granatum extract (pomegranate), vaccinium macrocarpon (cranberry) fruit extract, silica, polyhydroxystearic acid, ci 77891, ci 77492, ci 77491, ci 77499`,
    allergens: ['none']
  },
  {
    brand: "cotz",
    name: "cotz",
    image: "images/cotz-medium.png",
    ingredients: `Alumina, Cyclohexasiloxane, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Iron Oxide, Lauryl PEG/PPG-18/18 Methicone, Hydrogen Dimethicone, PEG-10 Dimethicone`,
    allergens: ['none']
  },
  {
    brand: "pcaskin",
    name: "pcaskin",
    image: "images/pcaskin-medium.png",
    ingredients: `Alumina, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Caprylyl Glycol, Dimethicone, Dimethicone/PEG-10/15 Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Ethylhexylglycerin, Hexylene Glycol, Hydrogen Dimethicone, Iron Oxides, Isododecane, Jojoba Esters, Methyl Methacrylate/Glycol Dimethacrylate Crosspolymer, Octyldodecanol, PEG-9 Polydimethylsiloxyethyl Dimethicone, Phenoxyethanol, Polyglyceryl-3 Polydimethylsiloxyethyl Dimethicone, Polymethylsilsesquioxane, Sodium Chloride, Triethoxycaprylylsilane, Water`,
    allergens: ['methyl_methacrylate-glycol_dimethacrylate_crosspolymer']
  },
  {
    brand: "babo",
    name: "babo",
    image: "images/babo-medium.png",
    ingredients: `Aloe Barbadensis Leaf (Aloe Vera Gel) Juice*, Aqua (Deionized Water), Argania Spinosa (Argan) Oil, Beeswax*, Organic Butyrospermum Parkii (Shea) Butter*, C13-14 Alkyls Benzoate, Organic Camellia Sinensis (Green Tea) Extract*, Caryodendron Orinocense (Kahai) Oil, Caprylic/Capric Triglyceride, Organic Cocos Nucifera (Coconut) Oil*, Cucumis Sativus (Cucumber) Extract, Decyl Glucoside, Glycerin*, Glyceryl Caprylate, Glyceryl Stearate Citrate, Glyceryl Stearate, Glyceryl Undecylenate, Organic Helianthus Annuus (Sunflower) Oil*, Hippophae Rhamnoides (Sea Buckthorn) Oil, Hyaluronic Acid, Iron Oxides, Lecithin, Mangifera Indica (Mango) Butter, Organic Punica Granatum (Pomegranate) Extract*, Organic Rosmarinus Officinalis (Rosemary) Oil*, Saccharide Isomerate, Sodium Polyacrylate, Stearic Acid, Tocopherol (Vitamin E), Xanthan Gum, Zemea (Corn) Propanediol`,
    allergens: ['decyl_glucoside', 'tocopherol', 'sodium_polyacrylate']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Isopropyl Palmitate, Ethylhexyl Stearate, Octyldodecyl Neopentanoate, Perfluorononyl Dimethicone, Alumina, Polyacrylate-13, Phenoxyethanol, Hydrogen Dimethicone, Polyisobutene, Triethoxycaprylylsilane, Oleth-3 Phosphate, Citric Acid, Polysorbate 20, Sorbitan Isostearate, Sodium Hydroxide, Thioctic Acid, Quercetin, Tocopherol`,
    allergens: ['tocopherol', 'polyacrylate-13']
  },
  {
    brand: "bareminerals",
    name: "bareminerals",
    image: "images/bareminerals-medium.png",
    ingredients: `Water, Coconut Alkanes, Propanediol, Squalane, Trehalose, Isostearic Acid, Glycerin, Silica, Agar, Caprylic/Capric Triglyceride, Globularia Cordifolia Callus Culture Extract, Salicornia Herbacea Extract, Melilotus Officinalis Extract, Coco-Caprylate/Caprate, Butylene Glycol, Lauroyl Lysine, Sodium Hyaluronate, Succinoglycan, Polysorbate 60, Cellulose Gum, Polyglyceryl-4 Laurate/Succinate, Sorbitan Sesquiisostearate, Magnesium Stearate, Magnesium Hydroxide, Magnesium Chloride, Potassium Chloride, Calcium Chloride, Potassium Sorbate, Phenoxyethanol. May Contain: Titanium Dioxide, Iron Oxides`,
    allergens: ['none']
  },
  {
    brand: "vichy",
    name: "vichy",
    image: "images/vichy-medium.png",
    ingredients: `Water, Isododecane, Dimethicone, C12-15 Alkyl Benzoate, Undecane, Styrene/Acrylates Copolymer, Caprylyl Methicone, Nylon-12, Butyloctyl Salicylate, Phenethyl Benzoate, Dicaprylyl Carbonate, Silica, Triethylhexanoin, Isohexadecane, Tridecane, Dicaprylyl Ether, Talc, Dimethicone/PEG-10/15 Crosspolymer, Aluminum Hydroxide, Stearic Acid, PEG-9 Polydimethylsiloxyethyl Dimethicone, Pentylene Glycol, Alumina, Aluminum Stearate, Benzoic Acid, Benzyl Benzoate, Caprylyl Glycol, Dipropylene Glycol, Disodium Stearoyl Glutamate, Disteardimonium Hectorite, Helianthus Annuus (Sunflower) Seed Oil, Iron Oxides, Magnesium Sulfate, PEG-8 Laurate, Phenoxyethanol, Polyhydroxystearic Acid, Propylene Carbonate, Sodium Citrate, Sodium Dodecylbenzenesulfonate, Tocopherol`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer']
  },
  {
    brand: "peter",
    name: "peter",
    image: "images/peter-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, C9-12 Alkane, Carthamus Tinctorius (Safflower) Oleosomes, Isodecyl Neopentanoate, Dicaprylyl Carbonate, Cetyl Alcohol, Coco-Caprylate/Caprate, Propanediol, Ethylhexyl Olivate, Glyceryl Stearate, PEG-100 Stearate, Cetearyl Olivate, Stearyl Phosphate, Triethoxycaprylylsilane, Phenoxyethanol, Oleth-3 Phosphate, Sorbitan Olivate, HDI/Trimethylol Hexyllactone Crosspolymer, Alumina, Xanthan Gum, Polymethylsilsesquioxane, Polyhydroxystearic Acid, Squalane, Gluconolactone, Sodium Phytate, Isopropyl Titanium Triisostearate, Sodium Benzoate, Hydrogen Dimethicone, Potassium Sorbate, Silica, Tocopheryl Acetate, Ascorbic Acid, Diamond Powder, Iron Oxides, Mica.`,
    allergens: ['sodium_benzoate', 'hdi-trimethylol_hexyllactone_crosspolymer', 'gluconolactone', 'tocopheryl_acetate']
  },
  {
    brand: "mychelle",
    name: "mychelle",
    image: "images/mychelle-medium.png",
    ingredients: `Agave Tequilana Leaf Extract, Bentonite, Bisabolol, Butyloctyl Salicylate, Caprylhydroxamic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Caprylyl Glycol, Carthamus Tinctorius (Safflower) Oleosomes, Cetearyl Alcohol, Coco-Glucoside, Diheptyl Succinate, Ethyl Ferulate, Glycerin, Hydrolyzed Wheat Protein / PVP Crosspolymer, Iron Oxides, Jojoba Esters, Maltose, Octyldodecanol, Sodium Gluconate, Tocopherol, Trihydroxystearin, Water`,
    allergens: ['tocopherol']
  },
  {
    brand: "babo",
    name: "babo",
    image: "images/babo-medium.png",
    ingredients: `Oryza Sativa (Rice) Bran Oil, Persea Gratissima (Avocado) Oil, Euphorbia Cerifera (Candelilla) Wax, Octyldodecyl Oleate, Simmondsia Chinensis (Jojoba) Seed Oil, Beeswax, Theobroma Cacao (Cocoa) Seed Butter, Oryzanol, Butyrospermum Parkii (Shea) Butter, Argania Spinosa (Argan) Kernel Extract, Rosa Canina (Rosehip) Fruit Extract, Tocopherol (Vitamin E), Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract, Helianthus Annuus (Sunflower) Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Nasturtium Officinale (Watercress) Flower/Leaf Extract, Spiraea Ulmaria (Meadowsweet) Flower Extract, Calophyllum Inophyllum (Tamanu) Seed Oil, Coffea Arabica (Coffee) Seed Extract, Jojoba Esters, Octyldodecanol, Iron Oxides, Bisabolol, Trihydroxystearin`,
    allergens: ['tocopherol']
  },
  {
    brand: "babo",
    name: "babo",
    image: "images/babo-medium.png",
    ingredients: `Water (Aqua), Butyloctyl Salicylate, Diheptyl Succinate, Calcium Sodium Borosilicate, Octyldodecyl Neopentanoate, Erythritol, Lauryl Laurate, Passiflora Edulis (Maracuja) Seed Oil, Propanediol, Carthamus Tinctorius (Safflower) Oleosomes, Bentonite, Aloe Barbadensis Leaf Juice, Lupinus Albus (White Lupin) Seed Oil, Rubus Idaeus (Raspberry) Seed Oil, Bisabolol, Tocopherol, Glycerin, Helianthus Annuus (Sunflower) Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Nasturtium Officinale (Watercress) Flower/Leaf Extract, Spiraea Ulmaria (Meadowsweet) Flower Extract, Triticum Vulgare (Wheat) Germ Oil Unsaponifiables, Hydrolyzed Wheat Protein/PVP Crosspolymer, Cetearyl Alcohol, Caprylyl Glycol, Ethyl Ferulate, Sucrose Polystearate, Capryloyl Glycerin/Sebacic Acid Copolymer, Sucrose Stearate, Coco-Glucoside, Octyldodecyl Oleate, Polyhydroxystearic Acid, Sodium Gluconate, Caprylhydroxamic Acid, Microcrystalline Cellulose, Xanthan Gum, Citric Acid, Iron Oxides.`,
    allergens: ['tocopherol']
  },
  {
    brand: "revision",
    name: "revision",
    image: "images/revision-medium.png",
    ingredients: `Water (Aqua), Cyclopentasiloxane, Jojoba Esters, Hydrogenated Starch Hydrolysate, Caprylic/Capric Triglyceride, Ethylhexyl Stearate, Cetyl PEG/PPG-10/1 Dimethicone, Hexyl Laurate, Polyglyceryl-4 Isostearate, Butylene Glycol, Glycerin, Cetyl Dimethicone, Aloe Barbadensis Leaf Juice, Betula Alba (White Birch) Bark Extract, Camellia Sinensis (Green Tea) Leaf Extract, Plankton Extract, Beeswax (Cera Alba), Dimethicone, Squalane, Tocopheryl Acetate, Tetrahexyldecyl Ascorbate, Tocopherol, Palmitoyl Tripeptide-5, Hydrogenated Castor Oil, Lecithin, Palmitoyl Dipeptide-5 Diaminobutyroyl Hydroxythreonine, Glyceryl Caprylate, Tetradecyl Aminobutyroylvalylaminobutyric Urea Trifluoroacetate, Yeast Extract (Faex), Boron Nitride, Epigallocatechin Gallate, Ubiquinone, Simmondsia Chinensis (Jojoba) Meal Extract, Sodium Chloride, Phenoxyethanol, Glyceryl Isostearate, Chlorphenesin, Polyhydroxystearic Acid, Xanthan Gum, Magnesium Chloride, Triethoxycaprylylsilane, Benzoic Acid, Sorbic Acid, Iron Oxides (CI 77491, CI 77492, CI 77499)`,
    allergens: ['tocopherol', 'tocopheryl_acetate']
  },
  {
    brand: "thinkdaily",
    name: "thinkdaily",
    image: "images/thinkdaily-medium.png",
    ingredients: `PURIFIED WATER, ALOE BARBADENSIS LEAF JUICE, CAPRIC CAPRYLIC TRIGLYCERIDES, SORBITAN STEARATE (COCONUT BASED), PINE WOOD RESIN, VEGETABLE GLYCERIN, CETYL DIMETHICONE, HYDROGENATED CASTOR OIL, MAGNESIUM SULFATE (EPSOM SALT), SUNFLOWER OIL, JOJOBA OIL, ASCORBIC ACID (VITAMIN C), TOCOPHEROL, OLIVE OIL, RASPBERRY SEED OIL, CRANBERRY SEED OIL, HYALURONIC ACID (MADE FROM VEGETABLE), CURRANT, CITRUS PARADISI, IRON OXIDE`,
    allergens: ['tocopherol']
  },
  {
    brand: "vgo",
    name: "vgo",
    image: "images/vgo-medium.png",
    ingredients: `Water, Cyclopentasiloxane, Methylpropanediol, CI 77891, Isononyl Isononanoate, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Diisostearoyl Malate, Cetyl PEG/PPG-10/1 Dimethicone, Trimethylsiloxysilicate, Sodium Chloride, Polyethylene, Quaternium-18 Bentonite, Sodium Hydroxide, CI 77492, Phenoxyethanol, Lauroyl Lysine, CI 77491, Mica, Alumina, Dipotassium Glycyrrhizate, CI 77499, Sodium Hyaluronate, Fragrance, Triethoxycaprylylsilane, Glycyrrhiza Glabra Extract.`,
    allergens: ['fragrance']
  },
  {
    brand: "maybelline",
    name: "maybelline",
    image: "images/maybelline-medium.png",
    ingredients: `Water, ethylhexyl palmitate, glycerin, octyldodecanol, silica, pentylene glycol, sodium acrylate/sodium acryloyldimethyl taurate copolymer, octyldodecyl xyloside, phenoxyethanol, isohexadecane, punica granatum fruit extract, hydrogenated lecithin, hydroxyethyl acrylate/sodium acryloyldimethyl taurate copolymer, peg-30 dipolyhydroxystearate, sodium dehydroacetate, pentaerythrityl tetra-di-t-butyl hydroxyhydrocinnamate, caprylyl glycol, disodium edta, polysorbate 80, citric acid, potassium sorbate, propylene glycol, sorbitan oleate, sorbitan isostearate, polysorbate 60, chamomilla recutita (matricaria) flower extract, aloe barbadensis leaf extract, may contain: titanium dioxide, iron oxides, g852694 6, d182094/1`,
    allergens: ['propylene_glycol', 'sorbitan_oleate', 'sodium_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer']
  },
  {
    brand: "skinmedical",
    name: "skinmedical",
    image: "images/skinmedical-medium.png",
    ingredients: `Water/Aqua/Eau, Caprylic/Capric Triglyceride, Silica, Squalane, Glycerin, Niacinamide, Dimethicone, Glyceryl Stearate, PEG-100 Stearate, Cetearyl Alcohol, Butyrospermum Parkii (Shea) Butter, Polygonum Aviculare Extract, Physalis Angulata Extract, Dunaliella Salina Extract, Ubiquinone, Camellia Sinensis Leaf Extract, Tremella Fuciformis Sporocarp Extract, Betaine, Melanin, Tocopheryl Acetate, Tocopherol, Hydroxyacetophenone, Batyl Alcohol, C12-15 Alkyl Benzoate, Panthenol, Butylene Glycol, Ceteareth-20, Polyhydroxystearic Acid, Isostearic Acid, Xanthan Gum, Ethylhexylglycerin, Disodium EDTA, Aminomethyl Propanol, Caprylyl Glycol, Potassium Sorbate, Sorbic Acid, Phenoxyethanol`,
    allergens: ['tocopherol', 'tocopheryl_acetate']
  },
  {
    brand: "beautybyearth",
    name: "beautybyearth",
    image: "images/beautybyearth-medium.png",
    ingredients: `Organic Aloe Barbadensis (Aloe Vera) Leaf Juice, Organic Cocos Nucifera (Coconut) Oil, Sorbitan Sesquioleate, Glycerin (Vegetable), Glyceryl Stearate SE, Organic Helianthus Annuus (Sunflower) Oil, Organic Simmondsia Chinensis (Jojoba) Seed Oil, Ricinus Communis (Castor) Seed Oil, Organic Rosmarinus Officinalis (Rosemary) Leaf Extract, Magnesium Sulfate, Ascorbyl Glucoside (Vitamin C), Xanthan Gum, Organic Argania Spinosa Kernel (Argan) Oil, Organic Cucumis Sativus (Cucumber) Fruit Extract , Organic Ginkgo Biloba Extract, Radish Root Ferment Filtrate, Cupressus Sempervirens (Cypress) Leaf Essential Oil, Citrus Paradisi (Pink Grapefruit) Essential Oil, Yellow Iron Oxide, Red Iron Oxide, Black Iron Oxide, `,
    allergens: ['sorbitan_sesquioleate']
  },
  {
    brand: "neova",
    name: "neova",
    image: "images/neova-medium.png",
    ingredients: `Alumina, Butylene Glycol, Citric Acid, Plankton Extract, Cyclopentasiloxane, Dimethicone, Dimethicone/PEG-10/15 Crosspolymer, Ergothioneine, HDI/Trimethylol Hexyllactone Crosspolymer, Iodopropynyl Butylcarbamate, Iron Oxides, Lauryl PEG-9 Polymethylsiloxyethyl Dimethicone, Lecithin, Methicone, Micrococcus Lysate, Octyldodecyl Neopentanoate,Phenoxyethanol, Purified Water, Silica, Sodium Chloride, Sodium Hydroxide, Triethoxycaprylylsilane.  `,
    allergens: ['iodopropynyl_butylcarbamate', 'hdi-trimethylol_hexyllactone_crosspolymer']
  },
  {
    brand: "yfkeji",
    name: "yfkeji",
    image: "images/yfkeji-medium.png",
    ingredients: `Water, ethylhexyl methoxycinnamate, isohexadecane, cyclopentasiloxane, methylpropanediol, ethylhexyl triazone, diethylamino hydroxybenzoyl hexyl benzoate, 4-methylbenzylidene camphor, c12-15 alkyl benzoate, alcohol, ci 77891, potassium cetyl phosphate, glyceryl stearate, glycerin, tocopheryl acetate, methylene bis-benzotriazolyl tetramethylbutylphenol, rosa damascena flower water, peg-100 stearate, silica, polysilicone-11, palmitic acid, cetearyl alcohol, phenoxyethanol, acrylamide/sodium acryloyldimethyltaurate copolymer, methylparaben, stearic acid, rosa rugosa flower oil, mica, bis-peg-15 methyl ether dimethicone, decyl glucoside, propylparaben, laureth-7, acrylates/c10-30 alkyl acrylate crosspolymer, triethanolamine, butylene glycol, aluminum hydroxide, polysorbate 80, pentylene glycol, triethoxycaprylylsilane, xanthan gum, sorbitan oleate, sodium hyaluronate, avena sativa (oat) kernel extract, bht, dimethicone, propylene glycol, 1,2-hexanediol, hydroxyacetophenone, trehalose, dendrobium nobile stem extract, aloe barbadensis leaf extract, sophora flavescens root extract, lycium barbarum fruit extract, macadamia ternifolia seed oil, hippophae rhamnoides fruit oil, triticum vulgare (wheat) germ oil, tremella fuciformis sporocarp extract, alpha-arbutin, avena sativa (oat) bran extract, echinacea purpurea extract, avena sativa (oat) kernel oil.`,
    allergens: ['decyl_glucoside', 'sorbitan_oleate', 'propylene_glycol', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'tocopheryl_acetate', 'methylparaben', 'propylparaben']
  },
  {
    brand: "bubble",
    name: "bubble",
    image: "images/bubble-medium.png",
    ingredients: `Water (Aqua), Coco-Caprylate/Caprate, Cetearyl Alcohol, Dicaprylyl Carbonate, Coco-Glucoside, Methyl Dihydroabietate, Glycerin, Polyglyceryl-3 Polyricinoleate, Propanediol, Theobroma Grandiflorum (Cupuacu) Seed Butter, Pongamia Pinnata Seed Extract, Rubus Idaeus (Raspberry) Seed Oil, Glyceryl Caprylate, Lauroyl Lysine, Sclerotium Gum, Diheptyl Succinate, Octyldodecanol, Isostearic Acid, Caprylhydroxamic Acid, Polyglyceryl-3 Diisostearate, Citric Acid, Phytic Acid, Jojoba Esters, Trihydroxystearin, Capryloyl Glycerin/Sebacic Acid Copolymer, Silybum Marianum (Blessed Thistle) Ethyl Ester, Maltodextrin, Lycium Barbarum (Matrimony Vine) Fruit Extract, Vaccinium Vitis-Idaea (Lingonberry) Fruit Extract, Punica Granatum Pericarp (Pomegranate) Extract, Syringa Vulgaris (Lilac) Extract, Tocopherol, Xanthan Gum, Gluconolactone, Calcium Gluconate, Phenoxyethanol, Sodium Benzoate, Iron Oxides (CI 77492), Iron Oxides (CI 77491), Iron Oxides (CI 77499)`,
    allergens: ['tocopherol', 'sodium_benzoate', 'gluconolactone']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water,titanium dioxide, isopropyl isostearate, cyclopentasiloxane, dimethicone, butylene glycol, glyceryl stearate, cetyl alcohol, cetearyl alcohol, PEG-75 stearate, lauroyl lysine, tocopheryl acetate, olea europaea (olive) fruit extract, BHT, erythorbic acid, bisabolol, retinyl palmitate, retinol, arginine, silica, polysorbate 20, PEG-100 stearate, isostearyl palmitate, sclerotium gum,polysilicone-11, ammonium polyacryloyldimethyl taurate, ceteth-20, steareth-20, tetrasodium EDTA, iron oxides, methylparaben, propylparaben, ethylparaben, phenoxyethanol, fragrance`,
    allergens: ['fragrance', 'tocopheryl_acetate', 'methylparaben', 'propylparaben', 'ethylparaben']
  },
  {
    brand: "laroche",
    name: "laroche",
    image: "images/laroche-medium.png",
    ingredients: `Aqua / Water / Eau, Alcohol Denat., Triethyl Citrate, Diisopropyl Sebacate, Silica, Glycerin, Propanediol, C12-22 Alkyl Acrylate/Hydroxyethylacrylate Copolymer, Ci 77891 / Titanium Dioxide, Methoxypropylamino Cyclohexenylidene Ethoxyethylcyanolidene, Caprylic/Capric Triglyceride, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Caprylyl Glycol, Ci 77491 / Iron Oxides, Ci 77492 / Iron Oxides, Ci 77499 / Iron Oxides, Hydroxyethylcellulose, Sodium Stearoyl Glutamate, Triethanolamine, Trisodium Ethylenediamine Disuccinate, Perfume / Fragrance (FIL N286436/1).`,
    allergens: ['c12-22_alkyl_acrylate-hydroxyethylacrylate_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Purified Water, Cyclopentasiloxane, Dimethicone, Octyldodecyl Neopentanoate, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Dimethicone/PEG-10/15 Crosspolymer, Sodium Hyaluronate, Ascorbyl Palmitate, Tocopherol, Sodium Chloride, Triethoxycaprylylsilane, Alumina, Methicone, Potassium Sorbate, Phenoxyethanol, Citric Acid, Iron Oxides.`,
    allergens: ['tocopherol']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Purified Water, Cyclopentasiloxane, Niacinamide, Octyldodecyl Neopentanoate, Butylene Glycol, Hydroxyethyl Acrylate, Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, PEG-7 Trimethylolpropane Coconut Ether, Sodium Hyaluronate, Tocopheryl Acetate, Lactic Acid, Oleth-3 Phosphate, Phenoxyethanol, Iodopropynyl Butylcarbamate, Isopropyl Palmitate, Octyl Stearate, Iron Oxides, Triethoxycaprylylsilane.`,
    allergens: ['iodopropynyl_butylcarbamate', 'hydroxyethyl_acrylate', 'tocopheryl_acetate']
  },
  {
    brand: "isdin",
    name: "isdin",
    image: "images/isdin-medium.png",
    ingredients: `Aqua (Water), Propanediol, Polymethyl Methacrylate, CI 77891 (Titanium Dioxide), Caprylic/Capric Triglyceride, Hydrogenated Polydecene, Propylene Glycol Dicaprylate/Dicaprate, CI 77492 (Iron Oxides), Tromethamine, Silica, 1,2-Hexanediol, Hydroxyacetophenone, Magnesium Aluminum Silicate, CI 77491 (Iron Oxides), Polysorbate 60, Disteardimonium Hectorite, Caprylyl Glycol, Tocopheryl Acetate, Xanthan Gum, CI 77499 (Iron Oxides), Propylene Carbonate, Aluminum Hydroxide, Disodium EDTA, Parfum (Fragrance), Sodium Lauroyl Glutamate, PEG-8, Lysine, Tocopherol, Magnesium Chloride, Ascorbyl Palmitate, Ascorbic Acid, Citric Acid`,
    allergens: ['tocopherol', 'polymethyl_methacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "soug",
    name: "soug",
    image: "images/soug-medium.png",
    ingredients: `Water, butylene glycol, glycerin, 6017, TGI, titanium dioxide, silica powder, squalane, caprylic/capric acid triglycerides, grapeseed oil, isononyl isononanoate, hydrogenated lecithin, purslane extract, niacinotamide, betaine, sodium hyaluronate, 1,2-hexanediol, magnesium stearate, turmeric extract`,
    allergens: ['none']
  },
  {
    brand: "cetaphil",
    name: "cetaphil",
    image: "images/cetaphil-medium.png",
    ingredients: `Allantoin, Benzyl Alcohol, C12-15 Alkyl Benzoate, Caffeine, Caprylyl Methicone, Cetyl Diglyceryl Tris(Trimethylsiloxy)Silyethyl Dimethicone, Chromium Oxide Greens, Dicaprylyl Carbonate, Dimethicone, Dipotassium Glycyrrhizate, Ethylhexylglycerin, Glycerin, Hydrogenated Lecithin, Iron Oxides, Isohexadecane, Magnesium Sulfate, Methylpropanediol, Silica, Tocopherol, Triethoxycaprylylsilane, Trisiloxane, Water`,
    allergens: ['benzyl_alcohol', 'tocopherol']
  },
  {
    brand: "kinlo",
    name: "kinlo",
    image: "images/kinlo-medium.png",
    ingredients: `Water, C12-15 Alkyl Benzoate, Butyloctyl Salicylate, Isododecane, Lauryl PEG-8 Dimethicone, Polymethylsilsesquioxane, Iron Oxides, Octyldodecyl Neopentanoate, Caprylyl Methicone, Niacinamide, Propanediol, Trilaureth-4 Phosphate, Glycerin, Dimethiconol/Propylsilsesquioxane/Silicate Crosspolymer, Carthamus Tinctorius (Safflower) Seed Oil, Dimethicone, Tocopherol, Camellia Sinensis Leaf Extract, Jojoba Esters, Allantoin, Sodium Chloride, Bisabolol, Caprylyl Glycol, Ethylhexylglycerin, Hexylene Glycol, Polyglyceryl-4 Diisostearate/Polyhydroxystearate/Sebacate, Hydrogenated Lecithin, Tetrasodium Glutamate Diacetate, Sodium Hydroxide, Phenoxyethanol, Lauryl PEG-10 Tris(Trimethylsiloxy)silylethyl Dimethicone, PEG-10.`,
    allergens: ['tocopherol']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, phenyl trimethicone, cetyl dimethicone, butylene glycol, silica, cetearyl alcohol, barium sulfate, peg-100 stearate, glyceryl stearate, hydroxyethyl acrylate/sodium acryloyldimethyl taurate copolymer, phenoxyethanol, squalane, bisabolol, caprylyl glycol, magnesium aluminum silicate, dipotassium glycyrrhizate, polysorbate 20, polymethyl methacrylate, cetyl hydroxyethylcellulose, polysorbate 60, xanthan gum, tetrasodium edta, sorbic acid, peg-12 dimethicone, tocopheryl acetate, pantothenic acid, retinyl palmitate, ascorbic acid, iron oxides, mica, titanium dioxide`,
    allergens: ['hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'polymethyl_methacrylate', 'tocopheryl_acetate']
  },
  {
    brand: "cerave",
    name: "cerave",
    image: "images/cerave-medium.png",
    ingredients: `Water, Glycerin, Coco-caprylate/caprate, Propanediol, Butyloctyl salicylate, C12-22 alkyl acrylate/hydroxyethylacrylate copolymer, Niacinamide, Ethylhexyl methoxycrylene, Oryza sativa (rice) bran wax, Steareth-20, Ceramide np, Ceramide ap, Ceramide eop, Sorbitan isostearate, Carbomer, Triethoxycaprylylsilane, Cetearyl alcohol, Behentrimonium methosulfate, Triethyl citrate, Sodium lauroyl lactylate, Sodium hyaluronate, Cholesterol, Chlorphenesin, Hydroxyacetophenone, Hydroxyethyl acrylate/sodium acryloyldimethyl taurate copolymer, Citric acid, Caprylic/capric triglyceride, Caprylyl glycol, Trisodium ethylenediamine disuccinate, Diethylhexyl syringylidenemalonate, Xanthan gum, Phytosphingosine, Polyhydroxystearic acid, Polysorbate 60, Benzoic acid (f.i.l. v298858/2)`,
    allergens: ['c12-22_alkyl_acrylate-hydroxyethylacrylate_copolymer', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer']
  },
  {
    brand: "tizo",
    name: "tizo",
    image: "images/tizo-medium.png",
    ingredients: `Bismuth Oxychloride, C12-15 Alkyl Benzoate, Caprylhydroxamic Acid, Caprylyl Glycol, Cetyl PEG/PPG 10/1 Dimethicone, Cyclohexasiloxane, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Disodium EDTA, Glycerin, Iron Oxides (CI77491, CI77492, CI77499) Hydrogen Dimethicone, Mica, Microcrystalline Wax, PEG-10 Dimethicome, PEG-30 Dipolyhydroxystearate, Polyglyceryl-4 Isostearate, Polyhydroxystearic Acid, Polysorbate 20, Sodium Chloride, Stearyl Dimethicone, Tetrahexadecyl Ascorbate, Tocopheryl Acetate, Triethanolamine, Triethoxycaprylylsilane, Water`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "unsun",
    name: "unsun",
    image: "images/unsun-medium.png",
    ingredients: `Allantoin, alumina, Butyrospermum Parkii (Shea) Butter, Camellia Oleifera, Green Tea Leaf Extract, Cetyl Peg/Ppg-10/1, Dimethicone, Cucumis Sativus (Cucumber) Extract, Cyclopentasiloxane, Dimethicone Crosspolymer, Disteardimonium Hectorite, Ethylhexyglycerin, Glycerin Hexyl Laurate, Iron Oxides, Lavandula Angustifolia (Lavender) Oil, Linum Usitatissum (Linseed) Oil, Oenadulta Bennis (Evening Primrose) Oil, Peg 10 Dimethicone, Phenoxyethanol, Plankton Extract, Polyglyceryl-4 Isostearate, Polymethylsisquioxane, Rosa Canina Seed Oil, Silica, Stearic Acid, Tocopheryl Acetate, Triethoxycaprylysilane, Water.`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "rosmar",
    name: "rosmar",
    image: "images/rosmar-medium.png",
    ingredients: `Aqua (Water), Mineral Oil, Oxybenzone, Octocrylene, Titanium Dioxide (CI 77891), PEG-10 Dimethicone, Stearyl Alcohol, Polyglyceryl-6 Distearate, Hyaluronic Acid, Jojoba Esters, Isopropyl Myristate, Isododecane, Cetyl Stearyl Alcohol, Polyglyceryl-6 Distearate, Isohexadecane, Polyglyceryl-3 Beeswax, Cetyl Alcohol, Dimethicone, Sodium Polyacrylate, Hyaluronic Acid (C13-14 Isoparaffin), Phenoxyethanol, Laureth-7, Trimethylsiloxysilicate, Aspergillus/Aspidosperma Quebracho Ferment, Ethylhexyl Glycerin, Ethoxydiglycol, Glycyrrhiza Glabra (Licorice) Root Extract, Parfum (Fragrance), CI 77492, CI 77491, CI 77499`,
    allergens: ['sodium_polyacrylate', 'fragrance']
  },
  {
    brand: "loreal",
    name: "loreal",
    image: "images/loreal-medium.png",
    ingredients: `Water, Glycerin, Caprylyl Methicone, Propanediol, Dimethicone, Pentylene Glycol, Dimethicone/Peg-10/15 Crosspolymer, Sodium Hydroxide, Sodium Chloride, Phenoxyethanol, Triethoxysilylethyl Polydimethylsiloxyethyl Dimethicone, Isopropyl Titanium Triisostearate, Chlorphenesin, Disodium Edta, Aloe Barbadensis Leaf Juice Powder, Hamamelis Virginiana (Witch Hazel) Water, Alumina, Butylene Glycol, Fragrance, Stearic Acid, Aluminum Hydroxide, Dipropylene Glycol, Alcohol, Sodium Hyaluronate, Sodium Citrate, Limonene, Citronellol, Tocopherol, Zingiber Officinale (Ginger) Root Extract, Sanguisorba Officinalis Root Extract, Cinnamomum Cassia Bark Extract, Citric Acid, May Contain: Titanium Dioxide, Iron Oxides, Fil Code B251579/1`,
    allergens: ['tocopherol', 'fragrance', 'limonene']
  },
  {
    brand: "eucerin",
    name: "eucerin",
    image: "images/eucerin-medium.png",
    ingredients: `Water, Alcohol Denat., Butyloctyl Salicylate, Silica, C12-15 Alkyl Benzoate, Polyglyceryl-6 Stearate, Sodium Stearoyl Glutamate, Diisostearoyl Polyglyceryl-3 Dimer Dilinoleate, Behenyl Alcohol, Butylene Glycol Dicaprylate/Dicaprate, Cetearyl Alcohol, Copernicia Cerifera (Carnauba) Wax, Dibutyl Adipate, Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Sodium Hyaluronate, L-Carnitine, Sodium Ascorbyl Phosphate, Tocopherol (Vitamin E), Hydroxyacetophenone, Diethylhexyl Syringylidenemalonate, Dimethicone, Silica Dimethyl Silylate, Ethylcellulose, Glyceryl Behenate, Polyglyceryl-6 Octastearate, Glycerin, Phenoxyethanol, Xanthan Gum, Ethylhexylglycerin, Polyglyceryl-6 Behenate, Cetyl Alcohol, Cellulose Gum, 1,2-Hexanediol, Caprylyl Glycol, Sodium Polyacrylate, Disodium Edta, Iron Oxides`,
    allergens: ['tocopherol', 'sodium_polyacrylate']
  },
  {
    brand: "hueguard",
    name: "hueguard",
    image: "images/hueguard-medium.png",
    ingredients: `Water (Aqua), Caprylic/Capric Triglyceride, C13-15 Alkane, Propanediol, C15-19 Alkane, Bis-Diglyceryl Polyacyladipate-2, Tocopherol, Octyldodecanol, Polyhydroxystearic Acid, Inositol, Hippophae Rhamnoides Oil, Silica, Polyacrylate Crosspolymer-6, Isostearic Acid, Lecithin, Polyglyceryl-3 Polyricinoleate, Xanthan Gum, Coco-Glucoside, Polyglycerin-3, Polyglyceryl-3, Lactate/Laurate, Bisabolol, Caprylhydroxamic Acid, Sodium Dilauramidoglutamide Lysine, Sodium Citrate, Citric Acid, Arachidyl Glucoside, Sodium Phytate, Glycerin, Physalis Alkekengi Calyx Extract, Biosaccharide Gum-1, Sodium Levulinate, Glyceryl Caprylate, Cetearyl Alcohol, T-Butyl Alcohol, Sodium Anisate, Glucose, Beta-Carotene, Behenyl Alcohol, Arachidyl Alcohol, Iron Oxides (CI 77492), Iron Oxide (CI 77491)`,
    allergens: ['tocopherol', 'polyacrylate_cross-_polymer-6']
  },
  {
    brand: "honest",
    name: "honest",
    image: "images/honest-medium.png",
    ingredients: `Water (Aqua/Eau), Cetyl Ethylhexanoate, Neopentyl Glycol Diethylhexanoate, Coco-Caprylate/Caprate, Polymethylsilsesquioxane, Polyglyceryl-6 Polyricinoleate, Propanediol, Cetyl Dimethicone, Synthetic Fluorphlogopite, Glycerin, Jojoba Esters, Polyglyceryl-2 Isostearate, Polyhydroxystearic Acid, Acacia Decurrens Flower Wax, Sodium Chloride, Polyglyceryl-3 Polyricinoleate, Disteardimonium Hectorite, Polyglyceryl-10 Pentaisostearate, Hydroxyacetophenone, Silica, Lauroyl Lysine, Isostearic Acid, Caprylyl Glycol, 1,2-Hexanediol, Oryza Sativa (Rice) Bran Extract, Tetrahexyldecyl Ascorbate, Allantoin, Cetyl Alcohol, Helianthus Annuus (Sunflower) Seed Wax, Polyglycerin-3, Dimethicone, Trisodium Ethylenediamine Disuccinate, Helianthus Annuus (Sunflower) Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Tocopherol, Mica (Ci 77019), Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492, Ci 77499)`,
    allergens: ['tocopherol']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Water, Caprylic/Capric Triglyceride, C12‐15 Alkyl Benzoate, Glycerin, Dimethicone, Cetyl PEG/PPG‐10/1 Dimethicone, Lauryl PEG‐8 Dimethicone, VP/Eicosene Copolymer, Sodium Chloride, Cocos Nucifera (Coconut) Oil, Glyceryl Stearate, Polyhydroxystearic Acid, Alcohol Denat., Phenoxyethanol, Stearalkonium Bentonite, Caprylyl Glycol, Fragrance, Alumina, Mica, Propylene Carbonate, Aleurites Moluccanus Seed Oil, Ethylhexylglycerin, Triethoxycaprylylsilane, Titanium Dioxide, Magnesium Stearate, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Passiflora Incarnata Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Carica Papaya`,
    allergens: ['fragrance']
  },
  {
    brand: "allgood",
    name: "allgood",
    image: "images/allgood-medium.png",
    ingredients: `Aloe Barbadensis (Aloe) Leaf Juice*, Arachidyl Alcohol, Arachidyl Glucoside, Behenyl Alcohol, Bisabolol*, Butyrospermum Parkii (Shea Butter)*, Calendula Officinalis (Calendula) Flower*, Camellia Sinensis (Green Tea) Leaf Extract*, Caprylhydroxamic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Caprylyl Glycol, Cellulose Gum, Cetearyl Alcohol, Cetyl Alcohol, Citric Acid, Coco-Glucoside, Cocos Nucifera (Coconut) Oil*, Diheptyl Succinate, Glycerin, Helianthus Annuus (Sunflower) Seed Oil*, Iron Oxides, Mauritia Flexuosa (Buriti) Fruit Oil*, Methyl Dihydroabietate, Microcrystalline Cellulose, Octyldodecyl Oleate, Olea Europaea (Olive) Fruit Oil*, Rosa Canina (Rose Hip) Seed Extract*, Rubus Idaeus (Raspberry) Seed Oil*, Sodium Gluconate, Sodium Hyaluronate, Sodium Stearoyl Glutamate, Theobroma Cacao (Cocoa) Seed Butter*, Tocopherol, Water.`,
    allergens: ['tocopherol']
  },
  {
    brand: "allgood",
    name: "allgood",
    image: "images/allgood-medium.png",
    ingredients: `Organic Calendula Officinalis Flowers infused in Organic Simmondsia Chinensis (Jojoba) Seed Oil, Organic Cera Alba (Beeswax), Organic Cocos Nucifera (Coconut) Oil, Iron Oxides (CI 77491), Iron Oxides (CI 77499), Octyldodecanol, Jojoba Esters, Trihydroxystearin, Non-GMO Tocopherol (Vitamin E), Yellow Iron Oxide.`,
    allergens: ['none']
  },
  {
    brand: "rawelements",
    name: "rawelements",
    image: "images/rawelements-medium.png",
    ingredients: `Helianthus Annuus (Sunflower) Seed Oil, Beeswax, Theobroma Cacao (Cocoa) Seed Butter, Cannabis Sativa Seed Oil, Mangifera Indica (Mango) Seed Butter, Iron Oxides (Ci 77492), Tocopherol, Iron Oxides (Ci 77491), Iron Oxides (Ci 77499), Camellia Sinensis Leaf Extract, Coffea Arabica (Coffee) Seed Extract, Rosmarinus Officinalis (Rosemary) Leaf Oil, Rosmarinus Officinalis (Rosemary) Leaf Extract`,
    allergens: ['tocopherol']
  },
  {
    brand: "tizo",
    name: "tizo",
    image: "images/tizo-medium.png",
    ingredients: `C12-15 Alkyl Benzoate, Caprylhydroxamic Acid, Caprylyl Glycol, Cetyl PEG/PPG-10/1 Dimethicone, Cyclohexasiloxane, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Disodium EDTA, Glycerin, Hydrogen Dimethicone, Microcrystalline Wax, PEG-10 Dimethicone, PEG-30 Dipolyhydroxystearate, Polyglyceryl-4 Isostearate, Polyhydroxystearic Acid, Polysorbate 20, Sodium Chloride, Stearyl Dimethicone, Tetrahexyldecyl Ascorbate, Tocopheryl Acetate, Triethanolamine, Triethoxycaprylylsilane, Water `,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "rawelements",
    name: "rawelements",
    image: "images/rawelements-medium.png",
    ingredients: `Aqua, Helianthus Annuus (Sunflower) Seed Oil (Organic Ingredient), Theobroma Cacao (Cacao) Seed Butter, Argania Spinosa Kernel Oil, Brassica Campestris/Aleurites Fordi Oil Copolymer, Leuconostoc/Radish Root Ferment Filtrate, Polyglyceryl-3 Polyricinoleate, Beeswax (Organic Ingredient), Theobroma Cacao (Cocoa) Powder, Polyhydroxystearic Acid, Cannabis Sativa Seed Oil (Organic Ingredient), Hawaiian Sea Salt, Helianthus Annuus (Sunflower) Seed Oil, Bisabolol, Rosmarinus Officinalis (Rosemary) Leaf Extract, Tocopheryl Acetate (Vitamin E), Iron Oxides`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "amavara",
    name: "amavara",
    image: "images/amavara-medium.png",
    ingredients: `Aloe Barbadensis Leaf Juice, Butyloctyl Salicylate, C13-15 Alkane, Caprylic/Capric Triglyceride, Cetearyl Glucoside, Cetearyl Alcohol, Coco-Glucoside, Glyceryl Stearate, Jojoba Esters, Leuconostoc/Radish Root Ferment Filtrate, Polyhydroxystearic Acid, Polyglyceryl-3 Polyricinoleate, Polyglyceryl-6 Polyhydroxystearate, Simmondsia Chinensis (Jojoba) Seed Oil, Sodium Stearoyl Glutamate, Squalane, Tocopherol, Water/Aqua/Eau, Xanthan Gum`,
    allergens: ['tocopherol']
  },
  {
    brand: "tula",
    name: "tula",
    image: "images/tula-medium.png",
    ingredients: `AQUA/WATER/EAU, C9-12 ALKANE, BUTYLOCTYL SALICYLATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYLHEXYL PALMITATE, TRIETHYLHEXANOIN, POLYGLYCERYL-6 POLYHYDROXYSTEARATE, POLYGLYCERYL-6 POLYRICINOLEATE, ISODODECANE, SILICA, BUTYLENE GLYCOL, DISTEARDIMONIUM HECTORITE, TRIMETHYLSILOXYSILICATE, VP/EICOSENE COPOLYMER, GLYCERIN, ARGANIA SPINOSA KERNEL OIL, TOCOPHERYL ACETATE, LACTOCOCCUS FERMENT LYSATE, LACTOBACILLUS FERMENT, LACTOBACILLUS, KAPPAPHYCUS ALVAREZII EXTRACT, TETRAHEXYLDECYL ASCORBATE, NIACINAMIDE, SODIUM HYALURONATE, CERAMIDE NP, PONGAMIA GLABRA SEED OIL, DUNALIELLA SALINA EXTRACT, HAEMATOCOCCUS PLUVIALIS EXTRACT, ACACIA SEYAL GUM EXTRACT, CAESALPINIA SPINOSA FRUIT EXTRACT, ALPHA-GLUCAN OLIGOSACCHARIDE, BISABOLOL, BETA VULGARIS (BEET) ROOT EXTRACT, CYSTOSEIRA TAMARISCIFOLIA EXTRACT, INULIN, LACTIC ACID, POLYMNIA SONCHIFOLIA ROOT JUICE, CURCUMA LONGA (TURMERIC) ROOT EXTRACT, VP/HEXADECENE COPOLYMER, OCTYLDODECYL NEOPENTANOATE, SODIUM CHLORIDE, MAGNESIUM SULFATE, BORON NITRIDE, SORBITAN OLEATE, POLYGLYCERIN-6, OCTYLDODECANOL, SAFFLOWER OIL/ PALM OIL AMINOPROPANEDIOL ESTERS, MICA, HYDROGENATED LECITHIN, ASCORBYL PALMITATE, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, SIMETHICONE, TOCOPHEROL, MALTODEXTRIN, ETHYLHEXYLGLYCERIN, ALUMINUM HYDROXIDE, CITRIC ACID, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, PHENOXYETHANOL, SODIUM BENZOATE, POTASSIUM SORBATE`,
    allergens: ['sorbitan_oleate', 'tocopherol', 'sodium_benzoate', 'tocopheryl_acetate']
  },
  {
    brand: "image",
    name: "image",
    image: "images/image-medium.png",
    ingredients: `Isododecane, Squalane, Polysilicone-11, Propanediol Dicaprylate/Caprate, Caprylic/Capric Triglyceride, Polyhydroxystearic Acid, Polyglyceryl-3 Polyricinoleate, Triethoxycaprylylsilane, Lecithin, Iron Oxides (Ci 77492), Hydrogenated Palm Oil, Hydrogenated Rapeseed Oil, Coco-Caprylate/Caprate, Hydrated Silica, Citrus Aurantium Dulcis (Orange) Peel Oil, Zingiber Officinale (Ginger) Root Extract, Limonene, Camellia Oleifera Seed Oil, Tetrahexyldecyl Ascorbate, Tocopheryl Acetate, Polyglyceryl-6 Polyricinoleate, Iron Oxides (Ci 77491), Dilinoleic Acid/Butanediol Copolymer, Disodium Stearoyl Glutamate, Aqua/Water/Eau, Prunus Armeniaca (Apricot) Kernel Oil, Carthamus Tinctorius (Safflower) Seed Oil, Castor Oil/Ipdi Copolymer, Iron Oxides (Ci 77499), Sodium Sulfate, Aloe Barbadensis Leaf Extract, Citral, Linalool, Citric Acid.`,
    allergens: ['limonene', 'tocopheryl_acetate', 'linalool']
  },
  {
    brand: "koa",
    name: "koa",
    image: "images/koa-medium.png",
    ingredients: `Water, C12-15 Alkyl Benzoate, Butyloctyl Salicylate, Isododecane, Lauryl PEG-8 Dimethicone, Polymethylsilsesquioxane, Propanediol, Octyldodecyl Neopentanoate, C15-19 Alkane, Caprylyl Methicone, Niacinamide, Lauryl PEG-10 Tris(Trimethylsiloxy)silylethyl Dimethicone, Dimethicone, Dimethicone Crosspolymer, Trilaurreth-4 Phosphate, Allantoin, Bisabolol, Tocopherol, Sodium Chloride, Phenoxyethanol, Tetrasodium Glutamate Diacetate, PEG-10, CI 77491, CI 77492, CI 77499`,
    allergens: ['tocopherol']
  },
  {
    brand: "tizo",
    name: "tizo",
    image: "images/tizo-medium.png",
    ingredients: `Bismuth Oxychloride, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Caprylhydroxamic Acid, Caprylyl Glycol, Cellulose Gum, Ceteareth 20, Cetearyl Alcohol, Citric Acid, Disodium EDTA, Glycereth-26, Glycerin, Glyceryl Stearate, Iron Oxides, Isododecane, Isohexadecane, Methyl Methacrylate Crosspolymer, Mica, Microcrystalline Cellulose, Octyldodecyl Erucate, Octyldodecyl Neopentanoate, Poly C10-30 Alkyl Acrylate, Polyhydroxstearic Acid, Polysorbate 80, Trans-1,3,3,3-Tetrafluoropropene, Triacontanyl PVP, Triethoxycaprylylsilane, Water.
`,
    allergens: ['methyl_methacrylate_crosspolymer', 'poly_c10-30_alkyl_acrylate']
  },
  {
    brand: "tizo",
    name: "tizo",
    image: "images/tizo-medium.png",
    ingredients: `Capric/Caprylic Triglyceride, Ceramide 3, Cyclohexasiloxane, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Iron Oxide, Hydrogen Dimethicone, PEG-10 Dimethicone, Polyhydroxystearic Acid, Tetrahexyldecyl Ascorbate, Tocopheryl Acetate, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer `,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Water, Bismuth Oxychloride, Propanediol, Butyloctyl Salicylate, Glycerin, Mica, C12-15 Alkyl Benzoate, Polyglyceryl-6 Stearate, Isododecane, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Tocopherol, Pullulan, Lysolecithin, Tetrasodium Glutamate Diacetate, Sclerotium Gum, Xanthan Gum, Hydrated Silica, Titanium Dioxide, Polyglyceryl-6 Behenate, Phenoxyethanol, Ethylhexylglycerin, Citric Acid, Iron Oxides`,
    allergens: ['tocopherol']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, Glycerin, Alcohol Denat., Silica, Dimethicone, Aluminum Starch Octenylsuccinate, Polyurethane-62, Phenoxyethanol, Pentylene Glycol, Sodium Acryloyldimethyltaurate/Vp Crosspolymer, Acrylates /Dimethicone Copolymer, Glyceryl Stearate, Chlorphenesin, Styrene /Acrylates Copolymer, Zingiber Officinale (Ginger) Root Extract, Menthyl Lactate, Tocopheryl Acetate, Disodium Edta, Trideceth-6, Chrysanthemum Parthenium (Feverfew) Flower /Leaf/Stem Juice, Sodium Hydroxide, Yellow 5, Red 40`,
    allergens: ['acrylates_-dimethicone_copolymer', 'styrene_-acrylates_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Acrylates/C12-22 alkyl methacrylate copolymer, beeswax, BHT, caprylyl methicone, cetyl dimethicone, diethylhexyl 2,6-naphthalate, dimethicone, dipotassium glycyrrhizate, disodium EDTA, ethylhexyl stearate, ethylhexylglycerin, fragrance, glyceryl stearate, methylisothiazolinone, PEG-100 stearate, polyaminopropyl biguanide, silica, sodium polyacrylate, styrene/acrylates copolymer, trideceth-6, trimethylsiloxysilicate, water, xanthan gum.`,
    allergens: ['methylisothiazolinone', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'sodium_polyacrylate', 'styrene-acrylates_copolymer', 'fragrance']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Isododecane, Diisopropyl Adipate, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Fragrance, Tocopheryl Acetate`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Water, Glyceryl Stearate, PEG-100 Stearate, Cetyl Alcohol, Cetyl Dimethicone, Propylene Glycol, Phenoxyethanol, Caprylyl Glycol, VP/Eicosene Copolymer, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Behenyl Alcohol, Sodium Polyacrylate, Chlorphenesin, Xanthan Gum, Disodium EDTA, Fragrance, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice`,
    allergens: ['propylene_glycol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Behenyl Alcohol, BHT, Butyloctyl Salicylate, Caprylyl Methicone, Diethylhexyl 2,6Naphthalate, Dimethicone, Disodium EDTA, Ethylhexyl Stearate, Ethylhexylglycerin, Ethylparaben, Fragrance, Glyceryl Stearate, Iodopropynyl Butylcarbamate, Methylparaben, PEG100 Stearate, Phenoxyethanol, Propylparaben, Silica, Sodium Polyacrylate, Styrene/Acrylates Copolymer, Trideceth6, Trimethylsiloxysilicate, VP/Hexadecene Copolymer, Water, Xanthan Gum`,
    allergens: ['iodopropynyl_butylcarbamate', 'sodium_polyacrylate', 'styrene-acrylates_copolymer', 'fragrance', 'ethylparaben', 'methylparaben', 'propylparaben']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Water, Diisopropyl Adipate, Cetearyl Alcohol, Glycerin, Phenoxyethanol, Mica, Benzyl Alcohol, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Fragrance, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Chlorphenesin, Xanthan Gum, Sodium Hydroxide, Butyrospermum Parkii (Shea) Butter, Disodium EDTA, Tocopheryl Acetate, Mangifera Indica (Mango) Seed Butter, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Panthenol, Aloe Barbadensis Leaf Juice, Sodium Ascorbyl Phosphate, Titanium Dioxide`,
    allergens: ['benzyl_alcohol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance', 'tocopheryl_acetat']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Styrene/Acrylates, Copolymer, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Silica, Diethylhexyl 2,6naphthalate, Dimethicone/PEG10/15 Crosspolymer, Trisiloxane, Cetyl Dimethicone, Beeswax, Ethylhexylglycerin, Sodium Polyacrylate, Xanthan Gum, Ethylhexyl Stearate, Acrylates/C1222 Alkyl Methacrylate Copolymer, Behenyl Alcohol, Trideceth6, Sodium EDTA, Glyceryl Stearate, PEG100 Stearate, Caprylyl Glycol, Chlorphenesin, Fragrance.`,
    allergens: ['benzyl_alcohol', 'styrene-acrylates', 'sodium_polyacrylate', 'acrylates-c1222_alkyl_methacrylate_copolymer', 'fragrance']
  },
  {
    brand: "cerave",
    name: "cerave",
    image: "images/cerave-medium.png",
    ingredients: `C12-15 ALKYL BENZOATE, BUTYLOCTYL SALICYLATE, NEOPENTYL GLYCOL DIETHYLHEXANOATE, PARAFFIN, EUPHORBIA CERIFERA (CANDELILLA) WAX, OZOKERITE, DIMETHICONE, BEESWAX, POLYETHYLENE, CETYL ALCOHOL, CERAMIDE 3, CERAMIDE 6-II, CERAMIDE 1, CHOLESTEROL, PHYTOSPHYNGOSINE, SODIUM HYALURONATE, POLYHYDROSTEARIC ACID, ALUMINUM HYDROXIDE, STEARIC ACID, BHT, CARBOMER, TRIETHOXYCAPRYLYLSILANE, ISOSTEARIC ACID, SODIUM LAUROYL LACTYLATE, XANTHAN GUM`,
    allergens: ['none']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Alcohol Denat., C12-15 Alkyl Benzoate, Acrylates/Octylacrylamide Copolymer, PPG-5-Ceteth-20, Fragrance, Tocopherol`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "bluelizard",
    name: "bluelizard",
    image: "images/bluelizard-medium.png",
    ingredients: `Alumina, Aluminum Stearate, Beeswax, C12-15 Alkyl Benzoate, Caprylyl Glycol, Cetyl Dimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Chlorphenesin, Dimethicone, Disodium EDTA, Ethylhexyl Palmitate, Ethylhexyl Stearate, Hexyl Laurate, Hydrogenated Castor Oil, Methyl Glucose Dioleate, Octyldodecyl Neopentanoate, PEG-7 Hydrogenated Castor Oil, Phenoxyethanol, Polyglyceryl-4 Isostearate, Polyhydroxystearic Acid, Propanediol, Purified Water, Sorbitan Oleate, Stearic Acid, Tocopheryl Acetate, Trimethylsiloxy Silicate, VP/Hexadecene Copolymer.`,
    allergens: ['sorbitan_oleate', 'tocopheryl_acetate']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Water, Diisopropyl Adipate, Cetearyl Alcohol, Glycerin, Phenoxyethanol, Benzyl Alcohol, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Fragrance, C12-15 Alkyl Benzoate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Chlorphenesin, Xanthan Gum, Dimethicone, Sodium Hydroxide, Disodium EDTA, Mangifera Indica (Mango) Seed Butter, Tocopheryl Acetate, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Panthenol, Aloe Barbadensis Leaf Juice, Sodium Ascorbyl Phosphate`,
    allergens: ['benzyl_alcohol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Acrylates/C1030 Alkyl Acrylate Crosspolymer, Acrylates/Dimethicone Copolymer, Adipic Acid/Diethylene Glycol/Glycerin Crosspolymer, Artemia Extract, Beeswax, Benzyl Alcohol, BHT, Bisabolol, Cyclopentasiloxane, Diethylhexyl 2, 6Naphthalate, Dipotassium Glycyrrhizate, Disodium EDTA, Ethylhexylglycerin, Ethylparaben, Glycerin, Glyceryl Stearate, Methylisothiazolinone, Methylparaben, Octadecene/MA Copolyer, PEG100 Stearate, Propylparaben, Saccharomyces/Calcium Ferment, Saccharomyces/Magnesium Ferment, Saccharomyces/Potassium Ferment, Saccharomyces/Sodium Ferment, Saccharomyces/Zinc Ferment, Silica, Triethanolamine, Water.`,
    allergens: ['benzyl_alcohol', 'methylisothiazolinone', 'acrylates-c1030_alkyl_acrylate_crosspolymer', 'acrylates-dimethicone_copolymer', 'ethylparaben', 'methylparaben', 'propylparaben']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Cyclopentasiloxane, Niacinamide, Octyldodecyl Neopentanoate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Butylene Glycol, Phenoxyethanol, Polyisobutene, Triethoxycaprylylsilane, Tocopheryl Acetate, PEG-7 Trimethylolpropane Coconut Ether, Oleth-3 Phosphate, Iodopropynyl Butylcarbamate, Lactic Acid, Sodium Hyaluronate, Phosphoric Acid.`,
    allergens: ['iodopropynyl_butylcarbamate', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "laroche",
    name: "laroche",
    image: "images/laroche-medium.png",
    ingredients: `Water, Polymethylsilsesquioxane, Glycerin, Dimethicone, Poly C10-30 Alkyl Acrylate, Styrene/Acrylates Copolymer, Silica, Caprylyl Methicone, Acrylates/Dimethicone Copolymer, Diethylhexyl Syringylidenemalonate, Peg-100 Stearate, Glyceryl Stearate, Phenoxyethanol, Potassium Cetyl Phosphate, Tocopherol, Caprylyl Glycol, Panthenol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, Peg-8 Laurate, Inulin Lauryl Carbamate, Chlorphenesin, P-Anisic Acid, Caprylic/Capric Triglyceride, Xanthan Gum, Disodium Edta, Cassia Alata Leaf Extract, Maltodextrin, Sodium Dodecylbenzenesulfonate.`,
    allergens: ['tocopherol', 'poly_c10-30_alkyl_acrylate', 'styrene-acrylates_copolymer', 'acrylates-dimethicone_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'inulin_lauryl_carbamate']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Water, Beeswax, Hydrated Silica, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Caprylyl Methicone, Styrene/Acrylates Copolymer, Cetyl Dimethicone, Glyceryl Stearate, PEG-100 Stearate, Polyester-8, BHT, Dimethicone, Dimethyl Capramide, Dipotassium Glycyrrhizate, Disodium EDTA, Ethylhexyl Stearate, Ethylhexylglycerin, Fragrance, Methylisothiazolinone, Polyaminopropyl Biguanide, Sodium Polyacrylate, Trideceth-6, Trimethylsiloxysilicate, Tocopheryl Acetate, Xanthan Gum`,
    allergens: ['methylisothiazolinone', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'styrene-acrylates_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `SD Alcohol 40-B (75.5% v/v), Neopentyl Glycol Diheptanoate, Polyester-27, Dimethicone, Tocopherol (Vitamin E), Fragrance`,
    allergens: ['tocopherol', 'fragrance']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `Water, Aluminum Starch Octenylsuccinate, Styrene/Acrylates Copolymer, Glycerin, Polyester-27, Silica, Phenoxyethanol, Isododecane, Arachidyl Alcohol, Beeswax, Ethylhexylglycerin, Neopentyl Glycol Diheptanoate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Behenyl Alcohol, Tocopherol (Vitamin E), Arachidyl Glucoside, Glyceryl Stearate, PEG-100 Stearate, Potassium hydroxide, Disodium EDTA, Sodium Ascorbyl Phosphate, Fragrance`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Water, Diisopropyl Adipate, Cetearyl Alcohol, Ethylhexyl Methoxycrylene, Glycerin, Phenoxyethanol, VP/Eicosene Copolymer, Mica, Benzyl Alcohol, Acrylates/C12‐22 Alkyl Methacrylate Copolymer, Fragrance, Dicetyl Phosphate, Ceteth‐10 Phosphate, Coco‐Glucoside, Chlorphenesin, Xanthan Gum, Acrylates/C10‐30 Alkyl Acrylate Crosspolymer, Butyrospermum Parkii (Shea) Butter, Sodium Hydroxide, Disodium EDTA, Mangifera Indica (Mango) Seed Butter, Tocopheryl Acetate, Panthenol, Aloe Barbadensis Leaf Juice, Psidium Guajava Fruit Extract, Plumeria Acutifolia Flower Extract, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Sodium Ascorbyl Phosphate, Titanium Dioxide.`,
    allergens: ['benzyl_alcohol', 'acrylates-c12‐22_alkyl_methacrylate_copolymer', 'acrylates-c10‐30_alkyl_acrylate_crosspolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Butyloctyl Salicylate, Dicaprylyl Carbonate, Diethylhexyl 2,6-Naphthalate, Polyester-7, Acrylates/Octylacrylamide Copolymer, Neopentyl Glycol Diheptanoate, Fragrance, Tocopheryl Acetate`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Alcohol Denat., Isobutane, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Cyclopentasiloxane, Cyclohexasiloxane, Fragrance, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Copolymer, Lauryl PEG-8 Dimethicone, Phenylisopropyl Dimethicone, Ascorbyl Palmitate, Methyl Dihydroabietate, Tocopheryl Acetate, Mineral Oil, Panthenol, Water, Aloe Barbadensis Leaf Extract`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "aveeno",
    name: "aveeno",
    image: "images/aveeno-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, Glycerin, Alcohol Denat., Silica, Caprylyl Methicone, Aluminum Starch, Octenylsuccinate, Dimethicone, Polyurethane-62, Phenoxyethanol, Pentylene Glycol, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Acrylates/Dimethicone Copolymer, Glyceryl Stearate, Chlorphenesin, Styrene/Acrylates Copolymer, Fragrance, Disodium EDTA, Trideceth-6, Avena Sativa (Oat) Kernel Extract, Sodium Hydroxide`,
    allergens: ['acrylates-dimethicone_copolymer', 'styrene-acrylates_copolymer', 'fragrance']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Isododecane, Diisopropyl Adipate, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Fragrance, Tocopheryl Acetate`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "amazon",
    name: "amazon",
    image: "images/amazon-medium.png",
    ingredients: `water, aluminum starch octenylsuccinate, styrene/acrylates copolymer, glycerin, polyester-7, silica, chlorphenesin, arachidyl alcohol, beeswax, benzyl alcohol, neopentyl glycol diheptanoate, acrylates/C10-30 alkyl acrylate crosspolymer, behenyl alcohol, tocopherol, arachidyl glucoside, glyceryl stearate, PEG-100 stearate, potassium hydroxide, disodium EDTA, sodium ascorbyl phosphate, fragrance`,
    allergens: ['benzyl_alcohol', 'tocopherol', 'styrene-acrylates_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance']
  },
  {
    brand: "supergoop",
    name: "supergoop",
    image: "images/supergoop-medium.png",
    ingredients: `Isododecane, Dimethicone Crosspolymer, Dimethicone/Bis-Isobutyl PPG-20 Crosspolymer, Polymethylsilsesquioxane, Isohexadecane, Dicaprylyl Carbonate, Meadowfoam Estolide, Caprylic/Capric Triglyceride, Polyester-7, Neopentyl Glycol Diheptanoate, Lithothamnion Calcareum Extract, Caprylyl Glycol, Butyrospermum Parkii (Shea) Butter, Jojoba Esters, Mannitol, Boswellia Serrata Resin Extract, Lecithin, Microcrystalline Cellulose, Diatomaceous Earth, Zinc Sulfate, Silica, Tocopherol`,
    allergens: ['tocopherol']
  },
  {
    brand: "bondi",
    name: "bondi",
    image: "images/bondi-medium.png",
    ingredients: `Water/Aqua/Eau, Beeswax/Cera Alba/Cire d'abeille, Aloe Barbadensis Leaf Juice, Isopropyl Palmitate, Cetearyl Alcohol, Cyclopentasiloxane, Cyclohexasiloxane, Ceteareth-20, Hydroxyacetophenone, Carbomer, Benzyl Alcohol, Saccharide Isomerate, Phenoxyethanol, Sodium Stearoyl Glutamate, Triethanolamine, Tocopheryl Acetate, Sodium Chloride, Citric Acid.`,
    allergens: ['benzyl_alcohol', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Neopentyl Glycol, Diethylhexanoate, Octyldodecyl Neopentanoate, Polyethylene, Isohexadecane, Butyloctyl Salicylate, Ozokerite, Paraffin, Synthetic Beeswax, C12-15 Alkyl Benzoate, VP/Eicosene Copolymer, Neopentyl Glycol Diisostearate, Dimethicone, Diethylhexyl 2,6-Naphthalate, Styrene/Acrylates Copolymer, Fragrance, BHT.`,
    allergens: ['styrene-acrylates_copolymer', 'fragrance']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Water, Diisopropyl Adipate, Silica, Cetearyl Alcohol, Glycerin, Phenoxyethanol, Tapioca Starch, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Caprylyl Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ethylhexylgylcerin, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Chlorphenesin, Xanthan Gum, Sodium Hydroxide, Disodium EDTA, Fragrance, Polymethylsilsesquioxane, Tocopheryl Acetate, Sodium Ascorbyl PHosphate, Panthenol, Aloe Barbadenisis Leaf Juice`,
    allergens: ['acrylates-c12-22_alkyl_methacrylate_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `SD alcohol 40-B (76.9% v/v), neopentyl glycol diheptanoate, polyester-27, acrylates/octylacrylamide copolymer, fragrance, ascorbyl palmitate`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "australiangold",
    name: "australiangold",
    image: "images/australiangold-medium.png",
    ingredients: `SD Alcohol 40-B [Alcohol Denat.], Water/Aqua/Eau, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Polyester-8, Helianthus Annuus (Sunflower) Seed Oil, Tocopheryl Acetate, Glycerin, Aloe Barbadensis Leaf Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Fragrance (Parfum), Yellow 5 (CI 19140), Red 40 (CI 16035), Blue 1 (CI 42090)`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "laroche",
    name: "laroche",
    image: "images/laroche-medium.png",
    ingredients: `Water, Silica, Dicaprylyl Carbonate, Styrene/Acrylates Copolymer, Butyloctyl Salicylate, Methyl Methacrylate Crosspolymer, Nylon-12, Peg-100 Stearate, Glyceryl Stearate, Perlite, Beeswax, Ammonium Polyacryloyldimethyl Taurate, Phenoxyethanol, Peg-8 Laurate, Behenyl Alcohol, Sodium Stearoyl Glutamate, Chlorphenesin, P-Anisic Acid, Xanthan Gum, Tocopherol, Disodium Edta, Arachidyl Alcohol, Diethylhexyl Syringylidenemalonate, Propylene Glycol, Cassia Alata Leaf Extract, Maltodextrin, Stearyl Alcohol, T-Butyl Alcohol, Caprylic/Capric Triglyceride.`,
    allergens: ['tocopherol', 'propylene_glycol', 'styrene-acrylates_copolymer', 'methyl_methacrylate_crosspolymer']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Petrolatum, Isopropyl Palmitate, Ethylhexyl Stearate, Dimethicone, Phenoxyethanol, Glyceryl Stearate, PEG-100 Stearate, Oleth-3 Phosphate, Cetearyl Alcohol, Cetearyl Glucoside, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Polyether-1, Ethylhexylglycerin, PEG-7 Trimethylolpropane Coconut Ether, Citric Acid, Tocopheryl Acetate, Sodium Hyaluronate, Triethoxycaprylylsilane.`,
    allergens: ['hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Butyloctyl Salicylate, Dicaprylyl Carbonate, Diethylhexyl 2,6-Naphthalate, Polyester-7, Acrylates/Octylacrylamide Copolymer, Neopentyl Glycol Diheptanoate, Fragrance, Tocopheryl Acetate`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Water, Caprylic/Capric Triglyceride, Isohexadecane, Butyloctyl Salicylate, Octyldodecyl Citrate Crosspolymer, Cetyl PEG/PPG-10/1 Dimethicone, Lauryl PEG-8 Dimethicone, C30-38 Olefin/Isopropyl Maleate/MA Copolymer, Sodium Chloride, Ethylhexyl Methoxycrylene, Dimethicone, Phenoxyethanol, Caprylyl Glycol, PEG-8, Alumina, Glycerin, Sodium Citrate, Tocopheryl Acetate.`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Isopropyl Palmitate, Octyldodecyl Neopentanoate, Cetyl PEG/PPG-10/1 Dimethicone, Hexyl Laurate, Polyglyceryl-4 Isostearate, Cetyl Dimethicone, Sodium Chloride, Beeswax, Hydrogenated Castor Oil, Triethoxycaprylylsilane, Disodium EDTA, Butylene Glycol, Tocopheryl Acetate, Iodopropynyl Butylcarbamate.`,
    allergens: ['tocopheryl_acetate', 'iodopropynyl_butylcarbamate']
  },
  {
    brand: "eltamd",
    name: "eltamd",
    image: "images/eltamd-medium.png",
    ingredients: `Water, Petrolatum, Isopropyl Palmitate, Dimethicone, Cetearyl Alcohol, Oleth-3 Phosphate, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Cetearyl Glucoside, Polyether-1, Butylene Glycol, PEG-7 Trimethylolpropane Coconut Ether, Sodium Hyaluronate, Iodopropynyl butylcarbamate, Tocopheryl Acetate, Triethoxycaprylylsilane.`,
    allergens: ['iodopropynyl_butylcarbamate', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "amazon",
    name: "amazon",
    image: "images/amazon-medium.png",
    ingredients: `Water, ethylhexyl palmitate, sorbitol, polyamide-8, benzyl alcohol, tocopherol, caprylic/capric triglyceride, triethanolamine, fragrance, acrylates/C10-30 alkyl acrylate crosspolymer, chlorphenesin, sodium ascorbyl phosphate, oleth-3, disodium EDTA`,
    allergens: ['benzyl_alcohol', 'tocopherol', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Alcohol denat. (67%), acrylates/octylacrylamide copolymer, C12-15 alkyl benzoate, dicaprylyl carbonate, PPG-5-ceteth-20, fragrance, tocopherol`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "babo",
    name: "babo",
    image: "images/babo-medium.png",
    ingredients: `Water (Aqua), Helianthus Annuus (Sunflower) Seed Oil, Cocos Nucifera (Coconut) Oil, Butyloctyl Salicylate, Carthamus Tinctorius (Safflower) Seed Oil, Methyl Dihydroabietate, Butyrospermum Parkii (Shea Butter), Cetearyl Alcohol, Sodium Stearoyl Glutamate, Microcrystalline Cellulose, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Nasturtium Officinale Flower/Leaf Extract, Spiraea Ulmaria Flower Extract, Theobroma Cacao (Cocoa) Seed Butter, Bisabolol, Tocopherol, Cetyl Alcohol, Caprylyl Glycol, Coco-Glucoside, Behenyl Alcohol, Arachidyl Glucoside, Arachidyl Alcohol, Polyhydroxystearic Acid, Citric Acid, Sodium Gluconate, Sodium Hyaluronate, Glycerin, Caprylhydroxamic Acid, Cellulose Gum`,
    allergens: ['tocopherol']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `water, aluminum starch octenylsuccinate, glycerin, polyester-27, silica, styrene/acrylates copolymer, phenoxyethanol, isododecane, arachidyl alcohol, ethylhexylglycerin, acrylates/C10-30 alkyl acrylate crosspolymer, neopentyl glycol diheptanoate, behenyl alcohol, tocopherol (Vitamin E), beeswax, arachidyl glucoside, potassium hydroxide, glyceryl stearate, PEG-100 stearate, disodium EDTA, sodium ascorbyl phosphate, fragrance`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance']
  },
  {
    brand: "supergoop",
    name: "supergoop",
    image: "images/supergoop-medium.png",
    ingredients: `Water, Acrylates Copolymer, Diisopropyl Sebacate, Glycerin, Isodecyl Neopentanoate, Isododecane, Lauryl Lactate, Cetyl Alcohol, Potassium Cetyl Phosphate, Brassica Campestris/Aleurites Fordi Oil Copolymer, Oryza Sativa (Rice) Bran Extract, Cetearyl Olivate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Hydroxyacetophenone, Sorbitan Olivate, Diethylhexyl Syringylidenemalonate, Aniba Rosaeodora (Rosewood) Wood Oil, Chlorphenesin, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Limon (Lemon) Peel Oil, Ethylhexylglycerin, Eucalyptus Globulus Leaf Oil, Ocimum Basilicum (Basil) Flower/Leaf Extract, Pelargonium Graveolens Flower Oil, Pogostemon Cablin Oil, Pentylene Glycol, 1,2-Hexanediol, Caprylyl Glycol, Xanthan Gum, Helianthus Annuus (Sunflower) Extract, Behenic Acid, Cetyl Behenate, Isostearyl Isostearate, Trisodium Ethylenediamine Disuccinate, Tocopherol, Allantoin, Rosmarinus Officinalis (Rosemary) Leaf Extract, Caprylic/Capric Triglyceride, Panthenol, Pentasodium Triphosphate, Citric Acid`,
    allergens: ['tocopherol', 'acrylates_copolymer']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Water, Isobutane, Isohexadecane, C12-15 Alkyl Benzoate, Cetyl PEG/PPG-10/1 Dimethicone, Lauryl PEG-8 Dimethicone, Dibutyl Adipate, Ethylhexyl Methoxycrylene, Sodium Chloride, PEG-8, Phenoxyethanol, Caprylyl Glycol, Glycerin, Sodium Citrate, Methylparaben, Butylparaben, Ethylparaben, Isobutylparaben, Propylparaben, Methyl Dihydroabietate, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer, PEG-8 Dimethicone, Aloe Barbadensis Leaf Juice, Octyldodecanol, Retinyl Palmitate, Silica, Tocopheryl Acetate, Ascorbic Acid, Sodium Propoxyhydroxypropyl Thiosulfate Silica`,
    allergens: ['methylparaben', 'butylparaben', 'ethylparaben', 'isobutylparaben', 'propylparaben', 'tocopheryl_acetate']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Water, Diisopropyl Adipate, Cetearyl Alcohol, Glycerin, Phenoxyethanol, Mica, Benzyl Alcohol, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Fragrance, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Chlorphenesin, Xanthan Gum, Sodium Hydroxide, Butyrospermum Parkii (Shea) Butter, Disodium EDTA, Tocopheryl Acetate, Mangifera Indica (Mango) Seed Butter, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Panthenol, Aloe Barbadensis Leaf Juice, Sodium Ascorbyl Phosphate, Titanium Dioxide.`,
    allergens: ['benzyl_alcohol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Silica, Caprylyl Methicone, Diisopropyl Adipate, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Beeswax, Glyceryl Stearate, Peg-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Behenyl Alcohol, Sodium Polyacrylate, Acrylates/Dimethicone Copolymer, Xanthan Gum, Chlorphenesin, Dimethicone/Peg-10/15 Crosspolymer, Ethylhexyl Stearate, Hydrolyzed Jojoba Esters, Fragrance, Disodium Edta, Tocopheryl Acetate, Bht, Trideceth-6, Jojoba Esters`,
    allergens: ['benzyl_alcohol', 'sodium_polyacrylate', 'acrylates-dimethicone_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "biore",
    name: "biore",
    image: "images/biore-medium.png",
    ingredients: `Water, ethanol, lauryl methacrylate/sodium methacrylate crosspolymer, dimethicone, alkyl benzoate (C12-15), titanium oxide, dimethicone/vinyl dimethicone crosspolymer, BG, xylitol, dextrin palmitate, DPG, hydrous silica, hydroxyethyl cellulose, glycerin, glyceryl stearate, cetanol, polymethylsilsesquioxane, vinyl dimethicone/methicone sesquioxane crosspolymer, triethoxycaprylylsilane, propanediol, acrylates/C10-30 alkyl acrylate crosspolymer glyceryl behenate, polysorbate 60, aluminum hydroxide, potassium hydroxide, stearic acid, stearyl alcohol, sorbitan distearate, agar, polyvinyl alcohol, isoceeteth-20, sodium stearoyl methyl taurine, stearoyl glutamic acid, AMP, stearox PG sodium hydroxyethyl cellulose sulfonate, arginine, glutamic acid, locust bean gum, maltose, sodium hyaluronate, royal jelly extract, phenoxyethanol, EDTA-2Na, BHT, fragrance.`,
    allergens: ['lauryl_methacrylate-sodium_methacrylate_crosspolymer', 'acrylates-c10-30_alkyl_acrylate_crosspolymer_glyceryl_behenate', 'fragrance.']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `SD Alcohol 40-B (75.5% v/v), Neopentyl Glycol Diheptanoate, Polyester-27, Dimethicone, Tocopherol (Vitamin E), Fragrance`,
    allergens: ['tocopherol', 'fragrance']
  },
  {
    brand: "thinkbaby",
    name: "thinkbaby",
    image: "images/thinkbaby-medium.png",
    ingredients: `WATER, CAPRYLIC/CAPRIC TRIGLYCERIDE, POLYGLYCERYL-4 ISOSTEARATE, CETYL DIMETHICONE, HEXYL LAURATE, GLYCERIN, HYDROGENATED METHYL ABIETATE, MAGNESIUM SULFATE, CAPRYLHYDROXAMIC ACID, GLYCERYL CAPRYLATE, HYDROGENATED CASTOR OIL, SORBITAN SESQUIOLEATE, CARICA PAPAYA (PAPAYA) FRUIT EXTRACT, HELIANTHUS ANNUUS (SUNFLOWER) OIL, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, TOCOPHEROL, OLEA EUROPAEA (OLIVE) FRUIT OIL, HYALURONIC ACID`,
    allergens: ['sorbitan_sesquioleate', 'tocopherol']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `alcohol Denat. , Butyloctyl Salicylate, Acrylates/Octylacrylamide Copolymer, Panthenol, Tocopherol, Fragrance, Stearoxytrimethylsilane, Caprylic/Capric Triglyceride, Glycerin`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `water, tridecyl salicylate, sorbitol, stearic acid, aluminum starch octenylsuccinate, triethanolamine, polyethyloxazoline, carbomer, dimethicone, tocopherol, disodium EDTA, polyglyceryl-3 distearate, caprylyl glycol, phenoxyethanol, ethylhexyl glycerin, sorbitan isostearate, benzyl alcohol, fragrance`,
    allergens: ['tocopherol', 'benzyl_alcohol', 'fragrance']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Isododecane, Diisopropyl Adipate, Dimethicone, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Fragrance, Hydroxypropylcellulose, Mineral Oil, Tocopheryl Acetate, Ascorbyl Palmitate, Panthenol, Water, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Aloe Barbadensis Leaf Extract`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Alcohol Denat. , Butyloctyl Salicylate, Acrylates/Octylacrylamide Copolymer, Panthenol, Tocopherol, Fragrance, Stearoxytrimethylsilane, Caprylic/Capric Triglyceride, Glycerin`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Alcohol Denat. , Tridecyl Salicylate, Acrylates/Octylacrylamide Copolymer, Ethylhexyl Methoxycrylene, Peg-15 Cocamine Glycerin, Tocopherol, Fragrance&Nbsp,`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Alcohol Denat. , Isododecane, Disopropyl Adipate, Acrylates/Octylacrylamide Copolymer, Va/Butyl Maleate/Isobornyl Acrylate Copolymer, Peg-12 Dimethicone, Caprylyl Glycol, Hydrogenated Methyl Abietate, Ascorbyl Palmitate, Tocopheryl Acetate, Mineral Oil, Panthenol, Water, Aloe Barbadensis Leaf Extract, Fragrance`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "cetaphil",
    name: "cetaphil",
    image: "images/cetaphil-medium.png",
    ingredients: `aluminum hydroxide, beeswax, bht, butyloctyl salicylate, c12-15 alkyl benzoate, cetyl alcohol, dimethicone, euphorbia cerifera (candelilla) wax, isostearic acid, neopentyl glycol diethylhexanoate, ozokerite, paraffin, polyethylene, stearic acid, tocopheryl acetate (vitamin e), triethoxycaprylylsilane.`,
    allergens: ['tocopheryl_acetate']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Water, Tridecyl Salicylate, Sorbitol, Polyethyloxazoline, Stearic Acid, Triethanolamine, Aluminum Starch Octenylsuccinate, Carbomer, Polyglyceryl-3Distearate, Dimethicone, Sorbitan Isostearate, Fragrance, Benzyl Alcohol, Caprylyl Glycol, Phenoxyethanol, Ethylhexylglycerin, Tocopherol (Vitamin E), Disodium Edta.`,
    allergens: ['benzyl_alcohol', 'tocopherol', 'fragrance']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Water, Cetearyl Alcohol, Stearyl Alcohol, Glycerin, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Cetyl Alcohol, Carbomer, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Xanthan Gum, Disodium Edta, Methyl Dihydroabietate, Lauryl Peg-8 Dimethicone, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer, Sodium Ascorbyl Phosphate, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice, Phenoxyethanol, Triethanolamine, Propylene Glycol, Hydroxyacetophenone`,
    allergens: ['propylene_glycol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "eucerin",
    name: "eucerin",
    image: "images/eucerin-medium.png",
    ingredients: `Water, Alcohol Denat., Butyloctyl Salicylate, Silica, C12-15 Alkyl Benzoate, Polyglyceryl-6 Stearate, Sodium Stearoyl Glutamate, Diisostearoyl Polyglyceryl-3 Dimer Dilinoleate, Behenyl Alcohol, Butylene Glycol Dicaprylate/Dicaprate, Cetearyl Alcohol, Copernicia Cerifera (Carnauba) Wax, Dibutyl Adipate, Sodium Hyaluronate, Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Tocopherol, Dimethicone, Silica Dimethyl Silylate, Diethylhexyl Syringylidenemalonate, Ethylcellulose, Glyceryl Behenate, L-Carnitine, Polyglyceryl-6 Octastearate, Phenoxyethanol, Glycerin, Xanthan Gum, Ethylhexylglycerin, Disodium EDTA, Hydroxyacetophenone, Polyglyceryl-6 Behenate, Cetyl Alcohol, Sodium Ascorbyl Phosphate`,
    allergens: ['tocopherol']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, Styrene/Acrylates Copolymer, Silica, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Beeswax, Caprylyl Methicone, Glyceryl Stearate, PEG-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Aluminum Starch Octenylsuccinate, Behenyl Alcohol, Acrylates/Dimethicone Copolymer, Xanthan Gum, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Sodium Polyacrylate, Hydrolyzed Jojoba Esters, Chrysanthemum Parthenium (Feverfew) Flower/Leaf/Stem Juice, Fragrance, Disodium EDTA, Ethylhexyl Stearate, Glycine Soja (Soybean) Seed Extract, Tocopheryl Acetate, BHT, Jojoba Esters, Trideceth-6`,
    allergens: ['benzyl_alcohol', 'styrene-acrylates_copolymer', 'acrylates-dimethicone_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, Glycerin, Alcohol Denat., Silica, Caprylyl Methicone, Aluminum Starch Octenylsuccinate, Dimethicone, Polyurethane-62, Phenoxyethanol, Pentylene Glycol, Styrene/Acrylates Copolymer, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Acrylates/Dimethicone Copolymer, Fragrance, Glyceryl Stearate, Chlorphenesin, Menthyl Lactate, Tocopheryl Acetate, Disodium EDTA, Trideceth-6, Hydrolyzed Hyaluronic Acid, Sodium Hydroxide, Blue 1`,
    allergens: ['styrene-acrylates_copolymer', 'acrylates-dimethicone_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Water, Tridecyl Salicylate, Sorbitol, Polyethyloxazoline, Stearic Acid, Triethanolamine, Aluminum Starch Octenylsuccinate, Carbomer, Polyglyceryl-3Distearate, Dimethicone, Sorbitan Isostearate, Fragrance, Benzyl Alcohol, Caprylyl Glycol, Phenoxyethanol, Ethylhexylglycerin, Tocopherol (Vitamin E), Disodium Edta.`,
    allergens: ['benzyl_alcohol', 'tocopherol', 'fragrance']
  },
  {
    brand: "cerave",
    name: "cerave",
    image: "images/cerave-medium.png",
    ingredients: `Water, Glycerin, C12-15 Alkyl Benzoate, Dimethicone, Isododecane, Styrene/acrylates Copolymer, Glyceryl Stearate, Butyloctyl Salicylate, Dicaprylyl Carbonate, Propanediol, Stearic Acid, Aluminum Hydroxide, Peg-100 Stearate, Sorbitan Stearate, Niacinamide, Peg-8 Laurate, Ceramide Np, Ceramide Ap, Ceramide Eop, Sorbitan Isostearate, Carbomer, Cetearyl Alcohol, Ceteareth-20, Triethoxycaprylylsilane, Dimethiconol, Sodium Citrate, Sodium Lauroyl Lactylate, Sodium Dodecylbenzenesulfonate, Myristic Acid, Sodium Hyaluronate, Cholesterol, Palmitic Acid, Phenoxyethanol, Chlorphenesin, Tocopherol, Hydroxyethyl Acrylate/sodium Acryloyldimethyl Taurate Copolymer, Caprylyl Glycol, Citric Acid, Panthenol, Xanthan Gum, Phytosphingosine, Polyhydroxystearic Acid, Polysorbate 60, Ethylhexylglyceri`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer', 'hydroxyethyl_acrylate-sodium_acryloyldimethyl_taurate_copolymer']
  },
  {
    brand: "hawaiian",
    name: "hawaiian",
    image: "images/hawaiian-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Isododecane, C12-15 Alkyl Benzoate, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Dimethicone, Fragrance, Tocopheryl Acetate, Ascorbyl Palmitate, Mineral Oil, Water, Panthenol, Carica Papaya (Papaya) Fruit Extract, Mangifera Indica (Mango) Fruit Extract, Passiflora Incarnata Fruit Extract, Plumeria Acutifolia Flower Extract, Psidium Guajava Fruit Extract, Aloe Barbadensis Leaf Extract`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Styrene/Acrylates Copolymer, Silica, Dimethicone, Potassium Cetyl Phosphate, Benzyl Alcohol, Beeswax, Caprylyl Methicone, Glyceryl Stearate, PEG-100 Stearate, Cetyl Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Aluminum Starch Octenylsuccinate, Behenyl Alcohol, Acrylates/Dimethicone Copolymer, Xanthan Gum, Sodium Polyacrylate, Chlorphenesin, Dimethicone/PEG-10/15 Crosspolymer, Hydrolyzed Jojoba Esters, Fragrance, Disodium EDTA, Ethylhexyl Stearate, Tocopheryl Acetate, BHT, Trideceth-6, Jojoba Esters`,
    allergens: ['benzyl_alcohol', 'styrene-acrylates_copolymer', 'acrylates-dimethicone_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `SD Alcohol 40-B (53.2% v/v), Acrylates/Octylacrylamide Copolymer, Ethylhexyl Methoxycrylene, Isohexadecane, Isododecane, Glycerin, C13-15 Alkane, PEG-2 Cocamine, Diethylhexyl Syringylidenemalonate, Tocopherol (Vitamin E), Fragrance`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "eucerin",
    name: "eucerin",
    image: "images/eucerin-medium.png",
    ingredients: `Water, Alcohol Denat., Butyloctyl Salicylate, Silica, C12-15 Alkyl Benzoate, Polyglyceryl-6 Stearate, Sodium Stearoyl Glutamate, Diisostearoyl Polyglyceryl-3 Dimer Dilinoleate, Behenyl Alcohol, Butylene Glycol Dicaprylate/Dicaprate, Cetearyl Alcohol, Copernicia Cerifera (Carnauba) Wax, Dibutyl Adipate, L-Carnitine, Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Tocopherol, Dimethicone, Silica Dimethyl Silylate, Diethylhexyl Syringylidenemalonate, Ethylcellulose, Glyceryl Behenate, Polyglyceryl-6 Octastearate, Phenoxyethanol, Glycerin, Xanthan Gum, Ethylhexylglycerin, Disodium EDTA, Hydroxyacetophenone, Polyglyceryl-6 Behenate, Cetyl Alcohol, Sodium Ascorbyl Phosphate`,
    allergens: ['tocopherol']
  },
  {
    brand: "cetaphil",
    name: "cetaphil",
    image: "images/cetaphil-medium.png",
    ingredients: `Allantoin, Bisabolol, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Caprylyl Glycol, Caprylyl Methicone , Dimethicone, Dimethiconol/Propylsilsesquioxane/Silicate Crosspolymer, Ethylhexylglycerin, Hexylene Glycol , Isododecane, Lauryl Peg-10 Tris(Trimethylsiloxy)Silylethyl Dimethicone, Lauryl Peg-8 Dimethicone, Niacinamide, Octyldodecyl Neopentanoate , Peg-10, Phenoxyethanol , Polymethylsilsesquioxane, Propanediol , Sodium Chloride, Sodium Hydroxide, Tetrasodium Glutamate Diacetate, Tocopherol (Vitamin E), Trilaureth-4 Phosphate, Water.`,
    allergens: ['tocopherol']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Isododecane, Diisopropyl Adipate, VA/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Fragrance, Tocopheryl Acetate`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "bluelizard",
    name: "bluelizard",
    image: "images/bluelizard-medium.png",
    ingredients: `Aloe Barbadensis Leaf Extract, Behenyl Behenate, Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Triglyceride, Cocos Nucifera (Coconut) Oil, Euphorbia Cerifera (Candelilla) Wax, Helianthus Annuus (Sunflower) Seed Oil, Helianthus Annuus (Sunflower) Seed Wax, Polyhydroxystearic Acid, Ricinus Communis (Castor) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Theobroma Cacao (Cocoa) Seed Butter, Tocopherol.`,
    allergens: ['none']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `mineral oil, ethylhexyl palmitate, diisopropyl adipate, isopropyl myristate, silica dimethyl silylate, cocos nucifera (coconut) oil, fragrance, theobroma cacao (cocoa) seed butter, aloe barbadensis leaf juice, PEG-8 dimethicone, plumeria acutifolia flower extract, mangifera indica (mango) fruit extract, psidium guajava fruit extract, carica papaya (papaya) fruit extract, passiflora incarnata fruit extract, colocasia antiquorum root extract, octyldodecanol, retinyl palmitate, tocopheryl acetate, ascorbic acid, sodium propoxyhydroxypropyl thiosulfate silica, hydrogenated styrene/butadiene copolymer, silica`,
    allergens: ['fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Water, Silica, Cetyl Dimethicone, Styrene/Acrylates Copolymer, C12-15 Alkyl Benzoate, Steareth-100, Ethylhexylglycerin, Aluminum Starch Octenylsuccinate, Phenoxyethanol, Caprylyl Glycol, Sodium Polyacrylate, Dimethicone, Steareth-2, Polyester-7, Chlorphenesin, Ethylhexyl Stearate, Disodium EDTA, Propylene Glycol, Neopentyl Glycol Diheptanoate, Bisabolol, Acrylates/Dimethicone Copolymer, Butylene Glycol, Mannan, Xanthan Gum, BHT, Capryloyl Glycine, Trideceth-6, Sarcosine, Cedrus Atlantica Bark Extract, Cinnamomum Zeylanicum Bark Extract, Portulaca Oleracea Extract`,
    allergens: ['propylene_glycol', 'styrene-acrylates_copolymer', 'sodium_polyacrylate', 'acrylates-dimethicone_copolymer']
  },
  {
    brand: "hellobello",
    name: "hellobello",
    image: "images/hellobello-medium.png",
    ingredients: `Arachidyl Alcohol, Arachidyl Glucoside, Behenyl Alcohol, Bisabolol*, Butyloctyl Salicylate, Butyrospermum Parkii (Shea) Butter*, Calendula Officinalis Flower Extract*, Camellia Sinensis Leaf Extract*, Caprylhydroxamic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Caprylyl Glycol, Cellulose Gum, Cetearyl Alcohol, Cetyl Alcohol, Chamomilla Recutita (Matricaria) Flower Extract*, Citric Acid, Citrus Aurantium Dulcis (Orange) Peel Oil, Coco Glucoside, Cocos Nucifera (Coconut) Oil*, Cucumis Sativus (Cucumber) Fruit Extract*, Diheptyl Succinate, Glycerin, Methyl Dihydroabietate, Microcrystalline Cellulose, Polyhydroxystearic Acid, Persea Gratissima (Avocado) Fruit Extract*, Prunus Armeniaca (Apricot) Kernel Oil*, Sodium Gluconate, Sodium Hyaluronate, Sodium Stearoyl Glutamate, Theobroma Cacao (Cocoa) Seed Butter*, Tocopherol, Triethyl Citrate, Vanilla Planifolia Fruit Extract, Water *Certified Organic`,
    allergens: ['tocopherol']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `SD alcohol 40-B (84.1% v/v), neopentyl glycol diheptanoate, polyester-27, tocopherol, fragrance, ascorbyl palmitate`,
    allergens: ['tocopherol', 'fragrance']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Alcohol Denat., Isododecane, Diisopropyl Adipate, Acrylates/Octylacrylamide Copolymer, Va/Butylmaleate/Isobomyl Acrylate Copolymer, Peg-12 Dimethicone, Caprylyl Glycol, Hydrogenated Methyl Abietate, Ascorbyl Palmitate, Tocopheryl Acetate, Mineral Oil, Panthenol, Water, Aloe Barbadensis Leaf Extract, Fragrance`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'va-butylmaleate-isobomyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `Water, Propylene Glycol, Styrene/Acrylates Copolymer, Behenyl Alchol, Glyceryl Stearate, Microcrystalline Cellulose, Benzyl Alcohol, Diethylhexyl Syringylidenemalonate, Palmitic Acid, Myristyl Alcohol, Stearic Acid, Hydrolyzed Wheat Protein/Pvp Crosspolymer, Lauryl Alcohol, Cetyl Alcohol, Retinyl Palmitate (Vitamin A Palmitate), Tocopherol (Vitamin E), Sodium Ascorbyl Phosphate (Vitamin C Phosphate), Lecithin, Cellulose Gum, Caprylic/Capric Triglyceride, Chlorphenesin, Fragrance, Butylated Pvp, Disodium Edta`,
    allergens: ['propylene_glycol', 'benzyl_alcohol', 'tocopherol', 'styrene-acrylates_copolymer', 'fragrance']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Ozokerite, Caprylic/Capric Triglyceride, Ethylhexyl Palmitate, Diisopropyl Adipate, Cetyl Alcohol, Theobroma Cacao (Cocoa) Seed Butter, Dimethicone, PEG-8, Caprylyl Glycol, Silica, Lauryl PEG-8 Dimethicone, Methyl Dihydroabietate, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer`,
    allergens: ['none']
  },
  {
    brand: "equate",
    name: "equate",
    image: "images/equate-medium.png",
    ingredients: `acrylates/octylacrylamide copolymer, alcohol denat., argania spinosa seedcake extract, butylene glycol, fragrance, octydodecyl neopentanoate, tocoppheryl acetate, water`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Water, Butyloctyl Salicylate, Hydrated Silica, Vp/Hexadecene Copolymer, Styrene/Acrylates Copolymer, Dimethicone, Polyester-8, Caprylyl Methicone, Ethylhexyl Stearate, Trideceth-6, Glyceryl Stearate, Peg-100 Stearate, Fragrance, Sodium Polyacrylate, Behenyl Alcohol, Dimethyl Capramide, Ethylhexylglycerin, Trimethylsiloxysilicate, Xanthan Gum, Polyaminopropyl Biguanide, Tocopheryl Acetate, Bht, Disodium Edta, Methylisothiazolinone`,
    allergens: ['methylisothiazolinone', 'styrene-acrylates_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "vacation",
    name: "vacation",
    image: "images/vacation-medium.png",
    ingredients: `Aloe Barbadensis (Aloe Vera) Leaf Juice, Butyloctyl Salicylate, Butyrospermum Parkii (Shea) Butter, Cetearyl Alcohol, Cocos Nucifera (Coconut) Oil, Dimethicone, Ethylhexyl Palmitate, Ethylhexylglycerin, Fragrance, Glycerin, Musa Paradisiaca (Banana) Fruit Extract, Niacinamide (Vitamin B3), Phenoxyethanol, Silica, Sodium Hyaluronate, Sodium Phytate, Sodium Polyacrylate, Sodium Stearoyl Glutamate, Tocopherol (Vitamin E), Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Water`,
    allergens: ['tocopherol', 'sodium_polyacrylate', 'fragrance']
  },
  {
    brand: "upup",
    name: "upup",
    image: "images/upup-medium.png",
    ingredients: `Alcohol Denat., Butyloctyl Salicylate, Acrylates/Octylacrylamide Copolymer, Panthenol, Tocopherol (Vitamin E), Fragrance, Stearoxytrimethylsilane, Caprylic/Capric Triglyceride, Glycerin`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "vacation",
    name: "vacation",
    image: "images/vacation-medium.png",
    ingredients: `Aloe Barbadensis (Aloe Vera) Leaf Juice, Aminomethyl Propanol, Butyloctyl Salicylate, Carboxymethylcellulose Sodium, Cocos Nucifera (Coconut) Oil, Dimethicone, Ethylhexylglycerin, Fragrance, Glycerin, Microcrystalline Cellulose, Musa Sapientum (Banana) Fruit Extract, Niacinamide (Vitamin B3), Phenoxyethanol, Polymethylsilsesquioxane, Polysorbate 20, Sodium Hyaluronate, Stearic Acid, Tapioca Starch, Tetrafluoropropene, Tetrasodium Glutamate Diacetate, Tocopheryl Acetate (Vitamin E), Vp/Hexadecene Copolymer, Water`,
    allergens: ['fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "vacation",
    name: "vacation",
    image: "images/vacation-medium.png",
    ingredients: `Acrylates/Octylacrylamide Copolymer, Alcohol Denat., Aloe Barbadensis (Aloe Vera) Leaf Extract, Butyloctyl Salicylate, Butyrospermum Parkii (Shea) Oil, Carthamus Tinctorius (Safflower) Seed Oil, Cocos Nucifera (Coconut) Extract, Diisopropyl Adipate, Ethylhexyl Methoxycrylene, Fragrance, Musa Sapientum (Banana) Fruit Extract, Polyester-8, Tocopherol (Vitamin E)`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "vacation",
    name: "vacation",
    image: "images/vacation-medium.png",
    ingredients: `Bisabolol, Butyloctyl Salicylate, Butyrospermum Parkii (Shea) Oil, C12-15 Alkyl Benzoate, Caprylic/ Capric Triglyceride, Fragrance, Isopropyl Myristate, Methyl Dihydroabietate, Passiflora Edulis (Passionfruit) Seed Oil, Polyester-8, Sclerocarya Birrea (Marula) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Vitamin E), Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Vitis Vinifera (Chardonnay Grape) Seed Oil`,
    allergens: ['tocopherol', 'fragrance']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Water, Glyceryl Stearate, Peg-100 Stearate, Cetyl Alcohol, Cetyl Dimethicone, Propylene Glycol, Phenoxyethanol, Caprylyl Glycol, Vp/Eicosene Copolymer, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Behenyl Alcohol, Sodium Polyacrylate, Chlorphenesin, Xanthan Gum, Disodium Edta, Fragrance, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice.`,
    allergens: ['propylene_glycol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'sodium_polyacrylate', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Paraffin Wax, Octyl Palmitate, Ozokerite, Euphorbia Cerifera (Candelilla) Wax, Beeswax, Butyloctyl Salicylate, Fragrance, Polyethylene, Polycrylene, Cetyl Alcohol, Tocopheryl Acetate, Ascorbyl Palmitate`,
    allergens: ['fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "upup",
    name: "upup",
    image: "images/upup-medium.png",
    ingredients: `Water, Cetearyl Alcohol, Stearyl Alcohol, Glycerin, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Cetyl Alcohol, Carbomer, Ceteth-10 Phosphate, Dicetyl Phosphate, Coco-Glucoside, Xanthan Gum, Disodium Edta, Methyl Dihydroabietate, Lauryl Peg-8 Dimethicone, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer, Sodium Ascorbyl Phosphate, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice, Phenoxyethanol, Triethanolamine, Propylene Glycol, Hydroxyacetophenone`,
    allergens: ['propylene_glycol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "blackgirlsun",
    name: "blackgirlsun",
    image: "images/blackgirlsun-medium.png",
    ingredients: `Acrylic Acid/Vp Crosspolymer, Aloe Barbadendsis Leaf Juice, Butyrospermum Parkii (Shea) Butter, Caprylhydroxamic Acid, Caprylic/Capric Triglyceride, Daucus Carota Sativa (Carrot) Seed Oil, Ethyl Ferulate, Glycerin, Glyceryl Caprylate, Glyceryl Undecylenate, Helianthus Annuus (Sunflower) Seed Oil, Lavandula Angustifolia (Lavender) Oil, Olus Oil, Persea Gratissima (Avocado) Oil, Pongamia Pinnata Seed Extract, Simmondisa Chinensis (Jojoba) Seed Oil, Sodium Hydroxide, Tetrasodium Glutamate Diacetate, Tocopheryl Acetate, Triethoxycaprylylsilane, Vp/Acrylates/Lauryl Methacrylate Copolymer, Water`,
    allergens: ['vp-acrylates-lauryl_methacrylate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "pipette",
    name: "pipette",
    image: "images/pipette-medium.png",
    ingredients: `Water, Caprylic/Capric Triglyceride, Squalane, Glycerin, Cetearyl Alcohol, Methyl Dihydroabietate, Sorbitan Olivate, Cetyl Palmitate, Coco-Glucoside, Ethyl Ferulate, Caprylyl/Capryl Glucoside, Lecithin, Bisabolol, Physalis Angulata Extract, Xanthan Gum, Acacia Senegal Gum, Sodium Gluconate, Isostearic Acid, Polyhydroxystearic Acid, 1,2-Hexanediol, Polyglyceryl-3 Polyricinoleate, Hydroxyacetophenone, Caprylyl Glycol`,
    allergens: ['none']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Octyldodecanol, Caprylic/Capric Triglyceride, Butyloctyl Salicylate, Dibutyl Ethylhexanoyl Glutamide, Dibutyl Lauroyl Glutamide, Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Tocopheryl Acetate, Fragrance, Pongamia Pinnata Seed Extract`,
    allergens: ['fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "upup",
    name: "upup",
    image: "images/upup-medium.png",
    ingredients: `Beeswax (Apis Mellifera), Lauryl Lactate, Ozokerite, Cetearyl Behenate, Polybutene, Butyloctyl Salicylate, Cetyl Alcohol, Styrene/Acrylates Copolymer, Myristyl Myristate, Theobroma Cacao (Cocoa) Seed Butter, Phenoxyethanol, Tocopherol, Tetrahexyldecyl Ascorbate`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `Sd Alcohol 40-B (73.4% V/V), Neopentyl Glycol Diheptanoate, Polyester-27, Acrylates/Octyacrylamide Copolymer, Dimethicone, Fragrance, Ascorby Palmitate`,
    allergens: ['acrylates-octyacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "babyganics",
    name: "babyganics",
    image: "images/babyganics-medium.png",
    ingredients: `Water, Isododecane, Caprylic/Capric Triglyceride, Isohexadecane, C12-15 Alkyl Benzoate, Neopentyl Glycol Diheptanoate, Shea Butter Ethyl Esters, Carthamus Tinctorius (Safflower) Seed Oil, C30-38 Olefin/Isopropyl Maleate/Ma Copolymer, Butyloctyl Salicylate, Coco-Glucoside, Cetearyl Alcohol, Cetearyl Glucoside, Cetearyl Olivate, Sorbitan Olivate, Ethylhexylglycerin, Simmondsia Chinensis (Jojoba) Seed Oil+, Sodium Hydroxide, Chlorphenesin, Xanthan Gum, Tocopherol, Glycerin+, Sodium Phytate, Helianthus Annuus (Sunflower) Seed Oil+, Solanum Lycopersicum (Tomato) Seed Oil, Vaccinium Macrocarpon (Cranberry) Seed Oil, Nigella Sativa (Black Cumin) Seed Oil+, Rubus Idaeus (Raspberry) Seed Oil, Citric Acid, Fragrance*`,
    allergens: ['tocopherol', 'fragrance*']
  },
  {
    brand: "upup",
    name: "upup",
    image: "images/upup-medium.png",
    ingredients: `Acrylates/Octylacrylamide Copolymer, Alcohol Denat, Butyloctyl Salicylate, Caprylic/Capric Triglyceride, Fragrance, Glycerin, Panthenol, Stearoxytrimethylsilane, Tocopherol`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: `Sd Alcohol 40-B (73.9% V/V), Isobutane, Neopentyl Glycol Diheptanoate, Polyester-27, Acrylates/Octylacrylamide Copolymer, Dimethicone, Fragrance, Ascorbyl Palmitate`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance']
  },
  {
    brand: "upup",
    name: "upup",
    image: "images/upup-medium.png",
    ingredients: `Acrylates/C12-22 Alkyl Methacrylate Copolymer, Aloe Barbadensis Leaf Juice, Carbomer, Cetearyl Alcohol, Ceteth-10 Phosphate, Cetyl Alcohol, Coco-Glucoside, Dicetyl Phosphate, Disodium Edta, Glycerin, Hydroxyacetophenone, Lauryl Peg-8 Dimethicone, Methyl Dihydroabietate, Phenoxyethanol, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer, Propylene Glycol, Sodium Ascorbyl Phosphate, Stearyl Alcohol, Tocopheryl Acetate, Triethanolamine, Water, Xanthan Gum.`,
    allergens: ['propylene_glycol', 'acrylates-c12-22_alkyl_methacrylate_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "neutrogena",
    name: "neutrogena",
    image: "images/neutrogena-medium.png",
    ingredients: `Alcohol Denat., Isobutane, Butyloctyl Salicylate, Dicaprylyl Carbonate, Diethylhexyl 2, 6-Naphthalate, Polyester-7, Acrylates/Octylacrylamide Copolymer, Neopentyl Glycol Diheptanoate, Fragrance, Tocopheryl Acetate, Ascorbyl Palmitate`,
    allergens: ['acrylates-octylacrylamide_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Alcohol Denat, Caprylic/Capric Triglyceride, Isododecane, Va/Butyl Maleate/Isobornyl Acrylate Copolymer, Caprylyl Glycol, Dimethicone, Fragrance, Tocopheryl Acetate, Mineral Oil, Water, Panthenol, Aloe Barbadensis Leaf Extract`,
    allergens: ['va-butyl_maleate-isobornyl_acrylate_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "coppertone",
    name: "coppertone",
    image: "images/coppertone-medium.png",
    ingredients: ` Water, Styrene/Acrylates Copolymer, Butyloctyl Salicylate, Diethylhexyl 2,6-Naphthalate, Polyester-7, Cetearyl Alcohol, Glyceryl Stearate, Silica, Neopentyl Glycol Diheptanoate, 1,2-Hexanediol, Copernicia Cerifera (Carnauba) Wax, Ppg-15 Stearyl Ether, Silica Dimethyl Silylate, Tapioca Starch, Tocopheryl Acetate, Sodium Ascorbyl Phosphate, Sodium Stearoyl Glutamate, Diethylhexyl Syri Lidenemalonate, Tocopherol (Vitamin E), Hydroxyacetophenone, Argania Spinosa Kernel Oil, Xanthan Gum, Glycereth-26, Glycerin, Disodium Edta, Bisabolol`,
    allergens: ['tocopherol', 'styrene-acrylates_copolymer', 'tocopheryl_acetate']
  },
  {
    brand: "banana",
    name: "banana",
    image: "images/banana-medium.png",
    ingredients: `Ozokerite, Caprylic/Capric Triglyceride, Ethylhexyl Palmitate, Diisopropyl Adipate, Cetyl Alcohol, Theobroma Cacao (Cocoa) See Butter, Dimethicone, Peg-8, Caprylyl Glycol, Silica, Lauryl Peg-8 Dimethicone, Methyl Dihydroabietate, Phenylisopropyl Dimethicone, Polyglyceryl-3 Stearate/Isostearate/Dimer Dilinoleate Crosspolymer`,
    allergens: ['none']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Alcohol Denat. (70.1%), Acrylate/Octylacrylamide Copolymer, Polyester 8, Butyloctyl Salicylate, Alaria Esculenta Extract, Laminaria Digitata Extract, Helianthus Annuus Seed Extract, Caprylic/Capric Triglyceride, Glycerin, Fragrance, Water, Tocopheryl Acetate`,
    allergens: ['acrylate-octylacrylamide_copolymer', 'fragrance', 'tocopheryl_acetate']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Alcohol Denat. (58%), Butyloctyl Salicylate, C12-15 Alkyl Benzoate, Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Fragrance, Tocopherol`,
    allergens: ['tocopherol', 'fragrance']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Alcohol Denat. (36.8%), Diisopropyl Adipate, Butyloctyl Salicylate, Isododecane, Trimethylpentanediol/ Adipic Acid/Glycerin Crosspolymer, Silica, Myristyl Lactate, Hydroxypropylcellulose, Fragrance`,
    allergens: ['fragrance']
  },
  {
    brand: "blackgirlsun",
    name: "blackgirlsun",
    image: "images/blackgirlsun-medium.png",
    ingredients: `Alcohol Denat., Acrylates/Octylacrylamide Copolymer, Persea Gratissima (Avocado) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Aloe Barbadensis Leaf Extract, Tocopherol, Butyrospermum Parkii (Shea) Butter, Glycerin, Caprylic/Capric Triglyceride, Diethylhexyl Syringylidenemalonate, Helianthus Annuus (Sunflower) Seed Oil`,
    allergens: ['tocopherol', 'acrylates-octylacrylamide_copolymer']
  },
  {
    brand: "tula",
    name: "tula",
    image: "images/tula-medium.png",
    ingredients: `Aqua/Water/Eau, Butyloctyl Salicylate, Pentylene Glycol, Lactococcus Ferment Lysate, 1.2-Hexanediol, Silica, Ectoin , Glycerin, Arginine, Hydroxyectoin, Ananas Sativus (Pineapple) Fruit Extract, Carica Papaya (Papaya) Fruit Extract, Lactic Acid, Camellia Sinensis Leaf Extract, Hedychium Coronarium Root Extract, Triethyl Citrate, Citrus Aurantium Dulcis (Orange) Peel Extract, Citrus Limon (Lemon) Peel Extract, Pyrus Communis (Pear) Fruit Extract), Pyrus Malus (Apple) Fruit Extract, Rubus Idaeus (Raspberry) Fruit Extract, Vanilla Planifolia Fruit Extract, Pimpinella Anisum Fruit Extract, Mica, Tocopherol, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Synthetic Fluorphlogopite, Hydrolyzed Wheat Protein / Pvp Crosspolymer, Carbomer, Dibutyl Lauroyl Glutamide, Dibutyl Ethylhexanoyl Glutamide, Propanediol, Trisodium Ethylenediamine Disuccinate, Sodium Chloride., Sodium Benzoate, Ehtylhexylglycerin, Tin Oxide, Phenoxyethanol`,
    allergens: ['tocopherol', 'sodium_benzoate']
  },
  {
    brand: "sunbum",
    name: "sunbum",
    image: "images/sunbum-medium.png",
    ingredients: `Cocos Nucifera (Coconut) Oil, Persea Gratissima (Avocado) Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Linum Usitatissimum (Linseed) Seed Oil, Oryza Sativa (Rice Bran) Wax, Euphorbia Cerifera (Candelilla) Wax, Butyloctyl Salicylate, Copernicia Cerifera (Carnauba) Wax, Ozokerite, Butyrospermum Parkii (Shea Butter), Oryzanol, Fragrance, Theobroma Cacao (Cocoa) Seed Butter, Carthamus Tinctorius (Safflower) Seed Oil, Jojoba Esters, Tocopherol, Bisabolol`,
    allergens: ['tocopherol', 'fragrance']
  },
];

document.getElementById('brandSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p => p.brand.includes(query));
  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = '';
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src='${product.image}' alt='${product.name}'>
      <p>${product.name}</p>`;
    card.onclick = () => {
      document.getElementById('ingredientInput').value = product.ingredients;
      checkIngredients();
    };
    grid.appendChild(card);
  });
});
