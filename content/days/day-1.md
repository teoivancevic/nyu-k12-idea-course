---
day: 1
title: "Tools & Prompt Engineering Basics"
lectureMaterials:
  - label: "Presentation Slides"
    url: "https://docs.google.com/presentation/d/1wI2xk1OOhiLKKOnjTzmCpTMjbL6L0Rse/edit?usp=sharing&ouid=104677514528733065099&rtpof=true&sd=true"
  - label: "Problem Research & Domains"
    url: "https://docs.google.com/document/d/11ptcVDcJ7ILxyGLEJ4XHDP9cLqd-QQSqBbtaWh5GdNg/edit?usp=sharing"
granolaNotesUrl: ""
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
  - "Run the prompt sequence for your domain in Gemini"
  - "Upload one article to NotebookLM and ask it a question"
  - "Draft your one-sentence problem statement"
  - "Prepare your 2-min team debrief for the class"
promptIntro: "Same four-step logic for each domain. Steps 3 and 4 are specific to the domain — don't swap them."
promptSections:
  - id: "small-business"
    label: "Small Business"
    prompts:
      - step: 1
        title: "Map who's affected"
        prompt: "Who are the real people affected when small business owners in NYC can't easily navigate permits, health codes, and labor law? List them by role — specific humans, not categories. Think about who's in the room when something goes wrong."
      - step: 2
        title: "Find who's most exposed"
        prompt: "Of those people, who faces the most immediate consequence when they get something wrong — a fine, a failed inspection, a lawsuit, a lost license? Pick one and make the case for why their situation is the most urgent."
      - step: 3
        title: "Get to the failure moment"
        prompt: "I'm focusing on a first-generation immigrant restaurant owner in NYC who speaks limited English. Walk me through the exact moment in the Department of Health inspection process where someone like her is most likely to get cited for something she didn't know was a violation. What rule? What's the gap between what she was told and what the code actually says?"
      - step: 4
        title: "Ground it in real data"
        prompt: "I need a real number from NYC's restaurant inspection data at data.cityofnewyork.us. Specifically: how many violations per year are issued to restaurants, and what are the most common violation categories? Tell me what to search for and what the number shows about the scale of this problem."
  - id: "public-benefits"
    label: "Public Benefits"
    prompts:
      - step: 1
        title: "Map who's affected"
        prompt: "Who are the real people affected when eligible New Yorkers don't apply for benefits like SNAP, Medicaid, or childcare subsidies? List them by role — specific humans, not \"low-income families.\" Think about who doesn't show up in the data because they never applied."
      - step: 2
        title: "Find who's most exposed"
        prompt: "Of those people, who is most likely to qualify for a benefit and never receive it — not because they refused, but because they never got through the process? Pick one group and explain what specifically breaks down for them."
      - step: 3
        title: "Get to the failure moment"
        prompt: "I'm focusing on a monolingual Spanish-speaking mother of two in the Bronx trying to apply for childcare subsidies through ACCESS NYC. Walk me through the exact point in that application where someone like her is most likely to stop. What does she see? What question or step is the breaking point and why?"
      - step: 4
        title: "Ground it in real data"
        prompt: "I need a real number about how many eligible New Yorkers aren't receiving SNAP or Medicaid benefits they qualify for. The NYC Human Resources Administration and the NYC Open Data portal publish this kind of data. Point me to a specific dataset or report and tell me what number to pull."
  - id: "college-affordability"
    label: "College Aid"
    prompts:
      - step: 1
        title: "Map who's affected"
        prompt: "Who are the real people affected when families can't figure out what college will actually cost or whether they're getting all the aid they're entitled to? List them by role — specific humans at specific moments in the process."
      - step: 2
        title: "Find who's most exposed"
        prompt: "Of those people, who is most likely to make a bad financial decision — or give up entirely — because the information was confusing, delayed, or wrong? Pick one and explain what that decision costs them concretely."
      - step: 3
        title: "Get to the failure moment"
        prompt: "I'm focusing on a first-generation college student whose family just completed the FAFSA. She received her financial aid offer letters from three schools but can't tell which one is actually the best deal because the letters use different formats and terminology. Walk me through exactly where she gets confused and what question she can't answer."
      - step: 4
        title: "Ground it in real data"
        prompt: "I need real data from the College Scorecard at collegescorecard.ed.gov. Specifically: what's the gap between the advertised sticker price and the average net price actually paid at a mid-tier private university? Tell me what fields to look at and what that gap shows about the information problem families face."
  - id: "rental-scams"
    label: "Rental Scams"
    prompts:
      - step: 1
        title: "Map who's involved"
        prompt: "Who are the real people affected by rental listing scams? List them by role — not broad categories, specific humans. For example: a 19-year-old moving out for the first time, a landlord whose real listing gets copied by a scammer, a property manager fielding fraud complaints from applicants."
      - step: 2
        title: "Find who's most exposed"
        prompt: "Of the people you listed, who faces the most immediate financial harm and has the least protection or recourse after it happens? Pick one and make the case."
      - step: 3
        title: "Get to the failure moment"
        prompt: "I'm focusing on a first-time renter, 18-22 years old, searching on Craigslist or Facebook Marketplace. Describe the exact moment in that process where a scam listing is hardest to distinguish from a real one. What does the listing look like? What does the scammer do next? Be specific."
      - step: 4
        title: "Ground it in real data"
        prompt: "I need one real, verifiable statistic about how common or costly rental listing scams are — specifically for people aged 18-29. The FTC publishes consumer fraud data at ftc.gov/exploredata. Point me to the right dataset and tell me what number to look for."
