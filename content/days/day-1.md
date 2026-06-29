---
day: 1
title: "Tools & Prompt Engineering Basics"
lectureMaterials:
  - label: "Presentation Slides"
    url: "https://docs.google.com/presentation/d/1wI2xk1OOhiLKKOnjTzmCpTMjbL6L0Rse/edit?usp=sharing&ouid=104677514528733065099&rtpof=true&sd=true"
  - label: "Problem Research & Domains"
    url: "https://docs.google.com/document/d/11ptcVDcJ7ILxyGLEJ4XHDP9cLqd-QQSqBbtaWh5GdNg/edit?usp=sharing"
granolaNotesUrl: "https://google.com"
workshopLinks:
  - label: "Google Gemini"
    url: "https://gemini.google.com"
  - label: "NotebookLM"
    url: "https://notebooklm.google.com"
  - label: "AI Studio"
    url: "https://aistudio.google.com"
advancedLinks:
  - label: "Attention Is All You Need (2017 paper)"
    url: "https://arxiv.org/abs/1706.03762"
  - label: "3Blue1Brown — How LLMs Work (playlist)"
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
actionItems:
  - "Form your team of 3"
  - "Pick your problem domain"
  - "Run the prompt sequence for your domain"
  - "Draft a one-sentence problem statement"
promptIntro: "Use the sequence for your team's domain. Same four steps, same logic."
promptSections:
  - id: "small-business"
    label: "Small Business"
    prompts:
      - step: 1
        title: "Who's affected?"
        prompt: "Who are the real people affected when small business owners in NYC can't easily navigate permits, health codes, and labor law? List them by role — actual humans, not categories."
      - step: 2
        title: "Who's most at risk?"
        prompt: "Of those people, who faces the most immediate consequences when they get something wrong — a fine, a lawsuit, a lost license? Pick one and explain why."
      - step: 3
        title: "Find the pain point"
        prompt: "What's one specific moment in that person's day or week where getting the wrong information causes real harm?"
      - step: 4
        title: "Find a real fact"
        prompt: "Give me one real statistic or data point that shows how common this problem is in NYC. Tell me where the number comes from."
  - id: "public-benefits"
    label: "Public Benefits"
    prompts:
      - step: 1
        title: "Who's affected?"
        prompt: "Who are the real people affected when eligible New Yorkers don't apply for benefits like SNAP, Medicaid, or childcare subsidies? List them by role — actual humans, not categories."
      - step: 2
        title: "Who's most at risk?"
        prompt: "Of those people, who is most likely to miss out on benefits they're actually entitled to? Pick one group and explain why."
      - step: 3
        title: "Find the barrier"
        prompt: "What's one specific barrier that stops that person from even starting the application process?"
      - step: 4
        title: "Find a real fact"
        prompt: "Give me one real statistic or data point that shows how many eligible people aren't receiving a benefit they qualify for. Tell me where the number comes from."
  - id: "college-affordability"
    label: "College Aid"
    prompts:
      - step: 1
        title: "Who's affected?"
        prompt: "Who are the real people affected when families can't figure out what college will actually cost or whether they're getting the aid they're entitled to? List them by role — actual humans, not categories."
      - step: 2
        title: "Who's most at risk?"
        prompt: "Of those people, who is most likely to make a bad financial decision because the information was confusing or wrong? Pick one and explain why."
      - step: 3
        title: "Find the pain point"
        prompt: "What's one specific moment in the financial aid process where confusion causes someone to leave money on the table or give up entirely?"
      - step: 4
        title: "Find a real fact"
        prompt: "Give me one real statistic or data point that shows how widespread this confusion is. Tell me where the number comes from."
  - id: "rental-scams"
    label: "Rental Scams"
    prompts:
      - step: 1
        title: "Who's actually involved?"
        prompt: "Who are the real people affected by rental listing scams? List them by role — not broad categories, actual humans. For example: a 19-year-old moving out for the first time, a landlord whose listing gets copied by a scammer, a property manager dealing with fraud complaints."
      - step: 2
        title: "Narrow to who's most at risk"
        prompt: "Of those people, who faces the most immediate financial harm and has the least protection or recourse? Pick one and explain why."
      - step: 3
        title: "Find the specific pain point"
        prompt: "What's one specific thing that makes it hard for that person to spot a fake listing before they send money?"
      - step: 4
        title: "Find a real fact"
        prompt: "Give me one real statistic or data point that proves this is a widespread problem, not just an edge case. Tell me where the number comes from."
