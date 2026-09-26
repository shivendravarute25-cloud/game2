/* =========================================================
   COLOR & PAINT - FINAL VERSION
   Reference Picture + Correct Color Scoring
   ========================================================= */

const SVG_NS = "http://www.w3.org/2000/svg";
const SAVE_KEY = "colorAndPaintFinal_v1";

/* =========================================================
   COLOR PALETTE
   ========================================================= */

const PALETTE = [
  { name: "Red", hex: "#FF6B6B" },
  { name: "Pink", hex: "#FF8FB1" },
  { name: "Orange", hex: "#FFA94D" },
  { name: "Yellow", hex: "#FFD93D" },
  { name: "Green", hex: "#6BCB77" },
  { name: "Light Green", hex: "#B2F2BB" },
  { name: "Blue", hex: "#4FC3F7" },
  { name: "Sky Blue", hex: "#A5D8FF" },
  { name: "Purple", hex: "#9775FA" },
  { name: "Violet", hex: "#DA77F2" },
  { name: "Brown", hex: "#A97455" },
  { name: "Black", hex: "#2B2B2B" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#ADB5BD" }
];


/* =========================================================
   PICTURES
   ========================================================= */

const PICTURES = [

  {
    id: "flower",
    name: "Flower",
    emoji: "🌸",
    viewBox: "0 0 400 400",

    regions: [
      {
        id: "stem",
        label: "stem",
        tag: "rect",
        attrs: {
          x: 190,
          y: 220,
          width: 20,
          height: 150,
          rx: 6
        }
      },

      {
        id: "leaf1",
        label: "left leaf",
        tag: "ellipse",
        attrs: {
          cx: 160,
          cy: 292,
          rx: 36,
          ry: 16,
          transform: "rotate(-30 160 292)"
        }
      },

      {
        id: "leaf2",
        label: "right leaf",
        tag: "ellipse",
        attrs: {
          cx: 240,
          cy: 292,
          rx: 36,
          ry: 16,
          transform: "rotate(30 240 292)"
        }
      },

      {
        id: "petal1",
        label: "top petal",
        tag: "circle",
        attrs: {
          cx: 200,
          cy: 80,
          r: 38
        }
      },

      {
        id: "petal2",
        label: "upper right petal",
        tag: "circle",
        attrs: {
          cx: 266,
          cy: 128,
          r: 38
        }
      },

      {
        id: "petal3",
        label: "lower right petal",
        tag: "circle",
        attrs: {
          cx: 241,
          cy: 207,
          r: 38
        }
      },

      {
        id: "petal4",
        label: "lower left petal",
        tag: "circle",
        attrs: {
          cx: 159,
          cy: 207,
          r: 38
        }
      },

      {
        id: "petal5",
        label: "upper left petal",
        tag: "circle",
        attrs: {
          cx: 134,
          cy: 128,
          r: 38
        }
      },

      {
        id: "center",
        label: "flower center",
        tag: "circle",
        attrs: {
          cx: 200,
          cy: 150,
          r: 34
        }
      }
    ]
  },


  {
    id: "butterfly",
    name: "Butterfly",
    emoji: "🦋",
    viewBox: "0 0 400 400",

    regions: [
      {
        id: "wing-tl",
        label: "top left wing",
        tag: "ellipse",
        attrs: {
          cx: 138,
          cy: 148,
          rx: 72,
          ry: 58
        }
      },

      {
        id: "wing-tr",
        label: "top right wing",
        tag: "ellipse",
        attrs: {
          cx: 262,
          cy: 148,
          rx: 72,
          ry: 58
        }
      },

      {
        id: "wing-bl",
        label: "bottom left wing",
        tag: "ellipse",
        attrs: {
          cx: 152,
          cy: 252,
          rx: 55,
          ry: 46
        }
      },

      {
        id: "wing-br",
        label: "bottom right wing",
        tag: "ellipse",
        attrs: {
          cx: 248,
          cy: 252,
          rx: 55,
          ry: 46
        }
      },

      {
        id: "antenna-l",
        label: "left antenna",
        tag: "path",
        attrs: {
          d: "M195,110 L172,64 L182,60 L200,104 Z"
        }
      },

      {
        id: "antenna-r",
        label: "right antenna",
        tag: "path",
        attrs: {
          d: "M205,110 L228,64 L218,60 L200,104 Z"
        }
      },

      {
        id: "body",
        label: "body",
        tag: "ellipse",
        attrs: {
          cx: 200,
          cy: 200,
          rx: 14,
          ry: 92
        }
      }
    ]
  },


  {
    id: "rainbow",
    name: "Rainbow",
    emoji: "🌈",
    viewBox: "0 0 400 320",

    regions: [
      {
        id: "band1",
        label: "outer rainbow band",
        tag: "path",
        attrs: {
          d: "M30,300 A170,170 0 0 1 370,300",
          "stroke-width": 32,
          fill: "none"
        },
        colorTarget: "stroke"
      },

      {
        id: "band2",
        label: "second rainbow band",
        tag: "path",
        attrs: {
          d: "M60,300 A140,140 0 0 1 340,300",
          "stroke-width": 32,
          fill: "none"
        },
        colorTarget: "stroke"
      },

      {
        id: "band3",
        label: "third rainbow band",
        tag: "path",
        attrs: {
          d: "M90,300 A110,110 0 0 1 310,300",
          "stroke-width": 32,
          fill: "none"
        },
        colorTarget: "stroke"
      },

      {
        id: "band4",
        label: "inner rainbow band",
        tag: "path",
        attrs: {
          d: "M120,300 A80,80 0 0 1 280,300",
          "stroke-width": 32,
          fill: "none"
        },
        colorTarget: "stroke"
      },

      {
        id: "cloud1",
        label: "left cloud",
        tag: "ellipse",
        attrs: {
          cx: 65,
          cy: 95,
          rx: 52,
          ry: 27
        }
      },

      {
        id: "cloud2",
        label: "right cloud",
        tag: "ellipse",
        attrs: {
          cx: 60,
          cy: 230,
          rx: 46,
          ry: 22
        }
      },

      {
        id: "sun",
        label: "sun",
        tag: "circle",
        attrs: {
          cx: 335,
          cy: 75,
          r: 36
        }
      }
    ]
  },


  {
    id: "house",
    name: "House",
    emoji: "🏠",
    viewBox: "0 0 400 400",

    regions: [
      {
        id: "roof",
        label: "roof",
        tag: "polygon",
        attrs: {
          points: "70,180 200,80 330,180"
        }
      },

      {
        id: "wall",
        label: "walls",
        tag: "rect",
        attrs: {
          x: 90,
          y: 180,
          width: 220,
          height: 160
        }
      },

      {
        id: "door",
        label: "door",
        tag: "rect",
        attrs: {
          x: 180,
          y: 258,
          width: 50,
          height: 82,
          rx: 4
        }
      },

      {
        id: "window-l",
        label: "left window",
        tag: "rect",
        attrs: {
          x: 112,
          y: 202,
          width: 48,
          height: 48,
          rx: 4
        }
      },

      {
        id: "window-r",
        label: "right window",
        tag: "rect",
        attrs: {
          x: 240,
          y: 202,
          width: 48,
          height: 48,
          rx: 4
        }
      },

      {
        id: "tree-crown",
        label: "tree",
        tag: "circle",
        attrs: {
          cx: 352,
          cy: 250,
          r: 38
        }
      },

      {
        id: "tree-trunk",
        label: "tree trunk",
        tag: "rect",
        attrs: {
          x: 342,
          y: 288,
          width: 20,
          height: 48
        }
      },

      {
        id: "grass",
        label: "grass",
        tag: "rect",
        attrs: {
          x: 0,
          y: 340,
          width: 400,
          height: 60
        }
      }
    ]
  },


  {
    id: "fish",
    name: "Fish",
    emoji: "🐟",
    viewBox: "0 0 400 300",

    regions: [
      {
        id: "tail",
        label: "tail",
        tag: "polygon",
        attrs: {
          points: "292,150 362,100 362,200"
        }
      },

      {
        id: "fin-top",
        label: "top fin",
        tag: "polygon",
        attrs: {
          points: "150,90 190,40 220,92"
        }
      },

      {
        id: "fin-bottom",
        label: "bottom fin",
        tag: "polygon",
        attrs: {
          points: "150,210 190,262 220,208"
        }
      },

      {
        id: "body",
        label: "body",
        tag: "ellipse",
        attrs: {
          cx: 180,
          cy: 150,
          rx: 112,
          ry: 70
        }
      },

      {
        id: "eye",
        label: "eye",
        tag: "circle",
        attrs: {
          cx: 118,
          cy: 128,
          r: 13
        }
      },

      {
        id: "bubble1",
        label: "big bubble",
        tag: "circle",
        attrs: {
          cx: 340,
          cy: 58,
          r: 11
        }
      },

      {
        id: "bubble2",
        label: "medium bubble",
        tag: "circle",
        attrs: {
          cx: 366,
          cy: 90,
          r: 7
        }
      },

      {
        id: "bubble3",
        label: "small bubble",
        tag: "circle",
        attrs: {
          cx: 318,
          cy: 38,
          r: 6
        }
      }
    ]
  },


  {
    id: "apple",
    name: "Apple",
    emoji: "🍎",
    viewBox: "0 0 300 300",

    regions: [
      {
        id: "apple-left",
        label: "left side of apple",
        tag: "path",
        attrs: {
          d: "M150,90 C95,55 35,95 40,155 C45,215 95,255 150,255 L150,90 Z"
        }
      },

      {
        id: "apple-right",
        label: "right side of apple",
        tag: "path",
        attrs: {
          d: "M150,90 C205,55 265,95 260,155 C255,215 205,255 150,255 L150,90 Z"
        }
      },

      {
        id: "leaf",
        label: "leaf",
        tag: "path",
        attrs: {
          d: "M160,58 C182,36 206,46 200,68 C194,90 166,86 160,58 Z"
        }
      },

      {
        id: "stem",
        label: "stem",
        tag: "rect",
        attrs: {
          x: 144,
          y: 36,
          width: 12,
          height: 34,
          rx: 4
        }
      },

      {
        id: "shine",
        label: "shine spot",
        tag: "ellipse",
        attrs: {
          cx: 108,
          cy: 120,
          rx: 14,
          ry: 22,
          transform: "rotate(-20 108 120)"
        }
      }
    ]
  }
];


/* =========================================================
   REFERENCE COLORS
   ========================================================= */

const REFERENCE_COLORS = {

  flower: {
    stem: "Green",
    leaf1: "Green",
    leaf2: "Green",
    petal1: "Pink",
    petal2: "Pink",
    petal3: "Pink",
    petal4: "Pink",
    petal5: "Pink",
    center: "Yellow"
  },

  butterfly: {
    "wing-tl": "Purple",
    "wing-tr": "Purple",
    "wing-bl": "Pink",
    "wing-br": "Pink",
    "antenna-l": "Black",
    "antenna-r": "Black",
    body: "Black"
  },

  rainbow: {
    band1: "Red",
    band2: "Orange",
    band3: "Yellow",
    band4: "Green",
    cloud1: "White",
    cloud2: "White",
    sun: "Yellow"
  },

  house: {
    roof: "Red",
    wall: "Yellow",
    door: "Brown",
    "window-l": "Sky Blue",
    "window-r": "Sky Blue",
    "tree-crown": "Green",
    "tree-trunk": "Brown",
    grass: "Green"
  },

  fish: {
    tail: "Orange",
    "fin-top": "Orange",
    "fin-bottom": "Orange",
    body: "Blue",
    eye: "Black",
    bubble1: "Sky Blue",
    bubble2: "Sky Blue",
    bubble3: "Sky Blue"
  },

  apple: {
    "apple-left": "Red",
    "apple-right": "Red",
    leaf: "Green",
    stem: "Brown",
    shine: "White"
  }
};


/* =========================================================
   GAME STATE
   ========================================================= */

let state = {
  pictureIndex: 0,
  selectedColorHex: null,
  selectedColorName: null,
  mode: "paint",
  colors: {},
  correctRegions: {},
  score: 0,
  challengeMode: false
};


/* =========================================================
   DOM VARIABLES
   ========================================================= */

let svgEl;
let paletteGrid;
let galleryGrid;
let selectedColorLabel;
let levelValue;
let progressFill;
let progressValue;
let coloredCountEl;
let totalCountEl;
let scoreValue;
let paintBtn;
let eraserBtn;
let challengeBtn;
let challengeBanner;
let challengeText;
let resetBtn;
let newPictureBtn;
let clearProgressBtn;
let completionOverlay;
let finalScoreEl;
let nextPictureBtn;
let sparkleLayer;
let confettiLayer;
let toastEl;
let referenceSvgEl;


/* =========================================================
   INITIALIZE
   ========================================================= */

function init() {

  svgEl = document.getElementById("coloring-svg");
  paletteGrid = document.getElementById("palette-grid");
  galleryGrid = document.getElementById("gallery-grid");

  selectedColorLabel =
    document.getElementById("selected-color-label");

  levelValue =
    document.getElementById("level-value");

  progressFill =
    document.getElementById("progress-fill");

  progressValue =
    document.getElementById("progress-value");

  coloredCountEl =
    document.getElementById("colored-count");

  totalCountEl =
    document.getElementById("total-count");

  scoreValue =
    document.getElementById("score-value");

  paintBtn =
    document.getElementById("paint-btn");

  eraserBtn =
    document.getElementById("eraser-btn");

  challengeBtn =
    document.getElementById("challenge-btn");

  challengeBanner =
    document.getElementById("challenge-banner");

  challengeText =
    document.getElementById("challenge-text");

  resetBtn =
    document.getElementById("reset-btn");

  newPictureBtn =
    document.getElementById("new-picture-btn");

  clearProgressBtn =
    document.getElementById("clear-progress-btn");

  completionOverlay =
    document.getElementById("completion-overlay");

  finalScoreEl =
    document.getElementById("final-score");

  nextPictureBtn =
    document.getElementById("next-picture-btn");

  sparkleLayer =
    document.getElementById("sparkle-layer");

  confettiLayer =
    document.getElementById("confetti-layer");

  toastEl =
    document.getElementById("toast");


  buildPalette();
  buildGallery();
  buildReferencePanel();
  attachEvents();


  const saved =
    loadGame();


  if (saved) {

    state.pictureIndex =
      Number.isInteger(saved.pictureIndex)
        ? saved.pictureIndex
        : 0;

    state.colors =
      saved.colors || {};

    state.correctRegions =
      saved.correctRegions || {};

    state.score =
      saved.score || 0;

  }


  loadPicture(
    state.pictureIndex,
    false
  );


  /* Always start with completion popup hidden */
  completionOverlay.hidden = true;

  updateHUD();
}


/* =========================================================
   CURRENT PICTURE
   ========================================================= */

function currentPicture() {
  return PICTURES[state.pictureIndex];
}


/* =========================================================
   PALETTE
   ========================================================= */

function buildPalette() {

  paletteGrid.innerHTML = "";

  PALETTE.forEach(color => {

    const button =
      document.createElement("button");

    button.className =
      "color-swatch";

    button.style.background =
      color.hex;

    button.dataset.color =
      color.hex;

    button.dataset.name =
      color.name;

    button.setAttribute(
      "aria-label",
      "Select " + color.name
    );

    button.addEventListener(
      "click",
      () => selectColor(color)
    );

    paletteGrid.appendChild(button);
  });
}


function selectColor(color) {

  state.selectedColorHex =
    color.hex;

  state.selectedColorName =
    color.name;

  state.mode =
    "paint";


  document
    .querySelectorAll(".color-swatch")
    .forEach(button => {

      button.classList.toggle(
        "selected",
        button.dataset.color === color.hex
      );

    });


  refreshModeButtons();


  selectedColorLabel.textContent =
    "Selected Color: " +
    color.name;
}


/* =========================================================
   GALLERY
   ========================================================= */

function buildGallery() {

  galleryGrid.innerHTML = "";

  PICTURES.forEach(
    (picture, index) => {

      const button =
        document.createElement("button");

      button.className =
        "gallery-item";

      button.setAttribute(
        "role",
        "option"
      );

      button.innerHTML =
        `<span class="emoji">
          ${picture.emoji}
        </span>
        <span>${picture.name}</span>`;


      button.addEventListener(
        "click",
        () => loadPicture(index, true)
      );


      galleryGrid.appendChild(button);
    }
  );


  refreshGallery();
}


function refreshGallery() {

  [...galleryGrid.children]
    .forEach(
      (button, index) => {

        button.classList.toggle(
          "active",
          index === state.pictureIndex
        );

      }
    );
}


/* =========================================================
   REFERENCE PANEL
   ========================================================= */

function buildReferencePanel() {

  if (
    document.getElementById(
      "reference-panel"
    )
  ) {
    return;
  }


  const originalParent =
    svgEl.parentElement;


  if (!originalParent) {
    return;
  }


  const wrapper =
    document.createElement("div");

  wrapper.id =
    "reference-and-color-wrap";

  wrapper.style.display =
    "grid";

  wrapper.style.gridTemplateColumns =
    "1fr 1fr";

  wrapper.style.gap =
    "20px";

  wrapper.style.width =
    "100%";

  wrapper.style.alignItems =
    "start";


  /* Reference */

  const referencePanel =
    document.createElement("div");

  referencePanel.id =
    "reference-panel";

  referencePanel.style.background =
    "#ffffff";

  referencePanel.style.borderRadius =
    "18px";

  referencePanel.style.padding =
    "15px";

  referencePanel.style.border =
    "2px solid #eeeeee";

  referencePanel.style.boxShadow =
    "0 8px 24px rgba(0,0,0,0.10)";

  referencePanel.style.textAlign =
    "center";


  const referenceTitle =
    document.createElement("div");

  referenceTitle.innerHTML =
    "🖼️ <b>REFERENCE</b>";

  referenceTitle.style.fontSize =
    "18px";

  referenceTitle.style.marginBottom =
    "10px";


  referenceSvgEl =
    document.createElementNS(
      SVG_NS,
      "svg"
    );

  referenceSvgEl.id =
    "reference-svg";

  referenceSvgEl.style.width =
    "100%";

  referenceSvgEl.style.height =
    "auto";

  referenceSvgEl.style.display =
    "block";

  referenceSvgEl.style.background =
    "#fafafa";

  referenceSvgEl.style.borderRadius =
    "12px";


  referencePanel.appendChild(
    referenceTitle
  );

  referencePanel.appendChild(
    referenceSvgEl
  );


  /* Coloring */

  const coloringPanel =
    document.createElement("div");

  const coloringTitle =
    document.createElement("div");

  coloringTitle.innerHTML =
    "🎨 <b>COLOR THIS</b>";

  coloringTitle.style.fontSize =
    "18px";

  coloringTitle.style.textAlign =
    "center";

  coloringTitle.style.marginBottom =
    "10px";


  coloringPanel.appendChild(
    coloringTitle
  );

  coloringPanel.appendChild(
    svgEl
  );


  wrapper.appendChild(
    referencePanel
  );

  wrapper.appendChild(
    coloringPanel
  );


  originalParent.replaceChild(
    wrapper,
    svgEl
  );
}


/* =========================================================
   LOAD PICTURE
   ========================================================= */

function loadPicture(index, resetColors) {

  if (
    index < 0 ||
    index >= PICTURES.length
  ) {
    index = 0;
  }


  state.pictureIndex =
    index;


  if (resetColors) {

    state.colors = {};
    state.correctRegions = {};
    state.score = 0;

  }


  completionOverlay.hidden =
    true;


  renderSVG();
  renderReferenceSVG();
  refreshGallery();
  updateHUD();
  saveGame();
}


/* =========================================================
   USER SVG
   ========================================================= */

function renderSVG() {

  const picture =
    currentPicture();


  svgEl.setAttribute(
    "viewBox",
    picture.viewBox
  );


  svgEl.innerHTML =
    "";


  picture.regions.forEach(
    region => {

      const element =
        document.createElementNS(
          SVG_NS,
          region.tag
        );


      Object.entries(
        region.attrs
      ).forEach(
        ([key, value]) => {

          element.setAttribute(
            key,
            value
          );

        }
      );


      element.classList.add(
        "region"
      );


      element.dataset.regionId =
        region.id;


      element.setAttribute(
        "tabindex",
        "0"
      );


      element.setAttribute(
        "role",
        "button"
      );


      element.setAttribute(
        "aria-label",
        region.label
      );


      const target =
        region.colorTarget === "stroke"
          ? "stroke"
          : "fill";


      const savedColor =
        state.colors[
          region.id
        ];


      if (target === "fill") {

        element.setAttribute(
          "fill",
          savedColor || "#FFFFFF"
        );

        element.setAttribute(
          "stroke",
          "#333333"
        );

        element.setAttribute(
          "stroke-width",
          "3"
        );

      } else {

        element.setAttribute(
          "stroke",
          savedColor || "#FFFFFF"
        );

        element.setAttribute(
          "stroke-linecap",
          "round"
        );

      }


      element.addEventListener(
        "click",
        event => {

          handleRegionClick(
            region,
            element,
            event
          );

        }
      );


      element.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            handleRegionClick(
              region,
              element,
              event
            );

          }

        }
      );


      svgEl.appendChild(
        element
      );

    }
  );
}


