# AMBOS — GitHub Pages website

Static, dependency-free website for AMBOS, including:

- Home/product page based on the AMBOS application visual language
- Terms of Service
- Privacy Policy
- Contact page
- Data deletion instructions
- Responsive mobile navigation
- AMBOS SVG/PNG icon assets
- GitHub Actions deployment to GitHub Pages
- `.nojekyll` for direct static hosting

## 1. One required edit before public app review

Open:

```text
assets/js/site-config.js
```

Replace:

```js
contactEmail: "levite_capitons_2b@icloud.com"
```

with the public support/privacy email you want TikTok reviewers and users to see.

## 2. Publish on GitHub Pages

1. Create a GitHub repository, for example `ambos-site`.
2. Put the entire contents of this folder at the repository root.
3. Push/commit to the `main` branch.
4. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open the **Actions** tab and wait for `Deploy AMBOS to GitHub Pages` to finish.

The workflow is already included at:

```text
.github/workflows/pages.yml
```

No Node.js, Jekyll, package manager, build command or secret is required.

## 3. URLs to give TikTok

If your repository is `ambos-site`, the URLs will normally be:

```text
Website URL:
https://YOUR_GITHUB_USERNAME.github.io/ambos-site/

Terms of Service URL:
https://YOUR_GITHUB_USERNAME.github.io/ambos-site/terms/

Privacy Policy URL:
https://YOUR_GITHUB_USERNAME.github.io/ambos-site/privacy/

Data deletion URL:
https://YOUR_GITHUB_USERNAME.github.io/ambos-site/data-deletion/
```

GitHub Pages project-site subpaths are supported because this website uses relative asset and navigation URLs.

## 4. TikTok ownership verification file

If TikTok asks you to upload a verification/signature file:

1. Download the exact file TikTok gives you.
2. Place it at the repository root, next to `index.html`.
3. Commit and push.
4. Wait for the GitHub Pages workflow to finish.
5. The file should then be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/ambos-site/FILENAME_FROM_TIKTOK
```

Do not rename or modify the verification file unless TikTok explicitly instructs you to.

## 5. Optional custom domain

A custom domain is not required for the site to work. If you later buy one, configure it in **Settings → Pages → Custom domain**. Do not add a `CNAME` file until you know the final domain.

## Structure

```text
.
├── .github/workflows/pages.yml
├── .nojekyll
├── index.html
├── 404.html
├── robots.txt
├── terms/index.html
├── privacy/index.html
├── contact/index.html
├── data-deletion/index.html
└── assets/
    ├── css/styles.css
    ├── js/site-config.js
    ├── js/site.js
    ├── icons/
    └── images/ambos-app.png
```

## Legal note

The Terms and Privacy pages are a practical starting point tailored to the described AMBOS desktop workflow. They are not a substitute for professional legal advice. Before a production launch, update them if AMBOS uses a server/backend, analytics, cookies, cloud storage, AI providers, payment services or any other processor not accurately described by the current text.
