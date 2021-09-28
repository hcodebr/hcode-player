import React, { useState, useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Slider, LinearProgress, IconButton, List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox, Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import SettingsIcon from '@material-ui/icons/Settings';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import PauseIcon from '@material-ui/icons/Pause';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

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

var VideoWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  overflow: hidden;\n  .controls-progress {\n    opacity: 0;\n  }\n  .controls-wrap {\n    opacity: 0;\n    background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 66%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  .controls {\n    transform: translateY(64px);\n  }\n  &.config-menu-show {\n    .config-menu {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &:hover {\n    .controls-progress {\n      opacity: 1;\n    }\n    .controls-wrap {\n      opacity: 1;\n    }\n    .controls {\n      transform: translateY(0);\n    }\n  }\n  video {\n    width: 100%;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  overflow: hidden;\n  .controls-progress {\n    opacity: 0;\n  }\n  .controls-wrap {\n    opacity: 0;\n    background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 66%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  .controls {\n    transform: translateY(64px);\n  }\n  &.config-menu-show {\n    .config-menu {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &:hover {\n    .controls-progress {\n      opacity: 1;\n    }\n    .controls-wrap {\n      opacity: 1;\n    }\n    .controls {\n      transform: translateY(0);\n    }\n  }\n  video {\n    width: 100%;\n  }\n"])));
var ControlsWrap = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100%;\n  bottom: 0;\n  z-index: 2;\n  height: 100%;\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100%;\n  bottom: 0;\n  z-index: 2;\n  height: 100%;\n"])));
var Controls = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 64px;\n  width: 100%;\n  bottom: 0;\n  z-index: 3;\n  color: #fff;\n  .MuiIconButton-root {\n    color: #fff;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 64px;\n  width: 100%;\n  bottom: 0;\n  z-index: 3;\n  color: #fff;\n  .MuiIconButton-root {\n    color: #fff;\n  }\n"])));
var LeftControls = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var CenterControls = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var RightControls = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var Timer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n"])));
var VolumeWrap = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .slider-wrap {\n    overflow: hidden;\n    width: 0;\n    display: flex;\n    align-items: center;\n    min-height: 64px;\n  }\n  &:hover {\n    .slider-wrap {\n      padding: 0 20px;\n      width: 140px;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .slider-wrap {\n    overflow: hidden;\n    width: 0;\n    display: flex;\n    align-items: center;\n    min-height: 64px;\n  }\n  &:hover {\n    .slider-wrap {\n      padding: 0 20px;\n      width: 140px;\n    }\n  }\n"])));
var VolumeSliderWrap = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""])));
var ControlProgress = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  min-height: 96px;\n  width: calc(100% - 40px);\n  padding: 10px 20px;\n  bottom: 0;\n  z-index: 3;\n  > span {\n    position: absolute;\n    z-index: 5;\n  }\n  > div {\n    position: absolute;\n    width: 100%;\n    top: 22px;\n    z-index: 4;\n  }\n"], ["\n  position: absolute;\n  min-height: 96px;\n  width: calc(100% - 40px);\n  padding: 10px 20px;\n  bottom: 0;\n  z-index: 3;\n  > span {\n    position: absolute;\n    z-index: 5;\n  }\n  > div {\n    position: absolute;\n    width: 100%;\n    top: 22px;\n    z-index: 4;\n  }\n"])));
var ConfigWrap = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ConfgMenu = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 32px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transform: translateY(200px);\n  .MuiListItem-button {\n    text-align: right;\n  }\n  svg {\n    color: #fff;\n  }\n"], ["\n  position: absolute;\n  bottom: 32px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transform: translateY(200px);\n  .MuiListItem-button {\n    text-align: right;\n  }\n  svg {\n    color: #fff;\n  }\n"])));
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
var HPlayer = React.forwardRef(function (_a) {
    var url = _a.url, _b = _a.autoPlay, autoPlay = _b === void 0 ? false : _b, onReady = _a.onReady, onSuspend = _a.onSuspend, onStalled = _a.onStalled, onSeeking = _a.onSeeking, onSeeked = _a.onSeeked, onEnded = _a.onEnded, onError = _a.onError, onCanPlayThrough = _a.onCanPlayThrough, onCanPlay = _a.onCanPlay, onAbort = _a.onAbort, onLoadedData = _a.onLoadedData, onLoadedMetaData = _a.onLoadedMetaData, onPlaying = _a.onPlaying, onLoadStart = _a.onLoadStart, onWaiting = _a.onWaiting, onTimeUpdate = _a.onTimeUpdate, onPlay = _a.onPlay, onPause = _a.onPause, onVolumeChange = _a.onVolumeChange, onDurationChange = _a.onDurationChange, onProgress = _a.onProgress, onRateChange = _a.onRateChange;
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
    var _c = useState(getSources(url)), sources = _c[0], setSources = _c[1];
    var _d = useState([]), resolutions = _d[0], setResolutions = _d[1];
    var _e = useState(''), resolutionSelected = _e[0], setResolutionSelected = _e[1];
    var _f = useState(1), rateSelected = _f[0], setRateSelected = _f[1];
    var rates = useState([
        0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2,
    ])[0];
    var _g = useState(true), pause = _g[0], setPause = _g[1];
    var _h = useState(0), currentTime = _h[0], setCurrentTime = _h[1];
    var _j = useState(0), durationTime = _j[0], setDurationTime = _j[1];
    var _k = useState(false), configMenu = _k[0], setConfigMenu = _k[1];
    var _l = useState(50), volume = _l[0], setVolume = _l[1];
    var _m = useState(0), progressBuffer = _m[0], setProgressBuffer = _m[1];
    var _o = useState(0), progress = _o[0], setProgress = _o[1];
    var _p = useState(false), videoReady = _p[0], setVideoReady = _p[1];
    var _q = useState(false), openResolution = _q[0], setOpenResolution = _q[1];
    var _r = useState(false), openRate = _r[0], setOpenRate = _r[1];
    var videoRef = useRef(null);
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
    useEffect(function () {
        var rate = rateSelected;
        var configs = getConfigs();
        if (configs && configs.userRate && rate !== configs.userRate) {
            rate = configs.userRate;
            setRateSelected(configs.userRate);
        }
    }, []);
    useEffect(function () {
        if (!configMenu) {
            setOpenResolution(false);
            setOpenRate(false);
        }
    }, [configMenu]);
    useEffect(function () {
        setSources(getSources(url));
    }, [url]);
    useEffect(function () {
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
    useEffect(function () {
        setResolutions(removeDuplicates(sources.map(function (s) { return (s.resolution ? s.resolution : ''); })));
        var videoEl = videoRef.current;
        if (videoEl) {
            if (sources.length) {
                var configs_2 = getConfigs();
                if (configs_2 && configs_2.userResolutionSelected) {
                    var source = sources.find(function (s) { return s.resolution === configs_2.userResolutionSelected; });
                    if (source) {
                        videoEl.currentTime = 0;
                        videoEl.src = source.url;
                        videoEl.play();
                    }
                }
                else {
                    var source = sources[0];
                    if (source) {
                        videoEl.currentTime = 0;
                        videoEl.src = source.url;
                        videoEl.play();
                    }
                }
            }
        }
    }, [sources]);
    useEffect(function () {
        var _a;
        setVideoReady(true);
        var videoEl = videoRef.current;
        if (videoEl) {
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
                if (typeof onPlay === 'function') {
                    onPlay(e);
                }
            });
            videoEl.addEventListener('pause', function (e) {
                setPause(true);
                if (typeof onPause === 'function') {
                    onPause(e);
                }
            });
            videoEl.addEventListener('volumechange', function (e) {
                if (videoRef.current) {
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
            (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('ratechange', function (e) {
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
            if (typeof onReady === 'function') {
                onReady(videoRef.current);
            }
        }
    }, [videoRef]);
    var playOrPause = function () {
        var _a, _b, _c;
        if ((_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.paused) {
            (_b = videoRef.current) === null || _b === void 0 ? void 0 : _b.play();
        }
        else {
            (_c = videoRef.current) === null || _c === void 0 ? void 0 : _c.pause();
        }
    };
    var onChangeProgress = function (_event, newValue) {
        var value = newValue;
        var videoEl = videoRef.current;
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
        var videoEl = videoRef.current;
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
        var videoEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    videoEl = videoRef.current;
                    return [4 /*yield*/, videoEl.requestPictureInPicture()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickFullscreen = function () {
        var videoEl = videoRef.current;
        if (videoEl.requestFullscreen) {
            videoEl.requestFullscreen();
        }
        else if (videoEl.mozRequestFullScreen) {
            videoEl.mozRequestFullScreen();
        }
        else if (videoEl.webkitRequestFullscreen) {
            videoEl.webkitRequestFullscreen();
        }
        else if (videoEl.msRequestFullscreen) {
            videoEl.msRequestFullscreen();
        }
    };
    var changeRate = function (r) {
        setRateSelected(r);
        setConfigMenu(false);
        saveConfigs({
            userRate: r,
        });
        var videoEl = videoRef.current;
        if (videoEl) {
            videoEl.playbackRate = r;
        }
    };
    var changeResolution = function (r) {
        setResolutionSelected(r);
        setConfigMenu(false);
        saveConfigs({
            userResolutionSelected: r,
        });
        var videoEl = videoRef.current;
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
            return parsed;
        }
        catch (e) {
            return {
                userResolutionSelected: '',
                userRate: 1,
            };
        }
    };
    var onMouseLeaveVideoWrap = function () {
        if (configMenu) {
            setConfigMenu(false);
        }
    };
    return (React.createElement(VideoWrap, { className: [configMenu ? 'config-menu-show' : ''].join(' '), onMouseLeave: onMouseLeaveVideoWrap },
        React.createElement("video", { ref: videoRef, controlsList: "nodownload", autoPlay: autoPlay }, sources
            .filter(function (s) { return s.resolution === resolutionSelected; })
            .map(function (s, index) { return (React.createElement("source", { key: index, src: s.url, type: s.type })); })),
        videoReady && (React.createElement(Fragment, null,
            React.createElement(ControlsWrap, { className: "controls-wrap", onClick: playOrPause }),
            React.createElement(ControlProgress, { className: "controls-progress" },
                React.createElement(Slider, { value: progress, onChange: onChangeProgress, "aria-labelledby": "continuous-slider", step: 0.1 }),
                React.createElement(LinearProgress, { variant: "buffer", value: progress, valueBuffer: progressBuffer })),
            React.createElement(Controls, { className: "controls" },
                React.createElement(LeftControls, null,
                    React.createElement(IconButton, { onClick: playOrPause },
                        pause && React.createElement(PlayArrowIcon, null),
                        !pause && React.createElement(PauseIcon, null)),
                    React.createElement(VolumeWrap, null,
                        React.createElement(IconButton, { onClick: volumeToggle },
                            volume === 0 && React.createElement(VolumeOffIcon, null),
                            volume > 0 && volume < 100 && React.createElement(VolumeDownIcon, null),
                            volume === 100 && React.createElement(VolumeUpIcon, null)),
                        React.createElement(VolumeSliderWrap, { className: "slider-wrap" },
                            React.createElement(Slider, { value: volume, onChange: onChangeVolume, "aria-labelledby": "continuous-slider" }))),
                    React.createElement(Timer, null,
                        humanSeconds(currentTime),
                        " / ",
                        humanSeconds(durationTime))),
                React.createElement(CenterControls, null),
                React.createElement(RightControls, null,
                    React.createElement(IconButton, { onClick: onClickPicture },
                        React.createElement(PictureInPictureAltIcon, null)),
                    React.createElement(ConfigWrap, null,
                        React.createElement(ConfgMenu, { className: "config-menu" },
                            React.createElement(List, { component: "nav", "aria-label": "resolutions", dense: true },
                                resolutions.length > 1 && (React.createElement(ListItem, { button: true, onClick: function () { return setOpenResolution(!openResolution); } },
                                    React.createElement(ListItemIcon, null,
                                        React.createElement(AspectRatioIcon, { color: "inherit" })),
                                    React.createElement(ListItemText, { primary: "Qualidade " + resolutionSelected }),
                                    openResolution ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null))),
                                React.createElement(Collapse, { in: openResolution, timeout: "auto", unmountOnExit: true },
                                    React.createElement(List, { component: "nav", disablePadding: true, dense: true }, resolutions.map(function (resolution, index) { return (React.createElement(ListItem, { key: index, button: true, onClick: function () { return changeResolution(resolution); } },
                                        React.createElement(ListItemIcon, null,
                                            React.createElement(Checkbox, { edge: "start", tabIndex: -1, disableRipple: true, checked: resolution === resolutionSelected, inputProps: { 'aria-labelledby': '' } })),
                                        React.createElement(ListItemText, { primary: resolution }))); }))),
                                React.createElement(ListItem, { button: true, onClick: function () { return setOpenRate(!openRate); } },
                                    React.createElement(ListItemIcon, null,
                                        React.createElement(SlowMotionVideoIcon, { color: "inherit" })),
                                    React.createElement(ListItemText, { primary: "Reprodu\u00E7\u00E3o " + rateSelected + "x" }),
                                    openRate ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null)),
                                React.createElement(Collapse, { in: openRate, timeout: "auto", unmountOnExit: true },
                                    React.createElement(List, { component: "nav", disablePadding: true, dense: true }, rates.map(function (rate, index) { return (React.createElement(ListItem, { key: index, button: true, onClick: function () { return changeRate(rate); }, selected: rate === rateSelected },
                                        React.createElement(ListItemText, { primary: rate }))); }))))),
                        React.createElement(Button, { color: "inherit", onClick: function () { return setConfigMenu(!configMenu); } },
                            !configMenu && React.createElement(SettingsIcon, null),
                            configMenu && React.createElement(CloseIcon, null))),
                    React.createElement(IconButton, { onClick: onClickFullscreen },
                        React.createElement(FullscreenIcon, null))))))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

export { HPlayer, humanSeconds };
//# sourceMappingURL=index.esm.js.map
