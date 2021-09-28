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
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import SettingsIcon from '@material-ui/icons/Settings';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import PauseIcon from '@material-ui/icons/Pause';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import CloseIcon from '@material-ui/icons/Close';
import { Fragment, useRef, useState } from 'react';
import { useEffect } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  .controls-progress {
    opacity: 0;
  }
  .controls-wrap {
    opacity: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 66%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .controls {
    transform: translateY(64px);
  }
  &.config-menu-show {
    .config-menu {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &:hover {
    .controls-progress {
      opacity: 1;
    }
    .controls-wrap {
      opacity: 1;
    }
    .controls {
      transform: translateY(0);
    }
  }
  video {
    width: 100%;
  }
`;

const ControlsWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  bottom: 0;
  z-index: 2;
  height: 100%;
`;

const Controls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  width: 100%;
  bottom: 0;
  z-index: 3;
  color: #fff;
  .MuiIconButton-root {
    color: #fff;
  }
`;

const LeftControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CenterControls = styled.div`
  flex-grow: 1;
`;

const RightControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const VolumeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .slider-wrap {
    overflow: hidden;
    width: 0;
    display: flex;
    align-items: center;
    min-height: 64px;
  }
  &:hover {
    .slider-wrap {
      padding: 0 20px;
      width: 140px;
    }
  }
`;

const VolumeSliderWrap = styled.div``;

const ControlProgress = styled.div`
  position: absolute;
  min-height: 96px;
  width: calc(100% - 40px);
  padding: 10px 20px;
  bottom: 0;
  z-index: 3;
  > span {
    position: absolute;
    z-index: 5;
  }
  > div {
    position: absolute;
    width: 100%;
    top: 22px;
    z-index: 4;
  }
`;

const ConfigWrap = styled.div`
  position: relative;
`;
const ConfgMenu = styled.div`
  position: absolute;
  bottom: 32px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(200px);
  .MuiListItem-button {
    text-align: right;
  }
  svg {
    color: #fff;
  }
`;

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
}

export interface HPlayerSource {
  url: string;
  type?: string;
  resolution?: string;
}

const HPlayer = React.forwardRef(
  ({
    url,
    autoPlay = false,
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
  }: {
    url: string | HPlayerSource | HPlayerSource[];
    autoPlay?: boolean;
    onReady?: (video: HTMLVideoElement) => {};
    onSuspend?: (event: any) => {};
    onStalled?: (event: any) => {};
    onSeeking?: (event: any) => {};
    onSeeked?: (event: any) => {};
    onEnded?: (event: any) => {};
    onError?: (event: any) => {};
    onCanPlayThrough?: (event: any) => {};
    onCanPlay?: (event: any) => {};
    onAbort?: (event: any) => {};
    onLoadedData?: (event: any) => {};
    onLoadedMetaData?: (event: any) => {};
    onPlaying?: (event: any) => {};
    onLoadStart?: (event: any) => {};
    onWaiting?: (event: any) => {};
    onTimeUpdate?: (event: any) => {};
    onPlay?: (event: any) => {};
    onPause?: (event: any) => {};
    onVolumeChange?: (event: any) => {};
    onDurationChange?: (event: any) => {};
    onProgress?: (event: any) => {};
    onRateChange?: (event: any) => {};
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
    const [resolutions, setResolutions] = useState<string[]>([]);
    const [resolutionSelected, setResolutionSelected] = useState('');
    const [rateSelected, setRateSelected] = useState<number>(1);
    const [rates] = useState<number[]>([
      0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2,
    ]);
    const [pause, setPause] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [configMenu, setConfigMenu] = useState(false);
    const [volume, setVolume] = useState(50);
    const [progressBuffer, setProgressBuffer] = useState(0);
    const [progress, setProgress] = useState(0);
    const [videoReady, setVideoReady] = useState(false);
    const [openResolution, setOpenResolution] = useState(false);
    const [openRate, setOpenRate] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

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
      let rate = rateSelected;

      const configs = getConfigs();

      if (configs && configs.userRate && rate !== configs.userRate) {
        rate = configs.userRate;
        setRateSelected(configs.userRate);
      }
    }, []);

    useEffect(() => {
      if (!configMenu) {
        setOpenResolution(false);
        setOpenRate(false);
      }
    }, [configMenu]);
    useEffect(() => setSources(getSources(url)), [url]);

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

    useEffect(
      () =>
        setResolutions(
          removeDuplicates(
            sources.map((s) => (s.resolution ? s.resolution : ''))
          )
        ),
      [sources]
    );

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
          if (typeof onPlay === 'function') {
            onPlay(e);
          }
        });

        videoEl.addEventListener('pause', (e: any) => {
          setPause(true);
          if (typeof onPause === 'function') {
            onPause(e);
          }
        });

        videoEl.addEventListener('volumechange', (e: any) => {
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

        if (typeof onReady === 'function') {
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
      const videoEl = videoRef.current as any;
      await videoEl.requestPictureInPicture();
    };

    const onClickFullscreen = () => {
      const videoEl = videoRef.current as any;
      if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
      } else if (videoEl.mozRequestFullScreen) {
        videoEl.mozRequestFullScreen();
      } else if (videoEl.webkitRequestFullscreen) {
        videoEl.webkitRequestFullscreen();
      } else if (videoEl.msRequestFullscreen) {
        videoEl.msRequestFullscreen();
      }
    };

    const changeRate = (r: number) => {
      setRateSelected(r);
      setConfigMenu(false);
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
      setConfigMenu(false);
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
        } as HPlayerConfig;
      }
    };

    const onMouseLeaveVideoWrap = () => {
      if (configMenu) {
        setConfigMenu(false);
      }
    };

    return (
      <VideoWrap
        className={[configMenu ? 'config-menu-show' : ''].join(' ')}
        onMouseLeave={onMouseLeaveVideoWrap}
      >
        <video ref={videoRef} controlsList="nodownload" autoPlay={autoPlay}>
          {sources
            .filter((s: HPlayerSource) => s.resolution === resolutionSelected)
            .map((s, index) => (
              <source key={index} src={s.url} type={s.type} />
            ))}
        </video>
        {videoReady && (
          <Fragment>
            <ControlsWrap className="controls-wrap" onClick={playOrPause} />
            <ControlProgress className="controls-progress">
              <Slider
                value={progress}
                onChange={onChangeProgress}
                aria-labelledby="continuous-slider"
                step={0.1}
              />
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={progressBuffer}
              />
            </ControlProgress>
            <Controls className="controls">
              <LeftControls>
                <IconButton onClick={playOrPause}>
                  {pause && <PlayArrowIcon />}
                  {!pause && <PauseIcon />}
                </IconButton>
                <VolumeWrap>
                  <IconButton onClick={volumeToggle}>
                    {volume === 0 && <VolumeOffIcon />}
                    {volume > 0 && volume < 100 && <VolumeDownIcon />}
                    {volume === 100 && <VolumeUpIcon />}
                  </IconButton>
                  <VolumeSliderWrap className="slider-wrap">
                    <Slider
                      value={volume}
                      onChange={onChangeVolume}
                      aria-labelledby="continuous-slider"
                    />
                  </VolumeSliderWrap>
                </VolumeWrap>
                <Timer>
                  {humanSeconds(currentTime)} / {humanSeconds(durationTime)}
                </Timer>
              </LeftControls>
              <CenterControls></CenterControls>
              <RightControls>
                <IconButton onClick={onClickPicture}>
                  <PictureInPictureAltIcon />
                </IconButton>
                <ConfigWrap>
                  <ConfgMenu className="config-menu">
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
                            primary={`Qualidade ${resolutionSelected}`}
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
                        <ListItemText primary={`Reprodução ${rateSelected}x`} />
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
                  </ConfgMenu>

                  <Button
                    color="inherit"
                    onClick={() => setConfigMenu(!configMenu)}
                  >
                    {!configMenu && <SettingsIcon />}
                    {configMenu && <CloseIcon />}
                  </Button>
                </ConfigWrap>
                <IconButton onClick={onClickFullscreen}>
                  <FullscreenIcon />
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
