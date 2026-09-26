/* =========================================================
   COLOR & PAINT GAME
   Final Script
   ========================================================= */

const PALETTE = [
  { name: "Red", hex: "#FF4D4D" },
  { name: "Pink", hex: "#FF69B4" },
  { name: "Orange", hex: "#FF9F43" },
  { name: "Yellow", hex: "#FFD93D" },
  { name: "Green", hex: "#4CAF50" },
  { name: "Light Green", hex: "#90BE6D" },
  { name: "Blue", hex: "#4D96FF" },
  { name: "Sky Blue", hex: "#A5D8FF" },
  { name: "Purple", hex: "#9B5DE5" },
  { name: "Violet", hex: "#7B2CBF" },
  { name: "Brown", hex: "#8B5A2B" },
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#808080" }
];


/* =========================================================
   PICTURES
   ========================================================= */

const PICTURES = [

  {
    id: "flower",
    title: "Flower",
    regions: [
      {
        id: "petal1",
        type: "path",
        d: "M150 90 C115 40 55 55 70 105 C80 140 125 135 150 110 Z"
      },
      {
        id: "petal2",
        type: "path",
        d: "M150 90 C150 35 205 25 220 70 C230 105 190 120 165 110 Z"
      },
      {
        id: "petal3",
        type: "path",
        d: "M150 100 C205 80 245 115 215 145 C190 170 155 140 150 115 Z"
      },
      {
        id: "petal4",
        type: "path",
        d: "M145 100 C115 135 65 155 55 115 C48 85 100 75 140 90 Z"
      },
      {
        id: "center",
        type: "circle",
        cx: 150,
        cy: 105,
        r: 25
      },
      {
        id: "stem",
        type: "rect",
        x: 142,
        y: 125,
        width: 16,
        height: 145,
        rx: 5
      },
      {
        id: "leaf1",
        type: "path",
        d: "M145 190 C100 160 70 180 105 215 C125 235 145 220 145 190 Z"
      },
      {
        id: "leaf2",
        type: "path",
        d: "M155 220 C200 185 230 205 195 240 C175 258 155 245 155 220 Z"
      }
    ]
  },


  {
    id: "butterfly",
    title: "Butterfly",
    regions: [
      {
        id: "leftTopWing",
        type: "path",
        d: "M145 125 C90 35 30 65 65 125 C85 160 120 155 145 135 Z"
      },
      {
        id: "rightTopWing",
        type: "path",
        d: "M155 125 C210 35 270 65 235 125 C215 160 180 155 155 135 Z"
      },
      {
        id: "leftBottomWing",
        type: "path",
        d: "M140 135 C90 125 60 165 95 195 C120 215 140 180 145 145 Z"
      },
      {
        id: "rightBottomWing",
        type: "path",
        d: "M160 135 C210 125 240 165 205 195 C180 215 160 180 155 145 Z"
      },
      {
        id: "body",
        type: "rect",
        x: 145,
        y: 105,
        width: 10,
        height: 100,
        rx: 5
      },
      {
        id: "antennaLeft",
        type: "path",
        d: "M148 110 C125 75 110 75 100 55"
      },
      {
        id: "antennaRight",
        type: "path",
        d: "M152 110 C175 75 190 75 200 55"
      }
    ]
  },


  {
    id: "rainbow",
    title: "Rainbow",
    regions: [
      {
        id: "redBand",
        type: "path",
        d: "M45 210 A105 105 0 0 1 255 210 L235 210 A85 85 0 0 0 65 210 Z"
      },
      {
        id: "orangeBand",
        type: "path",
        d: "M65 210 A85 85 0 0 1 235 210 L215 210 A65 65 0 0 0 85 210 Z"
      },
      {
        id: "yellowBand",
        type: "path",
        d: "M85 210 A65 65 0 0 1 215 210 L195 210 A45 45 0 0 0 105 210 Z"
      },
      {
        id: "greenBand",
        type: "path",
        d: "M105 210 A45 45 0 0 1 195 210 L175 210 A25 25 0 0 0 125 210 Z"
      },
      {
        id: "leftCloud",
        type: "path",
        d: "M25 220 C25 195 55 190 70 205 C80 180 120 185 120 215 L120 235 L25 235 Z"
      },
      {
        id: "rightCloud",
        type: "path",
        d: "M180 215 C180 185 220 180 230 205 C250 190 275 205 275 225 L275 235 L180 235 Z"
      },
      {
        id: "sun",
        type: "circle",
        cx: 150,
        cy: 65,
        r: 22
      }
    ]
  },


  {
    id: "house",
    title: "House",
    regions: [
      {
        id: "roof",
        type: "path",
        d: "M45 125 L150 45 L255 125 Z"
      },
      {
        id: "wall",
        type: "rect",
        x: 70,
        y: 120,
        width: 160,
        height: 120
      },
      {
        id: "door",
        type: "rect",
        x: 135,
        y: 170,
        width: 35,
        height: 70
      },
      {
        id: "window1",
        type: "rect",
        x: 90,
        y: 150,
        width: 30,
        height: 30
      },
      {
        id: "window2",
        type: "rect",
        x: 185,
        y: 150,
        width: 30,
        height: 30
      },
      {
        id: "tree",
        type: "circle",
        cx: 40,
        cy: 160,
        r: 35
      },
      {
        id: "treeTrunk",
        type: "rect",
        x: 32,
        y: 185,
        width: 16,
        height: 55
      },
      {
        id: "grass",
        type: "rect",
        x: 0,
        y: 235,
        width: 300,
        height: 25
      }
    ]
  },


  {
    id: "fish",
    title: "Fish",
    regions: [
      {
        id: "body",
        type: "ellipse",
        cx: 145,
        cy: 140,
        rx: 75,
        ry: 45
      },
      {
        id: "tail",
        type: "path",
        d: "M75 140 L25 95 L25 185 Z"
      },
      {
        id: "topFin",
        type: "path",
        d: "M135 100 C145 60 175 65 180 105 Z"
      },
      {
        id: "bottomFin",
        type: "path",
        d: "M135 180 C145 220 175 215 180 175 Z"
      },
      {
        id: "eye",
        type: "circle",
        cx: 180,
        cy: 125,
        r: 8
      },
      {
        id: "bubble1",
        type: "circle",
        cx: 220,
        cy: 75,
        r: 10
      },
      {
        id: "bubble2",
        type: "circle",
        cx: 250,
        cy: 45,
        r: 7
      }
    ]
  },


  {
    id: "apple",
    title: "Apple",
    regions: [
      {
        id: "appleBody",
        type: "path",
        d: "M150 100 C100 60 45 100 60 165 C70 215 115 235 150 200 C185 235 230 215 240 165 C255 100 200 60 150 100 Z"
      },
      {
        id: "leaf",
        type: "path",
        d: "M155 80 C180 40 220 45 225 70 C195 90 175 90 155 80 Z"
      },
      {
        id: "stem",
        type: "rect",
        x: 145,
        y: 55,
        width: 12,
        height: 35,
        rx: 4
      },
      {
        id: "shine",
        type: "ellipse",
        cx: 105,
        cy: 125,
        rx: 12,
        ry: 22
      }
    ]
  }

];


