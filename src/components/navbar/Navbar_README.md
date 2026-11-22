# Navbar.jsx

## Folder Structure

```text
src/
└── components/
    └── navbar/
        ├── Navbar.jsx
        ├── Navbar.css
        └── Navbar_README.md
```

Navbar is a self-closing component that provides a navigaation bar to navigate between different pages of the website.

## Basic Usage

```jsx
import Navbar from './components/navbar/Navbar'

function Example() {
    return (
        <Navbar />
    );
}
```

## Props

Navbar does not accept props; its labels, icons, and destinations are defined within the component.

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| — | — | — | — | This component has no configurable props. |

## Examples / Variations

```jsx
// Render the application's navigation bar.
<Navbar />
```

## Notes & Caveats

### Supported Cases
- Render `Navbar` inside the application's React Router provider.
- The Dashboard link is active at `/` and on dashboard routes.
- Patient Info, Settings, and Profile navigate to their configured paths.

### Caveats
- The navigation destinations and labels are currently defined in the component; there are no props for customizing them.
- The brand logo links to `/`.
- The component depends on the application's router and corresponding route definitions.
