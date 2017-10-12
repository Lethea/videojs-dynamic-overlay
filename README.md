# videojs-newoverlay

Video Üzerine Text Vb Dinamik Yer Değiştirme

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-dynamic-overlay
```

## Usage

To include videojs-newoverlay on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-newoverlay.min.js"></script>
<script>
  var player = videojs('my-video');

  player.newoverlay();
  ################ OR ###############
  player.newoverlay({
          contentOfOverlay:"Sample Content",
          changeDuration:1000
        });
</script>
<style>
.vjs-emre{
    z-index:9999;
    color:black;
    background-color:brown;
    font-size:20px;
    position:absolute;
    right:20px;
  }
</style>
```

### Browserify/CommonJS

When using with Browserify, install videojs-newoverlay via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-newoverlay');

var player = videojs('my-video');

player.newoverlay();

################ OR ###############
player.newoverlay({
        contentOfOverlay:"Sample Content",
        changeDuration:1000
      });

```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-newoverlay'], function(videojs) {
  var player = videojs('my-video');

  player.newoverlay();
});
```

## License

Apache-2.0. Copyright (c) Emre Karatasoglu &lt;emre.karatasoglu@hotmail.com&gt;


[videojs]: http://videojs.com/
