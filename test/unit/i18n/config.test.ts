import { describe, expect, it } from 'vitest';
import { getMergedTranslations, getLocales, setUserTranslations } from '../../../src/lib/i18n/config';

describe('i18n config', () => {
	it('exposes the base locales (en and pt)', () => {
		expect(getLocales().sort()).toEqual(['en', 'pt']);
	});

	it('merges user translations on top of base ones', () => {
		setUserTranslations({
			fr: { 'label.hello': 'Bonjour' },
			en: { 'label.custom': 'Custom english' },
		});

		const merged = getMergedTranslations();
		expect(merged.en['label.custom']).toBe('Custom english');
		expect(merged.en['label.or']).toBeTruthy();
		expect(merged.fr['label.hello']).toBe('Bonjour');

		setUserTranslations({});
	});

	it('adds user locales to the available list', () => {
		setUserTranslations({ de: { 'label.hello': 'Hallo' } });
		expect(getLocales().sort()).toEqual(['de', 'en', 'pt']);
		setUserTranslations({});
	});

	it('keeps base translations when user translations are cleared', () => {
		setUserTranslations({});
		expect(getMergedTranslations().en['label.or']).toBeTruthy();
		expect(getLocales().sort()).toEqual(['en', 'pt']);
	});
});