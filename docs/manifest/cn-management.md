# Consignment Note (CN) Management

The **CN (Consignment Note)** module is the primary administrative workspace utilized by the **Admin Pabean PJT**. It handles custom shipping instructions, tracks delivery history pipelines, manages party declarations, and calculates structural dimensional metrics for every itemized cargo entry.

---

## 🖥️ Workspace Overview

The main workspace features a responsive data table tracking all active custom declarations, paired with a real-time tracking panel on the right margin.

![CN Main Workspace](/img/cn_main.png)

### Active Tracking Columns
* **Action Menu:** Context-aware micro-buttons to execute sub-flows.
* **CN Number & Date:** The unique identifier tracking reference sequences.
* **Origin & Destination:** Routing path nodes (e.g., DKI Jakarta to Medan Area).
* **Shipper & Consignee Details:** Complete corporate names, addresses, and validation profiles.

---

## ➕ Creating a New Consignment Note (Add CN)

To log a manual shipping entry, click the primary blue **+ CN** button. This initializes a coordinated 3-Step validation modal.

### Step 1: CN Details
Input the root path parameters tracking the shipment routing profile.

![Add CN Step 1 Details](/img/cn_add_details.png)

* **CN Number:** System reference number tracking your current cargo lot.
* **Date:** The registration date timestamp.
* **Origin / Destination:** Text inputs map the target route. Click **Next** to proceed.

### Step 2: Shipper Information
Declare the sending party's legal identification details.

![Add CN Step 2 Shipper](/img/cn_add_shipper.png)

* **JNS IDPemberitahu:** Dropdown selector to establish verification documents:
  * `NPWP 12 DIGIT`, `NPWP 10 DIGIT`, `NPWP 15 DIGIT` (Tax IDs)
  * `PASPOR` (Passport) or `KTP` (National ID Card)
* **IDPemberitahu:** The numeric identification string matching the selected type.
* **Name / Address / Phone / Email:** Corporate profile inputs matching the manifest.

### Step 3: Consignee Information
Declare the receiving party's legal profiles. This section utilizes the exact same structure as the Shipper registration layout.

![Add CN Step 3 Consignee](/img/cn_add_consignee.png)

* Complete the legal ID selection rules and input matching communication targets, then click **Submit** to finalize the base container.

---

## 📦 Itemizing Cargo Elements (Add Goods)

Once a base CN container row is active, click the gray **+ (Plus)** action button to open the itemization sub-modal. This matches your core **Goods Sheet Excel integration layer**.

![Add Goods Interface](/img/cn_add_goods.png)

### Cargo Field Matrix
1. **Commodity Selector:** Pick the standardized asset group profile (e.g., *Karpet, Pakaian, Sarung, Mukena, Jam Tangan, Mainan*).
2. **HSCODE Alignment:** The system automatically locks the regulated Custom Harmonized System Code based on your selected Commodity profile.
3. **Currency & Price:** Declared unit metrics. Note that import operations default strictly to **USD**.

### 📏 Dimensional Volumetric Calculator
Click the light blue **+ Dimension** button to open real-time volume calculation rows. 

The system uses an inline mathematical logic step to process values:

> **Sub-Volume** = Jumlah Koli × ((Panjang × Lebar × Tinggi) / 1,000,000)

* **Chargeable Weight vs Gross Weight Logic:** The platform compares the calculated Volumetric CBM against physical scale weights (**Gross Weight**). It dynamically sets the higher value as your billing baseline (**Chargeable Weight**).

---

## 🛠️ Action Menu Cheat Sheet

Every active log row features a standardized action matrix containing six specialized task triggers:

| Icon | Action Element | Functional Objective | Target Routine |
| :---: | :--- | :--- | :--- |
| `➕` | **Add Goods** | Appends cargo items to the CN. | Initializes the Add Goods sub-form modal. |
| `📝` | **Edit Data** | Modifies current parameters. | Re-opens wizard configurations for corrections. |
| `🖨️` (Blue) | **Print Label** | Generates physical box tags. | Prints barcoded MSA routing stickers. |
| `🖨️` (Green) | **Print CN** | Generates legal declaration. | Generates official print copies of the full CN document. |
| `📄` | **Print Packing List** | Outputs the cargo packing log. | Pulls manifest rows into an itemized delivery sheet. |
| `📊` | **Get Status History** | Populates time logs. | Refreshes the side-panel lifecycle timeline graph. |