import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, 'src/app/styles'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@layout': path.resolve(__dirname, 'src/widgets/Layout'),
			'@shared': path.resolve(__dirname, 'src/shared/assets'),
		},
	},
})
