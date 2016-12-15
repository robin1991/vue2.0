# vue-simple

> vue2.0 + vue-router2.0 + vue-resource1.0 + vuex2.0

## Intro

vue2.0 + vue-router2.0 + vue-resource1.0 + vuex2.0 模版

webpack 可配置本地开发代理设置

[IMG](http://img.haimi.com/FjuICepS0t7nUglBlEgQ-XU0il5L)

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). 

``` bash
$ npm install -g vue-cli
$ vue init blue0728/vue-simple my-project
$ cd my-project
$ npm install
$ npm run dev
```

## WebPack proxy config

``` 
devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: { //配置代理，本地代理接口开发使用
        '/api': {
            target: 'http://115.236.16.44/' //  http://localhost:8080/api/xx/xx  =>  115.236.16.44/api/xx/xx 
        }
    }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