/* =========================================================
   CORRECT COLORS
   ========================================================= */

const CORRECT_COLORS = {

  flower: {
    petal1: "#FF69B4",
    petal2: "#FF69B4",
    petal3: "#FF69B4",
    petal4: "#FF69B4",
    center: "#FFD93D",
    stem: "#4CAF50",
    leaf1: "#4CAF50",
    leaf2: "#4CAF50"
  },

  butterfly: {
    leftTopWing: "#9B5DE5",
    rightTopWing: "#9B5DE5",
    leftBottomWing: "#FF69B4",
    rightBottomWing: "#FF69B4",
    body: "#000000",
    antennaLeft: "#000000",
    antennaRight: "#000000"
  },

  rainbow: {
    redBand: "#FF4D4D",
    orangeBand: "#FF9F43",
    yellowBand: "#FFD93D",
    greenBand: "#4CAF50",
    leftCloud: "#FFFFFF",
    rightCloud: "#FFFFFF",
    sun: "#FFD93D"
  },

  house: {
    roof: "#FF4D4D",
    wall: "#FFD93D",
    door: "#8B5A2B",
    window1: "#A5D8FF",
    window2: "#A5D8FF",
    tree: "#4CAF50",
    treeTrunk: "#8B5A2B",
    grass: "#4CAF50"
  },

  fish: {
    body: "#4D96FF",
    tail: "#FF9F43",
    topFin: "#FF9F43",
    bottomFin: "#FF9F43",
    eye: "#000000",
    bubble1: "#A5D8FF",
    bubble2: "#A5D8FF"
  },

  apple: {
    appleBody: "#FF4D4D",
    leaf: "#4CAF50",
    stem: "#8B5A2B",
    shine: "#FFFFFF"
  }

};