/* =========================================================
   REFERENCE SVG
   ========================================================= */

function renderReferenceSVG() {

  if (!referenceSvgEl) {
    return;
  }


  const picture =
    currentPicture();


  referenceSvgEl.setAttribute(
    "viewBox",
    picture.viewBox
  );


  referenceSvgEl.innerHTML =
    "";


  picture.regions.forEach(
    region => {

      const element =
        document.createElementNS(
          SVG_NS,
          region.tag
        );


      Object.entries(
        region.attrs
      ).forEach(
        ([key, value]) => {

          element.setAttribute(
            key,
            value
          );

        }
      );


      const correctColor =
        getCorrectColor(region);


      const paletteColor =
        PALETTE.find(
          color =>
            color.name ===
            correctColor
        );


      const hex =
        paletteColor
          ? paletteColor.hex
          : "#FFFFFF";


      const target =
        region.colorTarget === "stroke"
          ? "stroke"
          : "fill";


      element.setAttribute(
        target,
        hex
      );


      if (target === "fill") {

        element.setAttribute(
          "stroke",
          "#333333"
        );

        element.setAttribute(
          "stroke-width",
          "3"
        );

      } else {

        element.setAttribute(
          "stroke-linecap",
          "round"
        );

      }


      referenceSvgEl.appendChild(
        element
      );

    }
  );
}


