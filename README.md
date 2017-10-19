# videojs-newoverlay
Dynamic Overlay on Video For Education System
Video Üzerine Text Vb Dinamik Yer Değiştirme

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-dynamic-overlay
```

## Usage
Sample Image : https://prnt.sc/gwejew
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

### No Need To Build

Working example with built scripts .

Quaility Selector
Dynamic Overlay that configurable

http://cdn.emrekaratasoglu.com/overlay_demo/

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>videojs-newoverlay Demo</title>
  <link href="video-js.css" rel="stylesheet">

</head>
<body>
  <video id="videojs-newoverlay-player" class="video-js vjs-default-skin" controls height="480" width="848" poster="http://vjs.zencdn.net/v/oceans.png">
    <source src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8" type="application/x-mpegurl">
  </video>
  <script src="es5-shim.js"></script>
  <script src="video.js"></script>
  <script src="videojs-newoverlay.js"></script>
  <script src="videojs-contrib-hls.js"></script>
  <script src="videojs5-hlsjs-source-handler.js"></script>
  <script>
    (function(window, videojs) {
      var player = window.player = videojs('videojs-newoverlay-player');
      player.newoverlay({
        contentOfOverlay:"Emre Karataşoğlu ID NUMBER",
        changeDuration:10000
      });
	  player.qualityPickerPlugin();
    }(window, window.videojs));
  </script>
</body>
</html>
<style>
  .vjs-emre{
    z-index:9999;
    color:black;
    background-color:brown;
    font-size:20px;
    position:absolute;
    width: 170px; word-break: break-all; word-wrap: break-word;
	right:20px;


  }

</style>
```


## License

Apache-2.0. Copyright (c) Emre Karatasoglu &lt;emre.karatasoglu@hotmail.com&gt;


[videojs]: http://videojs.com/
