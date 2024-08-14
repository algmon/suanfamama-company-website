---
sidebar_position: 15
title: EMNLP 2023 Papers
---

## Papers in EMNLP 2023
### Paper 01
* 最佳长论文
* [Label Words are Anchors: An Information Flow Perspective for Understanding In-Context Learning](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/ANCHORS.2305.14160.pdf)

![](./20231212/fig.1.1.png)

#### Abstract
In-context learning (ICL) emerges as a promising capability of large language models (LLMs) by providing them with demonstration examples to perform diverse tasks. However, the underlying mechanism of how LLMs learn from the provided context remains under-explored. In this paper, we investigate the working mechanism of ICL through an information flow lens. Our findings reveal that label words in the demonstration examples function as anchors: (1) semantic information aggregates into label word representations during the shallow computation layers’ processing; (2) the consolidated information in label words serves as a reference for LLMs’ final predictions. Based on these insights, we introduce an anchor re-weighting method to improve ICL performance, a demonstration compression technique to expedite inference, and an analysis framework for diagnosing ICL errors in GPT2-XL. The promising applications of our findings again validate the uncovered ICL working mechanism and pave the way for future studies

#### Github Repo

### Paper 02
* 杰出论文奖
* [Is ChatGPT Good at Search? Investigating Large Language Models as Re-Ranking Agents](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/SEARCH.2304.09542.pdf)

![](./20231212/fig.2.1.png)

#### Abstract
Large Language Models (LLMs) have demonstrated remarkable zero-shot generalization across various language-related tasks, including search engines. However, existing work utilizes the generative ability of LLMs for Information Retrieval (IR) rather than direct passage ranking. The discrepancy between the pretraining objectives of LLMs and the ranking objective poses another challenge. In this paper, we first investigate generative LLMs such as ChatGPT and GPT-4 for relevance ranking in IR. Surprisingly, our experiments reveal that
properly instructed LLMs can deliver competitive, even superior results to state-of-the-art supervised methods on popular IR benchmarks. Furthermore, to address concerns about data contamination of LLMs, we collect a new test set called NovelEval, based on the latest knowledge and aiming to verify the model’s ability to rank unknown knowledge. Finally, to improve efficiency in real-world applications, we delve into the potential for distilling the ranking capabilities of ChatGPT into small specialized models using a permutation distillation scheme. Our evaluation results turn out that a distilled 440M model outperforms a 3B supervised model on the BEIR benchmark.

#### Github Repo
https://github.com/sunnweiwei/RankGPT

### Paper 03
* [LINC: A Neurosymbolic Approach for Logical Reasoning by Combining Language Models with First-Order Logic Provers](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/LINC.2310.15164.pdf)

![](./20231212/fig.3.1.png)

#### Abstract
Logical reasoning, i.e., deductively inferring the truth value of a conclusion from a set of premises, is an important task for artificial intelligence with wide potential impacts on science, mathematics, and society. While many prompting-based strategies have been proposed to enable Large Language Models (LLMs) to do such reasoning more effectively, they still appear unsatisfactory, often failing in subtle and unpredictable ways. In this work, we investigate the validity of instead reformulating such tasks as modular neurosymbolic programming, which we call LINC: Logical Inference via Neurosymbolic Computation. In LINC, the LLM acts as a semantic parser, translating premises and conclusions from natural language to expressions in first-order logic. These expressions are then offloaded to an external theorem prover, which symbolically performs deductive inference. Leveraging this approach, we observe significant performance gains on FOLIO and a balanced subset of ProofWriter for three different models in nearly all experimental conditions we evaluate. On ProofWriter, augmenting the comparatively small open-source StarCoder+ (15.5B parameters) with LINC even outperforms GPT-3.5 and GPT-4 with Chain-of-Thought (CoT) prompting by an absolute 38% and 10%, respectively. When used with GPT-4, LINC scores 26% higher than CoT on ProofWriter while performing comparatively on FOLIO. Further analysis reveals that although both methods on average succeed roughly equally often on this dataset, they exhibit distinct and complementary failure modes. We thus provide promising evidence for how logical reasoning over natural language can be tackled through jointly leveraging LLMs alongside symbolic provers. All corresponding code is publicly available.

