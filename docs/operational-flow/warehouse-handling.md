# Warehouse Handling & Customs Inspection

This section details the internal warehouse operations, sorting layout logistics, and customs validation checkpoints at the **MSA TPS PJT Warehouse**.

## ⏱️ Proposed Lead Time: 60 Minutes
The target performance window from the moment cargo is received at the Lini-1 warehouse until it is properly sorted and checked inside the MSA warehouse is **60 minutes**.

---

## 👥 Role-Based Responsibilities

### 1. Traffic Desk (Target: 15 Mins)
* **Cargo Receipt:** Physically receives cargo elements from the Lini-1 operational team.
* **Pre-Load Verification:** Re-verifies all package tracking seals before cargo loading.
* **Transit Delivery:** Transports the locked cargo truck securely from Gudang Lini-1 to the MSA TPS PJT warehouse.

### 2. Admin Pabean PJT (Target: 5 Mins)
* **Data Uploads:** Uploads core declaration strings based on the locked Fix Pre-Alert data (Master AWB, CN data, Invoice, Packing List, NPWP Consignee, BC 1.1, and calculated customs values).
* **CN Submission:** Submits the digital Consignment Note directly to the customs core portal.
* **Response Management:** Monitors real-time gateway status indicators:
  * **Data Received / Verified:** Proceeds to physical clearance.
  * **Inspection Triggered:** Coordinates physical cargo examinations with customs officers.
* **Release Execution:** Receives and prints the **SPPB** (Customs Release Order) and submits warehouse cargo release requests.
* **Special Cases (BC 2.3):** Submits manual paperwork to acquire official paper Customs Wire Seals.
* **Billing Cycle:** Collects and generates import duty/tax billings at **24:00** nightly for all consolidated shipments processed during the day.

### 3. Admin Gudang TPS MSA (Warehouse Admin)
* **Inbound Planning:** Receives the incoming Fix Pre-Alert data to map out space allocations and assign ground handling crews.
* **Customs Integration:** Submits electronic **Gate In** data via TPS Online as soon as the cargo enters the gate.
* **Outbound Logistics:** Generates internal Delivery Orders (DO), prepares outbound shipping queues, files daily status reports, and submits final electronic **Gate Out** data via TPS Online.

### 4. Operasional Gudang TPS MSA (Ground Handling)
* Executes physical **Unloading** at the inbound bays.
* Directs cargo through **X-Ray Scanning & Sorting** lines.
* Allocates packages into specialized storage sub-zones:
  * **Storage Area** (Standard cargo profiles)
  * **Inspection Area** (Customs audit holds)
  * **DG Area** (Dangerous Goods configurations)
  * **Abandoned Item Area** (Problematic/unclaimed inventory)
* Performs final sorting, packing checks, and **Loading** into outbound delivery vans.