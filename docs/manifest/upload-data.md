# Upload Data (File Maintenance)

The **Upload Data** module allows Traffic desks and Manifest Administrators to initialize flight cargo shipments using standard Excel templates. This stage kicks off the **Pre-Alert** operational milestone.

---

## 📥 Step 1: Download the Standard Template

Before uploading any shipment data, you must ensure your Excel file matches the system's structural format perfectly.

1. Navigate to **Manifest** ➔ **Upload Data** from the sidebar menu.
2. Click on the **Download Files** tab at the top of the interface card.
3. Click the large blue **Download Template** button.

![Download Template Screen](/img/manifest_download.png)

4. Open the downloaded Excel sheet and populate it with your incoming manifest elements (*M-AWB, H-AWB, Commodities, Weights, Pieces, etc.*).

---

## 📤 Step 2: Uploading Pre-Alert Manifests

Once your data sheet is correctly filled out, you can feed it into the Control Tower ecosystem.

1. Toggle back to the **Upload Files** tab layout.
2. Drag and drop your completed Excel file directly onto the dashed rectangle boundary labeled **"Drop files here to upload"**. Alternatively, click inside the zone to browse your local computer files.

![Upload File Drop Zone](/img/manifest_upload.png)

3. Review the uploaded file row confirmation details.
4. Click the blue **Send / Airplane icon button** positioned right above the drop area to process the manifest into the database pipeline.

:::tip Validation Warning
Files containing incorrect column headers, missing mandatory fields (like a missing M-AWB sequence), or non-USD values inside the invoice columns will fail validation checks. If a failure occurs, re-download the template and verify the input fields.
:::

---

## 📊 Understanding the 3-Sheet Template Structure

The standard Excel template relies on three distinct sheets to populate the database properly. Missing tabs or misaligned row indices across these sheets will trigger a pipeline failure.

### 1. The "Header" Sheet
This sheet establishes the overall transportation parameters for the shipment. It feeds directly into the **Pre-Alert** and **Entry Manifest (BC 1.1)** modules to match the incoming plane/vessel metrics.

![Template Header Sheet](/img/template_header.png)

* **Key Fields:** `CALL SIGN`, `IMO NUMBER`, `ORIGIN` (e.g., Singapore), `DESTINATION` (e.g., Indonesia), `NO VOYAGE / ARRIVAL`, `ARRIVAL DATE / TIME`.
* **Purpose:** Tells the system *how* and *when* the cargo is arriving so the system can look for the correct BC 1.1 customs registration match.

### 2. The "Detail" Sheet
This sheet tracks the physical metrics of the packaging units and individual master invoices. It is utilized heavily during the **TPS Online (Gate In / Out)** warehouse sorting process.

![Template Detail Sheet](/img/template_detail.png)

* **Key Fields:** `INVOICE NUMBER / DATE`, `PACKAGING QTY`, `TYPE OF PACKAGING` (e.g., PK for Package/Crate), `BRUTO ON KG` (Gross), `NETTO ON KG` (Net), `VOLUME`.
* **Purpose:** Tells the warehouse administration exactly what the cargo looks like, its physical dimensions, and box weights to prevent discrepancies during the physical X-ray track.

### 3. The "Goods" Sheet
This sheet contains item-level itemized listings for every good inside those packages. It maps directly into the **CN (Consignment Note)** data processor and **PIBK Module**.

![Template Goods Sheet](/img/template_goods.png)

* **Key Fields:** `HS CODE`, `NAME OF GOODS` (Item Descriptions), `CURRENCY` (Must be USD), `PRICE`, `INSURANCE`.
* **Purpose:** Provides the regulatory data elements. The system reads the `HS CODE` and `PRICE` fields here to automatically compute target import taxes, duties (**BMPDRI**), and trigger customs clearance responses (**SPPBMCP**).