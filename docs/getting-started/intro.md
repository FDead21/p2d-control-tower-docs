---
sidebar_position: 1
---

# Introduction

Welcome to the **Property Marketplace Admin Guide**. This documentation covers everything needed to manage the platform — from property listings and agent accounts to site settings and CRM inquiries.

![Admin Dashboard](/img/admin_dashboard.png)

## Platform Roles

There are two roles in the system:

| Role | Access |
|---|---|
| **AGENT** | Can manage their own property listings, view their own inquiries, and edit virtual tours |
| **ADMIN** | Full access to all listings, all inquiries, user management, agency management, articles, bank settings, and site configuration |

## Platform Navigation (URL Reference)

| Page | URL | Who can access |
|---|---|---|
| Homepage | `/` | Public |
| Map Search | `/map` | Public |
| Property Detail | `/property/{id}/{slug}` | Public |
| Virtual Tour | `/property/{id}/{slug}/360` | Public |
| PDF Brochure | `/property/{id}/{slug}/pdf` | Public |
| News & Articles | `/news` | Public |
| Wishlist | `/wishlist` | Public |
| Compare | `/compare` | Public |
| Agent Dashboard | `/dashboard` | Agents & Admins |
| Admin Panel | `/admin` | Agents & Admins (Filament) |

## Language Support

The platform supports **English** and **Bahasa Indonesia**. Switch via:

```
/lang/en   → English
/lang/id   → Bahasa Indonesia
```
