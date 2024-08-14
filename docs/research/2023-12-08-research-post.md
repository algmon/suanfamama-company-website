---
sidebar_position: 12
title: LLM Example - GPT4 Vision
---

## Paper Title
[GPT4 Vision](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/GPTV.System.Card.pdf)

#### Authors
OpenAI

#### Affiliations
OpenAI

#### Date
Sep 25, 2023

#### Abstract
GPT-4 with vision (GPT-4V) enables users to instruct GPT-4 to analyze image inputs provided by the user, and is the latest capability we are making broadly available. Incorporating additional modalities (such as image inputs) into large language models (LLMs) is viewed by some as a key frontier in artificial intelligence research and development [1, 2, 3]. Multimodal LLMs offer the possibility of expanding the impact of language-only systems with novel interfaces and capabilities, enabling them to solve new tasks and provide novel experiences for their users.

#### 1. Introduction

#### 2. Deployment Preparation

![](./20231208/fig.1.png)

#### 3. Conclusion
GPT-4V’s capabilities pose exciting opportunities and novel challenges. Our deployment preparation approach has targeted assessment and mitigations of risks related to images of people such as person identification, biased outputs from images of people including representational harms or allocational harms that may stem from such inputs. Additionally, we have studied the model’s capability jumps in certain high-risk domains such as medicine and scientific proficiency.

#### 4. Acknowledgements

References

#### 5Ws
##### 1. What is the problem?
The problem addressed in the GPT-4V system card is the integration of vision capabilities (image analysis) with the existing text-based capabilities of GPT-4, resulting in a multimodal large language model (LLM) called GPT-4V. This integration presents unique challenges in terms of safety, accuracy, and the responsible deployment of AI technology.

##### 2. Why is the problem IMPORTANT?
The problem is important because incorporating image inputs into LLMs significantly expands their functionality, offering novel interfaces and capabilities for solving new tasks and enhancing user experiences. However, it also introduces complex safety risks, such as ensuring accurate and non-biased interpretations of images, managing privacy concerns, and avoiding the propagation of harmful content or disinformation.

##### 3. Why is the problem DIFFICULT?
The problem is difficult due to several factors:
* Multimodality: Integrating text and vision processing in a cohesive manner is technically challenging.
* Safety Risks: Multimodal models expand the risk surface compared to text-only models, introducing issues like hallucinations, biases, and misinformation.
* Ethical and Privacy Concerns: Handling images, especially of people, raises privacy issues and ethical considerations around bias and fairness.
* Complexity of Real-World Scenarios: Accurately interpreting and responding to the vast and nuanced real-world visual information is inherently complex.

##### 4. What are the OLD techniques?
The document does not explicitly detail old techniques but implies them through the advancements presented. The "old techniques" would be earlier versions of language models without vision capabilities, like previous iterations of GPT models (e.g., GPT-3) that relied solely on text-based inputs and processing.

##### 5. Advantages and Disadvantages of the new techniques compared to the old ones?
Advantages:
* Expanded Capabilities: GPT-4V can analyze and interpret both text and images, allowing for more diverse applications.
* Enhanced User Experience: Offers novel experiences and solves new tasks, such as aiding visually impaired users through the Be My Eyes application.

Disadvantages:
* Increased Complexity in Safety Management: Multimodal inputs introduce more sophisticated safety challenges.
* Higher Risk of Bias and Misinformation: Visual data can amplify biases and misinformation risks, especially in sensitive areas like medical advice or stereotyping.
* Technical Limitations: GPT-4V sometimes struggles with complex visual data, leading to errors or misinterpretations.