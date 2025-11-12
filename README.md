# Niyo Constructions — Website

Static site for Niyo Constructions (mobile handyman/construction services in Tasmania).

Quick Git + Netlify deploy

1. Initialize repo and commit
```bash
cd /Users/jaydennube/Documents/local_code/construction-handyman-website
git init
git add .
git commit -m "Initial commit — Niyo Constructions site"
# ensure main branch
git branch -M main
```

2. Create a remote repo (GitHub) and push
- Option A (GitHub web): create an empty repo on github.com (name: niyo-constructions), then:
```bash
git remote add origin git@github.com:<your-username>/niyo-constructions.git
git push -u origin main
```
- Option B (gh CLI):
```bash
gh repo create niyo-constructions --public --source=. --remote=origin --push
```

3. Connect to Netlify
- Go to https://app.netlify.com/sites and click "New site" → "Import from Git".
- Choose Git provider (GitHub), authorize if required, select the `niyo-constructions` repo.
- Branch to deploy: `main`
- Build command: (leave blank)
- Publish directory: `.` (root)
- Deploy site. Netlify will auto-deploy on push.

4. Netlify Forms
- The contact form in index.html uses Netlify Forms (name="contact", data-netlify="true").
- In your Netlify site dashboard, open "Forms" to view submissions and configure email notifications or integrations.

Notes
- Update contact email in js/main.js if you want email forwarding instead of Netlify notifications.
- If you prefer drag-and-drop deploy: you can zip the site folder and drag it into Netlify Sites dashboard (good for quick testing).

Contact
- Owner: Jayden Nube
- Phone: 0481 213 975
- Service area: Tasmania (mobile business)

Deploy to Netlify (recommended, free):
1. Create a Netlify account and "New site from Git".
2. Connect this repository (or drag-and-drop the site folder into Netlify sites dashboard).
3. No build command required; publish directory is repository root.
4. Netlify Forms will automatically detect the contact form (form name="contact", data-netlify="true").
5. In Netlify dashboard, configure notification emails or integrations for form submissions.

Notes:
- Update contact email in site where needed (currently shown number is 0481 213 975).
- You can use Ventra IP instead if you prefer traditional hosting.

Customize:
- Update contact email in js/main.js (mailto).
- Replace logo in assets/logo.svg.

Quick next steps you ran locally
- You already initialized and committed the site locally:
  git init
  git add .
  git commit -m "Initial commit — Niyo Constructions site"

If you want the commit author to use your real name/email (recommended)
1) Set global identity (replace with your details):
```bash
git config --global user.name "Jayden Nube"
git config --global user.email "you@example.com"
```
2) Amend the existing commit to reset the author (keeps the same commit message and content):
```bash
git commit --amend --reset-author --no-edit
```

Create & push a GitHub repo (recommended: gh CLI)
- Install gh: https://cli.github.com/manual/installation
- Authenticate and create repo, then push:
```bash
gh auth login                # follow prompts
gh repo create niyo-constructions --public --source=. --remote=origin --push
```
This creates a GitHub repo, adds `origin`, and pushes your `main` branch.

Alternative: Create repo via GitHub web UI and push manually
1. On github.com create a new repo named `niyo-constructions` (leave it empty).
2. Then in your terminal:
```bash
# using HTTPS
git remote add origin https://github.com/<your-username>/niyo-constructions.git
git push -u origin main

# OR using SSH (if you set up SSH keys)
git remote add origin git@github.com:<your-username>/niyo-constructions.git
git push -u origin main
```

Connect to Netlify (after repo is on GitHub)
1. Go to https://app.netlify.com/sites -> "New site" -> "Import from Git".
2. Choose Git provider (GitHub), authorize and select `niyo-constructions`.
3. Branch to deploy: `main`
4. Build command: (leave blank)
5. Publish directory: `.`
6. Deploy site — Netlify will auto-deploy on future pushes.
