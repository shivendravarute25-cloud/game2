// ============================================================
// COLOR & PAINT - FINAL SCRIPT
// ============================================================

"use strict";

// ============================================================
// 1. COLOR PALETTE
// ============================================================

const PALETTE = [
  { name: "Red", hex: "#ef4444" },
  { name: "Orange", hex: "#f97316" },
  { name: "Yellow", hex: "#facc15" },
  { name: "Green", hex: "#22c55e" },
  { name: "Blue", hex: "#3b82f6" },
  { name: "Purple", hex: "#a855f7" },
  { name: "Pink", hex: "#ec4899" },
  { name: "Brown", hex: "#92400e" },
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#ffffff" }
];


// ============================================================
// 2. PICTURES
// ============================================================

const PICTURES = [

  // ----------------------------------------------------------
  // FLOWER
  // ----------------------------------------------------------
  {
    id: "flower",
    title: "Beautiful Flower",
    emoji: "🌸",

    regions: [
      {
        id: "petal1",
        name: "Petal 1",
        type: "ellipse",
        attrs: { cx: 150, cy: 80, rx: 35, ry: 55 }
      },
      {
        id: "petal2",
        name: "Petal 2",
        type: "ellipse",
        attrs: { cx: 210, cy: 80, rx: 35, ry: 55 }
      },
      {
        id: "petal3",
        name: "Petal 3",
        type: "ellipse",
        attrs: { cx: 120, cy: 130, rx: 35, ry: 55 }
      },
      {
        id: "petal4",
        name: "Petal 4",
        type: "ellipse",
        attrs: { cx: 240, cy: 130, rx: 35, ry: 55 }
      },
      {
        id: "petal5",
        name: "Petal 5",
        type: "ellipse",
        attrs: { cx: 180, cy: 155, rx: 35, ry: 55 }
      },
      {
        id: "center",
        name: "Flower Center",
        type: "circle",
        attrs: { cx: 180, cy: 115, r: 35 }
      },
      {
        id: "stem",
        name: "Stem",
        type: "rect",
        attrs: { x: 170, y: 145, width: 20, height: 150, rx: 8 }
      },
      {
        id: "leaf1",
        name: "Leaf 1",
        type: "ellipse",
        attrs: { cx: 135, cy: 220, rx: 55, ry: 25 }
      },
      {
        id: "leaf2",
        name: "Leaf 2",
        type: "ellipse",
        attrs: { cx: 225, cy: 250, rx: 55, ry: 25 }
      }
    ]
  },


  // ----------------------------------------------------------
  // BUTTERFLY
  // ----------------------------------------------------------
  {
    id: "butterfly",
    title: "Cute Butterfly",
    emoji: "🦋",

    regions: [
      {
        id: "topLeftWing",
        name: "Top Left Wing",
        type: "ellipse",
        attrs: { cx: 125, cy: 100, rx: 65, ry: 75 }
      },
      {
        id: "topRightWing",
        name: "Top Right Wing",
        type: "ellipse",
        attrs: { cx: 235, cy: 100, rx: 65, ry: 75 }
      },
      {
        id: "bottomLeftWing",
        name: "Bottom Left Wing",
        type: "ellipse",
        attrs: { cx: 130, cy: 190, rx: 55, ry: 65 }
      },
      {
        id: "bottomRightWing",
        name: "Bottom Right Wing",
        type: "ellipse",
        attrs: { cx: 230, cy: 190, rx: 55, ry: 65 }
      },
      {
        id: "body",
        name: "Body",
        type: "ellipse",
        attrs: { cx: 180, cy: 145, rx: 18, ry: 85 }
      },
      {
        id: "head",
        name: "Head",
        type: "circle",
        attrs: { cx: 180, cy: 55, r: 22 }
      }
    ]
  },


  // ----------------------------------------------------------
  // RAINBOW
  // ----------------------------------------------------------
  {
    id: "rainbow",
    title: "Rainbow",
    emoji: "🌈",

    regions: [
      {
        id: "redBand",
        name: "Red Band",
        type: "path",
        attrs: {
          d: "M60 210 A120 120 0 0 1 300 210 L280 210 A100 100 0 0 0 80 210 Z"
        }
      },
      {
        id: "orangeBand",
        name: "Orange Band",
        type: "path",
        attrs: {
          d: "M80 210 A100 100 0 0 1 280 210 L260 210 A80 80 0 0 0 100 210 Z"
        }
      },
      {
        id: "yellowBand",
        name: "Yellow Band",
        type: "path",
        attrs: {
          d: "M100 210 A80 80 0 0 1 260 210 L240 210 A60 60 0 0 0 120 210 Z"
        }
      },
      {
        id: "greenBand",
        name: "Green Band",
        type: "path",
        attrs: {
          d: "M120 210 A60 60 0 0 1 240 210 L220 210 A40 40 0 0 0 140 210 Z"
        }
      },
      {
        id: "leftCloud",
        name: "Left Cloud",
        type: "ellipse",
        attrs: { cx: 65, cy: 215, rx: 55, ry: 28 }
      },
      {
        id: "rightCloud",
        name: "Right Cloud",
        type: "ellipse",
        attrs: { cx: 295, cy: 215, rx: 55, ry: 28 }
      },
      {
        id: "sun",
        name: "Sun",
        type: "circle",
        attrs: { cx: 180, cy: 55, r: 30 }
      }
    ]
  },


  // ----------------------------------------------------------
  // HOUSE
  // ----------------------------------------------------------
  {
    id: "house",
    title: "Little House",
    emoji: "🏠",

    regions: [
      {
        id: "roof",
        name: "Roof",
        type: "polygon",
        attrs: {
          points: "70,150 180,60 290,150"
        }
      },
      {
        id: "wall",
        name: "Wall",
        type: "rect",
        attrs: {
          x: 90,
          y: 145,
          width: 180,
          height: 130
        }
      },
      {
        id: "door",
        name: "Door",
        type: "rect",
        attrs: {
          x: 155,
          y: 195,
          width: 50,
          height: 80
        }
      },
      {
        id: "windowLeft",
        name: "Left Window",
        type: "rect",
        attrs: {
          x: 110,
          y: 175,
          width: 40,
          height: 40
        }
      },
      {
        id: "windowRight",
        name: "Right Window",
        type: "rect",
        attrs: {
          x: 220,
          y: 175,
          width: 40,
          height: 40
        }
      },
      {
        id: "tree",
        name: "Tree",
        type: "circle",
        attrs: {
          cx: 45,
          cy: 180,
          r: 35
        }
      },
      {
        id: "trunk",
        name: "Tree Trunk",
        type: "rect",
        attrs: {
          x: 35,
          y: 210,
          width: 20,
          height: 70
        }
      },
      {
        id: "grass",
        name: "Grass",
        type: "rect",
        attrs: {
          x: 20,
          y: 275,
          width: 300,
          height: 25
        }
      }
    ]
  },


  // ----------------------------------------------------------
  // FISH
  // ----------------------------------------------------------
  {
    id: "fish",
    title: "Happy Fish",
    emoji: "🐟",

    regions: [
      {
        id: "fishBody",
        name: "Fish Body",
        type: "ellipse",
        attrs: {
          cx: 180,
          cy: 150,
          rx: 90,
          ry: 55
        }
      },
      {
        id: "tail",
        name: "Tail",
        type: "polygon",
        attrs: {
          points: "90,150 35,105 35,195"
        }
      },
      {
        id: "topFin",
        name: "Top Fin",
        type: "polygon",
        attrs: {
          points: "165,100 190,55 215,105"
        }
      },
      {
        id: "bottomFin",
        name: "Bottom Fin",
        type: "polygon",
        attrs: {
          points: "165,200 190,245 215,195"
        }
      },
      {
        id: "eye",
        name: "Eye",
        type: "circle",
        attrs: {
          cx: 220,
          cy: 135,
          r: 10
        }
      },
      {
        id: "bubble1",
        name: "Bubble 1",
        type: "circle",
        attrs: {
          cx: 275,
          cy: 85,
          r: 12
        }
      },
      {
        id: "bubble2",
        name: "Bubble 2",
        type: "circle",
        attrs: {
          cx: 305,
          cy: 55,
          r: 8
        }
      }
    ]
  },


  // ----------------------------------------------------------
  // APPLE
  // ----------------------------------------------------------
  {
    id: "apple",
    title: "Red Apple",
    emoji: "🍎",

    regions: [
      {
        id: "appleBody",
        name: "Apple",
        type: "path",
        attrs: {
          d: "M180 110 C125 60 55 105 75 175 C90 235 140 260 180 230 C220 260 270 235 285 175 C305 105 235 60 180 110 Z"
        }
      },
      {
        id: "leaf",
        name: "Leaf",
        type: "ellipse",
        attrs: {
          cx: 220,
          cy: 65,
          rx: 45,
          ry: 18,
          transform: "rotate(-25 220 65)"
        }
      },
      {
        id: "stem",
        name: "Stem",
        type: "rect",
        attrs: {
          x: 174,
          y: 45,
          width: 12,
          height: 55,
          rx: 5
        }
      },
      {
        id: "shine",
        name: "Shine",
        type: "ellipse",
        attrs: {
          cx: 125,
          cy: 145,
          rx: 15,
          ry: 30
        }
      }
    ]
  }
];


