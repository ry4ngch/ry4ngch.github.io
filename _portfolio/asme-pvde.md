---
title: "ASME-PVDE: Pressure Vessel Design Automation"
excerpt: "An automated engineering software that I've developed using Excel VBA to streamline ASME Section VIII code compliance and design analysis."
header:
  overlay_image: /assets/images/pressure_vessel_teaser.webp
  overlay_color: "#000"
  overlay_filter: "0.3"
  caption: "Automated Pressure Vessel Design Environment"
  property:
    title_classes:
      - page__hero__text_bg_blur
    lead_classes:
      - page__hero__text_bg_blur
  teaser: /assets/images/pressure_vessel_teaser.webp
sidebar:
  - title: "Developer"
    text: "Ryan Goh"
  - title: "Role"
    text: "Lead Software Developer"
  - title: "Stack"
    text: "Excel VBA, Power Query"
  - title: "Inspiration"
    text: "PVElite & CodeCalc"
  - title: "Database Size"
    text: "3,000+ Materials"
  - title: "Units Supported"
    text: "SI, Metric, Imperial"
  - title: "Compliance"
    text: "ASME Section VIII Div 1"
  - title: "UI Engine"
    text: "Context-Aware Fluent Ribbon"
  - title: "ASME Editions"
    text: "2019, 2021, 2023"
  - title: "Logic Type"
    text: "Version-Controlled Compliance"

gallery:
  - url: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/Material_Dialog.JPG
    image_path: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/Material_Dialog.JPG
    alt: "Centralized Material Database"
    title: "Material Selection Module"
  - url: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/User_Defined_Mat_Definition.JPG
    image_path: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/User_Defined_Mat_Definition.JPG
    alt: "Ryan Goh ASME-PVDE: Custom Material Definition Module"
    title: "User-Defined Materials"
  - url: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/Flange_Dialog.JPG
    image_path: https://raw.githubusercontent.com/ry4ngch/ASME-PVDE/master/Screenshots/Flange_Dialog.JPG
    alt: "Ryan Goh ASME-PVDE: Flange Selection and Analysis Dialog"
    title: "Flange Module"
---

The **ASME PVDE (Pressure Vessel Design Environment)** is a specialized engineering automation tool developed by **Ryan Goh**. The design was inspired by industry-standard tools like **PVElite** and architected using the component-based workflows of **CodeCalc**.

By integrating **ASME Section VIII Division 1** and **PED** requirements directly into a custom Excel VBA architecture, the tool provides a high-performance alternative for rapid engineering analysis.

{% include gallery caption="ASME PVDE Interface & Features" %}

{: .notice--info}
**Deep Dive:** I have written extensively about the [Development Background](/blog/ASME-PVDE-development-background/) and the [Technical Feature Set](/blog/ASME-PVDE-feature-overview/) of this software.

A key differentiator of the ASME-PVDE is its ability to handle the evolution of engineering standards:

* **Multi-Edition Support:** The software supports **ASME Section VIII Div 1 editions from 2019 to 2023**.
* **Dynamic Filtering:** Depending on the selected code year, the software automatically filters material properties and calculation options. This ensures that users only apply materials and design methods that were valid for that specific code edition.
* **3,000+ Material Database:** All modules link to a centralized database, allowing users to select properties instantly without manually opening the **ASME Sect. II Part D** code book.
* **Built-in PED Classification:** Users can determine **PED (2014/68/EU)** categories simultaneously while performing design calculations, ensuring global regulatory compliance.

## Advanced Software Architecture

* **Context-Aware Fluent Ribbon:** The UI dynamically enables or disables tabs (Flange, Piping, Gasket) based on the active module, reducing interface clutter and guiding the user through the design process.
* **Automated Compliance Pathing:** The logic engine determines **Impact Test** and **Post-Weld Heat Treatment (PWHT)** requirements automatically based on material selection and thickness.
* **Multi-Unit Engine:** Built-in support for **SI, Metric, and Imperial** units allows for seamless setup across international projects.

## Further Reading

To learn more about how this project was built and its full range of capabilities, please visit the following articles:

### [1. Development Background: The "Why"](/blog/ASME-PVDE-development-background/)
An insight into the challenges of manual engineering design and the motivation behind building a custom VBA-driven automation suite.

### [2. Technical Feature Overview: The "How"](/blog/ASME-PVDE-feature-overview/)
A closer look at the UI design, the Power Query integration, and the logic used to handle complex ASME calculations.

## Impact and Efficiency

* **Streamlined Workflow:** Contextual UI ensures only relevant tools are visible, reducing interface clutter.
* **Regulatory Compliance:** Simplifies the complex process of PED classification alongside ASME design.
* **Design Speed:** Reduces total design and checking time by up to 80% through deep automation.

---
**View the Source Code:** [GitHub Repository](https://github.com/ry4ngch/ASME-PVDE)