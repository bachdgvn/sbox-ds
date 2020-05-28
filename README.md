<p align="center">
    <a href="https://sb.1data.vn">
        <img width="200" src="./sbox-logo.jpg"/>
    </a>
</p>
[![Run on Repl.it](https://repl.it/badge/github/bachdgvn/sbox-ds)](https://repl.it/github/bachdgvn/sbox-ds)

<h1>
    Sbox Design System
    <h3>Collection of UI Components based on Sbox Design System and Vue.js 2.0.</h3>
</h1>

> This project was forked from the original ViewUI v4.2.0.

## Docs
> The project is updating by the time and we have not developed a docs yet.
> So if you want to use this project, you can follow viewUI v4.2.0 docs for usage guide.
**[4.x](https://www.iviewui.com)** | [3.x](http://v3.iviewui.com) | [2.x](http://v2.iviewui.com) | [1.x](http://v1.iviewui.com)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

### Install

Using npm:
```
npm install @bachdgvn/sbox-ds --save
```

## Quickstart

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import SboxDS from '@bachdgvn/sbox-ds';
import '@bachdgvn/sbox-ds/dist/styles/sbox-ds.css';

Vue.use(VueRouter);
Vue.use(SboxDS);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
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

Copyright (c) 2020, Sbox UI Team
