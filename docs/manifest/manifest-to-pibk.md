# Manifest to PIBK

The **Manifest to PIBK** module acts as the physical bridge connecting verified customs data clusters directly into the itemized financial calculation engine. It allows operators to check item line records (**Seri Barang**) nested inside consolidated flight lots and push them to the active financial queue.

---

## 🖥️ Manifest PIBK Workspace Dashboard

This view tracks the transition of master containers as they move from basic manifest registers into official custom tax clearance structures.

![Manifest to PIBK Workspace View](/img/manifest_to_pibk_main.png)

### Core Integration Columns
* **PIBK Status:** Tracks whether the item group has cleared financial data stages:
  * `Ready` (Blue Badge): Complete manifest data is present. Financial taxes and currency valuations are unlocked for processing.
  * `Submitted` (Green Badge): The shipment has been transferred out of manifest stages and is now active inside the **PIBK Module**.
* **Child Record Expansion Layout:** Clicking the green **+ (Plus)** toggle on any `Ready` row unfolds the sub-table tracking nested shipment item rows:
  * Shows the **Seri Barang** (Item Series Code), specific house invoices, total package counts (**Packaging Qty**), packaging codes (`PK`), gross weights (**Bruto**), and net weights (**Netto**).

---

## 🛠️ Action Queue Controls

Every row container displaying a `Ready` evaluation state grants access to two utility functions inside the **Action** column layout block:

### 1. Financial Evaluation Form (Calculator Icon Button)
* **Objective:** Launches the itemized tax valuation sub-modal setup screen.
* **Function:** Used to configure **Kurs Value** (Exchange Rates), adjust **Freight Value**, calculate **Insurance**, and define custom tax baseline allocations (**CIF, PPH, PPN, BM**).
* *Note: Complete step-by-step application entries for this sub-form are documented in detail inside the [PIBK Calculation Guide](../pibk/calculation.md).*

### 2. Push PIBK Data (Paper Rocket Send Icon Button)
* **Objective:** Dispatches the fully priced data lot over into the operational financial ledgers.
* **Usage:** Once all calculations return valid entries, click this button to change the row status token state over to `Submitted`, transferring the cargo bundle fields safely into the system's **PIBK Module**.