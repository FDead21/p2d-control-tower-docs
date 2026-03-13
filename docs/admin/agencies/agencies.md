---
sidebar_position: 4
---

# Agency Management

:::caution Admin Only
Only **Admins** can create, edit, or delete agencies.
:::

![Agency List](/img/agency_main.png)

Agencies are real estate offices or brokerages. Agents can be assigned to an agency, and each agency has a public profile page.

---

## Agency List

The agency list shows: Logo, Agency Name, Email, Phone Number, and Created date.

---

## Creating an Agency

![New Agency](/img/agency_new.png)

Go to **Agencies → New Agency**.

| Field | Required | Notes |
|---|---|---|
| Name | ✅ | Agency display name |
| Slug | Auto | Generated from the name — used in the public URL `/agency/{slug}` |
| Logo | — | Upload agency logo (displayed as circular avatar) |
| Phone | — | Agency contact number |
| Address | — | Full office address |

:::info
The slug is auto-generated when you type the agency name. It is used in the public-facing URL for the agency profile page.
:::

---

## Editing an Agency

![Edit Agency](/img/agency_edit.png)

Click **Edit** on any agency to update its details. The slug field is disabled after creation to preserve existing URLs.

---

## Assigning Agents to an Agency

Agents are assigned to agencies via the **User edit form** — not from the agency form itself.

1. Go to **Users**
2. Edit the agent
3. In the **Office / Agency** field, search for and select the agency
4. Save

The agent's listings and profile will then appear under that agency's public page at `/agency/{slug}`.

---

## Public Agency Profile

Each agency has a public page at:
```
/agency/{slug}
```

This page shows the agency's details and all published property listings from agents belonging to that agency.