#### Github Repo

### Paper 04
* [PaperMage: A Unified Toolkit for Processing, Representing, and Manipulating Visually-Rich Scientific Documents](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/MAGE.2023.emnlp-demo.45.pdf)

![](./20231212/fig.4.1.png)

#### Abstract
Despite growing interest in applying natural language processing (NLP) and computer vision (CV) models to the scholarly domain, scientific documents remain challenging to work with. They’re often in difficult-to-use PDF formats, and the ecosystem of models to process them is fragmented and incomplete. We introduce papermage, an open-source Python toolkit for analyzing and processing visually-rich, structured scientific documents. papermage offers clean and intuitive abstractions for seamlessly representing and manipulating both textual and visual document elements. papermage achieves this by integrating disparate state-of-the-art NLP and CV models into a unified framework, and provides turn-key recipes for common scientific document processing use-cases. papermage has powered multiple research prototypes of AI applications over scientific documents, along with Semantic Scholar’s large-scale production system for processing millions of PDFs.

#### Github Repo
https://github.com/allenai/papermage

### Paper 05
* [Ignore This Title and HackAPrompt: Exposing Systemic Vulnerabilities of LLMs through a Global Scale Prompt Hacking Competition](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/HACK.2311.16119.pdf)

![](./20231212/fig.5.1.png)

#### Abstract
Large Language Models (LLMs) are deployed in interactive contexts with direct user engagement, such as chatbots and writing assistants. These deployments are vulnerable to prompt injection and jailbreaking (collectively, prompt hacking), in which models are manipulated to ignore their original instructions and follow potentially malicious ones. Although widely acknowledged as a significant security threat, there is a dearth of large-scale resources and quantitative studies on prompt hacking. To address this lacuna, we launch a global prompt hacking competition, which allows for freeform human input attacks. We elicit 600K+ adversarial prompts against three state-of-the-art LLMs. We describe the dataset, which empirically verifies that current LLMs can indeed be manipulated via prompt hacking. We also present a comprehensive taxonomical ontology of the types of adversarial prompts.

#### Github Repo

### Paper 06
* [Personalized Dense Retrieval on Global Index for Voice-enabled Conversational Systems](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/VOICE.2023.emnlp-industry.9.pdf)

![](./20231212/fig.6.1.png)

#### Abstract
Voice-controlled AI dialogue systems are susceptible to noise from phonetic variations and failure to resolve ambiguous entities. Typically, personalized entity resolution (ER) and/or query rewrites (QR) are deployed to recover from these error modes. Previous work in this field achieves personalization by constraining retrieval search space to personalized indices built from user’s historical interactions with the device. While constrained retrieval achieves high precision, predictions are limited to entities in recent user history, which offers low coverage of future requests. Further, maintaining individual indices for a large number of users is memory intensive and difficult to scale. In this work, we propose a personalized entity retrieval system that is robust to phonetic noise and ambiguity but is not limited to a personalized index. We achieve this by embedding user listening preferences into a contextual query embedding used in retrieval. We demonstrate our model’s ability to correct multiple error modes and show 91% improvement over baseline on the entity retrieval task. Finally, we optimize the end-to-end approach to fit within online latency constraints while maintaining gains in performance.

#### Github Repo

