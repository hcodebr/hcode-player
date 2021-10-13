import { HPlayer, HPlayerSource } from '../src/index';

export default {
  title: 'HPlayer',
  component: HPlayer,
};

const sources = [
  {
    url:
      'https://d24pcf9vay50b1.cloudfront.net/HTML5/AG01_HTML5_Atributos Globais_1080.mp4',
    resolution: '1080p',
  },
  {
    url:
      'https://d24pcf9vay50b1.cloudfront.net/HTML5/AG01_HTML5_Atributos Globais_720.mp4',
    resolution: '720p',
  },
  {
    url:
      'https://d24pcf9vay50b1.cloudfront.net/HTML5/AG01_HTML5_Atributos Globais_480.mp4',
    resolution: '480p',
  },
];

export const Primary = () => <HPlayer url={sources} />;
