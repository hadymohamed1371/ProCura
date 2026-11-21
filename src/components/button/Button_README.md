# Button.jsx

## Folder Structure

```text
src/
└── components/
    └── button/
        ├── Button.jsx
        ├── Button.css
        └── Button_README.md
```

Button is a self-closing component that provides a button that provides an action based on its type.

## Basic Usage

```jsx
import Button from './components/button/Button'

function Example() {
    return (
        <Button
        type="button"
        buttonContent={'Submit'}
        />
    );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `action` | `button`\| `submit`\| `reset` | `button` | No | the type of the button that determines the buttons action. |
| `buttonContent` | `string` | — | Yes | The text that the button will display. |

## Examples / Variations
```jsx
    // A regular button that says "Click me"
    <Button
    type="button"
    buttonContent={'Click me'}
    />

    // A form submit button that says "Save"
    <form method='POST'>
        <Button
        type="submit"
        buttonContent={'Save'}
        />
    </form>

    // A form button that resets the form
    <form method='GET'>
        <Button
        type="reset"
        buttonContent={'Reset'}
        />
    </form>
```

## Notes & Caveats

### Supported Cases
- Use `action="button"` for a button that does not submit or reset a form.
- Use `action="submit"` inside a form to trigger that form's submit behavior.
- Use `action="reset"` inside a form to reset its controls.
- If `type` is omitted, it defaults to `"button"`.

### Caveats
- A submit button does not itself send data to a backend. The form must have an `onSubmit` handler or a valid `action`.
- The form's `method` controls native form submission; `Button` does not set or override it.
- Reset behavior is straightforward for native, uncontrolled inputs. Controlled React inputs may also require resetting their React state.
- `buttonContent` can be any renderable React content, not only a string.
