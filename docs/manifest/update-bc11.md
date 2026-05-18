# Manifest Update BC11

The **Update BC11** workspace is an essential custom regulatory tracking portal. It is used by Manifest Administrators to manually log, update, and monitor official **BC 1.1 Custom Manifest Numbers** and **AJU Reference Strings** once the customs office authorizes a cargo aircraft's arrival layout.

---

## 🖥️ Manifest BC11 Workspace Summary

The dashboard display monitors the regulatory authorization lifecycles of active Master Air Waybills.

![Manifest BC11 Main Dashboard](/img/bc11_main.png)

### Core Tracking Fields
* **Ref Number / No AJU:** The unique 26-digit customs pabean registration string tracking the import entry.
* **BC11 Number & Date:** The official legal manifest index number issued directly by the Indonesian Customs office (*Bea dan Cukai*).
* **BC11 Status:** Reflects the live custom sync tier:
  * `Ready` (Blue Badge): Base flight data container is fully consolidated and prepared for manifest registration variables.
  * `Submitted` (Green Badge): Legal BC11 parameters are locked into the flight ledger database.

---

## 📝 Submitting / Updating BC11 Parameters

When a flight manifest receives its official customs validation variables, operators must input the values to unlock the **PIBK Module** data pipelines.

1. Locate your target row entry item inside the data table grid.
2. Under the **Action** column, click the blue **Pencil / Edit icon** button to launch the **Form BC11** modal.

![Form BC11 Entry Layout](/img/bc11_form.png)

3. Review the locked tracking parameters inside the card:
   * **Master BL/AWB Number:** Read-only reference locking the target lot container.
4. Input the official validation sequences matching your paper customs clearance sheets:
   * **BC11 Number:** Log the official manifest file sequence.
   * **BC11 Date:** Select the exact manifest registration release calendar date.
   * **AJU Number:** Confirm or update the 26-digit declaration registration sequence.
   * **POS Number:** Specify the absolute line item row coordinate layout tracking your combined bundle item positions inside the main cargo plane layout.
5. Click the blue **Update Data** (or **Save Data**) button to commit updates to the system.

---

## ☁️ Pulling Live Customs Syncs

If your platform is linked directly to customs portal gateways via electronic data interchanges (EDI), click the gray **Cloud Download icon button** labeled **"Get BC11"** inside the Action column. This action automatically pings customs databases to pull verified numbers without requiring manual entry typing.