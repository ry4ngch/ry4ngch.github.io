---
title: "ASME-PVDE: Core Code Modules – Shells, Heads, and Flanges"
date: 2026-07-12T18:20:00+08:00
layout: single
categories:
  - blog
tags:
  - ASME BPVC
  - VBA Programming
excerpt: "Part 3 of the ASME-PVDE usage guide series, detailing the core calculation modules for cylindrical shells, dish heads, flat heads, and flanges."
toc: true
toc_sticky: true
seo_title: "ASME-PVDE Excel VBA Tool – Shells, Heads & Flange Design"
seo_description: "Dive into the core ASME Section VIII design modules of ASME-PVDE. Learn how to automate thickness calculations for shells, torispherical heads, flat covers, and custom Appendix 2 flanges."
---

With our general configurations set and materials properly integrated from the Section II database, it is time to put the software to work. 

In Part 3 of our ASME-PVDE guide, we dive into the **Core Code Modules**—the heavy lifters of the application where the actual mechanical sizing and stress calculations happen.

This post will cover the primary pressure-retaining boundary components: Cylindrical Shells, Dish Heads, Flat Heads, and Flanges.

## 1. Cylindrical Shells & Dish Heads

The foundation of any pressure vessel is its shell and heads. ASME-PVDE automates the sizing of these critical components for both internal and external pressure conditions, handling the rigorous code requirements of UG-27, UG-28, and UG-34.

### Shell Module Deep Dive

The Shell module is designed to execute thickness calculations for vessel cylindrical shells under both internal and external pressure, as well as heat exchanger tubes (which include a UG-16(b) exemption). 

To ensure accurate calculations, you must correctly configure the following parameters:

*   **Design Length vs. Shell Length:** It is critical to understand the distinction here. 
    *   **Design Length (`L`):** This is the length of the component exposed to external pressure (the line of support as denoted in the code figures). If there is no external pressure, leave this blank. 
    > For a vessel with a dish head at each end, calculate it as: `Design length = 2 × (1/3 × head depth) + shell length` *(See Fig. UG-28.1 of ASME Section VIII, Division 1)*.
    *   **Shell Length:** The volumetric length of the component, used strictly to determine the weight and center of gravity of the vessel.
*   **Material Curve Selection:** This dictates the impact test exemption curve in Table UCS-66. Typically, P-No. 1 group materials use Curve B, while normalized materials use Curve D. Always refer to the UCS-66 figure notes to ensure proper application.
*   **Tube Bending Option:** Valid only for hairpin elements or heat exchanger tubes, this option calculates the required thickness *prior* to tube bending per TEMA code rules.
*   **PWHT Preheat Option:** When Post Weld Heat Treatment (PWHT) is required but the material thickness falls within the allowable UCS-56 table range, you can use preheating to gain an exemption.
*   **Forming Allowance ($t_f$):** This represents the material thickness after forming. For plate-formed shells, this is typically zero. However, standard pipes require a 12.5% mill tolerance deduction. Therefore, for pipe materials, calculate this as: $t_f = 0.875 × t_b$.

### Dish Head Module

The software supports the two most universally used head types: **Torispherical** and **Elliptical**. 
> [!NOTE]
> Standard ASME B16.9 end caps do not require this calculation per UG-44(a).

#### Geometry Definitions
Calculations begin by defining your core geometry: Knuckle Radius (K.R), Crown Radius (C.R), Straight Flange/Skirt Length (SF), and the Inner/Outer Diameter (D).
*   **Ellipsoidal Heads:** Crown and knuckle radii are based on approximations from Table UG-37 or Mandatory Appendix 1 (Table 1-4.1). A standard 2:1 ellipsoidal head uses a crown radius of $0.9 \times ID$ and a knuckle radius of $0.17 \times ID$.
*   **Torispherical Heads:** You must input the `L` (Crown Radius) and `IKR` (Knuckle Radius) values. A 10% torispherical head is the industry standard. For example, on an ID of 242.82mm, `L = 242.82` and `IKR = 24.282`.
*   **Straight Flange Length:** Define this per Fig. UW-13.1 or client specifications. Code minimum is typically $3 \times t_b$ or 38mm, though major clients (like Petronas or UOP) frequently mandate a 50mm minimum.

