import React from 'react';
import styled from 'styled-components';
import {
  Button,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Slider,
  Collapse,
  Drawer,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import SettingsIcon from '@material-ui/icons/Settings';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import PauseIcon from '@material-ui/icons/Pause';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import CloseIcon from '@material-ui/icons/Close';
import { Fragment, useRef, useState } from 'react';
import { useEffect } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ControlsTouch from '../styled/ControlsTouch';
import Controls from '../styled/Controls';
import LeftControls from '../styled/LeftControls';
import VolumeWrap from '../styled/VolumeWrap';
import ControlsWrap from '../styled/ControlsWrap';
import VideoWrap from '../styled/VideoWrap';
import ControlProgress from '../styled/ControlProgress';
import Timer from '../styled/Timer';
import CenterControls from '../styled/CenterControls';
import RightControls from '../styled/RightControls';
import ConfigWrap from '../styled/ConfigWrap';
import ConfigMenu from '../styled/ConfigMenu';

export interface AnyObject {
  [key: string]: any;
}

export function humanSeconds(seconds: number): string {
  const date = new Date(seconds * 1000).toISOString();

  if (seconds < 600) {
    return date.substr(15, 4);
  } else if (seconds < 3600) {
    return date.substr(14, 5);
  } else {
    return date.substr(11, 8);
  }
}

export interface HPlayerConfig {
  userResolutionSelected: string;
  userRate: number;
  volume: number;
}

export interface HPlayerSource {
  url: string;
  type?: string;
  resolution?: string;
}

export interface HPlayerLocale {
  quality: string;
  playbackSpeed: string;
}

export function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
}

