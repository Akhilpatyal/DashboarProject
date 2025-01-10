import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	 base: '/DashboarProject/',
	server: {
		proxy: {
		  '/api': {
			target: 'https://lpmanager.aajneetiadvertising.com',
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, ''),
		  },
		},
	  },
});
