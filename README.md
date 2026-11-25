# ProCura

ProCura is a React application built with Vite. It includes a landing page, dashboard, patient information, profile, settings, and a shared application layout.

## Requirements

- [Node.js](https://nodejs.org/) (npm is included)
- [Git](https://git-scm.com/)
- [GitHub CLI](https://cli.github.com/) for creating pull requests from the command line (optional)

## Get started

Clone the repository, install its dependencies, and start the development server:

```powershell
git clone https://github.com/hadymohamed1371/ProCura.git
cd ProCura
npm install
npm run dev
```

Vite prints the local URL in the terminal. To check a production build or run the linter:

```powershell
npm run build
npm run lint
```

## Project structure

```text
ProCura/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── icons/
    │   ├── images/
    │   └── logos/
    ├── components/
    │   ├── Layout/
    │   │   ├── components/
    │   │   │   ├── Auth_Layout.jsx
    │   │   │   └── Layout.jsx
    │   │   └── stylesheets/
    │   │       ├── Auth_Layout.css
    │   │       └── Layout.css
    │   ├── badge/
    │   │   ├── components/
    │   │   │   └── Badge.jsx
    │   │   ├── stylesheets/
    │   │   │   └── Badge.css
    │   │   └── README/
    │   │       └── Badge_README.md
    │   ├── button/
    │   │   ├── Button.jsx
    │   │   ├── stylesheets/
    │   │   │   └── Button.css
    │   │   └── README/
    │   │       └── Button_README.md
    │   ├── disease_navbar/
    │   │   ├── Disease_Navbar.jsx
    │   │   ├── Disease_Navbar.css
    │   │   └── Disease_Navbar_README.md
    │   ├── footer/
    │   │   ├── components/
    │   │   │   └── Footer.jsx
    │   │   └── stylesheet/
    │   │       └── Footer.css
    │   ├── head_title/
    │   │   ├── Head_Title.jsx
    │   │   ├── stylesheets/
    │   │   │   └── Head_Title.css
    │   │   └── README/
    │   │       └── Head_Title_README.md
    │   ├── navbar/
    │   │   ├── Navbar.jsx
    │   │   ├── Navbar.css
    │   │   └── Navbar_README.md
    │   ├── section/
    │   │   ├── Section.jsx
    │   │   ├── stylesheets/
    │   │   │   └── Section.css
    │   │   └── README/
    │   │       └── Section_README.md
    │   └── vital/
    │       ├── components/
    │       │   └── Vital.jsx
    │       ├── stylesheets/
    │       │   └── Vital.css
    │       └── README/
    │           └── Vital_README.md
    └── pages/
        ├── landing/
        │   ├── Landing_Page.jsx
        │   └── sections/
        │       ├── components/
        │       │   ├── About.jsx
        │       │   ├── Features.jsx
        │       │   └── Get_Started.jsx
        │       └── stylesheets/
        ├── sign_in/
        │   ├── components/
        │   │   └── Sign_In.jsx
        │   └── stylesheets/
        ├── sign_up/
        │   ├── components/
        │   │   └── Sign_Up.jsx
        │   └── stylesheets/
        ├── dashboard/
        │   ├── Dashboard.jsx
        │   ├── sections/
        │   │   ├── components/
        │   │   └── stylesheets/
        │   └── subpages/
        │       ├── components/
        │       └── stylesheets/
        ├── patient_info/
        ├── profile/
        ├── edit_profile/
        └── settings/
```

- `src/main.jsx` starts the React application.
- `src/App.jsx` defines the application routes. `/get-started`, `/sign-in`, and `/sign-up` use `Auth_Layout`; `/` and the dashboard, patient information, settings, and profile routes use the shared `Layout`.
- `src/components/` contains reusable interface components and the shared layout. Some component code and stylesheets are organized into `components/` and `stylesheets/` subfolders.
- `src/pages/` contains page-level components.
- `src/assets/` contains images, logos, and icons.

## Create a branch, push changes, and open a pull request

Run these commands from the repository directory in PowerShell, Command Prompt, or another terminal. Start from the latest `main` branch and replace the example branch name and commit message with ones that describe your changes.

```powershell
git switch main
git pull origin main
git switch -c feature/short-description

# After making your changes:
git status
git add .
git commit -m "Describe your changes"
git push -u origin feature/short-description
```

If you have authenticated with GitHub CLI (`gh auth login`), create a pull request targeting `main`:

```powershell
gh pr create --base main --title "Describe your changes" --body "Summarize what changed and why."
```

Alternatively, after pushing your branch, open the repository on GitHub and use the prompt to create a pull request. Select `main` as the base branch and your feature branch as the compare branch.
