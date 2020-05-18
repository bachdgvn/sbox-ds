<p align="center">
    <a href="https://sb.1data.vn">
        <img width="200" src="./sbox-logo.jpg">
    </a>
</p>

<h1>
    Sbox Design System
    <h3>Collection of UI Components based on Sbox Design System and Vue.js 2.0.</h3>
</h1>

> This project was forked from the original ViewUI v4.2.0.

## Docs

**[4.x](https://www.iviewui.com)** | [3.x](http://v3.iviewui.com) | [2.x](http://v2.iviewui.com) | [1.x](http://v1.iviewui.com)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports Vue.js 2 and Vue.js 1.

### Install

Using npm:
```
npm install @bachdgvn/sbox-ds --save
```

## Usage

```vue
<template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```

Using css via `import`:

```js
import 'sbox-ds/dist/styles/sbox-ds.css';
```

## Compatibility

- Supports Vue.js 2.x, 1.x
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports TypeScript
- Supports [Electron](http://electron.atom.io/)
- Most components and features support IE9 and above browsers, some components and features do not support IE

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, ViewDesign
