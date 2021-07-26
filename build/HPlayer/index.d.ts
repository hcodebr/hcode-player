/// <reference types="react" />
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
declare const HPlayer: ({ url, autoPlay, }: {
    url: string | HPlayerSource | HPlayerSource[];
    autoPlay?: boolean;
}) => JSX.Element;
export default HPlayer;
