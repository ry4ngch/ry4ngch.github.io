---
title: "ASME-PVDE: General Configuration & System Checks"
date: 2026-07-12T18:00:00+08:00
layout: single
categories:
  - blog
tags:
  - ASME BPVC
  - VBA Programming
excerpt: "Part 1 of the ASME-PVDE usage guide series, detailing the General Configuration and System Check modules for automated pressure vessel design."
toc: true
toc_sticky: true
seo_title: "ASME-PVDE Excel VBA Tool – General Configuration & System Checks"
seo_description: "Master the general configuration and system check modules in the open-source ASME-PVDE tool. Learn how to handle global settings, PWHT flags, MDMT logic, and external pressure convergence."
---

When designing pressure vessels to ASME Section VIII, bridging the gap between dense engineering codes and practical software is a major hurdle. Enter ASME-PVDE — an open-source program built precisely for this purpose, translating decades of codified rules into an accessible, automated workflow.

Before diving into specific component calculations like shells, heads, or nozzles, you need to understand the engine running in the background. The **General Configuration** and **System Check** modules serve as the global command center for your entire design. They establish your baseline parameters, enforce code compliance, and flag potential issues long before they become costly design flaws. 

This post kicks off our series on utilizing ASME-PVDE by breaking down these foundational modules.

## 1. Setting the Baseline: General Configuration

The General Configuration is where you establish the overarching rules for your vessel. ASME-PVDE is structured in similar manner to CodeCalc, where each of the modules has its own custom configuration at the top of the worksheet. This allows you to freely customize each calculation without affecting the other modules. If a specific customization isn't needed, you can easily toggle off that worksheet's additional configuration.

For most pressure part component, the key global settings are as follow:

### Typical Worksheet Settings

*   **UG-16 Minimum Thickness Calculations:** You have the flexibility to globally toggle UG-16 minimum thickness rules on or off. Depending on your project phase or client requirements, skipping or enforcing this code check universally saves time and prevents contradictory inputs. When enabled, the system automatically applies minimum thickness requirements to every component, ensuring no shell, head, or nozzle falls below the code-mandated baseline.
*   **Consider UCS-66 Reduced MDMT (For Carbon Steel only):** By default this setting is `true`, the software will automatically reduce the basic MDMT for the active calculation sheet according to the calculated coincident ratio and after if the material is listed within UCS-23.
*   **Highlight all inputs:**: This specific option is available on all modules and helps to facilitate which cells is required to be filled by the users.

> [!NOTE]
> Each worksheet has its own custom configuration to cater for different scenarios.


## 2. Decoding System Checks and Troubleshooting Warnings

A truly reliable design tool doesn't just crunch numbers; it actively guards against code violations. Think of the System Check module in ASME-PVDE as an automated auditor that looks over your shoulder, flagging potential issues and guiding you toward ASME compliance before the design ever reaches the review stage.

Here is a breakdown of the most common system flags, what triggers them, and how to resolve them within your workflow:

### Common ASME-PVDE System Warnings & Resolutions

