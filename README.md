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
