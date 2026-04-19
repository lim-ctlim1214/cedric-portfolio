[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/g6fzZnsv)
# Front-End Challenge 3.0: The Responsive Portfolio (Grid + Flexbox)

## GitHub Classroom Workflow
This activity uses **GitHub Classroom**. You are already viewing **your own Classroom repository** (created after you accepted the invite).

1. Clone this repository to your computer.
2. Build your portfolio locally using VS Code (or your preferred editor).
3. Commit and **push your changes** back to this same repository.
4. Submit **your live URL** in the Canvas LMS assignment for this activity.

*Your instructor will check your work by reviewing the files and commit history in your Classroom repository.*

---

## Objective
You will build a clean, responsive Portfolio V2 from scratch. You have complete creative freedom over the design and layout, but you must apply the **Macro vs. Micro Rule**:
* **CSS Grid** is for the 2D Macro layout (the page architecture).
* **CSS Flexbox** is for the 1D Micro layout (the components inside the grid).

---

## 🤖 AI Co-Pilot Policy: "Sir Chris"
Sir Chris is your primary Teaching Assistant for this assignment, though you are always free to use YouTube, MDN, or other online resources to supplement your learning.

🔗 **Access the Gem here:** [Sir Chris AI Gem](https://gemini.google.com/gem/1VYG7QXmlWVzLWZfjFX1L-Slflf8Krvz-?usp=sharing)

**How to use the 3 Modes (Practical Examples):**
1. **Mode 3 (Build & Plan):** Use this to design your site before writing code. 
   * *Prompt:* "I am starting my portfolio. Act as my design partner. Help me pick a modern color palette, suggest two Google Fonts that pair well, and help me plan my CSS Grid wireframe."
   * *Pro-Tip:* If your planned layout becomes too difficult to code, ask Sir Chris: *"This grid is too complex for me right now. Help me simplify the design into something more manageable."*
2. **Mode 2 (Audit):** Use this to debug a broken layout.
   * *Prompt:* "Here is my CSS for my project cards. They aren't wrapping. Audit my code and tell me what property I am missing."
3. **Mode 1 (Learn):** Use this to learn concepts (including Git, SSH, or JavaScript!).
   * *Prompt:* "I forgot how the `fr` unit works in CSS Grid. Can you explain it?" or *"How do I set up an SSH key for GitHub?"*

*Rule: Sir Chris will not write your code. Be prepared to defend every line of code you write in your oral exam.*

---

## 🎨 Design & Inspiration
Do not suffer from "blank page syndrome." Look at these professional portfolios to see how developers structure their grid layouts. 
*Note: You have total freedom over your design. Build something unique!*
- [Brittany Chiang](https://brittanychiang.com/)
- [Jhey Tompkins](https://www.jhey.dev/)
- [Adam Hartwig](https://www.adamhartwig.co.uk/)
- [More Examples (WeAreDevelopers)](https://www.wearedevelopers.com/en/magazine/161/web-developer-portfolio-examples)

---

## Required Workflow

1. **Phase 0 (Plan):** Open Sir Chris (Mode 3). Tell him your vibe. Ask him to help you pick colors, fonts, and plan your grid layout. Do not write code yet.
2. Clone using **SSH** (not HTTPS).
   * *SSH Setup Guide:* [Read Here](https://docs.google.com/document/d/1R_d8WqIQC4BN1vgmfVaUUna0FpH5hPsIBec3amjBmIk/edit?tab=t.fvowedjc7b0e)
   * *Git Commands Guide:* [Read Here](https://docs.google.com/presentation/d/e/2PACX-1vSbiR5Z2yHAHp76PPpM53JQFhGWMjZ-au2RSEa2cwBx30GwjFdPS8TKAUaX2ZAWNlB20RCsNwFr7U_f/pub?start=false&loop=false&delayms=3000&slide=id.g3a2f6edda82_0_70)
3. Create your `index.html` and `css/styles.css` files from scratch.
4. Commit changes in atomic batches as you build each section.
5. Push to the `main` branch.
6. Enable **GitHub Pages** to deploy your site.
7. Submit your **live URL** in Canvas.

*(Note: If you get stuck on Git commands or SSH errors, ask Sir Chris in Mode 1 for help!)*

---

## Core Tasks

### Task 1: The Macro Layout (CSS Grid)
Design your own custom page architecture using CSS Grid. 
- *Requirement:* You must use `display: grid` on your main layout container(s).
- *Requirement:* You must utilize the `fr` (fractional) unit and the `gap` property to manage spacing and tracks.

### Task 2: The Micro Layout (CSS Flexbox)
Inside your grid areas, build your UI components using Flexbox. 
- *Requirement:* You must use `display: flex` for at least **two distinct components** (e.g., a navigation bar, a row of social links, a gallery of project cards, or tag chips). 

### Task 3: Responsive Design (Media Queries)
Your portfolio must adapt to mobile devices.
- *Requirement:* Write at least one `@media` query (e.g., `max-width: 768px`).
- *Requirement:* On mobile screens, your complex CSS Grid layout must gracefully collapse into a mobile-friendly structure (like stacking into a single column).

### Task 4: Bonus (JavaScript Animations)
If you want to stretch your skills, you are allowed to add JavaScript for interactivity (like a mobile menu toggle or scroll animations). If you don't know JavaScript yet, use Sir Chris (Mode 1) to learn the basics!

---

## Git Policy (Strict)
You must use atomic commits. 
*Example:* `git commit -m "feat: add flexbox styling to project cards"`

**Penalty rule:** Committing the entire project at the very end in one massive chunk results in **-50 points**.

---

## Deployment (GitHub Pages)
You must host the final website so it is publicly accessible.
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment**, set the Source to **Deploy from a branch**.
4. Select the **`main`** branch and the **`/ (root)`** folder, then click **Save**.
5. Wait 1-2 minutes, refresh the page, and copy your live URL at the top.

---

## Submission (Canvas)
Submit your **Live URL** (from GitHub Pages or your chosen host) in Canvas.
