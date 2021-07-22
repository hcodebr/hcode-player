import React from 'react';
import { Meta } from '@storybook/react';
import { HPlayer } from '../src';

const meta: Meta = {
  title: 'Default',
  component: HPlayer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default = () => (
  <HPlayer url="https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4" />
);

export const MultipleResolution = () => (
  <HPlayer
    url={[
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_1080.mp4',
        resolution: '1080p',
      },
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4',
        resolution: '720p',
      },
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_360.mp4',
        resolution: '360p',
      },
    ]}
  />
);

export const AutoPlay = () => (
  <HPlayer
    autoPlay={true}
    url={[
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_1080.mp4',
        resolution: '1080p',
      },
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4',
        resolution: '720p',
      },
      {
        url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_360.mp4',
        resolution: '360p',
      },
    ]}
  />
);