/* =========================================================
   COLOR REGION
   ========================================================= */

function handleRegionClick(
  region,
  element,
  event
) {

  if (
    state.mode === "erase"
  ) {

    eraseRegion(
      region,
      element
    );

    return;
  }


  if (
    !state.selectedColorHex
  ) {

    showToast(
      "🎨 Pick a color first!"
    );

    return;
  }


  colorRegion(
    region,
    element,
    state.selectedColorHex
  );


  const correctColor =
    getCorrectColor(region);


  const isCorrect =
    state.selectedColorName ===
    correctColor;


  state.correctRegions[
    region.id
  ] = isCorrect;


  calculateScore();


  if (isCorrect) {

    showToast(
      "✅ Correct color!"
    );

  } else {

    showToast(
      "❌ Wrong color!"
    );

  }


  spawnSparkle(event);

  updateHUD();
  saveGame();

  checkCompletion();
}


function colorRegion(
  region,
  element,
  hex
) {

  const target =
    region.colorTarget === "stroke"
      ? "stroke"
      : "fill";


  element.setAttribute(
    target,
    hex
  );


  state.colors[
    region.id
  ] = hex;
}


/* =========================================================
   ERASER
   ========================================================= */

function eraseRegion(
  region,
  element
) {

  const target =
    region.colorTarget === "stroke"
      ? "stroke"
      : "fill";


  element.setAttribute(
    target,
    "#FFFFFF"
  );


  delete state.colors[
    region.id
  ];


  delete state.correctRegions[
    region.id
  ];


  calculateScore();
  updateHUD();
  saveGame();


  showToast(
    "🧹 Erased!"
  );
}


