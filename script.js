"use strict";

/* =========================================================
   COLOR & PAINT
   FINAL SIMPLE SCRIPT
   ========================================================= */


/* =========================
   COLORS
   ========================= */

const COLORS = [
  { name: "Red",    hex: "#ef4444" },
  { name: "Orange", hex: "#f97316" },
  { name: "Yellow", hex: "#facc15" },
  { name: "Green",  hex: "#22c55e" },
  { name: "Blue",   hex: "#3b82f6" },
  { name: "Purple", hex: "#a855f7" },
  { name: "Pink",   hex: "#ec4899" },
  { name: "Brown",  hex: "#92400e" },
  { name: "Black",  hex: "#111827" },
  { name: "White",  hex: "#ffffff" }
];


/* =========================
   PICTURES
   ========================= */

const PICTURES = [

  /* ---------- FLOWER ---------- */

  {
    id: "flower",
    name: "Flower",
    emoji: "🌸",

    regions: [
      ["petal1", "ellipse", { cx: 150, cy: 80, rx: 35, ry: 55 }, "Pink"],
      ["petal2", "ellipse", { cx: 210, cy: 80, rx: 35, ry: 55 }, "Pink"],
      ["petal3", "ellipse", { cx: 120, cy: 130, rx: 35, ry: 55 }, "Pink"],
      ["petal4", "ellipse", { cx: 240, cy: 130, rx: 35, ry: 55 }, "Pink"],
      ["petal5", "ellipse", { cx: 180, cy: 155, rx: 35, ry: 55 }, "Pink"],
      ["center", "circle", { cx: 180, cy: 115, r: 35 }, "Yellow"],
      ["stem", "rect", { x: 170, y: 145, width: 20, height: 150, rx: 8 }, "Green"],
      ["leaf1", "ellipse", { cx: 135, cy: 220, rx: 55, ry: 25 }, "Green"],
      ["leaf2", "ellipse", { cx: 225, cy: 250, rx: 55, ry: 25 }, "Green"]
    ]
  },


  /* ---------- BUTTERFLY ---------- */

  {
    id: "butterfly",
    name: "Butterfly",
    emoji: "🦋",

    regions: [
      ["topLeftWing", "ellipse", { cx: 125, cy: 100, rx: 65, ry: 75 }, "Purple"],
      ["topRightWing", "ellipse", { cx: 235, cy: 100, rx: 65, ry: 75 }, "Purple"],
      ["bottomLeftWing", "ellipse", { cx: 130, cy: 190, rx: 55, ry: 65 }, "Pink"],
      ["bottomRightWing", "ellipse", { cx: 230, cy: 190, rx: 55, ry: 65 }, "Pink"],
      ["body", "ellipse", { cx: 180, cy: 145, rx: 18, ry: 85 }, "Black"],
      ["head", "circle", { cx: 180, cy: 55, r: 22 }, "Black"]
    ]
  },


  /* ---------- RAINBOW ---------- */

  {
    id: "rainbow",
    name: "Rainbow",
    emoji: "🌈",

    regions: [
      [
        "redBand",
        "path",
        {
          d: "M60 210 A120 120 0 0 1 300 210 L280 210 A100 100 0 0 0 80 210 Z"
        },
        "Red"
      ],

      [
        "orangeBand",
        "path",
        {
          d: "M80 210 A100 100 0 0 1 280 210 L260 210 A80 80 0 0 0 100 210 Z"
        },
        "Orange"
      ],

      [
        "yellowBand",
        "path",
        {
          d: "M100 210 A80 80 0 0 1 260 210 L240 210 A60 60 0 0 0 120 210 Z"
        },
        "Yellow"
      ],

      [
        "greenBand",
        "path",
        {
          d: "M120 210 A60 60 0 0 1 240 210 L220 210 A40 40 0 0 0 140 210 Z"
        },
        "Green"
      ],

      ["leftCloud", "ellipse", { cx: 65, cy: 215, rx: 55, ry: 28 }, "White"],
      ["rightCloud", "ellipse", { cx: 295, cy: 215, rx: 55, ry: 28 }, "White"],
      ["sun", "circle", { cx: 180, cy: 55, r: 30 }, "Yellow"]
    ]
  },


  /* ---------- HOUSE ---------- */

  {
    id: "house",
    name: "House",
    emoji: "🏠",

    regions: [
      [
        "roof",
        "polygon",
        { points: "70,150 180,60 290,150" },
        "Red"
      ],

      [
        "wall",
        "rect",
        { x: 90, y: 145, width: 180, height: 130 },
        "Yellow"
      ],

      [
        "door",
        "rect",
        { x: 155, y: 195, width: 50, height: 80 },
        "Brown"
      ],

      [
        "windowLeft",
        "rect",
        { x: 110, y: 175, width: 40, height: 40 },
        "Blue"
      ],

      [
        "windowRight",
        "rect",
        { x: 220, y: 175, width: 40, height: 40 },
        "Blue"
      ],

      [
        "tree",
        "circle",
        { cx: 45, cy: 180, r: 35 },
        "Green"
      ],

      [
        "trunk",
        "rect",
        { x: 35, y: 210, width: 20, height: 70 },
        "Brown"
      ],

      [
        "grass",
        "rect",
        { x: 20, y: 275, width: 300, height: 25 },
        "Green"
      ]
    ]
  },


  /* ---------- FISH ---------- */

  {
    id: "fish",
    name: "Fish",
    emoji: "🐟",

    regions: [
      [
        "fishBody",
        "ellipse",
        { cx: 180, cy: 150, rx: 90, ry: 55 },
        "Blue"
      ],

      [
        "tail",
        "polygon",
        { points: "90,150 35,105 35,195" },
        "Orange"
      ],

      [
        "topFin",
        "polygon",
        { points: "165,100 190,55 215,105" },
        "Orange"
      ],

      [
        "bottomFin",
        "polygon",
        { points: "165,200 190,245 215,195" },
        "Orange"
      ],

      [
        "eye",
        "circle",
        { cx: 220, cy: 135, r: 10 },
        "Black"
      ],

      [
        "bubble1",
        "circle",
        { cx: 275, cy: 85, r: 12 },
        "Blue"
      ],

      [
        "bubble2",
        "circle",
        { cx: 305, cy: 55, r: 8 },
        "Blue"
      ]
    ]
  },


  /* ---------- APPLE ---------- */

  {
    id: "apple",
    name: "Apple",
    emoji: "🍎",

    regions: [
      [
        "appleBody",
        "path",
        {
          d: "M180 110 C125 60 55 105 75 175 C90 235 140 260 180 230 C220 260 270 235 285 175 C305 105 235 60 180 110 Z"
        },
        "Red"
      ],

      [
        "leaf",
        "ellipse",
        {
          cx: 220,
          cy: 65,
          rx: 45,
          ry: 18,
          transform: "rotate(-25 220 65)"
        },
        "Green"
      ],

      [
        "stem",
        "rect",
        {
          x: 174,
          y: 45,
          width: 12,
          height: 55,
          rx: 5
        },
        "Brown"
      ],

      [
        "shine",
        "ellipse",
        {
          cx: 125,
          cy: 145,
          rx: 15,
          ry: 30
        },
        "White"
      ]
    ]
  }

];


