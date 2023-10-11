module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
			js: "./src/js",
			media: "./src/media",
			fonts: "./src/fonts"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			media: "./dist/media",
			fonts: "./dist/fonts"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			media: "./build/media",
			fonts: "./build/fonts"
		}
	}
}
