---
title: "Behind the Scenes – Building ASME PVDE in Excel VBA"
date: 2025-08-31T21:05:00+08:00
layout: single
categories:
  - blog
tags:
  - ASME BPVC
  - VBA Programming
excerpt: "The story behind the development of the ASME PVDE. An Excel VBA software for pressure vessel design."
toc: true
toc_sticky: true
seo_title: "ASME PVDE - The Open Source ASME Pressure Vessel Design Software Development Journey – Excel VBA Automation"
seo_description: "Learn the story of ASME PVDE development in Excel VBA. Discover challenges, solutions, and evolution of this automated pressure vessel design tool with built-in material databases and user-friendly interface."
image: "https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/splashscreen.JPG"
---

Curious about the **features of ASME PVDE**? Check out [ASME-PVDE: Intro & Features Overview][Feature-Overview] first.

[Feature-Overview]: {% post_url 2025-08-31-ASME-PVDE-feature-overview %}

In **February 2021**, I joined a smaller company after leaving a large corporation. I noticed that many SMEs in Malaysia either avoided commercial engineering software due to cost or relied heavily on **manual calculations**, often leading to inefficiencies and potential errors.  

Motivated to **bridge the gap between engineering and modern digital tools**, I started developing a **user-friendly, automated engineering program** to help both beginners and experienced engineers. Leveraging my **web development background**, I explored ways to integrate Excel with a **custom interface** and a **built-in database**, enabling fast and accurate pressure vessel calculations.  

---

## Early Challenges
- Learning **VBA syntax** and translating engineering logic into code.  
- Building a basic interface to display **ASME BPVC Section II Part D material data**, which required **hours of manual extraction**.  
- Maintaining the **material database** as ASME publishes new code books every three years. Solved by splitting data into **individual Excel files per year** and using **Power Query** to compile them automatically.  
- **Reusing the material interface across worksheets** without conflicts. Solved using **Excel named ranges scoped to individual worksheets**.  

> These challenges taught me the importance of **scalable design**, **data management**, and **user-focused interface development**.

---

## How the Program Evolved
Over four years, the project has grown far beyond a simple material database:  
- **Expanded databases**: flanges, piping, gaskets, and other components.  
- **Multiple worksheets**: covering code-governed and non-code components.  
- **Options for multiple use cases**: adaptable to various engineering scenarios.  
- **User-friendly improvements**: enabling quick navigation and checks, even for engineers with limited coding experience.  

Some people ask why I didn’t build it in Python. The reasons:  
- Many engineers aren’t familiar with coding, and running a Python app wouldn’t be straightforward.  
- Python UI libraries are either limited or require **commercial licenses**.  
- **Excel VBA** is already integrated with a tool engineers use daily, making it the most practical choice.  

---

After four years of development, this project has become the robust tool you see today. Along the way, I learned a lot about balancing **user needs**, **data management**, and **software design** in a real-world engineering context.  

Explore the [GitHub repository](https://github.com/ry4ngch/ASME-PVDE) and check the [changelog](https://github.com/ry4ngch/ASME-PVDE/blob/master/changelog.md) to see how it has evolved over the years. If you find the program useful, please consider leaving a ⭐.  