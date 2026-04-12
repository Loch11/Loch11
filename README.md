# Loch11 Creative Services — Website

A static portfolio website built with vanilla HTML, CSS, and JavaScript.

## File Structure

```
loch11/
├── index.html          ← Home page
├── work.html           ← Portfolio / galleries
├── about.html          ← About page
├── css/
│   ├── style.css       ← Shared styles (nav, footer, buttons, variables)
│   ├── home.css        ← Home page specific styles
│   ├── work.css        ← Work page specific styles
│   └── about.css       ← About page specific styles
├── js/
│   ├── main.js         ← Shared JS (nav scroll, hamburger, AOS init)
│   └── work.js         ← Gallery tab switching (work page only)
└── images/             ← CREATE THIS FOLDER — put your images here
    └── (your images)
```

## Setup: GitHub Pages

1. Create a GitHub account at github.com if you don't have one.
2. Create a new repository — name it `loch11` (or anything you want).
3. Upload all these files, keeping the folder structure intact.
4. Go to Settings → Pages → Source → set to "main" branch, "/" (root).
5. Your site will be live at: `https://yourusername.github.io/loch11`

**Recommended:** Install VS Code + the "Live Server" extension to preview 
your site locally before pushing to GitHub.

## Adding Images

1. Create an `images/` folder in the project root.
2. Add your image files (PNG, JPG, WebP recommended).
3. In the HTML, find the `img-placeholder` divs and replace them with:
   ```html
   <img src="images/your-image-name.png" alt="Description of image" />
   ```

## Adding Your Logo

In all three HTML files, find this comment:
```html
<!-- Replace above with image logo once ready: -->
```
Uncomment the `<img>` tag below it and update the `src` path.

## Contact Form (Formspree)

1. Go to formspree.io and create a free account.
2. Create a new form — you'll get a URL like `https://formspree.io/f/abcdefgh`
3. In `index.html`, find the `<form>` tag and update:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

## External Libraries Used

- **AOS (Animate on Scroll)** — scroll animations
  - Loaded via CDN, no install needed
  - Docs: michalsnik.github.io/aos

## Brand Colors (Quick Reference)

| Name        | Hex       |
|-------------|-----------|
| Chartreuse  | `#CCD72A` |
| Navy        | `#1c0f28` |
| Black       | `#000000` |
| White       | `#FFFFFF` |
