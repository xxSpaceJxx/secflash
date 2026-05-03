// ==============================
// SecFlash — App Logic
// ==============================

// --- State ---
let deck = [];
let currentIndex = 0;
let known = new Set();
let unknown = new Set();
let activeWeek = "all";
let activeCat = "all";

// --- DOM Refs ---
const hero = document.getElementById("hero");
const app = document.getElementById("app");
const completeScreen = document.getElementById("complete-screen");
const startBtn = document.getElementById("start-btn");
const flashcard = document.getElementById("flashcard");
const questionEl = document.getElementById("card-question");
const answerEl = document.getElementById("card-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const resetBtn = document.getElementById("reset-btn");
const markKnownBtn = document.getElementById("mark-known-btn");
const markUnknownBtn = document.getElementById("mark-unknown-btn");
const cardCounter = document.getElementById("card-counter");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const knownCountEl = document.getElementById("known-count");
const unknownCountEl = document.getElementById("unknown-count");
const remainingCountEl = document.getElementById("remaining-count");
const categoryBar = document.getElementById("category-bar");
const weekBar = document.getElementById("week-bar");
const completeSummary = document.getElementById("complete-summary");
const reviewMissedBtn = document.getElementById("review-missed-btn");
const restartBtn = document.getElementById("restart-btn");

// --- Helpers ---
function getWeekCards(week) {
  if (week === "all") return [...FLASHCARDS];
  return FLASHCARDS.filter((c) => c.week === Number(week));
}

function getFilteredDeck() {
  let cards = getWeekCards(activeWeek);
  if (activeCat !== "all") {
    cards = cards.filter((c) => c.category === activeCat);
  }
  return cards;
}

// --- Init ---
function init() {
  markEmptyWeeks();
  buildCategoryButtons();
  deck = getFilteredDeck();
  renderCard();
  updateScoreboard();
}

// --- Week Tabs ---
function markEmptyWeeks() {
  weekBar.querySelectorAll(".week-btn").forEach((btn) => {
    const w = btn.dataset.week;
    if (w === "all") return;
    const hasCards = FLASHCARDS.some((c) => c.week === Number(w));
    btn.classList.toggle("empty", !hasCards);
  });
}

function selectWeek(week) {
  // Don't switch to empty weeks
  if (week !== "all") {
    const hasCards = FLASHCARDS.some((c) => c.week === Number(week));
    if (!hasCards) return;
  }

  activeWeek = week;
  activeCat = "all";

  // Update week button states
  weekBar.querySelectorAll(".week-btn").forEach((b) => b.classList.remove("active"));
  weekBar.querySelector(`[data-week="${week}"]`).classList.add("active");

  // Rebuild category buttons for this week's content
  buildCategoryButtons();

  // Reset deck
  deck = getFilteredDeck();
  currentIndex = 0;
  known.clear();
  unknown.clear();
  flashcard.classList.remove("flipped");
  completeScreen.classList.add("hidden");
  app.classList.remove("hidden");
  renderCard();
  updateScoreboard();
}

// --- Categories ---
function buildCategoryButtons() {
  // Remove old dynamic buttons (keep the "All" button)
  const allBtn = categoryBar.querySelector('[data-cat="all"]');
  categoryBar.innerHTML = "";
  allBtn.classList.add("active");
  categoryBar.appendChild(allBtn);

  const weekCards = getWeekCards(activeWeek);
  const cats = [...new Set(weekCards.map((c) => c.category))];
  cats.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    btn.addEventListener("click", () => filterByCategory(cat));
    categoryBar.appendChild(btn);
  });
}

function filterByCategory(cat) {
  activeCat = cat;
  document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
  if (cat === "all") {
    categoryBar.querySelector('[data-cat="all"]').classList.add("active");
  } else {
    categoryBar.querySelector(`[data-cat="${cat}"]`).classList.add("active");
  }

  deck = getFilteredDeck();
  currentIndex = 0;
  known.clear();
  unknown.clear();
  flashcard.classList.remove("flipped");
  completeScreen.classList.add("hidden");
  app.classList.remove("hidden");
  renderCard();
  updateScoreboard();
}

// --- Render ---
function renderCard() {
  if (deck.length === 0) {
    questionEl.innerHTML = "No cards in this selection.";
    answerEl.innerHTML = "";
    cardCounter.textContent = "0 / 0";
    progressBar.style.width = "0%";
    progressText.textContent = "0 / 0";
    return;
  }
  const card = deck[currentIndex];
  questionEl.innerHTML = card.q;
  answerEl.innerHTML = card.a;
  cardCounter.textContent = `${currentIndex + 1} / ${deck.length}`;
  flashcard.classList.remove("flipped");

  const answered = known.size + unknown.size;
  const pct = deck.length > 0 ? (answered / deck.length) * 100 : 0;
  progressBar.style.width = pct + "%";
  progressText.textContent = `${answered} / ${deck.length}`;
}

