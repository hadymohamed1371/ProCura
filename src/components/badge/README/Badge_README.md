# Badge.jsx

## Folder Structure

```text
src/
└── components/
    └── badge/
        ├── components/
        │   └── Badge.jsx
        ├── stylesheets/
        │   └── Badge.css
        └── README/
            └── Badge_README.md
```

Badge is a self-closing component that provides a visual badge that shows the state of the health aspect through a positive state or negative state.

## Basic Usage

```jsx
import Badge from './components/badge/components/Badge'

function Example() {
    return (
        <Badge 
        badgeContent="Normal"
        state="positive"
        />
    );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `badgeContent` | `string` | — | Yes | The text that the badge will display. |
| `state` | `string` | — | Yes | previews the badge in a green theme if the value passed to this prop was `'positive'`, a red theme if the value passed to this prop was `'negative'`, or a grey neutral theme if the value passed to this prop was anything else. |

## Examples / Variations
```jsx
    // A green themed badge displaying "Good"
    <Badge 
    badgeContent="Good"
    state="positive"
    />

    // A red themed badge displaying "Abnormal"
    <Badge 
    badgeContent="Abnormal"
    state="negative"
    />
```

## Notes & Caveats

### Supported Cases
- Use `state="positive"` for a positive-style badge.
- Use `state="negative"` for a negative-style badge.
- `badgeContent` is displayed as the badge text.

### Caveats
- Pass `state` as either `"positive"` or `"negative"`; other values have a neutral style.
- The component displays the supplied content and does not determine the health state itself.
