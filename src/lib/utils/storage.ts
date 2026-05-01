import { browser } from '$app/environment';

export const storage = {
	get(key: string) {
		if (!browser) return null;
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	},

	set(key: string, value: any) {
		if (!browser) return;
		localStorage.setItem(key, JSON.stringify(value));
	},

	remove(key: string) {
		if (!browser) return;
		localStorage.removeItem(key);
	}
};
