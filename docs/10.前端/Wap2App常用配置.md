---
title: Wap2App常用配置
date: 2025-01-11 18:41:21
permalink: /pages/3f2260/
categories:
  - 前端
tags:
  - uni-app
---



```html
<template>
	<web-view src="https://bjsubway.shanyexia.top"></web-view>
</template>
```



## 适配状态栏

```js
onLoad() {
    let height = 0;
    let statusbar = 0;
    uni.getSystemInfo({
        success: (sysinfo) => {
            statusbar = sysinfo.statusBarHeight;
            height = sysinfo.windowHeight;
        }
    });
    let currentWebview = this.$scope.$getAppWebview();
    setTimeout(function() {
        var wv = currentWebview.children()[0];
        wv.setStyle({
            top: statusbar,
            height: height - statusbar,
        })
    }, 200);
}
```



## 适配返回健

```js
data() {
    return {
        lastBackTime: 0
    }
},
onBackPress() {
    let currentWebview = this.$scope.$getAppWebview();
    var wv = currentWebview.children()[0];
    if (wv) {
        // 检查是否可以返回
        wv.canBack((e) => {
            if (e.canBack) {
                // 如果可以返回，执行webview的返回
                wv.back()
            } else {
                // 如果不可以返回，检查是否是双击返回
                const now = Date.now()
                if (now - this.lastBackTime < 2000) {
                    // 如果是双击，退出应用
                    plus.runtime.quit()
                } else {
                    // 如果是第一次点击，提示再按一次退出
                    uni.showToast({
                        title: '再按一次退出应用',
                        icon: 'none',
                        duration: 2000,
                        position: 'bottom'
                    })
                    this.lastBackTime = now
                }
            }
        })
        // 总是阻止默认返回行为，因为我们自己处理返回逻辑
        return true
    }
    return false
}
```

