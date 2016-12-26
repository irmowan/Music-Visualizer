## Music Visualizer

音乐可视化

GitHub: [Music Visualizer](https://github.com/irmowan/Music-Visualizer)

Demo: [Music Visualizer](http://irmo.me/Music-Visualizer/)

#### Introduction

项目用圆圈的变动表示音乐节奏，每一个圆圈表示该时刻的某一个频率，圆圈的位置随机，大小和透明度表示了某个频率的强度，半透明可以让页面更加美观。

页面有固定的刷新频率，在音乐暂停、播放、结束时提供了比较缓和的转场。

对于钢琴曲等只在某几个频率上有音强的音乐，圈圈较少且较大；而对于歌手演唱的流行歌曲，因频率覆盖范围广，圆圈较多，大小不一。这个样式适合节奏感较强的音乐。

#### Usage

打开网页，点击”选择文件“， 上传某个音频文件(如.mp3文件)，点击播放即可。

空格键可以控制暂停。

#### Installation

Clone源代码，直接在Chrome浏览器执行即可。

#### File Description

```
├── LICENSE
├── Readme.md
├── index.html
├── css
│   └── style.css
└── js
    ├── analyzer.js
    ├── draw.js
    └── main.js
```

其中，`js`文件夹下是核心代码。

- `main.js`用来增加监听事件，增加文件支持
- `analyzer.js`采用了JavaScript自带的Web Audio API，主要用于进行频域分析(例如FFT)，以将音频展开成频域的数据以供可视化使用。
- `draw.js` 是主要的绘制模块，采用了JS原生的画布canvas绘制。里面预定义了很多参数，包括圆圈的颜色(colors)，频率绘图间距(frequencyInterval)，透明度的初始值(initOpacity)、变化率(opacityRate)和界限(maxOpacity，防止不透明覆盖)，画布的刷新率(refreshRate)，圆圈大小变化速率(sizeRate)和界限(sizeThreshold)，以及圆圈本身的生命周期(lifeThreshold,以避免某个频率上长期有高数值导致的圆圈不变动)。这些参数用来调整可视化，可以通过修改参数来进行样式的调整。

#### License

Under GPL-3.0

---

Author: [irmo](https://github.com/irmowan)

Date: 2016.10