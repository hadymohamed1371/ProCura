# Section.jsx

## Folder Structure

```text
src/
└── components/
    └── section/
        ├── Section.jsx
        ├── Section.css
        └── Section_README.md
```

Section is a wrapper component that renders a card with a background fill, rounded corners, padding, and optional title, subtitle, title logo, badge, curve image.

## Basic Usage

```jsx
import Section from './components/section/Section'
import Section_Title_icon from './assets/icons/Section_Title_icon.svg'
import Section_Card_Curve from './assets/images/Section_Card_Curve.svg'

function Example() {
    return (
        <Section
        title="Section title"
        logo={Section_Title_icon}
        positiveBadgeContent="All ok"
        curve={Section_Card_Curve}
        >
            {/* Section content */}
        </Section>
    );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `string` | — | No | The text to be displayed as the section's title in he section heading text. |
| `subtitle` | `string` | — | No | The text to be displayed as the section's subtitle in he section heading text. |
| `logo` | `string` | — | No | Adds a logo/icon for the title of the section. |
| `positiveBadgeContent` | `string` | — | No | If passed, it adds a green badge with the text that was passed in this prop. |
| `negativeBadgeContent` | `string` | — | No | If passed, it adds a red badge with the text that was passed in this prop. |
| `curve` | `string` | — | No | Displays the supplied SVG curve at the bottom of the section. |

## Examples / Variations
```jsx
    // A section with a title, a logo, a green badge, and an svg curve image
    <Section
    title="Section title"
    logo={Section_Title_icon}
    positiveBadgeContent="All ok"
    curve={Section_Card_Curve}
    >
        {/* Section content */}
    </Section>
    
    // A section with a title, a logo, and a green badge
    <Section
    title="Section title"
    logo={Section_Title_icon}
    positiveBadgeContent="All ok"
    >
        {/* Section content */}
    </Section>

    // A section with a title, a logo, a red badge
    <Section
    title="Section title"
    logo={Section_Title_icon}
    negativeBadgeContent="Emergency"
    >
        {/* Section content */}
    </Section>

    // A section with a title, and a red badge
    <Section
    title="Section title"
    negativeBadgeContent="Emergency"
    >
        {/* Section content */}
    </Section>

    // A section with a title
    <Section
    title="Section title"
    >
        {/* Section content */}
    </Section>
    
    // A section with a green badge.
    <Section
    positiveBadgeContent="All ok"
    >
        {/* Section content */}
    </Section>
    
    // A section without a title, a logo, a green badge, or an svg curve image
    <Section>
        {/* Section content */}
    </Section>
```

## Notes & Caveats

### Supported Cases
- `title` can be used by itself, with `logo`, or with either badge.
- Either `positiveBadgeContent` or `negativeBadgeContent` can be used with or without a title.
- `curve` can be added with any of the cases above; it renders an image after the section content.

### Caveats
- If both `positiveBadgeContent` and `negativeBadgeContent` are passed, only the positive badge is rendered.
