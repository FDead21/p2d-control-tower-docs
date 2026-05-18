# Customs Response Tracking (All Response)

The **All Response** dashboard module is a dedicated regulatory tracking dashboard inside the **Response Data** sidebar category. It acts as an audit hub that aggregates, filters, and logs all incoming electronic responses, warnings, tax alerts, and cargo release orders directly from the Indonesian Customs network (*Bea dan Cukai*).

---

## 📑 Interface Controls & Tab Filters

The workspace is organized into code-specific filtered tab grids. This allows Customs Administrators to isolate problematic shipments or instantly download legal cargo release slips.

### 🔄 The Synchronization Controller
Click the dropdown button in the top-right corner of the interface card and choose **"Get All Response"**. This fires a global system sync request to fetch and process all pending response updates directly into your datatable queues.

### 🗂️ Customs Response Code Matrix
The interface divides incoming alerts into distinct tab layouts based on official customs registration codes:

* **All:** Displays a chronological master stream of every status update logged across all cargo lots.
* **Terbit Billing (303):** Displays shipments that have successfully received their official customs duty invoice billing code structures.
* **NPBL (304) & SPBL (306):** Focuses on restricted or problematic shipments (*Nota Pembetulan / Surat Pemberitahuan Barang Larangan & Pembatasan*) requiring regulatory compliance reviews.
* **SPPBMCP (401):** Displays the automated mail customs release approvals issued for postal-vetted parcel segments.
* **SPTNP (402):** Filters tariff adjustment notices (*Surat Penetapan Tarif dan/atau Nilai Pabean*) triggered when customs officers correct product valuations or cargo tax brackets.
* **SPPB (403/404):** Displays the final verified release certificates (*Surat Persetujuan Pengeluaran Barang*) verifying successful customs clearance processing.

---

## 📊 Response Ledger Columns

Every filtered sub-grid shares a standard table structure to simplify shipment auditing workflows:

| Column Header | Functional Definition |
| :--- | :--- |
| **Goods Number** | The individual house asset tracking identifier key. |
| **Response Code & Detail** | The official numeric tracking sequence paired with its exact text definition. |
| **Datetime of Record** | Exact millisecond timestamp logged when the platform captured the electronic document response. |
| **Office Code** | Specifies the exact customs regional branch location managing the tracking review block (e.g., KPPBC CGK). |
| **PIBK Number & Date** | The legal tax identification tracking stamp applied to the cargo. |
| **PDF** | Contains click-to-download links targeting archived digital copies of the official customs certificate layout prints. |