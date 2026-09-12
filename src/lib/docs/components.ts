export interface DocProp {
  name: string;
  type: string;
  description: string;
  default?: string;
  required?: boolean;
}

export interface DocExample {
  title: string;
  description?: string;
  code: string;
  href?: string;
}

export interface DocComponent {
  slug: string;
  name: string;
  category: string;
  description: string;
  path: string;
  importPath: string;
  examples: DocExample[];
  props: DocProp[];
}

export const categories = [
  "Navigation",
  "Hero",
  "Sections",
  "Banners",
  "Cards",
  "Carousels",
  "Item Grid",
  "Tabs",
  "Form Inputs",
  "Forms",
  "Modals",
  "Empty States",
  "Footer",
  "Admin Panel",
  "Login / Security",
  "Full Pages",
] as const;

const navButtonExample = `import { Menu } from "negodesign"

<Menu
  isBorder
  isLightSwitch
  isLanguageSwitcher
  logo={{ label: "Negoturismo" }}
  navMenuButton={{
    textButtonLogin: "Sign in",
    textButtonRegister: "Register",
    onclickButtonLogin: () => {},
    onclickButtonRegister: () => {},
    buttonClass: "bg-primary text-white",
  }}
  navMenu={{
    links: [
      { label: "Home", url: "/", icon: Home01Icon },
      { label: "Accommodation", url: "/hospedagem", icon: Hotel01Icon },
    ],
  }}
/>`;

