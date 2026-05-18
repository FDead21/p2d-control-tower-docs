# PIBK Document & Regulatory Exchange

The **Document** workspace serves as the electronic data interchange (EDI) gateway for the **PIBK Module**. It allows customs clearance managers to compile audited tax valuation metrics into standardized electronic schemas, dispatch automated declarations to Customs, and pull down structural status responses.

---

## 🖥️ Regulatory Exchange Dashboard

The document interface maps consolidated Master Air Waybills that have cleared the validation engine, tracking totals and providing automated data pipe triggers.

![PIBK Document Main Dashboard](/img/pibk_document_main.png)

### Workspace Data Tree
* **Master BL/AWB Number & Date:** Reference markers tracking the verified primary flight shipment.
* **Total House BL/AWB:** Total count of itemized individual consumer cargo packages nested inside the consolidated lot container.
* **Flight Name & Number:** Verified commercial logistics carrier data fields.
* **History Panel (Right Margin):** A live auditing timeline graph reflecting status loops returned by the Customs server portal network.

---

## 🚀 Customs Data Interchange Workflows

The platform utilizes twin electronic transaction triggers inside the **Action** column to eliminate manual data entry routines and securely sync records.

### 1. Send to BC (Blue Cloud Upload Button)
* **Functional Objective:** Packs itemized product records, weights, dimensions, and computed tax values into a standardized customs declaration file layout.
* **Operational Action:** Click this button to transmit your cargo declaration file directly into the official Customs core server database.

### 2. Get Response from BC (Light Blue Cloud Download Button)
* **Functional Objective:** Pulls legal processing updates directly from the Customs portal.
* **Operational Action:** Pings the Customs server gateway to verify transaction processing state hooks. 
* **Lifecycle Outputs:** Approved synchronizations automatically populate the live **History Timeline** panel with time-stamped status loops (e.g., *Data Received, Assessment Holds, Billing Codes, or Final SPPB Release Vouchers*).

:::info Refreshing Status Logs
Click the circular **Refresh icon button** inside the right History block title layout bar to manually force a re-fetch loop on the server background worker process without having to reload the main web page browser tab.
:::