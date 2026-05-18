# TPS PJT Import Process Overview

This section covers the end-to-end system integration mapping for the **MSA Kargo TPS PJT Import Process**. The workflow tracks shipment movement from the port of origin, through customs validation, into the warehouse, and out for final delivery.

## 🔄 End-to-End Integration Pipeline

The operational pipeline consists of 6 integrated technical milestone checkpoints:

```text
[PRE-ALERT] ➔ [ENTRY MANIFEST] ➔ [PLP ONLINE] ➔ [TPS ONLINE] ➔ [CN GOODS] ➔ [TMS]

1. Pre-Alert (Data Initialization)
Action: Submission of arrival data via API / Excel upload.

Timeline: Must be completed 12 hours before aircraft takeoff.

Key Data Fields Required: M-AWB, H-AWB, Commodity details, HS Number, Coli, Kilo, Dimensions, Packing List, Cargo Manifest, Invoice (USD), NPWP Consignee, Flight details.

2. Entry Manifest (BC 1.1)
Action: Submitting documentation to the customs manifest platform.

Timeline: Processed 3 hours before aircraft landing.

Result: Receives the legal BC 1.1 tracking number.

3. PLP Online (Pindah Lokasi Penimbunan)
Action: Submitting the PLP relocation request form.

Result: Acquires the authorized PLP Number required to shift cargo from the primary apron to the specialized warehouse.

4. TPS Online (Temporary Storage Handling)
Action: Scanning physical freight entries at the warehouse barrier (Gate In).

Process: Includes X-Ray scanning checkpoints managed by Customs officers to allocate, store, or flag items (e.g., Dangerous Goods, Abandoned Items).

5. CN (Consignment Note) Barang Kiriman
Action: Draft creation of the CN document.

Process: Automated HS Code matching, calculation of import duties (BMPDRI), and issuance of the release order statement (SPPBMCP).

6. Transport Management System (TMS)
Action: Dispatch scheduling and tracking.

Process: Monitors real-time transit status updates and updates open API visibility counters.
```