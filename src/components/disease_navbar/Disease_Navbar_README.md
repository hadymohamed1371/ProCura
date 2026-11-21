# Disease_Navbar.jsx

## Folder Structure

```text
src/
└── components/
    └── disease_navbar/
        ├── Disease_Navbar.jsx
        ├── Disease_Navbar.css
        └── Disease_Navbar_README.md
```

Disease_Navbar is a self-closing component that provides a navigaation bar to navigate between different sub-routes containing different health aspects.

## Basic Usage

```jsx
import Disease_Navbar from './components/disease_navbar/Disease_Navbar'

function Example() {
    return (
        <Disease_Navbar
        routeStart={'/dashboard'}
        />
    );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `routeStart` | `string` | — | Yes | the path of the page that will diverge to sub-routes. |

## Examples / Variations
```jsx
    // A disease navigation bar that routes to a subpages with paths starting with /dashboard
    <Disease_Navbar
    routeStart={'/dashboard'}
    />

    // A disease navigation bar that routes to a subpages with paths starting with /patient-info
    <Disease_Navbar
    routeStart={'/patient-info'}
    />
```

## Notes & Caveats

### Supported Cases
- Pass `routeStart="/dashboard"` to show the dashboard heading and General link.
- Pass `routeStart="/patient-info"` to show the Patient Info heading.
- Disease links are built by appending fixed disease paths to `routeStart`.

### Caveats
- The component uses React Router links and must be rendered inside a router.
- The application must define routes matching the generated links.
- Only `/dashboard` and `/patient-info` receive their corresponding page heading. Other `routeStart` values still generate navigation links but do not show either heading.
- The disease destinations are currently fixed in the component; `routeStart` changes their prefix, not the available disease list.
