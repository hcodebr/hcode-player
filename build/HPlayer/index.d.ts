import React from 'react';
export interface AnyObject {
    [key: string]: any;
}
export declare function humanSeconds(seconds: number): string;
export interface HPlayerConfig {
    userResolutionSelected: string;
    userRate: number;
}
export interface HPlayerSource {
    url: string;
    type?: string;
    resolution?: string;
}
declare const HPlayer: React.ForwardRefExoticComponent<{
    url: string | HPlayerSource | HPlayerSource[];
    autoPlay?: boolean;
    poster?: string;
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
} & React.RefAttributes<unknown>>;
export default HPlayer;
