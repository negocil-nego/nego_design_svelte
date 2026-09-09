# NegoDesign

<div align="center">

**A Svelte 5 component library for building modern, fast and beautiful web applications.**

</div>

NegoDesign is an open-source collection of accessible, copy-paste-friendly UI components
for [Svelte](https://svelte.dev) and [SvelteKit](https://svelte.dev/docs/kit). It follows the
[shadcn](https://ui.shadcn.com) philosophy: components are built with Svelte's runes API,
styled with [Tailwind CSS](https://tailwindcss.com), and ship as plain `.svelte` files you
own — no lock-in, no black box.

From low-level primitives (buttons, badges, carousels, dropdowns, inputs, sidebars) to
complete, production-ready pages (admin panel, login, company profile, product details),
everything is designed to be dropped into your project and customized.

---

## Features

- **Svelte 5 runes** — components use `$state`, `$derived`, `$props`, snippets and
  bindable props. No legacy APIs.
- **shadcn-style workflow** — copy the component, read the prop table, ship it.
- **Tailwind CSS v4** — utility-first styling with CSS variables for theming and dark mode.
- **Theming** — CSS variables for colors and a built-in light/dark switch.
- **i18n ready** — language switcher and translation helpers included.
- **Composable** — low-level UI primitives and high-level composite components.
- **TypeScript** — all components ship with full type definitions.

## Requirements

- [Svelte](https://svelte.dev) `>= 5`
- [SvelteKit](https://svelte.dev/docs/kit) `>= 2` (recommended)

Tailwind CSS is not a hard dependency, but the components are designed for it and the
built-in `styles.css` expects the shadcn design tokens.

## Installation

```bash
npm install negodesign
```

Import the compiled styles once, in your global stylesheet:

```css
@import "tailwindcss";
@import "negodesign/styles.css";
```

Or from your root layout:

```svelte
<script lang="ts">
  import "negodesign/styles.css";
  import "../app.css";
</script>
```

### Usage

```svelte
<script lang="ts">
  import { Menu } from "negodesign";
  import { Home01Icon, Hotel01Icon } from "@hugeicons/core-free-icons";

  const links = [
    { label: "Home", url: "/", icon: Home01Icon },
    { label: "Accommodation", url: "/accommodation", icon: Hotel01Icon },
  ];
</script>

<Menu isBorder navMenu={{ links }} />
```

### Package exports

| Export                    | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `negodesign`              | All components, types and utilities                    |
| `negodesign/styles.css`   | Compiled global styles (design tokens, base, theme)    |
| `negodesign/types`        | Shared TypeScript types                                |
| `negodesign/i18n`         | Translation helpers and dictionaries                   |

## Component categories

- **Navigation** — `Menu`, `SearchInput`, `Navbar`
- **Hero** — `SimpleHero`, `CarouselHero`
- **Banners** — `CtaCardImageBanner`, `CtaCardBanner`, `AdCardBanner`, `NotificationBanner`
- **Cards** — `CardMedia`, `CardProfile`, `CardProduct`, `CardPromotion`, `CardHighlight`
- **Carousels** — `CarouselBadge`, `CarouselHighlights`, `CarouselPromotion`,  `CarouselGridMedia/Product/Profile/Promotion`
- **Item Grid** — `ItemsSimpleGrid`, `ItemsPanel`
- **Footer** — `Footer`
- **Admin Panel** — `AdminPanel`, `MenuBarSidebar`, `DataTableCore`
- **Login / Security** — `PageLogin`, `PageOtpVerification`, `PageForgetPassword`, `PageResetPassword`
- **Full Pages** — `CompanyProfile`, `ProductDetails`, `ProfileUser`, `PrivacyPolicyOrTermsOfUse`

## Documentation

During development, a full documentation site is available at `/docs`:

- **Getting Started** — `/docs`
- **Installation** — `/docs/installation`
- **Components** — `/docs/components` and `/docs/<component>`

Each component page includes its description, a copy-paste example, a link to a live demo
and a complete API reference (props table).

## Development

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd negodesign
npm install
```

Useful scripts:

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the SvelteKit dev server               |
| `npm run check`   | Run `svelte-check` for type/compile errors   |
| `npm run lint`    | Run ESLint                                   |
| `npm test`        | Run the Vitest unit/browser tests            |
| `npm run build`   | Build the demo app                           |
| `npm run package` | Build the distributable package into `dist/` |

## License

Licensed under the [MIT](https://opensource.org/license/mit) License.