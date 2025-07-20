---
prev: false
next: false
layout: doc
outline: [2, 3]
sidebar: false
---

# vitepress-youtube-embed

Vue component to embed responsive YouTube videos in VitePress markdown pages using a simple syntax.

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-youtube-embed) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-youtube-embeds) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-youtube-embed)

<p align="center">
  <img src="/demo.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

## Installation

```sh [npm]
npm i @miletorix/vitepress-youtube-embed
```

## Usage

### Configuration

```typescript  [docs/.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
 
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed' // [!code ++]
import '@miletorix/vitepress-youtube-embed/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('YouTubeEmbed', YouTubeEmbed) // [!code ++]
  }
}
```

### YouTube Embed

```vue
<YouTubeEmbed video-id="video-id..." />
```


## Example



**Source**: 

youtu.be/<span style="color: CornflowerBlue">**dQw4w9WgXcQ**</span>?feature=shared

**or** 

youtube.com/watch?v=<span style="color: CornflowerBlue">**dQw4w9WgXcQ**</span>&list=RDdQw4w9WgXcQ&start_radio=1

**Input**

```vue [example.md]
<YouTubeEmbed video-id="dQw4w9WgXcQ" />
```

**Output**

<YouTubeEmbed video-id="dQw4w9WgXcQ" />