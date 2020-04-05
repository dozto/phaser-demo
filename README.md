# Phaser Demo 项目说明

## 使用方法

```s
$ yarn  # 安装依赖，也可以使用 npm install
$ yarn start # 启动本地WEB服务器，启动后默认运行在localhost:8080
```

## 总目录结构

- 根目录中的`index.html`是主入口，连接到各个 demo 的主页(为子目录的`index.html`文件)
- 每个子目录为单独的一个游戏项目演示目录

### 项目目录

- `assets`: 用来存放各种资源，包括图片，粒子，Sprites，音效等等。
- `src`: 游戏开发的项目目录
  - `scenes`: 游戏中的各个场景目录
  - `game.js`: 游戏的主入口文件
