# Manifest Data & Customs Updates

The **Manifest Data** platform module is a specialized regulatory clearance dashboard. It allows Manifest Operators to cross-reference **Master Air Waybills (MAWB)**, fetch live data updates, and download structured configuration templates required to secure authorized **BC 1.1 Customs Registration Numbers**.

---

## 🖥️ Workspace Dashboard Overview

This interface tracks bulk flight records, compiling flight metrics, carrier numbers, cargo arrival timestamps, and the exact count of linked House AWBs in a single data grid.

![Manifest Data Main Table](/img/manifest_data_main.png)

### Summary Data Columns
* **Master AWB & Date:** Identifies the primary airline container lot sequence.
* **Number of House AWB:** Total count of individual customer consignments inside the lot.
* **Airline / Flight Number / IMO Number:** Logistics identification keys tracking the air carrier.
* **Arrival Date & Time:** Scheduled timestamp marking landing tracking hooks.

---

## 🛠️ Action Controls Checklist

Every active Master record contains three specialized utility buttons inside the **Action** column grid to process document exchanges:

### 1. Download Manifest V1 (Yellow Download Button)
* **Objective:** Exports the base legacy manifest layout template configuration sheet.
* **Usage:** Used for older data processing engines requiring basic row arrays.

### 2. Download Manifest V2 (Blue Download Button)
* **Objective:** Exports the modernized, expanded manifest template spreadsheet.
* **Usage:** Generates the precise data matrices required for direct upload compatibility into modern customs declaration portals.

### 3. Update Manifest Data (Grey Cloud Icon Button)
* **Objective:** Pings core database cloud servers to pull tracking state logs.
* **Usage:** Click this to refresh landing time logs, reconcile data tallies, and synchronize tracking variables before closing out manifests.

---

## 🖨️ Regulated Document Previews

The platform features built-in print layout engines to output physical freight documentation sheets directly from the manifest matrix rows:

### 🏷️ Bulk MAWB Label Preview
Generates automated, large-format container placards containing custom embedded **Master QR Codes**. These labels are fastened directly to bulk pallets to automate high-speed warehouse scanning sequences during **Gate In** operations.

### ✈️ House Air Waybill (HAWB) Form Sheet
Generates the legally recognized, standardized layout printout tracking custom freight rules. It compiles the itemized fields configured during the **Add Goods** stage:
* Clear Shipper & Consignee address boxes.
* Complete piece count configurations (**HAWB PCS**) and physical scale weight tallies (**HAWB Weight**).
* Custom embedded security barcodes tracking tracking pipelines safely across global logistics network lanes.