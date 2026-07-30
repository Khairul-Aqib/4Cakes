// 4CakesInACup — menu data
// Pricelist dated 30th July 2026. Prices in RM (Malaysian Ringgit).

const MENU = [
  {
    category: "Cakes",
    items: [
      {
        id: "medovik",
        name: "Medovik",
        size: "8\" Square or Round",
        startingFrom: false,
        basePrice: 125,
        optionGroups: [
          {
            label: "Shape",
            choices: [
              { name: "Square", delta: 0 },
              { name: "Round", delta: 0 },
            ],
          },
          {
            label: "Topping",
            choices: [
              { name: "Classic", delta: 0 },
              { name: "+ Strawberries", delta: 20 },
            ],
          },
        ],
      },
      {
        id: "spartak",
        name: "Spartak",
        size: "8\" Square or Round",
        startingFrom: false,
        basePrice: 135,
        optionGroups: [
          {
            label: "Shape",
            choices: [
              { name: "Square", delta: 0 },
              { name: "Round", delta: 0 },
            ],
          },
          {
            label: "Topping",
            choices: [
              { name: "Classic", delta: 0 },
              { name: "+ Strawberries", delta: 20 },
            ],
          },
        ],
      },
      {
        id: "red-velvet",
        name: "Red Velvet",
        size: "",
        startingFrom: true,
        basePrice: 139,
        optionGroups: [
          {
            label: "Size",
            choices: [
              { name: "8\" Round, 3 Layers", delta: 0 },
              { name: "10\" Square, 2 Layers (36 pcs)", delta: 0 },
            ],
          },
        ],
      },
      {
        id: "vanilla-berries",
        name: "Vanilla Berries",
        size: "",
        startingFrom: true,
        basePrice: 139,
        optionGroups: [
          {
            label: "Size",
            choices: [
              { name: "8\" Round, 3 Layers", delta: 0 },
              { name: "10\" Square, 2 Layers (36 pcs)", delta: 0 },
            ],
          },
        ],
      },
      {
        id: "strawberry-almond",
        name: "Strawberry Almond Cake",
        size: "",
        startingFrom: true,
        basePrice: 145,
        optionGroups: [
          {
            label: "Size",
            choices: [
              { name: "8\" Round, 3 Layers", delta: 0 },
              { name: "10\" Square, 2 Layers (36 pcs)", delta: 0 },
            ],
          },
        ],
      },
      {
        id: "carrot-cake",
        name: "Carrot Cake",
        size: "",
        startingFrom: true,
        basePrice: 139,
        optionGroups: [
          {
            label: "Size",
            choices: [
              { name: "9\" Round, 2 Layers", delta: 0 },
              { name: "10\" Square, 2 Layers (36 pcs)", delta: 0 },
            ],
          },
        ],
      },
      {
        id: "pandan-gula-melaka",
        name: "Pandan Gula Melaka",
        size: "10\" Square, 2 Layers (cut into 36 pcs)",
        startingFrom: false,
        basePrice: 130,
        optionGroups: [],
      },
      {
        id: "choc-hazelnut",
        name: "Chocolate Hazelnut Cake",
        size: "8\" Round, 6 Layers",
        startingFrom: false,
        basePrice: 145,
        optionGroups: [],
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        size: "8\" Round, 3 Layers",
        startingFrom: true,
        basePrice: 139,
        optionGroups: [
          {
            label: "Filling",
            choices: [
              { name: "Choc Ganache Filling", delta: 0 },
              { name: "Choc Ganache + Berries Filling", delta: 6 },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Cheesecake",
    items: [
      { id: "lemon-cheesecake", name: "Lemon Cheesecake", size: "8\"", startingFrom: false, basePrice: 98, optionGroups: [] },
      { id: "pecan-praline", name: "Pecan Praline", size: "8\"", startingFrom: false, basePrice: 105, optionGroups: [] },
      { id: "pistachio-praline", name: "Pistachio Praline", size: "8\"", startingFrom: false, basePrice: 110, optionGroups: [] },
    ],
  },
  {
    category: "Pavlova",
    items: [
      { id: "white-pavlova-strawberries", name: "White Pavlova + Strawberries", size: "10\"", startingFrom: false, basePrice: 85, optionGroups: [] },
      { id: "white-pavlova-passionfruit", name: "White Pavlova + Strawberries + Passionfruit", size: "10\"", startingFrom: false, basePrice: 90, optionGroups: [] },
      { id: "chocolate-pavlova", name: "Chocolate Pavlova + Strawberries", size: "10\"", startingFrom: false, basePrice: 88, optionGroups: [] },
    ],
  },
  {
    category: "Dessert",
    items: [
      { id: "brownies", name: "Brownies", size: "10\"", startingFrom: false, basePrice: 75, optionGroups: [] },
      { id: "red-velvet-cookies", name: "Red Velvet Sandwich Cookies", size: "24 pcs", startingFrom: false, basePrice: 70, optionGroups: [] },
      { id: "choc-coffee-caramel-cookies", name: "Chocolate Coffee Caramel Sandwich Cookies", size: "24 pcs", startingFrom: false, basePrice: 75, optionGroups: [] },
      { id: "matcha-strawberry-cookies", name: "Matcha Strawberry Sandwich Cookies", size: "24 pcs", startingFrom: false, basePrice: 75, optionGroups: [] },
      { id: "pannacotta", name: "Pannacotta", size: "16 pcs", startingFrom: false, basePrice: 110, optionGroups: [] },
      { id: "tiramisu-cups", name: "Tiramisu Cups", size: "16 pcs", startingFrom: false, basePrice: 130, optionGroups: [] },
      {
        id: "quesillo",
        name: "Quesillo",
        size: "8\"",
        startingFrom: false,
        basePrice: 80,
        optionGroups: [
          {
            label: "Format",
            choices: [
              { name: "Whole Cake", delta: 0 },
              { name: "Cut & Individually Packed (8 pcs)", delta: 5 },
            ],
          },
        ],
      },
    ],
  },
];

const menuEl = document.getElementById("menu");
const categoryNavEl = document.getElementById("categoryNav");
const searchInputEl = document.getElementById("searchInput");
const noResultsEl = document.getElementById("noResults");

// selection[productId] = { groupLabel: choiceIndex }
const selection = {};

function formatPrice(n) {
  return "RM" + n.toFixed(n % 1 === 0 ? 0 : 2);
}

function computePrice(item) {
  let total = item.basePrice;
  const sel = selection[item.id] || {};
  item.optionGroups.forEach((group) => {
    const choiceIndex = sel[group.label] ?? 0;
    total += group.choices[choiceIndex].delta;
  });
  return total;
}

function searchableText(item, category) {
  const parts = [item.name, item.size || "", category || ""];
  item.optionGroups.forEach((g) => g.choices.forEach((c) => parts.push(c.name)));
  return parts.join(" ").toLowerCase();
}

function buildCard(item, category) {
  selection[item.id] = {};
  item.optionGroups.forEach((g) => (selection[item.id][g.label] = 0));

  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.search = searchableText(item, category);

  const img = document.createElement("div");
  img.className = "product-image";
  const labelSpan = document.createElement("span");
  labelSpan.className = "img-label";
  labelSpan.textContent = "Photo coming soon";
  img.appendChild(labelSpan);

  const body = document.createElement("div");
  body.className = "product-body";

  const title = document.createElement("h3");
  title.textContent = item.name;
  body.appendChild(title);

  if (item.size) {
    const sizeEl = document.createElement("p");
    sizeEl.className = "product-size";
    sizeEl.textContent = item.size;
    body.appendChild(sizeEl);
  }

  item.optionGroups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "option-group";

    const labelEl = document.createElement("span");
    labelEl.className = "option-group-label";
    labelEl.textContent = group.label;
    groupEl.appendChild(labelEl);

    const choicesEl = document.createElement("div");
    choicesEl.className = "option-choices";

    group.choices.forEach((choice, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-choice" + (idx === 0 ? " selected" : "");

      const label = document.createElement("span");
      label.textContent = choice.name;
      btn.appendChild(label);

      btn.addEventListener("click", () => {
        selection[item.id][group.label] = idx;
        choicesEl.querySelectorAll(".option-choice").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        updateCardDisplay(item, card);
      });

      choicesEl.appendChild(btn);
    });

    groupEl.appendChild(choicesEl);
    body.appendChild(groupEl);
  });

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";
  if (item.startingFrom) {
    const sf = document.createElement("span");
    sf.className = "starting-from";
    sf.textContent = "From";
    priceRow.appendChild(sf);
  }
  const priceEl = document.createElement("span");
  priceEl.className = "price";
  priceEl.textContent = formatPrice(computePrice(item));
  priceRow.appendChild(priceEl);
  body.appendChild(priceRow);

  card.appendChild(img);
  card.appendChild(body);

  card._priceEl = priceEl;

  return card;
}

function updateCardDisplay(item, card) {
  card._priceEl.textContent = formatPrice(computePrice(item));
}

function render() {
  menuEl.innerHTML = "";
  MENU.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.dataset.category = cat.category;

    const heading = document.createElement("h2");
    heading.textContent = cat.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "product-grid";

    cat.items.forEach((item) => {
      grid.appendChild(buildCard(item, cat.category));
    });

    section.appendChild(grid);
    menuEl.appendChild(section);
  });
}

function buildCategoryNav() {
  const categories = ["All", ...MENU.map((c) => c.category)];
  categories.forEach((cat, idx) => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (idx === 0 ? " active" : "");
    btn.type = "button";
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      categoryNavEl.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterByCategory(cat);
      searchInputEl.value = "";
      applySearch("");
    });
    categoryNavEl.appendChild(btn);
  });
}

function filterByCategory(cat) {
  document.querySelectorAll(".category-section").forEach((section) => {
    section.classList.toggle("hidden", cat !== "All" && section.dataset.category !== cat);
  });
}

function applySearch(query) {
  const q = query.trim().toLowerCase();
  let anyVisible = false;

  document.querySelectorAll(".category-section").forEach((section) => {
    let sectionHasVisible = false;
    section.querySelectorAll(".product-card").forEach((card) => {
      const matches = q === "" || card.dataset.search.includes(q);
      card.classList.toggle("hidden", !matches);
      if (matches) sectionHasVisible = true;
    });

    const activeCategoryBtn = categoryNavEl.querySelector(".category-btn.active");
    const activeCat = activeCategoryBtn ? activeCategoryBtn.textContent : "All";
    const categoryAllowed = activeCat === "All" || activeCat === section.dataset.category;

    const showSection = sectionHasVisible && categoryAllowed;
    section.classList.toggle("hidden", !showSection);
    if (showSection) anyVisible = true;
  });

  noResultsEl.classList.toggle("hidden", anyVisible || q === "");
}

searchInputEl.addEventListener("input", (e) => applySearch(e.target.value));

render();
buildCategoryNav();
