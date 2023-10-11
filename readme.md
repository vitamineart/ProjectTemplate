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

# Features

## Image Lazy loading with thumbnail blurred preview

`mixins.pug` contains mixin `+imgBlur` for an image loading with thumbnail preview.

The technique was described here https://www.youtube.com/watch?v=hJ7Rg1821Q0.

To use the mixin you need to pass an object with variables as props for the mixin. It should contain either `thumb:` or `prefix:` key.

`thumb:` key is a string that should be a full path to an image like `'../media/image-blurred.jpg'`

`thumb:` key should be used for `+image` mixin with simple config, aka simple `<img>` tag.
`src` key is also a string that should be a full path to an image like `'../media/image.jpg'`
`src` key can be ommited, but another option to give a path to an image should be used: via attributes. Example:

```

```

If an image has more than one resolution (responsive image) it has to have `resolutions` key as an array and `prefix` as a string. If `prefix` is ommited , default `blurred` prefix will be used.

Using `+imgBlur` for <b>Responsive Image</b> mixin with `prefix` key specified:

```sh
+imgBlur({
    prefix: 'thumbnail',
    name: 'Hero',
    ext: 'jpg',
    dir: mediaFolder,
    resolutions: [640, 768, 1024, 1280, 1366,1600, 1920],
    width: 1920,
    height: 1280
})(alt="Hero BG" class="" ...)
```

Compiled html:

```sh
<div class="blur-load loaded" style="background-image: url(media/Hero-thumbnail.jpg)">
    <img width="1920" height="1280" alt="Hero BG" src="media/Hero@1920.jpg" loading="lazy" srcset=" media/Hero@640.jpg 640w,media/Hero@768.jpg 768w,media/Hero@1024.jpg 1024w,media/Hero@1280.jpg 1280w,media/Hero@1366.jpg 1366w,media/Hero@1600.jpg 1600w,media/Hero@1920.jpg 1920w ">
</div>
```

Using `+imgBlur` mixin with ommited `prefix` key:

```sh
+imgBlur({
    name: 'Hero',
    ext: 'jpg',
    dir: mediaFolder,
    resolutions: [640, 768, 1024, 1280, 1366,1600, 1920],
    width: 1920,
    height: 1280
})(alt="Hero BG" class="" ...)
```

Compiled html:

```sh
<div class="blur-load loaded" style="background-image: url(media/Hero-blurred.jpg)">
    <img width="1920" height="1280" alt="Hero BG" src="media/Hero@1920.jpg" loading="lazy" srcset=" media/Hero@640.jpg 640w,media/Hero@768.jpg 768w,media/Hero@1024.jpg 1024w,media/Hero@1280.jpg 1280w,media/Hero@1366.jpg 1366w,media/Hero@1600.jpg 1600w,media/Hero@1920.jpg 1920w ">
</div>
```

In that case you can just create a tumbnail image with '-blurred' prefix in its pathname via Figma or other app.

Another option (using Gulp Task) for creating thumbnails is described below.

### Creating Blurred Thumbnails Easy (using Gulp Task):

`gulpfile.js` contains a standalone task `imgResize` for creating thumbnails for the technique described above, where you can configure source file, size (10px usually good enough for blurred image with very low weight) and result file name.
Example from gulpfilejs:

```sh
function imgResize() {
  return src(`${options.paths.src.media}/Hero@1920.jpg`)
    .pipe(
      imageResize({
        width: 10
      })
    )
    .pipe(
      rename(function (path) {
        // Updates the object in-place
        path.basename = "hhero-blurred"
      })
    )
    .pipe(dest(`${options.paths.src.media}`))
}

...

...
exports.imgResize = imgResize;
...
```

### Turn Off Blurred Thumbnail Preview Image Loading:

To turn off the feature, remove the code from `main.js`:

```sh
// BLurred Preview image Lazy Loading
if (document.querySelectorAll(".blur-load").length) {
  const blurDivs = document.querySelectorAll(".blur-load");
  blurDivs.forEach(div => {
    const img = document.querySelector("img");
    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
}
```

as well as remove style for it from `style.css`:

```sh
/* lazy load img with blur effect start */
  .blur-load {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .blur-load:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: hsl(0 100% 100% / 0.2);
    opacity: 1;
    animation: pulse 2.5s infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .blur-load.loaded {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .blur-load.loaded::before {
    content: none;
  }
  .blur-load > img {
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  .blur-load.loaded > img {
    opacity: 1;
  }
  /* lazy load img with blur effect end */
```
