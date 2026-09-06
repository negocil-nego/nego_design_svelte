import { describe, expect, it } from 'vitest';
import {
	isCard,
	isGrid,
	isItems,
	isItem,
	isList,
} from '../../../src/lib/components/core/nav/data/complex-menu-utils';
import type {
	NavigationMenuItemCardProps,
	NavigationMenuItemGridProps,
	NavigationMenuItemListProps,
	NavigationMenuItemProps,
	NavigationMenuItemsProps,
} from '../../../src/lib/components/core/nav/data/types';

const card: NavigationMenuItemCardProps = {
	header: { label: 'Title', description: 'Description' },
	cards: [],
};
const grid: NavigationMenuItemGridProps = { label: 'Grid', grids: [] };
const list: NavigationMenuItemListProps = { label: 'List', list: [] };
const items: NavigationMenuItemsProps = { label: 'Items', items: [] };
const item: NavigationMenuItemProps = { label: 'Item', href: '#item' };

describe('complex-menu-utils type guards', () => {
	it('detects a card menu item', () => {
		expect(isCard(card)).toBe(true);
		expect(isCard(grid)).toBe(false);
		expect(isCard(item)).toBe(false);
	});

	it('detects a grid menu item', () => {
		expect(isGrid(grid)).toBe(true);
		expect(isGrid(card)).toBe(false);
		expect(isGrid(list)).toBe(false);
	});

	it('detects a list menu item', () => {
		expect(isList(list)).toBe(true);
		expect(isList(grid)).toBe(false);
		expect(isList(item)).toBe(false);
	});

	it('detects an items menu item', () => {
		expect(isItems(items)).toBe(true);
		expect(isItems(item)).toBe(false);
		expect(isItems(list)).toBe(false);
	});

	it('detects a plain link menu item', () => {
		expect(isItem(item)).toBe(true);
		expect(isItem(card)).toBe(false);
		expect(isItem(grid)).toBe(false);
	});
});