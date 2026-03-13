---
sidebar_position: 5
---

# Articles (News)

:::caution Admin Only
Only **Admins** can create, edit, or delete articles.
:::

![Articles List](/img/articles_main.png)

Articles appear in the public **News** section at `/news`. They can be used for property market updates, guides, announcements, or SEO content.

---

## Article List

The list shows: Thumbnail, Title, Published status, and Published date.

---

## Creating an Article

![New Article](/img/articles_new.png)

Go to **Content Management → Articles → New Article**.

### Article Content

| Field | Required | Notes |
|---|---|---|
| Title | ✅ | Article headline |
| Slug | ✅ | Auto-generated from title on create. Must be unique. Used in URL: `/news/{slug}` |
| Content | ✅ | Full article body — rich text editor with formatting, images, links |

### Publishing Settings

| Field | Notes |
|---|---|
| Thumbnail | Cover image shown in article listings |
| Is Published | Toggle on to make the article visible publicly |
| Published At | Date and time to publish — can be set in the future for scheduled publishing |

### SEO Settings

| Field | Notes |
|---|---|
| Meta Title | Browser tab title (max 60 characters) |
| Meta Description | Search engine snippet (max 160 characters) |
| SEO Keywords | Comma-separated keywords e.g. `property, real estate, investment` |

:::tip
Always fill in the SEO fields. Good meta titles and descriptions significantly improve how articles appear in Google search results.
:::

---

## Editing an Article

![Edit Article](/img/articles_edit.png)

Click **Edit** on any article. The slug field can be edited but changing it after publishing will break existing links — only do this if necessary.

---

## Unpublishing an Article

To hide an article from the public:
1. Open the article for editing
2. Toggle **Is Published** to off
3. Save

The article remains in the admin but disappears from `/news` immediately.
