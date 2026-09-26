/* =========================================================
   COLOR & PAINT — game logic
   Pictures are stored as structured SVG region data so new
   pictures can be added easily. Each region has:
     id           unique string id (must be unique per picture)
     label        human-readable name (used in Challenge Mode)
     tag          "path" | "circle" | "ellipse" | "rect" | "polygon"
     attrs        object of SVG attributes for that shape
     colorTarget  "fill" (default) or "stroke" — which attribute
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
  mode: "paint",          // "paint" | "erase"
  selectedColorHex: null,
  selectedColorName: null,
  score: 0,
  colors: {},             // regionId -> hex   (for the CURRENT picture)
  challengeMode: false,
  challengeTargets: {},   // regionId -> colorName, only for uncolored regions
  showingAfter: true      // before/after toggle (after = colored view is just the live canvas)
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

/* ---------------- persistence ---------------- */
function saveToStorage() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      pictureIndex: state.pictureIndex,
      colors: state.colors,
      score: state.score
    }));
  } catch (e) {
    /* storage unavailable — game still works, just without persistence */
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
