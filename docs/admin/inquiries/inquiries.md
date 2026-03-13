---
sidebar_position: 2
---

# Inquiries (CRM)

Inquiries are leads submitted by visitors via the property contact form. They are managed through the **CRM → Inquiries** section.

![Inquiries List](/img/inquiries_main.png)

:::info
A **red badge** on the Inquiries menu shows the number of unread (`NEW`) leads. Check it regularly to respond to leads quickly.
:::

## Inquiry Statuses

| Status | Meaning |
|---|---|
| 🔴 **NEW** | Just received, not yet acted on |
| 🟡 **CONTACTED** | Agent has reached out to the buyer |
| 🟢 **CLOSED** | Deal closed or inquiry resolved |

## Who Sees What

- **Agents** only see inquiries for their own properties
- **Admins** see all inquiries across the platform

---

## Viewing & Managing an Inquiry

![Inquiry Edit](/img/inquiries_edit.png)

Click **Edit** on any inquiry to open the detail view.

### Lead Information (Read Only)

| Field | Description |
|---|---|
| Property Interested In | The listing the buyer inquired about |
| Received At | Date and time of submission |
| Message | The buyer's original message |

### Buyer Details (Read Only)

| Field | Description |
|---|---|
| Name | Buyer's full name |
| WhatsApp / Phone | Contact number submitted via the form |

### CRM Actions (Editable)

| Field | Description |
|---|---|
| Status | Update to `Contacted` or `Closed` as you progress |
| Internal Notes | Private notes visible only to agents/admins — e.g. *"Called, waiting for site visit confirmation"* |

---

## WhatsApp Quick Chat

![WhatsApp Chat](/img/inquiries_whatsapp.png)

Click the green **Chat** button on any inquiry in the list to open a pre-filled WhatsApp conversation with the buyer.

The message is automatically pre-filled with:
```
Hello {Buyer Name}, this is about your inquiry for {Property Title}...
```

:::tip
Use the WhatsApp button immediately on new leads for the fastest response time.
:::

---

## Deleting Inquiries

Only **Admins** can delete inquiries. Agents can view and update status but cannot delete records.

---

## Submitting an Inquiry (Public Side)

Visitors submit inquiries via the contact form on any property page at `/property/{id}/{slug}`.

**Required fields:**
- Name
- Phone / WhatsApp number
- Message

Submissions are rate-limited to **3 per minute** per visitor to prevent spam. All new inquiries are saved with status `NEW`.