/* =========================
   GAME VARIABLES
   ========================= */

let currentPicture = 0;
let selectedColor = null;
let eraserMode = false;

let colored = {};
let correct = {};

const SAVE_KEY = "colorPaintGame";


/* =========================
   START GAME
   ========================= */

function startGame() {

  loadGame();

  createPalette();
  createGallery();
  drawPicture();
  updateStats();

  hideCompletion();

  console.log("Color & Paint started successfully.");
}


/* =========================
   GET HTML ELEMENTS
   ========================= */

function get(id) {
  return document.getElementById(id);
}


/* =========================
   CREATE PALETTE
   ========================= */

function createPalette() {

  const palette = get("palette");

  if (!palette) {
    console.error("Palette element not found.");
    return;
  }

  palette.innerHTML = "";

  COLORS.forEach(color => {

    const button = document.createElement("button");

    button.className = "color-btn";
    button.type = "button";

    button.style.backgroundColor = color.hex;
    button.title = color.name;

    if (color.name === "White") {
      button.style.border = "2px solid #777";
    }

    button.addEventListener("click", function () {

      selectedColor = color;
      eraserMode = false;

      document
        .querySelectorAll(".color-btn")
        .forEach(b => b.classList.remove("selected"));

      button.classList.add("selected");

      showToast("Selected " + color.name);
    });

    palette.appendChild(button);
  });
}