/* =========================================================
   GET CORRECT COLOR
   ========================================================= */

function getCorrectColor(region) {

  const picture =
    currentPicture();


  return (
    REFERENCE_COLORS[
      picture.id
    ] &&
    REFERENCE_COLORS[
      picture.id
    ][region.id]
  ) || null;
}


/* =========================================================
   SCORE
   ========================================================= */

function calculateScore() {

  const total =
    currentPicture().regions.length;


  const correct =
    Object.values(
      state.correctRegions
    ).filter(
      value => value === true
    ).length;


  if (total === 0) {

    state.score = 0;

    return;
  }


  state.score =
    Math.round(
      (correct / total) * 100
    );
}


/* =========================================================
   HUD
   ========================================================= */

function updateHUD() {

  calculateScore();


  const total =
    currentPicture().regions.length;


  const colored =
    Object.keys(
      state.colors
    ).length;


  const progress =
    total === 0
      ? 0
      : Math.round(
          (colored / total) * 100
        );


  levelValue.textContent =
    state.pictureIndex + 1;


  progressFill.style.width =
    progress + "%";


  progressValue.textContent =
    progress + "%";


  coloredCountEl.textContent =
    colored;


  totalCountEl.textContent =
    total;


  scoreValue.textContent =
    state.score;


  if (
    !state.selectedColorHex
  ) {

    selectedColorLabel.textContent =
      "Selected Color: none yet — pick one below!";

  } else {

    selectedColorLabel.textContent =
      "Selected Color: " +
      state.selectedColorName;

  }
}