const HPlayer = React.forwardRef(
  ({
    url,
    autoPlay = false,
    poster,
    onReady,
    onSuspend,
    onStalled,
    onSeeking,
    onSeeked,
    onEnded,
    onError,
    onCanPlayThrough,
    onCanPlay,
    onAbort,
    onLoadedData,
    onLoadedMetaData,
    onPlaying,
    onLoadStart,
    onWaiting,
    onTimeUpdate,
    onPlay,
    onPause,
    onVolumeChange,
    onDurationChange,
    onProgress,
    onRateChange,
    locale = {
      quality: 'Quality',
      playbackSpeed: 'Playback speed',
    },
  }: {
    url: string | HPlayerSource | HPlayerSource[];
    autoPlay?: boolean;
    poster?: string;
    onReady?: (video: HTMLVideoElement) => void;
    onSuspend?: (event: any) => void;
    onStalled?: (event: any) => void;
    onSeeking?: (event: any) => void;
    onSeeked?: (event: any) => void;
    onEnded?: (event: any) => void;
    onError?: (event: any) => void;
    onCanPlayThrough?: (event: any) => void;
    onCanPlay?: (event: any) => void;
    onAbort?: (event: any) => void;
    onLoadedData?: (event: any) => void;
    onLoadedMetaData?: (event: any) => void;
    onPlaying?: (event: any) => void;
    onLoadStart?: (event: any) => void;
    onWaiting?: (event: any) => void;
    onTimeUpdate?: (event: any) => void;
    onPlay?: (event: any) => void;
    onPause?: (event: any) => void;
    onVolumeChange?: (event: any) => void;
    onDurationChange?: (event: any) => void;
    onProgress?: (event: any) => void;
    onRateChange?: (event: any) => void;
    locale?: HPlayerLocale;
  }) => {
    const getSources = (
      value: string | HPlayerSource | HPlayerSource[]
    ): HPlayerSource[] => {
      const s: HPlayerSource[] = [];

      if (typeof value === 'string') {
        s.push({
          url: value as string,
          resolution: '',
        });
      } else if (url instanceof Array) {
        s.push(...(value as HPlayerSource[]));
      } else {
        s.push(value as HPlayerSource);
      }

      return s;
    };

    const [sources, setSources] = useState<HPlayerSource[]>(getSources(url));
    const [enablePictureInPicture, setEnablePictureInPicture] = useState(true);
    const [autoHideControls, setAutoHideControls] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const [touchDevice, setTouchDevice] = useState(false);
    const [resolutions, setResolutions] = useState<string[]>([]);
    const [resolutionSelected, setResolutionSelected] = useState('');
    const [rateSelected, setRateSelected] = useState<number>(1);
    const [rates] = useState<number[]>([
      0.25,
      0.5,
      0.75,
      1,
      1.25,
      1.5,
      1.75,
      2,
    ]);
    const [fullscreen, setFullscreen] = useState(false);
    const [pause, setPause] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [volume, setVolume] = useState(50);
    const [progressBuffer, setProgressBuffer] = useState(0);
    const [progress, setProgress] = useState(0);
    const [videoReady, setVideoReady] = useState(false);
    const [openResolution, setOpenResolution] = useState(false);
    const [openRate, setOpenRate] = useState(false);
    const refWrap = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const timerControlsRef = useRef<NodeJS.Timeout>(null);
    const configMenu = useRef<boolean>(false);
    const configMenuTouch = useRef<boolean>(false);

    const removeDuplicates = (arr: any[]) => {
      var obj: AnyObject = {};
      var ret_arr = [];
      for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
      }
      for (var key in obj) {
        ret_arr.push(key);
      }
      return ret_arr;
    };

    useEffect(() => {
      if (showControls && autoHideControls && videoRef.current) {
        if (timerControlsRef.current) {
          clearTimeout(timerControlsRef.current);
        }
        timerControlsRef.current = setTimeout(() => {
          if (timerControlsRef.current) {
            clearTimeout(timerControlsRef.current);
          }
          if (
            !videoRef.current.paused &&
            !configMenu.current &&
            !configMenuTouch.current
          ) {
            setShowControls(false);
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

    useEffect(() => {
      setTouchDevice(isTouchDevice());

      let rate = rateSelected;

      const configs = getConfigs();

      if (configs && configs.userRate && rate !== configs.userRate) {
        rate = configs.userRate;
        setRateSelected(configs.userRate);
      }

      if (configs && configs.volume && volume !== configs.volume) {
        setVolume(configs.volume);
      }

      if ((document as any).pictureInPictureEnabled) {
        setEnablePictureInPicture(true);
      }
    }, []);

    useEffect(() => {
      if (touchDevice && videoRef.current) {
        const progressEl: HTMLDivElement | null = document.querySelector(
          '.controls-progress'
        );
        if (progressEl) {
          progressEl.style.opacity = `1`;
        }
        setShowControls(true);
      }
    }, [touchDevice, videoRef]);

    useEffect(() => {
      if (!configMenu.current) {
        setOpenResolution(false);
        setOpenRate(false);
      }
    }, [configMenu.current]);

    useEffect(() => {
      if (openResolution) {
        setOpenRate(false);
      }
    }, [openResolution]);

    useEffect(() => {
      if (openRate) {
        setOpenResolution(false);
      }
    }, [openRate]);

    useEffect(() => {
      setSources(getSources(url));
    }, [url]);

    useEffect(() => {
      let resSelected = resolutionSelected;

      if (!resSelected) {
        const configs = getConfigs();
        if (configs && configs.userResolutionSelected) {
          if (
            sources.find((s) => s.resolution === configs.userResolutionSelected)
          ) {
            setResolutionSelected(configs.userResolutionSelected);
            resSelected = configs.userResolutionSelected;
          }
        }
      }

      if (resolutions.length > 0 && !resSelected) {
        setResolutionSelected(resolutions[0]);
      }
    }, [resolutions]);

    useEffect(() => {
      if (refWrap.current) {
        refWrap.current.addEventListener('fullscreenchange', (e) => {
          if (document.fullscreenElement) {
            setFullscreen(true);
          } else {
            setFullscreen(false);
          }
        });
      }
    }, [refWrap]);

    useEffect(() => {
      setResolutions(
        removeDuplicates(sources.map((s) => (s.resolution ? s.resolution : '')))
      );

      const videoEl = videoRef.current as HTMLVideoElement;

      if (videoEl) {
        if (sources.length) {
          const configs = getConfigs();
          if (configs && configs.userResolutionSelected) {
            const source = sources.find(
              (s) => s.resolution === configs.userResolutionSelected
            );

            if (source) {
              videoEl.currentTime = 0;
              videoEl.src = source.url;
              if (!videoEl.paused || autoPlay) {
                videoEl.play();
              }
            }
          } else {
            const source = sources[0];
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
    }, [sources]);

    useEffect(() => {
      setVideoReady(true);

      const videoEl = videoRef.current as HTMLVideoElement;

      if (videoEl) {
        videoEl.addEventListener('suspend', (e: any) => {
          if (typeof onSuspend === 'function') {
            onSuspend(e);
          }
        });

        videoEl.addEventListener('stalled', (e: any) => {
          if (typeof onStalled === 'function') {
            onStalled(e);
          }
        });

        videoEl.addEventListener('seeking', (e: any) => {
          if (typeof onSeeking === 'function') {
            onSeeking(e);
          }
        });

        videoEl.addEventListener('seeked', (e: any) => {
          if (typeof onSeeked === 'function') {
            onSeeked(e);
          }
        });

        videoEl.addEventListener('ended', (e: any) => {
          if (typeof onEnded === 'function') {
            onEnded(e);
          }
        });

        videoEl.addEventListener('error', (e: any) => {
          if (typeof onError === 'function') {
            onError(e);
          }
        });

        videoEl.addEventListener('canplaythrough', (e: any) => {
          setDurationTime(videoEl.duration);
          if (typeof onCanPlayThrough === 'function') {
            onCanPlayThrough(e);
          }
        });

        videoEl.addEventListener('canplay', (e: any) => {
          if (typeof onCanPlay === 'function') {
            onCanPlay(e);
          }
        });

        videoEl.addEventListener('abort', (e: any) => {
          if (typeof onAbort === 'function') {
            onAbort(e);
          }
        });

        videoEl.addEventListener('loadeddata', (e: any) => {
          if (typeof onLoadedData === 'function') {
            onLoadedData(e);
          }
        });

        videoEl.addEventListener('loadedmetadata', (e: any) => {
          if (typeof onLoadedMetaData === 'function') {
            onLoadedMetaData(e);
          }
        });

        videoEl.addEventListener('playing', (e: any) => {
          if (typeof onPlaying === 'function') {
            onPlaying(e);
          }
        });

        videoEl.addEventListener('loadstart', (e: any) => {
          if (typeof onLoadStart === 'function') {
            onLoadStart(e);
          }
        });

        videoEl.addEventListener('waiting', (e: any) => {
          if (typeof onWaiting === 'function') {
            onWaiting(e);
          }
        });

        videoEl.addEventListener('timeupdate', (e: any) => {
          setCurrentTime(videoEl.currentTime);
          setProgress((videoEl.currentTime * 100) / videoEl.duration);
          if (typeof onTimeUpdate === 'function') {
            onTimeUpdate(e);
          }
        });

        videoEl.addEventListener('play', (e: any) => {
          setPause(false);
          setAutoHideControls(true);
          configMenu.current = false;
          setShowControls(false);
          if (typeof onPlay === 'function') {
            onPlay(e);
          }
        });

        videoEl.addEventListener('pause', (e: any) => {
          setPause(true);
          setAutoHideControls(false);
          setShowControls(true);
          if (typeof onPause === 'function') {
            onPause(e);
          }
        });

        videoEl.addEventListener('volumechange', (e: any) => {
          saveConfigs({
            volume: videoEl.volume * 100,
          });
          if (videoRef.current) {
            setVolume(videoEl.volume * 100);
          }
          if (typeof onVolumeChange === 'function') {
            onVolumeChange(e);
          }
        });

        videoEl.addEventListener('durationchange', (e: any) => {
          if (typeof onDurationChange === 'function') {
            onDurationChange(e);
          }
        });

        videoEl.addEventListener('progress', (e: any) => {
          setCurrentTime(videoEl.currentTime);
          setProgress((videoEl.currentTime * 100) / videoEl.duration);

          let duration = videoEl.duration;
          if (duration > 0) {
            for (let i = 0; i < videoEl.buffered.length; i++) {
              if (
                videoEl.buffered.start(videoEl.buffered.length - 1 - i) <
                videoEl.currentTime
              ) {
                setProgressBuffer(
                  (videoEl.buffered.end(videoEl.buffered.length - 1 - i) /
                    duration) *
                    100
                );
                break;
              }
            }
          }

          if (typeof onProgress === 'function') {
            onProgress(e);
          }
        });

        videoRef.current?.addEventListener('ratechange', (e: any) => {
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

        if (typeof onReady === 'function' && videoRef.current) {
          onReady(videoRef.current);
        }
      }
    }, [videoRef]);

    const playOrPause = () => {
      if (videoRef.current?.paused) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    };

    const onChangeProgress = (_event: any, newValue: number | number[]) => {
      const value = newValue as number;
      const videoEl = videoRef.current as HTMLVideoElement;
      if (videoEl) {
        videoEl.currentTime = (videoEl.duration * value) / 100;
      }
      setProgress(value);
    };

    const onChangeVolume = (_event: any, newValue: number | number[]) => {
      applyVolume(newValue as number);
      setVolume(newValue as number);
    };

    const applyVolume = (value: number) => {
      const videoEl = videoRef.current as HTMLVideoElement;
      if (videoEl) {
        videoEl.volume = value / 100;
      }
    };

    const volumeToggle = () => {
      if (volume > 0) {
        setVolume(0);
        applyVolume(0);
      } else {
        setVolume(100);
        applyVolume(100);
      }
    };

    const onClickPicture = async () => {
      if ((document as any).pictureInPictureEnabled) {
        const videoEl = videoRef.current as any;
        await videoEl.requestPictureInPicture();
      }
    };

    const onClickFullscreen = () => {
      const el = refWrap.current as any;

      if (!document.fullscreenElement) {
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      } else {
        document.exitFullscreen();
      }
    };

    const changeRate = (r: number) => {
      setRateSelected(r);
      configMenu.current = false;
      configMenuTouch.current = false;
      saveConfigs({
        userRate: r,
      });

      const videoEl = videoRef.current as HTMLVideoElement;

      if (videoEl) {
        videoEl.playbackRate = r;
      }
    };

    const changeResolution = (r: string) => {
      setResolutionSelected(r);
      configMenu.current = false;
      configMenuTouch.current = false;
      saveConfigs({
        userResolutionSelected: r,
      });

      const videoEl = videoRef.current as HTMLVideoElement;
      if (videoEl) {
        const { paused, currentTime } = videoEl;
        const source = sources.find((s) => s.resolution === r);
        if (source) {
          videoEl.src = source.url;
          videoEl.currentTime = currentTime;
          if (!paused) {
            videoEl.play();
          }
        }
      }
    };

    const saveConfigs = (configs: {
      userResolutionSelected?: string;
      userRate?: number;
      volume?: number;
    }) => {
      if (localStorage) {
        const current = getConfigs();
        localStorage.setItem(
          'hplayer-config',
          JSON.stringify({
            ...current,
            ...configs,
          } as HPlayerConfig)
        );
      }
    };

    const getConfigs = (): HPlayerConfig => {
      try {
        const parsed = JSON.parse(
          String(localStorage.getItem('hplayer-config'))
        );
        return parsed as HPlayerConfig;
      } catch (e) {
        return {
          userResolutionSelected: '',
          userRate: 1,
          volume: 50,
        } as HPlayerConfig;
      }
    };

    const onMouseLeaveVideoWrap = () => {
      if (!touchDevice) {
        if (configMenu.current) {
          configMenu.current = false;
        }
      }
    };

    return (
      <VideoWrap
        ref={refWrap}
        className={[
          configMenu.current ? 'config-menu-show' : '',
          touchDevice ? 'touch' : '',
          showControls ? 'show' : '',
          pause ? 'paused' : '',
        ].join(' ')}
        onMouseLeave={onMouseLeaveVideoWrap}
      >
        <video
          ref={videoRef}
          controlsList="nodownload"
          autoPlay={autoPlay}
          poster={poster}
        >
          {sources
            .filter((s: HPlayerSource) => s.resolution === resolutionSelected)
            .map((s, index) => (
              <source key={index} src={s.url} type={s.type} />
            ))}
        </video>
        {videoReady && (
          <Fragment>
            <ControlsWrap
              className={[
                'controls-wrap',
                touchDevice ? 'touch' : '',
                showControls ? 'show' : '',
              ].join(' ')}
              onClick={() => {
                if (!touchDevice) {
                  playOrPause();
                } else {
                  setShowControls(true);
                }
              }}
            />
            <ControlProgress
              className={['controls-progress', touchDevice ? 'touch' : ''].join(
                ' '
              )}
            >
              <Slider
                value={progress}
                onChange={onChangeProgress}
                aria-labelledby="discrete-slider"
                step={0.1}
              />
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={progressBuffer}
              />
            </ControlProgress>
            <ControlsTouch
              className={[
                'controls',
                showControls ? 'show' : '',
                touchDevice ? 'touch' : '',
              ].join(' ')}
              onClick={() => {
                setShowControls(true);
              }}
            >
              <IconButton onClick={playOrPause}>
                {pause && <PlayArrowIcon />}
                {!pause && <PauseIcon />}
              </IconButton>
            </ControlsTouch>
            <Controls
              className={[
                'controls',
                touchDevice ? 'touch' : '',
                showControls ? 'show' : '',
              ].join(' ')}
            >
              <LeftControls className={[touchDevice ? 'touch' : ''].join(' ')}>
                <IconButton onClick={playOrPause} className="playOrPause">
                  {pause && <PlayArrowIcon />}
                  {!pause && <PauseIcon />}
                </IconButton>
                <VolumeWrap className={[touchDevice ? 'touch' : ''].join(' ')}>
                  <IconButton onClick={volumeToggle}>
                    {volume === 0 && <VolumeOffIcon />}
                    {volume > 0 && volume < 33 && <VolumeMuteIcon />}
                    {volume > 33 && volume < 66 && <VolumeDownIcon />}
                    {volume > 66 && volume <= 100 && <VolumeUpIcon />}
                  </IconButton>
                  <div className="slider-wrap">
                    <Slider
                      value={volume}
                      onChange={onChangeVolume}
                      aria-labelledby="continuous-slider"
                      min={0}
                      max={100}
                    />
                  </div>
                </VolumeWrap>
                <Timer>
                  {humanSeconds(currentTime)} / {humanSeconds(durationTime)}
                </Timer>
              </LeftControls>
              <CenterControls></CenterControls>
              <RightControls>
                {enablePictureInPicture && (
                  <IconButton onClick={onClickPicture}>
                    <PictureInPictureAltIcon />
                  </IconButton>
                )}
                <ConfigWrap>
                  <ConfigMenu className="config-menu">
                    <List component="nav" aria-label="resolutions" dense={true}>
                      {resolutions.length > 1 && (
                        <ListItem
                          button
                          onClick={() => setOpenResolution(!openResolution)}
                        >
                          <ListItemIcon>
                            <AspectRatioIcon color="inherit" />
                          </ListItemIcon>
                          <ListItemText
                            primary={locale.quality}
                            secondary={resolutionSelected}
                          />
                          {openResolution ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                      )}
                      <Collapse
                        in={openResolution}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="nav" disablePadding dense={true}>
                          {resolutions.map((resolution, index) => (
                            <ListItem
                              key={index}
                              button
                              onClick={() => changeResolution(resolution)}
                            >
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  tabIndex={-1}
                                  disableRipple
                                  checked={resolution === resolutionSelected}
                                  inputProps={{ 'aria-labelledby': '' }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={resolution} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                      <ListItem button onClick={() => setOpenRate(!openRate)}>
                        <ListItemIcon>
                          <SlowMotionVideoIcon color="inherit" />
                        </ListItemIcon>
                        <ListItemText
                          primary={locale.playbackSpeed}
                          secondary={`${rateSelected}x`}
                        />
                        {openRate ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={openRate} timeout="auto" unmountOnExit>
                        <List component="nav" disablePadding dense={true}>
                          {rates.map((rate, index) => (
                            <ListItem
                              key={index}
                              button
                              onClick={() => changeRate(rate)}
                              selected={rate === rateSelected}
                            >
                              <ListItemText primary={rate} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </List>
                  </ConfigMenu>
                  <Drawer
                    anchor="bottom"
                    open={configMenuTouch.current}
                    onClose={() => (configMenuTouch.current = false)}
                  >
                    <List
                      component="nav"
                      aria-label="resolutions"
                      dense={false}
                    >
                      {resolutions.length > 1 && (
                        <ListItem
                          button
                          onClick={() => setOpenResolution(!openResolution)}
                        >
                          <ListItemIcon>
                            <AspectRatioIcon color="inherit" />
                          </ListItemIcon>
                          <ListItemText
                            primary={locale.quality}
                            secondary={resolutionSelected}
                          />
                          {openResolution ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                      )}
                      <Collapse
                        in={openResolution}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="nav" disablePadding dense={false}>
                          {resolutions.map((resolution, index) => (
                            <ListItem
                              key={index}
                              button
                              onClick={() => changeResolution(resolution)}
                            >
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  tabIndex={-1}
                                  disableRipple
                                  checked={resolution === resolutionSelected}
                                  inputProps={{ 'aria-labelledby': '' }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={resolution} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                      <ListItem button onClick={() => setOpenRate(!openRate)}>
                        <ListItemIcon>
                          <SlowMotionVideoIcon color="inherit" />
                        </ListItemIcon>
                        <ListItemText
                          primary={locale.playbackSpeed}
                          secondary={`${rateSelected}x`}
                        />
                        {openRate ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={openRate} timeout="auto" unmountOnExit>
                        <List component="nav" disablePadding dense={false}>
                          {rates.map((rate, index) => (
                            <ListItem
                              key={index}
                              button
                              onClick={() => changeRate(rate)}
                              selected={rate === rateSelected}
                            >
                              <ListItemText primary={rate} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </List>
                  </Drawer>
                  <Button
                    color="inherit"
                    onClick={() => {
                      if (touchDevice) {
                        configMenuTouch.current = !configMenuTouch.current;
                      } else {
                        configMenu.current = !configMenu.current;
                      }
                    }}
                  >
                    {!configMenu.current && <SettingsIcon />}
                    {configMenu.current && <CloseIcon />}
                  </Button>
                </ConfigWrap>
                <IconButton onClick={onClickFullscreen}>
                  {!fullscreen ? <FullscreenIcon /> : <FullscreenExitIcon />}
                </IconButton>
              </RightControls>
            </Controls>
          </Fragment>
        )}
      </VideoWrap>
    );
  }
);

export default HPlayer;
