# PIBK Calculation Workspace

The **PIBK Calculation** module is the core financial ledger and valuation engine of the Control Tower platform. It is managed by the **Admin Pabean PJT** to calculate structural import taxes, convert exchange rates, audit Cost, Insurance, and Freight (**CIF**) properties, and allocate mandatory state revenue totals.

---

## 🖥️ Financial Valuation Dashboard

The main workspace tracks financial records for individual House Air Waybills (HAWBs), displaying real-time calculation matrices before generating official custom duty prints.

![PIBK Calculation Main Dashboard](/img/pibk_calc_main.png)

### The Financial Metric Matrix
* **NDPBM (USD):** The benchmark foreign exchange rate set by the Ministry of Finance (*Nilai Dasar Perhitungan Bea Masuk*).
* **FOB (Free On Board):** The absolute purchase value of the product before shipping.
* **Insurance & Freight:** Transit protection and carrier logistics pricing metrics.
* **CIF:** Calculated customs value baseline combining product, protection, and freight costs.
* **BM / PPH / PPN:** Itemized breakdowns for Import Duty (*Bea Masuk*), Income Tax (*Pajak Penghasilan*), and Value Added Tax (*Pajak Pertambahan Nilai*).
* **Total Paid:** The cumulative gross sum of all custom duties required to release the cargo lot.

---

## 🧮 Processing Tax Calculations (Form Price)

To compute or adjust import tax weights for a specific shipment item row:

1. Locate the target row entry on your ledger and click the blue **Calculator Icon** action button. This launches the **Form Price** window.

<!-- ![Form Price Configuration Modal](/img/pibk_price_form.png) -->

2. **MAWB Data:** The system automatically references the parent `Master BL/AWB Number` and internal `Id Barang` tracking markers.
3. **Kurs Data:** Input your regulatory market parameters:
   * **Kurs Value:** Log the current active NDPBM IDR conversion multiplier sequence.
   * **Freight Value:** Declare the carrier transport weight cost segment.
   * **Insurance Value:** Specify the cargo risk protection valuation premium row metric.
4. * **Price Data Allocation:** Input custom regulatory rates or verify calculated fields:
   * **CIF Value:** The baseline custom cost layout evaluated through the base formula: `CIF = FOB + Insurance + Freight`
   * **BM Value:** Computed Import Duty baseline mapping: `BM = CIF × Kurs Value × BM Duty Rate`
   * **PPN / PPH Values:** Regulated internal tax values balancing down on the import payload container logic: `PPN = (CIF × Kurs Value + BM) × PPN Rate`
     
5. Click the blue **Save Data** (or **Update Data**) button to execute calculations.

---

## 🎯 Success Confirmation

Once backend processors reconcile the tax variables successfully, the platform returns a native browser confirmation alert.

![Calculation Success Alert Dialog](/img/pibk_calc_alert.png)

Click **OK** to close out the alert loop. The system automatically populates your row columns and balances the final aggregated metric total inside the **Total Paid** dashboard field line block.