/* =========================================================
   COMPLETION
   ========================================================= */

function checkCompletion() {

  const total =
    currentPicture().regions.length;


  const colored =
    Object.keys(
      state.colors
    ).length;


  if (
    total > 0 &&
    colored === total
  ) {

    calculateScore();


    finalScoreEl.textContent =
      state.score;


    setTimeout(
      () => {

        completionOverlay.hidden =
          false;

        spawnConfetti();

      },
      300
    );
  }
}


/* =========================================================
   MODES
   ========================================================= */

function refreshModeButtons() {

  paintBtn.classList.toggle(
    "active",
    state.mode === "paint"
  );


  eraserBtn.classList.toggle(
    "active",
    state.mode === "erase"
  );


  challengeBtn.classList.toggle(
    "active",
    state.challengeMode
  );


  paintBtn.setAttribute(
    "aria-pressed",
    state.mode === "paint"
  );


  eraserBtn.setAttribute(
    "aria-pressed",
    state.mode === "erase"
  );


  challengeBtn.setAttribute(
    "aria-pressed",
    state.challengeMode
  );
}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

function attachEvents() {

  paintBtn.addEventListener(
    "click",
    () => {

      state.mode =
        "paint";

      refreshModeButtons();

    }
  );


  eraserBtn.addEventListener(
    "click",
    () => {

      state.mode =
        "erase";

      refreshModeButtons();

      showToast(
        "🧹 Eraser selected"
      );

    }
  );


  challengeBtn.addEventListener(
    "click",
    () => {

      state.challengeMode =
        !state.challengeMode;


      refreshModeButtons();


      if (
        state.challengeMode
      ) {

        challengeBanner.hidden =
          false;

        showChallenge();

      } else {

        challengeBanner.hidden =
          true;

      }

    }
  );


  resetBtn.addEventListener(
    "click",
    resetPicture
  );


  newPictureBtn.addEventListener(
    "click",
    () => {

      let index;

      do {

        index =
          Math.floor(
            Math.random() *
            PICTURES.length
          );

      } while (
        index ===
        state.pictureIndex
      );


      loadPicture(
        index,
        true
      );


      showToast(
        "🎲 New Picture!"
      );

    }
  );


  clearProgressBtn.addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        SAVE_KEY
      );


      state.colors = {};
      state.correctRegions = {};
      state.score = 0;


      renderSVG();
      renderReferenceSVG();
      updateHUD();


      completionOverlay.hidden =
        true;


      showToast(
        "🗑 Progress cleared"
      );

    }
  );


  nextPictureBtn.addEventListener(
    "click",
    () => {

      completionOverlay.hidden =
        true;


      const nextIndex =
        (
          state.pictureIndex + 1
        ) %
        PICTURES.length;


      loadPicture(
        nextIndex,
        true
      );

    }
  );
}