| System Flag / Error Type | Trigger Condition | ASME Code Reference | Detailed Troubleshooting / Resolution |
| :--- | :--- | :--- | :--- |
| **UG-16 Min. Thickness** | Component thickness falls below the globally specified minimum requirements. | UG-16(b) | Increase thickness to meet base minimums (typically 1/16" or 1.5mm) or review global exemption toggles in the configuration sheet. Verify that corrosion allowance has been properly accounted for in the thickness calculation. |
| **PWHT Mandated (Service)** | Vessel is flagged for lethal service or falls under specific material restrictions requiring mandatory heat treatment regardless of thickness. | UW-2 | Ensure Post Weld Heat Treatment (PWHT) is accounted for in the fabrication sequence, regardless of component thickness. Coordinate with the welding engineer to confirm PWHT parameters meet material specification requirements. |
| **PWHT Mandated (Thickness)** | Carbon or low-alloy steel governing thickness exceeds the code's non-PWHT thresholds based on P-number and material group. | UCS-68(b) / UCS-56 | Apply PWHT, or evaluate alternative materials and thicknesses to remain within exemption limits. Consider whether local PWHT is sufficient or if a full vessel post-weld heat treatment is required. |
| **MDMT Impact Test Required** | Material fails to meet low-temperature toughness limits based on the exemption curves in UCS-66, considering material group, thickness, and design temperature. | UCS-66 | Perform impact testing, adjust the Minimum Design Metal Temperature (MDMT) if process conditions allow, or select a material with superior low-temperature toughness. Review the material's P-number and consult the UCS-66 curves for allowable MDMT without impact testing. |
| **Iteration Convergence Failure** | External pressure or stiffening ring iterative calculations cannot successfully resolve within the specified number of iterations. | UG-28 / UG-29 | Review the Farey sequence bounds and verify that the initial external pressure inputs are within physically realistic limits to allow the algorithm to converge. Check for input errors in external pressure values or stiffening ring dimensions. |

### The Engine Behind the Checks: Iteration Convergence & The Farey Sequence

External pressure calculations are notoriously iterative and can easily cause basic spreadsheets to hang in infinite loops. To solve this, ASME-PVDE employs **Farey sequence** logic—a mathematical approach that efficiently narrows down the solution space.

*   **How it works:** When determining the optimal stiffening ring spacing or external pressure thickness, the tool uses this sequence to systematically bracket the solution and converge on the precise value without overshooting or getting trapped in a loop.
*   **The benefit:** This prevents Excel from freezing, providing a smooth, mathematically sound convergence for complex external pressure scenarios, directly preventing the "Iteration Convergence Failure" noted above.

---

## 3. Detailed Warning Analysis: PWHT, MDMT, and Convergence

Let's dive a bit deeper into the three most critical warnings you will encounter and how the software handles their specific code requirements.

### 3.1 PWHT Warnings

Post Weld Heat Treatment (PWHT) is one of the most critical fabrication requirements. ASME-PVDE provides three distinct categories of PWHT warnings tied to specific code paragraphs:

| Warning Cause | Relevant Code Paragraph (ASME Sect. VIII, Div. 1) | Software Limitation | Recommendation / Guidelines |
| :--- | :--- | :--- | :--- |
| **Service Restriction (Lethal service)** | UW-2(a) | No Limit (All code requirements are covered) | There are no recommendations for lethal service. PWHT is mandatory regardless of thickness (Applies to low alloy and carbon steel only). |
| **Service Restriction (Unfired Steam Boiler)** | UW-2(c) | No Limit (all code requirements are covered) | To avoid PWHT, design pressure < 50 psi (343 kPa) for low alloy or carbon steel vessels. |
| **Service Restriction (Direct Firing)** | UW-2(d) | The software does not check for P-No. 1 group only. Extra attention is required if the material is not P-No. 1. | To avoid PWHT, thickness <= 16mm (5/8 in.). |
| **Thickness of Carbon steel exceeds the PWHT Exemption Table UCS-56-1 through UCS-56-11** | UCS-56 | No Limit (All code requirements are covered for all product forms if they are butt welded joints) | General guideline: keep design thickness below 32mm for P-No. 1 group. For example, when 32 <= t < 38, selecting the preheat option will exempt you from PWHT. Beyond 38mm, this preheat option will not work even if set to "YES". |
| **MDMT < -55°F (-48°C) and Coincidence Ratio > 0.35** | UCS-68(b) | The software does not check for P-No. 1 group only. Extra attention is required if the material is not P-No. 1. | Impact test must be done colder than required MDMT. If possible, use P-No. 1 group material. To enable this check, set "Consider UCS-66 Reduced MDMT (For Carbon Steel only)" to "TRUE". |

> [!NOTE]
> The above PWHT warnings currently only appear in the pressure parts calculation modules. Other spreadsheets do not have built-in PWHT checks.

### 3.2 MDMT Warnings

Minimum Design Metal Temperature (MDMT) ensures adequate material toughness at low temperatures. ASME-PVDE provides rudimentary warnings when your MDMT falls below the calculated basic limits. It covers most requirements in UHA-51 and UCS-66, and all requirements in UNF-65.

| Material Exemption Clause | Relevant Code Paragraph | Warning May Be Caused By |
| :--- | :--- | :--- |
| **Carbon Steel** | UG-20(f), UCS-66 | UG-20(f) requirements: Thickness > 25mm (1 in) for Curves B, C or D; Thickness > 13mm (½ in) for Curve A. Or, the required MDMT exceeds the exemption thickness based on table UCS-66 for that specific impact test curve. |
| **High Alloy (Stainless Steel, Duplex Steel)** | UHA-51(d) | Required MDMT is lower than impact test temp, or the thickness > UHA-51(d) range. |
| **Titanium or Zirconium** | UNF-65 | Required MDMT < -75°F (-59°C). |
| **Copper Alloy, Nickel and Nickel Alloy, Cast Aluminium Alloy** | UNF-65 | Required MDMT < -325°F (-198°C). |
| **Wrought Aluminium Alloy** | UNF-65 | Required MDMT < -452°F (-269°C). |
| **All Materials** | N/A | Required MDMT is lower than the impact notch test values shown in ASME Sect II Part A and B. |

> [!NOTE] 
> While the software does not fully evaluate product forms for MDMT per the Appendix JJ flow chart, it covers the vast majority of scenarios. It is worth noting that even premium commercial software often misses edge cases like duplex stainless steel MDMT. For complete clarity on stainless steel impact testing, always refer to the nonmandatory Appendix JJ flow chart in ASME Sect. VIII, Div. 1.

### 3.3 Mitigating MDMT Warnings

If you trigger an MDMT warning, you generally have two paths to resolve it:
*   **Perform impact testing** at or colder than the required MDMT (this feature is available in the Dish Head and Shell modules; for other modules, the user must manually track this).
*   **Lower the MDMT requirements at the site** (e.g., by adding insulation to maintain metal surface temperatures or operating the equipment within a climate-controlled facility).

### 3.4 Resolving Iteration Convergence Warnings

If a thickness iteration for an external pressure calculation fails to converge, the simplest solution is to set the initial iteration value closer to the expected actual value. You will see this message in the Shell, Head, and Nozzle modules. Keep in mind that for the Nozzle module, the iterative sub-procedure is fully automated, meaning there are no iterative tables available for manual modification.

---

<details>
  <summary><strong>SYSTEM CHECK LIMITATIONS & ENGINEERING RESPONSIBILITY (Click to expand)</strong></summary>
  <div markdown="1">
  > [!WARNING]
  >
  > **THE SYSTEM CHECK MODULE IS AN ENGINEERING AID, NOT A SUBSTITUTE FOR PROFESSIONAL JUDGMENT:**
  >
  > While ASME-PVDE's System Check module is designed to catch common code violations and design inconsistencies, it is **NOT exhaustive**. The automated checks cover the most frequently encountered issues, but they cannot account for every possible design scenario, material combination, or code interpretation.
  >
  > **SPECIFIC SOFTWARE LIMITATIONS TO BE AWARE OF:**
  > *   PWHT checks are only implemented in the Shell and Dish Head modules; other spreadsheets do not include built-in PWHT requirements.
  > *   The software does not fully check for product forms to consider on MDMT requirements as per the Appendix JJ flow chart.
  > *   The software does not check for P-No. 1 group only for certain service restrictions; extra attention shall be taken if the material is not from P-No. 1 group.
  > *   MDMT checks for duplex stainless steel are not fully addressed.
  > *   The iterative sub-procedure for the Nozzle module is automated and does not provide iterative tables for manual modification.
  >
  > **YOU ARE ULTIMATELY RESPONSIBLE FOR:**
  > *   Verifying that all system flags have been properly addressed before finalizing any design.
  > *   Ensuring that your design meets ALL applicable requirements of the ASME Boiler and Pressure Vessel Code, not just the items flagged by this tool.
  > *   Applying professional engineering judgment to situations where code requirements are ambiguous or subject to interpretation.
  > *   Obtaining proper review and approval from a qualified Registered Professional Engineer (RPE).
  >
  > **Common oversights to watch for:**
  > *   System checks may not flag all combinations of material, thickness, and temperature that require special consideration.
  > *   Always verify that corrosion allowance values are consistent across all components.
  > *   Confirm that design temperatures used in calculations match the process specification.
  > *   Review all nozzle and attachment calculations independently for local stress effects.
  >
  > The authors and contributors of ASME-PVDE accept no liability whatsoever for errors, omissions, or incorrect application of code requirements. This tool is provided as an engineering aid to assist qualified professionals in their design work.
  </div>
</details>
---

*Up next: We will explore the Material & Database Management module, where we dive into the [ASME Section II material database integration][Material-And-Database-Integration] and learn how to manage custom materials for specialized applications.*

[Material-And-Database-Integration]: {% post_url 2026-07-12-asme-pvde-material-database-management %}