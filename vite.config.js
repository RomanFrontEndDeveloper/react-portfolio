import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	base:
		mode === 'production'
			? import.meta.env.VITE_DEPLOY_ENV === 'GH_PAGES'
				? '/react-portfolio/' // 👈 для GitHub Pages
				: './' // 👈 для Netlify
			: '/',
}));