/* =========================================================
   RESET
   ========================================================= */

function resetPicture() {

  state.colors = {};
  state.correctRegions = {};
  state.score = 0;


  completionOverlay.hidden =
    true;


  renderSVG();
  renderReferenceSVG();
  updateHUD();
  saveGame();


  showToast(
    "↻ Picture reset"
  );
}


/* =========================================================
   CHALLENGE
   ========================================================= */

function showChallenge() {

  const picture =
    currentPicture();


  const region =
    picture.regions.find(
      item =>
        !state.colors[item.id]
    );


  if (!region) {

    challengeBanner.hidden =
      true;

    return;
  }


  const color =
    getCorrectColor(region);


  challengeText.textContent =
    "Color the " +
    region.label +
    " " +
    color.toUpperCase() +
    ".";
}


/* =========================================================
   STORAGE
   ========================================================= */

function saveGame() {

  try {

    localStorage.setItem(
      SAVE_KEY,

      JSON.stringify({
        pictureIndex:
          state.pictureIndex,

        colors:
          state.colors,

        correctRegions:
          state.correctRegions,

        score:
          state.score
      })
    );

  } catch (error) {

    console.log(
      "Saving unavailable"
    );

  }
}


function loadGame() {

  try {

    const saved =
      localStorage.getItem(
        SAVE_KEY
      );


    if (!saved) {
      return null;
    }


    return JSON.parse(
      saved
    );

  } catch (error) {

    return null;

  }
}


