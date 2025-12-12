import { defineConfig } from 'vite'
const path = require('path')
export default defineConfig({
	mode: 'production', //production  development
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		lib: {
			entry: './src/index.js',
			name: '_k', // 暴露的全局变量
			formats: ['umd'],
			fileName: () => 'k-utils.js'
		},
	}
})