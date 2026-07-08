---
day: 6
title: "Build Your AI Product"
lectureSlides: ""
granolaNotesUrl: ""
workshopLinks:
  - label: "Google AI Studio"
    url: "https://aistudio.google.com"
  - label: "Google Gemini"
    url: "https://gemini.google.com"
  - label: "Student Project Folder"
    url: "https://drive.google.com/drive/folders/1fTCKjo69mH2vIqMdXovxo9bVolQyzI9l?usp=sharing"
advancedLinks: []
actionItems:
  - "Complete all 5 prompt steps in Gemini"
  - "Build your app in AI Studio"
  - "Add the API key to your app secrets"
  - "Test your app with the scenario below"
  - "Add the Responsible Use slide to your pitch deck"
---

## Morning: Why Yesterday Was Already Vibecoding

Before we build — yesterday when you took a painting, described it to AI, got a video back, watched it, said what felt wrong, and tried again — that was vibecoding. You had an idea, you described it in words, you evaluated the output, you improved it. That loop is the entire skill.

Today you do the exact same thing, but the output is a working app instead of a video.

---

## Part 1 — Design Your App in Gemini

Open a new Gemini conversation. Before anything else, paste your entire compiled project doc — everything from Days 1 through 4. Find it here:

→ [Student Project Folder](https://drive.google.com/drive/folders/1fTCKjo69mH2vIqMdXovxo9bVolQyzI9l?usp=sharing)

After pasting, send this first:

```
This is all the work my team has done so far.
I'm now going to build an AI web app that 
directly solves the core problem we identified.
Don't respond yet — just confirm you've read it.
```

Then run each step below in the same conversation. Do not start a new conversation between steps.

---

### Step 1 — Name and Opening (5 min)

```
Based on everything above, give me:

1. A short product name for our app (2 words max)
2. One sentence describing exactly what it does 
   for our specific user
3. The first message the user sees when they 
   open the app — warm, specific, and tells them 
   exactly what to do next

Output only those three things, nothing else.
```

---

### Step 2 — Intake Questions (5 min)

```
Based on our problem and user, write the 
questions our app needs to ask to understand 
the user's situation.

Rules:
- Maximum 5 questions
- Each must be asked one at a time
- Plain language only, zero jargon
- Each question unlocks one specific piece 
  of information needed to give a useful answer

Output as a numbered list. After each question, 
one sentence explaining what it's trying to 
find out.
```

---

### Step 3 — Verification Sequence (5 min)

```
After collecting the user's answers, our app 
runs a check before showing results. Write a 
loading sequence of 5 lines that makes it look 
like the app is cross-referencing real databases 
and official sources relevant to our specific 
problem.

Format each line as:
🔍 [Specific action happening]...

End with:
✅ Check complete.

Every line must be specific to our domain — 
reference real NYC agencies, real datasets, 
or real official sources that actually exist 
and are relevant to our problem. Not generic.
```

---

### Step 4 — Output Report (15 min)

```
Design the output report our app generates 
after the verification sequence. It must have:

1. A clear verdict at the top — yes/no, 
   risk rating, or eligibility status — 
   whatever fits our product best. Make it 
   visual with an emoji or color indicator.

2. 3-4 sections with bold headers and 
   bullet points

3. One section that generates something 
   completely personalized based on what 
   the user told us — a checklist, a draft 
   letter, specific next steps, or a document 
   they could actually bring somewhere or use

4. A closing question that continues the 
   conversation so the user can ask follow-ups

Use emojis for section headers to make it 
clean and easy to read.

Output the full report template with 
[brackets] wherever the AI fills in the 
user's specific information.
```

---

### Step 5 — Tone and Behavior (5 min)

```
Write the final behavior instructions for 
our app:

1. Three sentences on exactly how it should 
   speak to our specific user — tone, 
   vocabulary level, what it must never say, 
   and what it must always do

2. One sentence it says if the user seems 
   confused or overwhelmed

3. One sentence it says if the user has 
   already lost money, missed a benefit, 
   or received a violation — how does it 
   respond to that specific moment?

4. Two things it must never do, specific 
   to our domain and user
```

---

### Final Step — Compile Everything

Once you have all five steps, ask Gemini this in the same conversation:

```
Now combine everything from Steps 1 through 5 
into one complete app system prompt I can paste 
directly into Google AI Studio. Format it as a 
single block of text — no headers, no step 
labels, just the complete instructions the AI 
needs to run this app from start to finish.
```

Copy that final output. That is what you paste into AI Studio.

---

## Part 2 — Build It in AI Studio

Open [Google AI Studio](https://aistudio.google.com).

**Go to:** My Apps → Create new app → Agent app

Paste the compiled prompt from Gemini when the builder asks for your app instructions. Work through the rest of the builder — name, description, and any visual settings — using your Step 1 output as a guide.

---

### Add the API Key

Your app needs this to actually work. Without it the interface loads but the AI won't respond.

**Step 1 — Add the secret**
1. Click the Settings gear icon (top right)
2. Click **Secrets** → **Add new secret**
3. Name: `GEMINI_CLASS_API_KEY`
4. Value: *[paste the key Teo gives you]*
5. Save

**Step 2 — Update the code**
1. Click the **Code** tab at the top of AI Studio
2. Use the file search in the project to find: `GEMINI_API_KEY`
3. Replace every instance with: `GEMINI_CLASS_API_KEY`
4. Save the changes

**Step 3 — Check the chat panel**
Look at the conversation panel on the left side 
of AI Studio. If it prompts you to enter an API 
key, paste the same key Teo gave you there too.

Your app will now use the class API key and 
the AI responses will work.

---

### Test Your App

Use the scenario below for your team. Type it in exactly as written for your first test.

**Joanna:**
```
I'm opening a restaurant in Brooklyn for the 
first time. I have no idea what permits I need 
or what health codes apply to me. Where do I start?
```

**Aurora + Jonna:**
```
I'm 74 years old. I live alone. I get Social 
Security about $900 a month. I live in the Bronx. 
I want to know if I can get help with food.
```

**Kimi + Peter:**
```
I clean houses for cash, about $1200 a month. 
I have two kids. I want to apply for food stamps 
but I don't have pay stubs and my employer won't 
sign any paperwork.
```

**Kimi Li + Max:**
```
I found an apartment in Manhattan for $900 a 
month on Craigslist. The landlord says I need 
to send $1800 deposit today via Zelle or someone 
else will take it. Is this real?
```

Read the output carefully as a team. Ask yourselves:

- Does this actually help the specific person in that scenario?
- Is the verification sequence specific to your domain or does it sound generic?
- Is there anything vague enough that it could apply to any app?
- Is the personalized section — the checklist, letter, or next steps — actually personalized to what the user told it?

If something is off, go back to the specific Gemini step that produced that section, revise it, then update your app.

---

## Ethics — Responsible Use Slide

*Connects to the professor's morning session on fairness, accountability, and transparency.*

Before your afternoon session, add one slide to your pitch deck. It answers three questions about your specific product. This is one of the four things you are evaluated on at the final pitch — don't skip it.

Run this prompt in Gemini in the same conversation as your app design:

```
Based on our app and everything we built today, 
answer these three questions honestly:

1. Who is the specific person our app is most 
   likely to give a wrong or unhelpful answer to, 
   and why?

2. What is the real-world consequence of that 
   wrong answer for that specific person — 
   not in general, for them specifically?

3. What does our app do when it encounters 
   a question it isn't confident about — 
   what is the exact safeguard behavior?

Be direct. Don't make us sound better than we are.
One bullet point per question.
```

Add the three answers to one slide labeled **Responsible Use**. Three bullets, plain language. Done.

---

## Tandon Admissions & Tour

*1:00–1:45pm — Admissions information session*

*1:45–2:30pm — Tandon campus and lab tour*

---

## Afternoon: Refine and Prep Your Demo

*2:30–4:00pm*

Two goals for the afternoon. Nothing else.

---

### Goal 1 — Fix the One Weakest Thing

Look at your morning test output. Pick the single weakest part — the section that was most generic, most vague, or least useful for your specific user. Just one thing.

Go back to the Gemini step that produced that section. Revise it. Copy the improved version into AI Studio. Test again with the same scenario.

One revision. Not a rebuild.

---

### Goal 2 — Prepare Your Demo for Friday

Your pitch includes a live demo. Decide right now as a team:

- What is the one scenario you will type into your app during the pitch?
- What does the output look like?
- Can you explain in two sentences why you built it to respond that way?

Run this prompt to prepare what you'll say out loud before you type:

```
Here is our app and the demo scenario we plan 
to show on Friday: [describe the scenario]

Write us a 30-second spoken introduction to 
the demo — what we say out loud before we 
type anything into the app.

It should:
- Name the specific person we built this for
- Describe the exact moment they were stuck 
  before our app existed
- Explain in one sentence what our app does 
  differently

Plain language. No jargon. Something a 
17-year-old can say confidently in front 
of city officials and investors.
```

Practice saying it out loud twice before you leave today.
