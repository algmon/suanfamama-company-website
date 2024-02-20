---
sidebar_position: 46
title: 02月14日论文解读
---

### 论文标题
* SORA
* Video generation models as world simulators

### Authors
* Tim Brooks et. al. from OpenAI

### Abstract
* We explore large-scale training of generative models on video data. Specifically, we train text-conditional diffusion models jointly on videos and images of variable durations, resolutions and aspect ratios. We leverage a transformer architecture that operates on spacetime patches of video and image latent codes. Our largest model, Sora, is capable of generating a minute of high fidelity video. Our results suggest that scaling video generation models is a promising path towards building general purpose simulators of the physical world.

* This technical report focuses on (1) our method for turning visual data of all types into a unified representation that enables large-scale training of generative models, and (2) qualitative evaluation of Sora’s capabilities and limitations. Model and implementation details are not included in this report. Much prior work has studied generative modeling of video data using a variety of methods, including recurrent networks, generative adversarial networks, autoregressive transformers and diffusion models. These works often focus on a narrow category of visual data, on shorter videos, or on videos of a fixed size. Sora is a generalist model of visual data—it can generate videos and images spanning diverse durations, aspect ratios and resolutions, up to a full minute of high definition video.

### Key Notes
* OpenAI发布首个视频生成模型Sora；
* Sora是一种扩散模型，从噪声开始，能够一次生成整个视频或扩展视频的长度，关键之处在于一次生成多帧的预测，确保画面主体即使暂时离开视野也能保持不变；
* OpenAI表示，正在教AI理解和模拟运动中的物理世界，目标是训练模型来帮助人们解决需要现实世界交互的问题。比如一大群纸飞机在树林中飞过，Sora知道碰撞后会发生什么，并表现其中的光影变化；
* Sora目前仍难以准确模拟复杂场景的物理原理，并且无法理解因果关系；
* 在模型方面，与GPT模型类似，Sora使用了Transformer架构。在数据方面，OpenAI将视频和图像表示为patch，类似于GPT中的token。通过这种统一的数据表示方式，可以在比以前更广泛的视觉数据上训练模型，涵盖不同的持续时间、分辨率和纵横比；

#### References
* [SORA](https://openai.com/research/video-generation-models-as-world-simulators)