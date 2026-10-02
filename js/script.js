// ---------- Grab elements ----------
const cardGrid = document.getElementById("cardGrid");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const clearBtn = document.getElementById("clearBtn");
const resultCount = document.getElementById("resultCount");
const message = document.getElementById("message");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

const REQUIRED_FIELDS = ["title", "company", "domain", "location", "duration", "mode", "description"];
let internships = [];

// ---------- Data validation (error handling) ----------
// Keeps only records where every required field is a non-empty string.
function isValidInternship(item) {
  return item && typeof item === "object" &&
    REQUIRED_FIELDS.every(f => typeof item[f] === "string" && item[f].trim() !== "");
}

function loadData() {
  if (typeof internshipData === "undefined" || !Array.isArray(internshipData)) {
    throw new Error("Internship data is missing or not in the expected format.");
  }
  const valid = internshipData.filter(isValidInternship);
  if (valid.length < internshipData.length) {
    console.warn((internshipData.length - valid.length) + " invalid internship record(s) were skipped.");
  }
  if (valid.length === 0) {
    throw new Error("No valid internship records were found.");
  }
  return valid;
}

// ---------- Messages ----------
function showMessage(text, isError) {
  message.textContent = text;
  message.className = isError ? "message error" : "message";
  // role="alert" is only used for errors so screen readers announce them
  if (isError) message.setAttribute("role", "alert");
  else message.removeAttribute("role");
  message.hidden = false;
}

function hideMessage() {
  message.hidden = true;
}

// ---------- Build one card ----------
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text; // textContent is safe (no HTML injection)
  return el;
}

function createCard(item) {
  const card = createElement("article", "card");

  card.appendChild(createElement("span", "badge", item.domain));
  card.appendChild(createElement("h3", "", item.title));
  card.appendChild(createElement("p", "company", item.company));

  const meta = createElement("ul", "meta");
  [["Location", item.location], ["Duration", item.duration], ["Work mode", item.mode]].forEach(([label, value]) => {
    const li = document.createElement("li");
    li.appendChild(createElement("strong", "", label + ": "));
    li.appendChild(document.createTextNode(value));
    meta.appendChild(li);
  });
  card.appendChild(meta);

  card.appendChild(createElement("p", "desc", item.description));

  const btn = createElement("a", "btn btn-primary", "Apply Now");
  btn.href = "https://example.com/apply/" + encodeURIComponent(item.id || item.title); // placeholder link
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.setAttribute("aria-label", "Apply for " + item.title + " at " + item.company + " (opens in new tab)");
  card.appendChild(btn);

  return card;
}

// ---------- Render ----------
function renderCards(list) {
  cardGrid.innerHTML = "";
  list.forEach(item => cardGrid.appendChild(createCard(item)));

  resultCount.textContent = list.length + (list.length === 1 ? " internship found" : " internships found");

  if (list.length === 0) {
    showMessage("No internships found. Try another search or filter.", false);
  } else {
    hideMessage();
  }
}

// ---------- Search + filter together ----------
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const domain = domainFilter.value;

  const results = internships.filter(item => {
    const matchesDomain = domain === "all" || item.domain === domain;
    const matchesSearch = [item.title, item.company, item.domain]
      .some(text => text.toLowerCase().includes(query));
    return matchesDomain && matchesSearch;
  });

  renderCards(results);
}

// ---------- Fill the domain dropdown from the data ----------
function fillDomainOptions() {
  const domains = [...new Set(internships.map(i => i.domain))].sort();
  domains.forEach(d => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    domainFilter.appendChild(option);
  });
}

// ---------- Events ----------
searchInput.addEventListener("input", applyFilters);
domainFilter.addEventListener("change", applyFilters);
document.getElementById("controls").addEventListener("submit", e => e.preventDefault());

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  domainFilter.value = "all";
  applyFilters();
  searchInput.focus();
});

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after choosing a link
mainNav.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ---------- Start the app ----------
try {
  internships = loadData();
  fillDomainOptions();
  applyFilters();
} catch (error) {
  console.error(error);
  resultCount.textContent = "";
  showMessage("Sorry, we couldn't load the internships right now. Please try again later.", true);
  searchInput.disabled = true;
  domainFilter.disabled = true;
  clearBtn.disabled = true;
}