/* =========================================================
   SPARKLE
   ========================================================= */

function spawnSparkle(event) {

  if (!sparkleLayer) {
    return;
  }


  const sparkle =
    document.createElement(
      "span"
    );


  sparkle.className =
    "sparkle";


  sparkle.textContent =
    "✨";


  sparkle.style.left =
    "50%";


  sparkle.style.top =
    "50%";


  sparkleLayer.appendChild(
    sparkle
  );


  setTimeout(
    () => sparkle.remove(),
    700
  );
}


/* =========================================================
   CONFETTI
   ========================================================= */

function spawnConfetti() {

  if (!confettiLayer) {
    return;
  }


  confettiLayer.innerHTML =
    "";


  const colors = [
    "#FF6B6B",
    "#FF8FB1",
    "#FFD93D",
    "#6BCB77",
    "#4FC3F7",
    "#9775FA",
    "#FFA94D"
  ];


  for (
    let i = 0;
    i < 60;
    i++
  ) {

    const piece =
      document.createElement(
        "span"
      );


    piece.className =
      "confetti-piece";


    piece.style.left =
      Math.random() * 100 +
      "%";


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.animationDuration =
      (
        2 +
        Math.random() * 1.5
      ) + "s";


    piece.style.animationDelay =
      (
        Math.random() * 0.4
      ) + "s";


    confettiLayer.appendChild(
      piece
    );

  }
}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(message) {

  if (!toastEl) {
    return;
  }


  toastEl.textContent =
    message;


  toastEl.hidden =
    false;


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toastEl.hidden =
          true;

      },
      1800
    );
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);
