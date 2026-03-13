---
sidebar_position: 1
---

# My Profile

Every user (both Agents and Admins) can update their own profile via **My Profile** in the admin navigation (bottom of the sidebar).

![My Profile](/img/my_profile.png)

---

## Profile Information

| Field | Required | Notes |
|---|---|---|
| Profile Photo | — | Upload avatar image — displayed on your public agent profile and in the admin panel |
| Name | ✅ | Your display name |
| Email | ✅ | Must be unique across all users |
| Phone Number | ✅ | WhatsApp / contact number |
| Bio | — | Short description shown on your public agent profile page |

Click **Save Changes** to apply updates.

---

## Updating Your Password

The password section is collapsed by default. Click to expand it.

| Field | Notes |
|---|---|
| Current Password | Required to confirm your identity before changing |
| New Password | Must meet the platform's password strength requirements |
| Confirm New Password | Must match the new password |

:::caution
You must enter your **Current Password** correctly to save a new password. If you have forgotten your password, log out and use the **Forgot Password** flow instead.
:::

---

## Profile Photo

Your profile photo appears:
- In the top-right corner of the admin panel
- On your public agent profile page at `/agent/{id}`

Accepted formats: JPG, PNG. Images are stored in the `avatars/` directory.