// ============================================================
// 3. CORRECT COLORS
// ============================================================

const REFERENCE_COLORS = {

  flower: {
    petal1: "Pink",
    petal2: "Pink",
    petal3: "Pink",
    petal4: "Pink",
    petal5: "Pink",
    center: "Yellow",
    stem: "Green",
    leaf1: "Green",
    leaf2: "Green"
  },

  butterfly: {
    topLeftWing: "Purple",
    topRightWing: "Purple",
    bottomLeftWing: "Pink",
    bottomRightWing: "Pink",
    body: "Black",
    head: "Black"
  },

  rainbow: {
    redBand: "Red",
    orangeBand: "Orange",
    yellowBand: "Yellow",
    greenBand: "Green",
    leftCloud: "White",
    rightCloud: "White",
    sun: "Yellow"
  },

  house: {
    roof: "Red",
    wall: "Yellow",
    door: "Brown",
    windowLeft: "Blue",
    windowRight: "Blue",
    tree: "Green",
    trunk: "Brown",
    grass: "Green"
  },

  fish: {
    fishBody: "Blue",
    tail: "Orange",
    topFin: "Orange",
    bottomFin: "Orange",
    eye: "Black",
    bubble1: "Blue",
    bubble2: "Blue"
  },

  apple: {
    appleBody: "Red",
    leaf: "Green",
    stem: "Brown",
    shine: "White"
  }
};


