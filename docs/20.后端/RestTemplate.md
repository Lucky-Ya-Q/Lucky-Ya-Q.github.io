---
title: RestTemplate
date: 2025-01-11 19:07:43
permalink: /pages/fb1561/
categories:
  - 后端
tags:
  - 
---



```java
@Bean
public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) {
    // 可以模拟所有请求头
    System.setProperty("sun.net.http.allowRestrictedHeaders", "true");
    return restTemplateBuilder
            // 建立连接超时时间
            .setConnectTimeout(Duration.ofSeconds(5))
            // 读取资源超时时间
            .setReadTimeout(Duration.ofSeconds(5))
            // 添加拦截器
            .additionalInterceptors((httpRequest, bytes, clientHttpRequestExecution) -> {
                HttpHeaders headers = httpRequest.getHeaders();
                String userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.20 Safari/537.36";
                headers.add(HttpHeaders.USER_AGENT, userAgent);
                return clientHttpRequestExecution.execute(httpRequest, bytes);
            }).build();
}
```

