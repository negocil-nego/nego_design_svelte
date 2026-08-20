import type {
  NavigationMenuItemProps,
  NavigationMenuItemListProps,
  NavigationMenuItemCardProps,
  NavigationMenuItemGridProps,
  NavigationMenuItemsProps,
} from "./types";

export type ComplexMenuItemSlots =
  | NavigationMenuItemCardProps
  | NavigationMenuItemGridProps
  | NavigationMenuItemListProps
  | NavigationMenuItemsProps
  | NavigationMenuItemProps;

export function isCard(
  item: ComplexMenuItemSlots,
): item is NavigationMenuItemCardProps {
  return "header" in item && "cards" in item;
}

export function isGrid(
  item: ComplexMenuItemSlots,
): item is NavigationMenuItemGridProps {
  return "grids" in item && "label" in item;
}

export function isList(
  item: ComplexMenuItemSlots,
): item is NavigationMenuItemListProps {
  return "list" in item && "label" in item;
}

export function isItems(
  item: ComplexMenuItemSlots,
): item is NavigationMenuItemsProps {
  return "items" in item && "label" in item;
}

export function isItem(
  item: ComplexMenuItemSlots,
): item is NavigationMenuItemProps {
  return "href" in item && "label" in item;
}