---

## Garbage In, Garbage Out

![Garbage in, garbage out — a visual showing trash being fed into a cloud machine and more trash coming out](/garbage-in-garbage-out.png)

Let's make this concrete. Here are three prompts. All three are bad, for the same reason — but it gets less obvious each time.

**Bad prompt 1:**
```
Build me a rocketship. No mistakes.
```
*"No mistakes" tells the model nothing. A rocketship for what? How big? What fuel? The output will be something — it's just not what you needed.*

**Bad prompt 2:**
```
Build me a clone of amazon.com. No mistakes.
```
*More specific domain, same problem. It'll try. You'll get hundreds of lines of something. None of it will be right because you never said what "right" means.*

**Bad prompt 3 — this one looks reasonable. That's the trap:**
```
Help me solve the problem of rental scams in NYC for first-time renters. Give me the research, the data, the stakeholders, and a problem statement.
```
*This sounds like a research prompt. It isn't. You handed it the entire project at once. What comes back will be long, generic, and full of statistics you can't verify. You won't know what to do with it.*

The problem is never the words. It's the size of the ask.

---

## How We Got Here

Six years that changed everything:

- **2017** — Google researchers publish *Attention Is All You Need*. Nobody outside of ML research notices. It becomes the foundation everything below is built on.
- **2022** — ChatGPT launches. A million users in five days. For the first time, anyone can have a conversation with a model that sounds like it understands you.
- **2023** — GPT-4. The gap between "impressive party trick" and "actually useful for real work" closes fast.
- **2024** — Models start taking actions, not just answering. They browse, they write code, they call APIs. The word "agent" stops being jargon.
- **2025** — Claude Code, Cursor, Gemini inside Docs and Sheets. AI is no longer a chatbot you visit. It's inside the tools you already use, doing parts of the work.

The question stopped being *"is AI real?"* around 2023. The question now is *"which parts of your workflow does it own, and which parts do you?"* That's what this program is actually about.

---

## How It Works (The Short Version)

Before you ever type a message, the model read an enormous amount of text — books, articles, code, conversations, websites. What's left isn't memory or understanding. It's a massive set of patterns: given this sequence of words, what word is most likely to come next?

When you type something, it doesn't think, look anything up, or reason through a problem. It predicts the next token. Then the next. Then the next — until it has a full response.

![Token prediction diagram showing "The sky is" going into an LLM which outputs probability scores for next words — blue: -0.96, clear: -1.60, usually: -2.47 — resulting in "The sky is blue"](/token-prediction.png)

This is why **confident and correct are two completely different things.** The NYC chatbot this morning didn't lie about tip law. It predicted the most confident-sounding answer. Nobody — not the model, not the city — checked whether "likely" meant "true."

This is also why what you put in determines everything about what comes out.

---

## The Fix: One Step at a Time

Same goal as Bad Prompt 3 — understand the rental scam problem well enough to write one clear problem statement. But broken into steps where each output feeds the next.

