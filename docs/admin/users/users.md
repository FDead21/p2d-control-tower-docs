---
sidebar_position: 3
---

# User Management

:::caution Admin Only
User management is only accessible to **Admins**. Agents cannot see this section.
:::

![Users List](/img/users_main.png)

## User List

The user list shows all registered accounts with: Name, Email, Role, Phone Number, Avatar, Verified status, and Created date.

---

## Creating a User

![New User](/img/users_new.png)

Go to **Users → New User** and fill in the form.

| Field | Required | Notes |
|---|---|---|
| Name | ✅ | Full name |
| Email | ✅ | Must be unique |
| Password | ✅ | Set initial password |
| Role | ✅ | `AGENT` or `ADMIN` |
| Phone Number | — | WhatsApp/contact number |
| Avatar URL | — | Profile photo path |
| Office / Agency | — | Only visible when role is `AGENT` — links agent to an agency |
| Verified Agent | — | Toggle to show the **Blue Badge** on their public profile |

:::tip
When creating an agent manually as an admin, toggle **Verified Agent** to `on` to grant them the blue badge immediately without needing email verification.
:::

---

## Editing a User

![Edit User](/img/users_edit.png)

Click **Edit** on any user to update their details, change their role, assign them to an agency, or toggle their verified status.

---

## Roles Explained

| Role | What they can do |
|---|---|
| **AGENT** | Manage own listings, view own inquiries, edit virtual tours, update own profile |
| **ADMIN** | Everything — including user management, agency management, site settings, articles, and banks |

---

## Blue Badge (Verified Agent)

The blue badge appears on an agent's public profile page at `/agent/{id}`. It is awarded when:

- The agent verifies their email (automatic), **or**
- An admin manually toggles **Verified Agent** to enabled

To remove the badge, toggle **Verified Agent** to off in the user's edit page.
