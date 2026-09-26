Yes. You want the score to depend on whether the user chooses the correct color for each part of the picture, instead of simply giving points for coloring any region.

For example:

Picture part	Correct color	Points
🌳 Leaves	Green	+20
🌳 Trunk	Brown	+20
☀️ Sun	Yellow	+20
🌸 Flower	Pink	+20
☁️ Cloud	Blue/White	+20
Total		100

So if the player gets 4 out of 5 correct:

Score = 80/100

How we should implement it

Your JavaScript needs to store the correct color for every region.

For example:

const correctColors = {
    "region-1": "#6BCB77",  // Green
    "region-2": "#8B5A2B",  // Brown
    "region-3": "#FFD93D",  // Yellow
    "region-4": "#FF6FA5",  // Pink
    "region-5": "#FFFFFF"   // White
};

Then, when the player clicks a region:

function checkColor(regionId, selectedColor) {

    const correctColor = correctColors[regionId];

    if (selectedColor.toUpperCase() === correctColor.toUpperCase()) {
        score += 20;
        correctAnswers++;
    }

    updateScore();
}

And when the game finishes:

const finalScore = Math.round(
    (correctAnswers / totalRegions) * 100
);
But there is one important thing

I need to know which picture you are using and which colors are supposed to be correct.

Your current game code has the coloring regions, but I shouldn't randomly decide that, for example, a flower should be pink. The scoring needs to correspond to the actual intended colors of your picture.

So send me either:

Option 1: Upload the picture you're using.

Option 2: Send your current script.js and tell me the intended colors, like:

Sun → Yellow
Sky → Blue
Grass → Green
Tree trunk → Brown
Flower → Pink

Then I can give you the exact JavaScript code that you can paste into your GitHub game, including:

✅ Correct color = points
❌ Wrong color = no points
📊 Score out of 100
🎯 Percentage of correct colors
🎉 Completion screen
🔄 Try Again
🏆 Different messages based on score
now i will give you the code of the java then you will tell me where i have to make changes in that code

Yes. 👍

Send me your JavaScript (.js) code.

I will:

Go through your existing code.
Identify exactly where the scoring is currently calculated.
Tell you which lines/section to change.
Give you the replacement code that you can directly copy-paste.
Make the scoring work like this:
✅ Correct color for the image/region → points awarded
❌ Wrong color → 0 points
Final score based on how many regions were colored with the correct colors

Send the JavaScript code.

Pasted text(5).txt
Document

Yes, I checked your JavaScript code.

Your current scoring system does NOT check whether the selected color is correct. It gives points simply when a region is colored:

if (wasEmpty) {
    addRegionScore();
}

And addRegionScore() just adds points for coloring any region.

What we need to change

We will make it:

✅ Correct color → points
❌ Wrong color → 0 points
🏆 Final score → based on the number of correctly colored regions

For example:

Region	Correct color	User selects	Points
Flower stem	Green	Green	+10
Flower petal	Pink	Blue	0
Flower center	Yellow	Yellow	+10
Important

Your code already has a perfect place to store the correct color: inside each region in PICTURES. For example, currently your flower regions look like this:

{ id: "stem", label: "stem", tag: "rect", ... }
{ id: "petal1", label: "top petal", tag: "circle", ... }

We can change them to:

{ id: "stem", label: "stem", correctColor: "Green", tag: "rect", ... }

{ id: "petal1", label: "top petal", correctColor: "Pink", tag: "circle", ... }

Then the game can automatically check the selected color against correctColor.

I recommend we modify the code this way rather than creating a completely separate scoring system.

If you want, I can now give you the exact changes for your entire JavaScript file, including the correct colors for Flower, Butterfly, Rainbow, House, Fish, and Apple, so you can directly replace the code.

so now gibve me the new code si i can directly past there 
this 6 images are given to the game 
Pasted text(6).txt
Document

Absolutely. Below is a complete replacement script.js. Your index.html can stay exactly as it is.

This version fixes the main issue visible on your live page (0/0 and the completion popup) and includes the reference picture + correct-color scoring.

Delete everything currently inside script.js and paste this entire code:

/* =========================================================
   COLOR & PAINT
   Reference Picture + Correct Color Scoring
   ========================================================= */

