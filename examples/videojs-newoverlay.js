/**
 * videojs-dynamic-overlay
 * @version 1.0.2
 * @copyright 2017 Emre Karatasoglu <emre.karatasoglu@hotmail.com>
 * @license Apache-2.0
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
	typeof define === 'function' && define.amd ? define(['video.js'], factory) :
	(global.videojsNewoverlay = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

videojs = 'default' in videojs ? videojs['default'] : videojs;

var version = "1.0.2";

// Default options for the plugin.
var defaults = {
  contentOfOverlay: 'burda',
  changeDuration: 3000
};

// Cross-compatibility for Video.js 5 and 6.
var registerPlugin = videojs.registerPlugin || videojs.plugin;
var dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
var randomArea = function randomArea(element, changeDuration) {
  var heightOfVideo = window.document.getElementById("videojs-newoverlay-player_html5_api").clientHeight;
  var widthOfVideo = window.document.getElementById("videojs-newoverlay-player_html5_api").clientWidth;
  var number = Math.floor(Math.random() * widthOfVideo);
  if (number > 200) {
    number = number - 200;
  }
  element.style.left = number + "px";
  var number2 = Math.floor(Math.random() * heightOfVideo);
  if (number2 > 60) {
    number2 = number2 - 60;
  }
  element.style.top = number2 + "px";
  setTimeout(function () {
    randomArea(element, changeDuration);
  }, changeDuration);
};
var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-newoverlay');
  var el = dom.createEl('div', {
    className: 'vjs-emre'
  });
  el.innerHTML = options.contentOfOverlay;
  player.el().appendChild(el);
  randomArea(el, options.changeDuration);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function newoverlay
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var newoverlay = function newoverlay(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('newoverlay', newoverlay);

// Include the version number.
newoverlay.VERSION = version;

return newoverlay;

})));
