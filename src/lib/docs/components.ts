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
  "Banners",
  "Cards",
  "Carousels",
  "Item Grid",
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
];

export function getComponent(slug: string): DocComponent | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): DocComponent[] {
  return components.filter((c) => c.category === category);
}
