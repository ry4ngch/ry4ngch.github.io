---
title: "Behind the Scenes – Building ASME PVDE in Excel VBA"
date: 2025-08-31T21:05:00+08:00
layout: single
categories:
  - blog
tags:
  - ASME BPVC
  - VBA Programming
excerpt: "The story behind the development of ASME PVDE, a one-of-a-kind Excel VBA software for pressure vessel design and engineering education."
toc: true
toc_sticky: true
seo_title: "ASME PVDE - The Open Source ASME Pressure Vessel Design Software Development Journey – Excel VBA Automation"
seo_description: "Discover the development journey of ASME PVDE in Excel VBA. Learn how this open-source tool bridges engineering knowledge and software automation, with built-in material databases and user-friendly interface."
image: "https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/splashscreen.JPG"
---

Curious about the **features of ASME PVDE**? Check out [ASME-PVDE: Intro & Features Overview][Feature-Overview] first.

[Feature-Overview]: {% post_url 2025-08-31-ASME-PVDE-feature-overview %}

---

In **February 2021**, I found myself in a period of transition. I had just resigned from a new job and was temporarily unemployed. Rather than seeing this as a setback, I saw it as an opportunity to explore an idea that had been on my mind for some time: developing a tool that could bridge the gap between **complex engineering codes** and practical, usable software for engineers.  

Many SMEs in Malaysia were still relying on **manual calculations**, and commercial engineering software was often too costly. Errors could easily slip in, and following ASME codes felt unnecessarily burdensome. I realized that my combined background in **mechanical engineering and programming** could be used to solve this problem. I decided to embark on a project that would eventually become **ASME PVDE**, a modular, interactive, and educational engineering tool built entirely in Excel and VBA.

---

### The Early Struggle

The first months were humbling, full of trial and error. Every challenge forced me to think creatively about both engineering logic and software design. Some of the key struggles included:  

- **Translating ASME BPVC Section VIII calculations into VBA logic** while keeping performance high and results accurate.  
- **Building an intuitive interface** to display Section II Part D material data, which involved **hours of careful manual extraction and validation**.  
- **Keeping the material and component databases up to date** as ASME publishes new codes every three years. Solved by **splitting data into yearly Excel files** and consolidating them with **Power Query**.  
- **Ensuring modularity and reusability across worksheets**, achieved through **named ranges scoped per worksheet**, allowing the tool to scale without breaking functionality.  

> These challenges highlighted the importance of **scalable design**, **data management**, and **user-focused software development**, even within the limitations of Excel and VBA. Each obstacle reinforced that building a useful tool required **thoughtful architecture, not just coding**.  

---

### Growth and Evolution

Over four years, ASME PVDE gradually transformed into something far more comprehensive than I initially imagined:  

- **Expanded databases** covering flanges, piping, gaskets, and other critical components.  
- **Multiple worksheets** to handle code-governed and non-code components.  
- **Flexible features** to accommodate a variety of engineering scenarios.  
- **Real-time feedback**, referencing relevant code paragraphs from the built-in codebook, so users understand not just the results, but the reasoning behind them.  

A key architectural decision was **leveraging the strengths of Excel and VBA**:  

- **Excel handles all calculations**, avoiding slowdowns from VBA when processing large datasets.  
- **VBA manages the interface, database filtering logic, and real-time feedback**, keeping the tool modular, responsive, and informative.  

Even though some parts of the 2025 edition of ASME codes have changed — for example, **Appendix 2 moved from Division 1 to Division 2** — many modules remain relevant, making the tool an excellent reference and teaching aid for engineers learning pressure vessel design.  

Some may ask why I didn’t build this in Python or another modern programming language:  

- Many engineers aren’t familiar with coding, and deploying Python apps can be nontrivial.  
- Python UI libraries are limited or require **commercial licenses**.  
- **Excel VBA** is already a familiar tool for engineers, making it the most practical and accessible choice.  

---

### Open-Source Impact

From the beginning, I wanted ASME PVDE to be more than just a personal project or a company utility. Released under a **GPL3 license**, it is freely available for engineers worldwide.  

The tool now serves as:  

- A **practical design aid**, helping engineers perform accurate calculations efficiently.  
- An **educational platform**, showing how to implement calculations, structure modular software, and reference code paragraphs.  
- Proof that **sophisticated engineering software can be built entirely in Excel and VBA**, even with thousands of material entries and complex rules, without external plugins or libraries.  

---

Looking back, developing ASME PVDE was as much about **architecture and problem-solving** as it was about programming. It was about **finding balance between tool limitations, user needs, and educational value**, and proving that **creativity and hybrid skillsets can overcome constraints**.  

Four years on, ASME PVDE has become more than a calculation tool — it is a **bridge between engineering knowledge and software design**, a **learning platform**, and an example of what can be achieved when engineers think beyond traditional tools.  

Curious about why I eventually moved industries, and how the industrial landscape is evolving? Read more in my post: [My Journey from Engineering Niche to Systems Thinking]({% post_url 2026-01-13-my-new-journey %})

Explore the [GitHub repository](https://github.com/ry4ngch/ASME-PVDE) and the [changelog](https://github.com/ry4ngch/ASME-PVDE/blob/master/changelog.md) to see how the tool has evolved. If it helps you in any way, a ⭐ is always appreciated.