/* =========================================================
   SAVE SETTINGS
   ========================================================= */

const SAVE_KEY = "colorAndPaintFinal_v1";


/* =========================================================
   GAME STATE
   ========================================================= */

const state = {
  pictureIndex: 0,
  colors: {},
  score: 0,
  challengeMode: false,
  challengeTargets: {},
  challengeSequence: [],
  challengePosition: 0,
  selectedColor: PALETTE[0].hex,
  history: []
};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const svgEl = document.getElementById("coloring-svg");

const paletteGrid =
  document.getElementById("palette") ||
  document.getElementById("palette-grid");

const galleryGrid =
  document.getElementById("gallery") ||
  document.getElementById("gallery-grid");

const selectedColorLabel =
  document.getElementById("selected-color-label") ||
  document.getElementById("selected-color");

const levelValue =
  document.getElementById("level") ||
  document.getElementById("level-value");

const progressFill =
  document.getElementById("progress-fill");

const progressValue =
  document.getElementById("progress") ||
  document.getElementById("progress-value");

const coloredCountEl =
  document.getElementById("areas-colored") ||
  document.getElementById("colored-count");

const totalCountEl =
  document.getElementById("total-count");

const scoreValue =
  document.getElementById("score") ||
  document.getElementById("score-value");

const completionOverlay =
  document.getElementById("completion-overlay") ||
  document.getElementById("completion");

const toastEl =
  document.getElementById("toast");

const referencePanel =
  document.getElementById("reference-panel");

const challengeBanner =
  document.getElementById("challenge-banner");

const challengeText =
  document.getElementById("challenge-text");

const paintBtn =
  document.getElementById("paint-btn");

const eraserBtn =
  document.getElementById("eraser-btn");

const challengeBtn =
  document.getElementById("challenge-btn");

const resetBtn =
  document.getElementById("reset-btn");

const newPictureBtn =
  document.getElementById("new-picture-btn");

const clearProgressBtn =
  document.getElementById("clear-progress-btn");

const nextPictureBtn =
  document.getElementById("next-picture-btn");

const closeCompletionBtn =
  document.getElementById("close-completion-btn");


/* =========================================================
   INITIALIZATION
   ========================================================= */

function init() {

  hideCompletion();

  buildPalette();

  buildGallery();

  attachControlEvents();

  const restored = loadFromStorage();

  if (restored) {

    state.pictureIndex =
      restored.pictureIndex || 0;

    state.colors =
      restored.colors || {};

    state.score =
      restored.score || 0;

  }

  loadPicture(state.pictureIndex, !restored);

  applyStoredColors();

  updateHUD();

}


