# Button.jsx

## Folder Structure

```text
src/
└── components/
    └── button/
        ├── Button.jsx
        ├── stylesheets/
        │   └── Button.css
        └── README/
            └── Button_README.md
```

Button is a reusable button component with configurable content, optional left and right logos, appearance, native button type, disabled state, and click handler.

## Basic Usage

```jsx
import Button from './components/button/Button'

function Example() {
  return (
    <Button
      buttonContent="Click me"
      logoLeft={editIcon}
      actionOnClick={handleClick}
    />
  )
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `buttonContent` | `React.ReactNode` | — | Yes | Content displayed inside the button. |
| `logoLeft` | `string` | — | No | Image source displayed before the button content. |
| `logoRight` | `string` | — | No | Image source displayed after the button content. |
| `appearance` | `string` | `"default"` | No | `"default"` uses the blue style. Any other value uses the grey style. |
| `disabled` | `boolean` | `false` | No | Disables the button and makes it semi-transparent, regardless of appearance. |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | No | Native HTML button type, controlling its behavior in a form. |
| `actionOnClick` | `function` | — | No | Callback invoked when the button is clicked. |

## Examples / Variations

**Blue button with a custom click action and a left logo**

```jsx
<Button
  logoLeft={editIcon}
  buttonContent="Open profile"
  actionOnClick={openProfile}
/>
```

**Grey button**

Any `appearance` value other than `"default"` selects the grey style:

```jsx
<Button
  appearance="secondary"
  buttonContent="Cancel"
/>
```

**Form submit button**

```jsx
<form onSubmit={handleSubmit}>
  <Button
    type="submit"
    buttonContent="Save"
  />
</form>
```

**Disabled button**

The disabled state applies to either appearance:

```jsx
<Button
  appearance="secondary"
  disabled
  buttonContent="Unavailable"
/>
```

## Notes & Caveats

### Supported Cases

- `buttonContent` accepts any renderable React content, not only a string.
- `logoLeft` and `logoRight` are optional and render on either side of `buttonContent`.
- `type` defaults to `"button"`, so a button with a custom click action does not submit a containing form by default.
- Use `type="submit"` or `type="reset"` when the button should perform that native form behavior.

### Caveats

- `type` and `actionOnClick` can be used together; if they are, the native form behavior and click handler may both run.
- A submit button does not, by itself, send data to a backend. The form's `onSubmit` handler is responsible for handling submission.
- Any `appearance` value other than `"default"` selects the grey style.
