'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@material-ui/core');
var PlayArrowIcon = require('@material-ui/icons/PlayArrow');
var VolumeUpIcon = require('@material-ui/icons/VolumeUp');
var SettingsIcon = require('@material-ui/icons/Settings');
var FullscreenIcon = require('@material-ui/icons/Fullscreen');
var PauseIcon = require('@material-ui/icons/Pause');
var PictureInPictureAltIcon = require('@material-ui/icons/PictureInPictureAlt');
var VolumeOffIcon = require('@material-ui/icons/VolumeOff');
var VolumeDownIcon = require('@material-ui/icons/VolumeDown');
var VolumeMuteIcon = require('@material-ui/icons/VolumeMute');
var CloseIcon = require('@material-ui/icons/Close');
var ExpandLess = require('@material-ui/icons/ExpandLess');
var ExpandMore = require('@material-ui/icons/ExpandMore');
var AspectRatioIcon = require('@material-ui/icons/AspectRatio');
var SlowMotionVideoIcon = require('@material-ui/icons/SlowMotionVideo');
var FullscreenExitIcon = require('@material-ui/icons/FullscreenExit');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PlayArrowIcon__default = /*#__PURE__*/_interopDefaultLegacy(PlayArrowIcon);
var VolumeUpIcon__default = /*#__PURE__*/_interopDefaultLegacy(VolumeUpIcon);
var SettingsIcon__default = /*#__PURE__*/_interopDefaultLegacy(SettingsIcon);
var FullscreenIcon__default = /*#__PURE__*/_interopDefaultLegacy(FullscreenIcon);
var PauseIcon__default = /*#__PURE__*/_interopDefaultLegacy(PauseIcon);
var PictureInPictureAltIcon__default = /*#__PURE__*/_interopDefaultLegacy(PictureInPictureAltIcon);
var VolumeOffIcon__default = /*#__PURE__*/_interopDefaultLegacy(VolumeOffIcon);
var VolumeDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(VolumeDownIcon);
var VolumeMuteIcon__default = /*#__PURE__*/_interopDefaultLegacy(VolumeMuteIcon);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var ExpandLess__default = /*#__PURE__*/_interopDefaultLegacy(ExpandLess);
var ExpandMore__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMore);
var AspectRatioIcon__default = /*#__PURE__*/_interopDefaultLegacy(AspectRatioIcon);
var SlowMotionVideoIcon__default = /*#__PURE__*/_interopDefaultLegacy(SlowMotionVideoIcon);
var FullscreenExitIcon__default = /*#__PURE__*/_interopDefaultLegacy(FullscreenExitIcon);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ControlsTouch = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: calc(100% - 54px);\n  z-index: 3;\n  &.touch {\n    opacity: 0;\n    justify-content: center;\n    align-items: center;\n    button {\n      margin-top: 5vw;\n      svg {\n        min-width: 64px;\n        min-height: 64px;\n        width: 20vw;\n        height: 20vw;\n        color: #fff;\n      }\n    }\n    &.show {\n      display: flex;\n      opacity: 1;\n    }\n  }\n"], ["\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: calc(100% - 54px);\n  z-index: 3;\n  &.touch {\n    opacity: 0;\n    justify-content: center;\n    align-items: center;\n    button {\n      margin-top: 5vw;\n      svg {\n        min-width: 64px;\n        min-height: 64px;\n        width: 20vw;\n        height: 20vw;\n        color: #fff;\n      }\n    }\n    &.show {\n      display: flex;\n      opacity: 1;\n    }\n  }\n"])));
var templateObject_1$b;

var Controls = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 64px;\n  width: 100%;\n  bottom: 0;\n  z-index: 3;\n  color: #fff;\n  .MuiIconButton-root {\n    color: #fff;\n  }\n  button {\n    transition: all 0.2s ease-in-out;\n    &:hover {\n      transform: scale(1.25);\n    }\n    &::active,\n    &:focus {\n      transform: scale(1.1);\n    }\n  }\n  &.touch {\n    opacity: 0;\n    &.show {\n      opacity: 1;\n    }\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 64px;\n  width: 100%;\n  bottom: 0;\n  z-index: 3;\n  color: #fff;\n  .MuiIconButton-root {\n    color: #fff;\n  }\n  button {\n    transition: all 0.2s ease-in-out;\n    &:hover {\n      transform: scale(1.25);\n    }\n    &::active,\n    &:focus {\n      transform: scale(1.1);\n    }\n  }\n  &.touch {\n    opacity: 0;\n    &.show {\n      opacity: 1;\n    }\n  }\n"])));
var templateObject_1$a;

var LeftControls = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  &.touch {\n    .playOrPause {\n      display: none;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  &.touch {\n    .playOrPause {\n      display: none;\n    }\n  }\n"])));
var templateObject_1$9;

var VolumeWrap = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .slider-wrap {\n    overflow: hidden;\n    width: 0;\n    display: flex;\n    align-items: center;\n    min-height: 64px;\n  }\n  &:hover {\n    .slider-wrap {\n      padding: 0 20px;\n      width: 140px;\n    }\n  }\n  &.touch {\n    display: none;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .slider-wrap {\n    overflow: hidden;\n    width: 0;\n    display: flex;\n    align-items: center;\n    min-height: 64px;\n  }\n  &:hover {\n    .slider-wrap {\n      padding: 0 20px;\n      width: 140px;\n    }\n  }\n  &.touch {\n    display: none;\n  }\n"])));
var templateObject_1$8;

var ControlsWrap = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  top: -4px;\n  z-index: 2;\n  height: 100%;\n  &.touch {\n    height: calc(100% - 10px);\n    button {\n      svg {\n        width: 64px;\n        height: 64px;\n        color: #fff;\n      }\n    }\n  }\n"], ["\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  top: -4px;\n  z-index: 2;\n  height: 100%;\n  &.touch {\n    height: calc(100% - 10px);\n    button {\n      svg {\n        width: 64px;\n        height: 64px;\n        color: #fff;\n      }\n    }\n  }\n"])));
var templateObject_1$7;

var VideoWrap = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  .controls-progress {\n    opacity: 0;\n  }\n  .controls-wrap {\n    opacity: 0;\n    background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 66%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  .controls {\n    transform: translateY(64px);\n  }\n  &.config-menu-show {\n    .config-menu {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &:hover,\n  &.paused {\n    .controls-progress {\n      opacity: 1;\n    }\n    .controls-wrap {\n      opacity: 1;\n    }\n    .controls {\n      transform: translateY(0);\n      z-index: 10;\n    }\n  }\n  video {\n    width: 100%;\n  }\n  &.touch {\n    padding-bottom: 10px;\n    &:hover {\n      .controls-wrap {\n        opacity: 0;\n      }\n    }\n    .controls-wrap {\n      opacity: 0;\n    }\n    &.show {\n      .controls-wrap {\n        opacity: 1;\n        background: rgba(0, 0, 0, 0.3);\n      }\n    }\n    .controls {\n      transform: translateY(-8px);\n    }\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  .controls-progress {\n    opacity: 0;\n  }\n  .controls-wrap {\n    opacity: 0;\n    background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 66%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  .controls {\n    transform: translateY(64px);\n  }\n  &.config-menu-show {\n    .config-menu {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &:hover,\n  &.paused {\n    .controls-progress {\n      opacity: 1;\n    }\n    .controls-wrap {\n      opacity: 1;\n    }\n    .controls {\n      transform: translateY(0);\n      z-index: 10;\n    }\n  }\n  video {\n    width: 100%;\n  }\n  &.touch {\n    padding-bottom: 10px;\n    &:hover {\n      .controls-wrap {\n        opacity: 0;\n      }\n    }\n    .controls-wrap {\n      opacity: 0;\n    }\n    &.show {\n      .controls-wrap {\n        opacity: 1;\n        background: rgba(0, 0, 0, 0.3);\n      }\n    }\n    .controls {\n      transform: translateY(-8px);\n    }\n  }\n"])));
var templateObject_1$6;

var ControlProgress = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: absolute;\n  min-height: 96px;\n  width: calc(100% - 40px);\n  padding: 10px 20px;\n  bottom: 0;\n  z-index: 10;\n  > span {\n    position: absolute;\n    z-index: 5;\n    width: calc(100% - 40px);\n  }\n  > div {\n    position: absolute;\n    width: calc(100% - 40px);\n    top: 22px;\n    z-index: 4;\n  }\n  &.touch {\n    min-height: initial;\n    width: 100%;\n    padding: 0;\n    bottom: 35px;\n    > span {\n      width: 100%;\n      .MuiSlider-track {\n        z-index: 2;\n      }\n    }\n    > div {\n      width: 100%;\n      top: 19px;\n      height: 4px;\n    }\n  }\n"], ["\n  position: absolute;\n  min-height: 96px;\n  width: calc(100% - 40px);\n  padding: 10px 20px;\n  bottom: 0;\n  z-index: 10;\n  > span {\n    position: absolute;\n    z-index: 5;\n    width: calc(100% - 40px);\n  }\n  > div {\n    position: absolute;\n    width: calc(100% - 40px);\n    top: 22px;\n    z-index: 4;\n  }\n  &.touch {\n    min-height: initial;\n    width: 100%;\n    padding: 0;\n    bottom: 35px;\n    > span {\n      width: 100%;\n      .MuiSlider-track {\n        z-index: 2;\n      }\n    }\n    > div {\n      width: 100%;\n      top: 19px;\n      height: 4px;\n    }\n  }\n"])));
var templateObject_1$5;

var Timer = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n"])));
var templateObject_1$4;

var CenterControls = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var templateObject_1$3;

var RightControls = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var templateObject_1$2;

var ConfigWrap = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var templateObject_1$1;

var ConfigMenu = styled__default['default'].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 32px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  min-width: 220px;\n  transform: translateY(200px);\n  .MuiListItem-button {\n    text-align: right;\n  }\n  svg {\n    color: #fff;\n  }\n  .MuiTypography-colorTextSecondary {\n    color: #fff;\n    font-size: 12px;\n  }\n"], ["\n  position: absolute;\n  bottom: 32px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  min-width: 220px;\n  transform: translateY(200px);\n  .MuiListItem-button {\n    text-align: right;\n  }\n  svg {\n    color: #fff;\n  }\n  .MuiTypography-colorTextSecondary {\n    color: #fff;\n    font-size: 12px;\n  }\n"])));
var templateObject_1;

function humanSeconds(seconds) {
    var date = new Date(seconds * 1000).toISOString();
    if (seconds < 600) {
        return date.substr(15, 4);
    }
    else if (seconds < 3600) {
        return date.substr(14, 5);
    }
    else {
        return date.substr(11, 8);
    }
}
function isTouchDevice() {
    return ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0);
}
var HPlayer = React__default['default'].forwardRef(function (_a, ref) {
    var url = _a.url, _b = _a.autoPlay, autoPlay = _b === void 0 ? false : _b, poster = _a.poster, onReady = _a.onReady, onSuspend = _a.onSuspend, onStalled = _a.onStalled, onSeeking = _a.onSeeking, onSeeked = _a.onSeeked, onEnded = _a.onEnded, onError = _a.onError, onCanPlayThrough = _a.onCanPlayThrough, onCanPlay = _a.onCanPlay, onAbort = _a.onAbort, onLoadedData = _a.onLoadedData, onLoadedMetaData = _a.onLoadedMetaData, onPlaying = _a.onPlaying, onLoadStart = _a.onLoadStart, onWaiting = _a.onWaiting, onTimeUpdate = _a.onTimeUpdate, onPlay = _a.onPlay, onPause = _a.onPause, onVolumeChange = _a.onVolumeChange, onDurationChange = _a.onDurationChange, onProgress = _a.onProgress, onRateChange = _a.onRateChange, _c = _a.locale, locale = _c === void 0 ? {
        quality: 'Quality',
        playbackSpeed: 'Playback speed',
    } : _c;
    var getSources = function (value) {
        var s = [];
        if (typeof value === 'string') {
            s.push({
                url: value,
                resolution: '',
            });
        }
        else if (url instanceof Array) {
            s.push.apply(s, value);
        }
        else {
            s.push(value);
        }
        return s;
    };
    var videoRef = React.useRef(ref);
    var _d = React.useState(getSources(url)), sources = _d[0], setSources = _d[1];
    var _e = React.useState(true), enablePictureInPicture = _e[0], setEnablePictureInPicture = _e[1];
    var _f = React.useState(true), autoHideControls = _f[0], setAutoHideControls = _f[1];
    var _g = React.useState(false), showControls = _g[0], setShowControls = _g[1];
    var _h = React.useState(false), touchDevice = _h[0], setTouchDevice = _h[1];
    var _j = React.useState([]), resolutions = _j[0], setResolutions = _j[1];
    var _k = React.useState(''), resolutionSelected = _k[0], setResolutionSelected = _k[1];
    var _l = React.useState(1), rateSelected = _l[0], setRateSelected = _l[1];
    var rates = React.useState([
        0.25,
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        1.75,
        2,
    ])[0];
    var _m = React.useState(null), videoEl = _m[0], setVideoEl = _m[1];
    var _o = React.useState(false), fullscreen = _o[0], setFullscreen = _o[1];
    var _p = React.useState(true), pause = _p[0], setPause = _p[1];
    var _q = React.useState(0), currentTime = _q[0], setCurrentTime = _q[1];
    var _r = React.useState(0), durationTime = _r[0], setDurationTime = _r[1];
    var _s = React.useState(50), volume = _s[0], setVolume = _s[1];
    var _t = React.useState(0), progressBuffer = _t[0], setProgressBuffer = _t[1];
    var _u = React.useState(0), progress = _u[0], setProgress = _u[1];
    var _v = React.useState(false), videoReady = _v[0], setVideoReady = _v[1];
    var _w = React.useState(false), openResolution = _w[0], setOpenResolution = _w[1];
    var _x = React.useState(false), openRate = _x[0], setOpenRate = _x[1];
    var refWrap = React.useRef(null);
    var timerControlsRef = React.useRef(null);
    var configMenu = React.useRef(false);
    var configMenuTouch = React.useRef(false);
    var removeDuplicates = function (arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    };
    React.useEffect(function () {
        if (videoRef && videoRef.current) {
            setVideoEl(videoRef.current);
        }
    }, [videoRef]);
    React.useEffect(function () {
        if (showControls && autoHideControls && videoEl) {
            if (timerControlsRef.current) {
                clearTimeout(timerControlsRef.current);
            }
            timerControlsRef.current = setTimeout(function () {
                if (timerControlsRef.current) {
                    clearTimeout(timerControlsRef.current);
                }
                if (videoEl) {
                    if (!videoEl.paused &&
                        !configMenu.current &&
                        !configMenuTouch.current) {
                        setShowControls(false);
                    }
                }
            }, 2500);
        }
    }, [
        showControls,
        autoHideControls,
        videoRef,
        configMenu.current,
        configMenuTouch.current,
    ]);
    React.useEffect(function () {
        setTouchDevice(isTouchDevice());
        var rate = rateSelected;
        var configs = getConfigs();
        if (configs && configs.userRate && rate !== configs.userRate) {
            rate = configs.userRate;
            setRateSelected(configs.userRate);
        }
        if (configs && configs.volume && volume !== configs.volume) {
            setVolume(configs.volume);
        }
        if (document.pictureInPictureEnabled) {
            setEnablePictureInPicture(true);
        }
    }, []);
    React.useEffect(function () {
        if (touchDevice && videoRef) {
            var progressEl = document.querySelector('.controls-progress');
            if (progressEl) {
                progressEl.style.opacity = "1";
            }
            setShowControls(true);
        }
    }, [touchDevice, videoRef]);
    React.useEffect(function () {
        if (!configMenu.current) {
            setOpenResolution(false);
            setOpenRate(false);
        }
    }, [configMenu.current]);
    React.useEffect(function () {
        if (openResolution) {
            setOpenRate(false);
        }
    }, [openResolution]);
    React.useEffect(function () {
        if (openRate) {
            setOpenResolution(false);
        }
    }, [openRate]);
    React.useEffect(function () {
        setSources(getSources(url));
    }, [url]);
    React.useEffect(function () {
        var resSelected = resolutionSelected;
        if (!resSelected) {
            var configs_1 = getConfigs();
            if (configs_1 && configs_1.userResolutionSelected) {
                if (sources.find(function (s) { return s.resolution === configs_1.userResolutionSelected; })) {
                    setResolutionSelected(configs_1.userResolutionSelected);
                    resSelected = configs_1.userResolutionSelected;
                }
            }
        }
        if (resolutions.length > 0 && !resSelected) {
            setResolutionSelected(resolutions[0]);
        }
    }, [resolutions]);
    React.useEffect(function () {
        if (refWrap.current) {
            refWrap.current.addEventListener('fullscreenchange', function (e) {
                if (document.fullscreenElement) {
                    setFullscreen(true);
                }
                else {
                    setFullscreen(false);
                }
            });
        }
    }, [refWrap]);
    React.useEffect(function () {
        setResolutions(removeDuplicates(sources.map(function (s) { return (s.resolution ? s.resolution : ''); })));
        if (videoEl) {
            if (sources.length) {
                var configs_2 = getConfigs();
                if (configs_2 && configs_2.userResolutionSelected) {
                    var source = sources.find(function (s) { return s.resolution === configs_2.userResolutionSelected; });
                    if (source) {
                        videoEl.currentTime = 0;
                        videoEl.src = source.url;
                        if (!videoEl.paused || autoPlay) {
                            videoEl.play();
                        }
                    }
                }
                else {
                    var source = sources[0];
                    if (source) {
                        videoEl.currentTime = 0;
                        videoEl.src = source.url;
                        if (!videoEl.paused || autoPlay) {
                            videoEl.play();
                        }
                    }
                }
            }
        }
    }, [sources, videoEl]);
    React.useEffect(function () {
        setVideoReady(true);
        if (videoEl) {
            var configs = getConfigs();
            if (configs && configs.volume) {
                videoEl.volume = configs.volume / 100;
            }
            videoEl.addEventListener('suspend', function (e) {
                if (typeof onSuspend === 'function') {
                    onSuspend(e);
                }
            });
            videoEl.addEventListener('stalled', function (e) {
                if (typeof onStalled === 'function') {
                    onStalled(e);
                }
            });
            videoEl.addEventListener('seeking', function (e) {
                if (typeof onSeeking === 'function') {
                    onSeeking(e);
                }
            });
            videoEl.addEventListener('seeked', function (e) {
                if (typeof onSeeked === 'function') {
                    onSeeked(e);
                }
            });
            videoEl.addEventListener('ended', function (e) {
                if (typeof onEnded === 'function') {
                    onEnded(e);
                }
            });
            videoEl.addEventListener('error', function (e) {
                if (typeof onError === 'function') {
                    onError(e);
                }
            });
            videoEl.addEventListener('canplaythrough', function (e) {
                setDurationTime(videoEl.duration);
                if (typeof onCanPlayThrough === 'function') {
                    onCanPlayThrough(e);
                }
            });
            videoEl.addEventListener('canplay', function (e) {
                if (typeof onCanPlay === 'function') {
                    onCanPlay(e);
                }
            });
            videoEl.addEventListener('abort', function (e) {
                if (typeof onAbort === 'function') {
                    onAbort(e);
                }
            });
            videoEl.addEventListener('loadeddata', function (e) {
                if (typeof onLoadedData === 'function') {
                    onLoadedData(e);
                }
            });
            videoEl.addEventListener('loadedmetadata', function (e) {
                if (typeof onLoadedMetaData === 'function') {
                    onLoadedMetaData(e);
                }
            });
            videoEl.addEventListener('playing', function (e) {
                if (typeof onPlaying === 'function') {
                    onPlaying(e);
                }
            });
            videoEl.addEventListener('loadstart', function (e) {
                if (typeof onLoadStart === 'function') {
                    onLoadStart(e);
                }
            });
            videoEl.addEventListener('waiting', function (e) {
                if (typeof onWaiting === 'function') {
                    onWaiting(e);
                }
            });
            videoEl.addEventListener('timeupdate', function (e) {
                setCurrentTime(videoEl.currentTime);
                setProgress((videoEl.currentTime * 100) / videoEl.duration);
                if (typeof onTimeUpdate === 'function') {
                    onTimeUpdate(e);
                }
            });
            videoEl.addEventListener('play', function (e) {
                setPause(false);
                setAutoHideControls(true);
                configMenu.current = false;
                setShowControls(false);
                if (typeof onPlay === 'function') {
                    onPlay(e);
                }
            });
            videoEl.addEventListener('pause', function (e) {
                setPause(true);
                setAutoHideControls(false);
                setShowControls(true);
                if (typeof onPause === 'function') {
                    onPause(e);
                }
            });
            videoEl.addEventListener('volumechange', function (e) {
                saveConfigs({
                    volume: videoEl.volume * 100,
                });
                if (videoRef) {
                    setVolume(videoEl.volume * 100);
                }
                if (typeof onVolumeChange === 'function') {
                    onVolumeChange(e);
                }
            });
            videoEl.addEventListener('durationchange', function (e) {
                if (typeof onDurationChange === 'function') {
                    onDurationChange(e);
                }
            });
            videoEl.addEventListener('progress', function (e) {
                setCurrentTime(videoEl.currentTime);
                setProgress((videoEl.currentTime * 100) / videoEl.duration);
                var duration = videoEl.duration;
                if (duration > 0) {
                    for (var i = 0; i < videoEl.buffered.length; i++) {
                        if (videoEl.buffered.start(videoEl.buffered.length - 1 - i) <
                            videoEl.currentTime) {
                            setProgressBuffer((videoEl.buffered.end(videoEl.buffered.length - 1 - i) /
                                duration) *
                                100);
                            break;
                        }
                    }
                }
                if (typeof onProgress === 'function') {
                    onProgress(e);
                }
            });
            videoEl.addEventListener('ratechange', function (e) {
                if (rateSelected !== videoEl.playbackRate) {
                    setRateSelected(videoEl.playbackRate);
                    saveConfigs({
                        userRate: videoEl.playbackRate,
                    });
                }
                if (typeof onRateChange === 'function') {
                    onRateChange(e);
                }
            });
            if (typeof onReady === 'function' && videoRef) {
                onReady(videoEl);
            }
        }
    }, [videoEl]);
    var playOrPause = function () {
        if (videoEl) {
            if (videoEl.paused) {
                videoEl.play();
            }
            else {
                videoEl.pause();
            }
        }
    };
    var onChangeProgress = function (_event, newValue) {
        var value = newValue;
        if (videoEl) {
            videoEl.currentTime = (videoEl.duration * value) / 100;
        }
        setProgress(value);
    };
    var onChangeVolume = function (_event, newValue) {
        applyVolume(newValue);
        setVolume(newValue);
    };
    var applyVolume = function (value) {
        if (videoEl) {
            videoEl.volume = value / 100;
        }
    };
    var volumeToggle = function () {
        if (volume > 0) {
            setVolume(0);
            applyVolume(0);
        }
        else {
            setVolume(100);
            applyVolume(100);
        }
    };
    var onClickPicture = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!document.pictureInPictureEnabled) return [3 /*break*/, 2];
                    if (!videoEl) return [3 /*break*/, 2];
                    return [4 /*yield*/, videoEl.requestPictureInPicture()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var onClickFullscreen = function () {
        var el = refWrap.current;
        if (!document.fullscreenElement) {
            if (el.requestFullscreen) {
                el.requestFullscreen();
            }
            else if (el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            }
            else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen();
            }
            else if (el.msRequestFullscreen) {
                el.msRequestFullscreen();
            }
        }
        else {
            document.exitFullscreen();
        }
    };
    var changeRate = function (r) {
        setRateSelected(r);
        configMenu.current = false;
        configMenuTouch.current = false;
        saveConfigs({
            userRate: r,
        });
        if (videoEl) {
            videoEl.playbackRate = r;
        }
    };
    var changeResolution = function (r) {
        setResolutionSelected(r);
        configMenu.current = false;
        configMenuTouch.current = false;
        saveConfigs({
            userResolutionSelected: r,
        });
        if (videoEl) {
            var paused = videoEl.paused, currentTime_1 = videoEl.currentTime;
            var source = sources.find(function (s) { return s.resolution === r; });
            if (source) {
                videoEl.src = source.url;
                videoEl.currentTime = currentTime_1;
                if (!paused) {
                    videoEl.play();
                }
            }
        }
    };
    var saveConfigs = function (configs) {
        if (localStorage) {
            var current = getConfigs();
            localStorage.setItem('hplayer-config', JSON.stringify(__assign(__assign({}, current), configs)));
        }
    };
    var getConfigs = function () {
        try {
            var parsed = JSON.parse(String(localStorage.getItem('hplayer-config')));
            if (typeof parsed !== 'object' || parsed === null) {
                throw new Error("config invalid");
            }
            return parsed;
        }
        catch (e) {
            return {
                userResolutionSelected: '',
                userRate: 1,
                volume: 50,
            };
        }
    };
    var onMouseLeaveVideoWrap = function () {
        if (!touchDevice) {
            if (configMenu.current) {
                configMenu.current = false;
            }
        }
    };
    return (React__default['default'].createElement(VideoWrap, { ref: refWrap, className: [
            configMenu.current ? 'config-menu-show' : '',
            touchDevice ? 'touch' : '',
            showControls ? 'show' : '',
            pause ? 'paused' : '',
        ].join(' '), onMouseLeave: onMouseLeaveVideoWrap },
        React__default['default'].createElement("video", { ref: videoRef, controlsList: "nodownload", autoPlay: autoPlay, poster: poster }, sources
            .filter(function (s) { return s.resolution === resolutionSelected; })
            .map(function (s, index) { return (React__default['default'].createElement("source", { key: index, src: s.url, type: s.type })); })),
        videoReady && (React__default['default'].createElement(React.Fragment, null,
            React__default['default'].createElement(ControlsWrap, { className: [
                    'controls-wrap',
                    touchDevice ? 'touch' : '',
                    showControls ? 'show' : '',
                ].join(' '), onClick: function () {
                    if (!touchDevice) {
                        playOrPause();
                    }
                    else {
                        setShowControls(true);
                    }
                } }),
            React__default['default'].createElement(ControlProgress, { className: ['controls-progress', touchDevice ? 'touch' : ''].join(' ') },
                React__default['default'].createElement(core.Slider, { value: progress, onChange: onChangeProgress, "aria-labelledby": "discrete-slider", step: 0.1 }),
                React__default['default'].createElement(core.LinearProgress, { variant: "buffer", value: progress, valueBuffer: progressBuffer })),
            React__default['default'].createElement(ControlsTouch, { className: [
                    'controls',
                    showControls ? 'show' : '',
                    touchDevice ? 'touch' : '',
                ].join(' '), onClick: function () {
                    setShowControls(true);
                } },
                React__default['default'].createElement(core.IconButton, { onClick: playOrPause },
                    pause && React__default['default'].createElement(PlayArrowIcon__default['default'], null),
                    !pause && React__default['default'].createElement(PauseIcon__default['default'], null))),
            React__default['default'].createElement(Controls, { className: [
                    'controls',
                    touchDevice ? 'touch' : '',
                    showControls ? 'show' : '',
                ].join(' ') },
                React__default['default'].createElement(LeftControls, { className: [touchDevice ? 'touch' : ''].join(' ') },
                    React__default['default'].createElement(core.IconButton, { onClick: playOrPause, className: "playOrPause" },
                        pause && React__default['default'].createElement(PlayArrowIcon__default['default'], null),
                        !pause && React__default['default'].createElement(PauseIcon__default['default'], null)),
                    React__default['default'].createElement(VolumeWrap, { className: [touchDevice ? 'touch' : ''].join(' ') },
                        React__default['default'].createElement(core.IconButton, { onClick: volumeToggle },
                            volume === 0 && React__default['default'].createElement(VolumeOffIcon__default['default'], null),
                            volume > 0 && volume < 33 && React__default['default'].createElement(VolumeMuteIcon__default['default'], null),
                            volume > 33 && volume < 66 && React__default['default'].createElement(VolumeDownIcon__default['default'], null),
                            volume > 66 && volume <= 100 && React__default['default'].createElement(VolumeUpIcon__default['default'], null)),
                        React__default['default'].createElement("div", { className: "slider-wrap" },
                            React__default['default'].createElement(core.Slider, { value: volume, onChange: onChangeVolume, "aria-labelledby": "continuous-slider", min: 0, max: 100 }))),
                    React__default['default'].createElement(Timer, null,
                        humanSeconds(currentTime),
                        " / ",
                        humanSeconds(durationTime))),
                React__default['default'].createElement(CenterControls, null),
                React__default['default'].createElement(RightControls, null,
                    enablePictureInPicture && (React__default['default'].createElement(core.IconButton, { onClick: onClickPicture },
                        React__default['default'].createElement(PictureInPictureAltIcon__default['default'], null))),
                    React__default['default'].createElement(ConfigWrap, null,
                        React__default['default'].createElement(ConfigMenu, { className: "config-menu" },
                            React__default['default'].createElement(core.List, { component: "nav", "aria-label": "resolutions", dense: true },
                                resolutions.length > 1 && (React__default['default'].createElement(core.ListItem, { button: true, onClick: function () { return setOpenResolution(!openResolution); } },
                                    React__default['default'].createElement(core.ListItemIcon, null,
                                        React__default['default'].createElement(AspectRatioIcon__default['default'], { color: "inherit" })),
                                    React__default['default'].createElement(core.ListItemText, { primary: locale.quality, secondary: resolutionSelected }),
                                    openResolution ? React__default['default'].createElement(ExpandLess__default['default'], null) : React__default['default'].createElement(ExpandMore__default['default'], null))),
                                React__default['default'].createElement(core.Collapse, { in: openResolution, timeout: "auto", unmountOnExit: true },
                                    React__default['default'].createElement(core.List, { component: "nav", disablePadding: true, dense: true }, resolutions.map(function (resolution, index) { return (React__default['default'].createElement(core.ListItem, { key: index, button: true, onClick: function () { return changeResolution(resolution); } },
                                        React__default['default'].createElement(core.ListItemIcon, null,
                                            React__default['default'].createElement(core.Checkbox, { edge: "start", tabIndex: -1, disableRipple: true, checked: resolution === resolutionSelected, inputProps: { 'aria-labelledby': '' } })),
                                        React__default['default'].createElement(core.ListItemText, { primary: resolution }))); }))),
                                React__default['default'].createElement(core.ListItem, { button: true, onClick: function () { return setOpenRate(!openRate); } },
                                    React__default['default'].createElement(core.ListItemIcon, null,
                                        React__default['default'].createElement(SlowMotionVideoIcon__default['default'], { color: "inherit" })),
                                    React__default['default'].createElement(core.ListItemText, { primary: locale.playbackSpeed, secondary: rateSelected + "x" }),
                                    openRate ? React__default['default'].createElement(ExpandLess__default['default'], null) : React__default['default'].createElement(ExpandMore__default['default'], null)),
                                React__default['default'].createElement(core.Collapse, { in: openRate, timeout: "auto", unmountOnExit: true },
                                    React__default['default'].createElement(core.List, { component: "nav", disablePadding: true, dense: true }, rates.map(function (rate, index) { return (React__default['default'].createElement(core.ListItem, { key: index, button: true, onClick: function () { return changeRate(rate); }, selected: rate === rateSelected },
                                        React__default['default'].createElement(core.ListItemText, { primary: rate }))); }))))),
                        React__default['default'].createElement(core.Drawer, { anchor: "bottom", open: configMenuTouch.current, onClose: function () { return (configMenuTouch.current = false); } },
                            React__default['default'].createElement(core.List, { component: "nav", "aria-label": "resolutions", dense: false },
                                resolutions.length > 1 && (React__default['default'].createElement(core.ListItem, { button: true, onClick: function () { return setOpenResolution(!openResolution); } },
                                    React__default['default'].createElement(core.ListItemIcon, null,
                                        React__default['default'].createElement(AspectRatioIcon__default['default'], { color: "inherit" })),
                                    React__default['default'].createElement(core.ListItemText, { primary: locale.quality, secondary: resolutionSelected }),
                                    openResolution ? React__default['default'].createElement(ExpandLess__default['default'], null) : React__default['default'].createElement(ExpandMore__default['default'], null))),
                                React__default['default'].createElement(core.Collapse, { in: openResolution, timeout: "auto", unmountOnExit: true },
                                    React__default['default'].createElement(core.List, { component: "nav", disablePadding: true, dense: false }, resolutions.map(function (resolution, index) { return (React__default['default'].createElement(core.ListItem, { key: index, button: true, onClick: function () { return changeResolution(resolution); } },
                                        React__default['default'].createElement(core.ListItemIcon, null,
                                            React__default['default'].createElement(core.Checkbox, { edge: "start", tabIndex: -1, disableRipple: true, checked: resolution === resolutionSelected, inputProps: { 'aria-labelledby': '' } })),
                                        React__default['default'].createElement(core.ListItemText, { primary: resolution }))); }))),
                                React__default['default'].createElement(core.ListItem, { button: true, onClick: function () { return setOpenRate(!openRate); } },
                                    React__default['default'].createElement(core.ListItemIcon, null,
                                        React__default['default'].createElement(SlowMotionVideoIcon__default['default'], { color: "inherit" })),
                                    React__default['default'].createElement(core.ListItemText, { primary: locale.playbackSpeed, secondary: rateSelected + "x" }),
                                    openRate ? React__default['default'].createElement(ExpandLess__default['default'], null) : React__default['default'].createElement(ExpandMore__default['default'], null)),
                                React__default['default'].createElement(core.Collapse, { in: openRate, timeout: "auto", unmountOnExit: true },
                                    React__default['default'].createElement(core.List, { component: "nav", disablePadding: true, dense: false }, rates.map(function (rate, index) { return (React__default['default'].createElement(core.ListItem, { key: index, button: true, onClick: function () { return changeRate(rate); }, selected: rate === rateSelected },
                                        React__default['default'].createElement(core.ListItemText, { primary: rate }))); }))))),
                        React__default['default'].createElement(core.Button, { color: "inherit", onClick: function () {
                                if (touchDevice) {
                                    configMenuTouch.current = !configMenuTouch.current;
                                }
                                else {
                                    configMenu.current = !configMenu.current;
                                }
                            } },
                            !configMenu.current && React__default['default'].createElement(SettingsIcon__default['default'], null),
                            configMenu.current && React__default['default'].createElement(CloseIcon__default['default'], null))),
                    React__default['default'].createElement(core.IconButton, { onClick: onClickFullscreen }, !fullscreen ? React__default['default'].createElement(FullscreenIcon__default['default'], null) : React__default['default'].createElement(FullscreenExitIcon__default['default'], null))))))));
});

exports.HPlayer = HPlayer;
exports.humanSeconds = humanSeconds;
exports.isTouchDevice = isTouchDevice;
//# sourceMappingURL=index.js.map
