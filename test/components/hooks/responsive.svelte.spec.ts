import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import DeviceHook from '../fixtures/DeviceHook.svelte';
import { IsMobile } from '../../../src/lib/hooks/is-mobile.svelte';
import { useDevice } from '../../../src/lib/hooks/responsive.svelte';

describe('responsive and mobile hooks', () => {
	it('exports a useDevice function', () => {
		expect(typeof useDevice).toBe('function');
	});

	it('exports IsMobile and resolves current to a boolean in the browser', () => {
		expect(typeof IsMobile).toBe('function');
		expect(typeof new IsMobile().current).toBe('boolean');
	});

	it('mounts a component that consumes useDevice without crashing', () => {
		render(DeviceHook, {});

		const el = document.querySelector('[data-testid="device-mobile"]');
		expect(el).toBeTruthy();
		expect(el?.textContent).toMatch(/^(true|false)$/);
	});
});