# 📘 Project Structure Documentation

## 📄 Available Pages

You can find all pages inside `src/pages`:

- `/map`
- `/mission&vision`
- `/history`
- `/about`
- `/` → Home
- `/employee-spotlight`
- `/companion-animal`
- `/species/#{specie}`
  _Example:_ `/species/poultry`

- `/products/categories/#{category}`
  _Example:_ `/products/categories/accelerator-solutions`

- `/products/#{product}`
  _Example:_ `/products/endophos`

---

## 🧩 Components Architecture

The project follows an atomic design structure:

### 🔹 `src/atoms/`

Basic, reusable components that do not depend on others:

- `select-field`
- `text-field`
- `text-area`
- `head`

> ⚠️ Note: You can add more components here as long as they don’t depend on other components.

---

### 🔸 `src/molecules/`

Components composed of atoms:

- `card`
  Used in:
  - Species (`SpeciesOption`)
  - Products (`CategoriesOption`)

---

### 🔶 `src/organisms/`

More complex UI sections:

- `header`
  - Contains the banner
  - Props:
    - `banner` → Image URL
    - `bannerMain` → `true` or `false`
    - `title` → Used for secondary banners

- `nav` → Navigation bar

---

## 🏗️ Templates (`src/templates/`)

- `about` → Information about Pathway
- `base-page` → Used for Products and Species views
- `companion-animal` → Information about Pathway and Biomatrix
- `contact-form` → Contact form
- `employee` → Employee spotlight section
- `footer`
- `history` → Company history
- `sub-home` → Secondary landing page
- `home-main` → Main homepage
- `map`
- `mission&vision` → Mission and vision

---

### 📦 Products (`src/templates/products/`)

- `index` → Main products page
- `ProductsOption`
- `CategoriesOption`

---

### 🐾 Species (`src/templates/species/`)

- `index` → Main species page
- `SpeciesOption`

---

## ➕ Add a New Species (`/species` page)

To add a new species card, follow these steps:

---

### 1. Go to the file

`src/components/templates/species/index.tsx`

---

### 2. Update `listCards`

Inside the `listCards` array, add a new object in the position where you want the card to appear.

#### Example:

```ts
{
  link: "/species/aquaculture",
  title: "Aquaculture",
  id: "aquaculture",
  bannerUrl: "/images/banners/species/aquaculture.webp",
}
```

### 3. Field definitions

Each object must include:

- **`link`**
  Route where the card will navigate when clicked
  Example: `/species/aquaculture`

- **`title`**
  Text displayed on the card
  Example: `"Aquaculture"`

- **`id`**
  Unique identifier for the species
  - Use lowercase
  - Prefer a single word
  - If multiple words are needed, use camelCase
  Examples: `aquaculture`, `testFirstSecond`

- **`bannerUrl`**
  Image displayed on the card
  Must be located in: `/images/banners/species`
  Example: `/images/banners/species/aquaculture.webp`


## ➕ Add a New Species Page (`/species/[name]`)

To create a new species page, follow these steps:

---

### 1. Create the page file

Go to:

`src/pages/species/`

Create a new file using the species name.

> ⚠️ The file name **must match** the `link` used in the species card (explained above).

---

### 2. Use an existing file as template

You can copy an existing example, such as:

`src/pages/species/ruminant.tsx`

Rename it according to your new species.

---

### 3. Update the component content

#### ✅ Update the name

Replace all occurrences of `Ruminant` with your new species name.

---

#### ✅ Update SEO

Inside the SEO configuration:

- Update the `title`
- Update the `description`

> ⚠️ The description should be meaningful and optimized for SEO.

---

#### ✅ Update the Header

```jsx
<Header
  banner="/images/banners/species/ruminant.webp"
  title="Ruminant"
/>
```

Modify:

banner → Correct image path
title → Species name

📌 Images must be located in:
/images/banners/species/

📌 Use .webp format (lighter than .png)

✅ Update the data

Replace the existing data with the correct information for the new species.

Example:
```ts
{
  imgForTitle: "/images/products/logos2/thermo.webp",
  link: "/products/thermo-rex",
  id: "1",
  description:
    "ThermoRex is an all-in-one anti-stress solution developed by Pathway Intermediates that supports food-producing animals to overcome stress.",
}
```

## ✅ Notes

- Follow atomic design principles when adding new components.
- Keep atoms independent and reusable.
- Use templates to maintain consistent layouts across pages.