const SVG_NS = "http://www.w3.org/2000/svg";

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

  /* ---------------- FLOWER ---------------- */

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


  /* ---------------- BUTTERFLY ---------------- */

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


  /* ---------------- RAINBOW ---------------- */

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


  /* ---------------- HOUSE ---------------- */

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


  /* ---------------- FISH ---------------- */

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


  /* ---------------- APPLE ---------------- */

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
   CORRECT COLORS
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

const SAVE_KEY = "colorAndPaintSave_v4";

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
   DOM
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
   INITIALIZATION
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

  const saved = loadGame();

  if (saved) {
    state = {
      ...state,
      ...saved
    };
  }

  loadPicture(state.pictureIndex, !saved);

  updateHUD();

  /* VERY IMPORTANT:
     Keep completion popup hidden when page starts. */
  completionOverlay.hidden = true;
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

    button.className = "color-swatch";

    button.style.backgroundColor =
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

  state.mode = "paint";

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

  PICTURES.forEach((picture, index) => {

    const button =
      document.createElement("button");

    button.className =
      "gallery-item";

    button.setAttribute(
      "role",
      "option"
    );

    button.innerHTML =
      `<span class="emoji">${picture.emoji}</span>
       <span>${picture.name}</span>`;

    button.addEventListener(
      "click",
      () => loadPicture(index, true)
    );

    galleryGrid.appendChild(button);
  });

  refreshGallery();
}


function refreshGallery() {

  [...galleryGrid.children]
    .forEach((button, index) => {

      button.classList.toggle(
        "active",
        index === state.pictureIndex
      );

    });
}


/* =========================================================
   REFERENCE PANEL
   ========================================================= */

function buildReferencePanel() {

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


  /* REFERENCE */

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

  referencePanel.style.boxShadow =
    "0 8px 24px rgba(0,0,0,0.10)";

  referencePanel.style.border =
    "2px solid #eeeeee";

  referencePanel.style.textAlign =
    "center";


  const title =
    document.createElement("div");

  title.innerHTML =
    "🖼️ <b>REFERENCE</b>";

  title.style.fontSize =
    "18px";

  title.style.marginBottom =
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


  referencePanel.appendChild(title);

  referencePanel.appendChild(
    referenceSvgEl
  );


  /* COLORING */

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

  coloringPanel.appendChild(svgEl);


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

  state.pictureIndex = index;

  if (resetColors) {
    state.colors = {};
    state.correctRegions = {};
    state.score = 0;
  }

  completionOverlay.hidden = true;

  renderSVG();
  renderReferenceSVG();

  refreshGallery();
  updateHUD();

  saveGame();
}


/* =========================================================
   DRAW USER SVG
   ========================================================= */