/* =========================
   CREATE GALLERY
   ========================= */

function createGallery() {

  const gallery = get("gallery");

  if (!gallery) return;

  gallery.innerHTML = "";

  PICTURES.forEach((picture, index) => {

    const item = document.createElement("button");

    item.type = "button";
    item.className = "gallery-item";

    item.innerHTML = `
      <div style="font-size:35px">${picture.emoji}</div>
      <div>${picture.name}</div>
    `;

    if (index === currentPicture) {
      item.classList.add("active");
    }

    item.addEventListener("click", function () {

      currentPicture = index;

      resetPicture(false);

      createGallery();
      drawPicture();
      updateStats();

    });

    gallery.appendChild(item);
  });
}


/* =========================
   DRAW PICTURE
   ========================= */

function drawPicture() {

  const svg = get("coloring-svg");

  if (!svg) {
    console.error("coloring-svg not found.");
    return;
  }

  const picture = PICTURES[currentPicture];

  svg.innerHTML = "";

  svg.setAttribute("viewBox", "0 0 360 320");

  picture.regions.forEach(region => {

    const id = region[0];
    const type = region[1];
    const attributes = region[2];

    const element =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        type
      );

    Object.keys(attributes).forEach(key => {

      element.setAttribute(
        key,
        attributes[key]
      );

    });

    element.setAttribute("fill", "#ffffff");
    element.setAttribute("stroke", "#222222");
    element.setAttribute("stroke-width", "3");

    element.dataset.region = id;

    element.style.cursor = "pointer";

    element.addEventListener(
      "click",
      function () {
        paintRegion(element, id);
      }
    );

    svg.appendChild(element);
  });

  applySavedColors();

  createReference();
}


/* =========================
   REFERENCE PICTURE
   ========================= */

function createReference() {

  let box = document.getElementById("reference-box");

  if (!box) {

    box = document.createElement("div");

    box.id = "reference-box";

    box.style.marginTop = "20px";
    box.style.padding = "15px";
    box.style.borderRadius = "15px";
    box.style.background = "#f8fafc";
    box.style.border = "2px solid #e5e7eb";
    box.style.textAlign = "center";

    const svg = get("coloring-svg");

    if (svg && svg.parentElement) {
      svg.parentElement.appendChild(box);
    }
  }

  box.innerHTML = `
    <h3 style="
      margin:0 0 5px;
      color:#111827;
    ">
      🎨 Reference Picture
    </h3>

    <p style="
      margin:0 0 10px;
      color:#6b7280;
      font-size:14px;
    ">
      Follow these colors
    </p>

    <div id="reference-picture"></div>
  `;

  drawReference();
}


/* =========================
   DRAW REFERENCE
   ========================= */

function drawReference() {

  const container =
    get("reference-picture");

  if (!container) return;

  const svg =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

  svg.setAttribute(
    "viewBox",
    "0 0 360 320"
  );

  svg.setAttribute(
    "width",
    "100%"
  );

  svg.setAttribute(
    "height",
    "240"
  );

  PICTURES[currentPicture].regions.forEach(region => {

    const id = region[0];
    const type = region[1];
    const attributes = region[2];
    const correctColorName = region[3];

    const element =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        type
      );

    Object.keys(attributes).forEach(key => {

      element.setAttribute(
        key,
        attributes[key]
      );

    });

    const color =
      COLORS.find(
        c => c.name === correctColorName
      );

    element.setAttribute(
      "fill",
      color ? color.hex : "#ffffff"
    );

    element.setAttribute(
      "stroke",
      "#222222"
    );

    element.setAttribute(
      "stroke-width",
      "3"
    );

    element.dataset.region = id;

    svg.appendChild(element);
  });

  container.appendChild(svg);
}


