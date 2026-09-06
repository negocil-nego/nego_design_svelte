import { describe, expect, it } from 'vitest';
import { get } from 'svelte/store';
import { locale, locales, t } from '../../../src/lib/i18n';
import { setUserTranslations } from '../../../src/lib/i18n/config';

describe('i18n store', () => {
	it('translates a known key', () => {
		locale.set('en');
		expect(get(t)('label.or')).toBe('Or');
	});

	it('translates into the active locale', () => {
		locale.set('pt');
		expect(get(t)('label.or')).toBeTruthy();
		locale.set('en');
	});

	it('interpolates template variables', () => {
		locale.set('en');
		expect(get(t)('label.login.with', { name: 'GitHub' })).toBe('Continue with GitHub');
	});

	it('throws when the key is missing', () => {
		locale.set('en');
		expect(() => get(t)('no.such.key')).toThrow(`no translation found for en.no.such.key`);
	});

	it('throws when the locale is unknown', () => {
		locale.set('xx');
		expect(() => get(t)('label.or')).toThrow(`no translation found for locale "xx"`);
		locale.set('en');
	});

	it('reflects user translations in the $t function', () => {
		locale.set('en');
		setUserTranslations({ en: { 'label.extra': 'Extra!' } });
		expect(get(t)('label.extra')).toBe('Extra!');
		setUserTranslations({});
	});

	it('lists the available locales reactively', () => {
		expect(get(locales).sort()).toEqual(['en', 'pt']);
	});
});