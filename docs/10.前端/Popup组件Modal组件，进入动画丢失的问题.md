---
title: Popup组件Modal组件，进入动画丢失的问题
date: 2025-01-11 18:34:55
permalink: /pages/ee9457/
sidebar: auto
categories:
  - 前端
tags:
  - uView
---

[https://github.com/umicro/uView2.0/issues/545](https://github.com/umicro/uView2.0/issues/545)

这个是因为动画组件u-transition使用了v-if的判断，h5进场和离场动画表现正常，而其他端（如微信小程序）进场动画失效，离场动画正常。所以Popup组件、Modal组件等用到动画组件的都会有这个问题。
解决办法：找到u-transition组件里面的transition.js第41行有个H5端的判断删掉，await uni.$u.sleep(20)让它应用于全端。问题就解决了~
