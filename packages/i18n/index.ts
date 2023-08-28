import i18nconfig from './config.json';

type Locale = (typeof i18nconfig)[0];

function availableLocales(): Locale[] {
	let locales: Locale[] = [];
	i18nconfig.forEach((item) => {
		item.enabled ? locales.push(item) : null;
	});
	return locales;
}

function getLabel() {
	let labels: string[] = [];
	i18nconfig.forEach((item) => {
		item.enabled ? labels.push(item.localName) : null;
	});
	return labels;
}

function getCode() {
	let codes: string[] = [];
	i18nconfig.forEach((item) => {
		item.enabled ? codes.push(item.code) : null;
	});
	return codes;
}

export { availableLocales, getLabel, getCode };
