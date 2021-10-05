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
export interface HPlayerLocale {
    quality: string;
    playbackSpeed: string;
}
declare const HPlayer: React.ForwardRefExoticComponent<{
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
} & React.RefAttributes<unknown>>;
export default HPlayer;