**Step 1 — Map who's actually involved**
```
Who are the real people affected by rental listing scams? List them by role — not broad categories, specific humans. For example: a 19-year-old moving out for the first time, a landlord whose real listing gets copied by a scammer, a property manager fielding fraud complaints from applicants.
```

**Step 2 — Find who's most exposed**
```
Of the people you listed, who faces the most immediate financial harm and has the least protection or recourse after it happens? Pick one and make the case.
```

**Step 3 — Get to the specific failure moment**
```
I'm focusing on a first-time renter, 18-22 years old, searching on Craigslist or Facebook Marketplace. Describe the exact moment in that process where a scam listing is hardest to distinguish from a real one. What does the listing look like? What does the scammer do next? Be specific.
```

**Step 4 — Ground it in real data**
```
I need one real, verifiable statistic about how common or costly rental listing scams are — specifically for people aged 18-29. The FTC publishes consumer fraud data at ftc.gov/exploredata. Point me to the right dataset and tell me what number to look for.
```

When you finish Step 4 you have: a specific person, a specific moment of failure, and a real number that proves it's not an edge case. That's the problem statement sentence. Run the same logic on your domain.

---

## The Four Tools

Quick orientation. Each one has a different job.

### Google Gemini
General-purpose AI assistant. Your main tool for research, brainstorming, and iterating. This is where you run your prompt sequences.

What it's good at: exploring a problem space fast, generating options, drafting and refining.
What to watch: it will sound confident about things it's wrong about. Always check numbers against the actual source.

→ [gemini.google.com](https://gemini.google.com)

### NotebookLM
AI that only talks about what you give it. You upload sources — an article, a report, a dataset description — and it answers questions based only on those. No open internet, no hallucinations from elsewhere.

Use it today: take one background article from your domain's task doc and upload it. Ask: *"Who is most affected by this problem and what does it actually cost them?"* Compare what it says to what Gemini said about the same domain.

→ [notebooklm.google.com](https://notebooklm.google.com)

### Google AI Studio
Where you'll build your prototype in Week 2. You write a system prompt that defines how an AI should behave, then test it with real inputs. Today is a first look — we're coming back on Day 5.

→ [aistudio.google.com](https://aistudio.google.com)

### Gemini in Google Workspace
Gemini built into Docs and Sheets. Useful for drafting and cleaning up your problem statement, organizing research notes, or turning a messy Gemini output into something structured. Available inside any Google Doc via the side panel.

---

## Your Turn

### Round 1 — Run the sequence

Open Gemini. Use the prompt sequence for your domain (tabs below). Run Steps 1 and 2. Don't edit the output — just read it and note one thing it assumed that you didn't say.

### Share out

One or two teams put their prompt on screen. Class looks at it together:
- What did Gemini assume you didn't actually say?
- Is the output specific enough that two teams would get different answers for different domains?
- What one thing would you add to make Step 1 more precise?

### Revision

Rewrite your Step 1 based on what just came up. Run it again. Put the two outputs side by side.

The output improved not because you found better words — because you gave it a more specific task.

### NotebookLM

While one person runs the revision in Gemini, have another team member open NotebookLM and upload one article from your domain's reading list. Ask it the same Step 1 question. Compare what it says to what Gemini said.

### Adversarial round

Now make Gemini disagree with itself. Take your revised Step 1 output and run this prompt:

```
Why might this NOT actually be a widespread problem? Make the strongest case you can that the pain point my team identified is overstated, rare, or already solved.
```

Read what it says. If it finds a real hole in your framing, fix it. If it's grasping — that's useful too. It means your problem statement is solid. Either way, you've stress-tested it before committing to it.

This is the lesson: AI isn't an oracle. It's responsive to framing. The same tool that validated your problem can poke holes in it. That's a feature, not a bug.

### End of day

Each team presents a **2-minute debrief** to the class — no slides. Three things: what's your pain point, why does it matter, and what's one real fact that backs it up. Use what you found today.

---

## One Sentence

Before the end of today, your team should have a draft of this sentence:

> **[Who]** struggles to **[what]**, which causes **[consequence]**, shown by **[data point]**.

It doesn't have to be perfect. It needs to be specific. If it could describe any city, any person, or any problem, it's still too vague.