// ============================================================
// 4. GAME STATE
// ============================================================

const SAVE_KEY = "colorAndPaintFinal_v1";

let state = {
  currentPicture: 0,
  selectedColorName: null,
  selectedColorHex: null,

  colored: {},
  correctRegions: {},

  score: 0,
  challengeMode: false,
  challengeTargets: {}
};


// ============================================================
// 5. DOM ELEMENTS
// ============================================================

const svgEl = document.getElementById("coloring-svg");
const paletteEl = document.getElementById("palette");

const levelEl = document.getElementById("level");
const progressEl = document.getElementById("progress");
const areasEl = document.getElementById("areas-colored");
const scoreEl = document.getElementById("score");

const paintBtn = document.getElementById("paint-btn");
const eraserBtn = document.getElementById("eraser-btn");
const challengeBtn = document.getElementById("challenge-btn");

const resetBtn = document.getElementById("reset-btn");
const newPictureBtn = document.getElementById("new-picture-btn");
const clearProgressBtn = document.getElementById("clear-progress-btn");

const galleryEl = document.getElementById("gallery");

const completionOverlay = document.getElementById("completion-overlay");
const nextPictureBtn = document.getElementById("next-picture-btn");

const toastEl = document.getElementById("toast");


// ============================================================
// 6. INITIALIZATION
// ============================================================