/* =========================================================
   PALETTE
   ========================================================= */

function buildPalette() {

  if (!paletteGrid) return;

  paletteGrid.innerHTML = "";

  PALETTE.forEach((color) => {

    const button = document.createElement("button");

    button.type = "button";

    button.className = "color-btn";

    button.dataset.color = color.hex;

    button.title = color.name;

    button.style.backgroundColor = color.hex;

    button.innerHTML = `
      <span class="color-swatch"></span>
      <span class="color-name">${color.name}</span>
    `;

    button.addEventListener("click", () => {

      state.selectedColor = color.hex;

      updateSelectedColor();

      document
        .querySelectorAll(".color-btn")
        .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

    });

    paletteGrid.appendChild(button);

  });

  updateSelectedColor();

}


function updateSelectedColor() {

  if (selectedColorLabel) {

    const selected = PALETTE.find(
      c => c.hex === state.selectedColor
    );

    selectedColorLabel.textContent =
      selected ? selected.name : "Color";

  }

  document
    .querySelectorAll(".color-btn")
    .forEach(btn => {

      btn.classList.toggle(
        "selected",
        btn.dataset.color === state.selectedColor
      );

    });

}


/* =========================================================
   GALLERY
   ========================================================= */

function buildGallery() {

  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  PICTURES.forEach((picture, index) => {

    const card = document.createElement("button");

    card.type = "button";

    card.className = "gallery-card";

    card.innerHTML = `
      <div class="gallery-preview">
        ${createThumbnailSVG(picture)}
      </div>
      <div class="gallery-title">
        ${picture.title}
      </div>
    `;

    card.addEventListener("click", () => {

      loadPicture(index, true);

    });

    galleryGrid.appendChild(card);

  });

}


function createThumbnailSVG(picture) {

  let html = `
    <svg viewBox="0 0 300 270"
         xmlns="http://www.w3.org/2000/svg">
  `;

  picture.regions.forEach(region => {

    html +=
      regionToSVG(region, "#F5F5F5", "#222");

  });

  html += "</svg>";

  return html;

}


/* =========================================================
   LOAD PICTURE
   ========================================================= */

function loadPicture(index, resetPicture = true) {

  if (index < 0) {
    index = 0;
  }

  if (index >= PICTURES.length) {
    index = 0;
  }

  state.pictureIndex = index;

  const picture = PICTURES[index];

  if (resetPicture) {

    state.colors = {};

    state.history = [];

  }

  renderPicture();

  buildReferencePanel();

  updateHUD();

  saveToStorage();

}


/* =========================================================
   RENDER MAIN PICTURE
   ========================================================= */

function renderPicture() {

  if (!svgEl) return;

  const picture = PICTURES[state.pictureIndex];

  svgEl.innerHTML = "";

  svgEl.setAttribute(
    "viewBox",
    "0 0 300 270"
  );

  picture.regions.forEach(region => {

    const currentColor =
      state.colors[region.id];

    const element = createSVGElement(region);

    element.classList.add("paint-region");

    element.dataset.regionId = region.id;

    element.setAttribute(
      "fill",
      currentColor || "#FFFFFF"
    );

    if (
      region.type === "path" &&
      !currentColor
    ) {

      element.setAttribute(
        "fill",
        "#FFFFFF"
      );

    }

    element.setAttribute(
      "stroke",
      "#222"
    );

    element.setAttribute(
      "stroke-width",
      "2"
    );

    element.style.cursor = "pointer";

    element.addEventListener(
      "click",
      handleRegionClick
    );

    svgEl.appendChild(element);

  });

}


/* =========================================================
   CREATE SVG ELEMENT
   ========================================================= */

