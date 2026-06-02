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

### 🔸 `src/molecules/`

Components composed of atoms:

- `card`
  Used in:
  - Species (`SpeciesOption`)
  - Products (`CategoriesOption`)

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
- `products/`:
  - `index` → Main products page
  - `ProductsOption`
  - `CategoriesOption`
- `species/`
  - `index` → Main species page
  - `SpeciesOption`

---

## ➕ Add a New Species (`/species` page)

To add a new species card, follow these steps:

### 1. Go to the file

`src/components/templates/species/index.tsx`

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

### 1. Create the page file

Go to:

`src/pages/species/`

Create a new file using the species name.

> ⚠️ The file name **must match** the `link` used in the species card (explained above).

### 2. Use an existing file as template

You can copy an existing example, such as:

`src/pages/species/ruminant.tsx`

Rename it according to your new species.

### 3. Update the component content

#### ✅ Update the name

Replace all occurrences of `Ruminant` with your new species name.

#### ✅ Update SEO

Inside the SEO configuration:

- Update the `title`
- Update the `description`

> ⚠️ The description should be meaningful and optimized for SEO.

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

---

## ➕ Add a New Product Category Card

If you want to add a new product category `card`, follow these steps:

### 1. Go to the file

`src/components/templates/products/index.tsx`

### 2. Update `listCards`

Inside the `listCards` array, add a new object in the position where you want the card to appear.

#### Example:

```ts
{
  title: "Accelerator Solutions",
  id: "accelerator-solutions",
  link: "/products/categories/accelerator-solutions",
  bannerUrl: "/images/banners/products/condiments.webp",
}
```

### 3. Field definitions

Each object must include:

- **`title`**
  Name of the category (displayed on the card)
  Example: `"Accelerator Solutions"`

- **`id`**
  Unique identifier for the category
  - Use lowercase
  - If multiple words, separate them with `-`
  Example: `accelerator-solutions`

- **`link`**
  Route where the card will navigate when clicked
  Example: `/products/categories/accelerator-solutions`

- **`bannerUrl`**
  Image displayed on the card
  Must be located in: `/images/banners/products/`
  Example: `/images/banners/products/condiments.webp`

---

## ➕ Add a New Product Category Page (`/products/categories/[name]`)

To create a new product category page, follow these steps:

### 1. Create the page file

Go to:

`src/pages/products/categories/`

Create a new file using the category name.

> ⚠️ The file name must match the `link` used in the category card.

### 2. Use an existing file as template

You can copy an existing example, such as:

`accelerator-solutions.tsx`

Paste it and rename it according to your new category.

### 3. Update SEO and Header

#### ✅ Update SEO

- Update the `title`
- Update the `description`

> ⚠️ Make sure the description is clear and SEO-friendly.

#### ✅ Update the Header

```jsx
<Header
  banner="/images/banners/products/test.webp"
  title="Test"
/>
```

Modify:

banner → Correct image path
title → Category name

📌 Images must be located in:
/images/banners/products/

📌 Use .webp format (lighter than .png)

### 4. Update `CategoriesOption` data

Update the data according to the new category.

Each object must include:

```ts
{
  imgForTitle: "/images/products/logos2/endopower.webp",
  link: "/products/endopower",
  id: "3",
  description:
    "Endo-Power is a powerful digestion accelerator. It contains optimal enzymes for corn-soybean meal based diet, targeting NSPs for accelerated hydrolyzation.",
}
```
---

## ➕ Add a New Product Page (`/products/[name]`)

To create a new product page, follow these steps:

### 1. Create the page file

Go to:

`src/pages/products/`

Create a new file using the product name.

#### Example:

`lipidol.tsx`

### 2. Use an existing file as template

You can copy an existing example, such as:

`lipidol.tsx`

Paste it and rename it according to your new product.

### 3. Update SEO and Header

#### ✅ Update SEO

- Update the `title`
- Update the `description`

> ⚠️ Make sure the description is clear and SEO-friendly.

#### ✅ Update the Header

```jsx
<Header
  banner="/images/banners/products/test.webp"
  title="Test"
/>
```

Modify:

banner → Correct image path
title → Product name

📌 Images must be located in:
/images/banners/products/

📌 Use .webp format (lighter than .png)

### 4. Update `ProductOptions` data

Update the data according to the new product.

#### Example:

```ts
{
  subTitle: "THE FIRST ABSORPTION ACCELERATOR",
  imgForTitle: "/images/products/logos/lipidol-logo.webp",
  linkVideo:
    "https://www.youtube.com/embed/YiGlBKvPKpM?si=l0Dz_EaiKbG-TT0b",
  content: [
    {
      id: "3",
      title:
        "Lipidol<sup class='size-14'>®</sup> : a powerful combination of four functional LPLs",
      description:
        "Lipidol is composed of four different functional lysophospholipids including lysophosphatidylcholine (LPC), lysophosphatidylionsitol (LPI), lysophosphatidylethanolamine (LPE), and lysophosphatidic acid (LPA), as well as hydrolyzed soya lecithin and calcium silicate as its carriers.",
    },
  ],
}
```

### 🧩 Field definitions

- **`subTitle`**
 Subtitle displayed on the page

- **`imgForTitle`**
  Product logo
  Must be located in: `/images/products/logos/`

- **`linkVideo`** *(optional)*
  Embedded YouTube video link
  - Go to YouTube → Share → Embed
  - Copy the `src` link from the iframe.

- **`content`**
  Array of sections:
  - **`title`** → Supports HTML tags
  - **`description`** → Supports HTML content

#### Example with HTML:

```ts
"Lipidol<sup class='size-14'>®</sup>"
```
or

```ts
"<sup class='size-14'>®</sup>"
```
---
## ✅ Notes

- Follow atomic design principles when adding new components.
- Keep atoms independent and reusable.
- Use templates to maintain consistent layouts across pages.
