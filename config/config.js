import { defineConfig } from 'umi';
import proxy from './proxy';
import router from './router';

const {REACT_APP_ENV} = process.env;

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    hash: true,
    history: {
        type: 'hash'
    },
    antd: {
        dark: true,
        compact: true,
    },
    routes: router,
    define: {
        CESIUM_BASE_URL: ''
    },
    proxy: proxy[REACT_APP_ENV || 'dev'],
    publicPath: './',
    base: '/',
    runtimePublicPath: true,
    fastRefresh: {},
});