export const components: DocComponent[] = [
  {
    slug: "menu",
    name: "Menu",
    category: "Navigation",
    description:
      "Responsive navigation bar that automatically switches between the Simple (links) and Complex (mega menu) variants based on the device.",
    path: "src/lib/components/core/nav/ui/Menu.svelte",
    importPath: "Menu",
    examples: [{ title: "Navigation Menu", code: navButtonExample, href: "/menu" }],
    props: [
      { name: "logo", type: "NavMenuLogoProps", description: "Logo configuration (img, url, label, className, onclick)" },
      { name: "navMenu", type: "MenuVarientProps", description: "Required. Navigation content (SimpleMenuProps or ComplexMenuProps)", required: true },
      { name: "isBorder", type: "boolean", description: "Adds a bottom border to the bar", default: "false" },
      { name: "navMenuButton", type: "NavMenuButtonProps", description: "Action buttons: textButtonLogin, textButtonRegister, onclickButtonLogin, onclickButtonRegister, buttonClass" },
      { name: "isLightSwitch", type: "boolean", description: "Shows the light/dark theme toggle", default: "false" },
      { name: "isLanguageSwitcher", type: "boolean", description: "Shows the language selector", default: "false" },
    ],
  },
  {
    slug: "search-input",
    name: "SearchInput",
    category: "Navigation",
    description: "Search field with two visual variants: 1 (full border) and 2 (underline only).",
    path: "src/lib/components/core/search/SearchInput.svelte",
    importPath: "SearchInput",
    examples: [
      {
        title: "Search Field",
        code: `import { SearchInput } from "negodesign"

<SearchInput
  variant={1}
  placeholder="Search..."
  onSubmit={(q) => console.log(q)}
/>`,
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Visual variant", default: "1" },
      { name: "onSubmit", type: "(q: string) => void", description: "Called when the search is submitted" },
      { name: "placeholder", type: "string", description: "Input placeholder text", default: "Search" },
      { name: "buttonClass", type: "string", description: "Button CSS class" },
      { name: "inputClass", type: "string", description: "Input CSS class" },
      { name: "iconClass", type: "string", description: "Icon CSS class" },
    ],
  },
  {
    slug: "simple-hero",
    name: "SimpleHero",
    category: "Hero",
    description: "Static hero in a split layout: left column with content and right column with a circular image.",
    path: "src/lib/components/core/hero/SimpleHero.svelte",
    importPath: "SimpleHero",
    examples: [
      {
        title: "Simple Hero",
        code: `import { SimpleHero } from "negodesign"

<SimpleHero
  title="Find your ideal stay"
  subTitle="Welcome"
  description="Verified hotels, guest houses and apartments."
  image="/images/hero.jpg"
  buttons={[{ label: "Explore", variant: "default" }]}
/>`,
        href: "/hero",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Main hero title", required: true },
      { name: "subTitle", type: "string", description: "Subtitle below the title" },
      { name: "description", type: "string", description: "Supporting text" },
      { name: "image", type: "string", description: "URL of the image displayed on the right" },
      { name: "buttons", type: "HeroButtonProps[]", description: "Action buttons: { label, href, variant, className, onClick }" },
      { name: "titleClass", type: "string", description: "Title CSS class" },
      { name: "subTitleClass", type: "string", description: "Subtitle CSS class" },
      { name: "descriptionClass", type: "string", description: "Description CSS class" },
      { name: "imageClass", type: "string", description: "Image CSS class" },
    ],
  },
  {
    slug: "carousel-hero",
    name: "CarouselHero",
    category: "Hero",
    description: "Fullscreen background hero with a crossfade slide carousel, dark overlay, and overlaid navigation menu.",
    path: "src/lib/components/core/carousel/hero/ui/CarouselHero.svelte",
    importPath: "CarouselHero",
    examples: [
      {
        title: "Carousel Hero",
        code: `import { CarouselHero } from "negodesign"

<CarouselHero
  titleClass="md:text-2xl lg:text-4xl"
  descriptionClass="text-xs md:text-lg"
  simpleMenu={{
    logo: { url: "/", label: "Negoturismo", className: "text-white" },
    links: [{ label: "Accommodation", url: "#", icon: Hotel01Icon }],
    isLanguageSwitcher: false,
    isLightSwitch: false,
  }}
  items={[
    {
      title: "Find your ideal stay",
      description: "Verified hotels, guest houses and apartments.",
      image: "https://images.unsplash.com/photo-1566073771259",
    },
  ]}
/>`,
        href: "/hero/carousel",
      },
    ],
    props: [
      { name: "items", type: "CarouselHeroItem[]", description: "Required. Slides: { title, image, description }", required: true },
      { name: "simpleMenu", type: "SimpleMenuProps", description: "Simple overlaid menu configuration" },
      { name: "complexMenu", type: "ComplexMenuProps", description: "Complex (mega menu) configuration" },
      { name: "menusProps", type: "MenuProps", description: "Menu wrapper props (logo, buttons, light/language)" },
      { name: "titleClass", type: "string", description: "CSS class for each slide title" },
      { name: "descriptionClass", type: "string", description: "CSS class for each slide description" },
      { name: "className", type: "string", description: "CSS class for the <header> container" },
      { name: "sectionClass", type: "string", description: "CSS class for the <section> content" },
      { name: "children", type: "Snippet", description: "Slot with extra content below title/description" },
      { name: "intervalMs", type: "number", description: "Autoplay interval in ms", default: "5000" },
      { name: "transitionMs", type: "number", description: "Crossfade duration in ms", default: "1200" },
      { name: "indicatorShow", type: "boolean", description: "Shows clickable indicators when there is more than one slide", default: "true" },
    ],
  },
  {
    slug: "cta-card-image-banner",
    name: "CtaCardImageBanner",
    category: "Banners",
    description: "CTA banner with a featured image on a gradient background and up to two buttons.",
    path: "src/lib/components/core/banner/CtaCardImageBanner.svelte",
    importPath: "CtaCardImageBanner",
    examples: [
      {
        title: "CTA Image Banner",
        code: `import { CtaCardImageBanner } from "negodesign"

<CtaCardImageBanner
  title="Let's get in touch"
  description="Talk to us and discover the best offers."
  primaryText="Contact"
  primaryHref="#"
  imageSrc="/images/banner.jpg"
/>`,
        href: "/banner",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Banner title", required: true },
      { name: "primaryText", type: "string", description: "Required. Primary CTA text", required: true },
      { name: "description", type: "string", description: "Supporting text" },
      { name: "primaryHref", type: "string", description: "Primary CTA href (renders an <a>)" },
      { name: "onClickPrimary", type: "() => void", description: "Called when the primary CTA is clicked" },
      { name: "secondaryText", type: "string", description: "Secondary CTA text" },
      { name: "secondaryHref", type: "string", description: "Secondary CTA href" },
      { name: "onClickSecondary", type: "() => void", description: "Called when the secondary CTA is clicked" },
      { name: "imageSrc", type: "string", description: "Featured image URL" },
      { name: "imageAlt", type: "string", description: "Image alternative text" },
      { name: "imageWidth", type: "number", description: "Image width" },
      { name: "imageHeight", type: "number", description: "Image height" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "notification-banner",
    name: "NotificationBanner",
    category: "Banners",
    description: "Thin dismissible notification strip with optional strong text, description, CTA, and close button.",
    path: "src/lib/components/core/banner/NotificationBanner.svelte",
    importPath: "NotificationBanner",
    examples: [
      {
        title: "Notification Banner",
        code: `import { NotificationBanner } from "negodesign"

<NotificationBanner
  strongText="New"
  description="New offers available!"
  ctaText="View offers"
  onDismiss={() => console.log("dismissed")}
/>`,
      },
    ],
    props: [
      { name: "description", type: "string", description: "Required. Main text", required: true },
      { name: "strongText", type: "string", description: "Strong text before the separator" },
      { name: "ctaText", type: "string", description: "CTA button label" },
      { name: "ctaHref", type: "string", description: "CTA href (renders an <a>)" },
      { name: "onCtaClick", type: "() => void", description: "Called when the CTA is clicked" },
      { name: "onDismiss", type: "() => void", description: "Called when the notification is closed" },
      { name: "bgClass", type: "string", description: "Background class", default: "bg-gray-800/50" },
      { name: "textClass", type: "string", description: "Text class", default: "text-gray-100" },
      { name: "ctaClass", type: "string", description: "Extra CTA button class" },
      { name: "class", type: "string", description: "Extra container class" },
    ],
  },
  {
    slug: "ad-card-banner",
    name: "AdCardBanner",
    category: "Banners",
    description: "Ad card with a colored side strip and a two-part title with a CTA button.",
    path: "src/lib/components/core/banner/AdCardBanner.svelte",
    importPath: "AdCardBanner",
    examples: [
      {
        title: "Ad Banner",
        code: `import { AdCardBanner } from "negodesign"

<AdCardBanner
  tagText="This ad could be yours."
  titleHighlight="This ad"
  titleMain="could be yours."
  buttonText="Learn more"
  onClickButton={() => console.log("clicked")}
/>`,
        href: "/banner/cad-add",
      },
    ],
    props: [
      { name: "tagText", type: "string", description: "Required. Side strip text", required: true },
      { name: "titleHighlight", type: "string", description: "Required. First part of the title (highlight)", required: true },
      { name: "titleMain", type: "string", description: "Required. Second part of the title", required: true },
      { name: "buttonText", type: "string", description: "CTA button text", default: "Learn more" },
      { name: "onClickButton", type: "() => void", description: "Called when the button is clicked" },
      { name: "href", type: "string", description: "If provided, the whole card navigates" },
      { name: "class", type: "string", description: "Extra container CSS class" },
      { name: "buttonClass", type: "string", description: "Button CSS class" },
    ],
  },
  {
    slug: "cta-card-banner",
    name: "CtaCardBanner",
    category: "Banners",
    description: "'Get in touch' style CTA banner with decorative rings and up to two pill buttons.",
    path: "src/lib/components/core/banner/CtaCardBanner.svelte",
    importPath: "CtaCardBanner",
    examples: [
      {
        title: "CTA Banner",
        code: `import { CtaCardBanner } from "negodesign"

<CtaCardBanner
  title="Let's get in touch"
  description="We have the ideal solution for you."
  primaryText="Contact"
  secondaryText="Learn more"
/>`,
        href: "/banner/card-contact-cta",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Banner title", required: true },
      { name: "primaryText", type: "string", description: "Required. Primary CTA label", required: true },
      { name: "description", type: "string", description: "Supporting text" },
      { name: "secondaryText", type: "string", description: "Secondary CTA label" },
      { name: "onClickPrimary", type: "() => void", description: "Called when the primary CTA is clicked" },
      { name: "onClickSecondary", type: "() => void", description: "Called when the secondary CTA is clicked" },
      { name: "primaryHref", type: "string", description: "Primary CTA href" },
      { name: "secondaryHref", type: "string", description: "Secondary CTA href" },
      { name: "class", type: "string", description: "Extra CSS class" },
      { name: "rings", type: "Array<{ size: number; color: string }>", description: "Custom decorative rings" },
    ],
  },
  {
    slug: "card-media",
    name: "CardMedia",
    category: "Cards",
    description: "Wrapper for media cards with variants 1 (left-aligned) and 2 (centered). Shows logo, title, rating, tags, and buttons.",
    path: "src/lib/components/core/card/media/CardMedia.svelte",
    importPath: "CardMedia",
    examples: [
      {
        title: "Media Card",
        code: `import { CardMedia } from "negodesign"

<CardMedia
  {...item}
  variant={2}
  isImageButtonMaximized
  isVideoButtonMaximized
  onFavoriteClick={(id) => console.log(id)}
  onButtonProfile={(id) => console.log(id)}
  onButtonDetails={(id) => console.log(id)}
/>`,
        href: "/card/media",
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Selects CardMedia01 vs CardMedia02", default: "1" },
      { name: "id", type: "string | number", description: "Required. Unique identifier", required: true },
      { name: "logo", type: "string", description: "Organization logo URL" },
      { name: "title", type: "string", description: "Card title" },
      { name: "content", type: "string", description: "Description/content" },
      { name: "startMax", type: "number", description: "Maximum rating value (e.g. 5)" },
      { name: "startNumber", type: "number", description: "Current rating value" },
      { name: "imageUrl", type: "string", description: "Cover image URL" },
      { name: "videoUrl", type: "string", description: "Video URL (replaces the image)" },
      { name: "tags", type: "CardTagsProps[]", description: "Tag list: { text, icon? }" },
      { name: "isFavorite", type: "boolean", description: "Whether marked as favorite" },
      { name: "isLoading", type: "boolean", description: "Loading state (skeleton)" },
      { name: "isImageButtonMaximized", type: "boolean", description: "Shows maximize button on the image" },
      { name: "isVideoButtonMaximized", type: "boolean", description: "Shows maximize button on the video" },
      { name: "buttonProfileClass", type: "string", description: "Profile button CSS class" },
      { name: "buttonDetailsClass", type: "string", description: "Details button CSS class" },
      { name: "onFavoriteClick", type: "(id) => void", description: "Called when the favorite is clicked" },
      { name: "onButtonProfile", type: "(id) => void", description: "Called when the profile button is clicked" },
      { name: "onButtonDetails", type: "(id) => void", description: "Called when the details button is clicked" },
      { name: "videoAction", type: "'START_REPRODUCTION' | 'HOVER_REPRODUCTION'", description: "Video playback behavior" },
    ],
  },
  {
    slug: "card-profile",
    name: "CardProfile",
    category: "Cards",
    description: "Wrapper for organization/guide profile cards, with variants 1 and 2.",
    path: "src/lib/components/core/card/profile/CardProfile.svelte",
    importPath: "CardProfile",
    examples: [
      {
        title: "Profile Card",
        code: `import { CardProfile } from "negodesign"

<CardProfile
  {...item}
  variant={1}
  onFavoriteClick={(id) => console.log(id)}
  onWhatsappClick={(id) => console.log(id)}
/>`,
        href: "/card/profile",
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Selects CardProfile01 vs CardProfile02", default: "1" },
      { name: "id", type: "string | number", description: "Required. Unique identifier", required: true },
      { name: "logo", type: "string", description: "Avatar/logo URL" },
      { name: "title", type: "string", description: "Profile name/title" },
      { name: "content", type: "string", description: "Profile description" },
      { name: "startMax", type: "number", description: "Maximum rating value" },
      { name: "startNumber", type: "number", description: "Current rating value" },
      { name: "imageUrl", type: "string", description: "Profile photo URL" },
      { name: "videoUrl", type: "string", description: "Profile video URL" },
      { name: "tags", type: "CardTagsProps[]", description: "Profile tags" },
      { name: "isFavorite", type: "boolean", description: "Whether marked as favorite" },
      { name: "isLoading", type: "boolean", description: "Loading state" },
      { name: "onFavoriteClick", type: "(id) => void", description: "Called when the favorite is clicked" },
      { name: "onButtonProfile", type: "(id) => void", description: "Called when the profile button is clicked" },
      { name: "onButtonDetails", type: "(id) => void", description: "Called when the details button is clicked" },
      { name: "onEmailClick", type: "(id) => void", description: "Called when email is clicked" },
      { name: "onWhatsappClick", type: "(id) => void", description: "Called when whatsapp is clicked" },
    ],
  },
  {
    slug: "carousel-badge",
    name: "CarouselBadge",
    category: "Carousels",
    description: "Selectable row of badges/categories with navigation, active state, and skeletons.",
    path: "src/lib/components/core/carousel/badge/ui/CarouselBadge.svelte",
    importPath: "CarouselBadge",
    examples: [
      {
        title: "Badge Carousel",
        code: `import { CarouselBadge } from "negodesign"

<CarouselBadge
  orientation="horizontal"
  itemStyle="BORDER"
  items={[
    { label: "Hotels", value: "hotel", icon: Hotel01Icon },
    { label: "Pensions", value: "pensao", icon: BedDoubleIcon },
  ]}
  onClick={(value) => console.log(value)}
/>`,
        href: "/carousel/badge",
      },
    ],
    props: [
      { name: "items", type: "ItemCarousel[]", description: "Required. Items: { value, label, image?, link?, icon?, isActive? }", required: true },
      { name: "orientation", type: "'horizontal' | 'vertical'", description: "Layout direction", default: "horizontal" },
      { name: "imageClass", type: "string", description: "Image CSS class" },
      { name: "iconClass", type: "string", description: "Icon CSS class" },
      { name: "labelClass", type: "string", description: "Label CSS class" },
      { name: "activeClass", type: "string", description: "Active state class" },
      { name: "itemStyle", type: "'BORDER' | 'INLINE' | 'DEFAULT'", description: "Visual item style" },
      { name: "isBorderInline", type: "boolean", description: "Shows an underline bar on the selected item" },
      { name: "showButton", type: "boolean", description: "Shows navigation buttons" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons while loading" },
      { name: "menuKey", type: "string", description: "Initially selected value" },
      { name: "itemClass", type: "string", description: "CSS class for each item" },
      { name: "btnNavClass", type: "string", description: "Navigation buttons CSS class" },
      { name: "onClick", type: "(value) => void", description: "Called when a badge is selected" },
    ],
  },
  {
    slug: "carousel-highlights",
    name: "CarouselHighlights",
    category: "Carousels",
    description: "Horizontal carousel of highlight cards with a header, autoplay, and empty/loading states.",
    path: "src/lib/components/core/carousel/highlights/ui/CarouselHighlights.svelte",
    importPath: "CarouselHighlights",
    examples: [
      {
        title: "Highlights Carousel",
        code: `import { CarouselHighlights } from "negodesign"

<CarouselHighlights
  varient={2}
  headerProps={{
    title: "Highlights",
    description: "The best organizations",
    onButtonViewAll: () => {},
  }}
  items={highlights}
  onClickBtn={(id) => console.log(id)}
  onClickFavorite={(id) => console.log(id)}
/>`,
        href: "/carousel/highlights",
      },
    ],
    props: [
      { name: "items", type: "CardHighlightProps[]", description: "Required. Highlight card data", required: true },
      { name: "varient", type: "1 | 2", description: "Card visual variant (note: prop spelled 'varient')" },
      { name: "headerProps", type: "CarouselHeaderProps", description: "Header config (title, description, classes, onButtonViewAll)" },
      { name: "slotProps", type: "CarouselSlotProps", description: "Slot config (buttons, position)" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "isDescriptionIcon", type: "boolean", description: "Shows an icon before the description" },
      { name: "isDescriptionLabel", type: "boolean", description: "Shows a label in the description" },
      { name: "onClickBtn", type: "(id) => void", description: "Called on the card action button" },
      { name: "onClickFavorite", type: "(id) => void", description: "Called on the favorite button" },
    ],
  },
  {
    slug: "carousel-promotion",
    name: "CarouselPromotion",
    category: "Carousels",
    description: "Horizontal carousel of promotion cards with old/new prices and buy/shop/favorite buttons.",
    path: "src/lib/components/core/carousel/promotion/ui/CarouselPromotion.svelte",
    importPath: "CarouselPromotion",
    examples: [
      {
        title: "Promotion Carousel",
        code: `import { CarouselPromotion } from "negodesign"

<CarouselPromotion
  items={promotions}
  headerProps={{
    title: "Promotions",
    onButtonViewAll: () => {},
  }}
  onClickBuy={(id) => console.log(id)}
  onClickShop={(id) => console.log(id)}
/>`,
        href: "/carousel/promotion",
      },
    ],
    props: [
      { name: "items", type: "CardPromotionProps[]", description: "Required. Promotion data", required: true },
      { name: "headerProps", type: "CarouselHeaderProps", description: "Header config" },
      { name: "slotProps", type: "CarouselSlotProps", description: "Slot config (button position)" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "onClickBuy", type: "(id) => void", description: "Called on the buy button" },
      { name: "onClickShop", type: "(id) => void", description: "Called on the cart button" },
      { name: "onClickFavorite", type: "(id) => void", description: "Called on the favorite button" },
      { name: "isDescriptionIcon", type: "boolean", description: "Shows an icon before the description" },
      { name: "isDescriptionLabel", type: "boolean", description: "Shows a label in the description" },
    ],
  },
  {
    slug: "carousel-grid",
    name: "CarouselGrid",
    category: "Carousels",
    description: "Family of responsive grids (Media, Product, Profile, Promotion) using CSS grid on desktop and a carousel on mobile.",
    path: "src/lib/components/core/carousel/grid/",
    importPath: "CarouselGridMedia | CarouselGridProduct | CarouselGridProfile | CarouselGridPromotion",
    examples: [
      {
        title: "Media Grid",
        code: `import { CarouselGridMedia } from "negodesign"

<CarouselGridMedia
  items={media}
  headerProps={{
    title: "Explore",
    onButtonViewAll: () => {},
  }}
  onFavoriteClick={(id) => console.log(id)}
/>`,
        href: "/carousel/grid/media",
      },
    ],
    props: [
      { name: "items", type: "CardProps[]", description: "Required. Card data", required: true },
      { name: "headerProps", type: "CarouselHeaderProps", description: "Header config" },
      { name: "slotProps", type: "CarouselSlotProps", description: "Slot config (button position on mobile)" },
      { name: "gridClass", type: "string", description: "Desktop grid CSS classes" },
      { name: "variant", type: "1 | 2", description: "Card visual variant" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "onFavoriteClick", type: "(id) => void", description: "Called on the favorite" },
      { name: "onButtonProfile", type: "(id) => void", description: "Called on the profile button (media/profile)" },
      { name: "onButtonDetails", type: "(id) => void", description: "Called on the details button (media)" },
      { name: "onClickBuy", type: "(id) => void", description: "Called on buy (product)" },
      { name: "onClickShop", type: "(id) => void", description: "Called on cart (product)" },
      { name: "onEmailClick", type: "(id) => void", description: "Called on email (profile)" },
      { name: "onWhatsappClick", type: "(id) => void", description: "Called on whatsapp (profile)" },
    ],
  },
  {
    slug: "items-simple-grid",
    name: "ItemsSimpleGrid",
    category: "Item Grid",
    description: "Responsive grid of items (icon + title + description) with dynamic columns.",
    path: "src/lib/components/core/grid/ui/ItemsSimpleGrid.svelte",
    importPath: "ItemsSimpleGrid",
    examples: [
      {
        title: "Simple Grid",
        code: `import { ItemsSimpleGrid } from "negodesign"

<ItemsSimpleGrid
  variant={1}
  items={[
    { icon: Coffee03Icon, title: "Coffee", description: "Start your day right" },
  ]}
  onClick={(id) => console.log(id)}
/>`,
        href: "/grid/simple",
      },
    ],
    props: [
      { name: "items", type: "ItemGridProps[]", description: "Items: { icon, title, description?, id? }", required: true },
      { name: "variant", type: "1 | 2", description: "Item visual variant (Grid01/Grid02)", default: "1" },
      { name: "className", type: "string", description: "Container CSS class" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "onClick", type: "(id) => void", description: "Called when an item is clicked" },
      { name: "itemClassName", type: "string", description: "CSS class for each item" },
    ],
  },
  {
    slug: "items-panel",
    name: "ItemsPanel",
    category: "Item Grid",
    description: "Item panel/switch that renders in a grid or inline carousel with selection state.",
    path: "src/lib/components/core/grid/ui/ItemsPanel.svelte",
    importPath: "ItemsPanel",
    examples: [
      {
        title: "Panel Grid",
        code: `import { ItemsPanel } from "negodesign"

<ItemsPanel
  style="grid"
  variant={1}
  items={items}
  onClick={(id) => console.log(id)}
/>`,
        href: "/grid/panel",
      },
    ],
    props: [
      { name: "style", type: "'grid' | 'inline'", description: "Display mode", default: "grid" },
      { name: "items", type: "ItemGridProps[]", description: "Items to render", required: true },
      { name: "variant", type: "1 | 2", description: "Item variant" },
      { name: "onClick", type: "(id) => void", description: "Called when an item is selected" },
      { name: "itemClassName", type: "string", description: "CSS class for each item" },
      { name: "className", type: "string", description: "Container CSS class" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
    ],
  },
  {
    slug: "modal-grid-selection",
    name: "ModalGridSelection",
    category: "Modals",
    description: "Selection modal with a responsive grid of clickable cards. Supports two visual variants: 1 (centered 3-column grid) and 2 (dark 2-column grid with category filters).",
    path: "src/lib/components/ui/modal/grid/ui/ModalGridSelection.svelte",
    importPath: "ModalGridSelection",
    examples: [
      {
        title: "Variant 1 — Centered Grid",
        href: "/modal",
        code: `import { ModalGridSelection } from "negodesign"

let isOpen = $state(false);
let selected = $state(null);

<ModalGridSelection
  bind:isOpen
  bind:selectedCard={selected}
  title="What will you be using this for?"
  subtitle="We'll use this to recommend you our personalized features"
  totalSteps={3}
  currentStep={1}
  cards={[
    { title: "Student", description: "You're here to impress your teachers.", icon: "nd-cap-icon" },
    { title: "Business", description: "You're here to grow your brand.", icon: "nd-briefcase-icon" },
    { title: "Personal", description: "You're here to make anything.", icon: "nd-user-icon" },
  ]}
  onSelect={(card) => console.log(card)}
  onBack={() => console.log("back")}
  onContinue={() => console.log("continue")}
/>`,
      },
      {
        title: "Variant 2 — Dark Grid with Categories",
        code: `import { ModalGridSelection } from "negodesign"

let isOpen = $state(false);
let selected = $state(null);

<ModalGridSelection
  variant={2}
  bind:isOpen
  bind:selectedCard={selected}
  title="What are you planning to use this app for?"
  categories={[
    { label: "Marketing", value: "marketing" },
    { label: "Product", value: "product" },
    { label: "Engineering", value: "engineering" },
  ]}
  cards={[
    { title: "Work Stuff", description: "Just the usual boring work stuff.", icon: "nd-briefcase-icon" },
    { title: "UI/UX Design", description: "Design apps and prototypes.", icon: "nd-palette-icon" },
    { title: "Finance", description: "Because I need money.", icon: "nd-money-icon" },
    { title: "Productivity", description: "Sometimes we need to be productive.", icon: "nd-clock-icon" },
  ]}
  onSelect={(card) => console.log(card)}
  onContinue={() => console.log("continue")}
/>`,
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Visual variant (1: centered grid, 2: dark grid with categories)", default: "1" },
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "subtitle", type: "string", description: "Subtitle below the title" },
      { name: "categories", type: "ModelGridCategory[]", description: "Category pills at the top (variant 2 only): { label, value }" },
      { name: "selectedCategory", type: "ModelGridCategory | null", description: "Currently selected category (variant 2, bindable)" },
      { name: "cards", type: "ModelGridCard[]", description: "Required. Selectable cards: { title, description?, icon }", required: true },
      { name: "selectedCard", type: "ModelGridCard | null", description: "Currently selected card (bindable)" },
      { name: "selectedCards", type: "ModelGridCard[]", description: "Selected cards for multiple mode (variant 2, bindable)" },
      { name: "multiple", type: "boolean", description: "Allows multiple card selection (variant 2)", default: "false" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "totalSteps", type: "number", description: "Total number of steps for pagination dots", default: "1" },
      { name: "currentStep", type: "number", description: "Current step index", default: "1" },
      { name: "onSelect", type: "(card: ModelGridCard) => void", description: "Called when a card is selected" },
      { name: "onSelectCategory", type: "(category: ModelGridCategory) => void", description: "Called when a category is selected (variant 2)" },
      { name: "onBack", type: "() => void", description: "Called when the Back button is clicked" },
      { name: "onContinue", type: "() => void", description: "Called when the Continue button is clicked" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-badge-selection",
    name: "ModalBadgeSelection",
    category: "Modals",
    description: "Selection modal with clickable badge/pill tags, progress bar, and Skip/Continue navigation. Second variation of the modal system.",
    path: "src/lib/components/ui/modal/badge/ui/ModalBadgeSelection.svelte",
    importPath: "ModalBadgeSelection",
    examples: [
      {
        title: "Modal Badge Selection",
        href: "/modal",
        code: `import { ModalBadgeSelection } from "negodesign"

let isOpen = $state(false);
let selected = $state(null);

<ModalBadgeSelection
  bind:isOpen
  bind:selectedBadge={selected}
  title="What team are you currently on?"
  subtitle="Please select one answer only."
  totalSteps={5}
  currentStep={2}
  badges={[
    { label: "Marketing", value: "marketing" },
    { label: "Engineering", value: "engineering" },
    { label: "Design", value: "design" },
    { label: "Operations", value: "operations" },
  ]}
  onSelect={(badge) => console.log(badge)}
  onContinue={() => console.log("continue")}
  onSkip={() => console.log("skip")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "subtitle", type: "string", description: "Subtitle below the title" },
      { name: "badges", type: "ModelBadge[]", description: "Required. Selectable badges: { label, value, icon? }", required: true },
      { name: "selectedBadge", type: "ModelBadge | null", description: "Currently selected badge (bindable)" },
      { name: "selectedBadges", type: "ModelBadge[]", description: "Selected badges for multiple mode (bindable)" },
      { name: "multiple", type: "boolean", description: "Allows multiple selection", default: "false" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "totalSteps", type: "number", description: "Total number of steps for progress bar", default: "1" },
      { name: "currentStep", type: "number", description: "Current step index", default: "1" },
      { name: "onSelect", type: "(badge: ModelBadge) => void", description: "Called when a badge is selected" },
      { name: "onBack", type: "() => void", description: "Called when the Back button is clicked" },
      { name: "onContinue", type: "() => void", description: "Called when the Continue button is clicked" },
      { name: "onSkip", type: "() => void", description: "Called when Skip This Step is clicked" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-share-selection",
    name: "ModalShareSelection",
    category: "Modals",
    description: "Social share modal with branded network images, copy-to-clipboard link input, and close button. Third variation of the modal system.",
    path: "src/lib/components/ui/modal/share/ui/ModalShareSelection.svelte",
    importPath: "ModalShareSelection",
    examples: [
      {
        title: "Modal Share Selection",
        href: "/modal",
        code: `import { ModalShareSelection } from "negodesign"

let isOpen = $state(false);

<ModalShareSelection
  bind:isOpen
  title="Share this design"
  linkValue="https://example.com/design/123"
  isWhatsapp
  isInstagram
  isFacebook
  isTwitter
  isLinkedin
  isPinterest
  isTumblr
  onShare={(network) => console.log(network)}
  onCopy={(link) => console.log(link)}
/>`,
      },
      {
        title: "Modal Share Selection — custom networks",
        code: `import { ModalShareSelection } from "negodesign"
import type { ModelSocialShare } from "negodesign"

let isOpen = $state(false);

const networks: ModelSocialShare[] = [
  { name: "WhatsApp", img: "/img/icons8-whatsapp-48.png", color: "#25D366" },
  { name: "Facebook", img: "/img/icons8-facebook-48.png", color: "#1877F2" },
];

<ModalShareSelection
  bind:isOpen
  title="Share this design"
  linkValue="https://example.com/design/123"
  {networks}
  onShare={(network) => console.log(network)}
  onCopy={(link) => console.log(link)}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "subtitle", type: "string", description: "Subtitle below the title" },
      { name: "networks", type: "ModelSocialShare[]", description: "Custom networks: { name, icon?, img?, color?, url? }. When omitted, the built-in networks are used." },
      { name: "isWhatsapp", type: "boolean", description: "Shows the WhatsApp network (built-in, uses /img/icons8-whatsapp-48.png)", default: "true" },
      { name: "isInstagram", type: "boolean", description: "Shows the Instagram network", default: "true" },
      { name: "isFacebook", type: "boolean", description: "Shows the Facebook network", default: "true" },
      { name: "isTwitter", type: "boolean", description: "Shows the Twitter/X network", default: "true" },
      { name: "isLinkedin", type: "boolean", description: "Shows the LinkedIn network", default: "true" },
      { name: "isPinterest", type: "boolean", description: "Shows the Pinterest network", default: "true" },
      { name: "isTumblr", type: "boolean", description: "Shows the Tumblr network", default: "true" },
      { name: "linkLabel", type: "string", description: "Text above the link input", default: "Or copy link" },
      { name: "linkValue", type: "string", description: "URL to share/copy" },
      { name: "copyText", type: "string", description: "Copy button text", default: "Copy" },
      { name: "copiedText", type: "string", description: "Text after successful copy", default: "Copied!" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "onShare", type: "(network: ModelSocialShare) => void", description: "Called when a social network is clicked" },
      { name: "onCopy", type: "(link: string) => void", description: "Called when the link is copied" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-notification",
    name: "ModalNotification",
    category: "Modals",
    description: "Email subscription/notification modal with input field and CTA button. Fourth variation of the modal system.",
    path: "src/lib/components/ui/modal/notification/ui/ModalNotification.svelte",
    importPath: "ModalNotification",
    examples: [
      {
        title: "Modal Notification",
        href: "/modal",
        code: `import { ModalNotification } from "negodesign"

let isOpen = $state(false);

<ModalNotification
  bind:isOpen
  title="Be the first to know when new content is available"
  description="Sign up to receive tips and tricks on how to create online designs that make people take action."
  placeholder="Your email address"
  buttonText="Sign me up"
  onSubmit={(email) => console.log(email)}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "description", type: "string", description: "Description text below the title" },
      { name: "placeholder", type: "string", description: "Email input placeholder", default: "Your email address" },
      { name: "buttonText", type: "string", description: "Submit button text", default: "Sign me up" },
      { name: "buttonLoadingText", type: "string", description: "Loading state button text", default: "Signing up..." },
      { name: "isLoading", type: "boolean", description: "Loading state", default: "false" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "onSubmit", type: "(email: string) => void", description: "Called when the email is submitted" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-feedback",
    name: "ModalFeedback",
    category: "Modals",
    description: "Feedback modal with a rich text editor toolbar (bold, italic, underline, lists, alignment) and image upload button. Fifth variation of the modal system.",
    path: "src/lib/components/ui/modal/feedback/ui/ModalFeedback.svelte",
    importPath: "ModalFeedback",
    examples: [
      {
        title: "Modal Feedback",
        href: "/modal",
        code: `import { ModalFeedback } from "negodesign"

let isOpen = $state(false);

<ModalFeedback
  bind:isOpen
  title="Your Feedback"
  icon="🔥"
  onSubmit={(content, images) => console.log(content, images)}
  onAddImage={() => console.log("add image")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Modal title", default: "Your Feedback" },
      { name: "icon", type: "string", description: "Emoji/icon next to the title", default: "🔥" },
      { name: "placeholder", type: "string", description: "Editor placeholder text", default: "Write your feedback here..." },
      { name: "buttonText", type: "string", description: "Submit button text", default: "Send" },
      { name: "buttonLoadingText", type: "string", description: "Loading state button text", default: "Sending..." },
      { name: "cancelText", type: "string", description: "Cancel button text", default: "Cancel" },
      { name: "addImageText", type: "string", description: "Add image button text", default: "Add an Image" },
      { name: "isLoading", type: "boolean", description: "Loading state", default: "false" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "onSubmit", type: "(content: string, images: File[]) => void", description: "Called when feedback is submitted" },
      { name: "onAddImage", type: "() => void", description: "Called when Add Image is clicked" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "form",
    name: "Form",
    category: "Forms",
    description: "Responsive form component with a 2-column grid layout. Supports text, email, password, date, phone, select, radio, checkbox, textarea, toggle, and badges inputs. Each field can span 1 or 2 columns via the `fill` property.",
    path: "src/lib/components/ui/form/Form.svelte",
    importPath: "Form",
    examples: [
      {
        title: "Form with multiple input types",
        href: "/form",
        code: `import { Form } from "negodesign"

<Form
  onSubmit={(data) => console.log(data)}
  submitText="Save"
  inputs={[
    { type: "text", name: "name", label: "Full Name", placeholder: "John Doe", required: true },
    { type: "email", name: "email", label: "Email", placeholder: "john@example.com", required: true },
    { type: "select", name: "role", label: "Role", options: [
      { value: "ADMIN", label: "Admin" },
      { value: "USER", label: "User" },
    ]},
    { type: "toggle", name: "active", label: "Active", description: "Enable this account" },
    { type: "textarea", name: "bio", label: "Bio", placeholder: "Tell us about yourself", fill: true },
    { type: "badges", name: "tags", label: "Tags", placeholder: "Add tags...", suggestions: ["React", "Svelte", "Vue"] },
  ]}
/>`,
      },
    ],
    props: [
      { name: "inputs", type: "FormInputConfig[]", description: "Required. Array of input configurations: { type, name, value?, label?, placeholder?, onChange?, disabled?, required?, fill?, options?, multiple?, rows?, description?, suggestions?, maxTags? }", required: true },
      { name: "onSubmit", type: "(data: Record<string, string | string[] | boolean>) => void", description: "Called when the form is submitted" },
      { name: "submitText", type: "string", description: "Submit button text", default: "Submit" },
      { name: "submitLoadingText", type: "string", description: "Loading state button text", default: "Submitting..." },
      { name: "isLoading", type: "boolean", description: "Loading state", default: "false" },
      { name: "columns", type: "1 | 2", description: "Number of grid columns", default: "2" },
      { name: "gap", type: "string", description: "Gap between fields", default: "gap-4" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-form",
    name: "ModalForm",
    category: "Forms",
    description: "Form inside a modal dialog. Same API as Form with added title, subtitle, and modal controls.",
    path: "src/lib/components/ui/modal/form/ui/ModalForm.svelte",
    importPath: "ModalForm",
    examples: [
      {
        title: "Modal Form",
        href: "/modal",
        code: `import { ModalForm } from "negodesign"

let isOpen = $state(false);

<ModalForm
  bind:isOpen
  title="Edit Profile"
  subtitle="Update your personal information"
  submitText="Save Changes"
  inputs={[
    { type: "text", name: "name", label: "Name", value: "John Doe", required: true },
    { type: "email", name: "email", label: "Email", value: "john@example.com" },
    { type: "toggle", name: "newsletter", label: "Newsletter", description: "Receive updates" },
  ]}
  onSubmit={(data) => console.log(data)}
  onCancel={() => console.log("cancelled")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "subtitle", type: "string", description: "Subtitle below the title" },
      { name: "inputs", type: "FormInputConfig[]", description: "Required. Same as Form inputs", required: true },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "submitText", type: "string", description: "Submit button text", default: "Submit" },
      { name: "submitLoadingText", type: "string", description: "Loading state button text", default: "Submitting..." },
      { name: "cancelText", type: "string", description: "Cancel button text", default: "Cancel" },
      { name: "isLoading", type: "boolean", description: "Loading state", default: "false" },
      { name: "showCancel", type: "boolean", description: "Shows the cancel button", default: "true" },
      { name: "columns", type: "1 | 2", description: "Number of grid columns", default: "2" },
      { name: "onSubmit", type: "(data) => void", description: "Called when the form is submitted" },
      { name: "onCancel", type: "() => void", description: "Called when Cancel is clicked" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-upload",
    name: "ModalUpload",
    category: "Modals",
    description: "File upload modal with drag and drop area, file list with progress bars, status indicators (uploading/completed/failed), and retry/remove actions.",
    path: "src/lib/components/ui/modal/upload/ui/ModalUpload.svelte",
    importPath: "ModalUpload",
    examples: [
      {
        title: "Modal Upload",
        href: "/modal",
        code: `import { ModalUpload } from "negodesign"
import type { UploadFile } from "negodesign"

let isOpen = $state(false);
let files = $state<UploadFile[]>([]);

<ModalUpload
  bind:isOpen
  bind:files
  acceptedFormats="csv, xlsx, xls"
  multiple
  onFilesSelected={(f) => console.log("selected", f)}
  onUpload={(f) => console.log("upload", f)}
  onRemoveFile={(id) => console.log("remove", id)}
  onDownload={() => console.log("download sample")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Modal title", default: "Upload File" },
      { name: "accept", type: "string", description: "Accepted MIME types" },
      { name: "acceptedFormats", type: "string", description: "Displayed accepted formats text" },
      { name: "files", type: "UploadFile[]", description: "File list (bindable)" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "multiple", type: "boolean", description: "Allows multiple files", default: "true" },
      { name: "maxSize", type: "number", description: "Max file size in bytes (0 = unlimited)", default: "0" },
      { name: "isLoading", type: "boolean", description: "Upload loading state" },
      { name: "onFilesSelected", type: "(files: File[]) => void", description: "Called when files are selected" },
      { name: "onUpload", type: "(files: UploadFile[]) => void", description: "Called when Upload is clicked" },
      { name: "onCancel", type: "() => void", description: "Called when Cancel is clicked" },
      { name: "onRemoveFile", type: "(id: string) => void", description: "Called when a file is removed" },
      { name: "onRetryFile", type: "(id: string) => void", description: "Called when retry is clicked on a failed file" },
      { name: "onDownload", type: "() => void", description: "Called when the download sample link is clicked" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-core",
    name: "ModalCore",
    category: "Modals",
    description: "Reusable base shell for all modals. Provides overlay, gradient-bordered container, header, and footer with progress bar and navigation buttons. Supports custom content and footer snippets.",
    path: "src/lib/components/ui/modal/core/ui/ModalCore.svelte",
    importPath: "ModalCore",
    examples: [
      {
        title: "Modal Core",
        code: `import { ModalCore } from "negodesign"

let isOpen = $state(false);

<ModalCore
  bind:isOpen
  title="Custom Modal"
  subtitle="With custom content"
  totalSteps={3}
  currentStep={1}
  showProgress
  showBack
  showSkip
  onContinue={() => console.log("continue")}
  onSkip={() => console.log("skip")}
>
  {#snippet content()}
    <p>Your custom content here</p>
  {/snippet}
</ModalCore>`,
      },
    ],
    props: [
      { name: "isOpen", type: "boolean", description: "Required. Controls modal visibility (bindable)", required: true },
      { name: "title", type: "string", description: "Required. Modal title", required: true },
      { name: "subtitle", type: "string", description: "Subtitle below the title" },
      { name: "totalSteps", type: "number", description: "Total number of steps for progress bar", default: "1" },
      { name: "currentStep", type: "number", description: "Current step index", default: "1" },
      { name: "showProgress", type: "boolean", description: "Shows the progress bar", default: "true" },
      { name: "showBack", type: "boolean", description: "Shows the Back button", default: "true" },
      { name: "showSkip", type: "boolean", description: "Shows the Skip link", default: "false" },
      { name: "skipText", type: "string", description: "Skip link text", default: "Skip This Step" },
      { name: "continueText", type: "string", description: "Continue button text", default: "Continue" },
      { name: "backText", type: "string", description: "Back button text", default: "Back" },
      { name: "onBack", type: "() => void", description: "Called when Back is clicked" },
      { name: "onContinue", type: "() => void", description: "Called when Continue is clicked" },
      { name: "onSkip", type: "() => void", description: "Called when Skip is clicked" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "content", type: "Snippet", description: "Custom content snippet" },
      { name: "footer", type: "Snippet", description: "Custom footer snippet (replaces default)" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "modal-map",
    name: "ModalMap",
    category: "Modals",
    description: "Location picker modal with a map area, search bar, address/description popup, and business location checkbox. Sixth variation of the modal system.",
    path: "src/lib/components/ui/modal/map/ui/ModalMap.svelte",
    importPath: "ModalMap",
    examples: [
      {
        title: "Modal Map",
        href: "/modal",
        code: `import { ModalMap } from "negodesign"

let isOpen = $state(false);

<ModalMap
  bind:isOpen
  title="Location"
  address="211 Throop Ave Brooklyn, New York City"
  description="New York is served by three airports."
  onSearch={(q) => console.log(q)}
  onApply={(addr, desc) => console.log(addr, desc)}
  onCancel={() => console.log("cancel")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Location popup title", default: "Location" },
      { name: "searchPlaceholder", type: "string", description: "Search bar placeholder", default: "Search address..." },
      { name: "address", type: "string", description: "Current address value" },
      { name: "addressLabel", type: "string", description: "Address field label", default: "Address" },
      { name: "description", type: "string", description: "Location description/notes" },
      { name: "descriptionLabel", type: "string", description: "Description field label", default: "Description" },
      { name: "editButtonText", type: "string", description: "Edit button text", default: "Edit" },
      { name: "useLocationText", type: "string", description: "Checkbox label text", default: "Use your business location" },
      { name: "useLocationChecked", type: "boolean", description: "Checkbox state (bindable)" },
      { name: "cancelText", type: "string", description: "Cancel button text", default: "Cancel" },
      { name: "applyText", type: "string", description: "Apply button text", default: "Apply" },
      { name: "isLoading", type: "boolean", description: "Loading state", default: "false" },
      { name: "isOpen", type: "boolean", description: "Controls modal visibility (bindable)" },
      { name: "onSearch", type: "(query: string) => void", description: "Called when searching an address" },
      { name: "onEdit", type: "() => void", description: "Called when Edit is clicked" },
      { name: "onApply", type: "(address: string, description: string) => void", description: "Called when Apply is clicked" },
      { name: "onCancel", type: "() => void", description: "Called when Cancel is clicked" },
      { name: "onToggleLocation", type: "(checked: boolean) => void", description: "Called when the checkbox is toggled" },
      { name: "onClose", type: "() => void", description: "Called when the modal is closed" },
      { name: "mapSlot", type: "Snippet", description: "Custom map content snippet" },
      { name: "class", type: "string", description: "Extra container CSS class" },
    ],
  },
  {
    slug: "footer",
    name: "Footer",
    category: "Footer",
    description: "Footer wrapper with link columns, newsletter, social media, and copyright.",
    path: "src/lib/components/core/footer/ui/Footer.svelte",
    importPath: "Footer",
    examples: [
      {
        title: "Footer",
        code: `import { Footer } from "negodesign"

<Footer
  isNewsletter={true}
  items={[
    { title: "Solutions", items: [{ text: "Marketing" }] },
  ]}
  socialsMedia={[
    { icon: "facebook", text: "Facebook", href: "#" },
  ]}
  companyName="Negoturismo"
/>`,
        href: "/footer",
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Selects the layout", default: "1" },
      { name: "items", type: "FooterColumnProps[]", description: "Required. Columns: { title, items: [{ text, href? }] }", required: true },
      { name: "socialsMedia", type: "FooterSocialItem[]", description: "Required. Social media: { icon, text, href? }", required: true },
      { name: "logo", type: "string", description: "Logo URL (variant 1)" },
      { name: "isNewsletter", type: "boolean", description: "Enables the newsletter form" },
      { name: "companyName", type: "string", description: "Company name in the copyright" },
      { name: "newsletterTitle", type: "string", description: "Newsletter section title" },
      { name: "newsletterDescription", type: "string", description: "Newsletter description" },
      { name: "onSubscribe", type: "(email: string) => void", description: "Called when the email is submitted" },
    ],
  },
  {
    slug: "admin-panel",
    name: "AdminPanel",
    category: "Admin Panel",
    description: "Admin app shell: collapsible sidebar, top bar, breadcrumb, light switch, and content area.",
    path: "src/lib/components/pages/admin/01/ui/AdminPanel.svelte",
    importPath: "AdminPanel",
    examples: [
      {
        title: "Admin Panel",
        code: `import { AdminPanel } from "negodesign"

<AdminPanel>
  {#snippet appsidebar()}
    <MenuBarSidebar {user} {menus} {menusButtons} />
  {/snippet}
  {#snippet content()}
    <AdminContent>...content...</AdminContent>
  {/snippet}
</AdminPanel>`,
        href: "/admin/01",
      },
    ],
    props: [
      { name: "appsidebar", type: "Snippet", description: "App sidebar content" },
      { name: "content", type: "Snippet", description: "Main page content" },
      { name: "breadcrumb", type: "Snippet", description: "Breadcrumb navigation in the header" },
    ],
  },
  {
    slug: "data-table",
    name: "DataTableCore",
    category: "Admin Panel",
    description: "Generic data table (TanStack Table) with headers, badges, drag-and-drop, selection, filters, and pagination.",
    path: "src/lib/components/core/datatable/ui/DataTableCore.svelte",
    importPath: "DataTableCore",
    examples: [
      {
        title: "Data Table",
        code: `import { DataTableCore } from "negodesign"

<DataTableCore
  items={rows}
  config={columns}
  columnFilter="name"
  actions={RowActions}
/>`,
        href: "/datatable/01",
      },
    ],
    props: [
      { name: "items", type: "T[]", description: "Array of row data", required: true },
      { name: "config", type: "ColumnDef[]", description: "Required. Column definitions: { accessorKey, header, cell, badge[] }", required: true },
      { name: "columnFilter", type: "keyof T", description: "Column key used in the global filter" },
      { name: "actions", type: "Component", description: "Component rendered in the per-row actions column" },
    ],
  },
  {
    slug: "menu-bar-sidebar",
    name: "MenuBarSidebar",
    category: "Admin Panel",
    description: "Navigation sidebar used inside AdminPanel with submenus, footer buttons, and a signed-in user card.",
    path: "src/lib/components/core/sidebar/MenuBarSidebar.svelte",
    importPath: "MenuBarSidebar",
    examples: [
      {
        title: "Sidebar",
        code: `import { MenuBarSidebar } from "negodesign"

<MenuBarSidebar
  {menus}
  {user}
  {menusButtons}
/>`,
      },
    ],
    props: [
      { name: "menus", type: "NavMenuItem[]", description: "Required. Main menu: { title, url?, icon, isActive?, submenus[] }", required: true },
      { name: "user", type: "NavUserSidebarProps", description: "Required. User: { user: { name, email, avatar? } }", required: true },
      { name: "menusButtons", type: "NavMenuSidebarProps[]", description: "Footer buttons (e.g. Help, Settings)" },
      { name: "footer", type: "Snippet", description: "Custom footer snippet" },
      { name: "header", type: "Snippet", description: "Custom header snippet" },
      { name: "collapsible", type: "string", description: "Collapse mode", default: "icon" },
    ],
  },
  {
    slug: "page-login",
    name: "PageLogin",
    category: "Login / Security",
    description: "Login page in a split layout: hero carousel and authentication card.",
    path: "src/lib/components/pages/security/login/PageLogin.svelte",
    importPath: "PageLogin",
    examples: [
      {
        title: "Login Page",
        code: `import { PageLogin } from "negodesign"

<PageLogin
  title="Negodesign"
  formType="EMAIL_PASSWORD"
  carousel={[
    { title: "Welcome", description: "Access your account", buttonText: "Sign in" },
  ]}
  onSubmit={(credential) => console.log(credential)}
/>`,
        href: "/login/admin/01",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Title shown in the hero/header" },
      { name: "formType", type: "'EMAIL_PASSWORD' | 'PHONE_PASSWORD' | 'USERNAME_PASSWORD'", description: "Form type", default: "USERNAME_PASSWORD" },
      { name: "carousel", type: "LoginCarouselItem[]", description: "Hero slides: { title, description, buttonText, buttonUrl? }" },
      { name: "varient", type: "'NUMBER' | 'DOT' | 'POINTER'", description: "Carousel indicator style" },
      { name: "children", type: "Snippet", description: "Custom content replacing the login card" },
      { name: "onSubmit", type: "(LoginRequestDto) => void", description: "Called on submit: { password, data }" },
      { name: "forgetPassword", type: "LinkProps", description: "'Forgot password' link" },
      { name: "privacyPolicy", type: "LinkProps", description: "Privacy policy link" },
      { name: "termsOfService", type: "LinkProps", description: "Terms of service link" },
    ],
  },
  {
    slug: "page-register",
    name: "PageRegister",
    category: "Login / Security",
    description: "Register page in a split layout: hero carousel and authentication card with configurable fields (name, email, password, phone, birthday, gender).",
    path: "src/lib/components/pages/security/register/PageRegister.svelte",
    importPath: "PageRegister",
    examples: [
      {
        title: "Register Page — All Fields",
        code: `import { PageRegister } from "negodesign"

<PageRegister
  title="Negodesign"
  fields={{
    isName: true,
    isEmail: true,
    isPassword: true,
    isConfirmPassword: true,
    isBirthday: true,
    isGender: true,
    isPhone: true,
  }}
  onSubmit={(data) => console.log(data)}
/>`,
        href: "/register/admin/01",
      },
      {
        title: "Register Page — Minimal (email + password)",
        code: `import { PageRegister } from "negodesign"

<PageRegister
  variant={2}
  title="Negodesign"
  fields={{
    isEmail: true,
    isPassword: true,
    isConfirmPassword: true,
  }}
  onSubmit={(data) => console.log(data)}
/>`,
      },
    ],
    props: [
      { name: "variant", type: "1 | 2 | 3", description: "Layout variant (1: grid pattern, 2: hero image, 3: glass morphism)", default: "1" },
      { name: "title", type: "string", description: "Title shown in the hero/header" },
      { name: "fields", type: "RegisterFormFields", description: "Fields to show: { isName?, isEmail?, isPassword?, isConfirmPassword?, isBirthday?, isGender?, isPhone? }" },
      { name: "carousel", type: "RegisterCarouselItem[]", description: "Hero slides: { title, description, buttonText, buttonUrl? }" },
      { name: "type", type: "'NUMBER' | 'DOT' | 'POINTER'", description: "Carousel indicator style" },
      { name: "children", type: "Snippet", description: "Custom content replacing the register card" },
      { name: "onSubmit", type: "(RegisterRequestDto) => void", description: "Called on submit: { name?, email, password?, confirmPassword?, birthday?, gender?, phone? }" },
      { name: "login", type: "LinkProps", description: "Link to login page" },
      { name: "privacyPolicy", type: "LinkProps", description: "Privacy policy link" },
      { name: "termsOfService", type: "LinkProps", description: "Terms of service link" },
      { name: "socialLogins", type: "SocialLoginItem[]", description: "Social login providers: { provider, icon?, label?, onclick? }" },
    ],
  },
  {
    slug: "company-profile",
    name: "CompanyProfile",
    category: "Full Pages",
    description: "Company profile page: banner, scroll-spy section navigation, and About, Gallery, and Products sections.",
    path: "src/lib/components/pages/company-profile/CompanyProfile.svelte",
    importPath: "CompanyProfile",
    examples: [
      {
        title: "Company Profile",
        code: `import { CompanyProfile } from "negodesign"

<CompanyProfile
  data={data}
  isLoading={false}
  onWhatsapp={(id) => console.log(id)}
  onEmail={(id) => console.log(id)}
/>`,
        href: "/company-profile",
      },
    ],
    props: [
      { name: "data", type: "CompanyProfileData", description: "Complete data: { id, banner, about, gallery, products }", required: true },
      { name: "isLoading", type: "boolean", description: "Shows skeletons in all blocks" },
      { name: "onWhatsapp", type: "(id) => void", description: "Called when whatsapp is clicked" },
      { name: "onEmail", type: "(id) => void", description: "Called when email is clicked" },
      { name: "onCopyLink", type: "(id) => void", description: "Called when link is copied" },
      { name: "onShare", type: "(id) => void", description: "Called when sharing" },
    ],
  },
  {
    slug: "privacy-policy",
    name: "PrivacyPolicyOrTermsOfUse",
    category: "Full Pages",
    description: "Privacy policy/terms page with two layout variants.",
    path: "src/lib/components/pages/privacy-policy-or-terms-of-use/PrivacyPolicyOrTermsOfUse.svelte",
    importPath: "PrivacyPolicyOrTermsOfUse",
    examples: [
      {
        title: "Privacy Policy",
        code: `import { PrivacyPolicyOrTermsOfUse } from "negodesign"

<PrivacyPolicyOrTermsOfUse
  variant={1}
  title="Privacy Policy"
  lastUpdated="August 15, 2026"
  breadcrumb={[{ label: "Home", href: "/" }]}
  sections={[{ id: "intro", title: "Introduction", blocks: [] }]}
/>`,
        href: "/privacy-policy-or-terms-of-use",
      },
    ],
    props: [
      { name: "variant", type: "1 | 2", description: "Layout variant", default: "1" },
      { name: "title", type: "string", description: "Required. Page title", required: true },
      { name: "lastUpdated", type: "string", description: "Required. Last updated date", required: true },
      { name: "breadcrumb", type: "BreadcrumbItem[]", description: "Required. Items: { label, href? }", required: true },
      { name: "sections", type: "DocSection[]", description: "Required. Content sections: { id, title, level?, blocks?, subsections? }", required: true },
      { name: "isVisibleMenuLeft", type: "boolean", description: "Shows the left sidebar (variant 1)" },
      { name: "isVisibleMenuRight", type: "boolean", description: "Shows the right index" },
    ],
  },
  {
    slug: "product-details",
    name: "ProductDetails",
    category: "Full Pages",
    description: "Product details page with three layout variants (gallery + info, sticky panel, tabs).",
    path: "src/lib/components/pages/product-details/ProductDetails.svelte",
    importPath: "ProductDetails",
    examples: [
      {
        title: "Product Details",
        code: `import { ProductDetails } from "negodesign"

<ProductDetails
  varient={1}
  data={productData}
  isLoading={false}
  onBuy={(id) => alert("Buy " + id)}
  onFavorite={(id) => alert("Favorite " + id)}
  onCart={(id) => alert("Cart " + id)}
/>`,
        href: "/product-details/01",
      },
    ],
    props: [
      { name: "varient", type: "1 | 2 | 3", description: "Layout variant (note: prop spelled 'varient')", default: "1" },
      { name: "data", type: "ProductDetailsData", description: "Required. Complete product data", required: true },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "promotions", type: "ProductPromotionDetailsProps[]", description: "Promotions with old/new prices" },
      { name: "showPriceWithPromotions", type: "boolean", description: "Shows only promotion prices" },
      { name: "onBuy", type: "(id) => void", description: "Called on the buy button" },
      { name: "onFavorite", type: "(id) => void", description: "Called on the favorite button" },
      { name: "onCart", type: "(id) => void", description: "Called on the cart button" },
    ],
  },
  {
    slug: "profile-user",
    name: "ProfileUser",
    category: "Full Pages",
    description: "User profile page with a header and tabbed sections: Addresses, Security, and Settings.",
    path: "src/lib/components/pages/profile-user/ProfileUser.svelte",
    importPath: "ProfileUser",
    examples: [
      {
        title: "User Profile",
        code: `import { ProfileUser } from "negodesign"

<ProfileUser
  varient={1}
  data={userData}
  isLoading={false}
  onLoginAsUser={(id) => alert(id)}
  onAddAddress={() => alert("Add")}
  onChangePassword={(p) => alert(JSON.stringify(p))}
/>`,
        href: "/profile-user/01",
      },
    ],
    props: [
      { name: "varient", type: "1 | 2 | 3", description: "Layout variant (note: prop spelled 'varient')", default: "1" },
      { name: "data", type: "ProfileUserData", description: "Required. User data", required: true },
      { name: "activeTab", type: "string", description: "Active tab (bindable)" },
      { name: "isLoading", type: "boolean", description: "Shows skeletons" },
      { name: "tabs", type: "{ id, label }[]", description: "Custom tab definitions" },
      { name: "onLoginAsUser", type: "(id) => void", description: "Called on 'sign in as user'" },
      { name: "onAddAddress", type: "() => void", description: "Called on 'add address'" },
      { name: "onChangePassword", type: "(payload) => void", description: "Called when the password is submitted" },
      { name: "userTabs", type: "ProfileUserTabsProps", description: "Tabs style: underline | pill" },
    ],
  },
  {
    slug: "tab-underline",
    name: "TabUnderline",
    category: "Tabs",
    description: "Tab component with underline style. Switches content (Snippet) based on the selected tab.",
    path: "src/lib/components/ui/tabs/ui/tab-underline.svelte",
    importPath: "TabUnderline",
    examples: [
      {
        title: "Tab Underline",
        href: "/tab",
        code: `import { TabUnderline } from "negodesign"

<TabUnderline
  items={[
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
  ]}
  contents={{
    tab1: () => <p>Content 1</p>,
    tab2: () => <p>Content 2</p>,
  }}
/>`,
      },
    ],
    props: [
      { name: "items", type: "TabProps[]", description: "Required. Tabs: { item: { label, value }, children? }", required: true },
      { name: "contents", type: "Record<string, Snippet>", description: "Content snippets keyed by tab value" },
      { name: "className", type: "string", description: "Extra CSS class" },
    ],
  },
  {
    slug: "not-found-empty",
    name: "NotFoundEmpty",
    category: "Empty States",
    description: "Empty state with icon, title, description and an action (link or button) for when there is no content to display.",
    path: "src/lib/components/ui/panel/NotFoundEmpty.svelte",
    importPath: "NotFoundEmpty",
    examples: [
      {
        title: "Empty State",
        code: `import { NotFoundEmpty } from "negodesign"

<NotFoundEmpty
  title="No results found"
  description="Try adjusting your search or filter to find what you're looking for."
  showAction
  actionLabel="Clear filters"
  onAction={() => console.log("clear")}
/>`,
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Empty state title", required: true },
      { name: "description", type: "string", description: "Supporting text" },
      { name: "icon", type: "IconSvgElement", description: "Icon displayed in the media area" },
      { name: "actionHref", type: "string", description: "Action URL (renders a link)" },
      { name: "actionLabel", type: "string", description: "Action label text" },
      { name: "onAction", type: "() => void", description: "Called when the action is clicked" },
      { name: "showAction", type: "boolean", description: "Shows the action" },
      { name: "children", type: "Snippet", description: "Custom content replacing the default action" },
    ],
  },
  {
    slug: "admin-content",
    name: "AdminContent",
    category: "Admin Panel",
    description: "Wrapper for admin page content. Applies padding, flex column layout and consistent gaps between sections.",
    path: "src/lib/components/pages/admin/01/ui/AdminContent.svelte",
    importPath: "AdminContent",
    examples: [
      {
        title: "Admin Content",
        code: `import { AdminContent } from "negodesign"

<AdminContent>
  <h1>Dashboard</h1>
  <p>Content goes here</p>
</AdminContent>`,
      },
    ],
    props: [
      { name: "children", type: "Snippet", description: "Required. Page content", required: true },
    ],
  },
  {
    slug: "input-email",
    name: "InputEmail",
    category: "Form Inputs",
    description: "Email input field with icon and label, using InputBase. Supports two-way binding via value.",
    path: "src/lib/components/ui/form/ui/input-email.svelte",
    importPath: "InputEmail",
    examples: [
      {
        title: "Input Email",
        code: `import { InputEmail } from "negodesign"

<InputEmail
  label="Email"
  placeholder="john@example.com"
  bind:value={email}
/>`,
      },
    ],
    props: [
      { name: "value", type: "string", description: "Bound value" },
      { name: "label", type: "string", description: "Field label" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
  },
  {
    slug: "input-phone",
    name: "InputPhone",
    category: "Form Inputs",
    description: "Phone input with country selector (code + flag) and format validation.",
    path: "src/lib/components/ui/form/ui/input-phone.svelte",
    importPath: "InputPhone",
    examples: [
      {
        title: "Input Phone",
        code: `import { InputPhone } from "negodesign"

<InputPhone
  label="Phone"
  placeholder="+1 234 567 890"
  bind:value={phone}
/>`,
      },
    ],
    props: [
      { name: "value", type: "string", description: "Bound value" },
      { name: "label", type: "string", description: "Field label" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
  },
  {
    slug: "input-password",
    name: "InputPassword",
    category: "Form Inputs",
    description: "Password input with visibility toggle (eye icon). Supports two-way binding.",
    path: "src/lib/components/ui/form/ui/input-password.svelte",
    importPath: "InputPassword",
    examples: [
      {
        title: "Input Password",
        code: `import { InputPassword } from "negodesign"

<InputPassword
  label="Password"
  placeholder="Enter your password"
  bind:value={password}
/>`,
      },
    ],
    props: [
      { name: "value", type: "string", description: "Bound value" },
      { name: "label", type: "string", description: "Field label" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
  },
  {
    slug: "input-username",
    name: "InputUsername",
    category: "Form Inputs",
    description: "Username input field with icon and label.",
    path: "src/lib/components/ui/form/ui/input-username.svelte",
    importPath: "InputUsername",
    examples: [
      {
        title: "Input Username",
        code: `import { InputUsername } from "negodesign"

<InputUsername
  label="Username"
  placeholder="john_doe"
  bind:value={username}
/>`,
      },
    ],
    props: [
      { name: "value", type: "string", description: "Bound value" },
      { name: "label", type: "string", description: "Field label" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
  },
  {
    slug: "page-forget-password",
    name: "PageForgetPassword",
    category: "Login / Security",
    description: "Password recovery page with hero carousel and form card for requesting a recovery link by email.",
    path: "src/lib/components/pages/security/forget-password/PageForgetPassword.svelte",
    importPath: "PageForgetPassword",
    examples: [
      {
        title: "Forget Password Page",
        code: `import { PageForgetPassword } from "negodesign"

<PageForgetPassword
  title="Negodesign"
  onSubmit={(data) => console.log(data)}
/>`,
        href: "/login/forget-password/01",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Title shown in the hero/header" },
      { name: "variant", type: "ForgetPasswordVariant", description: "Form variant" },
      { name: "onSubmit", type: "(data) => Promise<void>", description: "Called on submit" },
    ],
  },
  {
    slug: "page-reset-password",
    name: "PageResetPassword",
    category: "Login / Security",
    description: "Password reset page with hero carousel and form card for entering and confirming a new password.",
    path: "src/lib/components/pages/security/reset-password/PageResetPassword.svelte",
    importPath: "PageResetPassword",
    examples: [
      {
        title: "Reset Password Page",
        code: `import { PageResetPassword } from "negodesign"

<PageResetPassword
  onSubmit={(data) => console.log(data)}
/>`,
        href: "/login/reset-password/01",
      },
    ],
    props: [
      { name: "onSubmit", type: "(data) => Promise<void>", description: "Called on submit" },
    ],
  },
  {
    slug: "page-otp-verification",
    name: "PageOtpVerification",
    category: "Login / Security",
    description: "OTP verification page with hero carousel and 6-digit code input for login or recovery validation.",
    path: "src/lib/components/pages/security/otp-verification/PageOtpVerification.svelte",
    importPath: "PageOtpVerification",
    examples: [
      {
        title: "OTP Verification Page",
        code: `import { PageOtpVerification } from "negodesign"

<PageOtpVerification
  onSubmit={(data) => console.log(data)}
/>`,
        href: "/login/otp/01",
      },
    ],
    props: [
      { name: "initialData", type: "OtpVerificationRequestDto", description: "Initial values" },
      { name: "onSubmit", type: "(data) => Promise<void>", description: "Called when OTP is validated" },
    ],
  },
  {
    slug: "section-01",
    name: "Section01",
    category: "Sections",
    description: "Section with a large title, description, navigation arrows, and a horizontal row of selectable cards with icons. Ideal for showcasing business sectors or service categories.",
    path: "src/lib/components/ui/section/Section01.svelte",
    importPath: "Section01",
    examples: [
      {
        title: "Tailored Logistics Cards",
        code: `import { Section01 } from "negodesign"
import {
  ShoppingBag01Icon,
  FactoryIcon,
  Stethoscope02Icon,
  ComputerNetworkIcon,
} from "@hugeicons/core-free-icons";

<Section01
  title="Tailored Logistics for Every Business"
  description="At /XION, we understand that every industry has unique logistics challenges."
  items={[
    { id: "1", icon: ShoppingBag01Icon, title: "Retail & E-commerce", description: "Streamline your fulfillment process." },
    { id: "2", icon: FactoryIcon, title: "Manufacturing", description: "Optimize your supply chain.", isActive: true },
    { id: "3", icon: Stethoscope02Icon, title: "Healthcare & Pharmacy", description: "Ensure the safe delivery of products." },
    { id: "4", icon: ComputerNetworkIcon, title: "Technology & Electronics", description: "Handle high-value, sensitive products." },
  ]}
  onSelect={(id) => console.log(id)}
  onPrev={() => console.log("prev")}
  onNext={() => console.log("next")}
/>`,
        href: "/section/01",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Section title", required: true },
      { name: "description", type: "string", description: "Description text on the right side" },
      { name: "items", type: "SectionCardItem[]", description: "Cards to display: { id?, icon, title, description?, isActive? }" },
      { name: "selectedKey", type: "string | number", description: "Currently selected card key" },
      { name: "titleClass", type: "string", description: "Title CSS class" },
      { name: "descriptionClass", type: "string", description: "Description CSS class" },
      { name: "className", type: "string", description: "Section container CSS class" },
      { name: "onSelect", type: "(id: string | number) => void", description: "Called when a card is clicked" },
      { name: "onPrev", type: "() => void", description: "Called when the left arrow is clicked" },
      { name: "onNext", type: "() => void", description: "Called when the right arrow is clicked" },
    ],
  },
  {
    slug: "section-02",
    name: "Section02",
    category: "Sections",
    description: "Split section with title and image on the left, description and a 2x2 feature grid on the right. Each feature can have a 'Learn More' link.",
    path: "src/lib/components/ui/section/Section02.svelte",
    importPath: "Section02",
    examples: [
      {
        title: "Innovation Features Section",
        code: `import { Section02 } from "negodesign"

<Section02
  title="Innovation that Moves Your Business"
  description="We leverage the latest technology to improve the way we manage your shipments."
  image="/images/container.jpg"
  imageAlt="Shipping container"
  features={[
    { title: "Real-Time Tracking", description: "Stay up-to-date with your shipments from pick-up to delivery.", link: "/tracking", linkLabel: "Learn More" },
    { title: "Data Analytics", description: "Gain insights into your supply chain.", link: "/analytics" },
    { title: "Automated Updates", description: "Receive timely notifications about your shipments.", link: "/updates" },
    { title: "Secure Portal", description: "Access your account anytime with our secure online portal.", link: "/portal" },
  ]}
/>`,
        href: "/section/02",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Section title", required: true },
      { name: "description", type: "string", description: "Description text above the features" },
      { name: "image", type: "string", description: "Image URL displayed on the left" },
      { name: "imageAlt", type: "string", description: "Image alt text" },
      { name: "features", type: "SectionFeatureItem[]", description: "Feature items: { title, description?, link?, linkLabel? }" },
      { name: "titleClass", type: "string", description: "Title CSS class" },
      { name: "descriptionClass", type: "string", description: "Description CSS class" },
      { name: "className", type: "string", description: "Section container CSS class" },
      { name: "imageClass", type: "string", description: "Image CSS class" },
    ],
  },
  {
    slug: "section-03",
    name: "Section03",
    category: "Sections",
    description: "Full-width section with a large title, description, and a 4-column feature grid with icons. Perfect for highlighting key value propositions or company strengths.",
    path: "src/lib/components/ui/section/Section03.svelte",
    importPath: "Section03",
    examples: [
      {
        title: "Solutions Section",
        code: `import { Section03 } from "negodesign"
import {
  Globe01Icon,
  CustomServiceIcon,
  ArtificialIntelligence02Icon,
  Award01Icon,
} from "@hugeicons/core-free-icons";

<Section03
  title="We specialize in providing reliable and efficient solutions"
  description="Whether you need to streamline your supply chain, improve delivery times, or expand your reach globally, we're here to help you achieve your goals with precision and speed."
  items={[
    { id: "1", icon: Globe01Icon, title: "Global Reach", description: "With a network, we ensure that your business can reach new markets effortlessly." },
    { id: "2", icon: CustomServiceIcon, title: "Custom Solutions", description: "We don't believe in a one-size-fits-all. We design logistics solutions tailored to your business needs." },
    { id: "3", icon: ArtificialIntelligence02Icon, title: "Technology-Driven", description: "Our cutting-edge technology enables real-time tracking, data analytics, and seamless coordination." },
    { id: "4", icon: Award01Icon, title: "Proven Expertise", description: "With over 10 years in the logistics industry, we have mastered the art of moving goods efficiently." },
  ]}
/>`,
        href: "/section/03",
      },
    ],
    props: [
      { name: "title", type: "string", description: "Required. Section title", required: true },
      { name: "description", type: "string", description: "Description text on the right" },
      { name: "items", type: "SectionCardItem[]", description: "Feature items: { id?, icon, title, description? }" },
      { name: "titleClass", type: "string", description: "Title CSS class" },
      { name: "descriptionClass", type: "string", description: "Description CSS class" },
      { name: "className", type: "string", description: "Section container CSS class" },
    ],
  },
];

export function getComponent(slug: string): DocComponent | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): DocComponent[] {
  return components.filter((c) => c.category === category);
}