/* =========================
   PAINT REGION
   ========================= */

function paintRegion(element, id) {

  /* ERASER */

  if (eraserMode) {

    element.setAttribute(
      "fill",
      "#ffffff"
    );

    delete colored[id];
    delete correct[id];

    saveGame();
    updateStats();

    return;
  }


  /* NO COLOR */

  if (!selectedColor) {

    showToast(
      "🎨 Select a color first!"
    );

    return;
  }


  /* PAINT */

  element.setAttribute(
    "fill",
    selectedColor.hex
  );

  colored[id] =
    selectedColor.name;


  /* CHECK CORRECT COLOR */

  const region =
    PICTURES[currentPicture].regions.find(
      r => r[0] === id
    );

  const correctColor =
    region[3];

  if (
    selectedColor.name === correctColor
  ) {

    correct[id] = true;

    showToast(
      "✅ Correct color!"
    );

  } else {

    correct[id] = false;

    showToast(
      "❌ Wrong color!"
    );
  }


  saveGame();

  updateStats();

  checkCompletion();
}


/* =========================
   APPLY SAVED COLORS
   ========================= */

function applySavedColors() {

  const svg = get("coloring-svg");

  if (!svg) return;

  Object.keys(colored).forEach(id => {

    const element =
      svg.querySelector(
        `[data-region="${id}"]`
      );

    if (!element) return;

    const color =
      COLORS.find(
        c => c.name === colored[id]
      );

    if (color) {

      element.setAttribute(
        "fill",
        color.hex
      );
    }
  });
}


/* =========================
   SCORE
   ========================= */

function getScore() {

  const total =
    PICTURES[currentPicture].regions.length;

  let points = 0;

  PICTURES[currentPicture].regions.forEach(
    region => {

      if (correct[region[0]]) {
        points++;
      }

    }
  );

  if (total === 0) return 0;

  return Math.round(
    (points / total) * 100
  );
}


/* =========================
   UPDATE STATISTICS
   ========================= */

function updateStats() {

  const picture =
    PICTURES[currentPicture];

  const total =
    picture.regions.length;

  const coloredCount =
    Object.keys(colored).length;

  const progress =
    total === 0
      ? 0
      : Math.round(
          (coloredCount / total) * 100
        );

  const score =
    getScore();


  if (get("level")) {
    get("level").textContent =
      "Level " + (currentPicture + 1);
  }

  if (get("progress")) {
    get("progress").textContent =
      progress + "%";
  }

  if (get("areas-colored")) {
    get("areas-colored").textContent =
      coloredCount + "/" + total;
  }

  if (get("score")) {
    get("score").textContent =
      score;
  }
}


/* =========================
   COMPLETION
   ========================= */

function checkCompletion() {

  const total =
    PICTURES[currentPicture].regions.length;

  const coloredCount =
    Object.keys(colored).length;

  if (coloredCount < total) {
    return;
  }

  showCompletion();
}


function showCompletion() {

  const overlay =
    get("completion-overlay");

  if (!overlay) return;

  const score =
    getScore();

  overlay.hidden = false;

  overlay.style.display = "flex";

  const finalScore =
    overlay.querySelector(
      "#final-score"
    );

  if (finalScore) {
    finalScore.textContent =
      score + "/100";
  }

  const scoreText =
    overlay.querySelector(
      ".completion-score"
    );

  if (scoreText) {

    scoreText.textContent =
      "COLORING SCORE: " +
      score +
      "/100";
  }
}


function hideCompletion() {

  const overlay =
    get("completion-overlay");

  if (!overlay) return;

  overlay.hidden = true;

  overlay.style.display = "none";
}


/* =========================
   RESET PICTURE
   ========================= */

