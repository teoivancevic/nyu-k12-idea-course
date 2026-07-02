---
day: 3
title: "Competitor Analysis & Market Sizing"
lectureMaterials:
  - label: "Presentation"
    url: "https://drive.google.com/file/d/1xHYGaWhDMox3_jegs7lDHNDU00EojEBo/view?usp=sharing"
  - label: "Student Task"
    url: "https://docs.google.com/document/d/1PshLOKrvc4Ul03pKP2jYgZ7xfHtEnb2vvxoK0Fm3EEk/edit?usp=sharing"
granolaNotesUrl: ""
workshopLinks:
  - label: "Days 3–4 Worksheet"
    url: "https://docs.google.com/document/d/1Gj4Q-14mBXzAaiSOEa-q3cAmtrzu9q06/edit?usp=sharing&ouid=104677514528733065099&rtpof=true&sd=true"
  - label: "Differentiation Mapper"
    url: "https://nyu-ds-sp26-differentiation-mapper.vercel.app/"
  - label: "Google Gemini"
    url: "https://gemini.google.com"
  - label: "NotebookLM"
    url: "https://notebooklm.google.com"
advancedLinks: []
actionItems:
  - "Identify 5-10 competitors for your domain"
  - "Complete Part A (market sizing) in your worksheet"
  - "Complete Part B (competitor sort + differentiation) in your worksheet"
  - "Prepare your questions for today's speaker"
---

## Where We Are

This morning the professor covered TAM/SAM/SOM and how to size a market. Your job now is to figure out who's already in it.

A market size tells you how big the opportunity is. Competitor analysis tells you whether there's actually a gap worth building into. You need both before Day 5.

Open your Days 3–4 worksheet (link above) — one copy per team. You'll be filling in Parts A and B today.

---

## Part 1: Find Your Competitors

Before you can map the competitive space, you need to know who's in it. Don't try to think of competitors from memory — use Gemini to find them systematically.

### Step 1 — Seed Gemini with your problem

Open a new Gemini conversation. Copy and paste your entire Day 2 problem statement doc — all six sections — as the first message. Then run this prompt in the same conversation:

```
Based on everything above, find me 5-10 real competitors for a solution to this problem. Include: direct competitors (same solution, same problem), indirect competitors (different solution, same problem), and any relevant government programs, nonprofits, or existing tools that already attempt to solve this. For each one give me: name, one sentence on what they do, and which type of competitor they are. Nothing else yet.
```

### Step 2 — Deep research on each competitor

In the same conversation, no need to re-paste anything:

```
Now do deep research on each of those competitors. For each one find: who they serve (individuals, institutions, government), how they make money (subscription, grant, government contract, free/ad-supported), what they optimize for (engagement, outcomes, reach, compliance), who decides to adopt them (individual choice vs. institutional decision), and rough scale if available (users, cities, funding amount). Cite a source for any specific number. Be thorough — I'm going to use this to map them on a strategy matrix.
```

### Step 3 — Run the Differentiation Mapper

Still in the same conversation, copy the prompt from the [Differentiation Mapper](https://nyu-ds-sp26-differentiation-mapper.vercel.app/) tool page and paste it as your next message. Then copy the JSON output and paste it into the tool to generate your maps.

### Step 4 — Fill in your worksheet

Open your Days 3–4 Worksheet and complete Part B using what you just found:

- Copy your competitor list (names, types, one-line descriptions) into the competitor table
- Note which competitors overlap with your target users and problem framing
- Use your differentiation maps to identify where existing solutions fall short
- Write 2–3 sentences on the gap your solution could fill — this is the "white space" you're building into

Don't skip this step. The worksheet is what Day 5 builds on.

---

## Part 2: Market Sizing

*This section runs in the afternoon workshop, 1–2pm.*

## Part A: Size Your Market

Use the four prompts below — they're the same ones from the professor's morning session, with your problem swapped in. Run them in a new Gemini conversation, in order.

A few reminders as you go:

- **Don't pitch your TAM as your SOM.** The professor covered this — it's the classic mistake.
- **For public service problems, your SOM is often capped by a contract or grant**, not by total demand. Name that honestly in your worksheet.
- **Sanity-check step is not optional.** Compare your SOM against a real comparable — you already found competitors, use one of them.

Fill in Part A of your worksheet as you go. One sentence per number. No essay.

---

### Step 1 · TAM

```
I'm sizing the market for [your solution, one sentence]. Estimate 
the Total Addressable Market: how many people, anywhere, could ever 
conceivably want or need this. Show your reasoning step by step, 
and give me a range, not a single number.
```

### Step 2 · SAM

```
From that same population, narrow it to the Serviceable Available 
Market: people who actually match [your real constraints: location, 
eligibility, access to a device or the internet, language, and so on]. 
Roughly what percentage of the TAM does this represent, and explain 
your reasoning.
```

### Step 3 · SOM

```
Now estimate the Serviceable Obtainable Market: realistically, what 
share of that SAM could a solution like ours reach in year one, given 
[your real constraints: team size, budget, existing competitors]? 
Walk me through your assumptions.
```

### Step 4 · Sanity Check

```
Find a real, comparable product or program serving a similar 
population and tell me its actual reported user numbers or reach, 
with a source. Compare that number to the SOM estimate you just 
gave me. Are they in the same order of magnitude? If not, which 
of my assumptions was probably wrong?
```

---

## Guest Speaker

Today's guest works in civic tech and has direct experience with the problem space your teams are researching.

Before the session, your team should have two questions ready. Use what you wrote in section 6 of your Day 2 problem statement — the things you still don't know — as your starting point.

---

## End of Day 3

By the end of today you should have:

- Part A complete: TAM, SAM, SOM with sources and a sanity check
- Part B complete: competitor sort and differentiation notes

Day 4 picks up with the Business Model Canvas, which builds directly on what you found today. Don't start Part C yet — wait until after tomorrow morning's session.
