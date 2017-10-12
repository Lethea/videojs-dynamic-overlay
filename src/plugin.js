import videojs from 'video.js';
import {version as VERSION} from '../package.json';

// Default options for the plugin.
const defaults = {
  contentOfOverlay:'burda',
  changeDuration:3000
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
 const dom = videojs.dom || videojs;

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
const randomArea=(element,changeDuration)=>{
  var heightOfVideo = window.document.getElementById("videojs-newoverlay-player_html5_api").clientHeight;
  var widthOfVideo = window.document.getElementById("videojs-newoverlay-player_html5_api").clientWidth;
  var number = Math.floor(Math.random() * widthOfVideo);
  element.style.left=number+"px";
  var number2 = Math.floor(Math.random() * heightOfVideo);
  element.style.top=number2+"px";
  setTimeout(function(){randomArea(element,changeDuration)},changeDuration);
};
const onPlayerReady = (player, options) => {
  player.addClass('vjs-newoverlay');
    const el = dom.createEl('div', {
      className: `vjs-emre`
    });
    el.innerHTML=options.contentOfOverlay;
    player.el().appendChild(el);
  randomArea(el,options.changeDuration);
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
const newoverlay = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('newoverlay', newoverlay);

// Include the version number.
newoverlay.VERSION = VERSION;

export default newoverlay;