#### MDMT and Impact Test Logic
Toggle `"Consider UCS-66 Reduced MDMT"` to `TRUE` to allow the program to reduce the MDMT for applicable carbon steels (ensure this is `FALSE` for stainless steel). If your configuration fails the impact test requirements, ASME-PVDE will flag it with a red border and text. 

**How to clear MDMT Warnings:**
1.  Input a custom impact test temperature.
2.  Switch to an alternative material with a lower basic MDMT (e.g., LTCS or stainless steel).

### External Pressure & Stiffening (The Farey Sequence)

As discussed in Part 1, ASME-PVDE utilizes the **Farey sequence** to prevent infinite loops during iterative external pressure checks. This mathematical bracketing ensures the software rapidly converges on a stable, code-compliant thickness for vacuum conditions or stiffening rings.

> [!TIP]
> **Pro Tip for Iteration Settings:**
> 
> Scroll down (or to the right) to find the iterative tables. **Only change the first initial iteration value.** Leave iterations 2 through 50 untouched. The algorithm compares the calculated external pressure against the actual value; once the difference at the 50th iteration falls below 0.0001, the results have successfully converged and the warning message will disappear.

---

## 2. Unstayed Flat Heads & EIH Support Plates

Designing standard blind flanges is simple, but ASME-PVDE excels by handling custom flat plates and highly specialized heater supports.

### Custom Unstayed Flat Heads & Blinds

This module evaluates custom blind flanges and flat covers. It features a built-in cover selection menu to help you determine the correct Attachment Factor ("C"). 
*   **Element Type:** Choose between Flat Head, Cover Plate, or Bolted Flange. *(Use the "Flange" button to pull standard B16.5/B16.47 dimensions if needed).*
*   **Attachment Factor (C):** Click the C-dialog button to launch the cover selector. It will ask for specific geometry inputs based on your cover style to calculate the exact factor.
*   **Shape & Span:** Select whether the cover is Circular or Non-circular. Non-circular covers will prompt you for a long span length, which alters the short span "$d$" calculations per Fig. UG-39 or UG-34.

**Bolted Flange Specifics:** When evaluating a Bolted Flange, you must input gasket factors ($m$ and $y$). You can retrieve these via the "Gasket" database button (ASME B16.20 for metallic, B16.21 for non-metallic). For self-healing/self-energizing gaskets (like O-rings) that do not require additional seating pressure, you can set these factors to zero.

### Electric Immersion Heater (EIH) Support Plates

A major standout feature of this module is its built-in logic for EIH support plates based on **Mandatory Appendix 41** and **Code Case 2651-1**. 

>[!NOTE]
> **The Engineering Context:**
> 
> Historically, EIH plates were designed using standard flat plate rules (UG-34 / UG-39), which resulted in overly conservative, highly thick plates. Recognizing that these perforated plates actually behave more like U-tube tubesheets, the ASME committee introduced Code Case 2651-1 (and later Appendix 41). This allowed engineers to utilize Part UHX rules to design significantly thinner, more efficient EIH support plates. 

**Module Workflow:**
*   **Flange & Gasket Data:** Auto-populate dimensions, bolt circles, and gasket seating factors using the integrated databases.
*   **Bolt Torque Mechanics:** If bolt torque calculation is required, input $E_g$, $H_{mf}$, and $K_f$ (friction factor based on bolt coating).
*   **Hydrotest Allowables:** ASME VIII-1 doesn't explicitly dictate hydrotest allowables, but industry standard uses 90% of yield. By setting the hydrotest configuration to `TRUE`, the software intelligently adopts ASME VIII-2 allowables to prevent flange deformation during testing.

---

## 3. Flange Design and Rating Checks