function updateScoreboard() {
  knownCountEl.textContent = known.size;
  unknownCountEl.textContent = unknown.size;
  remainingCountEl.textContent = Math.max(0, deck.length - known.size - unknown.size);
}

// --- Navigation ---
function goNext() {
  if (deck.length === 0) return;
  flashcard.classList.remove("flipped");
  currentIndex = (currentIndex + 1) % deck.length;
  renderCard();
}

function goPrev() {
  if (deck.length === 0) return;
  flashcard.classList.remove("flipped");
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  renderCard();
}

function flipCard() {
  flashcard.classList.toggle("flipped");
}

// --- Marking ---
function markKnown() {
  if (deck.length === 0) return;
  known.add(currentIndex);
  unknown.delete(currentIndex);
  updateScoreboard();
  checkComplete();
  if (known.size + unknown.size < deck.length) goNext();
}

function markUnknown() {
  if (deck.length === 0) return;
  unknown.add(currentIndex);
  known.delete(currentIndex);
  updateScoreboard();
  checkComplete();
  if (known.size + unknown.size < deck.length) goNext();
}

function checkComplete() {
  if (deck.length > 0 && known.size + unknown.size >= deck.length) {
    const pct = Math.round((known.size / deck.length) * 100);
    completeSummary.innerHTML = `You mastered <strong>${known.size}</strong> of <strong>${deck.length}</strong> cards (${pct}%).<br>${unknown.size} card${unknown.size !== 1 ? "s" : ""} flagged for review.`;
    progressBar.style.width = "100%";
    progressText.textContent = `${deck.length} / ${deck.length}`;
    setTimeout(() => {
      app.classList.add("hidden");
      completeScreen.classList.remove("hidden");
    }, 400);
  }
}

// --- Shuffle ---
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  currentIndex = 0;
  known.clear();
  unknown.clear();
  flashcard.classList.remove("flipped");
  renderCard();
  updateScoreboard();
}

// --- Reset ---
function resetAll() {
  activeWeek = "all";
  activeCat = "all";
  deck = [...FLASHCARDS];
  currentIndex = 0;
  known.clear();
  unknown.clear();
  flashcard.classList.remove("flipped");
  completeScreen.classList.add("hidden");
  app.classList.remove("hidden");

  // Reset week buttons
  weekBar.querySelectorAll(".week-btn").forEach((b) => b.classList.remove("active"));
  weekBar.querySelector('[data-week="all"]').classList.add("active");

  // Rebuild categories
  buildCategoryButtons();

  renderCard();
  updateScoreboard();
}

// --- Review missed ---
function reviewMissed() {
  if (unknown.size === 0) {
    resetAll();
    return;
  }
  const missedCards = [...unknown].map((i) => deck[i]);
  deck = missedCards;
  currentIndex = 0;
  known.clear();
  unknown.clear();
  completeScreen.classList.add("hidden");
  app.classList.remove("hidden");
  flashcard.classList.remove("flipped");
  renderCard();
  updateScoreboard();
}

// --- Event Listeners ---
startBtn.addEventListener("click", () => {
  hero.classList.add("hidden");
  app.classList.remove("hidden");
  init();
});

flashcard.addEventListener("click", flipCard);
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
shuffleBtn.addEventListener("click", shuffleDeck);
resetBtn.addEventListener("click", resetAll);
markKnownBtn.addEventListener("click", markKnown);
markUnknownBtn.addEventListener("click", markUnknown);
reviewMissedBtn.addEventListener("click", reviewMissed);
restartBtn.addEventListener("click", resetAll);

// Week tab clicks
weekBar.querySelectorAll(".week-btn").forEach((btn) => {
  btn.addEventListener("click", () => selectWeek(btn.dataset.week));
});

// Category "All" button
categoryBar.querySelector('[data-cat="all"]').addEventListener("click", () => filterByCategory("all"));

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (app.classList.contains("hidden")) return;
  switch (e.key) {
    case "ArrowRight": goNext(); break;
    case "ArrowLeft": goPrev(); break;
    case " ": e.preventDefault(); flipCard(); break;
    case "g": case "G": markKnown(); break;
    case "r": case "R": markUnknown(); break;
  }
});
