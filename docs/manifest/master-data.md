# Master Data Management

The **Master** data module manages high-level **Master Air Waybills (MAWB)**. This module consolidates multiple individual **Consignment Notes (CN / House AWBs)** into unified flight cargo manifests to fulfill airline freight handling guidelines and launch **BC 1.1 Customs Manifest Entry** requests.

---

## 🖥️ Master Dashboard Workspace

The Master layout provides a consolidated view of flight cargo lots, monitoring structural metrics like consolidated package quantities and absolute weights across entire cargo logs.

![Master Main Workspace](/img/master_main.png)

### Core Monitoring Columns
* **AWB Number:** The unique legal identifier marking the overarching Master Air Waybill bundle.
* **Airline & Flight Number:** Active carrier logistics keys tracking transport routes.
* **Quantity & Weight:** Cumulative math fields tracking total pieces (Coli) and gross weight (Kilo) derived from linked child CN items.

---

## ➕ Registering a Master Air Waybill (Add Master)

Click the primary blue **+ Master** button to launch the multi-step structural grouping wizard.

### Step 1: Master Details
Log the overarching transit data elements tracking flight paths.

![Add Master Details](/img/master_add_details.png)

* **Airwaybill:** Input the official master identification number.
* **Port Origin / Port Destination:** Declare international shipment gateway points.
* **Flight & Airline:** Carrier codes defining flight scheduling blocks.
* **Departure Date:** Expected flight takeoff time log.

### Step 2: Shipper Information
Declare the global orchestrating dispatcher or manufacturing group.

![Add Master Shipper](/img/master_add_shipper.png)

* Match tax parameters by defining the **JNS IDPemberitahu** (`NPWP`, `PASPOR`, `KTP`), input the legal **IDPemberitahu** sequence, and complete profile parameters.

### Step 3: Consignee Information
Log the terminal receiving entity or broker agency authorized to claim the combined shipment bundle upon landing.

![Add Master Consignee](/img/master_add_consignee.png)

* Complete the validation fields matching the official cargo manifest paperwork and click **Submit** to commit the Master container record.

---

## 🔗 Consolidating Shipments (Add CN List)

To link multiple single shipments into this larger flight lot, click the green **+ (Plus)** action button in your row workspace. This launches the **Add CN List** modal interface.

![Add CN List Dropdown Selector](/img/master_add_cn_dropdown.png)

1. The modal automatically displays the target parent **AWB** master anchor index.
2. Click inside the **CN Multi-Select Input Field** box to display a list of independent, loose Consignment Notes currently loaded into the system.

![Add CN List Form Submit](/img/master_add_cn_main.png)

3. Select all matching CN items that belong to this flight lot.
4. Click the blue **Submit** button to bind the child records to the parent MAWB.

---

## 🛠️ Master Action Row Cheat Sheet

| Icon Element | Component Action | Functional Target | Output Objective |
| :---: | :--- | :--- | :--- |
| `➕` (Green) | **Add CN List** | Consolidation Link | Pairs unassigned child CN items to this primary Master AWB row block. |
| `📝` (Yellow) | **Edit Data** | Parameter Update | Modifies flight itineraries or base route details. |
| `🖨️` (Green) | **Print Manifest** | Document Print | Generates the official flight cargo manifest mapping layout sheet. |
| `📊` (Blue) | **Get History** | Log Verification | Populates historical audit logs into the status timeline. |