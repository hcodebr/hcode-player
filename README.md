# Hcode Player with React and Material UI

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hcodebr/hcode-player/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/hcode-player.svg)](https://www.npmjs.com/package/hcode-player)

Video Player Component made with React and [@material-ui/core](https://material-ui.com/) by [Hcode](https://hcode.com.br).

## Installation

```sh
npm install hcode-player
```

or yarn

```sh
yarn add hcode-player
```

## Demo

[![Player Screenshot](https://firebasestorage.googleapis.com/v0/b/cobalt-alcove-169202.appspot.com/o/hplayer%2Fhplayer.jpg?alt=media&token=463036a6-30e9-400b-88da-ecfd00e0c354)](https://codesandbox.io/s/wild-silence-bv685?file=/src/App.js)

[![Edit hcode-player demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wild-silence-bv685?file=/src/App.js)

## Usage

Basic use:

```js
import React from 'react';
import { HPlayer } from 'hcode-player';

const App = () => {
  return (
    <HPlayer url="https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4">
  );
};

export default App;
```

Player with multiple video resolutions:

```js
import React, { useState } from "react";
import { HPlayer } from 'hcode-player';

const App = () => {

  const [sources, setSources] = useState([
    {
      url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_1080.mp4',
      resolution: '1080p',
    },{
      url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4',
      resolution: '720p',
    },{
      url: 'https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_360.mp4',
      resolution: '360p',
    }
  ]);

  return (
    <HPlayer url={sources}>
  );
};

export default App;
```

With autoplay:

```js
import React from 'react';
import { HPlayer } from 'hcode-player';

const App = () => {
  return (
    <HPlayer autoPlay={true} url="https://d2z8nku95gg9lc.cloudfront.net/IN04_CS_Cores_720.mp4">
  );
};

export default App;
```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

## Sponsoring

Hcode Treinamentos
[![hcode.com.br](https://firebasestorage.googleapis.com/v0/b/cobalt-alcove-169202.appspot.com/o/hcode.png?alt=media&token=1e26c487-1321-4594-9dea-f636fb2f1831)](https://hcode.com.br)