function createSVGElement(region) {

  const NS =
    "http://www.w3.org/2000/svg";

  let element;

  switch (region.type) {

    case "circle":

      element =
        document.createElementNS(NS, "circle");

      element.setAttribute("cx", region.cx);
      element.setAttribute("cy", region.cy);
      element.setAttribute("r", region.r);

      break;


    case "ellipse":

      element =
        document.createElementNS(NS, "ellipse");

      element.setAttribute("cx", region.cx);
      element.setAttribute("cy", region.cy);
      element.setAttribute("rx", region.rx);
      element.setAttribute("ry", region.ry);

      break;


    case "rect":

      element =
        document.createElementNS(NS, "rect");

      element.setAttribute("x", region.x);
      element.setAttribute("y", region.y);
      element.setAttribute("width", region.width);
      element.setAttribute("height", region.height);

      if (region.rx) {

        element.setAttribute(
          "rx",
          region.rx
        );

      }

      break;


    case "path":

      element =
        document.createElementNS(NS, "path");

      element.setAttribute(
        "d",
        region.d
      );

      break;

  }

  return element;

}


/* =========================================================
   REGION TO SVG STRING
   ========================================================= */

function regionToSVG(region, fill, stroke) {

  switch (region.type) {

    case "circle":

      return `
        <circle
          cx="${region.cx}"
          cy="${region.cy}"
          r="${region.r}"
          fill="${fill}"
          stroke="${stroke}"
          stroke-width="2"
        />
      `;


    case "ellipse":

      return `
        <ellipse
          cx="${region.cx}"
          cy="${region.cy}"
          rx="${region.rx}"
          ry="${region.ry}"
          fill="${fill}"
          stroke="${stroke}"
          stroke-width="2"
        />
      `;


    case "rect":

      return `
        <rect
          x="${region.x}"
          y="${region.y}"
          width="${region.width}"
          height="${region.height}"
          rx="${region.rx || 0}"
          fill="${fill}"
          stroke="${stroke}"
          stroke-width="2"
        />
      `;


    case "path":

      return `
        <path
          d="${region.d}"
          fill="${fill}"
          stroke="${stroke}"
          stroke-width="2"
        />
      `;

  }

  return "";

}


/* =========================================================
   REFERENCE PICTURE
   ========================================================= */

function buildReferencePanel() {

  if (!referencePanel) return;

  const picture =
    PICTURES[state.pictureIndex];

  const colors =
    CORRECT_COLORS[picture.id] || {};

  let html = `
    <div class="reference-title">
      Reference
    </div>

    <svg
      viewBox="0 0 300 270"
      xmlns="http://www.w3.org/2000/svg"
      class="reference-svg"
    >
  `;

  picture.regions.forEach(region => {

    const color =
      colors[region.id] || "#FFFFFF";

    html +=
      regionToSVG(
        region,
        color,
        "#222"
      );

  });

  html += `
    </svg>
  `;

  referencePanel.innerHTML = html;

}


/* =========================================================
   PAINTING
   ========================================================= */

function handleRegionClick(event) {

  const regionId =
    event.currentTarget.dataset.regionId;

  if (!regionId) return;

  if (state.selectedColor === null) return;

  const picture =
    PICTURES[state.pictureIndex];

  const correctColor =
    CORRECT_COLORS[picture.id]?.[regionId];

  const selectedColor =
    state.selectedColor;


  /* -------------------------------------------------------
     SAVE OLD COLOR
     ------------------------------------------------------- */

  const oldColor =
    state.colors[regionId] || null;


  /* -------------------------------------------------------
     APPLY COLOR
     ------------------------------------------------------- */

  state.colors[regionId] =
    selectedColor;


  state.history.push({
    regionId,
    oldColor,
    newColor: selectedColor
  });


  /* -------------------------------------------------------
     CHECK CORRECT COLOR
     ------------------------------------------------------- */

  if (
    normalizeColor(selectedColor) ===
    normalizeColor(correctColor)
  ) {

    showToast("Correct color! +points");

    spawnSparkle(event);

  } else {

    showToast("Wrong color — no points");

  }


  renderPicture();

  updateScore();

  updateHUD();

  checkCompletion();

  saveToStorage();

}


