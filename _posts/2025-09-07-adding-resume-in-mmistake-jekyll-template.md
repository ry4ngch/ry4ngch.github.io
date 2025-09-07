---
title: "Integrating a Resume Layout into the Minimal Mistakes Jekyll Theme"
date: 2025-09-07T14:53:00+08:00
layout: single
categories: 
  - Jekyll
  - Ruby
  - Static Site
tags: 
  - Jekyll
  - Ruby
  - Minimal Mistakes
excerpt: "Learn how to enhance the Minimal Mistakes Jekyll theme by adding a fully customizable resume layout."
author: Ryan Goh
seo_title: "How to Add a Resume Layout to the Minimal Mistakes Jekyll Theme"
seo_description: "Learn how to enhance your Jekyll site with a customizable resume layout using the Minimal Mistakes theme. A step-by-step guide with code and layout integration tips."
toc: true
toc_sticky: true
---

In this tutorial, I’ll walk you through how I added a custom resume layout to the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll theme. This approach leverages Jekyll's flexible templating structure and data-driven content to create a modular and maintainable resume page.

---

### Step 1: Define Resume Data in `_data/cv.yml`

Start by creating a `_cv.yml` file in the `_data` directory. This file will hold all the content and structure for the resume components (e.g., profile, education, experience, skills, etc.).  
You can download a sample version of this file from my [GitHub repository](https://github.com/ry4ngch/ry4ngch.github.io).

---

### Step 2: Add Layout and Includes

Once the data file is ready:

1. Copy the `cv.html` layout file from the `_layouts` directory into your local project.
2. Copy the entire `resume` folder from `_includes` to your local `_includes` directory.

The `resume` folder contains all the sub-layouts (components) used within the `cv.html` layout. These partials are dynamically loaded based on the configuration specified in `_cv.yml`.

---

### Step 3: Resume Components Overview

The resume consists of multiple components, each implemented as a separate Liquid partial:

- **`basic.liquid`** – Renders simple list-type sections.
- **`chart.liquid`** – Displays bar chart visualizations.
- **`nav.liquid`** – Generates a dynamic navigation menu (currently in development).
- **`pill-tag.liquid`** – Used to display skills or tags as styled pill elements.
- **`progress-bar.liquid`** – Animates circular progress bars for skill levels or certifications (optional and not fully integrated).
- **`profile.liquid`** – Displays the sidebar with contact info, languages, and skills.
- **`timeline.liquid`** – Renders experience and education history in a vertical timeline format.

---

### Step 4: Add Custom Styling

To ensure your resume is styled correctly, copy the `custom` folder from the original theme’s `_sass` directory into your project. This folder should include:

- `_cv.scss`
- `_resume-nav.scss`

These partials must be imported into the main stylesheet (`minimal-mistakes.scss`) for them to take effect:

```scss
@import "custom/cv";
@import "custom/resume-nav";
```

---

### Step 5 (Optional): Add `font-mfizz` Icons
If you want to enhance your resume with additional technology or brand icons not available in Font Awesome, you can include the font-mfizz package:

1. Copy the `font-mfizz` folder into your `assets/css` directory.

2. Include the font styles in your main stylesheet as needed.

---

This setup offers a clean, data-driven approach to managing a resume on a static site. By leveraging Jekyll's modular architecture, the resume layout is both highly customizable and easy to maintain.

If you’d like to see a live demo or grab the full source code, visit the [GitHub repository](https://github.com/ry4ngch/ry4ngch.github.io).