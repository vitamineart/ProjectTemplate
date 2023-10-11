# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS Starter Kit - A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple npm commands

## Usage

1. Install Dev Depedencies

```sh
npm install // or yarn install
```

2. To start development and server for live preview

```sh
npm run dev // or yarn dev
```

3. To generate minifed files for production server

```sh
npm run prod // or yarn prod
```

# Configuration

To change the path of files and destination/build folder, edit options in **config.js** file

```sh
{
  config: {
      ...
      port: 9050 // browser preview port
  },
  paths: {
     root: "./",
     src: {
        base: "./src",
        css: "./src/css",
        js: "./src/js",
        img: "./src/img"
     },
     dist: {
         base: "./dist",
         css: "./dist/css",
         js: "./dist/js",
         img: "./dist/img"
     },
     build: {
         base: "./build",
         css: "./build/css",
         js: "./build/js",
         img: "./build/img"
     }
  }
  ...
}
```

## Features

# Image Lazy loading with thumbnail preview

mixins.pug contains mixin imgBlur for an image loading with thumbnail preview. To use the mixin you need to pass an object with variables as props for the mixin. It should contain either `thumb:` or `prefix:` key. `Thumb` key should be used along with `src` key for image (+image mixin with simple config, aka simple `<img>` tag)
If an image has more than one resolution (responsive image) it has to have both `resolutions` as array and `prefix` as a string. If `prefix` is ommited , default `blurred` prefix will be used