function init() {

  loadState();

  if (
    state.currentPicture < 0 ||
    state.currentPicture >= PICTURES.length
  ) {
    state.currentPicture = 0;
  }

  state.selectedColorName = null;
  state.selectedColorHex = null;

  buildPalette();
  buildGallery();
  renderPicture();
  updateUI();

  hideCompletion();

  if (paintBtn) paintBtn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", init);


// ============================================================
// 7. CURRENT PICTURE
// ============================================================

function getCurrentPicture() {
  return PICTURES[state.currentPicture];
}


// ============================================================
// 8. BUILD PALETTE
// ============================================================

function buildPalette() {

  if (!paletteEl) return;

  paletteEl.innerHTML = "";

  PALETTE.forEach(color => {

    const button = document.createElement("button");

    button.className = "color-btn";
    button.type = "button";
    button.title = color.name;

    button.style.background = color.hex;

    if (color.name === "White") {
      button.style.border = "2px solid #aaa";
    }

    button.addEventListener("click", () => {

      state.selectedColorName = color.name;
      state.selectedColorHex = color.hex;

      document.querySelectorAll(".color-btn").forEach(btn => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");

      showToast("Selected " + color.name);
    });

    paletteEl.appendChild(button);
  });
}


// ============================================================
// 9. BUILD GALLERY
// ============================================================

function buildGallery() {

  if (!galleryEl) return;

  galleryEl.innerHTML = "";

  PICTURES.forEach((picture, index) => {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "gallery-item";

    if (index === state.currentPicture) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <div style="font-size:38px">${picture.emoji}</div>
      <div>${picture.title}</div>
    `;

    card.addEventListener("click", () => {

      state.currentPicture = index;

      resetCurrentPicture(false);

      buildGallery();
      renderPicture();
      updateUI();

      hideCompletion();
    });

    galleryEl.appendChild(card);
  });
}


// ============================================================
// 10. RENDER MAIN SVG
// ============================================================

function renderPicture() {

  if (!svgEl) return;

  const picture = getCurrentPicture();

  svgEl.innerHTML = "";

  svgEl.setAttribute("viewBox", "0 0 360 320");

  picture.regions.forEach(region => {

    const element =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        region.type
      );

    Object.entries(region.attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    element.setAttribute("fill", "#ffffff");
    element.setAttribute("stroke", "#222");
    element.setAttribute("stroke-width", "3");

    element.dataset.regionId = region.id;

    element.style.cursor = "pointer";
    element.style.transition = "0.15s";

    element.addEventListener("click", handleRegionClick);

    svgEl.appendChild(element);
  });

  applySavedColors();

  buildReferencePanel();
}


// ============================================================
// 11. REFERENCE PANEL
// ============================================================

function buildReferencePanel() {

  const coloringPanel =
    document.querySelector(".coloring-card") ||
    document.querySelector(".canvas-card") ||
    svgEl.parentElement;

  if (!coloringPanel) return;

  let referenceBox =
    document.getElementById("reference-box");

  if (!referenceBox) {

    referenceBox = document.createElement("div");

    referenceBox.id = "reference-box";

    referenceBox.style.marginTop = "20px";
    referenceBox.style.padding = "15px";
    referenceBox.style.borderRadius = "15px";
    referenceBox.style.background = "#f8fafc";
    referenceBox.style.border = "2px solid #e5e7eb";
    referenceBox.style.textAlign = "center";

    svgEl.parentElement.appendChild(referenceBox);
  }

  referenceBox.innerHTML = `
    <h3 style="
      margin:0 0 10px;
      font-size:20px;
      color:#111827;
    ">
      🎨 Reference Picture
    </h3>

    <div style="
      font-size:14px;
      color:#6b7280;
      margin-bottom:10px;
    ">
      Use these colors to paint your picture
    </div>

    <div id="reference-svg-container"></div>
  `;

  renderReferenceSVG();
}


// ============================================================
// 12. REFERENCE SVG
// ============================================================

function renderReferenceSVG() {

  const container =
    document.getElementById("reference-svg-container");

  if (!container) return;

  const picture = getCurrentPicture();

  const referenceSVG =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

  referenceSVG.setAttribute("viewBox", "0 0 360 320");
  referenceSVG.setAttribute("width", "100%");
  referenceSVG.setAttribute("height", "250");

  picture.regions.forEach(region => {

    const element =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        region.type
      );

    Object.entries(region.attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    const correctColor =
      REFERENCE_COLORS[picture.id][region.id];

    const color =
      PALETTE.find(c => c.name === correctColor);

    element.setAttribute(
      "fill",
      color ? color.hex : "#ffffff"
    );

    element.setAttribute("stroke", "#222");
    element.setAttribute("stroke-width", "3");

    referenceSVG.appendChild(element);
  });

  container.appendChild(referenceSVG);
}


// ============================================================
// 13. REGION CLICK
// ============================================================

function handleRegionClick(event) {

  const regionId =
    event.currentTarget.dataset.regionId;

  const picture = getCurrentPicture();

  const region =
    picture.regions.find(
      r => r.id === regionId
    );

  if (!region) return;


  // ----------------------------------------------------------
  // ERASER
  // ----------------------------------------------------------

  if (state.eraserMode) {

    event.currentTarget.setAttribute(
      "fill",
      "#ffffff"
    );

    delete state.colored[regionId];
    delete state.correctRegions[regionId];

    calculateScore();
    saveState();
    updateUI();

    return;
  }


  // ----------------------------------------------------------
  // NO COLOR SELECTED
  // ----------------------------------------------------------

  if (!state.selectedColorName) {

    showToast("🎨 Please select a color first!");

    return;
  }


  // ----------------------------------------------------------
  // APPLY COLOR
  // ----------------------------------------------------------

  event.currentTarget.setAttribute(
    "fill",
    state.selectedColorHex
  );

  state.colored[regionId] =
    state.selectedColorName;


  // ----------------------------------------------------------
  // CHECK CORRECT COLOR
  // ----------------------------------------------------------

  const correctColor =
    REFERENCE_COLORS[picture.id][regionId];

  const isCorrect =
    state.selectedColorName === correctColor;

  state.correctRegions[regionId] =
    isCorrect;


  // ----------------------------------------------------------
  // MESSAGE
  // ----------------------------------------------------------

  if (isCorrect) {

    showToast("✅ Correct color! +points");

    event.currentTarget.style.filter =
      "brightness(1.08)";

  } else {

    showToast(
      "❌ Wrong color. Check the reference picture."
    );

    event.currentTarget.style.filter =
      "brightness(0.95)";
  }


  // ----------------------------------------------------------
  // SCORE
  // ----------------------------------------------------------

  calculateScore();

  saveState();

  updateUI();

  checkCompletion();
}


// ============================================================
// 14. SCORE CALCULATION
// ============================================================

function calculateScore() {

  const picture = getCurrentPicture();

  const total =
    picture.regions.length;

  let correct = 0;

  picture.regions.forEach(region => {

    if (state.correctRegions[region.id]) {
      correct++;
    }
  });

  state.score =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);
}


// ============================================================
// 15. APPLY SAVED COLORS
// ============================================================

function applySavedColors() {

  if (!svgEl) return;

  const picture = getCurrentPicture();

  picture.regions.forEach(region => {

    const savedColor =
      state.colored[region.id];

    if (!savedColor) return;

    const color =
      PALETTE.find(
        c => c.name === savedColor
      );

    if (!color) return;

    const element =
      svgEl.querySelector(
        `[data-region-id="${region.id}"]`
      );

    if (element) {
      element.setAttribute(
        "fill",
        color.hex
      );
    }
  });
}


// ============================================================
// 16. UPDATE UI
// ============================================================

function updateUI() {

  const picture = getCurrentPicture();

  const total =
    picture.regions.length;

  const colored =
    Object.keys(state.colored).length;

  const progress =
    total === 0
      ? 0
      : Math.round((colored / total) * 100);


  if (levelEl) {
    levelEl.textContent =
      `Level ${state.currentPicture + 1}`;
  }

  if (progressEl) {
    progressEl.textContent =
      `${progress}%`;
  }

  if (areasEl) {
    areasEl.textContent =
      `${colored}/${total}`;
  }

  if (scoreEl) {
    scoreEl.textContent =
      state.score;
  }
}


// ============================================================
// 17. COMPLETION
// ============================================================

function checkCompletion() {

  const picture = getCurrentPicture();

  const total =
    picture.regions.length;

  const colored =
    Object.keys(state.colored).length;


  if (colored !== total) {
    return;
  }

  showCompletion();
}


function showCompletion() {

  if (!completionOverlay) return;

  completionOverlay.hidden = false;
  completionOverlay.style.display = "flex";

  const scoreText =
    completionOverlay.querySelector(
      "#final-score"
    ) ||
    completionOverlay.querySelector(
      ".final-score"
    ) ||
    completionOverlay.querySelector(
      "[data-final-score]"
    );

  if (scoreText) {
    scoreText.textContent =
      `${state.score}/100`;
  }

  const overlayText =
    completionOverlay.querySelector(
      ".completion-score"
    );

  if (overlayText) {
    overlayText.textContent =
      `COLORING SCORE: ${state.score}/100`;
  }
}


function hideCompletion() {

  if (!completionOverlay) return;

  completionOverlay.hidden = true;
  completionOverlay.style.display = "none";
}


// ============================================================
// 18. RESET CURRENT PICTURE
// ============================================================

function resetCurrentPicture(showMessage = true) {

  state.colored = {};
  state.correctRegions = {};
  state.score = 0;

  state.challengeTargets = {};

  hideCompletion();

  saveState();

  if (svgEl) {
    renderPicture();
  }

  updateUI();

  if (showMessage) {
    showToast("↻ Picture reset!");
  }
}


// ============================================================
// 19. RESET BUTTON
// ============================================================

if (resetBtn) {

  resetBtn.addEventListener(
    "click",
    () => {
      resetCurrentPicture(true);
    }
  );
}


// ============================================================
// 20. NEW PICTURE
// ============================================================

if (newPictureBtn) {

  newPictureBtn.addEventListener(
    "click",
    () => {

      state.currentPicture++;

      if (
        state.currentPicture >=
        PICTURES.length
      ) {
        state.currentPicture = 0;
      }

      state.colored = {};
      state.correctRegions = {};
      state.score = 0;

      hideCompletion();

      saveState();

      buildGallery();
      renderPicture();
      updateUI();

      showToast(
        `🎲 ${getCurrentPicture().title}`
      );
    }
  );
}


// ============================================================
// 21. NEXT PICTURE
// ============================================================

if (nextPictureBtn) {

  nextPictureBtn.addEventListener(
    "click",
    () => {

      state.currentPicture++;

      if (
        state.currentPicture >=
        PICTURES.length
      ) {
        state.currentPicture = 0;
      }

      state.colored = {};
      state.correctRegions = {};
      state.score = 0;

      hideCompletion();

      saveState();

      buildGallery();
      renderPicture();
      updateUI();

      showToast(
        `➡️ ${getCurrentPicture().title}`
      );
    }
  );
}


// ============================================================
// 22. PAINT MODE
// ============================================================

if (paintBtn) {

  paintBtn.addEventListener(
    "click",
    () => {

      state.eraserMode = false;

      paintBtn.classList.add("active");

      if (eraserBtn) {
        eraserBtn.classList.remove("active");
      }

      showToast("🎨 Paint mode");
    }
  );
}


// ============================================================
// 23. ERASER MODE
// ============================================================

if (eraserBtn) {

  eraserBtn.addEventListener(
    "click",
    () => {

      state.eraserMode = true;

      eraserBtn.classList.add("active");

      if (paintBtn) {
        paintBtn.classList.remove("active");
      }

      showToast("🧹 Eraser mode");
    }
  );
}


// ============================================================
// 24. CHALLENGE MODE
// ============================================================

if (challengeBtn) {

  challengeBtn.addEventListener(
    "click",
    () => {

      state.challengeMode =
        !state.challengeMode;

      if (state.challengeMode) {

        challengeBtn.classList.add("active");

        showToast(
          "🌈 Color Challenge ON"
        );

      } else {

        challengeBtn.classList.remove("active");

        showToast(
          "🌈 Color Challenge OFF"
        );
      }

      saveState();
    }
  );
}


// ============================================================
// 25. CLEAR PROGRESS
// ============================================================

if (clearProgressBtn) {

  clearProgressBtn.addEventListener(
    "click",
    () => {

      const confirmed =
        confirm(
          "Clear all saved painting progress?"
        );

      if (!confirmed) return;

      localStorage.removeItem(
        SAVE_KEY
      );

      state = {
        currentPicture: 0,
        selectedColorName: null,
        selectedColorHex: null,
        colored: {},
        correctRegions: {},
        score: 0,
        challengeMode: false,
        challengeTargets: {},
        eraserMode: false
      };

      hideCompletion();

      buildGallery();
      renderPicture();
      updateUI();

      showToast(
        "🗑 Progress cleared!"
      );
    }
  );
}


// ============================================================
// 26. TOAST MESSAGE
// ============================================================

function showToast(message) {

  if (!toastEl) return;

  toastEl.textContent = message;

  toastEl.hidden = false;
  toastEl.style.display = "block";

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(() => {

      toastEl.hidden = true;
      toastEl.style.display = "none";

    }, 1800);
}


// ============================================================
// 27. SAVE GAME
// ============================================================

function saveState() {

  try {

    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({
        currentPicture:
          state.currentPicture,

        colored:
          state.colored,

        correctRegions:
          state.correctRegions,

        score:
          state.score,

        challengeMode:
          state.challengeMode
      })
    );

  } catch (error) {

    console.warn(
      "Could not save game:",
      error
    );
  }
}


// ============================================================
// 28. LOAD GAME
// ============================================================

function loadState() {

  try {

    const saved =
      localStorage.getItem(
        SAVE_KEY
      );

    if (!saved) {

      state.colored = {};
      state.correctRegions = {};
      state.score = 0;
      state.currentPicture = 0;
      state.challengeMode = false;
      state.eraserMode = false;

      return;
    }

    const data =
      JSON.parse(saved);

    state.currentPicture =
      Number.isInteger(
        data.currentPicture
      )
        ? data.currentPicture
        : 0;

    state.colored =
      data.colored || {};

    state.correctRegions =
      data.correctRegions || {};

    state.score =
      Number.isFinite(data.score)
        ? data.score
        : 0;

    state.challengeMode =
      !!data.challengeMode;

    state.eraserMode = false;

  } catch (error) {

    console.warn(
      "Could not load saved game:",
      error
    );

    state = {
      currentPicture: 0,
      selectedColorName: null,
      selectedColorHex: null,
      colored: {},
      correctRegions: {},
      score: 0,
      challengeMode: false,
      challengeTargets: {},
      eraserMode: false
    };
  }
}


// ============================================================
// 29. PREVENT COMPLETION POPUP ON PAGE LOAD
// ============================================================

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      if (
        Object.keys(
          state.colored || {}
        ).length === 0
      ) {
        hideCompletion();
      }

    }, 100);
  }
);
