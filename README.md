# vue 数据可视化大屏
```
分辨率 11520*2160   可调整为 7680*1440 缩放1.5倍查看
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 目录结构
```
datavisualization
├─ .browserslistrc
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ static
│     ├─ 3dMap
│     ├─ case
│     └─ output
│        ├─ Globe.js
│        ├─ index.html
│        └─ world.json
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ style
│  │  ├─ font.css
│  │  ├─ index.scss
│  │  ├─ reset.scss
│  │  └─ ZhanKuQingKeHuangYouTi-2.ttf
│  ├─ utils
│  │  ├─ data
│  │  │  ├─ baseData.js
│  │  │  ├─ caseData.js
│  │  │  ├─ indexData.js
│  │  │  └─ proData.js
│  │  ├─ deepcopy.js
│  │  ├─ option.js
│  │  └─ rem.js
│  └─ views
│     ├─ 3dMap
│     │  └─ js
│     │     ├─ geo.js
│     │     ├─ globe.js
│     │     ├─ map.js
│     │     └─ world.json
│     ├─ components
│     │  ├─ Left.vue
│     │  ├─ LeftSub.vue
│     │  ├─ Map.vue
│     │  ├─ Right.vue
│     │  ├─ subcomponents
│     │  │  ├─ cdn1.vue
│     │  │  ├─ cdn2.vue
│     │  │  ├─ ddosgjlltj.vue
│     │  │  ├─ ddosgjqs.vue
│     │  │  ├─ dxccoos.vue
│     │  │  ├─ dxccoosrl.vue
│     │  │  ├─ dxccxx.vue
│     │  │  ├─ gpuyzj1.vue
│     │  │  ├─ gpuyzj2.vue
│     │  │  ├─ gxsjkmsql.vue
│     │  │  ├─ gxsjkmsql11.vue
│     │  │  ├─ gxsjkmsql12.vue
│     │  │  ├─ txfzjhueb1.vue
│     │  │  ├─ txfzjhueb2.vue
│     │  │  ├─ txyzj.vue
│     │  │  ├─ txyzjwlxx.vue
│     │  │  ├─ txyzjxx.vue
│     │  │  ├─ webyyfhq1.vue
│     │  │  ├─ webyyfhq2.vue
│     │  │  ├─ wlj1.vue
│     │  │  ├─ wlj2.vue
│     │  │  ├─ yccxx.vue
│     │  │  ├─ yjgs1.vue
│     │  │  ├─ yjgs2.vue
│     │  │  ├─ yzb1.vue
│     │  │  ├─ yzb2.vue
│     │  │  ├─ yzjjs.vue
│     │  │  ├─ yzjmmsw.vue
│     │  │  ├─ zsy.vue
│     │  │  └─ zsy2.vue
│     │  ├─ title.vue
│     │  └─ topos
│     │     └─ topo.vue
│     ├─ home
│     │  ├─ components
│     │  │  ├─ data.js
│     │  │  ├─ datamax.js
│     │  │  ├─ datamin.js
│     │  │  ├─ Left.vue
│     │  │  ├─ Map.vue
│     │  │  └─ Right.vue
│     │  └─ index.vue    //默认页
│     ├─ Index
│     │  └─ Index.vue    //案例页
│     ├─ operation       //iPad 控制页 WebSocket
│     │  ├─ components
│     │  │  └─ Left.vue
│     │  └─ index.vue
│     └─ product       //产品页
│        ├─ components
│        │  ├─ data.js
│        │  ├─ Left.vue
│        │  ├─ LeftSub.vue
│        │  ├─ LeftSub2.vue
│        │  ├─ Map.vue
│        │  └─ topol.vue
│        └─ index.vue
└─ vue.config.js

```
## 路由切换
因隐藏WebSocket功能，路由需要手动切换
```
 /            //默认页       分辨率 11520*2160  可调整为 7680*1440 缩放1.5倍查看
 /index       //案例页       分辨率 11520*2160  可调整为 7680*1440 缩放1.5倍查看
 /product     //产品页       分辨率 11520*2160  可调整为 7680*1440 缩放1.5倍查看
 /operation   //控制页 （ WebSocket失效 ）    分辨率 2736*1824  iPad的分辨率查看
```