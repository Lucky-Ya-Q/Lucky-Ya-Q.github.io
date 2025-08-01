---
title: MQTT
date: 2025-08-08 20:23:29
permalink: /pages/eb75bf/
categories:
  - 后端
tags:
  - 
---



[使用 Java SDK 接入](https://docs.emqx.com/zh/cloud/latest/connect_to_deployments/java_sdk.html)



```xml
<dependency>
    <groupId>org.eclipse.paho</groupId>
    <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
    <version>1.2.5</version>
</dependency>
```



```java
@Slf4j
@Configuration
public class MqttConfig {
    @Bean
    public MqttClient mqttClient() throws MqttException {
        String broker = "tcp://broker.emqx.io:1883";
        String clientId = MqttClient.generateClientId();
        // 持久化
        MemoryPersistence persistence = new MemoryPersistence();
        // MQTT 连接选项
        MqttConnectOptions connOpts = new MqttConnectOptions();
        // 设置认证信息
        connOpts.setUserName("emqx_user");
        connOpts.setPassword("emqx_password".toCharArray());

        MqttClient client = new MqttClient(broker, clientId, persistence);
        // 设置回调
        client.setCallback(new SampleCallback());
        // 建立连接
        client.connect(connOpts);
        // 订阅消息
        client.subscribe("test/topic");
        return client;
    }
}
```



```java
public class SampleCallback implements MqttCallback {
    // 连接丢失
    public void connectionLost(Throwable cause) {
        System.out.println("connection lost：" + cause.getMessage());
    }

    //  收到消息
    public void messageArrived(String topic, MqttMessage message) {
        System.out.println("Received message: \n  topic：" + topic + "\n  Qos：" + message.getQos() + "\n  payload：" + new String(message.getPayload()));
    }

    // 消息传递成功
    public void deliveryComplete(IMqttDeliveryToken token) {
        System.out.println("deliveryComplete");
    }
}
```