function renderSVG() {

  const picture =
    currentPicture();

  svgEl.setAttribute(
    "viewBox",
    picture.viewBox
  );

  svgEl.innerHTML = "";

  picture.regions.forEach(region => {

    const element =
      document.createElementNS(
        SVG_NS,
        region.tag
      );


    Object.entries(region.attrs)
      .forEach(([key, value]) => {

        element.setAttribute(
          key,
          value
        );

      });


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


    if (target === "fill") {

      element.setAttribute(
        "fill",
        state.colors[region.id] ||
        "#FFFFFF"
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
        state.colors[region.id] ||
        "#FFFFFF"
      );

      element.setAttribute(
        "stroke-linecap",
        "round"
      );

    }


    element.addEventListener(
      "click",
      event =>
        handleRegionClick(
          region,
          element,
          event
        )
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


    svgEl.appendChild(element);
  });
}


/* =========================================================
   DRAW REFERENCE SVG
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

  referenceSvgEl.innerHTML = "";


  picture.regions.forEach(region => {

    const element =
      document.createElementNS(
        SVG_NS,
        region.tag
      );


    Object.entries(region.attrs)
      .forEach(([key, value]) => {

        element.setAttribute(
          key,
          value
        );

      });


    const correctName =
      getCorrectColor(region);

    const paletteColor =
      PALETTE.find(
        color =>
          color.name === correctName
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

  });
}


/* =========================================================
   HANDLE COLORING
   ========================================================= */

function handleRegionClick(
  region,
  element,
  event
) {

  if (state.mode === "erase") {

    eraseRegion(
      region,
      element
    );

    return;
  }


  if (!state.selectedColorHex) {

    showToast(
      "Pick a color first! 🎨"
    );

    return;
  }


  colorRegion(
    region,
    element,
    state.selectedColorHex
  );


  const correctName =
    getCorrectColor(region);

  const isCorrect =
    state.selectedColorName ===
    correctName;


  state.correctRegions[
    region.id
  ] = isCorrect;


  calculateScore();


  if (isCorrect) {

    showToast(
      "✅ Correct color! +points"
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


/* =========================================================
   COLOR REGION
   ========================================================= */

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

  showToast("Erased!");
}


/* =========================================================
   CORRECT COLOR
   ========================================================= */

function getCorrectColor(region) {

  const picture =
    currentPicture();

  return (
    REFERENCE_COLORS[
      picture.id
    ]?.[
      region.id
    ] || null
  );
}


/* =========================================================
   SCORING
   ========================================================= */

function calculateScore() {

  const total =
    currentPicture().regions.length;

  const correct =
    Object.values(
      state.correctRegions
    ).filter(Boolean).length;


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


  if (!state.selectedColorHex) {

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
   EVENTS
   ========================================================= */

function attachEvents() {

  paintBtn.addEventListener(
    "click",
    () => {

      state.mode = "paint";

      refreshModeButtons();

    }
  );


  eraserBtn.addEventListener(
    "click",
    () => {

      state.mode = "erase";

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

      if (state.challengeMode) {

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

      let newIndex;

      do {

        newIndex =
          Math.floor(
            Math.random() *
            PICTURES.length
          );

      } while (
        newIndex === state.pictureIndex &&
        PICTURES.length > 1
      );


      loadPicture(
        newIndex,
        true
      );

      showToast(
        "🎲 New picture!"
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
        ) % PICTURES.length;


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

  const uncolored =
    picture.regions.find(
      region =>
        !state.colors[region.id]
    );


  if (!uncolored) {

    challengeBanner.hidden =
      true;

    return;
  }


  const color =
    getCorrectColor(
      uncolored
    );


  challengeText.textContent =
    "Color the " +
    uncolored.label +
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
      "Could not save game"
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

    return JSON.parse(saved);

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
      (2 + Math.random() * 1.5) +
      "s";

    piece.style.animationDelay =
      (Math.random() * 0.4) +
      "s";

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
After pasting

In GitHub:

script.js → Edit → Ctrl+A → paste the code → Commit changes.

Then wait about 30–60 seconds and refresh your game with Ctrl + F5.

You should then see:

🖼️ REFERENCE | 🎨 COLOR THIS

and underneath the picture:

Areas Colored 0/9 (or the appropriate number for that picture), instead of 0/0.

The reference colors are based on the color mapping already present in your uploaded JS.

give me your final java script so that i can use that 

Yes. Use the final script.js I gave above as the replacement for your current file.

Your current file already has the six pictures and correct-color mappings, so the replacement keeps those requirements.

Do this exactly:

Open GitHub → your game2 repository.
Open script.js.
Click ✏️ Edit.
Press Ctrl + A.
Delete everything.
Paste the complete JavaScript from my previous message.
Click Commit changes.
Wait about 1 minute.
Open your game and press Ctrl + F5.

You should get:

REFERENCE 🖼️ | 🎨 COLOR THIS

with:

6 pictures
colored reference
correct-color scoring
wrong-color detection
score out of 100
reset
new picture
next picture
palette
completion screen

Important: Don't paste the JavaScript into index.html. It must go into script.js.

give me the code 

Yes. Here is the complete final script.js. Replace everything in your current script.js with this.

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
After pasting

GitHub → script.js → Edit → Ctrl+A → paste → Commit changes.

Then wait around a minute and press Ctrl + F5 on your game.

Your current live page is showing Areas Colored 0/0, which is why this replacement specifically initializes and renders the picture data on startup.

Also, do not change your index.html for this version.

/* =========================================================
COLOR & PAINT — game logic
Pictures are stored as structured SVG region data so new
pictures can be added easily. Each region has:
id unique string id (must be unique per picture)
label human-readable name (used in Challenge Mode)
tag "path" | "circle" | "ellipse" | "rect" | "polygon"
attrs object of SVG attributes for that shape
colorTarget "fill" (default) or "stroke" — which attribute
gets painted (rainbow bands are stroked arcs)
========================================================= */

const PICTURES = [
{
id: "flower",
name: "Flower",
emoji: "🌸",
viewBox: "0 0 400 400",
regions: [
{ id: "stem", label: "stem", tag: "rect", attrs: { x: 190, y: 220, width: 20, height: 150, rx: 6 } },
{ id: "leaf1", label: "left leaf", tag: "ellipse", attrs: { cx: 160, cy: 292, rx: 36, ry: 16, transform: "rotate(-30 160 292)" } },
{ id: "leaf2", label: "right leaf", tag: "ellipse", attrs: { cx: 240, cy: 292, rx: 36, ry: 16, transform: "rotate(30 240 292)" } },
{ id: "petal1", label: "top petal", tag: "circle", attrs: { cx: 200, cy: 80, r: 38 } },
{ id: "petal2", label: "upper right petal", tag: "circle", attrs: { cx: 266, cy: 128, r: 38 } },
{ id: "petal3", label: "lower right petal", tag: "circle", attrs: { cx: 241, cy: 207, r: 38 } },
{ id: "petal4", label: "lower left petal", tag: "circle", attrs: { cx: 159, cy: 207, r: 38 } },
{ id: "petal5", label: "upper left petal", tag: "circle", attrs: { cx: 134, cy: 128, r: 38 } },
{ id: "center", label: "flower center", tag: "circle", attrs: { cx: 200, cy: 150, r: 34 } }
]
},
{
id: "butterfly",
name: "Butterfly",
emoji: "🦋",
viewBox: "0 0 400 400",
regions: [
{ id: "wing-tl", label: "top left wing", tag: "ellipse", attrs: { cx: 138, cy: 148, rx: 72, ry: 58 } },
{ id: "wing-tr", label: "top right wing", tag: "ellipse", attrs: { cx: 262, cy: 148, rx: 72, ry: 58 } },
{ id: "wing-bl", label: "bottom left wing", tag: "ellipse", attrs: { cx: 152, cy: 252, rx: 55, ry: 46 } },
{ id: "wing-br", label: "bottom right wing", tag: "ellipse", attrs: { cx: 248, cy: 252, rx: 55, ry: 46 } },
{ id: "antenna-l", label: "left antenna", tag: "path", attrs: { d: "M195,110 L172,64 L182,60 L200,104 Z" } },
{ id: "antenna-r", label: "right antenna", tag: "path", attrs: { d: "M205,110 L228,64 L218,60 L200,104 Z" } },
{ id: "body", label: "body", tag: "ellipse", attrs: { cx: 200, cy: 200, rx: 14, ry: 92 } }
]
},
{
id: "rainbow",
name: "Rainbow",
emoji: "🌈",
viewBox: "0 0 400 320",
regions: [
{ id: "band1", label: "outer rainbow band", tag: "path", attrs: { d: "M30,300 A170,170 0 0 1 370,300", "stroke-width": 32, fill: "none" }, colorTarget: "stroke" },
{ id: "band2", label: "second rainbow band", tag: "path", attrs: { d: "M60,300 A140,140 0 0 1 340,300", "stroke-width": 32, fill: "none" }, colorTarget: "stroke" },
{ id: "band3", label: "third rainbow band", tag: "path", attrs: { d: "M90,300 A110,110 0 0 1 310,300", "stroke-width": 32, fill: "none" }, colorTarget: "stroke" },
{ id: "band4", label: "inner rainbow band", tag: "path", attrs: { d: "M120,300 A80,80 0 0 1 280,300", "stroke-width": 32, fill: "none" }, colorTarget: "stroke" },
{ id: "cloud1", label: "left cloud", tag: "ellipse", attrs: { cx: 65, cy: 95, rx: 52, ry: 27 } },
{ id: "cloud2", label: "right cloud", tag: "ellipse", attrs: { cx: 60, cy: 230, rx: 46, ry: 22 } },
{ id: "sun", label: "sun", tag: "circle", attrs: { cx: 335, cy: 75, r: 36 } }
]
},
{
id: "house",
name: "House",
emoji: "🏠",
viewBox: "0 0 400 400",
regions: [
{ id: "roof", label: "roof", tag: "polygon", attrs: { points: "70,180 200,80 330,180" } },
{ id: "wall", label: "walls", tag: "rect", attrs: { x: 90, y: 180, width: 220, height: 160 } },
{ id: "door", label: "door", tag: "rect", attrs: { x: 180, y: 258, width: 50, height: 82, rx: 4 } },
{ id: "window-l", label: "left window", tag: "rect", attrs: { x: 112, y: 202, width: 48, height: 48, rx: 4 } },
{ id: "window-r", label: "right window", tag: "rect", attrs: { x: 240, y: 202, width: 48, height: 48, rx: 4 } },
{ id: "tree-crown", label: "tree", tag: "circle", attrs: { cx: 352, cy: 250, r: 38 } },
{ id: "tree-trunk", label: "tree trunk", tag: "rect", attrs: { x: 342, y: 288, width: 20, height: 48 } },
{ id: "grass", label: "grass", tag: "rect", attrs: { x: 0, y: 340, width: 400, height: 60 } }
]
},
{
id: "fish",
name: "Fish",
emoji: "🐟",
viewBox: "0 0 400 300",
regions: [
{ id: "tail", label: "tail", tag: "polygon", attrs: { points: "292,150 362,100 362,200" } },
{ id: "fin-top", label: "top fin", tag: "polygon", attrs: { points: "150,90 190,40 220,92" } },
{ id: "fin-bottom", label: "bottom fin", tag: "polygon", attrs: { points: "150,210 190,262 220,208" } },
{ id: "body", label: "body", tag: "ellipse", attrs: { cx: 180, cy: 150, rx: 112, ry: 70 } },
{ id: "eye", label: "eye", tag: "circle", attrs: { cx: 118, cy: 128, r: 13 } },
{ id: "bubble1", label: "big bubble", tag: "circle", attrs: { cx: 340, cy: 58, r: 11 } },
{ id: "bubble2", label: "medium bubble", tag: "circle", attrs: { cx: 366, cy: 90, r: 7 } },
{ id: "bubble3", label: "small bubble", tag: "circle", attrs: { cx: 318, cy: 38, r: 6 } }
]
},
{
id: "apple",
name: "Apple",
emoji: "🍎",
viewBox: "0 0 300 300",
regions: [
{ id: "apple-left", label: "left side of the apple", tag: "path", attrs: { d: "M150,90 C95,55 35,95 40,155 C45,215 95,255 150,255 L150,90 Z" } },
{ id: "apple-right", label: "right side of the apple", tag: "path", attrs: { d: "M150,90 C205,55 265,95 260,155 C255,215 205,255 150,255 L150,90 Z" } },
{ id: "leaf", label: "leaf", tag: "path", attrs: { d: "M160,58 C182,36 206,46 200,68 C194,90 166,86 160,58 Z" } },
{ id: "stem", label: "stem", tag: "rect", attrs: { x: 144, y: 36, width: 12, height: 34, rx: 4 } },
{ id: "shine", label: "shine spot", tag: "ellipse", attrs: { cx: 108, cy: 120, rx: 14, ry: 22, transform: "rotate(-20 108 120)" } }
]
}
];

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

const SAVE_KEY = "colorAndPaintSave_v1";

/* ---------------- state ---------------- */
let state = {
pictureIndex: 0,
mode: "paint", // "paint" | "erase"
selectedColorHex: null,
selectedColorName: null,
score: 0,
colors: {}, // regionId -> hex (for the CURRENT picture)
challengeMode: false,
challengeTargets: {}, // regionId -> colorName, only for uncolored regions
showingAfter: true // before/after toggle (after = colored view is just the live canvas)
};

let lastPictureIndex = -1;

/* ---------------- DOM refs ---------------- */
const svgEl = document.getElementById("coloring-svg");
const paletteGrid = document.getElementById("palette-grid");
const galleryGrid = document.getElementById("gallery-grid");
const selectedColorLabel = document.getElementById("selected-color-label");
const levelValue = document.getElementById("level-value");
const progressFill = document.getElementById("progress-fill");
const progressValue = document.getElementById("progress-value");
const coloredCountEl = document.getElementById("colored-count");
const totalCountEl = document.getElementById("total-count");
const scoreValue = document.getElementById("score-value");
const paintBtn = document.getElementById("paint-btn");
const eraserBtn = document.getElementById("eraser-btn");
const challengeBtn = document.getElementById("challenge-btn");
const challengeBanner = document.getElementById("challenge-banner");
const challengeText = document.getElementById("challenge-text");
const resetBtn = document.getElementById("reset-btn");
const newPictureBtn = document.getElementById("new-picture-btn");
const clearProgressBtn = document.getElementById("clear-progress-btn");
const beforeAfterBtn = document.getElementById("before-after-btn");
const completionOverlay = document.getElementById("completion-overlay");
const finalScoreEl = document.getElementById("final-score");
const nextPictureBtn = document.getElementById("next-picture-btn");
const sparkleLayer = document.getElementById("sparkle-layer");
const confettiLayer = document.getElementById("confetti-layer");
const toastEl = document.getElementById("toast");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- init ---------------- */
function init() {
buildPalette();
buildGallery();
attachControlEvents();
const restored = loadFromStorage();
loadPicture(restored ? restored.pictureIndex : 0, !restored);
if (restored) {
state.colors = restored.colors || {};
state.score = restored.score || 0;
applyStoredColors();
}
updateHUD();
}

/* ---------------- palette ---------------- */
function buildPalette() {
paletteGrid.innerHTML = "";
PALETTE.forEach((c) => {
const btn = document.createElement("button");
btn.className = "color-swatch";
btn.style.background = c.hex;
btn.setAttribute("data-color", c.hex);
btn.setAttribute("data-name", c.name);
btn.setAttribute("aria-label", "Select color " + c.name);
btn.addEventListener("click", () => selectColor(c));
paletteGrid.appendChild(btn);
});
}

function selectColor(colorObj) {
state.selectedColorHex = colorObj.hex;
state.selectedColorName = colorObj.name;
state.mode = "paint";
refreshModeButtons();
[...paletteGrid.children].forEach((el) => {
el.classList.toggle("selected", el.getAttribute("data-color") === colorObj.hex);
});
selectedColorLabel.textContent = "Selected Color: " + colorObj.name;
}

/* ---------------- gallery ---------------- */
function buildGallery() {
galleryGrid.innerHTML = "";
PICTURES.forEach((pic, idx) => {
const btn = document.createElement("button");
btn.className = "gallery-item";
btn.setAttribute("role", "option");
btn.innerHTML = '<span class="emoji">' + pic.emoji + '</span><span>' + pic.name + '</span>';
btn.addEventListener("click", () => loadPicture(idx, true));
galleryGrid.appendChild(btn);
});
}

function refreshGalleryActive() {
[...galleryGrid.children].forEach((el, idx) => {
el.classList.toggle("active", idx === state.pictureIndex);
});
}

/* ---------------- loading a picture ---------------- */
function loadPicture(index, resetColors) {
lastPictureIndex = state.pictureIndex;
state.pictureIndex = index;
if (resetColors) {
state.colors = {};
state.score = 0;
}
state.challengeTargets = {};
state.showingAfter = true;
renderSVG();
refreshGalleryActive();
if (state.challengeMode) generateChallengeTargets();
updateHUD();
saveToStorage();
}

function currentPicture() {
return PICTURES[state.pictureIndex];
}

/* ---------------- rendering ---------------- */
const SVG_NS = "http://www.w3.org/2000/svg";

function renderSVG() {
const pic = currentPicture();
svgEl.setAttribute("viewBox", pic.viewBox);
svgEl.innerHTML = "";
pic.regions.forEach((region) => {
const el = document.createElementNS(SVG_NS, region.tag);
Object.entries(region.attrs).forEach(([k, v]) => el.setAttribute(k, v));
el.classList.add("region");
el.setAttribute("data-region-id", region.id);
el.setAttribute("tabindex", "0");
el.setAttribute("role", "button");
el.setAttribute("aria-label", region.label);
const target = region.colorTarget === "stroke" ? "stroke" : "fill";
const savedColor = state.colors[region.id];
if (target === "fill") {
el.setAttribute("fill", savedColor || "#FFFFFF");
} else {
el.setAttribute("stroke", savedColor || "#FFFFFF");
el.setAttribute("stroke-linecap", "round");
}
el.addEventListener("click", (e) => handleRegionClick(region, el, e));
el.addEventListener("keydown", (e) => {
if (e.key === "Enter" || e.key === " ") {
e.preventDefault();
handleRegionClick(region, el, e);
}
});
svgEl.appendChild(el);
});
}

function applyStoredColors() {
const pic = currentPicture();
pic.regions.forEach((region) => {
const el = svgEl.querySelector('[data-region-id="' + region.id + '"]');
if (!el) return;
const target = region.colorTarget === "stroke" ? "stroke" : "fill";
const color = state.colors[region.id];
if (color) el.setAttribute(target, color);
});
}

/* ---------------- interaction ---------------- */
function handleRegionClick(region, el, evt) {
if (state.mode === "erase") {
eraseRegion(region, el);
return;
}

if (!state.selectedColorHex) {
showToast("Pick a color first! 🎨");
return;
}

if (state.challengeMode) {
const target = state.challengeTargets[region.id];
if (target && target !== state.selectedColorName) {
showToast("Try another color!");
return;
}
}

const wasEmpty = !state.colors[region.id];
colorRegion(region, el, state.selectedColorHex);

if (wasEmpty) {
addRegionScore();
spawnSparkle(evt);
delete state.challengeTargets[region.id];
if (state.challengeMode) advanceChallenge();
}

updateHUD();
saveToStorage();
checkCompletion();
}

function colorRegion(region, el, hex) {
const targetAttr = region.colorTarget === "stroke" ? "stroke" : "fill";
el.setAttribute(targetAttr, hex);
state.colors[region.id] = hex;
}

function eraseRegion(region, el) {
const targetAttr = region.colorTarget === "stroke" ? "stroke" : "fill";
const wasColored = !!state.colors[region.id];
el.setAttribute(targetAttr, "#FFFFFF");
delete state.colors[region.id];
if (wasColored) showToast("Erased!");
updateHUD();
saveToStorage();
}

/* ---------------- modes ---------------- */
function refreshModeButtons() {
paintBtn.classList.toggle("active", state.mode === "paint");
paintBtn.setAttribute("aria-pressed", state.mode === "paint");
eraserBtn.classList.toggle("active", state.mode === "erase");
eraserBtn.setAttribute("aria-pressed", state.mode === "erase");
challengeBtn.classList.toggle("active", state.challengeMode);
challengeBtn.setAttribute("aria-pressed", state.challengeMode);
}

function attachControlEvents() {
paintBtn.addEventListener("click", () => {
state.mode = "paint";
refreshModeButtons();
});

eraserBtn.addEventListener("click", () => {
state.mode = "erase";
refreshModeButtons();
showToast("Eraser Selected");
});

challengeBtn.addEventListener("click", () => {
state.challengeMode = !state.challengeMode;
refreshModeButtons();
if (state.challengeMode) {
generateChallengeTargets();
challengeBanner.hidden = false;
} else {
challengeBanner.hidden = true;
}
});

resetBtn.addEventListener("click", () => {
resetPicture();
});

newPictureBtn.addEventListener("click", () => {
let idx;
do {
idx = Math.floor(Math.random() * PICTURES.length);
} while (idx === state.pictureIndex && PICTURES.length > 1);
loadPicture(idx, true);
showToast("New Picture!");
});

clearProgressBtn.addEventListener("click", () => {
localStorage.removeItem(SAVE_KEY);
state.score = 0;
state.colors = {};
renderSVG();
updateHUD();
showToast("Progress cleared");
});

beforeAfterBtn.addEventListener("click", () => {
state.showingAfter = !state.showingAfter;
if (state.showingAfter) {
applyStoredColors();
} else {
[...svgEl.querySelectorAll(".region")].forEach((el) => {
const region = currentPicture().regions.find((r) => r.id === el.getAttribute("data-region-id"));
const targetAttr = region.colorTarget === "stroke" ? "stroke" : "fill";
el.setAttribute(targetAttr, "#FFFFFF");
});
}
});

nextPictureBtn.addEventListener("click", () => {
completionOverlay.hidden = true;
confettiLayer.innerHTML = "";
let idx = (state.pictureIndex + 1) % PICTURES.length;
loadPicture(idx, true);
});
}

/* ---------------- challenge mode ---------------- */
function generateChallengeTargets() {
const pic = currentPicture();
state.challengeTargets = {};
pic.regions.forEach((region) => {
if (!state.colors[region.id]) {
const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
state.challengeTargets[region.id] = color.name;
}
});
showNextChallengeInstruction();
}

function advanceChallenge() {
if (Object.keys(state.challengeTargets).length === 0) {
challengeBanner.hidden = true;
return;
}
showNextChallengeInstruction();
}

function showNextChallengeInstruction() {
const pic = currentPicture();
const remainingId = Object.keys(state.challengeTargets)[0];
if (!remainingId) {
challengeBanner.hidden = true;
return;
}
const region = pic.regions.find((r) => r.id === remainingId);
const colorName = state.challengeTargets[remainingId];
challengeText.textContent = "Color the " + region.label + " " + colorName.toUpperCase() + ".";
challengeBanner.hidden = false;
}

/* ---------------- scoring & progress ---------------- */
function totalRegions() {
return currentPicture().regions.length;
}

function coloredRegions() {
return Object.keys(state.colors).length;
}

function perRegionPoints() {
return Math.floor(80 / totalRegions());
}

function addRegionScore() {
state.score += perRegionPoints();
}

function updateHUD() {
const total = totalRegions();
const colored = coloredRegions();
const pct = total === 0 ? 0 : Math.round((colored / total) * 100);

levelValue.textContent = state.pictureIndex + 1;
progressFill.style.width = pct + "%";
progressValue.textContent = pct + "%";
coloredCountEl.textContent = colored;
totalCountEl.textContent = total;
scoreValue.textContent = state.score;

if (!state.selectedColorHex) {
selectedColorLabel.textContent = "Selected Color: none yet — pick one below!";
} else {
selectedColorLabel.textContent = "Selected Color: " + state.selectedColorName;
}
}

function checkCompletion() {
if (coloredRegions() === totalRegions()) {
const bonus = 100 - perRegionPoints() * totalRegions();
state.score += bonus;
updateHUD();
saveToStorage();
setTimeout(showCompletion, prefersReducedMotion ? 0 : 300);
}
}

function showCompletion() {
finalScoreEl.textContent = Math.min(state.score, 100);
completionOverlay.hidden = false;
if (!prefersReducedMotion) spawnConfetti();
}

/* ---------------- reset ---------------- */
function resetPicture() {
state.colors = {};
state.score = 0;
state.challengeTargets = {};
renderSVG();
if (state.challengeMode) generateChallengeTargets();
updateHUD();
saveToStorage();
showToast("Picture reset");
}

/* ---------------- persistence ---------------- /
function saveToStorage() {
try {
localStorage.setItem(SAVE_KEY, JSON.stringify({
pictureIndex: state.pictureIndex,
colors: state.colors,
score: state.score
}));
} catch (e) {
/ storage unavailable — game still works, just without persistence */
}
}

function loadFromStorage() {
try {
const raw = localStorage.getItem(SAVE_KEY);
if (!raw) return null;
return JSON.parse(raw);
} catch (e) {
return null;
}
}

/* ---------------- effects ---------------- */
function spawnSparkle(evt) {
if (prefersReducedMotion) return;
const rect = svgEl.getBoundingClientRect();
const wrapRect = sparkleLayer.getBoundingClientRect();
let x = wrapRect.width / 2;
let y = wrapRect.height / 2;
if (evt && evt.clientX) {
x = evt.clientX - wrapRect.left;
y = evt.clientY - wrapRect.top;
}
const emojiSet = ["✨", "⭐", "💫"];
for (let i = 0; i < 3; i++) {
const s = document.createElement("span");
s.className = "sparkle";
s.textContent = emojiSet[Math.floor(Math.random() * emojiSet.length)];
s.style.left = (x + (Math.random() * 30 - 15)) + "px";
s.style.top = (y + (Math.random() * 30 - 15)) + "px";
sparkleLayer.appendChild(s);
setTimeout(() => s.remove(), 700);
}
}

function spawnConfetti() {
const colors = ["#FF6FA5", "#FFD93D", "#4FC3F7", "#6BCB77", "#9775FA", "#FFA94D"];
for (let i = 0; i < 60; i++) {
const piece = document.createElement("span");
piece.className = "confetti-piece";
piece.style.left = Math.random() * 100 + "%";
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDuration = (2 + Math.random() * 1.5) + "s";
piece.style.animationDelay = (Math.random() * 0.4) + "s";
confettiLayer.appendChild(piece);
setTimeout(() => piece.remove(), 4000);
}
}

let toastTimer = null;
function showToast(message) {
toastEl.textContent = message;
toastEl.hidden = false;
toastEl.style.animation = "none";
void toastEl.offsetWidth;
toastEl.style.animation = "";
clearTimeout(toastTimer);
toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2200);
}

/* ---------------- go! ---------------- */
document.addEventListener("DOMContentLoaded", init);

Close
