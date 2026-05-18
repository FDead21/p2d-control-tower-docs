# HS-CODE List Reference Database

The **HS-CODE List** module serves as the primary system-wide global master look-up directory for customs tax codes based on standardized Indonesian customs data. This module acts as the automated data repository that feeds default tax, duty, and tariff percentages directly into the **Manifest Management** and **PIBK Module** data fields.

---

## 🔍 Database Table Matrix

The workspace operates as a high-performance searchable datatable grid. The data elements are split across eight core tracking parameters to align individual product assets with precise national regulatory tax tiers:

| Table Header | Field Objective | Functional Value |
| :--- | :--- | :--- |
| **NO.** | Row Counter | Numerical row index order identifier. |
| **HS CODE** | System Tariff Key | The internationally standardized code string used to classify traded commodities. |
| **Uraian Barang** | Legal Asset Identity | Legal Indonesian text description specifying the classified commodity asset profile. |
| **Description of Goods** | Global Asset Identity | Legal English translation of the product's descriptive commodity parameters. |
| **BM (%)** | Import Duty Baseline | *Bea Masuk* — The baseline tariff percentage charged on incoming foreign goods. |
| **BK (%)** | Export Duty Baseline | *Bea Keluar* — The standard tax rate percentage applied when assets depart domestic ports. |
| **PPN (%)** | Value Added Tax | *Pajak Pertambahan Nilai* — The standard national internal consumption tax percentage. |
| **PPN BM** | Luxury Tax Tier | *Pajak Penjualan atas Barang Mewah* — The additional customized tax rate multiplier tracking luxury commodity rows. |

---

## ⚙️ Automated Pipeline Integration

Operators do not need to manually configure tax numbers when listing cargo items. The platform's relational database infrastructure relies on this reference engine to handle workflows automatically:

1. When an operator selects a standardized product group profile inside the **Add Goods** sub-modal form layout, the system searches this database tree using a backend lookup routine.
2. The platform hooks the exact matching row index data parameters, locks down the regulatory code string, and automatically auto-fills your active input fields with the predefined **BM, PPN, and PPH** percentages.
3. This synchronization layout ensures your financial equations remain error-free during the **PIBK Calculation** phase.