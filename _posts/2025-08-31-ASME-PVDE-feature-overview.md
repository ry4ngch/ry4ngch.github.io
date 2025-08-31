---
title: "ASME-PVDE: Features Overview"
date: 2025-08-31T21:00:00+08:00
layout: single
categories:
  - blog
tags:
  - ASME BPVC
  - VBA Programming
excerpt: "Overview of the ASME PVDE Excel VBA tool for pressure vessel design automation."
toc: true
toc_sticky: true
---

🛠️ Simplifying Pressure Vessel Design with Excel + VBA

Want to know **how this tool was built and evolved**? Read [Behind the Scenes – Building ASME PVDE in Excel VBA][Development-Background].

[Development-Background]: {% post_url 2025-08-31-ASME-PVDE-development-background %}

The ASME PVDE Engineering Automation Tool is a custom-built **Excel VBA application** designed to streamline pressure vessel component calculations according to **ASME Section VIII, Division 1**. By integrating complex engineering logic into a user-friendly Excel interface, the tool enables engineers to perform accurate, audit-ready calculations with minimal setup time.

---

## ⚡ Key Highlights
- 🧩 **Calculations**: Comprehensive ASME Section VIII component sizing and stress checks  
- 📊 **Databases**: Materials, flanges, piping, gaskets, bolts (built-in)  
- 🖥️ **Worksheets**: Multiple sheets for code and non-code components  
- ⚡ **Workflow**: Excel-integrated with real-time warnings and quick navigation  
- 🛠️ **Ease of Use**: Suitable for engineers with limited coding experience  

Check out the [GitHub repository][ASME-PVDE] for more information.

[ASME-PVDE]: https://github.com/ry4ngch/ASME-PVDE

---

## What This Program Covers

### Code Base Calculation
- Cylindrical Shell Elements  
- Dish End (Torispherical & Elliptical)  
- Conical Element  
- Nozzle Design (attachable to various parent elements)  
- Electric Immersion Heater Support Plate  
- Flat Head or Bolted Cover Design  
- Custom Flange Design (Mandatory Appendix 2)  
- Tube to Tubesheet Joint Design  
- Flange Rating Checks per Code Case 2901 (UG-44)  

**Note:** All worksheets include **in-built warnings** on PWHT and Impact testing, providing **real-time feedback** during design.
{: .notice--info}

### Non-Code Calculations
- Lifting Lug Design (Ear Type & Perpendicular Type)  
- Davit Arm Design  
- Swing Bolt Cover Head Design  
- Eye Bolt Design  
- Base Block Design  
- Trunnion Lug Design  
- Restricted Orifice Plate Design  
- ASCE 7-10 Wind Pressure Calculation  

### Utility Tools
- **PED Classification** (Quick check for PED category)

### Built-in Database
- **Flanges** – ASME B16.5, ASME B16.47  
- **Gaskets** – ASME B16.20, ASME B16.21  
- **Piping** – ASME B36.10, ASME B36.19  
- **Bolting** – TEMA, PCC-1  
- **Materials** – ASME Sect. II Part D, Years 2019–2023