### Paper 07
* [Fabricator: An Open Source Toolkit for Generating Labeled Training Data with Teacher LLMs](http://arxiv.org/pdf/2309.09582v1)

![](./20231212/fig.7.1.png)

#### Abstract
Most NLP tasks are modeled as supervised learning and thus require labeled training data to train effective models. However, manually producing such data at sufficient quality and quantity is known to be costly and time-intensive. Current research addresses this bottleneck by exploring a novel paradigm called zero-shot learning via dataset generation. Here, a powerful LLM is prompted with a task description to generate labeled data that can be used to train a downstream NLP model. For instance, an LLM might be prompted to "generate 500 movie reviews with positive overall sentiment, and another 500 with negative sentiment." The generated data could then be used to train a binary sentiment classifier, effectively leveraging an LLM as a teacher to a smaller student model. With this demo, the authors introduce Fabricator, an open-source Python toolkit for dataset generation. Fabricator implements common dataset generation workflows, supports a wide range of downstream NLP tasks (such as text classification, question answering, and entity recognition), and is integrated with well-known libraries to facilitate quick experimentation. With Fabricator, the authors aim to support researchers in conducting reproducible dataset generation experiments using LLMs and help practitioners apply this approach to train models for downstream tasks.

#### Github Repo

### Paper 08
* [RaLLe: A Framework for Developing and Evaluating Retrieval-Augmented Large Language Models.](http://arxiv.org/pdf/2308.10633v2)

![](./20231212/fig.8.1.png)

#### Abstract
Retrieval-augmented large language models (R-LLMs) combine pre-trained large language models (LLMs) with information retrieval systems to improve the accuracy of factual question-answering. However, current libraries for building R-LLMs provide high-level abstractions without sufficient transparency for evaluating and optimizing prompts within specific inference processes such as retrieval and generation. To address this gap, the authors present RaLLe, an open-source framework designed to facilitate the development, evaluation, and optimization of R-LLMs for knowledge-intensive tasks. With RaLLe, developers can easily develop and evaluate R-LLMs, improving hand-crafted prompts, assessing individual inference processes, and objectively measuring overall system performance quantitatively. By leveraging these features, developers can enhance the performance and accuracy of their R-LLMs in knowledge-intensive generation tasks.

#### Github Repo
https://github.com/yhoshi3/RaLLe

### Paper 09
* [Spacerini: Plug-and-play Search Engines with Pyserini and Hugging Face](http://arxiv.org/pdf/2302.14534v1)

![](./20231212/fig.9.1.png)

#### Abstract
The authors present Spacerini, a modular framework for seamless building and deployment of interactive search applications, designed to facilitate the qualitative analysis of large scale research datasets. Spacerini integrates features from both the Pyserini toolkit and the Hugging Face ecosystem to ease the indexing of text collections and deploy them as search engines for ad-hoc exploration, making the retrieval of relevant data points quick and efficient. The user-friendly interface enables searching through massive datasets in a no-code fashion, making Spacerini broadly accessible to anyone looking to qualitatively audit their text collections. This is useful both to IR researchers aiming to demonstrate the capabilities of their indexes in a simple and interactive way, and to NLP researchers looking to better understand and audit the failure modes of large language models. The framework is open source and available on GitHub: https://github.com/castorini/hf-spacerini, and includes utilities to load, pre-process, index, and deploy local and web search applications. A portfolio of applications created with Spacerini for a multitude of use cases can be found by visiting https://hf.co/spacerini.

#### Github Repo
https://github.com/castorini/hf-spacerini

### Paper 10
* [Humanoid Agents: Platform for Simulating Human-like Generative Agents](http://arxiv.org/pdf/2310.05418v1)

![](./20231212/fig.10.1.png)

#### Abstract
Just as computational simulations of atoms, molecules, and cells have shaped the way we study the sciences, true-to-life simulations of human-like agents can be valuable tools for studying human behavior. The authors propose Humanoid Agents, a system that guides Generative Agents to behave more like humans by introducing three elements of System 1 processing: Basic needs (e.g., hunger, health, and energy), Emotion, and Closeness in Relationships. Humanoid Agents are able to use these dynamic elements to adapt their daily activities and conversations with other agents, as supported with empirical experiments. The system is designed to be extensible to various settings, three of which are demonstrated, as well as to other elements influencing human behavior (e.g., empathy, moral values, and cultural background). The platform also includes a Unity WebGL game interface for visualization and an interactive analytics dashboard to show agent statuses over time. The platform is available on https://www.humanoidagents.com/.

#### Github Repo
https://github.com/HumanoidAgents/HumanoidAgents

### Paper 11
* [CLEVA: Chinese Language Models EVAluation Platform](http://arxiv.org/pdf/2308.04813v2)

![](./20231212/fig.11.1.png)

#### Authors
- Yanyang Li et. al.

#### Affiliations
The Chinese U of Hong Kong et. al.

#### Conference Appeared
EMNLP 2023 System Demonstrations

#### Abstract
With the continuous emergence of Chinese Large Language Models (LLMs), evaluating a model's capabilities has become increasingly significant. The absence of a comprehensive Chinese benchmark that thoroughly assesses a model's performance, the unstandardized and incomparable prompting procedure, and the prevalent risk of contamination pose major challenges in the current evaluation of Chinese LLMs. The authors present CLEVA, a user-friendly platform crafted to holistically evaluate Chinese LLMs. The platform employs a standardized workflow to assess LLMs' performance across various dimensions, regularly updating a competitive leaderboard. To alleviate contamination, CLEVA curates a significant proportion of new data and develops a sampling strategy that guarantees a unique subset for each leaderboard round. Empowered by an easy-to-use interface that requires just a few mouse clicks and a model API, users can conduct a thorough evaluation with minimal coding. Large-scale experiments featuring 23 Chinese LLMs have validated CLEVA's efficacy.

#### Github Repo
https://github.com/LaVi-Lab/CLEVA

### Paper 12
* [MusicAgent: An AI Agent for Music Understanding and Generation with Large Language Models](https://arxiv.org/pdf/2310.11954.pdf)

![](./20231212/fig.12.1.png)

#### Authors
- Dingyao Yu et. al.

#### Affiliations
Peking U et. al.

#### Conference Appeared
EMNLP 2023

#### Abstract
AI-empowered music processing encompasses a wide range of tasks, from generation tasks like timbre synthesis to comprehension tasks like music classification. For developers and amateurs, grasping all these tasks for music processing is challenging, particularly considering the huge differences in music data representations and model applicability across platforms. To address this, the authors have developed MusicAgent, a system integrating numerous music-related tools and an autonomous workflow powered by large language models (LLMs) like ChatGPT. This system includes a toolset gathering tools from various sources and an LLM-empowered workflow to autonomously analyze user requests, decompose them into sub-tasks, and invoke corresponding music tools. MusicAgent aims to simplify the complexities of AI-music tools, allowing users to focus on creativity and effortlessly combine tools for a seamless music experience.

#### Github Repo

### Paper 13
* [Kandinsky: an Improved Text-to-Image Synthesis with Image Prior and Latent Diffusion](http://arxiv.org/pdf/2310.03502v1)

![](./20231212/fig.13.1.png)

#### Authors
- Anton Razzhigaev et. al.

#### Affiliations
AIRI et. al.

#### Conference Appeared
EMNLP 2023

#### Abstract
Text-to-image generation is a significant domain in modern computer vision and has achieved substantial improvements through the evolution of generative architectures. Among these, there are diffusion-based models that have demonstrated essential quality enhancements. These models are generally split into two categories: pixel-level and latent-level approaches. We present Kandinsky1, a novel exploration of latent diffusion architecture, combining the principles of the image prior models with latent diffusion techniques. The image prior model is trained separately to map text embeddings to image embeddings of CLIP. Another distinct feature of the proposed model is the modified MoVQ implementation, which serves as the image autoencoder component. Overall, the designed model contains 3.3B parameters. We also deployed a user-friendly demo system that supports diverse generative modes such as text-to-image generation, image fusion, text and image fusion, image variations generation, and text-guided inpainting/outpainting. Additionally, we released the source code and checkpoints for the Kandinsky models. Experimental evaluations demonstrate a FID score of 8.03 on the COCO-30K dataset, marking our model as the top open-source performer in terms of measurable image generation quality.

#### GitHub Repo