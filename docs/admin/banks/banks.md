---
sidebar_position: 6
---

# Banks & KPR Settings

:::caution Admin Only
Only **Admins** can manage bank settings.
:::

![Banks](/img/banks_edit.png)

Banks are used to power the **KPR mortgage simulation** shown on property detail pages. Each bank entry stores its interest rates and loan terms so buyers can simulate monthly repayments directly on the site.

---

## Bank List

The list shows: Logo, Bank Name, Code (badge), Interest Rate, and Active status toggle.

---

## Adding a Bank

Go to **Settings → Banks → New Bank**.

### Bank Identity

| Field | Required | Notes |
|---|---|---|
| Name | ✅ | Full bank name e.g. `Bank Central Asia` |
| Code | ✅ | Short code e.g. `BCA` |
| Logo | — | Upload bank logo image |
| Is Active | — | Toggle off to hide from the mortgage simulator |

### KPR Program (Simulation Data)

| Field | Required | Default | Notes |
|---|---|---|---|
| Fixed Rate 1yr (%) | — | — | Fixed interest rate for the first year |
| Fixed Rate 3yr (%) | — | — | Fixed interest rate for 3 years |
| Fixed Rate 5yr (%) | — | — | Fixed interest rate for 5 years |
| Floating Rate (%) | ✅ | 11% | Rate applied after the fixed period ends |
| Min DP (%) | ✅ | 10% | Minimum down payment percentage |
| Max Tenor (Years) | ✅ | 20 years | Maximum loan duration |

:::tip
Set **Is Active** to off for banks that are temporarily not offering KPR programs. They will be hidden from buyers without being deleted.
:::
