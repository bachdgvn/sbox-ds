<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/view-ui-logo-new.svg">
    </a>
</p>

<h1>
Sbox Design System
    <h3>Collection of UI Components based on Sbox Design System and Vue.js 2.0.</h3>
</h1>

> This project is based on the original ViewUI v4.2.0.

## Docs

**[4.x](https://www.iviewui.com)** | [3.x](http://v3.iviewui.com) | [2.x](http://v2.iviewui.com) | [1.x](http://v1.iviewui.com)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

## Install

We provide an [View UI plugin](https://github.com/iview-design/vue-cli-plugin-viewui) for Vue CLI 3, which you can use to quickly build an ViewUI-based project.

We also provide a starter kit [view-ui-project](https://github.com/iview-design/view-ui-project) for you.

### Install View UI

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

- Supports Vue.js 2.x
- Supports Vue.js 1.x - [visit 1.0 docs](http://v1.iviewui.com/)
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports TypeScript
- Supports [Electron](http://electron.atom.io/)
- Most components and features support IE9 and above browsers, some components and features do not support IE

## Ecosystem Links

- [View UI Pro](https://pro.iviewui.com/pro)
- [View UI Admin Pro](https://pro.iviewui.com/admin-pro)
- [Developer](https://dev.iviewui.com)
- [Run](https://run.iviewui.com)
- [iView-Loader](https://github.com/iview/iview-loader)
- [ViewUI-Plugin](https://github.com/iview/vue-cli-plugin-iview)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, ViewDesign
