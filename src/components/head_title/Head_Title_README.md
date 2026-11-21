# Head_Title.jsx

## Folder Structure

```text
src/
└── components/
    └── head_title/
        ├── Head_Title.jsx
        ├── Head_Title.css
        └── Head_Title_README.md
```

Head_Title is a self-closing component and it provides a title used for page titles and section titles, with optional subtitles and logos.

## Basic Usage

```jsx
import Head_Title from './components/head_title/Head_Title';
import Home_Page_Title_logo from './assets/icons/Home_Page_Title_logo.svg'

function Example() {
  return (
    <Head_Title 
    title={'Home'}
    pageTitle={true}
    subtitle={'The home page of the project'}
    logo={Home_Page_Title_logo}
    />
  );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `string` | — | Yes | The actual text to be displayed as the title. |
| `pageTitle` | `boolean` | false | No | Controls whether the title/subtitle font size and logo/icon width will be larger for a page title or smaller for a section title. |
| `subtitle` | `string` | — | No | Adds a subtitle under the main title text.  |
| `logo` | `string` | — | No | Adds a logo/icon for the title of the page/section. |

## Examples / Variations
```jsx
    // A page title with a subtitle and a logo
    <Head_Title 
    title={'Profile'}
    pageTitle={true}
    subtitle={'Your personal information and health details'}
    logo={Profile_Page_Title_logo}
    />

    // A section title with a subtitle and a logo
    <Head_Title 
    title={'Address'}
    subtitle={'Your personal information and health details'}
    logo={Profile_Page_Title_logo}
    />

    // A section title without a subtitle or a logo
    <Head_Title 
    title={'Profile'}
    />
```

## Notes & Caveats

### Supported Cases
- `title` by itself renders a section-style title.
- Add `subtitle` and/or `logo` to a title as needed.
- Set `pageTitle={true}` to use the larger page-title styling. A subtitle and logo are optional.
- If `pageTitle` is omitted or `false`, the component uses section-title styling.

### Caveats
- Provide `title` for a meaningful heading. Although the component does not enforce it, omitting `title` leaves an empty title element.
- `pageTitle` changes the title, subtitle, and logo sizing; it does not add a subtitle or logo automatically.

### Prefered Prop Combinations
If these props were passed, it will give:
- `title`, `pageTitle`, `subtitle`, `logo`: A page title with a subtitle and a logo.
- `title`, `pageTitle`, `subtitle`: A page title with only a subtitle.
- `title`, `pageTitle`, `logo`: A page title with only a logo.
- `title`, `subtitle`, `logo`: A section title with a subtitle and a logo.
- `title`, `subtitle`: A section title with only a subtitle.
- `title`, `logo`: A section title with only a logo.
- `title`: A section title without subtitle and a logo.

### Prop Combinations To Avoid
- `pageTitle`, `subtitle`, `logo`: A large subtitle and a logo.
- `subtitle`, `logo`: A small subtitle and a logo.
- `pageTitle`, `subtitle`: A large subtitle.
- `pageTitle`, `logo`: A large logo.
- `subtitle`: A small subtitle.
- `logo`: A small logo.