/* =========================================================
   COLOR NORMALIZATION
   ========================================================= */

function normalizeColor(color) {

  if (!color) return "";

  return color
    .trim()
    .toUpperCase();

}


/* =========================================================
   SCORE
   ========================================================= */

function updateScore() {

  const picture =
    PICTURES[state.pictureIndex];

  const correct =
    CORRECT_COLORS[picture.id] || {};

  const total =
    picture.regions.length;

  let correctCount = 0;

  picture.regions.forEach(region => {

    const painted =
      state.colors[region.id];

    const expected =
      correct[region.id];

    if (
      painted &&
      normalizeColor(painted) ===
      normalizeColor(expected)
    ) {

      correctCount++;

    }

  });


  /* Score is always out of 100 */

  state.score =
    Math.round(
      (correctCount / total) * 100
    );


  if (scoreValue) {

    scoreValue.textContent =
      state.score;

  }

}


/* =========================================================
   HUD
   ========================================================= */

function updateHUD() {

  const picture =
    PICTURES[state.pictureIndex];

  const total =
    picture.regions.length;

  let colored = 0;

  picture.regions.forEach(region => {

    if (state.colors[region.id]) {

      colored++;

    }

  });


  const progress =
    total === 0
      ? 0
      : Math.round(
          (colored / total) * 100
        );


  if (levelValue) {

    levelValue.textContent =
      state.pictureIndex + 1;

  }


  if (coloredCountEl) {

    coloredCountEl.textContent =
      colored;

  }


  if (totalCountEl) {

    totalCountEl.textContent =
      total;

  }


  if (progressValue) {

    progressValue.textContent =
      progress + "%";

  }


  if (progressFill) {

    progressFill.style.width =
      progress + "%";

  }


  updateScore();

}


/* =========================================================
   COMPLETION
   ========================================================= */

function checkCompletion() {

  const picture =
    PICTURES[state.pictureIndex];

  const total =
    picture.regions.length;

  const colored =
    picture.regions.filter(
      region =>
        !!state.colors[region.id]
    ).length;


  if (colored !== total) {

    return;

  }


  showCompletion();

}


function showCompletion() {

  updateScore();

  if (!completionOverlay) return;

  completionOverlay.hidden = false;

  completionOverlay.style.display =
    "flex";

  const finalScore =
    completionOverlay.querySelector(
      ".final-score"
    );

  if (finalScore) {

    finalScore.textContent =
      state.score + "/100";

  }

}


function hideCompletion() {

  if (!completionOverlay) return;

  completionOverlay.hidden = true;

  completionOverlay.style.display =
    "none";

}


/* =========================================================
   RESET
   ========================================================= */

function resetCurrentPicture() {

  state.colors = {};

  state.history = [];

  state.score = 0;

  hideCompletion();

  renderPicture();

  updateHUD();

  saveToStorage();

  showToast("Picture reset");

}


/* =========================================================
   NEW PICTURE
   ========================================================= */

function loadNextPicture() {

  let next =
    state.pictureIndex + 1;

  if (next >= PICTURES.length) {

    next = 0;

  }

  loadPicture(next, true);

  hideCompletion();

}


/* =========================================================
   CLEAR ALL PROGRESS
   ========================================================= */

function clearAllProgress() {

  localStorage.removeItem(SAVE_KEY);

  state.pictureIndex = 0;

  state.colors = {};

  state.score = 0;

  state.history = [];

  hideCompletion();

  loadPicture(0, true);

  showToast("All progress cleared");

}


/* =========================================================
   STORAGE
   ========================================================= */

function saveToStorage() {

  try {

    const data = {

      pictureIndex:
        state.pictureIndex,

      colors:
        state.colors,

      score:
        state.score

    };

    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(data)
    );

  } catch (error) {

    console.error(
      "Could not save progress:",
      error
    );

  }

}