function resetPicture(message = true) {

  colored = {};
  correct = {};

  saveGame();

  hideCompletion();

  drawPicture();

  updateStats();

  if (message) {
    showToast("↻ Picture reset!");
  }
}


/* =========================
   RESET BUTTON
   ========================= */

function setupButtons() {

  const reset =
    get("reset-btn");

  if (reset) {

    reset.addEventListener(
      "click",
      function () {
        resetPicture(true);
      }
    );
  }


  /* NEW PICTURE */

  const newPicture =
    get("new-picture-btn");

  if (newPicture) {

    newPicture.addEventListener(
      "click",
      function () {

        currentPicture++;

        if (
          currentPicture >=
          PICTURES.length
        ) {
          currentPicture = 0;
        }

        colored = {};
        correct = {};

        saveGame();

        hideCompletion();

        createGallery();
        drawPicture();
        updateStats();

        showToast(
          "🎨 " +
          PICTURES[currentPicture].name
        );
      }
    );
  }


  /* NEXT PICTURE */

  const next =
    get("next-picture-btn");

  if (next) {

    next.addEventListener(
      "click",
      function () {

        currentPicture++;

        if (
          currentPicture >=
          PICTURES.length
        ) {
          currentPicture = 0;
        }

        colored = {};
        correct = {};

        saveGame();

        hideCompletion();

        createGallery();
        drawPicture();
        updateStats();
      }
    );
  }


  /* PAINT */

  const paint =
    get("paint-btn");

  if (paint) {

    paint.addEventListener(
      "click",
      function () {

        eraserMode = false;

        paint.classList.add("active");

        const eraser =
          get("eraser-btn");

        if (eraser) {
          eraser.classList.remove(
            "active"
          );
        }

        showToast("🎨 Paint mode");
      }
    );
  }


  /* ERASER */

  const eraser =
    get("eraser-btn");

  if (eraser) {

    eraser.addEventListener(
      "click",
      function () {

        eraserMode = true;

        eraser.classList.add("active");

        const paint =
          get("paint-btn");

        if (paint) {
          paint.classList.remove(
            "active"
          );
        }

        showToast("🧹 Eraser mode");
      }
    );
  }


  /* CLEAR PROGRESS */

  const clear =
    get("clear-progress-btn");

  if (clear) {

    clear.addEventListener(
      "click",
      function () {

        const answer =
          confirm(
            "Clear all saved progress?"
          );

        if (!answer) return;

        localStorage.removeItem(
          SAVE_KEY
        );

        currentPicture = 0;
        colored = {};
        correct = {};

        hideCompletion();

        createGallery();
        drawPicture();
        updateStats();

        showToast(
          "🗑 Progress cleared!"
        );
      }
    );
  }
}


/* =========================
   TOAST
   ========================= */

function showToast(message) {

  const toast =
    get("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.hidden = false;

  toast.style.display = "block";

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(
      function () {

        toast.hidden = true;

        toast.style.display =
          "none";

      },
      1800
    );
}


/* =========================
   SAVE
   ========================= */

function saveGame() {

  const data = {

    currentPicture:
      currentPicture,

    colored:
      colored,

    correct:
      correct
  };

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(data)
  );
}


/* =========================
   LOAD
   ========================= */

function loadGame() {

  try {

    const saved =
      localStorage.getItem(
        SAVE_KEY
      );

    if (!saved) {

      currentPicture = 0;
      colored = {};
      correct = {};

      return;
    }

    const data =
      JSON.parse(saved);

    if (
      Number.isInteger(
        data.currentPicture
      )
    ) {

      currentPicture =
        data.currentPicture;
    }

    if (
      currentPicture < 0 ||
      currentPicture >=
      PICTURES.length
    ) {

      currentPicture = 0;
    }

    colored =
      data.colored || {};

    correct =
      data.correct || {};

  } catch (error) {

    console.error(
      "Save data error:",
      error
    );

    currentPicture = 0;
    colored = {};
    correct = {};
  }
}


/* =========================
   START AFTER HTML LOADS
   ========================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      startGame();
      setupButtons();

    }
  );

} else {

  startGame();
  setupButtons();

}
