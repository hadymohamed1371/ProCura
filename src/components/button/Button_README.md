# Button

`Button` is a reusable button component with configurable content, appearance,
native button type, disabled state, and click handler.

## Basic usage

```jsx
import Button from './components/button/Button'

function Example() {
  return (
    <Button
      buttonContent="Click me"
      actionOnClick={() => console.log('Clicked')}
    />
  )
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `buttonContent` | `React.ReactNode` | — | Yes | Content displayed inside the button. |
| `appearance` | `string` | `"default"` | No | `"default"` uses the blue style. Any other value uses the grey style. |
| `disabled` | `boolean` | `false` | No | Disables the button and makes it semi-transparent, regardless of appearance. |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | No | Native HTML button type, controlling its behavior in a form. |
| `actionOnClick` | `function` | — | No | Callback invoked when the button is clicked. |

## Examples

### Blue button with a custom click action

```jsx
<Button
  buttonContent="Open profile"
  actionOnClick={openProfile}
/>
```

### Grey button

Any `appearance` value other than `"default"` selects the grey style:

```jsx
<Button
  appearance="secondary"
  buttonContent="Cancel"
/>
```

### Form submit button

```jsx
<form onSubmit={handleSubmit}>
  <Button
    type="submit"
    buttonContent="Save"
  />
</form>
```

### Disabled button

The disabled state applies to either appearance:

```jsx
<Button
  appearance="secondary"
  disabled
  buttonContent="Unavailable"
/>
```

## Notes

- `type` and `actionOnClick` are separate props and can be used together. `type`
  controls the button's native form behavior; `actionOnClick` handles a click.
- Use `type="button"` for a custom click action inside a form when it should not
  submit the form. This is the default.
- Use `type="submit"` when the button should submit its containing form. The
  form's `onSubmit` handler is responsible for handling that submission.
- A submit button does not, by itself, send data to a backend.
- `buttonContent` accepts any renderable React content, not only a string.