function loadFromStorage() {

  try {

    const raw =
      localStorage.getItem(SAVE_KEY);

    if (!raw) {

      return null;

    }

    return JSON.parse(raw);

  } catch (error) {

    console.error(
      "Could not load progress:",
      error
    );

    return null;

  }

}


/* =========================================================
   APPLY STORED COLORS
   ========================================================= */

function applyStoredColors() {

  renderPicture();

  updateHUD();

}


/* =========================================================
   CONTROL EVENTS
   ========================================================= */

function attachControlEvents() {

  if (resetBtn) {

    resetBtn.addEventListener(
      "click",
      resetCurrentPicture
    );

  }


  if (newPictureBtn) {

    newPictureBtn.addEventListener(
      "click",
      loadNextPicture
    );

  }


  if (nextPictureBtn) {

    nextPictureBtn.addEventListener(
      "click",
      loadNextPicture
    );

  }


  if (clearProgressBtn) {

    clearProgressBtn.addEventListener(
      "click",
      clearAllProgress
    );

  }


  if (closeCompletionBtn) {

    closeCompletionBtn.addEventListener(
      "click",
      hideCompletion
    );

  }


  if (paintBtn) {

    paintBtn.addEventListener(
      "click",
      () => {

        showToast(
          "Select a color and click an area to paint"
        );

      }
    );

  }


  if (eraserBtn) {

    eraserBtn.addEventListener(
      "click",
      eraseSelectedArea
    );

  }


  if (challengeBtn) {

    challengeBtn.addEventListener(
      "click",
      startChallenge
    );

  }

}


/* =========================================================
   ERASER
   ========================================================= */

function eraseSelectedArea() {

  if (!svgEl) return;

  showToast(
    "Click a colored area to erase it"
  );

  svgEl
    .querySelectorAll(".paint-region")
    .forEach(element => {

      element.onclick = function () {

        const regionId =
          this.dataset.regionId;

        delete state.colors[regionId];

        renderPicture();

        updateHUD();

        saveToStorage();

        showToast(
          "Color removed"
        );

      };

    });

}


/* =========================================================
   CHALLENGE MODE
   ========================================================= */

function startChallenge() {

  const picture =
    PICTURES[state.pictureIndex];

  state.challengeMode = true;

  state.challengeTargets = {};

  picture.regions.forEach(region => {

    state.challengeTargets[
      region.id
    ] =
      CORRECT_COLORS[
        picture.id
      ][region.id];

  });


  if (challengeBanner) {

    challengeBanner.hidden = false;

  }


  if (challengeText) {

    challengeText.textContent =
      "Paint the picture using the reference colors.";

  }


  showToast(
    "Challenge started!"
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  if (!toastEl) return;

  toastEl.textContent =
    message;

  toastEl.hidden = false;

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(() => {

      toastEl.hidden = true;

    }, 1800);

}


/* =========================================================
   SPARKLE EFFECT
   ========================================================= */

function spawnSparkle(event) {

  const sparkleLayer =
    document.getElementById(
      "sparkle-layer"
    );

  if (!sparkleLayer) return;

  const sparkle =
    document.createElement("div");

  sparkle.className =
    "sparkle";

  sparkle.textContent =
    "✦";

  const rect =
    svgEl.getBoundingClientRect();

  sparkle.style.left =
    (event.clientX - rect.left) + "px";

  sparkle.style.top =
    (event.clientY - rect.top) + "px";

  sparkleLayer.appendChild(
    sparkle
  );

  setTimeout(() => {

    sparkle.remove();

  }, 800);

}


/* =========================================================
   COLOR BUTTON SAFETY
   ========================================================= */

if (paletteGrid) {

  paletteGrid.style.display =
    "grid";

}


/* =========================================================
   START GAME
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);
