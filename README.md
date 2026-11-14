# ProCura

ProCura is a React application built with Vite. It currently includes a dashboard and a shared page layout.

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
    │   │   └── Layout.jsx
    │   └── Navbar.jsx
    └── pages/
        ├── dashboard/
        │   ├── Dashboard.jsx
        │   └── Dashboard.css
        └── profile_info/
            └── Profile_Info.jsx
```

- `src/main.jsx` starts the React application.
- `src/App.jsx` defines the application routes.
- `src/components/` contains reusable interface components and the shared layout.
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
