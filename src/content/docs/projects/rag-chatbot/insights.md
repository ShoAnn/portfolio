---
title: RAG Legal Chatbot — Insights
description: Lessons learned, challenges, and reflections from building the project.
---

## Challenges
- Tedious data acquisition process. Old statutory document often have irregular formating, damaged/missing text, and image type documents, therefore more manual processing steps was necessary to obtain consistent and clean data.
- Hardware constraints. LLMs are notorious for requiring heavy computes during training and inference, therefore frequent checkpoint dump was necessary for saving training progress.

## Lessons Learned
- There were many personal deduction and/or opinions from the expert from hukumonline.com that are often from their experience which LLMs do not have therefore they can not immitate
- Training data quality significantly affects model response
- LLMs require **very** heavy compute to run
- Larger parameter LLMs do not guarantee better response

## Key Takeaways
- Retrieving steps should involve more query or data processing
- Data should be cleaner and more consistently formatted across all types of legal basis
- Generator prompting need to be further studied
