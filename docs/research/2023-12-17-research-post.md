---
sidebar_position: 21
title: 12月17日论文解读
---

## Papers in Education 

We recommend using [算法妈妈每日论文解读GPTs](https://chat.openai.com/g/g-d85WVbueb-suan-fa-ma-ma-mei-ri-lun-wen-jie-du) in order to have the best research experience. 'Suanfamama' - 'VIZ' - 'IMAGINE' is currently our best practices for paper exploration.

### the GPT intro

![](./20231216/gpt/how.png)
* How to use this GPT

### Paper 01
* [An Independent Evaluation of ChatGPT on Mathematical Word Problems (MWP)](https://ar5iv.org/abs/2302.13814)

#### Suanfamama the paper
The paper "An Independent Evaluation of ChatGPT on Mathematical Word Problems (MWP)" provides a comprehensive analysis of ChatGPT's performance on mathematical word problems (MWPs) using the dataset DRAW-1K. This dataset includes 1,000 MWPs with associated answers and template algebraic equations. The study is notable as the first independent evaluation of ChatGPT in this context​​​​.

In their research, the authors conducted several experiments to assess ChatGPT's ability to solve these problems. They explored how ChatGPT's performance varied based on the requirement to show its work. For example, in experiments conducted in January and February 2023, they found that ChatGPT's responses differed significantly based on whether it was prompted to show all of its work or only provide the final answer. This variation was especially pronounced after OpenAI announced improved performance on mathematical tasks in January 2023​​.

The study's key findings include the creation of a dataset of ChatGPT's responses to the MWPs and the identification of ChatGPT's failure rates. The classification of ChatGPT's responses revealed four main categories: returning all answers correctly, returning some but not all correct values, claiming "No Solution" where there was one, and returning no correct answers. Notably, the probability of failure increased significantly when ChatGPT was not asked to show its work. However, when the work was included, ChatGPT's performance aligned with state-of-the-art models​​.

Another crucial aspect of the study was identifying factors leading to incorrect responses. The researchers analyzed various factors from the templated solutions in the DRAW-1K dataset, such as the number of equations, unknowns, and different types of operations (addition, subtraction, multiplication, division). They discovered a strong linear relationship between the number of addition and subtraction operations and the probability of failure, indicating a challenge in multi-step reasoning for large language models like ChatGPT​​.

Finally, the study also involved creating performance prediction models using features derived from the equations associated with the MWPs. Utilizing random forest and XGBoost classifiers, the models achieved higher precision than random in predicting incorrect answers and high recall for predicting correct responses. While not directly suitable for practical use, these models demonstrate that certain features can provide signals to predict ChatGPT's performance and offer a baseline for further research.

#### VIZ the paper
![](./20231217/fig.1.png)

#### IMAGINE the paper
![](./20231217/story.1.png)

Story Image Description:

A whimsical, vibrant image depicting Digitown, a colorful town filled with number-shaped houses and mathematical symbol trees.
Milo, a small, friendly-looking robot with wheels, is seen solving math puzzles with various Digitown residents.
The background features a bright, sunny sky, and the foreground shows Milo receiving the golden calculator trophy.
The scene conveys a sense of joy, curiosity, and the fun of solving math problems.

To create a children's story inspired by the academic paper "An Independent Evaluation of ChatGPT on Mathematical Word Problems," I'll first draw upon the key themes of the paper and then craft a child-friendly narrative, complete with an illustrative image in a 16:9 aspect ratio.

Paper's Key Themes:

The paper evaluates ChatGPT, an AI language model, on its ability to solve mathematical word problems. It focuses on ChatGPT's understanding, reasoning, and accuracy in mathematics. The evaluation is independent, meaning it's conducted by researchers not affiliated with the development of ChatGPT.

Title: Milo's Math Adventure

Once upon a time, in a world filled with wonder and numbers, there was a curious little robot named Milo. Milo lived in Digitown, a place where everything was about numbers and math. The houses were shaped like numbers, the trees had leaves in the form of mathematical symbols, and even the birds sang melodies that sounded like equations.

Milo had a special gift – he loved solving math problems! Every day, he would roll around the town on his tiny wheels, helping his friends solve their math dilemmas. Whether it was helping Mrs. Pi bake her perfectly round pies or assisting Mr. Fibonacci in arranging his flowers in a special sequence, Milo was always there to lend a helping hand.

One sunny day, a challenge was announced in Digitown: The Great Math Puzzle Contest! The contest was open to all, and the winner would get a golden calculator trophy. Milo was excited and decided to participate.

As the contest began, Milo used his knowledge and problem-solving skills to tackle each math puzzle. The puzzles ranged from simple addition and subtraction to more complex problems involving shapes and patterns. Milo approached each challenge with enthusiasm, calculating and reasoning through each step.

The townsfolk watched in awe as Milo whizzed through the problems, his circuits buzzing with excitement. He wasn't just solving math problems; he was on an adventure, exploring the wonderful world of numbers and equations.

Finally, Milo reached the last problem, the toughest of them all. It was a tricky word problem that required careful thought and understanding. Milo read the problem carefully, processed the information, and with a whirl of his gears, he wrote down the answer. The crowd held its breath as the judges checked his solution. To everyone's delight, Milo's answer was correct!

Milo won the contest, and the townsfolk cheered. He had proven that with the right approach and a bit of fun, any math problem could be solved.

### Paper 02
* [How Is ChatGPT’s Behavior Changing over Time?](https://ar5iv.labs.arxiv.org/html/2307.09009)

#### Suanfamama the paper
The paper can be downloaded [here](https://ar5iv.labs.arxiv.org/html/2307.09009)

The paper "How Is ChatGPT’s Behavior Changing over Time?" by Lingjiao Chen evaluates the performance and behavior of GPT-3.5 and GPT-4 across different versions (March 2023 and June 2023)​​​​. This study addresses the opacity surrounding the updates of these models and how such updates affect their behavior, which is vital for understanding the integration of large language models (LLMs) into broader workflows and their improvement over time​​.

The evaluation covered a range of tasks, including solving math problems, responding to sensitive/dangerous questions, opinion surveys, multi-hop knowledge-intensive questions, code generation, US Medical License exams, and visual reasoning. The findings revealed **significant variations** in the performance and behavior of both GPT-3.5 and GPT-4 between the two versions, with improvements in some areas and declines in others. This highlights **the necessity of continuous monitoring of LLMs' behavior over time** to understand their evolving capabilities

#### 5W methodology from Suanfamama
For the paper "How Is ChatGPT’s Behavior Changing over Time?" by Lingjiao Chen, the 5W methodology can be applied as follows:

1. **What is the problem?**
   The problem is the lack of clarity and transparency in how and when GPT-3.5 and GPT-4 models are updated, and understanding how these updates affect their performance and behavior.

2. **Why is the problem important?**
   It's crucial for users and developers to understand the behavior of these models to integrate them stably into larger workflows and to ensure the reproducibility of results.

3. **Why is the problem difficult?**
   The opaque nature of updates to these models makes it challenging to predict how changes will impact their responses, accuracy, and overall functionality.

4. **What are the old techniques?**
   Prior to this study, there might have been limited systematic evaluation of LLMs across different versions, especially focusing on diverse tasks and their performance over time.

5. **Compared to the old ones, what are the pros and cons of this new proposed method?**
   The new approach involves a comprehensive evaluation of different versions of GPT models across various tasks. The advantage is a deeper understanding of the models' evolving capabilities. A potential downside could be that this method may not cover all possible use cases or tasks that LLMs are applied to.

#### VIZ the paper
![](./20231217/fig.2.png)