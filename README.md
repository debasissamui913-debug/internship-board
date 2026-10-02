# InternBoard: Responsive Internship Board

A clean, responsive internship listing website built for the **EdVyro Full-Stack Development Internship, Task 02**. Users can browse internships, search them, and filter by domain.

## Features
- Internship cards showing role, company, domain, location, duration, work mode, description and an Apply button
- Cards rendered dynamically from a JavaScript array (no hard-coded cards in HTML)
- Live search by title, company or domain
- Domain dropdown (built automatically from the data) that works together with search
- "Clear filters" button
- Empty state: "No internships found. Try another search or filter."
- Error state: invalid records are skipped, and a friendly message appears if the data cannot be loaded
- Responsive header with a mobile menu button
- Accessible, keyboard-friendly design

## Technologies Used
- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6)

No frameworks or libraries.

## Project Structure
```
internship-board/
├── index.html
├── css/style.css
├── js/script.js
├── data/internships.js
├── screenshots/
└── README.md
```

### Why `internships.js` instead of `internships.json`?
Browsers block `fetch()` on JSON files when a page is opened directly from disk (`file://`), so a JSON file would need a local server just to run. To keep the project beginner-friendly and runnable by double-clicking `index.html`, the data lives in a plain JavaScript array in `data/internships.js`. Switching to JSON later only requires replacing it with a `fetch()` call.

## How to Run Locally
1. Download or clone the project.
2. Open the `internship-board` folder in VS Code.
3. Double-click `index.html`, or right-click it in VS Code and choose **Open with Live Server** (optional extension).

## Accessibility Features
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`
- "Skip to main content" link
- Every input has a visible `<label>`
- Native `<button>` and `<a>` elements, so everything works with the keyboard
- Clear visible focus outline on all interactive elements
- Apply links have descriptive labels (role, company, opens in new tab)
- ARIA used only where needed: `aria-expanded`/`aria-controls` on the menu button, `aria-live` on the result count, `role="alert"` on errors
- Good color contrast and `prefers-reduced-motion` support

## Responsive Design Details
| Screen | Breakpoint | Layout |
|---|---|---|
| Mobile | under 600px | 1 column, menu button, stacked filters |
| Tablet | 600px and up | 2 columns, filters in one row |
| Desktop | 900px and up | 3 columns, full horizontal navigation |

## Screenshots
Add your screenshots to the `screenshots/` folder and update the paths below.

| View | Screenshot |
|---|---|
| Desktop | ![Desktop view](screenshots/desktop.png) |
| Tablet | ![Tablet view](screenshots/tablet.png) |
| Mobile | ![Mobile view](screenshots/mobile.png) |
| Empty state | ![Empty state](screenshots/empty-state.png) |

**How to take them:** open the site in Chrome, press `F12`, click the device toolbar icon (`Ctrl+Shift+M`), choose a size (Responsive: 1280px, 768px, 375px), then press `Ctrl+Shift+P`, type "screenshot" and pick **Capture screenshot**. For the empty state, search for `zzzz` first.

## Upload to GitHub
```bash
cd internship-board
git init
git add .
git commit -m "Add responsive internship board"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/internship-board.git
git push -u origin main
```
Create the empty repository `internship-board` on github.com first (no README/license).

## Deploy with GitHub Pages
1. Open your repository on GitHub, then **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. After 1 to 2 minutes your site is live at `https://YOUR-USERNAME.github.io/internship-board/`.

## Author
YOUR NAME, EdVyro Full-Stack Development Internship