---

## Part 1: A Brief History of Modern AI

Three moments that matter:

- **2017** — Google researchers publish *Attention Is All You Need*, the architecture that everything you're about to use is built on. (Link in Advanced Reading if you want to go deeper.)
- **2020** — GPT-3 drops. For the first time, a model is good enough that people outside of research labs start paying attention.
- **2022** — ChatGPT. The moment AI became everyone's problem.

### How it actually works

These tools don't "know" things the way you do. Before you ever type a message, the model read an enormous amount of text — books, articles, websites, conversations. What's left behind isn't memory. It's a giant set of patterns about how language tends to flow.

When you type something, it doesn't look anything up. It predicts the most likely next word. Then the next. Then the next. Over and over until it has a full response.

**Confident and correct are two completely different things to it.** That's why the NYC chatbot this morning didn't lie — it just predicted the most confident-sounding answer about tip law. Nobody checked whether "likely sounding" was the same as true.

---

## Part 2: The One Skill That Makes Everything Else Work

Here's a prompt someone might write on their first day:

```
Help me solve the problem of rental scams in New York City for first-time renters. Give me the research, the data, the stakeholders, and a problem statement.
```

What comes back: a wall of text, probably some hallucinated statistics, no clear angle, nothing you can actually use or evaluate.

The problem isn't the words. It's the size of the ask. You handed AI the whole task at once and accepted whatever came out.

**The fix isn't magic wording. It's breaking the task into steps.**

Here's the same goal, done as a sequence. Each prompt builds on the last:

### Prompt sequence — Rental Scams (demo)

**Step 1 — Who's actually involved?**

```
Who are the real people affected by rental listing scams? List them by role — not broad categories, actual humans. For example: a 19-year-old moving out for the first time, a landlord whose listing gets copied by a scammer, a property manager dealing with fraud complaints.
```

**Step 2 — Narrow to who's most at risk**

```
Of those people, who faces the most immediate financial harm and has the least protection or recourse? Pick one and explain why.
```

**Step 3 — Find the specific pain point**

```
What's one specific thing that makes it hard for that person to spot a fake listing before they send money?
```

**Step 4 — Find a real fact**

```
Give me one real statistic or data point that proves this is a widespread problem, not just an edge case. Tell me where the number comes from.
```

By the time you finish Step 4, you have almost everything you need to write your problem statement sentence. That's not a coincidence — that sequence is the same funnel you're running this afternoon.

---

## Part 3: Tool Tour

Quick orientation to the four tools you'll use across this program. Today is about knowing what each one is for. You'll go deeper as the weeks go on.

### Google Gemini

Your main research and brainstorming tool. Use it for the prompt sequences above, for exploring your domain, and for drafting and iterating on your problem statement.

→ [gemini.google.com](https://gemini.google.com)

### NotebookLM

AI that only talks about what you give it. Upload an article or document, and it answers questions based only on that source — no hallucinations from the open internet. Useful when you need grounded, sourced answers.

Try it today: upload one of the background articles from your domain and ask it *"Who is affected by this problem and how?"*

→ [notebooklm.google.com](https://notebooklm.google.com)

### Google AI Studio

Where you'll build your actual AI prototype in Week 2. You write a system prompt, define how the AI should behave, and test it with real inputs. Today is just a first look — we're coming back to this on Day 5.

→ [aistudio.google.com](https://aistudio.google.com)

### Google Workspace (Gemini in Docs/Sheets)

Gemini built into the tools you already use. Useful for drafting and refining your problem statement document, summarizing research, or cleaning up notes.

---

## Part 4: Your Turn

### Round 1

Open Gemini. Run Steps 1 and 2 of the prompt sequence for your domain. Don't edit the output yet — just read it and notice what it assumed that you didn't say.

### Share out

One or two teams share their prompt and what came back. Class looks at it together:

- Is this specific enough that two different people would get the same answer?
- What did Gemini assume that you didn't actually say?
- What would you add to make it more useful?

### Revision

Rewrite your Step 1 or 2 prompt based on what you just heard. Run it again. Compare the two outputs.

The output changed not because you found better words — but because you gave it a clearer task.

---

## Wrapping Up

Everything you did this afternoon — breaking it into steps, checking the output, revising — that's the core skill. Not just for today. It's how you'll research your problem statement tomorrow, how you'll design your solution in Week 2, and how you'll build your prototype.

The tool changes. The approach doesn't.
