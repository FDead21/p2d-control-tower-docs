---
sidebar_position: 1
---

# Authentication

## Agent Registration

New agents register at `/agent/register` (or via the Filament panel at `/admin/register`).

![Register Page](/img/register.png)

**Required fields:**

| Field | Notes |
|---|---|
| Name | Full name |
| Email | Must be unique |
| WhatsApp Number | Used for contact and CRM |
| Password | Minimum 8 characters |
| Password Confirmation | Must match password |

After registering, the account is automatically assigned the **AGENT** role and a verification email is sent.

:::info
New registrations are set to `is_verified: false` by default. The blue badge is only awarded after email verification.
:::

---

## Email Verification

After registering, you must verify your email before accessing the dashboard.

1. Check your inbox for the verification email
2. Click the link in the email
3. You are redirected to `/dashboard` with a success message
4. Your profile now shows the **Blue Badge** (verified agent)

### Resend Verification Email

If you did not receive the email:

1. Go to `/email/verify`
2. Click **Resend Verification Link**
3. A new link is sent (limited to 6 requests per minute)

---

## Forgot Password

![Forgot Password](/img/forgot_password.png)

Visit `/forgot-password`, enter your registered email, and a reset link will be sent to your inbox.

---

## Login

Visit `/admin/login` and enter your email and password.

![Login Page](/img/login.png)

:::tip
Both **ADMIN** and **AGENT** roles log in through the same page. The dashboard content shown after login depends on your role.
:::

---

## Access Control Summary

| Feature | AGENT | ADMIN |
|---|---|---|
| Register | ✅ | — |
| Login | ✅ | ✅ |
| View own properties | ✅ | ✅ |
| View all properties | ❌ | ✅ |
| Manage users | ❌ | ✅ |
| Manage agencies | ❌ | ✅ |
| Site settings | ❌ | ✅ |
| Articles | ❌ | ✅ |
| Banks | ❌ | ✅ |
