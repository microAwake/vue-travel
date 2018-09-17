#1.使用vue-cli创建一个名为vue_travel的工程
npm install --global vue-cli
vue init webpack vue_travel
cd vue_travel
npm install
npm run dev

#2.单页面应用SPA与多页面应用
SPA:首页加载较慢，seo不友好；但是页面间切换较快，因为不用加载格外的html页面，即不用发送多余的http请求；但是可以采用SSR(服务器渲染)技术避免缺点
多页面应用：特点与单页面应用相反。

#3.viewport,reset.css,border.css(解决一像素边框),移动设备上click事件300ms延迟（fastclick）
npm i fastclick --save(无论开发环境，还是线上环境，都需要这个依赖)

#4.npm i node-sass -S,npm i sass-loader -S

#5.  1rem=html font-size

#6. npm i vue-awesome-swiper@2.6.7 --save

https://github.com/surmon-china/vue-awesome-swiper

#7 下载Mint-ui来使用swipe功能(轮播图)

#8 npm i axios -S
proxyTable: {
      //这里作了/api的请求处理替换
      '/api':{
        target:'http://localhost:8080',
        pathRewrite:{
          '^/api':'static/mock'
        }
      }
    },


#9 npm i better-scroll -S

#10 npm i vuex -S

