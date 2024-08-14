---
sidebar_position: 7
title: Agent Framework
---

## Paper Title
[TaskWeaver: A Code-First Agent Framework](https://github.com/weijiang2023/Suanfamama-kb/blob/main/kb/computer.science/FRAMEWORK.2311.17541v1.pdf)

![](./20231201/fig.1.png)

#### Authors
Bo Qiao et. al.

#### Affiliations
Microsoft

#### Date
Nov 29, 2023

#### 5Ws
Language Language Models (LLMs) have shown impressive abilities in natural language understanding and generation, leading to their use in applications such as chatbots and virtual assistants. However, existing LLM frameworks face limitations in handling domain-specific data analytics tasks with rich data structures. Moreover, they struggle with flexibility to meet diverse user requirements. To address these issues, TaskWeaver is proposed as a code-first framework for building LLM powered autonomous agents. It converts user requests into executable code and treats user-defined plugins as callable functions. TaskWeaver provides support for rich data structures, flexible plugin usage, and dynamic plugin selection, and leverages LLM coding capabilities for complex logic. It also incorporates domain specific knowledge through examples and ensures the secure execution of generated code. TaskWeaver offers a powerful and flexible framework for creating intelligent conversational agents that can handle complex tasks and adapt to domain-specific scenarios. The code is open-sourced at https://github.com/microsoft/TaskWeaver/.

##### 1. What is the problem?
The paper identifies a problem with existing Language Model (LLM) frameworks, particularly in handling domain-specific data analytics tasks with complex data structures and flexibility to meet diverse user requirements. These frameworks struggle with efficiently processing complex data structures like nested lists, dictionaries, or data frames, especially across plugins and chat rounds. They also face challenges in embedding domain-specific knowledge into the planning and code-generation process and lack flexibility for ad-hoc user queries.

##### 2. Why is the problem important?
The problem is crucial because LLMs, like GPT, Claude, Palm, and Llama, have shown remarkable capabilities in various applications such as chatbots, virtual assistants, and content generation systems. Efficient handling of complex data structures and flexible response to diverse user requirements are essential for maximizing the potential of LLMs in real-world applications, particularly in data analytics and business scenarios.

##### 3. Why is the problem difficult?
The problem is challenging due to several factors:

* Complex Data Handling: Many existing frameworks can't efficiently manage complex data structures, leading to impracticality and errors, especially with large datasets.
* Incorporating Domain Knowledge: Systematically embedding domain-specific knowledge for accurate planning and code generation is difficult, affecting the reliability of outcomes in complex domains.
* Ad-hoc User Queries: Addressing user-specific demands flexibly, especially in situations where predefined plugins are inadequate, is complex and requires a dynamic and intelligent approach.

##### 4. What are the old techniques?
Older techniques in LLM-powered frameworks, like Langchain, Semantic Kernel, and Transformers Agent, primarily rely on:

* Persisting Data: Storing complex data structures on disk or encoding them as strings or JSON objects.
* Limited Flexibility: Using a fixed set of plugins, which may not cover all user requirements.
* Prompt Engineering: Providing tools for prompt engineering without a systematic approach to embed domain-specific knowledge.

##### 5. Advantages and disadvantages of the new techniques?
Advantages:

* Code-First Approach: Converts user requests into executable code, offering a more dynamic and flexible response.
* Rich Data Structure Support: Efficient handling of complex data structures.
* Domain Knowledge Incorporation: Systematic way of embedding domain-specific knowledge.
* Stateful Execution: Maintains state across user interactions, similar to a Python Jupyter Notebook.
* Intelligent Plan Decomposition: Can modify plans based on execution results.
* Self-Reflection: Ability to rectify errors in planning and code generation.
* Scalable Plugin Usage: Dynamic selection of relevant plugins for specific tasks.
* Security: Ensures safe execution of generated code.

Disadvantages:

* Complexity: The advanced features may introduce complexity in implementation and use.
* Dependency on Domain-Specific Examples: May require significant input from domain experts to function optimally.
* Cost: The use of LLMs for complex task handling could incur higher computational costs.

##### 6. Conclusion
In conclusion, TaskWeaver offers a significant advancement in LLM frameworks by addressing key limitations in handling complex data structures, flexibility, and incorporating domain knowledge, making it a powerful tool for creating intelligent conversational agents for complex tasks and domain-specific scenarios.
