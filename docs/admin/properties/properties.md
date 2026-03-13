---
sidebar_position: 1
---

# Managing Properties

Properties are the core of the platform. Agents manage their own listings; Admins can see and edit all listings.

## Property List

![Property List](/img/property_main.png)

The property list shows all listings with the following columns: Title, Slug, Price (IDR), Listing Type, Category, Property Type, City, District, Bedrooms, Bathrooms, Land Area, Building Area, Status, Views.

- **Agents** see only their own listings
- **Admins** see all listings platform-wide

---

## Creating a Property

![New Property](/img/property_new.png)

Go to **Properties → New Property** and fill in the form.

### Basic Information

| Field | Required | Notes |
|---|---|---|
| Title | ✅ | Property display name |
| Slug | ✅ | URL-friendly name (auto-generated from title) |
| Description | — | Full property description |
| Price | ✅ | Enter raw numbers only, e.g. `5500000000` (Rp prefix shown automatically) |
| Listing Type | ✅ | `Sale` or `Rent` |
| Category | ✅ | `Residential`, `Commercial`, or `Land` |
| Property Type | ✅ | e.g. House, Apartment, Shophouse |
| Status | ✅ | `Draft`, `Published`, or `Sold` |

:::caution
Only **Published** listings appear on the public website. Set status to `Published` when the listing is ready to go live.
:::

### Location

| Field | Required | Notes |
|---|---|---|
| City | ✅ | e.g. Jakarta, Bandung |
| District | ✅ | e.g. Menteng, Kebayoran |
| Address | — | Full street address |
| Latitude | ✅ | Used for map pin |
| Longitude | ✅ | Used for map pin |

**How to get coordinates:**
1. Open [Google Maps](https://www.google.com/maps)
2. Right-click on the exact location
3. Copy the numbers shown (e.g. `-6.917, 107.619`)
4. Paste Latitude and Longitude into the respective fields

### Property Details

| Field | Notes |
|---|---|
| Bedrooms | Number of bedrooms |
| Bathrooms | Number of bathrooms |
| Land Area | In square meters (m²) |
| Building Area | In square meters (m²) |
| Specifications | Key-value pairs — add features like `Carport: 2`, `Furnished: Yes` |
| YouTube URL | Optional video walkthrough link |

---

## Editing a Property

![Edit Property](/img/property_edit.png)

Click the **Edit** button on any listing in the property list. All fields can be updated. Remember to save after making changes.

---

## Property Media

![Property Media](/img/prop_media_main.png)

Media is managed directly inside the property edit form via the **Media** repeater section, or separately via **Property Media** in the admin navigation.

![New Media](/img/property_new.png)

### Adding Images & 360° Panoramas

Inside the property form, scroll to the **Media** section and click **Add Item**.

| Field | Notes |
|---|---|
| File | Upload image (max 5MB) |
| File Type | `Standard Image` or `360° Panorama` |
| Room Name | Only shown for 360° Panorama — e.g. `Living Room`, `Master Bedroom` |
| Sort Order | Controls display order (lower = shown first) |

:::tip
Drag the media items to reorder them. The first image is used as the property cover photo.
:::

---

## Tour Hotspot Editor

![Tour Setting](/img/property_tour_setting.png)

For properties with 360° panoramas, you can add navigation hotspots directly in the tour editor.

The **🗺 Tour Hotspots** button appears in the property list only for properties that have at least one `360° Panorama` media file.

Click it to open the tour editor at:
```
/portal-api/properties/{id}/tour-editor
```

### Adding a Hotspot

1. Open the tour editor
2. Look around the 360° view and click the spot where you want to place a hotspot
3. Select the **destination scene** (which room it navigates to)
4. Optionally add a label
5. Click **Save** — the hotspot is saved immediately

### Deleting a Hotspot

Click the **Delete** button next to any hotspot in the editor. This is permanent.

---

## Public Property Page

Once published, the property is accessible at:
```
/property/{id}/{slug}
```

The public page includes: photos, details, agent contact info, inquiry form, link to 360° tour, and PDF brochure download.
