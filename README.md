# InternBoard: Responsive Internship Board

A responsive internship listing website I built for Task 02 of the EdVyro Full-Stack Development Internship. You can browse internships, search them, and filter them by domain. It works on mobile, tablet and desktop.

**Live demo:** https://debasissamui913-debug.github.io/internship-board/

## Features

- Internship cards with role, company, domain, location, duration, work mode and a short description
- Apply button on every card
- Cards are created with JavaScript from an array, not written by hand in HTML
- Search by title, company or domain (results change while typing)
- Domain dropdown filter that works together with search
- "Clear filters" button
- Empty state: "No internships found. Try another search or filter."
- Error state: broken records are skipped, and a friendly message shows if the data cannot load
- Header with a menu button on small screens
- Contact section

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, media queries, CSS variables)
- Vanilla JavaScript (no frameworks or libraries)

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

### Why `internships.js` and not `internships.json`?

Browsers block `fetch()` for JSON files when a page is opened directly from a folder, so the site would not work by just double clicking `index.html`. To keep it simple, I kept the data in a JavaScript file. It can be changed to JSON later if the site runs on a server.

## How to Run Locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the Live Server extension.

No installation is needed.

## Accessibility Features

- Semantic tags: `header`, `nav`, `main`, `section`, `article`, `footer`
- "Skip to main content" link
- Every input has a label
- Buttons and links work with the keyboard
- Focus outline is clearly visible
- Apply buttons have clear labels that mention the role and company
- ARIA is used only where needed: menu button (`aria-expanded`), result count (`aria-live`) and error message (`role="alert"`)
- Text has enough contrast with the background
- Animations are reduced for users who prefer less motion

## Responsive Design Details

| Screen | Breakpoint | Layout |
|---|---|---|
| Mobile | below 600px | 1 column, menu button, stacked filters |
| Tablet | 600px and above | 2 columns, search and filter in one row |
| Desktop | 900px and above | 3 columns, full navigation bar |

## Screenshots

**Desktop**

![Desktop view](screenshots/desktop.png)

**Tablet**

![Tablet view](screenshots/tablet.png)

**Mobile**

![Mobile view](screenshots/mobile.png)

**No results**

![Empty state](screenshots/empty-state.png)

## GitHub and Deployment

1. Create a public repository named `internship-board` on GitHub.
2. Upload all the project files to the repository.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, the site is live at `https://debasissamui913-debug.github.io/internship-board/`.

## Things I Want to Improve

- Add a details page or popup for each internship
- Add sorting (for example by duration)
- Save favourite internships
- Connect it to a real API

## Contact

- Name: Debasis Samui
- Email: debasissamui913@gmail.com
- Location: Kolkata, West Bengal, India
- GitHub: https://github.com/debasissamui913-debug