Flanges are the most common point of failure for leaks. ASME-PVDE tackles them from two distinct angles: Rating Checks for standard flanges, and Custom Design for unique geometries.

### Standard Rating Checks (Code Case 2901 / UG-44(b))

This evaluates standard B16.5/B16.47 flanges under external piping loads to ensure the equivalent pressure doesn't exceed the flange's inherent pressure-temperature rating.

*   **Pressure Rating (PR):** Set the auto-fill to `TRUE` to pull the PR from the internal database. 
  
    > [!NOTE] 
    > For flanges > 24" NPS, switch this to `FALSE` and input manually.

*   **Nozzle Loads:** Input external loads per your client specification. The software aligns with the WRC-107 convention (where $P = F$), so ensure your client's load notations map correctly to the software's inputs. 

### Custom Appendix 2 Flange Design

When a standard flange won't work, the **Mandatory Appendix 2** module evaluates the complex interactions between gasket seating loads, bolt spacing, hub proportions, and rotational stresses. 

**Supported Flange Types:**
1.  **Integral Flanges** (e.g., Weld Necks)
2.  **Loose Ring Flanges with Hubs** (e.g., Integral Rings)
3.  **Loose Ring Flanges without Hubs** (e.g., Ring Flanges)

*   **Integral Flange Adequacy:** If an integral flange is selected, the software enforces two mandatory geometric checks: Minimum hub length ($h > 1.5 \times g_0$) and Hub slope ($(g_{1cor} – g_{0cor}) / h > 0.333$).
*   **Equivalent Pressure Conversion:** Per UG-22, any external nozzle or wind loads must be converted to equivalent pressure, directly impacting the required flange thickness.

---

<details>
  <summary><strong>SPECIFIC SOFTWARE LIMITATIONS TO BE AWARE OF (Click to expand)</strong></summary>
  <div markdown="1">
  > [!WARNING]
  >
  > *   The unstayed flat head module cannot be used to determine reinforcement openings on flat heads or blinds; use the nozzle module instead for such designs.
  > *   The conical element is not yet fully implemented in the nozzle module.
  > *   Full radiography (RT-1) is mandatory for all butt welds in shells and heads for lethal service [UW-11(a)(1)], steam service [UW-11(a)(3)], and when weld joint thickness exceeds 38mm (1-1/2 in) or the thickness prescribed in UCS-57, UHF-57, UHA-33, UCL-35, or UCL-36 [UW-11(a)(2)]. **Note: The software does not provide warnings on radiography. Hence, the user shall do their due diligence.**
  > *   For flange sizes greater than 24 inches NPS, the PR auto-fill option should be set to FALSE and manual input should be used.
  > *   The iterative sub-procedure for the nozzle module is automated and does not provide iterative tables for manual modification.
  >
  > **YOU ARE ULTIMATELY RESPONSIBLE FOR:**
  > *   Verifying that all design lengths, shell lengths, and material curves are correctly input before running calculations.
  > *   Ensuring that straight flange lengths meet both code minimums and client specifications.
  > *   Confirming that gasket materials, $m$ and $y$ values, and facing sketches are correctly selected from the appropriate standards.
  > *   Reviewing all flange designs for additional loads (nozzle loads, wind, seismic) and ensuring equivalent pressure calculations are accurate.
  > *   Obtaining proper review and approval from a qualified Registered Professional Engineer (RPE).
  >
  > The authors and contributors of ASME-PVDE accept no liability whatsoever for errors, omissions, or incorrect application of code requirements. This tool is provided as an engineering aid to assist qualified professionals in their design work.
  </div>
</details>
---

*In the final part of our Core Modules overview, we will cover the remaining structural and penetrative components: [Nozzle Reinforcement, Tube-to-Tubesheet Joints, and Lifting Lugs][Structural-And-Penetrative-Components].* 

[Structural-And-Penetrative-Components]: {% post_url 2026-07-12-asme-pvde-core-code-modules-nozzles-tube-joints-and-lifting-lugs %}